const http = require('http');
const routes = require('./routes');
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('In the middleware ');
    next();
})
app.use((req, res, next) => {
    console.log('In the another middleware ');
    res.send('<h1> hello from EXPRESS JS</H1>')
})
/*const server = http.createServer(app);
server.listen(4000);*/
app.listen(3000);
