
const express = require('express');
const router = express.Router();
const homePage = require('../controllers/defaultHome');

router.get('/', homePage.HomeScreen);
module.exports = router