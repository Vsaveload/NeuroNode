/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CardProjectPage from '../Cards/CardProjectPage';

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
  const toCategories = () => {
    navigate('/library');
  };
  return (
    <div className="d-flex" style={{ flexDirection: 'column' }}>
      {projects?.map((project) => (
    <CardProjectPage key={project.id} project={project} />))}
      <Button onClick={toCategories}>Back to library</Button>
    </div>
  );
}
