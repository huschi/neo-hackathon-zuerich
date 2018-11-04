const express = require('express');
const bodyParser = require('body-parser');

// Imports routes for the assets & users
const asset = require('./routes/asset.route');
const user = require('./routes/user.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dbUrl = 'mongodb://admin:JBNYtaIi46Ev7K5w@ds151533.mlab.com:51533/proof-of-delivery';
const mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', asset);
app.use('/users', user);

let port = 8080;

// server: start and listen
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
