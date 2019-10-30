import usersApi from '../usersApi';
import {
  fetchUsers,
  fetchUsersError,
  fetchUsersStart,
  fetchUsersSuccess,
} from '../usersActions';

jest.mock('../usersApi');

describe('fetchUsers', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockReset();
  });

  it('should reduce users list to a single object and dispatch success event', () => {
    usersApi.fetchUsers = jest
      .fn()
      .mockResolvedValue([
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Steve' },
        { id: 3, name: 'Josh' },
      ]);

    return fetchUsers()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(fetchUsersStart());
      expect(dispatch).toHaveBeenCalledWith(
        fetchUsersSuccess({ 1: 'Peter', 2: 'Steve', 3: 'Josh' }),
      );
      expect(dispatch).not.toHaveBeenCalledWith(fetchUsersError());
    });
  });

  it('should dispatch an error event when api rejects', () => {
    usersApi.fetchUsers = jest.fn().mockRejectedValue('error');

    return fetchUsers()(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(fetchUsersStart());
      expect(dispatch).toHaveBeenCalledWith(fetchUsersError());
    });
  });
});
