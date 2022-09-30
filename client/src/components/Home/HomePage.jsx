import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

export default function HomePage() {
  return (
     <ButtonGroup vertical size="lg">
         <Button color="secondary">
            Library
         </Button>
         <Button color="secondary">
            New Project
         </Button>
         <Button color="secondary">
            My Project
         </Button>
         <Button color="secondary">
            Statistics
         </Button>
        <Button color="secondary">
            Favorites
        </Button>
     </ButtonGroup>
  );
}
