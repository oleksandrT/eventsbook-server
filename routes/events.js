var express = require('express');
var router = express.Router();
var Event = require('../models/event');
var jwt = require('jsonwebtoken');

var SECRET_WORD = 'wubuiproj';

// router.get('/:login', function(req, res, next) {
//     console.log('get organizer route');
//     Organizer.findOne({login: req.params.login}, function (err, user) {
//         res.json({
//             name: 'Klint',
//             email: 'klint@eastwood.com'
//         });
//     });
// });

router.get('/', function(req, res, next) {
    res.json({
        msg: 'This is events route get reqest'
    });
});

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

router.post('/', function(req, res, next) {
    console.log('post organizer route');
    // Organizer.findOne({login: req.body.username, password: req.body.password}, function (err, user) {
    //     res.json({
    //         access_token: token,
    //         expired_in: 86200,
    //         user: user
    //     });
    // });

    console.log('req.body: ', req.body);

    var eventData = JSON.parse(req.body.event);
    var userId = (req.body.userId);
    console.log('eventData: ', eventData);
    console.log('eventData time: ', eventData.classes[0].time);
    console.log('userId: ', userId);

    var newEvent = new Event({
        title: eventData.title,
        date: eventData.date,
        location: eventData.location,
        description: eventData.description
    });

    eventData.classes.forEach(function (item, i ,arr) {
        //console.log('classes array item: ', item);
        newEvent.classes.push(item);
    });

    eventData.teachers.forEach(function (item, i ,arr) {
        //console.log('teachers array item: ', item);
        newEvent.teachers.push(item);
    });

    newEvent.organizer = userId;

    newEvent.save(function(err, newEvent) {
        if (err) return console.error(err);
        //console.log('newEvent id: ', newEvent._id);
        // res.sendStatus(200);
        res.json({eventId: newEvent._id});
    });
});

module.exports = router;
