const createError = require('http-errors');
const Rental = require('../models/rental.model');
const Item = require('../models/item.model')


module.exports.exists = (req, res, next) => {
  const id = req.params.rentalId || req.params.id;
  Rental.findById(id)
    .populate({
        path: 'item',
        populate: {
            path: 'renter', 
            select: 'name avatar email'
        }
    })
    .populate({
        path: 'renter',
        select: 'name avatar email'
        
    })
    .populate({
        path: 'tenant',
        select: 'name avatar email'

    })
    
    .then(rental => {
      if (rental) {
        req.rental = rental;
        next();
      } else {
        next(createError(404, 'Rental not found'));
      }
    })
    .catch(error => next(error));
}


module.exports.isDone = (req, res, next) => {
    if (req.rental.status === 'Confirmed') {
      next()
    } else {
      next(createError(403, 'Rental status is not confirmed'))
    }
  }


module.exports.isOwner = (req, res, next) => {
    if (req.user.id == req.rental.renter || req.user.id == req.rental.tenant) {
      next()
    } else {
      next(createError(403, 'You are not allowed to access to this rental'))
    }
  }

module.exports.isAvailable = (req, res, next) => {
    if ( req.rental.status == 'Pending' || req.rental.status == 'Cancelled') {
      next()
    } else {
      next(createError(403, 'Item already rented'))
    }
  }

