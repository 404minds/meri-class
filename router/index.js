module.exports = function(app) {
  app.use('/api/token', require('./routes/token.routes'));
  app.use('/api/user', require('./routes/user.routes'));
  app.use('/api/student', require('./routes/student.routes'));
  app.use('/api/attendence', require('./routes/attendence.routes'));
};