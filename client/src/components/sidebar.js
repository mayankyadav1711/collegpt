/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import defaultprofilepic from "./images/60111.png";

import handledarkmode from "./handledarkmode";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { state } = useContext(UserContext);
 
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {

    
    if (state && state._id) {
      setIsLoading(true);

      fetch(`/view-profile/${state._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserProfile(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    }
  }, [state]);

  useEffect(() => {
    handledarkmode();
    if (isOpen) {
      document.body.classList.add("sidebar-open");
      document.body.classList.remove("sidebar-closed");
    } else {
      document.body.classList.remove("sidebar-open");
      document.body.classList.add("sidebar-closed");
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header>
      <div className="image-text">
    <Link to="/updateprofile"> {/* Replace "/your-image-link" with the image link */}
      <div className="profile">
        <img
          src={userProfile?.profilePic || defaultprofilepic}
          className={`image ${isOpen ? "large-image" : ""}`}
          alt=""
        />
      </div>
    </Link>
      <div
        className={`toggle-icon ${isOpen ? "open" : "close"}`}
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleRight} />
      </div>
  
  </div>
        <div>
          <div className="text logo-text">
            <span className="name">{userProfile?.name}</span>
            <span className="profession">{userProfile?.Roles[0]}</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="text ">Home</span>
              </Link>
            </li>
            <li className="">
              <Link to="/about">
                <i className="fas fa-question"></i>
                <span className="text ">About</span>
              </Link>
            </li>
            <li className="">
              <Link to="/courses">
                <i className="fas fa-graduation-cap"></i>
                <span className="text ">Courses</span>
              </Link>
            </li>
            <li className="">
              <Link to="/contributor_form">
                <i className="fas fa-chalkboard-user"></i>
                <span className="text ">Contributors</span>
              </Link>
            </li>
            <li className="">
              <Link to="/contact">
                <i className="fas fa-headset"></i>
                <span className="text ">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
