#!/usr/bin/env node
var app = require("./index");
var config = require("./config");
var mongoose = require("mongoose");

var bole = require("bole");
var log = bole(__filename);
bole.output({level: "debug", stream: process.stdout});
process.on("uncaughtException", function uncaught(exception) {
  log.error(exception, " uncaught exception. Process will exit");
  setImmediate(function exit() { 
    process.exit(66);
  }, 1000);
});
log.info("server process starting");

var db;

function DBConnect() {
  mongoose.connect(config.dbURL);
  db = mongoose.connection;
}

db.on("error", function(error) {
  console.error(console, 'connection error:'));
db.once("open", function(callback) {
  log.info("connected to: " + config.dbURL);
});

DBConnect();

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("express is listening on http://" +
    config.express.ip + ":" + config.express.port);
});
