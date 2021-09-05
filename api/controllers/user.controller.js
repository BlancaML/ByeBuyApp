const createError = require('http-errors');
const User = require('../models/user.model');
const passport = require('passport');


module.exports.register = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          next(createError(400, { errors: { email: 'This email already exists' } }))
        } else {
          return User.create({
            ...req.body,
            avatar: req?.file?.path
          })
            .then(user => res.status(201).json(user))
        }
      })
      .catch(next)
  }