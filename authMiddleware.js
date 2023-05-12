const storage = require('node-sessionstorage');

module.exports.isAuthorized = function (req, res, next) {
  try {
    const token = storage.getItem('token');
    if (!token) {
      res.redirect('/login');
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
