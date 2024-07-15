const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Contributor = mongoose.model("Contributor");
const Doubt = mongoose.model("Doubt");
const Contact = mongoose.model("Contact");
const EventForm = mongoose.model("EventForm");
const Feedback = mongoose.model("Feedback");
const ServiceContact = mongoose.model("ServiceContact");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");
const requireAdmin = require("../middleware/adminlogin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { EMAIL, GPASS } = require("../config/keys");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "collegpt@gmail.com",
    pass: GPASS,
  },
});

router.post("/contribute", requireLogin, async (req, res) => {
  try {
    const {
      semester,
      subjectName,
      fileLinks,
      pdfDescription,
      // Add other required fields here
    } = req.body;

    // Check if all required fields are provided
    if (!semester || !subjectName || !fileLinks || !pdfDescription) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new contribution
    const contribution = new Contributor({
      semester,
      subjectName,
      fileLinks,
      pdfDescription,
      postedBy: req.user,
    });

    // Save the contribution
    await contribution.save();

    // Send email notification about the new contribution
    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: ["mykyadav2003@gmail.com", "kauranidivya@gmail.com", "sojitradarshitpiyushbhai@gmail.com"],
      subject: "New Contribution Submitted",
      html: `
        <h1>New Contribution Submitted</h1>
        <p>Semester: ${semester}</p>
        <p>Subject: ${subjectName}</p>
        <p>PDF Description: ${pdfDescription}</p>
        <p>PDF Link: ${fileLinks}</p>
        <p>Posted By Name: ${req.user.name}</p>
        <p>Posted By Email: ${req.user.email}</p>
      `,
    });

    res.status(201).json({ message: "Contribution submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting contribution." });
  }
});


router.post("/doubt", requireLogin, async (req, res) => {
  try {
    const {
      code,
      semester,
      subjectName,
      unitName,
      author,
      doubt,
      // Add other required fields here
    } = req.body;

    // Check if doubt field is provided
    if (!doubt) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new doubt entry
    const newDoubt = new Doubt({
      code,
      semester,
      subjectName,
      unitName,
      author,
      doubt,
      postedBy: req.user,
    });

    // Save the doubt entry
    await newDoubt.save();

    // Send email notification about the new doubt
    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: ["mykyadav2003@gmail.com", "kauranidivya@gmail.com", "sojitradarshitpiyushbhai@gmail.com"],
      subject: "New Doubt Submitted",
      html: `
        <h1>New Doubt Submitted</h1>
        <p>Code: ${code}</p>
        <p>Semester: ${semester}</p>
        <p>Subject: ${subjectName}</p>
        <p>Unit: ${unitName}</p>
        <p>Author: ${author}</p>
        <p>Doubt: ${doubt}</p>
        <p>Posted By Name: ${req.user.name}</p>
        <p>Posted By Email: ${req.user.email}</p>
      `,
    });

    res.status(201).json({ message: "Doubt submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting doubt." });
  }
});

router.post("/contact", requireLogin, async (req, res) => {
  try {
    const {
      name,
      email,
      message,
      // Add other required fields here
    } = req.body;

    // Check if all required fields are provided
    if (!email || !name || !message) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
      postedBy: req.user,
    });

    // Save the contact entry
    await newContact.save();

    // Send email notification about the new contact form submission
    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: ["mykyadav2003@gmail.com", "kauranidivya@gmail.com", "sojitradarshitpiyushbhai@gmail.com"],
      subject: "Someone tried to reach you (Contact Us Form)",
      html: `
        <h1>New Contact Submitted</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Posted By Name: ${req.user.name}</p>
        <p>Posted By Email: ${req.user.email}</p>
      `,
    });

    res.status(201).json({ message: "Contact Us form submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting Contact Us Form." });
  }
});


router.post("/event-form", requireAdmin, async (req, res) => {
  try {
    const { title, description, date, profilePic, link, extra } = req.body;

    // Create a new PdfForm instance with the form data

    const eventForm = new EventForm({
      title,
      description,
      date,
      profilePic,
      link,
      extra,
      timestamp: new Date(),
    });

    console.log(eventForm);
    console.log(new Date());
    // Save the newPdfForm to the database
    await eventForm.save();

    // Respond with a success message
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    // Handle errors
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/event-forms", async (req, res) => {
  try {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const eventForms = await EventForm.find({
      timestamp: { $gte: sevenDaysAgo.toISOString() }, // Convert to ISO string
    });

    console.log("Fetched Event Forms:", eventForms);
    res.json(eventForms);
  } catch (error) {
    console.error("Error in router:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/feedback", requireLogin, async (req, res) => {
  try {
    const {
      feedback,
      rating,
      // Add other required fields here
    } = req.body;

    // Check if feedback field is provided
    if (!feedback) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new feedback entry
    const newFeedback = new Feedback({
      feedback,
      rating,
      postedBy: req.user,
    });

    // Save the feedback entry
    await newFeedback.save();

    // Construct star rating emoji based on the rating
    const stars = "⭐".repeat(rating);

    // Send email notification about the new feedback
    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: ["mykyadav2003@gmail.com", "kauranidivya@gmail.com", "sojitradarshitpiyushbhai@gmail.com"],
      subject: "New Feedback Received",
      html: `
        <div style="text-align: center;">
          <h2 style="color: purple;">${req.user.name}</h2>
          <h3 style="color: purple;">${req.user.email}</h3>
          <h3><span>Feedback:</span> ${feedback}</h3>
          <h3><span>Rating:</span> ${stars}</h3>
        </div>
      `,
    });

    res.status(201).json({ message: "Feedback submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting feedback." });
  }
});


router.get("/feedbacks", async (req, res) => {

  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving feedbacks." });
  }
});






router.post("/service-contact", async (req, res) => {
  try {
    const {
      name,
      email,
      message,
      // Add other required fields here
    } = req.body;
    console.log(req.body)
    // Check if all required fields are provided
    if (!email || !name || !message) {
      return res
        .status(422)
        .json({ error: "Please fill in all required fields." });
    }

    // Create a new contact entry
    const newServiceContact = new ServiceContact({
      name,
      email,
      message,
    });

    // Save the contact entry
    await newServiceContact.save();

    // Send email notification about the new contact form submission
    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: ["mykyadav2003@gmail.com", "kauranidivya@gmail.com", "sojitradarshitpiyushbhai@gmail.com"],
      subject: "New Inquiry - ColleGPT Service",
      html: `
        <h1>New Contact Submitted</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      
      `,
    });

    res.status(201).json({ message: "Contact Us form submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting Contact Us Form." });
  }
});


module.exports = router;
