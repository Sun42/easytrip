import { combineReducers } from 'redux';
import filters from './filters';
import login from './login';
import trips from './trips';

export default combineReducers({
  login,
  filters,
  trips,
});
