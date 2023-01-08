const express = require('express');
const router = express.Router();
router.post
module.exports = router;
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="number1"><button type="submit"> Add Product </button>')
})
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
module.exports = router;