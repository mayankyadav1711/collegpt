import React, {  useEffect, useState } from "react";

import MiniHeader from "./miniheader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handledarkmode from "./handledarkmode";
const  ForgotPassword = () => {

  const [email, setEmail] = useState('');
  useEffect(() => {
    handledarkmode();
  }, []);

      const handleFormSubmit = (event) => {
        event.preventDefault();
       
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          toast.error('Enter a Valid Email!');
          return;
        }
    
        fetch('/reset-password', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              toast.error(data.error);
            } else {
              toast.success(data.message);
              // navigate('/'); // Assuming this is the path to the home page after password reset request
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
<div className="background-container">
<MiniHeader/>
<Sidebar/>

<section class="form-container">

<form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <h3>Forgot Password</h3>
      <p>Enter email:<span>*</span></p>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="box"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>

</section>




<Footer/>
</div>
</>
  );
}

export default ForgotPassword;
