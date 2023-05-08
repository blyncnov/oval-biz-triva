const storage = require('node-sessionstorage');
const jwt = require('jsonwebtoken');
module.exports.isAuthorized = function (req, res, next) {
  try {
    const token = storage.getItem('token');
    console.log('gottoken:', token);
    //DECODE TOKEN
    // const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // console.log(decodedToken);
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
