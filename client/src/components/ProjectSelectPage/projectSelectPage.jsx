/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// require('dotenv').config({ path: '../../../../server' });

export default function projectSelectPage() {
  const [projects, setProjects] = useState([{
    id: 1, name: 'project1', user_id: 1, desc: 'MUCH WOW!', img: null,
  }, {
    id: 2, name: 'megaProject', user_id: 1, desc: 'WEWWY WOW!', img: null,
  }]);

  const navigate = useNavigate();

  const routeChange = (id) => {
    const path = `/projectviewer/${id}`;
    navigate(path);
  };

  //   const { PORT } = process.env;
  useEffect(() => {
    axios('http://localhost:3001/projects')
      .then((res) => setProjects(res.data))
      .catch(console.log);
  }, []);

  return (
    <div>
      {projects?.map((el) => (
        <Button
          onClick={() => routeChange(el.id)}
          key={el.id}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
}
