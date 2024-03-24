/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import social media icons

import handledarkmode from "./handledarkmode";
import defaultprofilepic from "./images/60111.png";
import spinnerlogo from "./images/Group.svg";
const Userlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const profilesPerPage = 12; // Number of profiles to display per page
  const [counter, setCounter] = useState(0); // Counter for animation

  useEffect(() => {
    handledarkmode();
  }, []);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await fetch(
          "https://api-collegpt.vercel.app/all-profiles"
        );
        const data = await response.json();
        const profilesWithState = data.map((profile) => ({
          ...profile,
          isOpen: false,
        }));
        setUserProfiles(profilesWithState);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < userProfiles.length) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 5); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [counter, userProfiles.length]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  // Load the Google Ads script
  const adsbygoogleScript = document.createElement('script');
  adsbygoogleScript.async = true;
  adsbygoogleScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  adsbygoogleScript.crossOrigin = "anonymous";
  document.body.appendChild(adsbygoogleScript);

  // Initialize ads
  (window.adsbygoogle = window.adsbygoogle || []).push({});

  return () => {
    // Cleanup the script when the component unmounts
    document.body.removeChild(adsbygoogleScript);
  };
}, []);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const filteredProfiles = userProfiles.filter(
    (userProfile) =>
      userProfile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userProfile.Roles.some((role) =>
        role.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      userProfile.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProfiles = filteredProfiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const toggleAccordion = (profileId) => {
    setUserProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile._id === profileId
          ? { ...profile, isOpen: !profile.isOpen }
          : { ...profile, isOpen: false }
      )
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination when searching
  };

  return (
    <>
      <style>
        {`
      .user-list {
        position: relative;
      }
      .user-list .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(250px, 1fr));
        gap: 1rem;
      }
      @media (max-width: 768px) {
        .user-list .grid {
          grid-template-columns: repeat(2, minmax(250px, 1fr));
        }
      }
      @media (max-width: 480px) {
        .user-list .grid {
          grid-template-columns: repeat(1, minmax(250px, 1fr));
        }
      }
      .user-list .grid:hover > .bg-custom {
        filter: blur(4px);
        transition: filter 0.3s ease;
      }
      .user-list .grid > .bg-custom:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
        filter: none;
      }
      .bg-custom {
        background-color: rgb(92 173 173 / 25%);
      }
    `}
      </style>
      <div className="user-list">
        <h1 class="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-8xl dark:text-white">
          Our Community {counter}
        </h1>

        <form className="userlist-searchbar">
          <input
            type="text"
            name="search_box"
            required
            placeholder="Search Member"
            maxLength="100"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit" className="fas fa-search -mr-16 "></button>
        </form>
        {isLoading ? (
          <div className="loading-spinner">
            {/* Replace 'logo.svg' with the path to your SVG logo */}
            <img src={spinnerlogo} alt="Loading" className="spinner-logo" />
          </div>
        ) : filteredProfiles.length === 0 ? (
          <div>
            <h2 className="">No match found. </h2>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mx-44 my-10">
                        <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-2443682363346742"
           data-ad-slot="2738377151"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>

            {currentProfiles.map((userProfile) => (
              <div
                key={userProfile._id}
                className=" rounded-lg mx-2 bg-custom transition-all"
              >
     
                <div className="p-6 text-center">
                  <img
                    className="mx-auto rounded-full h-48 w-48 object-cover transform hover:scale-110 transition-transform duration-300"
                    src={userProfile?.profilePic || defaultprofilepic}
                    alt="author avatar"
                  />
                  <h3 className="dark:text-white text-4xl font-medium mt-4 mb-2">
                    {userProfile?.name}
                  </h3>
                  <p className="dark:text-white text-2xl mb-4">
                    {userProfile?.Roles[0]}
                  </p>{" "}
                  {/* Display only the first role */}
                  <div className="flex justify-center space-x-4">
                  <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00000080] hover:text-[#000000]"
                >
                                       <FontAwesomeIcon icon={faXTwitter} className="w-8 h-8" />

                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00000080] hover:text-[#000000]"
                >
                                       <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />

                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0076b580] hover:text-[#0077b5]"
                >
                                      <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />

                </a>

                  </div>
                </div>
              </div>
            ))}
                        <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-2443682363346742"
           data-ad-slot="2738377151"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
          </div>
        )}

        <nav className="pagination-outer my-5" aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Previous"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            <li className="page-item">
              <button className="page-link page-number" disabled>
                {currentPage}
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Next"
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(userProfiles.length / profilesPerPage)
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Userlist;
