import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import NavBar from '../Navbar/NavBar';
import './AddProject.css';

export default function AddProject() {
  const userId = useSelector((state) => state.signup.id);
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  const [input, setInput] = useState({
    name: '',
    desc: '',
    img: '',
    categoryID: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log('INPUT', input);
  const submitHandler = async (e) => {
    const data = { ...input, userId };
    e.preventDefault();
    const newProject = await axios.post('http://localhost:3001/project/new', data);
    if (newProject) {
      setInput({
        name: '',
        desc: '',
        img: '',
        categoryID: '',
      });
      navigate(`/myprojects/${newProject.data.id}`);
    }
  };

  useEffect(() => {
    axios('http://localhost:3001/category/all')
      .then((data) => setAllCategories(data.data));
  }, []);

  return (
    <div className="main">
      <NavBar style={{ marginTop: '150px' }} />

      <Form onSubmit={submitHandler} className="cardMain">
        <FormGroup className="form">
          <Label for="exampleEmail" className="inpColor">
            Name
          </Label>
          <Input
            onChange={inputHandler}
            value={input.name}
            id="exampleEmail"
            name="name"
            placeholder="name"
            type="name"
            className="input"
          />
        </FormGroup>
        <FormGroup className="form">
          <Label for="examplePassword" className="inpColor">
            Description
          </Label>
          <Input
            onChange={inputHandler}
            value={input.desc}
            id="examplePassword"
            name="desc"
            placeholder="description"
            type="text"
            className="input"
          />
        </FormGroup>
        <FormGroup className="form">
          <Label for="exampleSelect" className="inpColor">
            Image
          </Label>
          <Input
            onChange={inputHandler}
            value={input.img}
            id="examplePassword"
            name="img"
            placeholder="url"
            type="url"
            className="input"
          />
        </FormGroup>
        <FormGroup className="form">
          <Label for="exampleSelectMulti" className="inpColor">
            Select category
          </Label>
          <Input
            id="exampleSelect"
            name="categoryID"
            type="select"
            className="input"
            value={input.categoryID}
            onChange={inputHandler}
          >
            <option hidden>Select Category</option>
            {allCategories && allCategories?.map((category) => {
              console.log('category from map', category);
              return (
<option
  key={category.id}
  value={category.id}
  name="categoryID"
>
{category.name}
</option>
              );
            })}
          </Input>
        </FormGroup>
      </Form>
      <Button type="submit" onClick={submitHandler} className="cardBut">
        Create
      </Button>
    </div>

  );
}
