import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProjectPage() {
  const { projectID } = useParams;
  const { project, setProject } = useState([]);

  useEffect(() => {
    axios.get('/myprojects/:id')
      .then((res) => setProject(res.data));
  });

  return (
    <div>EditProjectPage</div>
  );
}
