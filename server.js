const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const officers = require('./routes/api/officers');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = 'mongodb://admin:password22@ds237563.mlab.com:37563/tictoc';

// Connect to MongoDB with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/officers', officers);

// process.env.Port is for Heroku and 5000 is for localhost
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
