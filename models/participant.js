var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassItem  = new Schema({
    title: {type: String},
    checked: {type: Boolean}
});

var Participant = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    classes: [ClassItem],
    eventId: {type: String}
});

module.exports = mongoose.model('Participant', Participant);
