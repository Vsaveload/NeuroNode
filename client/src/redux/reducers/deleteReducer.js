/* eslint-disable default-param-last */
import { DELETE_PROJECT } from '../types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_PROJECT:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};
