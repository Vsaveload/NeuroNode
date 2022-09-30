import { GET_CATEGORIES, UPDATE_CATEGORIES } from '../types';

export default function categoriesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return payload;
    case UPDATE_CATEGORIES:
      return state.map((category) => (category.id === payload.id ? payload : category));
    default:
      return state;
  }
}
