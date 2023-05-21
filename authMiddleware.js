module.exports.isAuthorized = function (req, res, next) {
  try {
    const cookie = req.headers.cookie.trim().split('=');
    const token = cookie[1];
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
