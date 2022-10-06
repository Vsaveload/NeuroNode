import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle, Input, Modal,
} from 'reactstrap';
import { getNodesAsync } from '../../redux/action/nodeActions';
import { setProjectForEditAsync } from '../../redux/action/projectForEditActions';
import NodeModal from '../modalPage/NodeModal';
import './EditorCard.css';

export default function EditorCard({ project, nodes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [node, setNode] = useState({});
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({
    name: '',
    desc: '',
    img: '',
  });
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nodeModalHandler = (nodeForModal) => {
    setNode(nodeForModal);
    toggle();
  };

  const submitHandler = async (updatingProjectId) => {
    const response = await axios.patch(
      `http://localhost:3001/project/${updatingProjectId}`,
      {
        name: input.name || project.name,
        desc: input.desc || project.desc,
        img: input.img || project.img,
      },
    );
    if (response.ok) {
      console.log('suces');
    }
    dispatch(setProjectForEditAsync(project.id));
  };

  const addblankNode = async () => {
    await axios.post(
      'http://localhost:3001/node/new',
      {
        name: 'Blank node',
        content: 'Blank node content',
        project_id: project.id,
        isFirst: null,
      },
    );
    dispatch(getNodesAsync(project.id));
  };

  const deleteNode = async (id) => {
    axios.delete(
      `http://localhost:3001/node/${id}`,
    );
    dispatch(getNodesAsync(project.id));
  };

  const firstNode = () => nodes?.find((elNode) => elNode.isFirst === true);

  const finishNodes = () => nodes?.find((elNode) => elNode.isFirst === false);

  return (
    <>
      {isEditing
        ? (
          <Card className="cardEditor">
            <CardBody className="card-body">
              <Input value={input.name} onChange={changeHandler} name="name" />
              <Input value={input.desc} onChange={changeHandler} name="desc" />
              <Input value={input.img} onChange={changeHandler} name="img" />
              <Button onClick={() => {
                setIsEditing(!isEditing);
                submitHandler(project.id);
              }}
              >
                Save
              </Button>
              <Button onClick={() => setIsEditing(!isEditing)}>Discard changes</Button>
            </CardBody>
          </Card>
        )
        : (
          <Card
            className="card"
          >
            <img
              className="img"
              src={project.img}
              alt="Not provided"
              width="350"
            />
            <CardBody className="card-body">
              <CardTitle tag="h5" className="name">
                <strong>Title: </strong>
                {project.name}
              </CardTitle>
              <CardSubtitle
                className="title"
                tag="h6"
              />
              <CardText className="desc">
                <strong>Description: </strong>
                {project.desc}
              </CardText>
              <Button
                onClick={() => {
                  setIsEditing(!isEditing);
                  setInput({
                    ...input, name: project.name, desc: project.desc, img: project.img,
                  });
                }}
                className="editBut1"
              >
                Edit Project Info
              </Button>
              <Button onClick={addblankNode} className="editBut1">Add blank node</Button>
            </CardBody>
            <strong style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>First node:</strong>
            {firstNode()
              ? (
                <div>
                  <div style={{ marginTop: '10px', color: 'white', marginLeft: '5px' }}>
                    Id:
                    {firstNode().id}
                    {': '}
                    {firstNode().name}

                  </div>
                  <Button onClick={() => nodeModalHandler(firstNode())} className="editBut">Edit node</Button>
                  <Button
                    onClick={() => {
                      deleteNode(firstNode().id);
                      dispatch(getNodesAsync(project.id));
                    }}
                    className="editBut"
                  >
                    Delete

                  </Button>
                </div>
              )
              : <div>No first node</div>}
            <strong style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Transition nodes:</strong>
            {nodes?.filter((el) => el.isFirst === null || undefined).map((oneNode) => (
              <div key={oneNode.id}>
                <div style={{ marginTop: '10px', color: 'white', marginLeft: '5px' }}>
                  Id:
                  {oneNode.id}
                  {': '}
                  {oneNode.name}
                </div>
                <Button onClick={() => nodeModalHandler(oneNode)} className="editBut">Edit node</Button>
                <Button
                  onClick={() => {
                    deleteNode(oneNode.id);
                    dispatch(getNodesAsync(project.id));
                  }}
                  className="editBut"
                >
                  Delete

                </Button>
              </div>
            ))}
            <strong style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Finish nodes:</strong>
            {finishNodes()
              ? (
                <div>
                  <div style={{ marginTop: '10px', color: 'white', marginLeft: '5px' }}>
                    Id:
                    {finishNodes().id}
                    {': '}
                    {finishNodes().name}

                  </div>
                  <Button onClick={() => nodeModalHandler(finishNodes())} className="editBut">Edit node</Button>
                  <Button
                    onClick={() => {
                      deleteNode(finishNodes().id);
                      dispatch(getNodesAsync(project.id));
                    }}
                    className="editBut"
                  >
                    Delete

                  </Button>
                </div>
              )
              : <div style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>No finishing nodes</div>}
            <NodeModal
              style={{ color: 'black' }}
              modal={modal}
              toggle={toggle}
              node={node}
              allProjectNodes={nodes}
            />

          </Card>
        )}
    </>
  );
}
