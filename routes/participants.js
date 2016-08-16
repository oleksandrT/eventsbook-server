var express = require('express');
var router = express.Router();
var Participant = require('../models/participant');
var jwt = require('jsonwebtoken');

var SECRET_WORD = 'wubuiproj';

router.get('/', function(req, res, next) {
    res.json({
        msg: 'This is participants route get reqest'
    });
});

/*
router.get('/list/:id', function(req, res, next) {
    var root = process.env.THIS_URI || 'http://localhost:3000';

    Event.find({organizer: req.params.id}, function(err, data) {
        if (err) return next(err);
        console.log('Request for events of current user');
        console.log('Requested data: ', data);

        var response = [];
        data.forEach(function (item, i, arr) {
            response.push({
                title: data[i].title,
                link: root + '/api/events/' + data[i]._id
            });
        });

        console.log(response);
        console.log(root);

        res.json(response);
    });
});

router.get('/:id', function(req, res, next) {
    Event.findOne({_id: req.params.id}, function(err, data) {
        if (err) return next(err);
        console.log('Request for events of current user');
        console.log('Requested data: ', data);

        res.json(data);
    });
});
*/

router.post('/', function(req, res, next) {
    console.log('START: participants route, post request');

    var participantData = JSON.parse(req.body.data);
    var eventId = participantData.eventId;

    //console.log('request data: ', req.body);
    // console.log('participantData: ', participantData);
    // console.log('eventId: ', eventId);


    var newParticipant = new Participant({
        name: participantData.participant.name,
        email: participantData.participant.email,
        phone: participantData.participant.phone,
        eventId: eventId
    });

    participantData.participant.classes.forEach(function (item, i ,arr) {
        //console.log('classes array item: ', item);
        newParticipant.classes.push({
            title: item.cls.title,
            checked: item.checked
         });
    });

    newParticipant.save(function(err, newParticipant) {
        if (err) return console.error(err);
        console.log('END: participants route, post request');
        res.json({message: 'Saved successfully'});
    });

});

module.exports = router;
