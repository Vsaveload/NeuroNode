import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function NodeVeiwerPage() {
  const [node, setNode] = useState([]);
  const { projectId } = useParams();

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/node/first/${projectId}`)
      .then((res) => setNode(res.data[0]))
      .catch(console.log);
  }, []);

  const nextNode = async (nodeId, id) => {
    const data = { id, nodeId };
    await fetch('http://localhost:3001/stat/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    axios(`http://localhost:3001/node/byid/${nodeId}`)
      .then((res) => setNode(res.data))
      .catch(console.log);
  };

  const navigate = useNavigate();

  const toProject = (nodeProjectId) => {
    const path = `/category/${nodeProjectId}`;
    navigate(path);
  };

  return (
    <>
      <div>{node?.content}</div>
      <div>
        {node?.isFirst === false
          ? <Button onClick={() => toProject(node.project_id)}>Finish project</Button>
          : node?.Connections?.map((el) => <Button onClick={() => { console.log('el', el); nextNode(el.to, projectId); }} key={el.id}>{`${el.from}-${el.to}`}</Button>)}
      </div>
    </>
  );
}
