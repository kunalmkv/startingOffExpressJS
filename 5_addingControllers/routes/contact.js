const path = require('path');
const express = require('express');
const router = express.Router();

const contactPage = require('../controllers/contact')
router.get('/contactUs', contactPage.getContact);
module.exports = router