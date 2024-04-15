const tokenService = require("../service/token-service");

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const accessToken = req.headers.authorization.split(' ')[1];

    if (!accessToken) {
      return res.status(401).json({ message: 'User is not logged.' });
    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return res.status(401).json({ message: 'User is not logged.' });
    }

    req.user = userData;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'User is not logged.' });
  }
}