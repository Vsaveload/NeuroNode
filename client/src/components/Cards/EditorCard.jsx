import axios from 'axios';
import React, { useState } from 'react';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle, Input, Modal,
} from 'reactstrap';
import NodeModal from '../modalPage/NodeModal';
import './CardEditorPage.css';
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
  };

  const addblankNode = async () => {
    axios.post(
      'http://localhost:3001/node/new',
      {
        name: 'Blank node',
        content: 'Blank node content',
        project_id: project.id,
        isFirst: null,
      },
    );
  };

  const deleteNode = async (id) => {
    axios.delete(
      `http://localhost:3001/node/${id}`,
    );
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
                {project.name}
              </CardTitle>
              <CardSubtitle
                className="title"
                tag="h6"
              />
              <CardText className="desc">
                {project.desc}
              </CardText>
              <Button onClick={() => {
                setIsEditing(!isEditing);
                setInput({
                  ...input, name: project.name, desc: project.desc, img: project.img,
                });
              }}
              >
                Edit Project Info
              </Button>
              <Button onClick={addblankNode}>Add blank node</Button>
            </CardBody>
            <strong style={{ marginTop: '30px' }}>First node:</strong>
            {firstNode()
              ? (
                <div>
                  <div>{firstNode().name}</div>
                  <Button onClick={() => nodeModalHandler(firstNode())}>Edit node</Button>
                  <Button onClick={() => deleteNode(firstNode().id)}>Delete</Button>
                </div>
              )
              : <div>No first node</div>}
            <strong style={{ marginTop: '30px' }}>Transition nodes:</strong>
            {nodes?.filter((el) => el.isFirst === null || undefined).map((oneNode) => (
              <div key={oneNode.id}>
                <div>{oneNode.name}</div>
                <Button onClick={() => nodeModalHandler(oneNode)}>Edit node</Button>
                <Button onClick={() => deleteNode(oneNode.id)}>Delete</Button>
              </div>
            ))}
            <strong style={{ marginTop: '30px' }}>Finish nodes:</strong>
            {finishNodes()
              ? (
                <div>
                  <div>{finishNodes().name}</div>
                  <Button onClick={() => nodeModalHandler(finishNodes())}>Edit node</Button>
                  <Button onClick={() => deleteNode(finishNodes().id)}>Delete</Button>
                </div>
              )
              : <div>No finishing nodes</div>}
            <NodeModal modal={modal} toggle={toggle} node={node} allProjectNodes={nodes} />
          </Card>
        )}
    </>
  );
}
