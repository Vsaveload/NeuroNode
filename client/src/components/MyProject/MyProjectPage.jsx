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
  // const { id } = req.session.userSession.id;
  const { signup } = useSelector((state) => state.signup);
  console.log(signup);

  useEffect(() => {
    axios(`http://localhost:3001/myprojects/${signup.id}`)
      .then((res) => {
        setCurrentUserProjects(res.data);
      })
      .catch(console.log);
  }, []);

  // const toProjects = (id) => {
  //   const path = `/project/byid/${id}`;
  //   navigate(path);
  // };
  // };

  return (
    <>
      <h1>My Project</h1>
      <div className="d-flex" style={{ flexDirection: 'column' }}>
        {currentUserProjects?.map((project) => (
          <CardProjectPage key={project.id} project={project} />))}
        {/* <Button onClick={toCategories}>Back to library</Button> */}
      </div>
      <div>
        <div>
          <Button color="secondary" size="lg" block className="btn">Go Project</Button>
          <Button color="secondary" size="lg" block className="btn">Edit</Button>
        </div>
      </div>
    </>
  );
}
