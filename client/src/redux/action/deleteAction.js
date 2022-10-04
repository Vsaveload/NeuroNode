import axios from 'axios';
import { DELETE_PROJECT } from '../types';

export const setDelete = (data) => ({ type: DELETE_PROJECT, payload: data });

export const deleteProject = (id, dispatch) => {
  axios.delete(`http://localhost:3001/myprojects/${id}`)
    .then(() => dispatch(setDelete(id)))
    .catch(console.log);
};
