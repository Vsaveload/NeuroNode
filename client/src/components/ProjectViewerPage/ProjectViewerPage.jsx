/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

// require('dotenv').config({ path: '../../../../server' });

export default function ProjectViewerPage() {
  const { id } = useParams();
  const [node, setNode] = useState([]);

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/projects/${id}`)
      .then((res) => setNode(res.data[0]))
      .catch(console.log);
  }, []);

  const nextNode = (nodeId) => {
    axios(`http://localhost:3001/node/${nodeId}`)
      .then((res) => setNode(res.data))
      .catch(console.log);
  };

  return (
    <>
      <div>{node?.content}</div>
      <div>
        {node?.Connections?.map((el) => <Button onClick={() => nextNode(el.to)} key={el.id}>{`${el.from}-${el.to}`}</Button>)}
      </div>
    </>
  );
}
