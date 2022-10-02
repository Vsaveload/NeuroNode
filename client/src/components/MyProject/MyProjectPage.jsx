import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import CardProjectPage from '../Cards/CardProjectPage';
import './MyProjectPage.css';

export default function MyProjectPage() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/project/all')
      .then((res) => {
        setCard(res.data);
      })
      .catch(console.log);
  }, []);

  const navigate = useNavigate();

  const toProjects = (id) => {
    const path = `/project/byid/${id}`;
    navigate(path);
  };

  return (
    <div>
      <h1>My Project</h1>
      <CardProjectPage />
      {/* {card?.map((category) => (
        <Container key={category.id}>
          <h2>{category.name}</h2>
          <div>{category.desc}</div>
          <div>
            There are
            {' '}
            {category?.Projects?.length}
            {' '}
            projects in this category
          </div>
          <Button onClick={() => toProjects(category.id)}>See projects</Button>
        </Container>
      ))} */}
      <div>
        {/* <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Name
            </Label>
            <Input
              id="exampleEmail"
              name="name"
              placeholder="name"
              type="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Description
            </Label>
            <Input
              id="examplePassword"
              name="desc"
              placeholder="description"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">
              Image
            </Label>
            <Input
              id="examplePassword"
              name="img"
              placeholder="url"
              type="url"
            />
          </FormGroup>
        </Form> */}
        <Button color="secondary" size="lg" block className="btn">Go Project</Button>
        <Button color="secondary" size="lg" block className="btn">Edit</Button>
      </div>
    </div>
  );
}
