/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import logo from "./images/collegpt-pink.svg";
import Welcome_Collegpt from "./collegptanimation";
const MiniHeader = () => {
 
  return (
    <>
      <header className="header">
        <section className="flex">
        <Link to="/">
          <a className=" logo-trans">
            <img className="  logo-header" src={logo} alt="College GPT" />
            College GPT
          </a>
        </Link>

          <Welcome_Collegpt />

          <div className="icons">
          
     
            <div id="user-btn" className="fas fa-user"></div>
            <div id="toggle-btn" className="fas fa-sun"></div>
          </div>

          <div className="profile">
            <div className="flex-btn">
              <Link to="/login">
                <a className="inline-btn">login</a>
              </Link>
              <Link to="/register">
                <a className="inline-btn">register</a>
              </Link>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default MiniHeader;
