import http from './base-api-service';


const list = () => http.get('/items');

const detail = (id) => http.get(`/items/${id}`);

const create = (item) => http.post('/items', item);

const update = (id) => http.patch(`/items/${id}`);

const remove = (id) => http.delete(`/items/${id}`);


const createItem = (item) => {
  const data = new FormData()

  data.append('name', item.name)
  data.append('description', item.description)
  data.append('cost', item.cost)
  data.append('categories', item.categories)
  data.append('image', item.image)
  data.append('location', item.location)


  return http.post('/items', data)
}

const service = {
  list,
  detail,
  create,
  update,
  remove,

};
export default service;