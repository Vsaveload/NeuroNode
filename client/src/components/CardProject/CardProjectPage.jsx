import React, { useState } from 'react';
import {
  Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink,
} from 'reactstrap';

export default function CardProjectPage() {
  const [cd, setCd] = useState({
    name: '',
    desc: '',
    img: '',
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(cd),
    });

    if (response.ok) {
      setCd({
        name: '',
        desc: '',
        img: '',
      });
    }
  };
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
            Name
          </ListGroupItem>
          <ListGroupItem>
            Description
          </ListGroupItem>
          <ListGroupItem>
            Photo
          </ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink href="#">
            back
          </CardLink>
          <CardLink href="#">
            forward
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
}
