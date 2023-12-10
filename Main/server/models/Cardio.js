const { Schema, model } = require('mongoose');

const CardioSchema = new Schema({
    type: {
        type: String,
        default: 'cardio',
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 30,
    },
    distance: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Cardio = model('Cardio', CardioSchema);

module.exports = Cardio;
