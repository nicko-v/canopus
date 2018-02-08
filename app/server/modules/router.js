'use strict';

const bodyParser = require('body-parser');
const router     = require('express').Router();
const index      = require('../controllers/index.controller.js');


router.get('*', index);


module.exports = router;