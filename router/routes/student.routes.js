var express = require('express');
var router = express.Router();
var StudentModel = require('./../../models/students.model');

router.post('/', function(req, res) {
  
  StudentModel.create(req.body, function(err, student) {
    if (!err) {
      res.location(`/api/class/${student._id}`);
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

router.put('/:studentid', function(req, res) {
  StudentModel.updateById(req.params.studentid, req.body, function(err, result) {
    if (!err && result.ok) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
