import axios from 'axios';
import { UPDATE_STATISTICS, SET_STATISTICS } from '../types';

export const setStatistics = (payload) => ({ type: SET_STATISTICS, payload });
export const updateStatistics = (payload) => ({ type: UPDATE_STATISTICS, payload });

export const setStatisticsAsync = (id) => (dispatch) => {
  axios(`http://localhost:3001/stat/byid/${id}`)
    .then((res) => dispatch(setStatistics(res.data)))
    .catch(console.log);
};
export const updateStatisticsAsync = (id) => (dispatch) => {
  axios.patch(`http://localhost:3001/stat/byid/${id}`)
    .then((res) => dispatch(updateStatistics(res.data)))
    .catch(console.log);
};
