import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectViewerPage from './components/ProjectViewerPage';
import ProjectSelectPage from './components/projectSelectPage';
import NavBar from './components/Navbar/NavBar';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import { CHECK_AUTH_THUNK } from './redux/action/signupActions';
import FirstPage from './components/FirstPage/FirstPage';

export default function App({ userSession, notes }) {
  const { signup } = useSelector((state) => state);
  const State = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch('http://localhost:3001/auth', {
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => (
  //       dispatch(CHECK_AUTH_THUNK(data))
  //     ));
  // }, []);
  return (
    <div className="container">
      <div className="row">
        <NavBar />
        {/* <FirstPage /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectSelectPage />} />
          <Route path="/projectviewer/:id" element={<ProjectViewerPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
