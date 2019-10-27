import api from '../../utils/apiService';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const usersApi = {
  fetchUsers: () => api.get(USERS_URL),
};

export default usersApi;
