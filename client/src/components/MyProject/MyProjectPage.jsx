import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { setProjectsAsync } from '../../redux/action/projectActions';
import CardEditorPage from '../Cards/CardEditorPage';
import Navbar from '../Navbar/NavBar';
import './MyProjectPage.css';

export default function MyProjectPage() {
  // const [currentUserProjects, setCurrentUserProjects] = useState([]);
  const [projectStat, setProjectStat] = useState([]);
  const [projectStatName, setProjectStatName] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = useSelector((state) => state.signup);
  const currentUserProjects = useSelector((state) => state.project);

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
      dispatch(setProjectsAsync(signup.id));
      // console.log('Res.Data:', res.data);
      // setCurrentUserProjects(res.data);
      axios(`http://localhost:3001/stat/byid/${currentUserProjects[0].id}`)
        .then((data) => {
          setProjectStat(data.data.newData);
          setProjectStatName(data.data.namesArr);
        });
    }
  }, [signup]);
  return (
    <div>
      <div className="mainDiv">
<Navbar />
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
    </div>
  );
}
