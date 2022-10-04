/* eslint-disable default-param-last */
import { STATISTICS } from '../types';

export default function statReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case STATISTICS:
      return payload;
    default:
      return state;
  }
}
