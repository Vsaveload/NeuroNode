import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { setSignup } from '../../redux/action/signupActions';

export default function SignUpPage({ toggle }) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    repeat: '',
  });

  useEffect(() => {
    // fetch('http://localhost:3001/auth/signup', {
    //   credentials: 'include',
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     dispatch(setSignup(res));
    //   });
    if (input.repeat !== input.password) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [input.password, input.repeat]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (input.repeat === input.password && input.name !== '') {
      const response = await fetch('http://localhost:3001/auth/signup', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(input),

      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setSignup(data));
        navigate('/home');
      } else {
        setError('Already registered');
      }
    }
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (

    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label
          for="exampleLogin"
          hidden
        >
          Login
        </Label>
        <Input
          value={input.name}
          onChange={changeHandler}
          id="exampleEmail"
          name="name"
          placeholder="Login"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label
          for="exampleEmail"
          hidden
        >
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          value={input.email}
          onChange={changeHandler}
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
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          value={input.password}
          onChange={changeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label
          for="examplePassword"
          hidden
        >
          Repeat password
        </Label>
        <Input
          id="examplePassword"
          name="repeat"
          placeholder="Repeat password"
          type="password"
          value={input.repeat}
          onChange={changeHandler}
        />
        {status ? <div>Passwords do not match</div> : ''}
      </FormGroup>
      {' '}
      <Button type="submit" outline>
        Enter
      </Button>
      {error && <Button disabled color="danger" outline>That email is taken</Button>}
    </Form>
  );
}
