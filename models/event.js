var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Class = new Schema({
    timeFrom: {type: String},
    timeTo: {type: String},
    //time: {type: String},
    title: {type: String},
    description: {type: String}
});

var Teacher = new Schema({
    name: {type: String},
    description: {type: String}
});

var Event = new Schema({
    title: {type: String, required: true},
    date: {type: String},
    location: {type: String, required: true},
    description: {type: String, required: true},
    classes: [Class],
    teachers: [Teacher],
    organizer: {type: Schema.Types.ObjectId, ref: 'Organizer'}
});

module.exports = mongoose.model('Event', Event);
