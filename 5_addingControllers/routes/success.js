const path = require('path');
const express = require('express');
const router = express.Router();
const success = require('../controllers/success');

router.post('/success', success.postSuccess);
module.exports = router