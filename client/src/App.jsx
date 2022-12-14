import React, { useEffect } from 'react';
import {
  Routes, Route, useParams, BrowserRouter,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectViewerPage from './components/ProjectViewerPage';
import ProjectSelectPage from './components/ProjectSelectPage';
import Login from './components/Login/Login';
import MainPage from './components/MainPage';
import { checkAuth } from './redux/action/signupActions';
import FirstPage from './components/FirstPage/FirstPage';
import LibraryPage from './components/LibraryPage';
import NodeVeiwerPage from './components/NodeVeiwerPage';
import HomePage from './components/Home/HomePage';
import NoPage from './components/NoPage/NoPage';
import MyProjectPage from './components/MyProject/MyProjectPage';
import StatisticsPage from './components/Statistics/StatisticsPage';
import FavoritesPage from './components/Favorites/FavoritesPage';
import AddProject from './components/AddProject/AddProject';
import CardProjectPage from './components/Cards/CardProjectPage';
import NodeEdit from './components/modalPage/NodeEdit';
import EditProjectPage from './components/EditProjectPage/EditProjectPage';
import Navbar from './components/Navbar/NavBar';

export default function App({ userSession, notes }) {
  // const signup = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes> */}
      {/* <div> */}
            {/* <Navbar /> */}
        <div style={{ marginTop: '150px' }}>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/category/:categoryId" element={<ProjectSelectPage />} />
            <Route path="/projectviewer/:projectId" element={<ProjectViewerPage />} />
            <Route path="/statistics/:staticId" element={<StatisticsPage />} />
            <Route path="/nodeviewer/:projectId" element={<NodeVeiwerPage />} />
            <Route path="/myprojects/:id" element={<EditProjectPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/myprojects" element={<MyProjectPage />} />
            {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
            <Route path="/nodeedit/:nodeId" element={<NodeEdit />} />
          </Routes>
        </div>
      {/* </div> */}
    </>
  );
}
