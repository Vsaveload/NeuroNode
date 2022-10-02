import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink,
} from 'reactstrap';

export default function CardProjectPage() {
  const user = useSelector((state) => state.user);
  const [cd, setCd] = useState([]);
  // const { project } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/project/cards/:${user.id}`)
      .then((res) => res.json)
      .then((data) => setCd(data));
  }, []);

  return (
    <div>
      <h1>Card</h1>
      <Card
        style={{
          width: '18rem',
        }}
      >
        <img
          alt="Card"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
            {category.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
            {category.desc}
            </CardText>
            <Button onClick={() => toProjects(category.id)}>See projects</Button>
          </CardBody>
      </Card>
    </div>
  );
}
