import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons"; // Added faAngleDown for dropdown indicator
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

  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <Welcome_Collegpt />
        </Link>
        {/* Desktop Menu  */}
        <nav className="hidden md:flex items-center space-x-20 ml-auto">
          <Link
            to="/"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            About
          </Link>
          <Link
            to="/userlist"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Community
          </Link>
          <Link
            to="/"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Cheatsheets
          </Link>
          <Link
            to="/"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Roadmaps
          </Link>
          <Link
            to="/courses"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Notes
          </Link>
        </nav>

        <div className="flex items-center space-x-0 mr-0 ml-auto">
          <div className="icons">
            {/* <div id="user-btn" className="fas fa-users"></div> */}
            <div id="toggle-btn" className="fas fa-moon"></div>
          </div>
          <div className="relative" ref={profileRef}>
            <img
              src={defaultprofilepic}
              className="w-16 h-16 ml-3 cursor-pointer"
              onClick={handleProfileClick} // Attach click handler for profile picture
              alt="Profile Picture"
            />
            {/* Dropdown menu */}
            <div
              className={`absolute right-0 text-2xl  mt-2 w-48 bg-[#12b8ff40] dark:bg-[#0a1c54]   border-gray-900 border-4 backdrop-blur-lg  rounded-md shadow-lg z-10 ${
                isProfileOpen ? "" : "hidden"
              }`}
              ref={menuRef}
            >
              <div className="py-1">
                {/* Logout option for desktop*/}
                <button
                  className="block w-full px-4 py-2 text-2xl text-gray-600 hover:bg-[#ebecefa6] hover:text-black dark:text-gray-600 dark:hover:bg-[#3d809c5e] dark:hover:text-white"

                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    toast.success("Logout Successfully!!");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
                {/* View Profile option */}
                <Link
                  to="/updateProfile"
<<<<<<< HEAD
                  className="block w-full text-center px-4 py-2 text-2xl text-white hover:bg-gray-100 hover:text-black"
=======
                  className="block w-full text-center px-4 py-2 text-2xl text-gray-600 hover:bg-[#ebecefa6] hover:text-black dark:text-gray-600 dark:hover:bg-[#3d809c5e] dark:hover:text-white"
     
                
>>>>>>> f1fb70a3fb8d5cf25dd6dc6d5689bd229c6a66ab
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          {/* <FontAwesomeIcon
            icon={faAngleDown}
            className={`h-6 w-6 ${isProfileOpen ? "transform rotate-180" : ""}`}
          /> */}
          {isLoading ? (
            <div className="profile">
              <div className="image"></div>
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2x"
                className="white-icon"
              />
            </div>
          ) : (
            <div className="profile flex items-center space-x-4">
              <img
                src={userProfile?.profilePic || defaultprofilepic}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="text-gray-800 dark:text-gray-300">
                <h3 className="font-medium">{userProfile?.name}</h3>
                <p>{userProfile?.Roles[0]}</p>
              </div>
              <div className="flex items-center ">
                <Link to="/updateProfile" className="inline-btn">
                  View Profile
                </Link>
            
                <Link to="/userlist" className="inline-btn">
                  Community
                </Link>
              </div>
            </div>
          )}
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
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 transition-transform duration-300 ease-in-out transform navbar ${
          isMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          type="button"
          className="absolute top-4 right-4 w-10 h-10 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Menu items */}
        <nav
          ref={menuRef}
          className="flex flex-col items-center justify-center min-h-full space-y-40 w-full backdrop-blur-3xl bg-opacity-50"
        >
          <Link
            to="#"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            About
          </Link>
          <Link
            to="#"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            Community
          </Link>
          <Link
            to="#"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            Cheatsheets
          </Link>
          <Link
            to="#"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            Roadmaps
          </Link>
          <Link
            to="#"
            className="py-4 text-5xl text-white dark:text-white hover:text-blue-900 dark:hover:text-blue-700"
          >
            Notes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
