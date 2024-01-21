const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/dev");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You must be signed in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be signed in" });
    }

    const { _id } = payload;

    // Assuming the admin's _id is known, you can compare it directly
    if (_id !== "64c10218b41a36641a58dd13") {
      return res.status(403).json({ error: "Admin access required" });
    }

    // User is an admin
    req.user = { _id }; // Attach the user data to the request
    next();
  });
};
