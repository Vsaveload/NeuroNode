import {
  ADD_NODE, UPDATE_NODE, FIRST_NODE, GET_NODES, DELETE_NODE,
} from '../types';

// eslint-disable-next-line default-param-last
export default function nodeReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NODE:
      return [...state, payload];
    case UPDATE_NODE:
      return state.map((node) => (node.id === payload.id ? payload : node));
    case FIRST_NODE:
      return payload;
    case GET_NODES:
      return payload;
    case DELETE_NODE:
      return state.filter((node) => node.id !== payload);
    default:
      return state;
  }
}
