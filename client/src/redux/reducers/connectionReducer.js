/* eslint-disable default-param-last */
import { UPDATE_CONNECTIONS } from '../types';

export default function connectionReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CONNECTIONS:
      return state.map((connection) => (connection.id === payload.id ? payload : connection));
    default:
      return state;
  }
}
