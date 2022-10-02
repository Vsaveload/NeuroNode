import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input,
} from 'reactstrap';

export default function NodeEdit() {
  const [node, setNode] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState('');

  const { nodeId } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/node/byid/${nodeId}`)
      .then((res) => setNode(res.data))
      .catch(console.log);
  }, []);

  const changeHandler = (e) => {
    setInput((prev) => e.target.value);
  };

  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
         <CardBody>
            <CardTitle tag="h5">
                {isEditing
                  ? (
<>
                  <Input value={input} onChange={changeHandler} />
                  <p>asdasdasdasdasd</p>
                  <Button onClick={() => setIsEditing(!isEditing)}>Save</Button>
                  <Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
</>
                  )
                  : (
<>
<p>
Node name:
{node?.name}
</p>

            <Button onClick={() => {
              setInput(node.name);
              setIsEditing(!isEditing);
            }}
            >
Edit node name

            </Button>
</>
                  )}
            </CardTitle>
              <h3>Node content:</h3>
          <CardText style={{ overflowY: 'scroll', height: '16rem' }}>
              {node?.content}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </CardText>
          {node?.Connections?.map((connection) => (
            <div key={connection.id}>
                {connection.from}
                    -
                {connection.to}
            </div>
          ))}
    <Button>
      Button
    </Button>
         </CardBody>
    </Card>
  );
}
