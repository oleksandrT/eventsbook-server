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



router.post('/', function(req, res, next) {
    console.log('post organizer route');
    // Organizer.findOne({login: req.body.username, password: req.body.password}, function (err, user) {
    //     res.json({
    //         access_token: token,
    //         expired_in: 86200,
    //         user: user
    //     });
    // });

    var eventData = JSON.parse(req.body.event);
    var userId = (req.body.userId);
    console.log(eventData);
    console.log(userId);

    var newEvent = new Event({
        title: eventData.title,
        date: eventData.date,
        location: eventData.location,
        description: eventData.description,
        classes: [{
            time: eventData.classes.time,
            title: eventData.classes.title,
            description: eventData.classes.description
        }],
        teachers: [{
            name: eventData.teachers.name,
            description: eventData.teachers.description
        }]
    });

    newEvent.save(function(err, newEvent) {
        if (err) return console.error(err);
        //console.dir(newEvent);
        res.send(200);
    });
});

module.exports = router;
