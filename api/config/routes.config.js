const express = require('express');
const createError = require('http-errors');
const secure = require('../middlewares/secure.mid');
const item = require('../middlewares/item.mid');
const rental = require('../middlewares/rental.mid');
const feedback = require('../middlewares/feedback.mid');


const auth = require('../controllers/auth.controller');
const users = require('../controllers/users.controller');
const items = require('../controllers/item.controller');
const rentals = require('../controllers/rental.controller');
const feedbacks = require('../controllers/feedback.controller');
const chats = require('../controllers/chat.controller');
const messages = require('../controllers/message.controller');


const upload = require('../config/multer.config');
const router = express.Router();



// AUTH
router.post('/register', upload.single('avatar'), auth.register);
router.post('/login', auth.login);
router.post('/logout', auth.logout);
router.get('/authenticate/google', auth.loginWithGoogle)
router.get('/authenticate/google/cb', auth.doLoginWithGoogle)


// USER
router.get('/users', users.list);
router.get('/users/:id', users.getUser);
router.patch('/users/:id', secure.isAuthenticated, secure.isUser, users.update);
router.delete('/users/:id', secure.isAuthenticated, secure.isUser, users.delete);


// ITEM
router.get('/items', secure.isAuthenticated, items.filter);
router.get('/items/:id', secure.isAuthenticated, item.exists, items.detail);
router.post('/items', secure.isAuthenticated, upload.single('image'), items.create );
router.patch('/items/:id', secure.isAuthenticated, item.exists, item.isRenter, items.update);
router.delete('/items/:id', secure.isAuthenticated, item.exists, item.isRenter, items.delete);



// RENTAL
router.post('/items/:itemId/rentals', secure.isAuthenticated, item.exists, rentals.create);
router.get('/items/:itemId/rentals/:id', 
    secure.isAuthenticated, 
    item.exists, 
    rental.exists, 
    rental.isOwner, 
    rental.isAvailable,
    rentals.detail
); 

router.delete('/items/:itemId/rentals/:id', 
    secure.isAuthenticated,
    rental.exists, 
    rental.isOwner, 
    rentals.delete);


// FEEDBACK
// // midware de rental isDone ---- 
// router.post('/rental/:rentalId/feedback/', secure.isAuthenticated, rental.exists, rental.isDone, feedbacks.create);
// router.get('/reviews/', secure.isAuthenticated, feedbacks.list);
// router.delete('/reviews/feedbackId', secure.isAuthenticated, feedback.exists, secure.isUser, feedbacks.delete);



// // CHAT
// router.post('/users/chat/:userId/create', secure.isAuthenticated, chats.create);
// // router.get('/items/itemId/chat/:id', secure.isAuthenticated, chats.get)
// // router.post('/items/userId/chat/:id/new-message', secure.isAuthenticated, chats.new)
// // router.get('/users/chat/:chatId', secure.isAuthenticated, chats.detail)


// // MESSAGE 
// router.get('/chats/messages/:chatId/create', secure.isAuthenticated, messages.create)

router.use((req, res, next) => next(createError(404, 'Route not found')))

module.exports = router;



