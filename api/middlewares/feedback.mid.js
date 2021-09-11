const createError = require('http-errors');
const Feedback = require('../models/feedback.model');

module.exports.exists = (req, res, next) => {
  const id = req.params.feedbackId || req.params.id;
  Feedback.findById(id)
    .then(feedback => {
      if (feedback) {
        req.feedback = feedback;
        next();
      } else {
        next(createError(404, 'Feedback not found'));
      }
    })
    .catch(error => next(error));
}

