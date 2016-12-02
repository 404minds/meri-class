var express = require('express');
var router = express.Router();
var AttendanceModel = require('./../../models/attendance.model');

router.post('/', function(req, res) {
  
  AttendanceModel.create(req.body, function(err) {
    if (!err) {
      return res.sendStatus(201);
    } else {
      return res.sendStatus(500);
    }
  });

});

router.delete('/:attendanceid', function(req, res) {
  
  AttendanceModel.remove(req.body, function(err) {
    if (!err) {
      return res.sendStatus(204);
    } else {
      return res.sendStatus(500);
    }
  });

});

module.exports = router;
