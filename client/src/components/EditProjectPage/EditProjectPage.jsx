import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ListGroup } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';
import Graph from '../Graph';
import '../Cards/CardEditorPage.css';
import EditorCard from '../Cards/EditorCard';
import './EditProjectPage.css';
import NavBar from '../Navbar/NavBar';
// import { setProjectForEdit } from '../../redux/action/projectActions';
import { getNodesAsync } from '../../redux/action/nodeActions';
import { setProjectForEditAsync } from '../../redux/action/projectForEditActions';

export default function EditProjectPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.node);
  const project = useSelector((state) => state.projectForEdit)[0];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProjectForEditAsync(id));
    dispatch(getNodesAsync(id));
  }, []);
  let newData = {};
  const nodesNew = [];
  const linksNew = [];
  nodes?.map((node) => node.Connections
    .map((connection) => linksNew.push({ source: connection.from, target: connection.to })));
  nodes?.map((node) => nodesNew.push({ id: node.id }));
  newData = { nodes: nodesNew, links: linksNew };
  console.log('Project', project);
  return (
    <div className="mainEdit">
      <NavBar style={{ marginTop: '150px' }} page="EDITOR" />
      <div className="cardPage">
        {project && <EditorCard project={project} nodes={nodes} className="cardEditor" />}
        {nodes && <Graph data={newData} className="graph" />}
      </div>

      {/* <ListGroup
        flush
        horizontal
        numbered
      /> */}
      <div>
        <Button onClick={() => navigate('/myprojects')} className="btnEdit">Back to projects</Button>
      </div>
    </div>
  );
}
