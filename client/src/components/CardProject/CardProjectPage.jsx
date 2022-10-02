import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink,
} from 'reactstrap';

export default function CardProjectPage() {
  const [cd, setCd] = useState([]);
  const { project } = useParams();
  useEffect(() => {
    fetch('http://localhost:3001/cards')
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
            Card Title
          </CardTitle>
          <CardText />
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            {project.name}
          </ListGroupItem>
          <ListGroupItem>
            {project.desc}
          </ListGroupItem>
          <ListGroupItem>
            {project.img}
          </ListGroupItem>
        </ListGroup>
        {/* <CardBody>
          <CardLink href="#"
           onClick={() => (id === 0 ? navigate(`card/${id}`) : navigate(`card/${id - 1}`))}>
            back
          </CardLink>
          <CardLink href="#" onClick={() => navigate(`card/${id + 1}`)}>
            forward
          </CardLink>
        </CardBody> */}
      </Card>
    </div>
  );
}
