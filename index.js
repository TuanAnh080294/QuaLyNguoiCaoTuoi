const express = require('express');
const app = express();
const port = 3000;

// var userRoute = require('./routes/user.route');

const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');

const adapters = new fileSync('data.json');
const db = low(adapters);

db.defaults({ Sheet1: [], user: {} }).write();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', db.get('Sheet1').value());
});

// app.use('/auth', authRoute);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});