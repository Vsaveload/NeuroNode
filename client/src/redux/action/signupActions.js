import axios from 'axios';
import {
  SET_SIGNUP, SET_LOGIN, LOGOUT, SET_AUTH,
} from '../types';

export const setSignup = (data) => ({ type: SET_SIGNUP, payload: data });
export const setLogin = (data) => ({ type: SET_LOGIN, payload: data });
export const logout = () => ({ type: LOGOUT });
export const CHECK_AUTH_THUNK = (data) => ({ type: SET_AUTH, payload: data });

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('http://localhost:3001/auth/signup', inputs)
    .then((res) => dispatch(setSignup(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('http://localhost:3001/auth/login', inputs)
    .then((res) => dispatch(setLogin(res.data)))
    .catch(console.log);
};

export const logoutUser = () => (dispatch) => {
  axios('http://localhost:3001/auth/logout')
    .then(() => dispatch(logout()))
    .catch(console.log);
};

export const checkAuth = () => (dispatch) => {
  axios.post('http://localhost:3001/auth/check')
    .then((res) => dispatch(CHECK_AUTH_THUNK(res.data)))
    .catch(console.log);
};
