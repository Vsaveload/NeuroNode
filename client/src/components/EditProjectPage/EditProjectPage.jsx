import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, ListGroup } from 'reactstrap';
import CardProjectPage from '../Cards/CardProjectPage';
import NodeListPage from '../NodeList/NodeListPage';
import Graph from '../Graph';
import '../Cards/CardEditorPage.css';
import EditorCard from '../Cards/EditorCard';
import './EditProjectPage.css';
import Navbar from '../Navbar/NavBar';

export default function EditProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [nodesBack, setNodesBack] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/myprojects/${id}`)
      .then((res) => {
        setProject(res.data);
        setNodesBack(res.data.Nodes);
      });
  }, []);
  const data = {
    nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }, { id: 'VOVA' }],
    links: [
      { source: 'Harry', target: 'Sally' },
      { source: 'Harry', target: 'Alice' },
      { source: 'Harry', target: 'VOVA' },
    ],
  };
  let newData = {};
  const nodesNew = [];
  const linksNew = [];

  nodesBack?.map((node) => node.Connections
    .map((connection) => linksNew.push({ source: connection.from, target: connection.to })));
  nodesBack?.map((node) => nodesNew.push({ id: node.id }));

  newData = { nodes: nodesNew, links: linksNew };

  return (
    <div className="mainEdit">
      <Navbar />
      <div className="cardPage">
        {project.id && <EditorCard project={project} className="cardEditor" />}
        {newData.nodes && <Graph data={newData} className="graph" />}
      </div>
      <ListGroup
        flush
        horizontal
        numbered
      />
      <div>
      <Button color="secondary" onClick={() => navigate('/myprojects')} className="btnEdit">Back to projects</Button>
      </div>
    </div>
  );
}
