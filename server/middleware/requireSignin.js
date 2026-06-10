const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must be signed in" });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SEC, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be signed in" });
    }

    try {
      const { _id } = payload;
      const userdata = await User.findById(_id);

      if (!userdata) {
        return res.status(401).json({ error: "User not found. Please sign in again." });
      }

      req.user = userdata;
      next();
    } catch (dbErr) {
      console.error("Auth middleware error:", dbErr);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
};
