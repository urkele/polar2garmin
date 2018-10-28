var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// xml parsing dependencies 
var fs = require('fs'),
  xml2js = require('xml2js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var parser = new xml2js.Parser();
var builder = new xml2js.Builder();

var inputFilename = '/Users/uri/Desktop/polar exports/uri_leshem_2018-09-01_20-50-20.tcx'
var outputFilename = '/Users/uri/Desktop/polar exports/uri_leshem_2018-09-01_20-50-20_garmin.tcx'

fs.readFile(inputFilename, function(err, data) {

  //TODO: Extract this to it's own funciton so it can be called on each file
  parser.parseString(data, function (err, result) {
    // Delete the "Creator" node from all activities in the XML
    result.TrainingCenterDatabase.Activities.map(x => x.Activity.map(y => delete y.Creator));
    // Delete the "Author" node from the XML
    delete result.TrainingCenterDatabase.Author;

    var xml = builder.buildObject(result);
    fs.writeFile(outputFilename, xml, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });  
});