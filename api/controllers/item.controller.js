const createError = require('http-errors');
const Item = require('../models/item.model');
const Rental = require('../models/item.model');
const User = require('../models/user.model')


module.exports.list = (req, res, next) => {
    Item.find()
      .then(items => res.json(items))
      .catch(error => next (error))
       
}

module.exports.detail = (req, res, next) => {
    Item.findById(req.params.id)
    // .populate({
    //     path: 'renter',
    //     select: 'name avatar email'
        
    // })
    .then(item => res.status(200).json(item))
    .catch(next)

}


module.exports.create = (req, res, next) => {
    const data = { name, description, cost, image, location, categories } = req.body
    Item.create({
        ...data,
        renter: req.user.id
    })
    .then(item => res.status(201).json(item))
    .catch(next)

}

module.exports.update = (req, res, next) => {
    const { id } = req.params
  
    Item.findByIdAndUpdate(id, req.body, { new: true })
      .then(item => res.status(202).json(item))
      .catch(next)
  }
  

module.exports.delete = (req, res, next) => {
  Item.deleteOne({ _id: req.params.id })
    .then(item => res.status(204).end())
    .catch(next)
}



// todos los items filtrados por text (req.params.search) 
// y el renter (req.params.renter) , 
// populate el usuario, solo mostraré los items que no sean del usuario que está buscando. 

// module.exports.list = (req, res, next) => {
//     const itemCriteria = {};

//     if (req.query.search) {
//         itemCriteria.name = new RegExp(req.query.search, 'i')
//     }

//     if (req.query.renter) {
//         itemCriteria.renter = req.query.renter
//     }
    
//     Promise.all([
//         Item.find()
//             .populate('renter')
//     ])
//         .then(items => {
//             const visibleItems = items.filter(item => (
//                 item.renter !== req.query.renter
//             ))
//             res.json(visibleItems)
//         })
//         .catch(next)
//   }

module.exports.createRental = (req, res, next) => {
    Rental.create({
        item: req.body.name,
        renter: req.body.renter,
        user: req.user.id,
        status: Pending
    })
       .then(item => res.status(201).json(item))
       .catch(next)
}





