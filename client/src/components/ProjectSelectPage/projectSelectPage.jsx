/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// require('dotenv').config({ path: '../../../../server' });

export default function projectSelectPage() {
  const [projects, setProjects] = useState([]);
  const { categoryId } = useParams();

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/project/bycategory/${categoryId}`)
      .then((res) => setProjects(res.data))
      .catch(console.log);
  }, []);

  const navigate = useNavigate();

  const toProject = (projectId) => {
    const path = `/projectviewer/${projectId}`;
    navigate(path);
  };

  const toLibrary = () => {
    navigate('/library');
  };

  return (
    <div>
      {projects?.map((project) => (
        <Button
          onClick={() => toProject(project.id)}
          key={project.id}
        >
          {project.name}
        </Button>
      ))}
      <Button onClick={toLibrary}>Back to library</Button>
    </div>
  );
}
