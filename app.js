var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var signup = require('./routes/signup');
var login = require('./routes/login');
var organizers = require('./routes/organizers');
var events = require('./routes/events');
var participants = require('./routes/participants');

var app = express();
var db;

var serverUrl = process.env.MONGODB_URI || 'localhost:27017/eventsbook';

mongoose.connect(serverUrl, function (err, dbconn) {
  if(!err) {
    console.log('Connected to Mongo Db');
    db = dbconn;
  }
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

//app.use('/', routes);
//app.use('/users', users);

app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/organizers', organizers);
app.use('/api/events', events);
app.use('/api/participants', participants);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
