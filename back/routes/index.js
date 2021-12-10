const express = require('express');
const router = express.Router();
const Controllers = require('../controllers')

/* GET home page. */
router.get('/', Controllers.index.indexhello);

module.exports = router;
