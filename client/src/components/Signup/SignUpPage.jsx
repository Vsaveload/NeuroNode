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
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    repeat: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/auth/signup', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setSignup(res));
      });
  }, []);

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
        setError('Вы уже зарегистрированы');
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
          Логин
        </Label>
        <Input
          value={input.name}
          onChange={changeHandler}
          id="exampleEmail"
          name="name"
          placeholder="Логин"
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
          Пароль
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Пароль"
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
          Повторите пароль
        </Label>
        <Input
          id="examplePassword"
          name="repeat"
          placeholder="Повторите пароль"
          type="password"
          value={input.repeat}
          onChange={changeHandler}
        />
      </FormGroup>
      {' '}
      <Button type="submit" outline>
        Войти
      </Button>
      {error && <Button disabled color="danger" outline> Такой Email уже занят!</Button>}
    </Form>
  );
}
