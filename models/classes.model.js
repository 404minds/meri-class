var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classesSchema = new Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
  },
  batch: Number,
  specialization: String,
  section: String,
});

var classes = mongoose.model('classes', classesSchema);

var ClassModel = {
  create: function(data, callback) {
    classes.create(data, callback);
  },

  list: function(callback) {
    classes
      .find({})
      .populate('course')
      .exec(callback);
  },
};

module.exports = ClassModel;
