const createError = require('http-errors');
const Chat = require('../models/chat.model');
const Message = require('../models/message.model');




// crear el chat desde la página de un producto, donde se vea el icono de chat para hablar con el renter
// ({ from: req.params.id, to: req.user.id ?¿?¿  - el msg va al dueño del producto} 
//midwares chat?? isFrom, 


module.exports.create = (req, res, next) => {
    Message.create({
      text: req.body.text,
      user: req.user.id,
      chat: req.params.chatId
    })
      .then(tweet => res.status(201).json(tweet))
      .catch(next)
  }


// new Message({
//     tezt: req.body.text,
//     user: req.user.id,
//     chat: req.params.chatId
// })