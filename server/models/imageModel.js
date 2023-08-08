const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    category:{
        type:String
    },
    img:{
        type:String
    }

})

module.exports = mongoose.model('Imageservice', dataSchema)