// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import categoriesReducer from './categoriesReducer';
import projectReducer from './projectReducer';
import statReducer from './statReducer';
import nodeReducer from './nodeReducer';
import connectionReducer from './connectionReducer';
import projectForEditReducer from './projectForEditReducer';

const rootReducer = combineReducers({
  category: categoriesReducer,
  signup: signupReducer,
  project: projectReducer,
  stat: statReducer,
  node: nodeReducer,
  connection: connectionReducer,
  projectForEdit: projectForEditReducer,
});

export default rootReducer;
