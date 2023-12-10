const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use('/api/:uid', workoutRoutes);

app.use('/api/user', userRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
    .connect('')
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    });
