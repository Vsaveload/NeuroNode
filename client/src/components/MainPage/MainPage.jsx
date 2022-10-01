import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonGroup, Button } from 'reactstrap';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <ButtonGroup vertical size="lg">
      <Button color="secondary" onClick={() => navigate('/addproject')}>
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
