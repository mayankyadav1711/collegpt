const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SEC, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'You must be logged in' });
    }

    try {
      const { _id } = payload;
      const user = await User.findById(_id);

      if (!user) {
        return res.status(401).json({ error: 'User not found. Please log in again.' });
      }

      if (!user.isAdmin) {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }

      req.user = user;
      next();
    } catch (dbErr) {
      console.error("Admin auth middleware error:", dbErr);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
};
