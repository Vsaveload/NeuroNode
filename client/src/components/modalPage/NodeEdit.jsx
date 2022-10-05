/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
/* eslint-disable no-fallthrough */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

export default function NodeEdit({ node, allProjectNodes, toggle }) {
  // console.log(allProjectNodes, node);

  // const [node, setNode] = useState({});
  // const [allProjectNodes, setallProjectNodes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingConnections, setIsEditingConnections] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [isEditingIsFirst, setIsEditingIsFirst] = useState(false);
  const [connections, setConnections] = useState([]);

  const [input, setInput] = useState({
    name: node.name,
    content: node.content,
    isFirst: node.isFirst,
  });

  // const { nodeId } = useParams();

  // useEffect(() => {
  //   axios(`http://localhost:3001/node/byid/${nodeId}`)
  //     .then((res) => setNode(res.data))
  //     .catch(console.log);
  //   axios(`http://localhost:3001/node/allinproject/${nodeId}`)
  //     .then((res) => setallProjectNodes(res.data))
  //     .catch(console.log);
  // }, []);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (updatingNodeId) => {
    console.log('INPUT CONNECTIONS', input, connections);
    const response = await axios.patch(
      `http://localhost:3001/node/${updatingNodeId}`,
      {
        name: input.name || node.name,
        content: input.content || node.content,
        isFirst: input.isFirst || node.isFirst,
      },
    );
    if (response.ok) {
      console.log('suces');
    }
    const connectionsResponse = await axios.patch(
      `http://localhost:3001/connections/${updatingNodeId}`,
      {
        connections,
      },
    );
    if (connectionsResponse.ok) {
      console.log('suces');
    }
  };

  const switchForIsFirst = (isfirst) => {
    switch (isfirst) {
      case true:
        return <div>First node in project</div>;
      case false:
        return <div>Finish node</div>;
      case null:
        return <div>transitional node</div>;
      default:
        return <div>lost in time and space</div>;
    }
  };

  const alreadyHasFirstChecker = (nodeId) => {
    if (allProjectNodes.find((el) => el.isFirst === true)?.id === nodeId) {
      return false;
    } if (allProjectNodes.find((el) => el.isFirst === true)?.id === true) {
      return false;
    }
    return allProjectNodes.find((el) => el.isFirst === true);
  };
  // console.log(alreadyHasFirstChecker(node.id));

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          {isEditing
            ? (
                <>
                  <Input value={input.name} onChange={changeHandler} name="name" />
                  <Button onClick={() => { setIsEditing(!isEditing); }}>Save</Button>
                  <Button onClick={() => { setInput({ ...input, name: node.name }); setIsEditing(!isEditing); }}>Cancel</Button>
                </>
            )
            : (
                <>
                  <p>
                  Node name:
                  {' '}
                  {input?.name ? input.name : node.name}
                  </p>
                  <Button onClick={() => { setInput({ ...input, name: input.name ? input.name : node.name }); setIsEditing(!isEditing); }}>Edit node name</Button>
                </>
            )}
        </CardTitle>
          <h3>Node content:</h3>
          {isEditingContent
            ? (
                <>
                  <Input value={input.content} onChange={changeHandler} name="content" />
                  <Button onClick={() => { setIsEditingContent(!isEditingContent); }}>Save</Button>
                  <Button onClick={() => { setInput({ ...input, content: node.content }); setIsEditingContent(!isEditingContent); }}>Cancel</Button>
                </>
            )
            : (
                <>
                  <CardText style={{ overflowY: 'scroll', Maxheight: '16rem' }}>{node?.content}</CardText>
                  <Button onClick={() => { setIsEditingContent(!isEditingContent); setInput({ ...input, content: input.content ? input.content : node.content }); }}>Edit content</Button>
                </>
            )}
            {isEditingIsFirst
              ? (
                <>
                  <Input
                    type="radio"
                    name="isFirst"
                    value="true"
                    onChange={(e) => {
                      if (alreadyHasFirstChecker(node.id)) {
                        // eslint-disable-next-line no-alert
                        alert(`"${alreadyHasFirstChecker().name}" is the first node in this project\nThere can be only one first node`);
                      }
                      changeHandler(e);
                      // console.log('input', input);
                    }}
                  />
                  First
                  <Input
                    type="radio"
                    name="isFirst"
                    value="null"
                    onChange={changeHandler}
                  />
                  Transitional
                  <Input
                    type="radio"
                    name="isFirst"
                    value="false"
                    onChange={async (e) => {
                      if (node.Connections.reduce((acc, connection) => {
                        acc.push(connection.to);
                        return acc;
                      }, []).length > 0) {
                        // eslint-disable-next-line no-alert
                        alert('Finish node can not have outgoing connections\nRemove them to set this node as finish');
                      } else {
                        changeHandler(e);
                      }
                    }}
                  />
                  Finishing
                  <Button onClick={() => { setIsEditingIsFirst(!isEditingIsFirst); }}>Save</Button>
                  <Button onClick={() => { setInput({ ...input, isFirst: node.isFirst }); setIsEditingIsFirst(!isEditingIsFirst); }}>Cancel</Button>
                </>
              )
              : (
                <>
                   {switchForIsFirst(input.isFirst || node.isFirst)}
                   <Button onClick={() => { setInput({ ...input, isFirst: node.isFirst }); setIsEditingIsFirst(!isEditingIsFirst); }}>Edit isFirst</Button>
                </>
              )}
        <Modal isOpen={isEditingConnections}>
          <ModalHeader><strong>Available nodes</strong></ModalHeader>
          <ModalBody>
            {allProjectNodes.map((projectNode) => (
              <div key={projectNode.id}>
              {projectNode.name}
              <Input
                type="checkbox"
                checked={connections.includes(projectNode.id)}
                onChange={() => {
                  setConnections((prev) => {
                    if (prev.includes(projectNode.id)) {
                      const indexOfNode = prev.indexOf(projectNode.id);
                      return [...prev.slice(0, indexOfNode), ...prev.slice(indexOfNode + 1)];
                    }
                    prev.push(projectNode.id);
                    return [...prev, projectNode.id];
                  });
                }}
              />
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsEditingConnections(!isEditingConnections)}>
            Discard Changes
            </Button>
            <Button variant="primary" onClick={() => setIsEditingConnections(!isEditingConnections)}>
            Save
            </Button>
          </ModalFooter>
        </Modal>
            Connections:
            {allProjectNodes.filter((projNode) => node.Connections.reduce((acc, connection) => {
              acc.push(connection.to);
              return acc;
            }, []).includes(projNode.id)).map((proNode) => <div key={proNode.id}>{proNode.name}</div>)}
          <Button onClick={() => {
            setConnections(node.Connections.reduce((acc, connection) => {
              acc.push(connection.to);
              return acc;
            }, []));
            console.log(connections);
            setIsEditingConnections(!isEditingConnections);
          }}
          >
          Edit connections
          </Button>
        <Button onClick={() => {
          submitHandler(node.id);
          toggle();
        }}
        >
          Submit changes
        </Button>
        <Button onClick={() => toggle()}>Discard changes</Button>
        <Button onClick={() => console.log(connections)}>Log</Button>
      </CardBody>
    </Card>
  );
}
