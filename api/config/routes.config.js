const express = require('express');
// const secure = require('../middlewares/secure.mid');
const upload = require('../config/multer.config');
const router = express.Router();


const users = require('../controllers/user.controller');

router.post('/users', upload.single('avatar'), users.register);



module.exports = router;