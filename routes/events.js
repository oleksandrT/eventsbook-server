var express = require('express');
var router = express.Router();
var Organizer = require('../models/organizer');
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

    var newEvent = JSON.parse(req.body.event);
    var userId = (req.body.userId);
    console.log(newEvent);
    console.log(userId);

    
});

module.exports = router;
