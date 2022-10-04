import React from 'react';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';

export default function CardProjectPage({ project }) {
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
        />
          <CardText>
            {project.desc}
          </CardText>

      </CardBody>
    </Card>

  );
}
