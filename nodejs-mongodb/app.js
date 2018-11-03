// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize express app
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});