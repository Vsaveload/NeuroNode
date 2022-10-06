import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/action/signupActions';
import './NavBar.css';

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
    <div className="navbar border fixed-top" id="navbar0">
      <nav className="navbar navbar-expand-lg bg-black" id="navbar">
        {/* <div className="container-fluid"> */}
        {/* <NavLink className="navbar-brand" to="/">NeuroNode</NavLink> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 d-md-flex float-sm-right" id="nav">
              <li><NavLink className="btn btn-dark m-2" to="/">NEURO NODE</NavLink></li>
            <div id="lid">
              <li id="home">
                <NavLink className="btn btn-dark m-2" style={{}} to="/home" id="navBut">HOME</NavLink>
              </li>
              {!signup
                ? (
                  ''
                ) : (
                  <li>
                    {/* <NavLink to="/game"
                  className="btn btn-outline-dark m-2"><strong>Node</strong></NavLink> */}
                    <a onClick={logoutHandler} className="btn btn-dark m-2" href="logout" id="navBut">EXIT</a>
                  </li>
                )}
            </div>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
