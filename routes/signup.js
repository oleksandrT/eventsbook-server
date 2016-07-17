var express = require('express');
var router = express.Router();
var Organizer = require('../models/organizer');

/* Render signup form. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});

/* Save new user. */
router.post('/', function(req, res, next) {
    // var organizer = new Organizer({
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     login: req.body.login,
    //     password: req.body.password
    // });
    var organizer = new Organizer(req.body);
    organizer.save(function (err, post) {
        if (err) { return next(err) }
        console.log('new organizer: ', organizer);
        res.json(201, organizer)
    });

    
    res.render('signup');
});

module.exports = router;
