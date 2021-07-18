const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    temperature : {
        type: String,
        required : true,
    },
    humidity : {
        type: String,
        required : true,
    },
    date : {
        type: Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('dataSensor', PostSchema);