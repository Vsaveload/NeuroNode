import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function NodeVeiwerPage() {
  const [node, setNode] = useState([]);
  const { projectId } = useParams();

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/firstnode/${projectId}`)
      .then((res) => setNode(res.data[0]))
      .catch(console.log);
  }, []);

  const nextNode = (nodeId) => {
    axios(`http://localhost:3001/node/${nodeId}`)
      .then((res) => setNode(res.data))
      .catch(console.log);
  };

  const navigate = useNavigate();

  const toProject = (nodeProjectId) => {
    const path = `/projectviewer/${nodeProjectId}`;
    navigate(path);
  };
  return (
    <>
      <div>{node?.content}</div>
      <div>
        {node?.isFirst === false
          ? <Button onClick={() => toProject(node.project_id)}>Finish project</Button>
          : node?.Connections?.map((el) => <Button onClick={() => nextNode(el.to)} key={el.id}>{`${el.from}-${el.to}`}</Button>)}
      </div>
    </>
  );
}
