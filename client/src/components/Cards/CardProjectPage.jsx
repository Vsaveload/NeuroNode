import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import { deleteProject, setDelete } from '../../redux/action/deleteAction';

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
  useEffect(() => {
    dispatch(del());
  }, [project]);
  return (

    <Card
      style={{
        width: '18rem',
      }}
    >
      <img
        style={{ width: '18rem', height: '16rem' }}
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
            <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
            <Button onClick={() => toStatistic(project.id)}>Statistics</Button>
            <Button color="secondary" size="lg" block className="btn">Edit</Button>
            <Button onClick={() => deleteProject(project.id, dispatch)}>Delete</Button>
          </>
        ) : (
          <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
        )}
      </CardBody>
    </Card>
  );
}
