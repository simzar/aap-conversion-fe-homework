import { combineReducers } from 'redux';
import campaigns from './campaigns/campaignsReducer';
import users from './users/usersReducer';

const rootReducer = combineReducers({
  campaigns,
  users,
});

export default rootReducer;
