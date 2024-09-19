// express installation
const express = require('express');
const app = express();
const keys = require('./config/keys.js');

// setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// setting up database models
require('./model/Account'); // This should match the path where your Account.js is located

//setting up routes

require('./routes/authenticationRoutes.js')(app);

// Connecting
app.listen(keys.port, () => {
    console.log("listening on " + keys.port);
});
