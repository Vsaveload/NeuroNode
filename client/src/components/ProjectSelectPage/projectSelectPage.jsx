/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container,
} from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// require('dotenv').config({ path: '../../../../server' });

export default function projectSelectPage() {
  const [projects, setProjects] = useState([]);
  const { categoryId } = useParams();

  //   const { PORT } = process.env;
  useEffect(() => {
    axios(`http://localhost:3001/project/bycategory/${categoryId}`)
      .then((res) => setProjects(res.data))
      .catch(console.log);
  }, []);

  const navigate = useNavigate();

  const toCategories = () => {
    navigate('/library');
  };

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  const toStatistic = (id) => {
    const path = `/statistics/${id}`;
    navigate(path);
  };

  return (
    <div className="d-flex" style={{ flexDirection: 'column' }}>
      {projects?.map((project) => (
    <Card
      style={{
        width: '18rem',
      }}
      key={project.id}
    >
      <img
        style={{ width: '18rem', height: '16rem' }}
        src={project?.img}
        alt="Not provided"
      />
      <CardBody>
        <CardTitle tag="h5">
          {project?.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
            Card subtitle
        </CardSubtitle>
          <CardText>
            {project?.desc}
          </CardText>
        <Button onClick={() => toFirstNode(project?.id)}>Explore project</Button>
        <Button onClick={() => toStatistic(project?.id)}>Statistics</Button>
      </CardBody>
    </Card>
      ))}
      <Button onClick={toCategories}>Back to library</Button>
    </div>
  );
}
