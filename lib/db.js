var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require('./../config');

mongoose.connect(config.db.uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to mongoose");
});