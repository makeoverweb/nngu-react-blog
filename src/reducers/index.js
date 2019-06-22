import { combineReducers } from 'redux';
import userReducer from './user';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
  user: userReducer,
  router: connectRouter(history)
});