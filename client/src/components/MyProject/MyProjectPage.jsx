import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { setProjectsAsync } from '../../redux/action/projectActions';
import { setProjectForEditAsync, setProjectForMyProjectsAsync } from '../../redux/action/projectForEditActions';
import CardEditorPage from '../Cards/CardEditorPage';
import Navbar from '../Navbar/NavBar';
import './MyProjectPage.css';

export default function MyProjectPage() {
  // const [currentUserProjects, setCurrentUserProjects] = useState([]);
  // const [projectStat, setProjectStat] = useState([]);
  const [projectStatName, setProjectStatName] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = useSelector((state) => state.signup);
  const currentUserProjects = useSelector((state) => state.project);
  console.log('CUR USER PROJECT', currentUserProjects);

  useEffect(() => {
    if (signup) {
      dispatch(setProjectsAsync(signup.id));
      console.log('axios sent');
    }
  }, [signup]);
  return (
    <div>
      <div className="mainDiv">
        <Navbar style={{ marginTop: '150px' }} page="MY PROJECTS" />
        <div className="myDiv">
          {currentUserProjects && currentUserProjects?.map((project, i) => (
            <>
              {console.log('prpr', project)}
              <CardEditorPage
                key={project.id}
                project={project}
                index={i}
              />
            </>
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
