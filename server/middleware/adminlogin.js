const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, shfgiahoiauhroiuha, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'You must be logged in' });
    }

    const { _id } = payload;
    const user = await User.findById(_id);

    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    req.user = user;
    next();
  });
};
