const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Imports routes
const user = require('./routes/user.route');
const asset = require('./routes/asset.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dbUrl = 'mongodb://admin:JBNYtaIi46Ev7K5w@ds151533.mlab.com:51533/proof-of-delivery';
const mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB, {useCreateIndex: true, useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', user);
app.use('/', asset);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Page Not Found');
    err.status = 404;
    next(err);
  });

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });

let port = 8080;

// server: start and listen
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
