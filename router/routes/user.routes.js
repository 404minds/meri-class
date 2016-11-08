var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var UserModel = require('./../../models/users.model');

router.post('/', function(req, res) {
  var salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);

  UserModel.create(req.body, function(err, user) {
    if (!err) {
      res.sendStatus(201);
      return;
    }
  })
});

module.exports = router;
