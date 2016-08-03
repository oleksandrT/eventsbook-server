var express = require('express');
var router = express.Router();
var Organizer = require('../models/organizer');
var jwt = require('jsonwebtoken');

var SECRET_WORD = 'wubuiproj';

/* Find if there is such organizer in database and respond with token */
router.post('/', function(req, res, next) {
    Organizer.findOne({login: req.body.username, password: req.body.password}, function (err, user) {
        if (err) { next(err); return; }

        if(!user) {
            var error = new Error('User not found');
            error.status = 422;
            next(error);
            return;
        }

        var token = jwt.sign({userId: user.id}, SECRET_WORD);
        res.json({
            access_token: token, 
            expired_in: 86200,
            user: user
        });
    });
});

module.exports = router;
