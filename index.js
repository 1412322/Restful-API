const express = require('express');
const path = require('path');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');

// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/studentmanagement');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// initialize routes
app.use('/api/students', routes);

//error handling middleware
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function() {
	console.log('Running on port 3000');
});