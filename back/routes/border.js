var express = require('express');
var router = express.Router();
const Controllers = require('../controllers')

/* GET home page. */
router.get('/', Controllers.border.borderhello);
router.get('/list',Controllers.border.list);
router.get('/view',Controllers.border.view);
router.post('/write',Controllers.border.write);
router.put('/modify/:border_idx',Controllers.border.modify);
router.delete('/delete/:border_idx',Controllers.border.delete);

module.exports = router;
