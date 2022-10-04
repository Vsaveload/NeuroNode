/* eslint-disable default-param-last */
import {
  ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, SET_PROJECTS,
} from '../types';

export default function projectReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PROJECT:
      return [...state, payload];
    case SET_PROJECTS:
      return payload;
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== payload);
    case UPDATE_PROJECT:
      return state.map((project) => (project.id === payload.id ? payload : project));
    default:
      return state;
  }
}
