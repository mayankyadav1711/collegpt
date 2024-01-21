import React, {  useEffect, useState } from "react";
import {  useNavigate,useParams  } from "react-router-dom";

import MiniHeader from "./miniheader";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handledarkmode from "./handledarkmode";
const  ResetPassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    handledarkmode();
  }, []);
      const { token } = useParams();
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Token:', token);
    
        if (password !== confirmPassword) {
          toast.error('Passwords do not match!');
          return;
        }
    
        fetch('/new-password', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password,
            token,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              toast.error(data.error);
            } else {
              toast.success(data.message, {
                className: "custom-toast", 
              });
              navigate('/login')
              // Do something after successful password reset if needed
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
    <div className="background-container">
<MiniHeader />

<Sidebar/>

<section class="form-container">

<form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <h3>Reset Password</h3>
      <p>Enter Password <span>*</span></p>
      <input
        type="password"
        name="pass"
        placeholder="Enter password"
        required
        maxLength="50"
        className="box"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Confirm Password <span>*</span></p>
      <input
        type="password"
        name="cpass"
        placeholder="Confirm password"
        required
        maxLength="20"
        className="box"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className="btn">
        Reset Password
      </button>
    </form>

</section>




<Footer/>
</div>
</>
  );
}

export default ResetPassword;
