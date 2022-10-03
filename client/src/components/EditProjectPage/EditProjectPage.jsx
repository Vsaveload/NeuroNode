import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, ListGroup } from 'reactstrap';
import CardEditorPage from '../Cards/CardEditorPage';
import NodeListPage from '../NodeList/NodeListPage';

export default function EditProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [nodes, setNodes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/myprojects/${id}`)
      .then((res) => {
        setProject(res.data);
        setNodes(res.data.Nodes);
      });
  }, []);

  return (
    <>
{console.log('НОВАЯ ДАТА', nodes)}
      {project.id && <CardEditorPage project={project} />}

    <ListGroup
      flush
      horizontal
      numbered
    >
      {/* {project.Statistic.length > 0 && project.
        Statistic.map((curProject) => <NodeListPage />) } */}

    </ListGroup>
    <Button color="secondary" onClick={() => navigate('/myprojects')} className="btn">Back to projects</Button>
    </>
  );
}
