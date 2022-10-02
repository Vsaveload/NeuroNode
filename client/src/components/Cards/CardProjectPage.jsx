import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';

export default function CardProjectPage({ project }) {
  const navigate = useNavigate();

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  const toStatistic = (id) => {
    const path = `/statistics/${id}`;
    navigate(path);
  };
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
        <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
        <Button onClick={() => toStatistic(project.id)}>Statistics</Button>
      </CardBody>
    </Card>

  );
}
