var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attendenceSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students',
  },
  date: Date,
  status: Number,
}, { timestamps: true });

var attendence = mongoose.model('attendence', attendenceSchema);

var AttendenceModel = {
  create: function(data, callback) {
    attendence.create(data, callback);
  },
};

module.exports = AttendenceModel;
