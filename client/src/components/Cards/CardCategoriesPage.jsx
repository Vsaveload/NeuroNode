import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';

export default function CardProjectPage({ category }) {
  const navigate = useNavigate();

  const toProjects = (categoryID) => {
    const path = `/projectselect/${categoryID}`;
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
        src={category.img}
        alt="Not provided"
      />
      <CardBody>
        <CardTitle tag="h5">
          {category.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        />
          <CardText>
            {category.desc}
          </CardText>
        <Button onClick={() => toProjects(category.id)}>See projects</Button>
      </CardBody>
    </Card>

  );
}
