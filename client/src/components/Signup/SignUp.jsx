import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignup } from '../../redux/action/signupActions';

export default function SignUp() {
  //   const [loading, setLoading] = useState(true);
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
    fetch('http://localhost:3001/signup', {
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
      const response = await fetch('http://localhost:3001/signup', {
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
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Имя</label>
            <input
              value={input.name}
              onChange={changeHandler}
              type="text"
              name="name"
              className="form-control"
              id="signupName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Электронный адрес</label>
            <input
              value={input.email}
              onChange={changeHandler}
              type="email"
              name="email"
              className="form-control"
              id="signupName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Пароль</label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="signupPassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Повторить пароль</label>
            <input
              value={input.repeat}
              onChange={changeHandler}
              type="password"
              name="repeat"
              className="form-control"
              id="signupPassword"
            />
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-outline-success">Регистрация</button>
            {error && <div style={{ color: 'red' }}>Вы уже зарегистрированы</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
