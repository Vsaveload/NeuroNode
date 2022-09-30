import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectSelectPage from './components/projectSelectPage';
import ProjectViewerPage from './components/ProjectViewerPage';

function App() {
  return (
    <>
      <div>NAvbr</div>
      <Routes>
        <Route path="/" element={<ProjectSelectPage />} />
        <Route path="/projectviewer/:id" element={<ProjectViewerPage />} />
      </Routes>
    </>
  );
}

export default App;
