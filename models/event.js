var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, required: true}

    title: {type: String, required: true},
    date: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    classes: [],
    teachers: []
});

module.exports = mongoose.model('Event', schema);
