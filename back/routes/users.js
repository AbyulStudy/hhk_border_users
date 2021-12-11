const express = require('express');
const router = express.Router();
const Controllers = require('../controllers')

/* GET users listing. */
router.get('/', Controllers.users.usershello);
router.post('/login', Controllers.users.login);
router.get('/logout', Controllers.users.logout);
router.post('/signup', Controllers.users.signup);
router.get('/userinfo', Controllers.users.userInfo);


module.exports = router;
