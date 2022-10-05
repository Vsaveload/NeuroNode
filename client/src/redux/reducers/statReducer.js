/* eslint-disable default-param-last */
import { UPDATE_STATISTICS, SET_STATISTICS } from '../types';

export default function statReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_STATISTICS:
      // if (state.length > 0)
      // return state.map((stat) => (stat.id === payload.id ? payload : stat));
      return [...state, payload];
    case UPDATE_STATISTICS:
      return state.map((stat) => (stat.id === payload.id ? payload : stat));
    default:
      return state;
  }
}
