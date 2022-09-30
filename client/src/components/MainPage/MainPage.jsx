import React from 'react';

import { ButtonGroup, Button } from 'reactstrap';
import NavBar from '../Navbar/NavBar';

export default function MainPage() {
  return (
    <ButtonGroup vertical size="lg">
      <Button color="secondary">
        New project
      </Button>
      <Button color="secondary">
        Edit
      </Button>
      <Button color="secondary">
        Statistics
      </Button>
    </ButtonGroup>
  );
}
