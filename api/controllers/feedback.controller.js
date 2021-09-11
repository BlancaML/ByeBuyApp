const createError = require('http-errors');
const Feedback = require('../models/feedback.model');
const Rental = require('../models/rental.model');


module.exports.create = (req, res, next) => {
    Feedback.create(req.body)
      .then(feedback => res.status(201).json(feedback))
      .catch(error => next(error))
  }


module.exports.list = (req, res, next) => {
    Feedback.find()
      .then(feedbacks => res.json(feedbacks))
      .catch(error => next(error));
  }

  
module.exports.delete = (req, res, next) => {
    Feedback.deleteOne({ _id: req.feedback.id })
      .then(() => res.status(204).send())
      .catch(error => next(error))
  }

