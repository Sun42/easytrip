import { combineReducers } from 'redux';
import filters from './filters';
import login from './login';

export default combineReducers({
  filters,
  login,
});
