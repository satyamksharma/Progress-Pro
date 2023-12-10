const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(
    'mongodb+srv://ksatyam433:rjbUeQKQHqekiwTd@cluster0.sp4vkvx.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) throw err;
        console.log('Connected to MongoDB!');
    }
);

module.exports = mongoose.connection;
