import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import './Home.css';

export default function HomePage() {
  const navigate = useNavigate();
  return (
      <>
         <NavBar />
         <ButtonGroup vertical size="lg">
            <Button color="dark" onClick={() => navigate('/library')} className="button">
               Library
            </Button>

         <Button color="dark" onClick={() => navigate('/addproject')}>
            New Project
         </Button>

            <Button color="dark" onClick={() => navigate('/myproject')} className="button2">
               My Project
            </Button>

            {/* <Button color="dark" onClick={() => navigate('/statistics')}>
            Statistics
         </Button> */}

            <Button color="dark" onClick={() => navigate('/favorites')} className="button3">
               Favorites
            </Button>
         </ButtonGroup>
      </>
  );
}
