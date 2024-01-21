import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import defaultprofilepic from "./images/60111.png";

import handledarkmode from "./handledarkmode";

const Userlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const profilesPerPage = 5; // Number of profiles to display per page
  useEffect(() => {
    handledarkmode();
  }, []);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await fetch("/all-profiles");
        const data = await response.json();
        // eslint-disable-next-line no-unused-vars
        const profilesWithState = data.map((profile) => ({
          ...profile,
          isOpen: false,
        }));
        setUserProfiles(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
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
      <div className="user-list">
        <h1 className="userlist userlisth1" id="head">
        👥 OUR COMMUNITY 👥
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
          <button type="submit" className="fas fa-search "></button>
        </form>
        {isLoading ? (
          <div>
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
          </div>
        ) : filteredProfiles.length === 0 ? (
          <div>
            <h2 className="">No match found. </h2>
          </div>
        ) : (
          <div className="accordion">
            {currentProfiles.map((userProfile) => (
              <div
                key={userProfile._id}
                className={`accordion-item ${
                  userProfile.isOpen ? "active" : ""
                }`}
              >
                  <div
                    className="accordion-item-header"
                    onClick={() => toggleAccordion(userProfile._id)}
                  >
                    <img
                      src={userProfile?.profilePic || defaultprofilepic}
                      alt="Profile"
                      className="profile-pic-list"
                    />
                    <h3>{userProfile?.name}</h3>
                  </div>
                  <div
                    className="accordion-item-body"
                    style={{
                      maxHeight: userProfile.isOpen ? "50rem" : "0",
                    }}
                  >
                    <div className="accordion-item-body-content box1 .box-user-list">
                      <div className="content">
                        <div className="image">
                          <img
                            src={userProfile?.profilePic || defaultprofilepic}
                            alt="Profile"
                            className="image-user-list"
                          />
                        </div>
                       
                        <br />
                        <div className="text">
                          <p className="name">
                            {userProfile?.name}
                            {/* <div class="wrapper"> */}
                            {/* <div class="icon-verified"> */}
                            <svg viewBox="0 0 30 22" class="icon-verified">
                              <g>
                                <path
                                  clip-rule="evenodd"
                                  d="M8.52 3.59c.388-.568.908-1.032 1.515-1.353.607-.32 1.284-.488 1.97-.488.687 0 1.364.168 1.971.488.607.321 1.127.785 1.514 1.352.675-.127 1.37-.088 2.027.115.656.203 1.252.563 1.737 1.05.485.485.844 1.082 1.046 1.739.201.656.24 1.352.11 2.026.567.387 1.031.906 1.352 1.512.32.607.488 1.282.488 1.968 0 .686-.167 1.362-.488 1.968-.32.607-.785 1.126-1.352 1.512.13.675.091 1.37-.11 2.027-.202.656-.56 1.253-1.046 1.74-.485.485-1.081.846-1.737 1.048-.656.203-1.352.243-2.026.115-.388.567-.908 1.032-1.515 1.352-.607.32-1.284.489-1.97.489-.687 0-1.364-.168-1.971-.489-.607-.32-1.127-.785-1.515-1.352-.675.12-1.369.077-2.025-.124-.655-.202-1.253-.557-1.745-1.036-.477-.492-.83-1.09-1.032-1.745-.202-.656-.246-1.35-.128-2.025-.56-.393-1.018-.913-1.338-1.518-.32-.605-.492-1.277-.502-1.962.01-.684.182-1.356.502-1.961S3.03 8.913 3.59 8.519c-.12-.675-.077-1.37.124-2.025.202-.656.557-1.254 1.036-1.745.492-.478 1.09-.833 1.745-1.035.656-.202 1.35-.244 2.025-.125zm2.27 12.565l-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                                  fill="url(#paint0_linear_7351_410156)"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  clip-rule="evenodd"
                                  d="M10.202 3.072c-.555.293-1.03.717-1.385 1.236-.618-.11-1.253-.07-1.852.114-.6.185-1.147.51-1.596.947-.438.449-.763.996-.948 1.596-.184.6-.223 1.234-.113 1.852-.512.36-.932.836-1.224 1.39-.293.552-.45 1.167-.459 1.793.009.626.166 1.24.459 1.794.292.553.712 1.03 1.224 1.389-.108.617-.068 1.252.116 1.851.185.6.508 1.147.945 1.597.45.438.996.762 1.596.947.6.184 1.234.223 1.852.114.354.519.83.943 1.385 1.236.556.294 1.174.447 1.803.447.628 0 1.246-.153 1.802-.447.555-.293 1.03-.717 1.385-1.236.617.116 1.253.08 1.854-.105.6-.186 1.145-.515 1.589-.96.443-.444.771-.99.956-1.59.184-.601.219-1.237.101-1.854.519-.354.943-.828 1.236-1.383.294-.555.447-1.173.447-1.8s-.153-1.245-.447-1.8c-.293-.555-.717-1.03-1.236-1.383.118-.617.083-1.253-.101-1.853-.184-.6-.513-1.147-.956-1.591-.444-.445-.99-.774-1.59-.96-.6-.185-1.236-.221-1.853-.105-.354-.519-.83-.943-1.385-1.236-.556-.294-1.174-.447-1.802-.447-.629 0-1.247.153-1.803.447zm.588 13.008l-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                                  fill="#F9E87F"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  clip-rule="evenodd"
                                  d="M10.202 3.072c-.555.293-1.03.717-1.385 1.236-.618-.11-1.253-.07-1.852.114-.6.185-1.147.51-1.596.947-.438.449-.763.996-.948 1.596-.184.6-.223 1.234-.113 1.852-.512.36-.932.836-1.224 1.39-.293.552-.45 1.167-.459 1.793.009.626.166 1.24.459 1.794.292.553.712 1.03 1.224 1.389-.108.617-.068 1.252.116 1.851.185.6.508 1.147.945 1.597.45.438.996.762 1.596.947.6.184 1.234.223 1.852.114.354.519.83.943 1.385 1.236.556.294 1.174.447 1.803.447.628 0 1.246-.153 1.802-.447.555-.293 1.03-.717 1.385-1.236.617.116 1.253.08 1.854-.105.6-.186 1.145-.515 1.589-.96.443-.444.771-.99.956-1.59.184-.601.219-1.237.101-1.854.519-.354.943-.828 1.236-1.383.294-.555.447-1.173.447-1.8s-.153-1.245-.447-1.8c-.293-.555-.717-1.03-1.236-1.383.118-.617.083-1.253-.101-1.853-.184-.6-.513-1.147-.956-1.591-.444-.445-.99-.774-1.59-.96-.6-.185-1.236-.221-1.853-.105-.354-.519-.83-.943-1.385-1.236-.556-.294-1.174-.447-1.802-.447-.629 0-1.247.153-1.803.447zm.588 13.008l-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                                  fill="url(#paint1_linear_7351_410156)"
                                  fill-opacity=".8"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  d="M7.05 12.346v1.424l3.74 3.74 6.2-6.77V9.295l-.114-.085.114.106-6.2 6.77-3.74-3.74z"
                                  fill="#D18800"
                                ></path>
                                <path
                                  d="M7.094 12.302l-.044.044v-.072l.044.028z"
                                  fill="#D18800"
                                ></path>
                                <defs>
                                  <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint0_linear_7351_410156"
                                    x1="4.5"
                                    x2="22.8"
                                    y1="4.5"
                                    y2="23.4"
                                  >
                                    <stop stop-color="#F4E72A"></stop>
                                    <stop
                                      offset=".474"
                                      stop-color="#CD8105"
                                    ></stop>
                                    <stop
                                      offset=".602"
                                      stop-color="#CB7B00"
                                    ></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#F4EC26"
                                    ></stop>
                                  </linearGradient>
                                  <linearGradient
                                    gradientUnits="userSpaceOnUse"
                                    id="paint1_linear_7351_410156"
                                    x1="5.14"
                                    x2="18.859"
                                    y1="5.141"
                                    y2="18.861"
                                  >
                                    <stop stop-color="#F9E87F"></stop>
                                    <stop
                                      offset=".406"
                                      stop-color="#DCAB00"
                                    ></stop>
                                    <stop
                                      offset=".989"
                                      stop-color="#DCAB00"
                                    ></stop>
                                    <stop
                                      offset=".99"
                                      stop-color="#F9E87F"
                                    ></stop>
                                  </linearGradient>
                                </defs>
                              </g>
                            </svg>
                          </p>

                          <div className="level">
  {userProfile.Roles.map((role, index) => (
    <span key={index}>
      {role}
      {index < userProfile.Roles.length - 1 && <span className="bullet"> • </span>}
    </span>
  ))}
</div>


                          <p className="job_description">
                            {" "}
                            {/* about me    */}
                            {userProfile?.aboutMe}
                          </p>
                        </div>
                        <div className="icons">
                          <ul>
                            <li>
                              <a href={userProfile.githubURL} target="_blank" rel="noreferrer">
                              <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                              </a>
                            </li>
                            <li>
                              <a href={userProfile.linkedinURL} target="_blank" rel="noreferrer">
                              <svg
                            viewBox="-2 0 27 27"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                          </svg>
                              </a>
                            </li>
                            <li>
                              <Link to={userProfile.codingURL}>
                                <a href={userProfile.codingURL} target="_blank" rel="noreferrer">
                                <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-code-slash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                          </svg>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <a href={userProfile.resumeURL} target="_blank" rel="noreferrer">
                              <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-briefcase"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                              </a>
                            </li>
                            <li>
                              <a href={userProfile?.instaURL} target="_blank" rel="noreferrer">
                              <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                              </a>
                            </li>
                            <li>
                              <a href={userProfile.twitterURL} target="_blank" rel="noreferrer">
                              <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17.7778in"
                            height="17.7778in"
                            viewBox="0 0 1280 1280"
                          >
                            <path
                              id="Selection #3"
                              fill="currentColor"
                              stroke="black"
                              stroke-width="1"
                              d="M 2.00 40.00 C 2.00 40.00 373.00 40.00 373.00 40.00 376.57 40.01 380.69 39.89 384.00 41.43 389.54 44.01 397.49 55.78 401.37 61.00 401.37 61.00 445.37 120.00 445.37 120.00 445.37 120.00 635.13 374.00 635.13 374.00 635.13 374.00 688.58 446.00 688.58 446.00 688.58 446.00 701.58 464.00 701.58 464.00 702.79 465.66 704.77 468.96 707.09 468.96 709.79 468.96 715.06 462.99 716.91 461.00 716.91 461.00 739.99 436.00 739.99 436.00 739.99 436.00 773.09 400.00 773.09 400.00 773.09 400.00 837.09 331.00 837.09 331.00 837.09 331.00 982.91 174.00 982.91 174.00 982.91 174.00 1042.96 109.00 1042.96 109.00 1042.96 109.00 1090.00 58.00 1090.00 58.00 1100.94 46.92 1102.46 40.03 1119.00 40.00 1119.00 40.00 1221.00 40.00 1221.00 40.00 1215.56 51.09 1197.20 68.01 1188.17 78.00 1188.17 78.00 1115.09 157.00 1115.09 157.00 1115.09 157.00 974.91 309.00 974.91 309.00 974.91 309.00 876.83 415.00 876.83 415.00 876.83 415.00 789.72 509.00 789.72 509.00 789.72 509.00 770.00 530.00 770.00 530.00 767.60 532.43 762.24 537.50 761.98 541.00 761.70 544.64 767.55 551.14 769.79 554.00 769.79 554.00 793.00 585.00 793.00 585.00 793.00 585.00 890.29 715.00 890.29 715.00 890.29 715.00 977.13 831.00 977.13 831.00 977.13 831.00 1076.37 964.00 1076.37 964.00 1076.37 964.00 1163.88 1081.00 1163.88 1081.00 1163.88 1081.00 1241.87 1185.00 1241.87 1185.00 1251.35 1197.64 1274.52 1226.35 1280.00 1239.00 1280.00 1239.00 907.00 1239.00 907.00 1239.00 904.57 1239.00 901.26 1239.13 899.00 1238.26 893.56 1236.16 884.24 1222.15 880.37 1217.00 880.37 1217.00 830.29 1150.00 830.29 1150.00 830.29 1150.00 764.37 1062.00 764.37 1062.00 764.37 1062.00 623.87 874.00 623.87 874.00 623.87 874.00 567.71 799.00 567.71 799.00 567.71 799.00 553.63 780.00 553.63 780.00 552.08 777.99 549.73 774.46 546.96 774.30 543.06 774.06 538.35 780.38 535.91 783.00 535.91 783.00 511.00 810.00 511.00 810.00 511.00 810.00 472.91 851.00 472.91 851.00 472.91 851.00 403.83 926.00 403.83 926.00 403.83 926.00 369.09 963.00 369.09 963.00 369.09 963.00 281.09 1058.00 281.09 1058.00 281.09 1058.00 206.09 1139.00 206.09 1139.00 206.09 1139.00 182.00 1165.00 182.00 1165.00 182.00 1165.00 161.91 1187.00 161.91 1187.00 161.91 1187.00 132.17 1219.00 132.17 1219.00 127.98 1223.63 117.27 1236.25 112.00 1238.26 109.72 1239.13 106.45 1239.00 104.00 1239.00 104.00 1239.00 0.00 1239.00 0.00 1239.00 3.14 1230.81 10.83 1223.21 17.00 1217.00 17.00 1217.00 34.91 1198.00 34.91 1198.00 34.91 1198.00 109.91 1117.00 109.91 1117.00 109.91 1117.00 264.09 950.00 264.09 950.00 264.09 950.00 376.17 829.00 376.17 829.00 376.17 829.00 425.91 776.00 425.91 776.00 425.91 776.00 443.09 757.00 443.09 757.00 443.09 757.00 463.42 735.00 463.42 735.00 463.42 735.00 483.00 714.00 483.00 714.00 485.66 711.33 491.61 705.72 492.23 702.00 492.90 697.97 487.70 692.11 485.37 689.00 485.37 689.00 462.88 659.00 462.88 659.00 462.88 659.00 370.15 535.00 370.15 535.00 370.15 535.00 287.87 425.00 287.87 425.00 287.87 425.00 113.12 191.00 113.12 191.00 113.12 191.00 39.63 93.00 39.63 93.00 39.63 93.00 14.29 59.00 14.29 59.00 9.46 52.26 5.46 47.74 2.00 40.00 Z M 1112.00 1155.00 C 1112.00 1155.00 1053.37 1075.00 1053.37 1075.00 1053.37 1075.00 932.88 914.00 932.88 914.00 932.88 914.00 845.37 797.00 845.37 797.00 845.37 797.00 593.63 460.00 593.63 460.00 593.63 460.00 526.88 371.00 526.88 371.00 526.88 371.00 386.37 183.00 386.37 183.00 386.37 183.00 353.34 139.00 353.34 139.00 353.34 139.00 339.83 124.74 339.83 124.74 339.83 124.74 332.00 124.00 332.00 124.00 332.00 124.00 170.00 124.00 170.00 124.00 170.00 124.00 185.58 146.00 185.58 146.00 185.58 146.00 233.12 210.00 233.12 210.00 233.12 210.00 359.63 379.00 359.63 379.00 359.63 379.00 605.37 708.00 605.37 708.00 605.37 708.00 755.12 908.00 755.12 908.00 755.12 908.00 895.12 1095.00 895.12 1095.00 895.12 1095.00 927.89 1139.00 927.89 1139.00 930.61 1142.53 938.47 1152.70 942.17 1154.26 944.26 1155.14 947.71 1155.00 950.00 1155.00 950.00 1155.00 1112.00 1155.00 1112.00 1155.00 Z"
                            />
                          </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        <nav className="pagination-outer" aria-label="Page navigation">
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
