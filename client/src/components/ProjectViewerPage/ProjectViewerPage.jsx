import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectViewerPage() {
  const [project, setProject] = useState({});
  const { projectId } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/project/${projectId}`)
      .then((res) => setProject(res.data))
      .catch(console.log);
  }, []);

  const navigate = useNavigate();

  const toCategory = (categoryId) => {
    const path = `/projectselect/${categoryId}`;
    navigate(path);
  };

  const toFirstNode = (setProjectId) => {
    const path = `/nodeviewer/${setProjectId}`;
    navigate(path);
  };

  return (
    <>
      <h2>{project?.name}</h2>
      <div>{project?.desc}</div>
      <img src={project?.img} alt="Not provided" />
      <Button onClick={() => toCategory(project?.Category?.id)}>Back to Category</Button>
      <Button onClick={() => toFirstNode(project?.id)}>Explore project</Button>

    </>
  );
}
