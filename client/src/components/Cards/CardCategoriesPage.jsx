import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import './CardCategoriesPage.css';

export default function CardProjectPage({ category }) {
  const navigate = useNavigate();

  const toProjects = (categoryID) => {
    const path = `/category/${categoryID}`;
    navigate(path);
  };

  return (
    <div className="cardPage">
      <Card className="card">
        <div className="borderCard">
          <img
            className="img"
            src={category.img}
            alt="Not provided"
            width="350px"
          />
        </div>
        <CardBody className="card-body">
          <CardTitle tag="h5" className="name">
            {category.name}
          </CardTitle>
          <CardSubtitle
            className="title"
            tag="h6"
          />
          <CardText className="desc">
            {category.desc}
          </CardText>
          <Button onClick={() => toProjects(category.id)} className="btn">See projects</Button>
        </CardBody>
      </Card>
    </div>
  );
}
