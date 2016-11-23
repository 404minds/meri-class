var express = require('express');
var router = express.Router();
var ClassModel = require('./../../models/classes.model');
var StudentClassModel = require('./../../models/students_classes.model');

router.post('/', function(req, res) {
  ClassModel.create(req.body, function(err, classObj) {
    if (!err && classObj._id) {
      res.location(`/api/classes/${classObj._id}`);
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
});

router.get('/', function(req, res) {
  ClassModel.list(function(err, classes) {
    if (!err && Array.isArray(classes)) {
      res.json(classes);
    } else {
      res.sendStatus(500);
    }
  });
});

router.put('/:classid/students', function(req, res) {
  
  StudentClassModel.create(req.params.classid, req.body, function(err) {
    if (!err) {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
});

router.get('/:classid/students', function(req, res) {
  StudentClassModel.getStudentsByClassId(req.params.classid, function(err, students) {
    if (!err) {
      res.json(students);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
