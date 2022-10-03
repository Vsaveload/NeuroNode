import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import CardProjectPage from '../Cards/CardProjectPage';
import './MyProjectPage.css';

export default function MyProjectPage() {
  const [currentUserProjects, setCurrentUserProjects] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const signup = useSelector((state) => state.signup);

  useEffect(() => {
    if (signup) {
      axios(`http://localhost:3001/myprojects/${signup?.id}`)
        .then((res) => {
          console.log('Res.Data:', res.data);
          setCurrentUserProjects(res.data);
        })
        .catch(console.log);
    }
  }, [signup]);

  return (
    <>
      <h1>My Project</h1>
      <div className="d-flex" style={{ flexDirection: 'column' }}>
        {currentUserProjects?.map((project) => (
          <CardProjectPage
            key={project.id}
            project={project}
          />
        ))}
        {/* <Button onClick={toCategories}>Back to library</Button> */}
      </div>
      <div>
        <div>
          <Button color="secondary" onClick={() => navigate('/home')} className="btn">Back to home</Button>
        </div>
      </div>
    </>
  );
}
