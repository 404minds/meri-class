var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coursesSchema = new Schema({
  name: String,
  duration: Number,
});

var courses = mongoose.model('courses', coursesSchema);

var CourseModel = {
  create: function(data, callback) {
    courses.create(data, callback);
  },

  list: function(callback) {
    courses.find({}, callback);
  },
};

module.exports = CourseModel;
