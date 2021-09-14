const createError = require('http-errors');
const Rental = require('../models/rental.model');
const Item = require('../models/item.model');



// renter y tenant!
module.exports.create = (req, res, next) => {
    const data = { startDate, endDate } = req.body
    Rental.create({
        ...data,
        renter: req.item.renter.id,
        tenant: req.user.id,
        item: req.item.id
        
    })
    .then(rental => res.status(201).json(rental))
    .catch(next)
    
}


module.exports.detail = (req, res, next) => {
    res.json(req.rental);
  }


module.exports.delete = (req, res, next) => {
    Rental.deleteOne({ _id: req.rental.id })
      .then(() => res.status(204).send())
      .catch(error => next(error))
  }

//   module.exports.update = (req, res, next) => {
//     const { id } = req.params;
//     Rental.findByIdAndUpdate(id, req.body, { new: true })
//       .then(rental => res.status(202).json(rental))
//       .catch(next)
//   }




