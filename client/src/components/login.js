/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import MiniHeader from "./miniheader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handledarkmode from "./handledarkmode";
function Login() {
  const {  dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    handledarkmode();
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation (you can add more validation rules as needed)
    if (!email || !password) {
      toast.error("Please provide both email and password.");
      return;
    }

    // Create a JSON payload to send in the request body
    const payload = {
      email,
      password,
    };

    // Make an API call to your server for user login
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        if (data.token && data.user) {
          // Login successful, save the token to localStorage or a state management system for future authenticated requests
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          toast.success("Successfully SignedIn!!", {
            className: "custom-toast", 
          });
          navigate("/"); // Redirect to the dashboard page after successful login
        } else {
          toast.error(
            data.error || "Invalid email or password. Please try again.", {
              className: "custom-toast", 
            });
         
        }
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
        alert("An error occurred during login. Please try again later.");
      });
  };

  return (
    <>
    <div className="background-container">
      <MiniHeader />
      <Sidebar />

      <section className="form-container">
        <form onSubmit={handleLogin} encType="multipart/form-data">
          <h3>Login Now</h3>
          <p>
            Your Email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength="50"
            className="box"
          />
          <p>
            Your Password <span>*</span>
          </p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength="20"
            className="box"
          />
          <Link to="/forgotpassword">
            <p>Forgot Password?</p>
          </Link>
          <button type="submit" className="btn">
            Login
          </button>
          <p>Don't have an account? </p>
          <Link to="/register">
            <a className="btn">Register</a>
          </Link>
        </form>
      </section>

      <Footer />
      </div>
    </>
  );
}

export default Login;
