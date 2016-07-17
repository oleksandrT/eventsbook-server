var express = require('express');
var router = express.Router();
var Organizer = require('../models/organizer');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Organizer.find(function (err, docs) {
        res.render('organizers', { title: 'Express', organizers: docs });
    });
});

module.exports = router;
