import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import defaultprofilepic from "./images/60111.png";
import logo from "./images/Group.svg";
import Welcome_Collegpt from "./collegptanimation";


const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close the menu when clicking outside of it or on the menu toggle button
    function handleClick(event) {
      setIsOpen(!isOpen);
    }

    // Adding event listener when the component mounts
    document.body.addEventListener("click", handleClick);

    // Removing event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  useEffect(() => {
    // Function to close the menu when clicking outside of it
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Adding event listeners when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Removing event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle toggling the mobile menu
  const handleNavbarToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.add("navbar-open");
      document.body.classList.remove("navbar-closed");
    } else {
      document.body.classList.remove("navbar-open");
      document.body.classList.add("navbar-closed");
    }
  };

  return (
    <header className="header">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <Welcome_Collegpt />
        </Link>

        <nav className="hidden md:flex items-center space-x-20 ml-auto">
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Community
          </Link>
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Cheatsheets
          </Link>
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Roadmaps
          </Link>
          <Link
            to="#"
            className="text-white dark:text-white text-3xl px-3 hover:text-blue-900 dark:hover:text-blue-700"
          >
            Notes
          </Link>
        </nav>

        <div className="flex items-center space-x-0 mr-0 ml-auto">
          <div className="icons">
          
            {/* <div id="user-btn" className="fas fa-users"></div> */}
            <div id="toggle-btn" className="fas fa-moon"></div>
            <div className="image-text">
    <Link to="/"> {/* Replace "/your-image-link" with the image link */}
      <div className="profile">
        <img
          src={userProfile?.profilePic || defaultprofilepic}
          className={`image ${isOpen ? "large-image" : ""}`}
          alt=""
        />
      </div>
    </Link>
    </div>
          </div>

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
              <div className="flex items-center space-x-4">
                <Link to="/updateProfile" className="inline-btn">
                  View Profile
                </Link>
                <button
                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    toast.success("Logout Successfully!!");
                    navigate("/login");
                  }}
                  className="inline-btn"
                >
                  Logout
                </button>
                <Link to="/userlist" className="inline-btn">
                  Community
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleNavbarToggle}
            className="flex items-center justify-center ml-auto w-10 h-10 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 mr-16"
            aria-label="Toggle Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 transition-transform duration-300 ease-in-out transform navbar ${
          isOpen ? "" : "-translate-x-full"
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
        <nav ref={menuRef} className="flex flex-col items-center justify-center min-h-full space-y-40 w-full backdrop-blur-3xl bg-opacity-50 ">
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
