import React from 'react';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import './CardEditorPage.css';

export default function CardProjectPage({ project }) {
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
    </Card>
  );
}
