const createError = require('http-errors');
const Rental = require('../models/rental.model');
const Item = require('../models/item.model');



module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    next(createError(401, 'user is not authenticated'))
  }
};


module.exports.isUser = (req, res, next) => {
  if (req.params.id === 'me' || req.user.id == req.params.id) {
    next();
  } else {
    next(createError(403, 'You are not authorized'))
  }
};









