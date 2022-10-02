import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Form, FormGroup, Label, Input, Button, DropdownItem, DropdownMenu, Dropdown, DropdownToggle,
} from 'reactstrap';

export default function AddProject() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [allCategories, setAllCategories] = useState([]);
  const [input, setInput] = useState({
    name: '',
    desc: '',
    img: '',
    category_id: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/project/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      setInput({
        name: '',
        desc: '',
        img: '',
        category_id: '',
      });
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
        {/* <Input
          onChange={inputHandler}
          value={input.category_id}
          id="exampleSelectMulti"
          multiple
          name="selectMulti"
          type="select"
        >
          {allCategories && allCategories?.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </Input> */}
        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Category</DropdownToggle>
          <DropdownMenu value={input.category_id} name="category_id" onChange={inputHandler}>
            {allCategories && allCategories?.map((category) => (
              <DropdownItem value={category.id} key={category.id}>{category.name}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown> */}
        <Input
          onChange={inputHandler}
          value={input.category_id}
          id="exampleSelect"
          name="category_id"
          type="select"
        >
      {allCategories && allCategories?.map((category) => (
            <option value={category.id}>{category.name}</option>
      ))}
        </Input>
      </FormGroup>
      <Button type="submit">
        Create
      </Button>
    </Form>
  );
}
