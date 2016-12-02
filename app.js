var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var UserModel = require('./models/users.model');
var config = require('./config');
require('./lib/db.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app
  .use(expressJwt({ secret: config.jwt.secret, requestProperty: 'payload' })
  .unless({
    path: [
      { url: '/api/token', methods: ['POST'] },
      { url: '/api/user', methods: ['POST'] },
    ],
  }));

app.use(function(req, res, next) {
  // For un-authenticated requests
  if (!req.payload) {
    return next();
  }
  var userid = req.payload.sub;
  UserModel.getById(userid, function(err, users) {
    if (err || !users.length) {
      return res.sendStatus(401);
    }
    req.user = users[0];
    next();
  });
});

// Setup Routes
require('./router')(app);

// Initialize app
var server = app.listen(process.env.PORT || 3030, function() {
  var port = server.address().port;
    console.log("Meri class App is now running on port", port);
});
