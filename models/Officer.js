const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OfficerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    badgeNumber: {
        type: Number,
        required: true
    },
    rank: {
        type: String
    },
    phone: {
        type: Number
    },
    station: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Officer = mongoose.model('officers', OfficerSchema);
