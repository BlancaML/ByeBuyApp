const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createError(401, 'user is not authenticated'))
  }
};

module.exports.isUser = (req, res, next) => {
  if (req.params.id === 'me' || req.user.id == req.params.id) {
    next();
  } else {
    next(createError(403))
  }
};

module.exports.isOwner = (req, res, next) => {
  Rental.findById(req.params.id)
    .then(rental => {
      if (rental) {
        if (rental.renter == req.user.id) {
          req.rental = rental
          next()
        } else {
          next(createError(403))
        }
      }
    })
    .catch(next)
};

