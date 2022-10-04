import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import './CardEditorPage.css';

export default function CardProjectPage({ project }) {
  const navigate = useNavigate();

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  return (
    <Card
      className="card"
    >
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
        />
          <CardText className="desc">
            {project.desc}
          </CardText>
      </CardBody>
      <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
    </Card>
  );
}
