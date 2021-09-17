import http from './base-api-service';


const filterItem = (search, categories) => http.get(`/items?search=${search ? search : ''}&categories=${categories ? categories : ''}`)


const detail = (id) => http.get(`/items/${id}`);

const update = (id) => http.patch(`/items/${id}`);

const remove = (id) => http.delete(`/items/${id}`);


const create = (item) => {
  const data = new FormData()

  data.append('name', item.name)
  data.append('description', item.description)
  data.append('cost', item.cost)
  data.append('categories', item.categories)
  data.append('image', item.image)
  

  return http.post('/items', data)
}

const service = {
  
  filterItem,
  detail,
  create,
  update,
  remove,

};
export default service;



