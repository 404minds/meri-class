var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username: String,
  email: String,
  password: String,
  type: String,
  name: String,
});

var users = mongoose.model('users', usersSchema);

var UserModel = {
  create: function(data, callback) {
    users.create(data, callback);
  },

  getById: function(userid, callback) {
    users.find({ _id: userid }, callback);
  },

  getByUsername: function(username, callback) {
    users.find({ username: username }, callback);
  },
};

module.exports = UserModel;
