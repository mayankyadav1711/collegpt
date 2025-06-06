const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

const app = express();

app.use(express.json());

router.put("/update-profile", async (req, res) => {
  try {
    const existingUser = await User.findById(req.body._id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update individual fields if provided in the request body
    if (req.body.name !== null) {
      existingUser.name = req.body.name;
    }
    if (req.body.email !== null) {
      existingUser.email = req.body.email;
    }

    if (req.body.university !== null) {
      existingUser.university = req.body.university;
    }
    if (req.body.sem !== null) {
      existingUser.sem = req.body.sem;
    }
    if (req.body.gender !== null) {
      existingUser.gender = req.body.gender;
    }
    if (req.body.profilepic !== null) {
      existingUser.profilePic = req.body.profilepic;
    }

    if (req.body.birthdate !== null) {
      existingUser.birthdate = req.body.birthdate;
    }
    if (req.body.linkedinURL !== null) {
      existingUser.linkedinURL = req.body.linkedinURL;
    }
    if (req.body.githubURL !== null) {
      existingUser.githubURL = req.body.githubURL;
    }
    if (req.body.twitterURL !== null) {
      existingUser.twitterURL = req.body.twitterURL;
    }
    if (req.body.resumeURL !== null) {
      existingUser.resumeURL = req.body.resumeURL;
    }
    if (req.body.instaURL !== null) {
      existingUser.instaURL = req.body.instaURL;
    }
    if (req.body.codingURL !== null) {
      existingUser.codingURL = req.body.codingURL;
    }
    if (req.body.Roles !== null) {
      existingUser.Roles = req.body.Roles;
    }
    if (req.body.aboutMe !== null) {
      existingUser.aboutMe = req.body.aboutMe;
    }
    if (req.body.Skills !== null) {
      existingUser.Skills = req.body.Skills;
    }
    if (req.body.cpi !== null) {
      existingUser.cpi = req.body.cpi;
    }
    if (req.body.hobbies !== null) {
      existingUser.hobbies = req.body.hobbies;
    }
    if (req.body.goals !== null) {
      existingUser.goals = req.body.goals;
    }

    // Save the updated user profile
    const updatedUser = await existingUser.save();

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/view-profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

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
    const profiles = await User.find();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching user profiles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user profiles" });
  }
});

module.exports = router;
