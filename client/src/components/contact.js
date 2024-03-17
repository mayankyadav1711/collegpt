import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; // Import useNavigate


import handledarkmode from "./handledarkmode";
function Contact() {
  const { state } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  useEffect(() => {
    handledarkmode();
    setname(state?.name);
    setemail(state?.email);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state?._id) {
      // If user is not logged in, navigate to the login page
      toast.success("Please login first")
      navigate("/login");
      return;
    }
    const formData = {
      name,
      email,
      message,
      // Assuming you store user ID in local storage
    };

    try {
      const response = await fetch("https://api-collegpt.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Will contact you shortly!");
      } else {
        // Handle error
        console.error("ContactUs form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting ContactUs form :", error);
    }
  };
  return (
    <>
      <section class="contact">
        <div class="row">
        

          <form onSubmit={handleSubmit} method="post">
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required
              maxlength="50"
              class="box"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              required
              maxlength="50"
              class="box"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <textarea
              name="msg"
              class="box"
              placeholder="enter your message"
              required
              maxlength="1000"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
            <input
              type="submit"
              value="send message"
              class="inline-btn"
              name="submit"
            />
          </form>
        </div>

       
      </section>
    </>
  );
}

export default Contact;
