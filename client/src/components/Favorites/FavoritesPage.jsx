import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProjectPage from '../Cards/CardProjectPage';

export default function FavoritesPage() {
  const { project } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/favorites/project')
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [project]);
  return (
    <div>
      <CardProjectPage
        key={project.id}
        project={project}
      />
    </div>
  );
}
