import axios from 'axios';
import { SET_PROJECT_FOR_EDIT } from '../types';

export const setProjectForEdit = (payload) => ({ type: SET_PROJECT_FOR_EDIT, payload });

export const setProjectForEditAsync = (id) => (dispatch) => {
  axios(`http://localhost:3001/project/${id}`)
    .then((res) => dispatch(setProjectForEdit(res.data)))
    .catch(console.log);
};
