var express = require('express');
var router = express.Router();
var Organizer = require('../models/organizer');

/* Save new user. */
router.post('/', function(req, res, next) {
    var organizer = new Organizer(req.body);
    organizer.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, organizer)
    });
});

module.exports = router;
