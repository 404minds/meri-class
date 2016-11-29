var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentClassSchema = new Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'class',
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },
});

var studentClass = mongoose.model('studentClass', studentClassSchema);

var StudentClassModel = {
  create: function(classid, data, callback) {
    data.class = classid;
    studentClass.create(data, callback);
  },

  getStudentsByClassId: function(classid, callback) {
    studentClass
      .find({ class: classid })
      .populate('student')
      .exec(callback);
  },

  getStudentsCountByClassId: function(classid, callback) {
    studentClass.count({ class: classid }, callback);
  },
};

module.exports = StudentClassModel;
