const mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
    _id:Number,
    img: {
       data: Buffer,
       contentType: String
    }
},{
    collection: 'teamLogo'
});

module.exports = new mongoose.model('Image', imageSchema);