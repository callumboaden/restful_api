const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute)

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db');
});


// ROUTES
app.get('/', (req, res) => {
    res.send('hello world');
});


app.listen(3000);