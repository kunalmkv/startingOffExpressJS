const path = require('path');

const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProduct);
router.get('/product', productsController.postProduct)
module.exports = router;