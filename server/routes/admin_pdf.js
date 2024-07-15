const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const axios = require("axios");
const PdfForm = mongoose.model("PdfForm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { EMAIL, GPASS } = require("../config/keys");

router.post("/pdf-forms", async (req, res) => {
  try {
    const { code, sem, sub, unit, link, author, description, extra, youtube } = req.body;

    // Create a new PdfForm instance with the form data

    const newPdfForm = new PdfForm({
      code,
      sem,
      sub,
      unit,
      link,
      author,
      description,
      extra,
      youtube,
      timestamp: new Date(),
    });

    console.log(newPdfForm);
    console.log(new Date());
    // Save the newPdfForm to the database
    await newPdfForm.save();

    // Respond with a success message
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    // Handle errors
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/pdf-forms/:code", async (req, res) => {
  try {
    const code = req.params.code; // Get the 'code' parameter from the URL

    // Find the PdfForm in the database with the given 'code'
    const pdfForm = await PdfForm.findOne({ code });

    if (!pdfForm) {
      // If no PdfForm is found with the given 'code', return an error response
      return res
        .status(404)
        .json({ error: "PDF not found for the given code" });
    }

    // Extract the 'link' property from the pdfForm and send it as the response
    const { sem, sub, unit, link, author, description, extra, youtube, timestamp } =
      pdfForm;
    res.json({ sem, sub, unit, link, author, description, extra, youtube, timestamp });
  } catch (error) {
    // Handle errors
    console.error("Error fetching PDF link:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Helper function for error handling
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
};

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { name, email, password, university, sem, gender } = req.body;
    
    if (!name || !email || !password || !university || !sem || !gender) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      university,
      sem,
      gender
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    handleError(res, error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
});

// Get a specific user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Prevent password update through this route

    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
});

// User Analytics
router.get('/users/analytics/overview', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const verifiedUsers = await User.countDocuments({ isVerified: true });
    const unverifiedUsers = totalUsers - verifiedUsers;
    const genderDistribution = await User.aggregate([
      { $group: { _id: '$gender', count: { $sum: 1 } } }
    ]);
    const universityDistribution = await User.aggregate([
      { $group: { _id: '$university', count: { $sum: 1 } } }
    ]);
    const semesterDistribution = await User.aggregate([
      { $group: { _id: '$sem', count: { $sum: 1 } } }
    ]);

    res.json({
      totalUsers,
      verifiedUsers,
      unverifiedUsers,
      genderDistribution,
      universityDistribution,
      semesterDistribution
    });
  } catch (error) {
    handleError(res, error);
  }
});

// User Activity Analytics
router.get('/users/analytics/activity', async (req, res) => {
  try {
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const newUsersLastWeek = await User.countDocuments({ createdAt: { $gte: lastWeek } });
    const verifiedUsersLastWeek = await User.countDocuments({ 
      isVerified: true, 
      createdAt: { $gte: lastWeek } 
    });

    res.json({
      newUsersLastWeek,
      verifiedUsersLastWeek,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// Detailed User Analytics
router.get('/users/analytics/detailed', async (req, res) => {
  try {
    const skillDistribution = await User.aggregate([
      { $unwind: '$Skills' },
      { $group: { _id: '$Skills', count: { $sum: 1 } } }
    ]);

    const hobbyDistribution = await User.aggregate([
      { $unwind: '$hobbies' },
      { $group: { _id: '$hobbies', count: { $sum: 1 } } }
    ]);

    const avgCPI = await User.aggregate([
      { $group: { _id: null, averageCPI: { $avg: '$cpi' } } }
    ]);

    const socialMediaPresence = await User.aggregate([
      { $project: {
          hasLinkedIn: { $cond: [{ $ne: ['$linkedinURL', null] }, 1, 0] },
          hasGitHub: { $cond: [{ $ne: ['$githubURL', null] }, 1, 0] },
          hasTwitter: { $cond: [{ $ne: ['$twitterURL', null] }, 1, 0] },
          hasInstagram: { $cond: [{ $ne: ['$instaURL', null] }, 1, 0] }
        }
      },
      { $group: {
          _id: null,
          linkedInUsers: { $sum: '$hasLinkedIn' },
          gitHubUsers: { $sum: '$hasGitHub' },
          twitterUsers: { $sum: '$hasTwitter' },
          instagramUsers: { $sum: '$hasInstagram' }
        }
      }
    ]);

    res.json({
      skillDistribution,
      hobbyDistribution,
      averageCPI: avgCPI[0]?.averageCPI || 0,
      socialMediaPresence: socialMediaPresence[0] || {}
    });
  } catch (error) {
    handleError(res, error);
  }
});



// ------- PDF Forms ------ //

router.post('/pdf-form', async (req, res) => {
  try {
    const newPdfForm = new PdfForm(req.body);
    await newPdfForm.save();
    res.status(201).json(newPdfForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all PDF forms
router.get('/pdf-form', async (req, res) => {
  try {
    const pdfForms = await PdfForm.find();
    res.json(pdfForms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific PDF form
router.get('/pdf-form/:id', async (req, res) => {
  try {
    const pdfForm = await PdfForm.findById(req.params.id);
    if (!pdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json(pdfForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a PDF form
router.put('/pdf-form/:id', async (req, res) => {
  try {
    const updatedPdfForm = await PdfForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json(updatedPdfForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a PDF form
router.delete('/pdf-form/:id', async (req, res) => {
  try {
    const deletedPdfForm = await PdfForm.findByIdAndDelete(req.params.id);
    if (!deletedPdfForm) {
      return res.status(404).json({ error: 'PDF form not found' });
    }
    res.json({ message: 'PDF form deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
