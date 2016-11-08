var express = require('express');
var router = express.Router();
var StudentModel = require('./../../models/students.model');

router.post('/', function(req, res) {
  
  StudentModel.create(req.body, function(err, user) {
    if (!err) {
      res.sendStatus(201);
      return;
    }
  });
});

module.exports = router;
