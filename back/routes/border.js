var express = require('express');
var router = express.Router();
const Controllers = require('../controllers')

/* GET home page. */
router.get('/', Controllers.border.borderhello);
router.get('/list',Controllers.border.list);
router.post('/view',Controllers.border.view);
router.post('/write',Controllers.border.write);
router.put('/modify/:border_idx',Controllers.border.modify);

module.exports = router;