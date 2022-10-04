import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { setLogin } from '../../redux/action/signupActions';

export default function LoginPage({ toggle }) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(setLogin(data));
      navigate('/home');
    } else {
      setError('Not registered or credentials are wrong');
    }
  };
  return (

    <Form className="login-form" onSubmit={submitHandler}>
      <FormGroup>
        <Label
          for="exampleEmail"
          hidden
        >
          Email
        </Label>
        <Input
          value={input.email}
          onChange={changeHandler}
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label
          for="examplePassword"
          hidden
        >
          Password
        </Label>
        <Input
          value={input.password}
          onChange={changeHandler}
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
      </FormGroup>
      {' '}
      <Button type="submit" outline>
        Enter
      </Button>
      {error && <Button disabled color="danger" outline>Wrong login or password</Button>}
    </Form>
  );
}
