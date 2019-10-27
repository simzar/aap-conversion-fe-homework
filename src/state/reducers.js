import { combineReducers } from 'redux';
import users from './users/usersReducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
