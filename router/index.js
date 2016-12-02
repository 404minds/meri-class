module.exports = function(app) {
  app.use('/api/token', require('./routes/token.routes'));
  app.use('/api/user', require('./routes/user.routes'));
  app.use('/api/student', require('./routes/student.routes'));
  app.use('/api/attendance', require('./routes/attendance.routes'));
  app.use('/api/classes', require('./routes/class.routes'));
  app.use('/api/courses', require('./routes/course.routes'));
};