import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProjectPage from '../Cards/CardProjectPage';

export default function EditProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/myprojects/${id}`)
      .then((res) => {
        setProject(res.data);
      });
  }, []);

  return (
    <>
      {project.id && <CardProjectPage project={project} />}
    </>

  );
}
