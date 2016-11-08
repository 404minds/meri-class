var express = require('express');
var router = express.Router();
var AttendenceModel = require('./../../models/attendence.model');

router.post('/', function(req, res) {
  
  AttendenceModel.create(req.body, function(err, attendence) {
    if (!err) {
      res.sendStatus(201);
      return;
    }
  });
});

module.exports = router;
