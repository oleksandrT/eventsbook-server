var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    date: {type: String},
    location: {type: String, required: true},
    description: {type: String, required: true},
    classes: [{
        time: String,
        title: String,
        description: String
    }],
    teachers: [{
        name: String,
        description: String
    }]
});

module.exports = mongoose.model('Event', schema);
