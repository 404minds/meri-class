var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attendanceSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },
  date: Date,
  status: Number,
}, { timestamps: true });

var attendance = mongoose.model('attendance', attendanceSchema);

var AttendanceModel = {
  create: function(data, callback) {
    attendance.create(data, callback);
  },

  remove: function(attendanceId, callback) {
    attendance.remove({ _id: attendanceId }, callback);
  },
};

module.exports = AttendanceModel;
