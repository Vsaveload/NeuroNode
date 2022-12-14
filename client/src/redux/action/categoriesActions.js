import axios from 'axios';
import { GET_CATEGORIES, UPDATE_CATEGORIES } from '../types';

export const getCategories = (payload) => ({ type: GET_CATEGORIES, payload });
export const updateCategories = (payload) => ({ type: UPDATE_CATEGORIES, payload });

export const getCategoriesAsync = () => (dispatch) => {
  axios('http://localhost:3001/allcategories')
    .then((res) => dispatch(getCategories(res.data)))
    .catch(console.log);
};

export const updateCategoriesAsync = (category, input) => (dispatch) => {
  axios.patch(`http://localhost:3001/allcategories/${category.id}`, { input })
    .then((res) => dispatch(updateCategories(res.data)))
    .catch(console.log);
};
