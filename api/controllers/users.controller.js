const createError = require('http-errors');
const User = require('../models/user.model');


module.exports.list = (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => next (error))
     
}

module.exports.getUser= (req, res, next) => {
  if (req.params.id === 'me') {
    return res.json(req.user)
  }
  User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(next)
}



module.exports.update = (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.status(202).json(user))
    .catch(next)
}


module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.status(204).end())
    .catch(next)
}