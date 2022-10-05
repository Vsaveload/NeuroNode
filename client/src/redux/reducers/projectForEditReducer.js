/* eslint-disable default-param-last */
import { SET_PROJECT_FOR_EDIT } from '../types';

export default function setProjectForEditReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PROJECT_FOR_EDIT:
      return [payload];
    default:
      return state;
  }
}
