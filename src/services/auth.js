import axios from 'axios';

const login = async (username, password) => axios.post('/login', {
  username,
  password,
})
  .then(response => response)
  .catch((error) => { throw error; });

export default login;
