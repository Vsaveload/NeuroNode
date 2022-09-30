import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectViewerPage from './components/ProjectViewerPage';
import ProjectSelectPage from './components/ProjectSelectPage';
import NavBar from './components/Navbar/NavBar';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import { CHECK_AUTH_THUNK } from './redux/action/signupActions';
import FirstPage from './components/FirstPage/FirstPage';
import LibraryPage from './components/LibraryPage';
import NodeVeiwerPage from './components/NodeVeiwerPage';
import HomePage from './components/Home/HomePage';
import NoPage from './components/NoMatch/NoMatch';
import NewProjectPage from './components/Home/NewProjectPage';
import MyProjectPage from './components/Home/MyProjectPage';
import StatisticsPage from './components/Home/StatisticsPage';
import FavoritesPage from './components/Home/FavoritesPage';

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

        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/projectselect/:categoryId" element={<ProjectSelectPage />} />
          <Route path="/projectviewer/:projectId" element={<ProjectViewerPage />} />
          <Route path="/nodeviewer/:projectId" element={<NodeVeiwerPage />} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/newproject" element={<NewProjectPage />} />
          <Route path="/myproject" element={<MyProjectPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
  );
}
