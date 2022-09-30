import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default function Library() {
  const [categories, setCategories] = useState([{
    id: 1, name: 'project1', desc: 'MUCH WOwWOoOWOoOWOWoWOoWOoOWOoWOOWOWOOOWOOwoWOOWoWOOoWOOOWOWOOWOOWOoWOOWOOOWOOWOOWoWOOWOOoWOoW WOW!', img: null,
  }, {
    id: 2, name: 'megaProject', desc: 'WEWWY WOwWOoOWOoOWOWoWOoWOoOWOoWOOWOWOOOWOOwoWOOWoWOOoWOOOWOWOOWOOWOoWOOWOOOWOOWOOWoWOOWOOoWOoW WOW!', img: null,
  }]);

  useEffect(() => {
    axios('http://localhost:3001/categories')
      .then((res) => setCategories(res.data))
      .catch(console.log);
  }, []);

  const navigate = useNavigate();
  const goToProjects = (id) => {
    const path = `/categories/${id}`;
    navigate(path);
  };

  return (
    <div>
      {categories?.map((category) => (
        <Container>
          <h2>{category.name}</h2>
          <div>{category.desc}</div>
          <div>There are PLACEHODER projects in this category</div>
          <Button onClick={goToProjects(category.id)}>Go to category</Button>
        </Container>
      ))}
    </div>
  );
}
