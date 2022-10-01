// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
// import categoriesReducer from './categoriesReducer';
// import projetsReducer from './projectsReducer';

const rootReducer = combineReducers({
  // categories: categoriesReducer,
  signup: signupReducer,
  // projects: projectsReducer,
});

export default rootReducer;
