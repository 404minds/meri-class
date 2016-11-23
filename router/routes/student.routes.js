var express = require('express');
var router = express.Router();
var StudentModel = require('./../../models/students.model');

router.post('/', function(req, res) {
  
  StudentModel.create(req.body, function(err, students) {
    if (!err) {
      res.location(`/api/class/${students[0]._id}`);
      res.sendStatus(201);
      return;
    }
  });
});

router.get('/', function(req, res) {
  StudentModel.list(function(err, students) {
    if (!err) {
      res.json(students);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
