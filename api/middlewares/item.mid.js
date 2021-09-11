const createError = require('http-errors');
const Item = require('../models/item.model');



module.exports.exists = (req, res, next) => {
  const id = req.params.itemId || req.params.id;
  Item.findById(id)
    .populate('renter')
    .then(item => {
      if (item) {
        req.item = item;
        next();
      } else {
        next(createError(404, 'Item is not found'));
      }
    })
    .catch(error => next(error));
}


// el user.owner está a false y pasa a true cuando crea un item
module.exports.isRenter = (req, res, next) => {
    if (req.user.id == req.item.renter) {
      next()
    } else {
      next(createError(403, 'You are not allowed to access to this item'))
    }
  }

