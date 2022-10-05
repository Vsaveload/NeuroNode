import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ListGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import Graph from '../Graph';
import '../Cards/CardEditorPage.css';
import EditorCard from '../Cards/EditorCard';
import './EditProjectPage.css';
import Navbar from '../Navbar/NavBar';
// import { setProjectForEdit } from '../../redux/action/projectActions';
import { getNodesAsync } from '../../redux/action/nodeActions';
import { setProjectForEditAsync } from '../../redux/action/projectForEditActions';

export default function EditProjectPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.node);
  const project = useSelector((state) => state.projectForEdit);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProjectForEditAsync(id));
    dispatch(getNodesAsync(id));
  }, []);
  console.log(project);
  return (
    <div className="mainEdit">
      <Navbar />
      <div className="cardPage">
        {project.id && <EditorCard project={project[0]} className="cardEditor" />}
        {nodes.nodes && <Graph data={nodes} className="graph" />}
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
