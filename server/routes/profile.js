const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const requireLogin = require("../middleware/requireSignin");

router.put("/update-profile", requireLogin, async (req, res) => {
  try {
    // Only allow updating the logged-in user's own profile
    const existingUser = await User.findById(req.user._id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Whitelist of allowed fields – prevents mass-assignment attacks
    const allowedFields = [
      "name", "email", "university", "sem", "gender", "profilePic",
      "birthdate", "linkedinURL", "githubURL", "twitterURL",
      "resumeURL", "instaURL", "codingURL", "Roles", "aboutMe",
      "Skills", "cpi", "hobbies", "goals",
    ];

    for (const field of allowedFields) {
      // Map frontend key "profilepic" → model key "profilePic"
      const bodyKey = field === "profilePic" ? "profilepic" : field;
      if (req.body[bodyKey] !== undefined && req.body[bodyKey] !== null) {
        existingUser[field] = req.body[bodyKey];
      }
    }

    // Save the updated user profile
    const updatedUser = await existingUser.save();

    // Never return password in response
    const userObj = updatedUser.toObject();
    delete userObj.password;

    return res.status(200).json(userObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/view-profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Validate that userId looks like a valid Mongo ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(userId).select("-password -otp -otpExpiry -resetToken -expireToken");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/all-profiles", async (req, res) => {
  try {
    const profiles = await User.find().select("-password -otp -otpExpiry -resetToken -expireToken");
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching user profiles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user profiles" });
  }
});

module.exports = router;
