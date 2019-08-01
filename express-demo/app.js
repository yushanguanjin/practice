const express = require('express');
const app = express();
let index = require('./routes/index');

app.use('/test1', function(req, res, next) {
    res.send('a');
    res.render('index');
})

app.get('/test2', function(req, res, next) {
    res.send('b');
})
app.get('/test3', index);
app.use('/test4', index);