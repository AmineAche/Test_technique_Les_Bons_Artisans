var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
var mongoose = require ('mongoose');
var phoneRoutes = require('./routes/phone');
mongoose.set('useCreateIndex', true);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/phone',phoneRoutes);

mongoose.connect('mongodb://localhost:27017/testtech', {useNewUrlParser: true});

app.listen(8800, () => {
 console.log("Server running on port 8800");
});