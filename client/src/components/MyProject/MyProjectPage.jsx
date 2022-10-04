import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import CardEditorPage from '../Cards/CardEditorPage';
import './MyProjectPage.css';

export default function MyProjectPage() {
  const [currentUserProjects, setCurrentUserProjects] = useState([]);
  const [projectStat, setProjectStat] = useState([]);
  const [projectStatName, setProjectStatName] = useState([]);
  const navigate = useNavigate();

  const signup = useSelector((state) => state.signup);

  // useEffect(() => {
  //   axios(`http://localhost:3001/stat/byid/${currentUserProjects.id}`)
  //     .then((res) => {
  //       setProjectStat(res.data.newData);
  //       setProjectStatName(res.data.namesArr);
  //     });
  // }, []);

  useEffect(() => {
    if (signup) {
      console.log('axios sent');
      axios.post('http://localhost:3001/myprojects/', { id: signup.id })
        .then((res) => {
          console.log('Res.Data:', res.data);
          setCurrentUserProjects(res.data);
          axios(`http://localhost:3001/stat/byid/${res.data[0].id}`)
            .then((data) => {
              setProjectStat(data.data.newData);
              setProjectStatName(data.data.namesArr);
            });
        })
        .catch(console.log);
    }
  }, [signup]);
  return (

<div className="mainDiv">
      <div className="myDiv">
        {currentUserProjects && projectStatName
         && projectStat && currentUserProjects.map((project) => (
          <CardEditorPage
            key={project.id}
            project={project}
            projectStat={projectStat}
            projectStatName={projectStatName}
          />
        ))}
      </div>
      <div>
        <div className="projectDiv">
          <Button onClick={() => navigate('/home')} className="btn1">Back to home</Button>

        </div>
      </div>
</div>
  );
}
