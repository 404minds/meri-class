var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentsSchema = new Schema({
  roll_no: String,
  name: String,
  date_of_birth: Date,
  gender: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

var students = mongoose.model('students', studentsSchema);

var StudentModel = {
  create: function(data, callback) {
    students.create(data, callback);
  },

  getByRollno: function(roll_no, callback) {
    students.find({ roll_no: roll_no }, callback);
  },

  getById: function(studentid, callback) {
    students.find({ _id: studentid }, callback);
  },

  list: function(callback) {
    students.find({}, callback);
  },
};

module.exports = StudentModel;
