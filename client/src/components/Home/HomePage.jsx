import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

import './Home.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (

      <div className="homeDiv">
         <NavBar />
         <ButtonGroup vertical size="lg" className="bg">
            <Button color="dark" onClick={() => navigate('/library')} className="button">
              <h2><strong>Library</strong></h2>
            </Button>
         <Button color="dark" onClick={() => navigate('/addproject')} className="button1">
            <h2><strong>New Project</strong></h2>
         </Button>
            <Button color="dark" onClick={() => navigate('/myprojects')} className="button2">
              <h2><strong>My Projects</strong></h2>
            </Button>
            <Button color="dark" onClick={() => navigate('/favorites')} className="button3">
               <h2><strong>Favorites</strong></h2>
            </Button>
         </ButtonGroup>
      </div>
  );
}
