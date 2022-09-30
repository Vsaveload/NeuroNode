import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

export default function HomePage() {
  const navigate = useNavigate();
  return (
   <>
<NavBar />
      <ButtonGroup vertical size="lg">
         <Button color="dark" onClick={() => navigate('/library')}>
            Library
         </Button>

         <Button color="dark" onClick={() => navigate('/newproject')}>
            New Project
         </Button>

         <Button color="dark" onClick={() => navigate('/myproject')}>
            My Project
         </Button>

         <Button color="dark" onClick={() => navigate('/statistics')}>
            Statistics
         </Button>

         <Button color="dark" onClick={() => navigate('/favorites')}>
            Favorites
         </Button>
      </ButtonGroup>
   </>
  );
}
