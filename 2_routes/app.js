const http = require('http');
const routes = require('./routes');
const express = require('express');
const app = express();
app.use('/', (req, res, next) => {
    console.log('this always runs ')
    res.send('<h1>you are on about product page</h1>');
    next();
})
app.use('/about-product', (req, res, next) => {
    console.log('In the about product section ')
})
app.use((req, res, next) => {
    console.log('In the another middleware ');
    res.send('<h1> hello from EXPRESS JS</H1>')
})
/*const server = http.createServer(app);
server.listen(4000);*/
app.listen(3000);
