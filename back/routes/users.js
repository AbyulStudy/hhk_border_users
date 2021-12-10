const express = require('express');
const router = express.Router();
const Controllers = require('../controllers')

/* GET users listing. */
router.get('/', Controllers.users.usershello);
router.post('/login', Controllers.users.login);
router.post('/logout', Controllers.users.logout);
router.post('/signup', Controllers.users.signup);

module.exports = router;
