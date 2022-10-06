/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
/* eslint-disable no-fallthrough */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Input, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { getNodesAsync } from '../../redux/action/nodeActions';

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

  useEffect(() => {
    setConnections(node.Connections.reduce((acc, connection) => {
      acc.push(connection.to);
      return acc;
    }, []));
    console.log(connections);
  }, []);

  const switchForIsFirst = (isfirst) => {
    switch (isfirst) {
      case true:
        return <div style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>First node in project</div>;
      case false:
        return <div style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Finish node</div>;
      case null:
        return <div style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>transitional node</div>;
      default:
        return <div style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>lost in time and space</div>;
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
  const dispatch = useDispatch();
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          {isEditing
            ? (
              <>
                <Input value={input.name} onChange={changeHandler} name="name" />
                <Button onClick={() => { setIsEditing(!isEditing); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Save</Button>
                <Button onClick={() => { setInput({ ...input, name: node.name }); setIsEditing(!isEditing); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Cancel</Button>
              </>
            )
            : (
              <>
                <p style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>
                  Node name:
                  {' '}
                  {input?.name ? input.name : node.name}
                </p>
                <Button onClick={() => { setInput({ ...input, name: input.name ? input.name : node.name }); setIsEditing(!isEditing); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Edit node name</Button>
              </>
            )}
        </CardTitle>
        <h3 style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Node content:</h3>
        {isEditingContent
          ? (
            <>
              <Input value={input.content} onChange={changeHandler} name="content" />
              <Button onClick={() => { setIsEditingContent(!isEditingContent); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Save</Button>
              <Button onClick={() => { setInput({ ...input, content: node.content }); setIsEditingContent(!isEditingContent); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Cancel</Button>
            </>
          )
          : (
            <>
              <CardText style={{
                overflowY: 'scroll', maxHeight: '16rem', color: 'white', marginLeft: '5px',
              }}
              >
                {input?.content || node?.content}
              </CardText>
              <Button onClick={() => { setIsEditingContent(!isEditingContent); setInput({ ...input, content: input.content ? input.content : node.content }); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Edit content</Button>
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
              <a style={{ marginTop: '5px', color: 'white', marginLeft: '5px' }}>First </a>
              <Input
                type="radio"
                name="isFirst"
                value="null"
                onChange={changeHandler}
              />
              <a style={{ marginTop: '5px', color: 'white', marginLeft: '5px' }}>Transitional </a>
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
              <a style={{ marginTop: '5px', color: 'white', marginLeft: '5px' }}>Finishing</a>
              <Button onClick={() => { setIsEditingIsFirst(!isEditingIsFirst); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Save</Button>
              <Button onClick={() => { setInput({ ...input, isFirst: node.isFirst }); setIsEditingIsFirst(!isEditingIsFirst); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Cancel</Button>
            </>
          )
          : (
            <>
              {switchForIsFirst(input.isFirst || node.isFirst)}
              <Button onClick={() => { setInput({ ...input, isFirst: node.isFirst }); setIsEditingIsFirst(!isEditingIsFirst); }} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Edit isFirst</Button>
            </>
          )}
        <Modal isOpen={isEditingConnections}>
          <ModalHeader style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}><strong>Available nodes</strong></ModalHeader>
          <ModalBody>
            {allProjectNodes.filter((el) => el.id !== node.id).map((projectNode) => (
              <div key={projectNode.id}>

                Id:
                {projectNode.id}
                {': '}
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
                      return [...prev, projectNode.id];
                    });
                  }}
                />
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsEditingConnections(!isEditingConnections)} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>
              Discard Changes
            </Button>
            <Button variant="primary" onClick={() => setIsEditingConnections(!isEditingConnections)} style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
        <p style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}>Connections:</p>
        {allProjectNodes.filter((projNode) => node.Connections.reduce((acc, connection) => {
          acc.push(connection.to);
          return acc;
        }, []).includes(projNode.id)).map((proNode) => <div key={proNode.id} style={{ marginTop: '5px', color: 'white', marginLeft: '5px' }}>{proNode.name}</div>)}
        <Button
          onClick={() => {
            setIsEditingConnections(!isEditingConnections);
          }}
          style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}
        >
          Edit connections
        </Button>
        <Button
          onClick={async () => {
            await submitHandler(node.id);
            dispatch(getNodesAsync(node.project_id));
            toggle();
          }}
          style={{ marginTop: '20px', color: 'white', marginLeft: '5px' }}
        >
          Submit changes
        </Button>
        <Button onClick={() => toggle()}>Discard changes</Button>
      </CardBody>
    </Card>
  );
}
