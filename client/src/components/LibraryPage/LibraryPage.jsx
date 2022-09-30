import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function LibraryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/categories')
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
    <div>
      {categories?.map((category) => (
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
      ))}
    </div>
  );
}
