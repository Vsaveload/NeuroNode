import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/action/signupActions';

export default function Navbar() {
  const navigate = useNavigate();
  const { signup } = useSelector((state) => state);
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/auth/logout', { credentials: 'include' });
    if (response.ok) {
      dispatch(logout());
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">NeuroNode</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 d-md-flex justify-content-end">
            <li className="nav">
              <NavLink className="btn btn-dark m-2" to="/"><strong>Домой</strong></NavLink>
            </li>
            {!signup
              ? (
                <>
                  <NavLink to="/signup" className="btn btn-outline-dark m-2"><strong>Регистрация</strong></NavLink>
                  <NavLink to="/login" className="btn btn-outline-dark m-2"><strong>Авторизация</strong></NavLink>
                  <NavLink to="/library" className="btn btn-outline-dark m-2"><strong>Library</strong></NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/game" className="btn btn-outline-dark m-2"><strong>Node</strong></NavLink>
                  <a onClick={logoutHandler} className="btn btn-dark m-2" href="logout">Выйти</a>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
