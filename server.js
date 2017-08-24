const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const routes = require('./routes/index');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.set('layout', 'layout');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(morgan('dev'));

app.use(routes);

app.listen(3000, function() {
  console.log('App is running on localhost: 3000');
});
