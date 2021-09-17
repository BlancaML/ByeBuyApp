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


module.exports.login = (req, res, next) => {
    passport.authenticate('local-auth', (error, user, validations) => {
      if (error) {
        next(error);
      } else if (!user) {
        next(createError(400, { errors: validations }))
      } else {
        req.login(user, error => {
          if (error) next(error)
          else res.json(user)
        })
      }
    })(req, res, next);
  };


module.exports.logout = (req, res, next) => {
    req.logout();
    res.status(204).end()
  }


module.exports.loginWithGoogle = (req, res, next) => {
    const passportController = passport.authenticate('google-auth', {
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
    });
  
    passportController(req, res, next);
};
  

module.exports.doLoginWithGoogle = (req, res, next) => {
    const passportController = passport.authenticate('google-auth', (error, user, validations) => {
      if (error) {
        next(error);
      } else {
        req.login(user, error => {
          if (error) {
            next(error)
          } else {
            res.redirect(`${process.env.REACT_APP_URL}/google/cb`)
          }
        })
      }
    })
    
    passportController(req, res, next);
}
