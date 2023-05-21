<<<<<<< HEAD
module.exports.isAuthorized = function (req, res, next) {
  try {
    const cookie = req.headers.cookie.trim().split('=');
    const token = cookie[1];
    //DECODE TOKEN
    // const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // console.log(decodedToken);
=======
const storage = require('node-sessionstorage');

module.exports.isAuthorized = function (req, res, next) {
  try {
    const token = storage.getItem('token');
>>>>>>> f053523baa635143e9e57826e53f129a3fcce7c0
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
