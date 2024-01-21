import React, {  useEffect, useState } from "react";
import {  useNavigate,useLocation } from "react-router-dom";

import MiniHeader from "./miniheader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handledarkmode from "./handledarkmode";
function OTP() {
  const navigate = useNavigate();
  
  useEffect(() => {
    handledarkmode();
  }, []);

      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const userEmail = queryParams.get("email") || "";
    
      const [otp, setOtp] = useState("");
    
      const handleOTPVerification = (e) => {
        e.preventDefault();
        console.log("userEmail:", userEmail);
        console.log("otp:", otp);
        // Make an API call to your server for OTP verification
        fetch("/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail, otp }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            console.log(data);
            if (data.token && data.user) {
              // OTP verification successful, save the token to localStorage or a state management system for future authenticated requests
              localStorage.setItem("token", data.token);
              toast.success("OTP Verified! Please Login.", {
                className: "custom-toast", 
              });
              navigate("/login"); // Redirect to the dashboard page after successful OTP verification
            } else {
              toast.error(data.error || "Invalid OTP. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error occurred during OTP verification:", error);
            alert("An error occurred during OTP verification. Please try again later.");
          });
      };
    
      return (
        <>
        <div className="background-container">
        <MiniHeader />
          <Sidebar />
    
          <section className="form-container">
            <form onSubmit={handleOTPVerification}>
              <h3>OTP Verification</h3>
              <p>Enter OTP:<span>*</span></p>
              <input
  type="text"
  name="otp"
  placeholder="Enter OTP"
  pattern="^[0-9\s]{6}$"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
  required
  class="box"
  minlength="6"
  maxlength="6"
/>

    
              <button type="submit" className="btn">
                Submit
              </button>
              <p>Didn't get OTP? </p>
              <button className="btn">Resend OTP</button>
            </form>
          </section>
    
          <Footer />
          </div>
        </>
      );
    }
    
    export default OTP;
