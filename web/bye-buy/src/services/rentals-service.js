import http from './base-api-service';


const detail = (id, itemId) => http.get(`/items/${itemId}/rentals/${id}`);

const create = (itemId, dates) => http.post(`/items/${itemId}/rentals`, dates);

const service = {
  detail,
  create
};

export default service;