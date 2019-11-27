const express = require('express');
const app = express();
const port = 3000;
var db = require('./db');
var nguoiCaoTuoiController = require('./controllers/nguoiCaoTuoi.controller');
// var userRoute = require('./routes/user.route');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', nguoiCaoTuoiController.index);
app.post('/add', nguoiCaoTuoiController.add);

// app.put('/deleteStt', nguoiCaoTuoiController.deleteStt)

// app.use('/auth', authRoute);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});