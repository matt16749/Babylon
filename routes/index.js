const app = require('../public/javascripts/app');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', app);

module.exports = router;
