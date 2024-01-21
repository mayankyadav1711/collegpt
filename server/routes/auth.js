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

router.post("/signup", (req, res) => {
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

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser && isVerified) {
        return res.status(422).json({ error: "User already exists." });
      }

      bcrypt
        .hash(password, 12)
        .then((hashedpassword) => {
          // Generate new OTP and set the OTP expiry time
          const otp = generateOTP();
          const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP will be valid for 10 minutes

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

            savedUser
              .save()
              .then(() => {
                transporter.sendMail({
                  from: "collegpt@gmail.com", // Your email address
                  to: savedUser.email, // Your email address
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
                   
                    <img class="email-image" src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/jethalal_otp.gif?alt=media&token=61e96350-2a47-442e-9217-e8978d405591&_gl=1*ai9yxf*_ga*MTkzMDY4MTk2My4xNjk0NTQ0MDQw*_ga_CW55HF8NVT*MTY5Njc1MzgzNi4xNy4xLjE2OTY3NTQwOTMuMi4wLjA." style="border-radius: 50%; max-width: 300px; height: 300px">
                    
                    <h2 class="image-text">${otp}</h2>
            
                   
                    
                  </body>
                </html>
              `,
                });
            
                res.json({
                  message:
                    "OTP sent successfully. Please check your email to verify your account.",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error:
                    "An error occurred during user registration. Please try again later.",
                });
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

            user
              .save()
              .then((user) => {
                transporter.sendMail({
                  from: "collegpt@gmail.com", // Your email address
                  to: user.email, // Your email address
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
                   
                    <img class="email-image" src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/jethalal_otp.gif?alt=media&token=61e96350-2a47-442e-9217-e8978d405591&_gl=1*ai9yxf*_ga*MTkzMDY4MTk2My4xNjk0NTQ0MDQw*_ga_CW55HF8NVT*MTY5Njc1MzgzNi4xNy4xLjE2OTY3NTQwOTMuMi4wLjA." style="border-radius: 50%; max-width: 300px; height: 300px">
                    
                    <h2 class="image-text">${otp}</h2>
            
                   
                    
                  </body>
                </html>
              `,
                });

                res.json({
                  message:
                    "OTP sent successfully. Please check your email to verify your account.",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error:
                    "An error occurred during user registration. Please try again later.",
                });
              });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error:
              "An error occurred during password hashing. Please try again later.",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "An error occurred during user lookup. Please try again later.",
      });
    });
});

// Add a new route to verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(422).json({ error: "Please provide both email and OTP" });
  }

  // Find the user based on the email provided
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(422).json({ error: "User not found" });
    }

    // Check if the OTP has expired
    if (user.otpExpiry < Date.now()) {
      return res
        .status(422)
        .json({ error: "OTP has expired. Please request a new OTP" });
    }

    // Check if the provided OTP matches the user's stored OTP
    if (user.otp === otp) {
      // OTP is valid, update the isVerified field to true
      user.isVerified = true;
      user.save().then(() => {
        // Generate and send a JWT token for successful verification
        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        const { _id, name, email } = user;

        // Send a confirmation email for successful registration
        transporter.sendMail({
          from: "collegpt@gmail.com", // Your email address
          to: user.email, // Array of email addresses // Your email address
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
      
                /* CSS for text below images */
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
             
              <img class="email-image" src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/tmkoc-dayabhabhi.gif?alt=media&token=91cd60f3-a72c-46dd-92d2-95207cc3e884&_gl=1*19mu3fc*_ga*MTkzMDY4MTk2My4xNjk0NTQ0MDQw*_ga_CW55HF8NVT*MTY5NjYxNDg3Ni4xMi4xLjE2OTY2MTcwMDEuMjcuMC4w" style="border-radius: 50%; max-width: 300px; height: 300px">
              <h2 class="image-text"  >Your ultimate college companion ~ ColleGPT 💯, is here to revolutionize your academic journey🔥</h2>
              <h2 class="image-text">🌟 Explore 🌟</h2>
      
              <!-- Image 1 -->
              <a href="https://www.collegpt.com"> <img
                src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Xnotesvector.jpg?alt=media&token=bb10a77a-52b9-4aaa-b0df-6a79df17340f&_gl=1*1qqzsbn*_ga*MTkzMDY4MTk2My4xNjk0NTQ4MDQw*_ga_CW55HF8NVT*MTY5NjYxNTk0Ny4xMi4xLjE2OTY2MTY5NzcuNTYuMC4w"
                alt="Image 1"
                class="email-image"
              /></a>
              <p class="image-text"><a href="https://www.collegpt.com">Exclusive Notes</a></p>
              
              <!-- Image 2 -->
              <a href="https://www.collegpt.com"> <img
                src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/roadmapvector.jpg?alt=media&token=1e6b3d47-8ad0-4cb0-af6e-0983d230592f&_gl=1*wj1qg1*_ga*MTkzMDY4MTk2My4xNjk0NTQ4MDQw*_ga_CW55HF8NVT*MTY5NjYxNTk0Ny4xMi4xLjE2OTY2MTY5NzcuNTkuMC4w"
                alt="Image 2"
                class="email-image"
              /></a>
              <p class="image-text"><a href="https://www.collegpt.com">Detailed Roadmaps</a></p>
              
              <!-- Image 3 -->
              <a href="https://www.collegpt.com"> <img
                src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/cheatsheetvector.jpg?alt=media&token=01aeb25d-1670-4c0b-bedd-a839703e2d77&_gl=1*11je3m5*_ga*MTkzMDY4MTk2My4xNjk0NTQ4MDQw*_ga_CW55HF8NVT*MTY5NjYxNTk0Ny4xMi4xLjE2OTY2MTY5NzYuMTEuMC4w"
                alt="Image 3"
                class="email-image"
              /></a>
              <p class="image-text"><a href="https://www.collegpt.com">Handy CheatSheets</a></p>
              
              <!-- Image 4 -->
              <a href="https://www.collegpt.com"> <img
                src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/eventcalendarvector.jpg?alt=media&token=2b4c28ec-e627-42a6-b724-0f65c859a56a&_gl=1*ebxa2s*_ga*MTkzMDY4MTk2My4xNjk0NTQ4MDQw*_ga_CW55HF8NVT*MTY5NjYxNTk0Ny4xMi4xLjE2OTY2MTY5NzEuMzMuMC4w"
                alt="Image 4"
                class="email-image"
              /></a>
              <p class="image-text"><a href="https://www.collegpt.com">Event Calendar</a></p>
              
              <!-- Image 5 -->
              <a href="https://www.collegpt.com">   <img
                src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/community%20vector.jpg?alt=media&token=df9a73b7-3c3a-4bf2-8441-16890fc7b5df&_gl=1*g6kaho*_ga*MTkzMDY4MTk2My4xNjk0NTQ4MDQw*_ga_CW55HF8NVT*MTY5NjYxNTk0Ny4xMi4xLjE2OTY2MTY5NjguNjAuMC4w"
                alt="Image 5"
                class="email-image"
              /></a>
              <p class="image-text"><a href="https://www.collegpt.com">Engaging Community</a></p>
              
            </body>
          </html>
        `,
       
        });

        res.json({
          token,
          user: { _id, name, email },
          message: "OTP verification successful!",
        });
      });
    } else {
      return res.status(422).json({ error: "Invalid OTP" });
    }
  });
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

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          from: "collegpt@gmail.com",
          to: user.email,
          subject: "Reset Password (no reply) ",
          html: `<html>
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
          <h1 style=" text-align: center;">Password bhul gaye ? Itna yaad nahi rehta ? Khaana to nahi bhulte </h1>
          <img class="email-image" src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/jethalal%20gadha%20hu%F0%9F%98%82%20(Custom)%20(3)%20(Custom)%20(1).gif?alt=media&token=6dd0ab5e-3a9a-410e-a00a-734fe36027c9&_gl=1*fflit0*_ga*MTkzMDY4MTk2My4xNjk0NTQ0MDQw*_ga_CW55HF8NVT*MTY5Njc1MzgzNi4xNy4xLjE2OTY3NTUwNTcuNTcuMC4w" style="border-radius: 50%; max-width: 300px; height: 300px">
                        <h2 style=" text-align: center;">Click on this 👉 <a href="${EMAIL}/resetpassword/${token}">link</a> to reset password</h2>
                        </body>
        </html>`,
      });
        res.json({ message: "Check your email!!" });
      });
    });
  });
});

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        // If user not found, handle the case appropriately
        return res
          .status(422)
          .json({ error: "User not found or session expired." });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((savedUser) => {
          res.json({ message: "Password updated successfully!!" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
