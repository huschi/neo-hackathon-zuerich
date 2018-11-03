const express = require('express');
const bodyParser = require('body-parser');

// Imports routes for the containers
const container = require('./routes/container.route');
const person = require('./routes/person.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dbUrl = 'mongodb://admin:admin123@ds251223.mlab.com:51223/containers';
const mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/containers', container);
app.use('/persons', person);

let port = 8080;

// server: start and listen
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
