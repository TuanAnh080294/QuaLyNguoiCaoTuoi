const express = new express();
const app = express();
const port = 3000;

var userRoute = require('./routes/user.route');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index');
});

app.use('/auth', authRoute);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});