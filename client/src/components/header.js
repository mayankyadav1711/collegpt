import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faBars, faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons"; // Added faAngleDown for dropdown indicator
import defaultprofilepic from "./images/60111.png";
import Welcome_Collegpt from "./collegptanimation";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Track profile dropdown state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {

    
    if (state && state._id) {
      setIsLoading(true);

      fetch(`https://api-collegpt.vercel.app/view-profile/${state?._id}`)
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
    // Function to close the menu and profile dropdown when clicking anywhere outside
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
  
    // Adding event listener to handle clicks anywhere on the document
    document.addEventListener("mousedown", handleClickOutside);
  
    // Removing event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsMenuOpen(false); // Close the menu when profile dropdown is opened
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileOpen(false); // Close the profile dropdown when menu is opened
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <Welcome_Collegpt />
        </Link>
        {/* Desktop Menu  */}
        <nav className="hidden md:flex items-center space-x-20 ml-auto">
          <div className="text-gray-900 dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700">
            <Link to="/">Home</Link>
          </div>
          <div className="text-gray-900 dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700">
            <Link to="/courses">X-Notes</Link>
          </div>
          <div className="text-gray-900 dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700">
            <Link to="/userlist">Community</Link>
          </div>
          <div className="text-gray-900 dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700">
            <Link to="/about">About</Link>
          </div>
          <div className="text-gray-900 dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700">
            <Link to="/contributor_form">Contribute</Link>
          </div>
          <Link
            to="/contact"
            className="text-gray-900 font-medium dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-0 mr-0 ml-auto">
          <div className="icons">
            <div id="toggle-btn" className="fas fa-moon"></div>
          </div>
          <div className="relative" ref={profileRef}>
          <img
               src={userProfile?.profilePic || defaultprofilepic}
              className="w-16 h-16 ml-3 cursor-pointer rounded-full"
              onClick={handleProfileClick} // Attach click handler for profile picture
              alt="Profile Picture"
            />
            {/* Dropdown menu */}
            <div
              className={`absolute right-0 text-2xl mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10 ${
                isProfileOpen ? "" : "hidden"
              }`}
              ref={menuRef}
            >
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-2xl text-white hover:bg-gray-100 hover:text-black"
                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    toast.success("Logout Successfully!!");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
                <Link
                  to="/updateProfile"
                  className="block w-full text-center px-4 py-2 text-2xl text-white hover:bg-gray-100 hover:text-black"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`h-6 w-6 ${isProfileOpen ? "transform rotate-180" : ""}`}
          />
        </div>

        {/* Hamburger icon for menu  */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleMenu}
            className="flex items-center justify-center ml-auto w-10 h-10 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 mr-16 ml-0s"
            aria-label="Toggle Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 transition-transform duration-300 ease-in-out transform ${
    isMenuOpen ? "" : "opacity-0 pointer-events-none" // Hide the container when menu is closed
  }`}
>
 
        <button
          onClick={closeMenu}
          type="button"
          className="absolute top-4 right-4 w-10 h-10 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
          aria-label="Close Menu"
        >
          <FontAwesomeIcon icon={faTimes} className="w-12 h-12" />
        </button>

        {/* Menu items for Mobile*/}
        <nav
          ref={menuRef}
          className="flex flex-col bg-[#ffffff] dark:bg-[#020813]  items-center justify-center min-h-full space-y-40 w-full backdrop-blur-3xl bg-opacity-50"
        >
          <Link
            to="/"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            X-Notes
          </Link>
          <Link
            to="/userlist"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            Community
          </Link>
          <Link
            to="/about"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            About
          </Link>
         
          <Link
            to="/contributor_form"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            Contribute
          </Link>
          <Link
            to="/contact"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
