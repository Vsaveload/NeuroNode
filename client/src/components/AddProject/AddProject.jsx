import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

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
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="exampleEmail">
          Name
        </Label>
        <Input
          onChange={inputHandler}
          value={input.name}
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
          onChange={inputHandler}
          value={input.desc}
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
          onChange={inputHandler}
          value={input.img}
          id="examplePassword"
          name="img"
          placeholder="url"
          type="url"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">
          Select category
        </Label>
               <Input
                 onChange={inputHandler}
                 value={input.categoryID}
                 id="exampleSelect"
                 name="categoryID"
                 type="select"
               >
      {allCategories && allCategories?.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
      ))}
               </Input>
      </FormGroup>
      <Button type="submit" onClick={submitHandler}>
        Create
      </Button>
    </Form>
  );
}
