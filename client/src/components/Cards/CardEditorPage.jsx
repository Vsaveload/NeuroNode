import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import { deleteProject, deleteProjectAsync } from '../../redux/action/projectActions';
import StatisticsPage from '../Statistics/StatisticsPage';
import './CardProjectPage.css';

export default function CardEditorPage({ project, projectStat, projectStatName }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  // const toStatistic = (id) => {
  //   const path = `/statistics/${id}`;
  //   navigate(path);
  // };
  const toEdit = (id) => {
    const path = `/myprojects/${id}`;
    navigate(path);
  };

  // useEffect(() => {
  //   dispatch(deleteProjectAsync());
  // }, []);

  return (
    <div className="cardPage">

      <Card className="card">
        <img
          className="img"
          src={project.img}
          alt="Not provided"
        />
        <CardBody className="card-body">
          <CardTitle className="name">
            <h1>{project.name}</h1>
          </CardTitle>
          <CardSubtitle
            className="title"
          >
            <strong>Card description:</strong>
          </CardSubtitle>
          <CardText className="desc">
            {project.desc}
          </CardText>

          {user ? (
            <>
              <Button onClick={() => toFirstNode(project.id)} className="btn">Explore project</Button>

              <Button onClick={() => toEdit(project.id)} type="submit" className="btn">Edit</Button>
              <Button
                onClick={() => dispatch(deleteProjectAsync(project.id))}
                className="del"
              >
                Delete

              </Button>
            </>
          ) : (
            <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
          )}

        </CardBody>

      </Card>
      <StatisticsPage projectStat={projectStat} projectStatName={projectStatName} />
    </div>
  );
}
