const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");

const JWT_SECRET = process.env.JWT_SEC;
const SMTP_USER = process.env.EMAIL;
const GPASS = process.env.GPASS;

// ─── Auth-specific rate limiter (stricter) ──────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // 20 attempts per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many attempts, please try again after 15 minutes." },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USER,
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

// ─── Input validation helpers ───────────────────────────────────────────────
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

function validateEmail(email) {
  return typeof email === "string" && EMAIL_REGEX.test(email.trim());
}

function validatePassword(password) {
  return typeof password === "string" && password.length >= 6;
}

function sanitizeString(str) {
  if (typeof str !== "string") return str;
  // Strip HTML tags to prevent XSS in emails
  return str.replace(/<[^>]*>/g, "").trim();
}

// ─── SIGNUP ─────────────────────────────────────────────────────────────────
router.post("/signup", authLimiter, async (req, res) => {
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

  // Perform validation
  if (!name || !email || !password || !university || !sem || !gender) {
    return res
      .status(422)
      .json({ error: "Please fill in all the required fields." });
  }

  if (!validateEmail(email)) {
    return res.status(422).json({ error: "Please provide a valid email address." });
  }

  if (!validatePassword(password)) {
    return res
      .status(422)
      .json({ error: "Password must be at least 6 characters long." });
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
      savedUser.name = sanitizeString(name);
      savedUser.password = hashedpassword;
      savedUser.university = sanitizeString(university);
      savedUser.sem = sem;
      savedUser.gender = sanitizeString(gender);
      savedUser.profilePic = profilePic;
      savedUser.otp = otp;
      savedUser.otpExpiry = otpExpiry;

      await savedUser.save();

      await transporter.sendMail({
        from: SMTP_USER,
        to: savedUser.email,
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
        name: sanitizeString(name),
        university: sanitizeString(university),
        sem,
        gender: sanitizeString(gender),
        profilePic,
        otp,
        otpExpiry,
      });

      await user.save();

      await transporter.sendMail({
        from: SMTP_USER,
        to: user.email,
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

// ─── VERIFY OTP ─────────────────────────────────────────────────────────────
router.post("/verify-otp", authLimiter, async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(422).json({ error: "Please provide both email and OTP" });
  }

  if (!validateEmail(email)) {
    return res.status(422).json({ error: "Please provide a valid email address." });
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
      // Clear OTP after successful verification
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();

      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      const { _id, name, email } = user;

      await transporter.sendMail({
        from: SMTP_USER,
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


// ─── SIGNIN ─────────────────────────────────────────────────────────────────
router.post("/signin", authLimiter, async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide both email and password" });
  }

  if (!validateEmail(email)) {
    return res.status(422).json({ error: "Please provide a valid email address." });
  }

  try {
    // Find the user based on the email provided
    const savedUser = await User.findOne({ email: email });

    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    if (!savedUser.isVerified) {
      return res
        .status(401)
        .json({ error: "Please verify your email before signing in" });
    }

    // Compare the provided password with the stored hashed password
    const doMatch = await bcrypt.compare(password, savedUser.password);
    if (doMatch) {
      // Password is correct, generate a JWT token with expiry
      const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET, {
        expiresIn: "7d",
      });
      const { _id, name, email } = savedUser;

      res.json({
        token,
        user: { _id, name, email },
        message: "Successful SignIn!",
      });
    } else {
      return res.status(422).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
});

// ─── RESET PASSWORD ─────────────────────────────────────────────────────────
router.post("/reset-password", authLimiter, async (req, res) => {
  try {
    if (!req.body.email || !validateEmail(req.body.email)) {
      return res.status(422).json({ error: "Please provide a valid email address." });
    }

    const buffer = await crypto.randomBytes(32);
    const token = buffer.toString("hex");

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(422).json({ error: "User doesn't exist with that email" });
    }

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000; // Token expiration time: 1 hour

    await user.save();

    // Use the frontend URL from env for the reset link
    const resetBaseUrl = process.env.RESET_PASSWORD_URL || SMTP_USER;

    await transporter.sendMail({
      from: SMTP_USER,
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
          <h2 style="text-align: center;">Click on this 👉 <a href="${resetBaseUrl}/resetpassword/${token}">link</a> to reset your password</h2>
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


// ─── NEW PASSWORD ───────────────────────────────────────────────────────────
router.post("/new-password", authLimiter, async (req, res) => {
  try {
    const newPassword = req.body.password;
    const sentToken = req.body.token;

    if (!newPassword || !sentToken) {
      return res.status(422).json({ error: "Password and token are required." });
    }

    if (!validatePassword(newPassword)) {
      return res
        .status(422)
        .json({ error: "Password must be at least 6 characters long." });
    }

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