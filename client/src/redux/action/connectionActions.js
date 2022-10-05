import axios from 'axios';
import { UPDATE_CONNECTIONS } from '../types';

export const updateConnection = (payload) => ({ type: UPDATE_CONNECTIONS, payload });

export const updateConnectionAsync = (connection, input) => (dispatch) => {
  axios.patch(`http://localhost:3001/connections/${connection.id}`, input)
    .then((res) => dispatch(updateConnection(res.data)))
    .catch(console.log);
};
