import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container,
} from 'reactstrap';

export default function LibraryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/category/allwithproject')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(console.log);
  }, []);

  const navigate = useNavigate();

  const toProjects = (id) => {
    const path = `/projectselect/${id}`;
    navigate(path);
  };

  return (
    <div className="d-flex" style={{ flexDirection: 'column' }}>
      {categories?.map((category) => (
        <Card
          style={{
            width: '18rem',
          }}
          key={category.id}
        >
          <img
            style={{ width: '18rem', height: '16rem' }}
            src={category?.img}
            alt="Not provided"
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
      ))}
    </div>
  );
}
