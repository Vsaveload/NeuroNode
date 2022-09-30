import {
  SET_SIGNUP, SET_LOGIN, LOGOUT, SET_AUTH,
} from '../types';

// eslint-disable-next-line default-param-last
export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SIGNUP:
      return payload;

    case SET_LOGIN:
      return payload;

    case LOGOUT:
      return null;

    case SET_AUTH:
      return payload;

    default:
      return state;
  }
};
