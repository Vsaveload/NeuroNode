import axios from 'axios';
import React, { useState } from 'react';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle, Input,
} from 'reactstrap';
import './CardEditorPage.css';

export default function EditorCard({ project }) {
  const [isEditing, setIsEditing] = useState(false);

  const [input, setInput] = useState({
    name: '',
    desc: '',
    img: '',
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  return (
<>
    {isEditing
      ? (
<Card
  className="card"
>
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
    </CardBody>
</Card>

      )}
</>
  );
}
