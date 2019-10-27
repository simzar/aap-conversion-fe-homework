import {
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_SUCCESS,
} from './usersModel';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH:
      return {
        users: [],
        isLoading: true,
        isError: false,
      };
    case USERS_FETCH_SUCCESS:
      return {
        users: action.payload,
        isLoading: false,
      };
    case USERS_FETCH_ERROR:
      return {
        users: [],
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
