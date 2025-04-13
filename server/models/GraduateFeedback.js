// models/GraduateFeedback.js
const mongoose = require("mongoose");

const graduateFeedbackSchema = new mongoose.Schema({
  // Basic information
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  feedback: {
    type: String,
    required: true,
    trim: true
  },
  graduationYear: {
    type: Number,
    default: new Date().getFullYear()
  },
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("GraduateFeedback", graduateFeedbackSchema);