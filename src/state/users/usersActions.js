import {
  USERS_FETCH,
  USERS_FETCH_ERROR,
  USERS_FETCH_SUCCESS,
} from './usersModel';
import api from './usersApi';

export const fetchUsersStart = () => ({
  type: USERS_FETCH,
});

export const fetchUsersSuccess = (users) => ({
  type: USERS_FETCH_SUCCESS,
  payload: users,
});

export const fetchUsersError = () => ({
  type: USERS_FETCH_ERROR,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const users = await api.fetchUsers();
    const usersMap = users.reduce(
      (result, { id, name }) => ({
        ...result,
        [id]: name,
      }),
      {},
    );
    dispatch(fetchUsersSuccess(usersMap));
  } catch (e) {
    dispatch(fetchUsersError());
  }
};
