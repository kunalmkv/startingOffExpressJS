const http = require('http');
const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    console.log('In the about product section ');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="number1"><button type="submit"> Add Product </button>')
})
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use((req, res, next) => {
    //console.log('In the another middleware ');
    res.send('<h1> hello from EXPRESS JS</H1>')
})
/*const server = http.createServer(app);
server.listen(4000);*/
app.listen(3000);
