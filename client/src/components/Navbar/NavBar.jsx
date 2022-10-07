import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/action/signupActions';
import './NavBar.css';

export default function Navbar({ page }) {
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
    <div className="navbar border fixed-top" id="navbar0">
      <NavLink className="btn btn-dark m-2" to="/"><strong>NEURO NODE</strong></NavLink>
      <div style={{ color: 'white' }}><strong><big>{page}</big></strong></div>
      <div id="nav">
        <NavLink className="btn btn-dark m-2" style={{}} to="/home" id="navBut">HOME</NavLink>
        {!signup
          ? (
            <div />
          ) : (
            <NavLink onClick={logoutHandler} className="btn btn-dark m-2" href="logout" id="navBut">EXIT</NavLink>
          )}

      </div>
    </div>
  );
}
