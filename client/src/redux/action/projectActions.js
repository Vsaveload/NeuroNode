import axios from 'axios';
import {
  ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, SET_PROJECTS,
} from '../types';

export const addProject = (payload) => ({ type: ADD_PROJECT, payload });
export const deleteProject = (payload) => ({ type: DELETE_PROJECT, payload });
export const updateProject = (payload) => ({ type: UPDATE_PROJECT, payload });
export const setProjects = (payload) => ({ type: SET_PROJECTS, payload });

export const setProjectsAsync = () => (dispatch) => {
  axios('/myprojects')
    .then((res) => dispatch(setProjects(res.data)))
    .catch(console.log);
};

export const deleteProjectAsync = (id) => (dispatch) => {
  axios.delete(`/myprojets/${id}`)
    .then(() => dispatch(deleteProject(id)))
    .catch(console.log);
};

export const addProjectAsync = (e, input, setInput) => (dispatch) => {
  e.preventDefault();
  axios.post('/project/new', { input })
    .then((res) => {
      dispatch(addProject(res.data));
      setInput('');
    })
    .catch(console.log);
};

export const updateProjectAsync = (project, input) => (dispatch) => {
  axios.patch(`/myprojects/${project.id}`, { input })
    .then((res) => dispatch(updateProject(res.data)))
    .catch(console.log);
};
