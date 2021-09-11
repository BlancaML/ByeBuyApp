import http from './base-api-service';

const logout = () => http.post('/logout')

const login = (email, password) => http.post('/login', { email, password })

const list = () => http.get('/users');

const details = (id) => http.get(`/users/${id}`);

const getUser = (id) => http.get(`/users/${id}`)

const createUser = (user) => {
  const data = new FormData()

  data.append('name', user.name)
  data.append('email', user.email)
  data.append('password', user.password)
  data.append('avatar', user.avatar)

  return http.post('/users', data)
}

const service = {
  list,
  details,
  login,
  logout,
  getUser,
  createUser
};

export default service;
