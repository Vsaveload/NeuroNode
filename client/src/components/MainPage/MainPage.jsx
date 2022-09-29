import React from 'react';
import {ButtonGroup, Button} from 'reactstrap';
import Navbar from '../Navbar';

export default function MainPage() {
  return (
    <>
    <Navbar />
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
</>
  )
}
