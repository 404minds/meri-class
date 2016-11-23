var express = require('express');
var router = express.Router();
var CourseModel = require('./../../models/courses.model');

router.post('/', function(req, res) {
  
  CourseModel.create(req.body, function(err, course) {
    if (!err && course._id) {
      res.location(`/api/courses/${course._id}`);
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  });
});

router.get('/', function(req, res) {
  CourseModel.list(function(err, courses) {
    if (!err) {
      res.json(courses);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;
