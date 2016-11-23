var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./../../config');
var UserModel = require('./../../models/users.model');

router.post('/', function(req, res) {
  UserModel.getByUsername(req.body.username, function(err, users) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    var user = users[0];

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      var token = jwt.sign({ sub: user._id }, config.jwt.secret);
      res.send(token);
      return;
    }

    res.sendStatus(401);
  });
});

module.exports = router;
