import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import { deleteProject, setDelete } from '../../redux/action/deleteAction';
import './CardProjectPage.css';

export default function CardProjectPage({ project }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.signup);
  const del = useSelector((state) => state.setDelete);
  const dispatch = useDispatch();

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  const toStatistic = (id) => {
    const path = `/statistics/${id}`;
    navigate(path);
  };
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
          style={{ width: '25rem', height: '15rem' }}
          src={project.img}
          alt="Not provided"
        />
        <CardBody>
          <CardTitle tag="h5">
            {project.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            {project.desc}
          </CardText>
          {user ? (
            <>
              <Button onClick={() => toFirstNode(project.id)} style={{ display: 'flex', justifyContent: 'space-around' }}>Explore project</Button>
              <Button onClick={() => toStatistic(project.id)} style={{ display: 'flex', justifyContent: 'space-around' }}>Statistics</Button>
              <Button onClick={() => toEdit(project.id)} type="submit">Edit</Button>
              <Button
                onClick={() => deleteProject(project.id, dispatch)}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Delete

              </Button>
            </>
          ) : (
            <Button onClick={() => toFirstNode(project.id)} style={{ display: 'flex', justifyContent: 'flex-start' }}>Explore project</Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
