const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireSignin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const {EMAIL,GPASS} = require('../config/keys')

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "collegpt@gmail.com",
    pass: GPASS,
  },
});

// Helper function to generate random OTP
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

router.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    university,
    sem,
    gender,
    profilePic,
    isVerified,
  } = req.body;

  // Perform validation (similar to the frontend validation)
  if (!name || !email || !password || !university || !sem || !gender) {
    return res
      .status(422)
      .json({ error: "Please fill in all the required fields." });
  }

  try {
    const savedUser = await User.findOne({ email: email });

    if (savedUser && isVerified) {
      return res.status(422).json({ error: "User already exists." });
    }

    const hashedpassword = await bcrypt.hash(password, 12);
    const otp = generateOTP();
    const otpExpiry = Date.now() + 60 * 60 * 1000; // OTP will be valid for 1 hour

    if (savedUser) {
      // User already exists but is not verified, update OTP and OTP expiry
      savedUser.name = name;
      savedUser.password = hashedpassword;
      savedUser.university = university;
      savedUser.sem = sem;
      savedUser.gender = gender;
      savedUser.profilePic = profilePic;
      savedUser.otp = otp;
      savedUser.otpExpiry = otpExpiry;

      await savedUser.save();

      await transporter.sendMail({
        from: "collegpt@gmail.com", // Your email address
        to: savedUser.email, // User's email address
        subject: "🎁 OTP Verification for ColleGPT",
        html: `
          <html>
          <head>
            <style>
              .email-image {
                width: 100%; 
                max-width: 300px;
                display: block; 
                margin: 0 auto; 
                border-radius:10%;
              }
            
              /* CSS for text below images */
              .image-text {
                text-align: center; 
                margin-top: 10px; 
                font-size: 4rem;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              }
            </style>
          </head>
          <body>
            <h1 style="color: purple; text-align: center;" >Ta-dah! 🎉 We've sent your OTP – the golden key to unlock a world of ColleGPT adventures! </h1> <h3 style="text-align: center;"> Ab aap taiyyar hain shuru hone ke liye ek naye aur dhamakedar safar par. OTP check karein aur ColleGPT ke saath masti bhari padhai ki taraf kadam badhayein! 🚀 </h3>
            <h2 class="image-text">${otp}</h2>
          </body>
          </html>
        `,
      });

      return res.json({
        message:
          "OTP sent successfully. Please check your email to verify your account.",
      });
    } else {
      // New user, save the user with OTP and OTP expiry
      const user = new User({
        email,
        password: hashedpassword,
        name,
        university,
        sem,
        gender,
        profilePic,
        otp,
        otpExpiry,
      });

      await user.save();

      await transporter.sendMail({
        from: "collegpt@gmail.com", // Your email address
        to: user.email, // User's email address
        subject: "🎁 OTP Verification for ColleGPT",
        html: `
          <html>
          <head>
            <style>
              .email-image {
                width: 100%; 
                max-width: 300px;
                display: block; 
                margin: 0 auto; 
                border-radius:10%;
              }
            
              /* CSS for text below images */
              .image-text {
                text-align: center; 
                margin-top: 10px; 
                font-size: 4rem;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              }
            </style>
          </head>
          <body>
            <h1 style="color: purple; text-align: center;" >Ta-dah! 🎉 We've sent your OTP – the golden key to unlock a world of ColleGPT adventures! </h1> <h3 style="text-align: center;"> Ab aap taiyyar hain shuru hone ke liye ek naye aur dhamakedar safar par. OTP check karein aur ColleGPT ke saath masti bhari padhai ki taraf kadam badhayein! 🚀 </h3>
            <h2 class="image-text">${otp}</h2>
          </body>
          </html>
        `,
      });

      return res.json({
        message:
          "OTP sent successfully. Please check your email to verify your account.",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "An error occurred during user registration. Please try again later.",
    });
  }
});

// Add a new route to verify OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(422).json({ error: "Please provide both email and OTP" });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "User not found" });
    }

    if (user.otpExpiry < Date.now()) {
      return res
        .status(422)
        .json({ error: "OTP has expired. Please request a new OTP" });
    }

    if (user.otp === otp) {
      user.isVerified = true;
      await user.save();

      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      const { _id, name, email } = user;

      await transporter.sendMail({
        from: "collegpt@gmail.com",
        to: user.email,
        subject: "Registration Successfully",
        html: `
          <html>
          <head>
            <style>
              .email-image {
                width: 100%; 
                max-width: 300px;
                display: block; 
                margin: 0 auto; 
                border-radius:10%;
              }
              .image-text {
                text-align: center; 
                margin-top: 10px; 
              }
              a{
                font-size:1.3rem;
                font-weight:bold;
              }
              .heading{
                color: darkblue;
              }
            </style>
          </head>
          <body>
            <h1 class="image-text heading" style="color: darkblue;" >प्रणाम, ${user.name} 🙏</h1>
            <h1 style="color: purple; text-align: center;" >ColleGPT 🚀 में आपका स्वागत है !!</h1>
            <h2 class="image-text"  >Your ultimate college companion ~ ColleGPT 💯, is here to revolutionize your academic journey🔥</h2>
          </body>
        </html>
      `,
      });

      return res.json({
        token,
        user: { _id, name, email },
        message: "OTP verification successful!",
      });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
});


router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide both email and password" });
  }

  // Find the user based on the email provided
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password" });
      }
      if (!savedUser.isVerified) {
        return res
          .status(401)
          .json({ error: "Please verify your email before signing in" });
      }

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, savedUser.password).then((doMatch) => {
        if (doMatch) {
          // Password is correct, generate a JWT token for successful signin
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email } = savedUser;

          res.json({
            token,
            user: { _id, name, email },
            message: "Successful SignIn!",
          });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/reset-password", async (req, res) => {
  try {
    const buffer = await crypto.randomBytes(32);
    const token = buffer.toString("hex");

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(422).json({ error: "User doesn't exist with that email" });
    }

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000; // Token expiration time: 1 hour

    await user.save();

    await transporter.sendMail({
      from: "collegpt@gmail.com",
      to: user.email,
      subject: "Reset Password (no reply)",
      html: `
        <html>
        <head>
          <style>
            .email-image {
              width: 100%;
              max-width: 300px;
              display: block;
              margin: 0 auto;
              border-radius: 10%;
            }
            .image-text {
              text-align: center;
              margin-top: 10px;
              font-size: 4rem;
              font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            }
          </style>
        </head>
        <body>
          <h1 style="text-align: center;">Forgot your password? Can't remember that much? You don't forget to eat, do you?</h1>
          <h2 style="text-align: center;">Click on this 👉 <a href="${EMAIL}/resetpassword/${token}">link</a> to reset your password</h2>
        </body>
        </html>
      `,
    });

    res.json({ message: "Check your email for password reset instructions" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred. Please try again later." });
  }
});


router.post("/new-password", async (req, res) => {
  try {
    const newPassword = req.body.password;
    const sentToken = req.body.token;

    const user = await User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } });

    if (!user) {
      // If user not found or session expired, handle the case appropriately
      return res.status(422).json({ error: "User not found or session expired." });
    }

    const hashedpassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedpassword;
    user.resetToken = undefined;
    user.expireToken = undefined;

    await user.save();

    res.json({ message: "Password updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred. Please try again later." });
  }
});



module.exports = router;
