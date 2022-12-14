/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CardProjectPage from '../Cards/CardProjectPage';
import Navbar from '../Navbar/NavBar';
import './ProjectSelectPage.css';

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
    <div className="select">
      <Navbar style={{ marginTop: '150px' }} page="PROJECTS" />
      <div className="projectPage">
        {projects?.map((project) => (
          <CardProjectPage key={project.id} project={project} />))}
        <Button onClick={toCategories} className="butPsp">Back to library</Button>
      </div>
    </div>
  );
}
