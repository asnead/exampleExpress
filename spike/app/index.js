var express = require('express');
var config = require('./config');
var path = require('path');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

global.__base = path.resolve(__dirname, '../');
app.set("views", __dirname);
app.set("view engine", "jade");
app.use(stylus.middleware({
  src: __dirname + '/public/stylus',
  dest: __dirname + '/public/css',
  compile: compile
}));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__base + '/wwwroot')));

app.use(require('./site/router'));
app.use("/api", require('./users/router'));

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("errors/notFound");
});

module.exports = app;

