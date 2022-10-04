import axios from 'axios';
import { STATISTICS } from '../types';

export const setStatistics = (payload) => ({ type: STATISTICS, payload });

export const setStatisticsAsync = (id) => (dispatch) => {
  axios(`http://localhost:3001/stat/byid/${id}`)
    .then((res) => dispatch(setStatistics(res.data)))
    .catch(console.log);
};
