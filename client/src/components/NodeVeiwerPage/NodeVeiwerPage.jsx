import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { updateStatisticsAsync } from '../../redux/action/statActions';
import Navbar from '../Navbar/NavBar';
import './NodeVeiwerPage.css';

export default function NodeVeiwerPage() {
  const [node, setNode] = useState([]);
  const { projectId } = useParams();
  const dispatch = useDispatch();

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/node/first/${projectId}`)
      .then((res) => setNode(res.data[0]))
      .catch(console.log);
  }, []);

  const nextNode = async (to, from, id) => {
    const data = { to, from, id };
    console.log('ДОБАВИЛ-------------------->', data);
    await fetch('http://localhost:3001/stat/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    axios(`http://localhost:3001/node/byid/${to}`)
      .then((res) => setNode(res.data))
      .catch(console.log);
  };

  const navigate = useNavigate();

  const toProject = (nodeProjectId) => {
    dispatch(updateStatisticsAsync(nodeProjectId));
    const path = `/category/${nodeProjectId}`;
    navigate(path);
  };

  return (
    <div className="node">
      <Navbar style={{ marginTop: '150px' }} />
      <>
        <div className="nodeBox">
          <div className="text"><h1><strong>{node?.content}</strong></h1></div>
        </div>
        <div className="nodeBut">
          {node?.isFirst === false
            ? <Button onClick={() => toProject(node.project_id)}>Finish project</Button>
            : node?.Connections?.map((el) => <Button onClick={() => { console.log('el', el); nextNode(el.to, el.from, projectId); }} key={el.id} className="nbt">{`${el.from}-${el.to}`}</Button>)}
        </div>
      </>
    </div>
  );
}
