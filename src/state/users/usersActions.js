import {
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_SUCCESS,
} from './usersModel';
import api from './usersApi';

const fetchUsersStart = () => ({
  type: USERS_FETCH,
});

const fetchUsersSuccess = (users) => ({
  type: USERS_FETCH_SUCCESS,
  payload: users,
});

const fetchUsersError = () => ({
  type: USERS_FETCH_ERROR,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const users = await api.fetchUsers();
    dispatch(fetchUsersSuccess(users));
  } catch (e) {
    dispatch(fetchUsersError());
  }
};
