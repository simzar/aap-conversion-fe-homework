import {
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_SUCCESS,
} from './usersModel';

const initialState = {
  users: {},
  isLoading: false,
  isError: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH:
      return {
        ...initialState,
        isLoading: true,
      };
    case USERS_FETCH_SUCCESS:
      return {
        ...initialState,
        users: action.payload,
      };
    case USERS_FETCH_ERROR:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
