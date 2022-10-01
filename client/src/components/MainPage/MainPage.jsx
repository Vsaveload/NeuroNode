import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonGroup, Button } from 'reactstrap';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <ButtonGroup vertical size="lg">
<<<<<<< HEAD
      <Button color="secondary" onClick={() => navigate('/addproject')}>
        New project
      </Button>
      <Button color="secondary">
        Edit
      </Button>
      <Button color="secondary">
        Statistics
      </Button>
=======
         <Button color="secondary">
            New project
         </Button>
         <Button color="secondary">
            Edit
         </Button>
         <Button color="secondary">
            Statistics
         </Button>
>>>>>>> e88c67c96bfbc5655373d2725736c2275afd9d4c
    </ButtonGroup>
  );
}
