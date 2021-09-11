const createError = require('http-errors');
const Chat = require('../models/chat.model');
const Message = require('../models/message.model');



module.exports.create = (req, res, next) => {
    const data = { text } = req.body
    const sentTo = req.params.userId
    Chat.create({
      ...data,
      sentTo,
      user: req.user.id,
      
    })
      .then(chat => res.status(201).json(chat))
      .catch(next)
  }



// new Chat ({
//     user: req.user.id - req.params.userId 
// })
