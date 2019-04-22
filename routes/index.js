var express = require('express');
var router = express.Router();

const string_controller = require('../controllers/string.controller');

/* GET home page. */
router.post('/test', string_controller.string_cut);

module.exports = router;
