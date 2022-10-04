import axios from 'axios';
import {
  ADD_NODE, UPDATE_NODE, FIRST_NODE, GET_NODES, DELETE_NODE,
} from '../types';

export const addNode = (payload) => ({ type: ADD_NODE, payload });
export const updateNode = (payload) => ({ type: UPDATE_NODE, payload });
export const firstNode = (payload) => ({ type: FIRST_NODE, payload });
export const getNodes = (payload) => ({ type: GET_NODES, payload });
export const deleteNode = (payload) => ({ type: DELETE_NODE, payload });

export const addNodeAsync = (e, input, setInput) => (dispatch) => {
  e.preventDefault();
  axios.post('/node/new', input)
    .then((res) => {
      dispatch(addNode(res.data));
      setInput('');
    })
    .catch(console.log);
};

export const updateNodeAsync = (node, input) => (dispatch) => {
  axios.patch(`/node/${node.id}`, { input })
    .then((res) => dispatch(updateNode(res.data)))
    .catch(console.log);
};

export const firstNodeAsync = (id) => (dispatch) => {
  axios(`/node/first${id}`)
    .then((res) => dispatch(firstNode(res.data)))
    .catch(console.log);
};

export const getNodesAsync = (id) => (dispatch) => {
  axios(`/node/allinproject${id}`)
    .then((res) => dispatch(getNodes(res.data)))
    .catch(console.log);
};

export const deleteNodeAsync = (id) => (dispatch) => {
  axios.delete(`/node/${id}`)
    .then(() => dispatch(deleteNode(id)))
    .catch(console.log);
};
