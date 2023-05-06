const storage = require('node-sessionstorage');
const jwt = require('jsonwebtoken');
module.exports.isAuthorized = function (req, res, next) {
  try {
    const token = storage.getItem('token');
    if (token === undefined) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
