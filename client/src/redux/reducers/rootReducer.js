// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import categoriesReducer from './categoriesReducer';
import projectReducer from './projectReducer';
import statReducer from './statReducer';
import nodeReducer from './nodeReducer';

const rootReducer = combineReducers({
  category: categoriesReducer,
  signup: signupReducer,
  project: projectReducer,
  stat: statReducer,
  node: nodeReducer,
});

export default rootReducer;
