import http from './base-api-service';


const detail = (id, itemId) => http.get(`/items/${itemId}/rentals/${id}`);

const create = (rental, itemId) => http.post(`/items/${itemId}/rentals`, rental);

const createRental = (rental, itemId, renterId) => {
  const data = new FormData()

  data.append('startDate', rental.startDate)
  data.append('endDate', rental.description)

  return http.post(`/items/${itemId}/rentals/${renterId}`, data)
}

const service = {
  detail,
  create,
  createRental
};

export default service;