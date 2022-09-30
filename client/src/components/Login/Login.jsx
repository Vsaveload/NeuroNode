import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../../redux/action/signupActions';

export default function Login() {
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    password: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/login', {
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
      setError('Вы не зарегистрировались или ввели неправильные данные');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="loginName" className="form-label">Имя</label>
            <input
              value={input.name}
              onChange={changeHandler}
              type="text"
              name="name"
              className="form-control"
              id="loginName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Пароль</label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="loginPassword"
            />
          </div>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">Вход</button>
            {error && <div style={{ color: 'red', background: 'yellow' }}>Неправильный пароль</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
