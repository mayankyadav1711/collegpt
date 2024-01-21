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
    const { code, sem, sub, unit, link, author, description, extra } = req.body;

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
    const { sem, sub, unit, link, author, description, extra, timestamp } =
      pdfForm;
    res.json({ sem, sub, unit, link, author, description, extra, timestamp });
  } catch (error) {
    // Handle errors
    console.error("Error fetching PDF link:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
