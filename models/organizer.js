var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('Organizer', schema);
