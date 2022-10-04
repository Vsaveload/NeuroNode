import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import { deleteProject, setDelete } from '../../redux/action/deleteAction';
import StatisticsPage from '../Statistics/StatisticsPage';
import './CardProjectPage.css';

export default function CardProjectPage({ project, projectStat, namesArr }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.signup);
  const del = useSelector((state) => state.setDelete);
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

  useEffect(() => {
    dispatch(setDelete());
  }, [project]);

  return (
    <div className="cardPage">
      <Card className="card">
        <img
          className="img"
          src={project.img}
          alt="Not provided"
        />
        <CardBody className="card-body">
          <CardTitle tag="h5" className="name">
            {project.name}
          </CardTitle>
          <CardSubtitle
            className="title"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText className="desc">
            {project.desc}
          </CardText>

          {user ? (
            <>
              <Button onClick={() => toFirstNode(project.id)} className="btn">Explore project</Button>
              {/* <Button
                onClick={() => toStatistic(project.id)}
                className="btn"
              >
                Statistics
              </Button> */}
              <StatisticsPage projectStat={projectStat} namesArr={namesArr} />
              <Button onClick={() => toEdit(project.id)} type="submit" className="btn">Edit</Button>
              <Button
                onClick={() => deleteProject(project.id, dispatch)}
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
    </div>
  );
}
