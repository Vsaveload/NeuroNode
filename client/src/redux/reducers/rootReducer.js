// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import deleteReducer from './deleteReducer';
import signupReducer from './signupReducer';
// import categoriesReducer from './categoriesReducer';
// import projetsReducer from './projectsReducer';

const rootReducer = combineReducers({
  // categories: categoriesReducer,
  signup: signupReducer,
  setDelete: deleteReducer,
  // projects: projectsReducer,
});

export default rootReducer;
