const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('User', dataSchema)