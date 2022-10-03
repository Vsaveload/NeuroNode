import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function NodeListPage({ node }) {
  const [nodeCur, setNodeList] = useState(node || []);
  return (

  <ListGroupItem />

  );
}
