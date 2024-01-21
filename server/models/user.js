const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
   
  },
  university: {
    type: String,
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String, // Store the path of the uploaded image file
  },
  isVerified: {
    type: Boolean,
    default: false, // Flag to determine if the OTP verification is completed
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  resetToken:String,
  expireToken:Date,
 
  birthdate: {
    type: Date,
  },
  linkedinURL: {
    type: String,
  },
  githubURL: {
    type: String,
  },
  twitterURL: {
    type: String,
  },
  codingURL: {
    type: String,
  },
  instaURL: {
    type: String,
  },
  resumeURL: {
    type: String,
  },
  Roles: {
    type: [String],
  },
  aboutMe: {
    type: String,
  },
  Skills: {
    type: [String],
  },
  cpi: {
    type: Number,
  },
  hobbies: {
    type: [String],
  },
  goals: {
    type: String,
  },
});

mongoose.model('User', userSchema);
