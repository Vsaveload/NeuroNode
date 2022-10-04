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
    console.log(signup);
    if (signup) {
      console.log('axios sent');
      axios.post('http://localhost:3001/myprojects/', { id: signup.id })
        .then((res) => {
          console.log('Res.Data:', res.data);
          setCurrentUserProjects(res.data);
        })
        .catch(console.log);
    }
  }, [signup]);
  return (
  <>
      <div className="myDiv">
        {currentUserProjects?.map((project) => (
          <CardProjectPage
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div>
        <div className="projectDiv">
          <Button onClick={() => navigate('/home')} className="btn1">Back to home</Button>
        </div>
      </div>
  </>
  );
}
