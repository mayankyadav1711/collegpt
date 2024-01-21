/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spinnerlogo from "./images/collegpt-pink.svg";
import {
  faSave,
  faPencilAlt,
 
} from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import handledarkmode from "./handledarkmode";

function UpdateProfile() {
  const { state } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const availableSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Machine Learning",
    "Artificial Intelligence",
    "C",
    "C++",
    "PHP",
    "React Native"
  ];
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const [editingMode, setEditingMode] = useState(false); // Add this line for editing mode
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState(1);
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [twitterURL, settwitterURL] = useState("");
  const [resumeURL, setresumeURL] = useState("");
  const [instaURL, setinstaURL] = useState("");
  const [codingURL, setCodingURL] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [cpi, setCPI] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [goals, setGoals] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previouspic, setpreviouspic] = useState(null);
  const MAX_FILE_SIZE_MB = 1;
  const urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/;
  const linkedinRegex =
    /^(https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+)\/?$/;
  const codingRegex =
    /^(https:\/\/(www\.)?)?(leetcode\.com|codechef\.com|codeforces\.com|hackerearth\.com|hackerank\.com|codingstudio\.com|codingninja\.com|topcoder\.com|coderbyte\.com|codewars\.com|geeksforgreeks\.org)\/[a-zA-Z0-9_-]+\/?$/;
  const instagramRegex =
    /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?(?:\?.*)?$/;
  const twitterRegex =
    /^(https?:\/\/)?(www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/?$/;

 

  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  useEffect(() => {
    if (state && state._id) {
      // Check if state is defined and _id is available
      console.log("Fetching user profile data...");
      setIsLoading(true);

      fetch(`/view-profile/${state._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setName(data.name || "");
          setEmail(data.email || "");
          setCollege(data.university || "");
          setSemester(data.sem || "");
          setGender(data.gender || "");
          setBirthdate(data.birthdate || "");
          setLinkedinURL(data.linkedinURL || "");
          setGithubURL(data.githubURL || "");
          settwitterURL(data.twitterURL || "");
          setCodingURL(data.codingURL || "");
          setresumeURL(data.resumeURL || "");
          setinstaURL(data.instaURL || "");
          setSelectedRoles(data.Roles || [""]);
          setAboutMe(data.aboutMe || "");
          setSelectedSkills(data.Skills || [""]);
          setCPI(data.cpi || "");
          setHobbies(data.hobbies || [""]);
          setGoals(data.goals || "");
          setpreviouspic(data.profilePic || "");

          setIsLoading(false);
          console.log("User profile data fetched successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
          // Handle error scenarios here
        });
    }
  }, [state]);

  const handleRoleSelect = (role) => {
    if (!selectedRoles.includes(role)) {
      setSelectedRoles([...selectedRoles, role]);
    }
    setShowRolesDropdown(false);
  };

  const handleRoleRemove = (role) => {
    setSelectedRoles(selectedRoles.filter((item) => item !== role));
  };
  const [selectedRoles, setSelectedRoles] = useState([]);
  const availableRoles = [
    "Mern Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Student",
    "Faculty",
  ];
  const [showRolesDropdown, setShowRolesDropdown] = useState(false);
  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setShowSkillsDropdown(false);
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== skill));
  };

  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "studymate"); // Replace 'your_upload_preset' with your actual Cloudinary upload preset name

    return fetch("https://api.cloudinary.com/v1_1/dkyrtfk1u/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(
            data.error.message || "Failed to upload image to Cloudinary."
          );
          return null;
        }
        return data.url;
      })
      .catch((error) => {
        console.error("Error occurred during image upload:", error);
        toast.error(
          "An error occurred during image upload. Please try again later."
        );
        return null;
      });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error("Only JPG, JPEG, and PNG image files are allowed.");
        setProfileImage(null);
      } else if (fileSizeMB > MAX_FILE_SIZE_MB) {
        e.target.value = "";
        toast.error("File size exceeds the limit of 1MB.");
        setProfileImage(null);
        e.target.value = "";
      } else {
        setProfileImage(file);
      }
    }
  };
  useEffect(() => {
    handledarkmode();
  }, []);

  const handleEditClick = () => {
    setEditingMode(true);
  };
  const isValidURL = (url, regex) => {
    return regex.test(url);
  };

  const validateURLs = () => {
    const trimmedGithubURL = githubURL ? githubURL.trim() : "";
    const trimmedLinkedinURL = linkedinURL ? linkedinURL.trim() : "";
    const trimmedCodingURL = codingURL ? codingURL.trim() : "";
    const trimmedInstagramURL = instaURL ? instaURL.trim() : "";
    const trimmedTwitterURL = twitterURL ? twitterURL.trim() : "";

    if (trimmedGithubURL && !isValidURL(trimmedGithubURL, githubRegex)) {
      toast.error("Invalid GitHub URL");

      return false;
    }

    if (trimmedLinkedinURL && !isValidURL(trimmedLinkedinURL, linkedinRegex)) {
      toast.error("Invalid LinkedIn URL");
      return false;
    }

    if (trimmedCodingURL && !isValidURL(trimmedCodingURL, codingRegex)) {
      toast.error("Invalid coding profile URL");
      return false;
    }
    if (
      trimmedInstagramURL &&
      !isValidURL(trimmedInstagramURL, instagramRegex)
    ) {
      toast.error("Invalid Instagram URL");
      return false;
    }
    if (trimmedTwitterURL && !isValidURL(trimmedTwitterURL, twitterRegex)) {
      toast.error("Invalid Twitter URL");
      return false;
    }

    return true;
  };

  const handleSaveClick = async () => {
    console.log(previouspic);
    if (!validateURLs()) {
      return;
    }

    console.log(state._id);
    let imageUrl = "";

    if (profileImage) {
      try {
        imageUrl = await handleImageUpload(profileImage);
        console.log(imageUrl, "checking");
        if (!imageUrl) {
          imageUrl = previouspic;
          return;
        }
      } catch (error) {
        console.error("Error occurred during image upload:", error);
        toast.error(
          "An error occurred during image upload. Please try again later."
        );
        return;
      }
    }

    try {
      const response = await fetch(`/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          _id: state._id,
          name,
          email,
          university: college,
          sem: semester,
          gender,
          profilepic: imageUrl || previouspic, // Keep the current image if imageUrl is empty
          birthdate,
          linkedinURL,
          githubURL,
          resumeURL,
          instaURL,
          twitterURL,
          codingURL,
          Roles: selectedRoles,
          aboutMe,
          Skills: selectedSkills,
          cpi,
          hobbies,
          goals,
          // ... other updated fields
        }),
      });

      const updatedUser = await response.json();

      if (response.ok) {
        toast.success("Profile updated successfully");
        // ... (other handling)
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error occurred during profile update:", error);
      toast.error("An error occurred during profile update");
    }

    setEditingMode(false);
  };
  const formatDate = (date) => {
    const birthdate = new Date(date);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${birthdate.getUTCDate()} ${
      monthNames[birthdate.getUTCMonth()]
    }, ${birthdate.getUTCFullYear()}`;
  };
  return (
    <>
      {/* Check isLoading to display loading or content */}

      {isLoading ? (
        <div className="loading-spinner">
          {/* Replace 'logo.svg' with the path to your SVG logo */}
          <img src={spinnerlogo} alt="Loading" className="spinner-logo" />
        </div>
      ) : (
        <div className="update">
          <section className="form-container">
            <form action="" method="post" encType="multipart/form-data">
              {editingMode ? <h3>Update Profile</h3> : <h3>View Profile</h3>}
              {editingMode ? (
                <FontAwesomeIcon
                  icon={faSave}
                  className="save-icon"
                  onClick={handleSaveClick}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="edit-icon"
                  onClick={handleEditClick}
                />
              )}
              <div className="update-profile-pic-container">
                {editingMode ? (
                  <div>
                    <input
                      type="file"
                      id="profile-image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden-input" // Apply styles to make it hidden
                    />
                    <label
                      htmlFor="profile-image"
                      className="profile-pic-label"
                    >
                      <img
                        src={
                          profileImage
                            ? URL.createObjectURL(profileImage)
                            : previouspic
                        }
                        alt="Profile"
                        className="profile-pic-preview"
                      />
                    </label>
                  </div>
                ) : (
                  <label htmlFor="profile-image" className="profile-pic-label">
                    <img
                      src={
                        profileImage
                          ? URL.createObjectURL(profileImage)
                          : previouspic
                      }
                      alt="Profile"
                      className="profile-pic-preview"
                    />
                  </label>
                )}
              </div>
              <div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Update Name</p>
                    {editingMode ? (
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        maxLength="50"
                        className="box"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{name}</span>
                    )}
                  </div>
                  <div className="box right-field" style={{ maxWidth: "100%" }}>
  <p>Update Email</p>
  {editingMode ? (
    <input
      type="email"
      name="email"
      placeholder="example@gmail.com"
      maxLength="50"
      className="box"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled
      style={{ width: "100%", maxWidth: "100%" }}
    />
  ) : (
    <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}
    >
      {email}
    </span>
  )}
</div>


                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Update College</p>
                    {editingMode ? (
                      <select
                        name="college"
                        className="box"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                      >
                        <option value="">-- Select a university --</option>
               
                        <option value="A. D. Patel Institute of Technology, Vallabh Vidyanagar">
                          A. D. Patel Institute of Technology, Vallabh
                          Vidyanagar
                        </option>
                        <option value="Adani Institute of Infrastructure Management, Ahmedabad">
                          Adani Institute of Infrastructure Management,
                          Ahmedabad
                        </option>
                        <option value="Ahmedabad University">
                          Ahmedabad University
                        </option>
                        <option value="Birla Vishwakarma Mahavidyalaya">
                          Birla Vishwakarma Mahavidyalaya
                        </option>
                        <option value="Birla Vishwakarma Mahavidyalaya, Anand">
                          Birla Vishwakarma Mahavidyalaya, Anand
                        </option>
                        <option value="C K Pithawala College of Engineering and Technology, Surat">
                          C K Pithawala College of Engineering and Technology,
                          Surat
                        </option>
                        <option value="C. U. Shah College of Engineering and Technology, Surendranagar">
                          C. U. Shah College of Engineering and Technology,
                          Surendranagar
                        </option>
                        <option value="C. U. Shah University">
                          C. U. Shah University
                        </option>
                        <option value="CEPT University">CEPT University</option>
                        <option value="Charotar University of Science and Technology">
                          Charotar University of Science and Technology
                        </option>
                        <option value="Darshan University, Rajkot">
                          Darshan University, Rajkot
                        </option>
                        <option value="Devang Patel Institute of Advance Technology and Research">
                          Devang Patel Institute of Advance Technology and
                          Research
                        </option>
                        <option value="Dharamsinh Desai University">
                          Dharamsinh Desai University
                        </option>
                        <option value="Dr. Jivraj Mehta Institute of Technology, Anand">
                          Dr. Jivraj Mehta Institute of Technology, Anand
                        </option>
                        <option value="Ganpat University">
                          Ganpat University
                        </option>
                        <option value="GLS University">GLS University</option>
                        <option value="Government Engineering College, Bharuch">
                          Government Engineering College, Bharuch
                        </option>
                        <option value="Government Engineering College, Bhavnagar">
                          Government Engineering College, Bhavnagar
                        </option>
                        <option value="Government Engineering College, Bhuj">
                          Government Engineering College, Bhuj
                        </option>
                        <option value="Government Engineering College, Dahod">
                          Government Engineering College, Dahod
                        </option>
                        <option value="Government Engineering College, Gandhinagar">
                          Government Engineering College, Gandhinagar
                        </option>
                        <option value="Government Engineering College, Godhra">
                          Government Engineering College, Godhra
                        </option>
                        <option value="Government Engineering College, Modasa">
                          Government Engineering College, Modasa
                        </option>
                        <option value="Government Engineering College, Palanpur">
                          Government Engineering College, Palanpur
                        </option>
                        <option value="Government Engineering College, Patan">
                          Government Engineering College, Patan
                        </option>
                        <option value="Government Engineering College, Rajkot">
                          Government Engineering College, Rajkot
                        </option>
                        <option value="Government Engineering College, Valsad">
                          Government Engineering College, Valsad
                        </option>
                        <option value="Gujarat Technological University">
                          Gujarat Technological University
                        </option>
                        <option value="Hasmukh Goswami College of Engineering, Ahmedabad">
                          Hasmukh Goswami College of Engineering, Ahmedabad
                        </option>
                        <option value="Indian Institute of Information Technology, Surat">
                          Indian Institute of Information Technology, Surat
                        </option>
                        <option value="Indian Institute of Information Technology, Vadodara">
                          Indian Institute of Information Technology, Vadodara
                        </option>
                        <option value="Indian Institute of Technology, Gandhinagar">
                          Indian Institute of Technology, Gandhinagar
                        </option>
                        <option value="Indus University">
                          Indus University
                        </option>
                        <option value="International Institute of Management and Technical Studies, Ahmedabad">
                          International Institute of Management and Technical
                          Studies, Ahmedabad
                        </option>
                        <option value="K.S. School of Business Management, Ahmedabad">
                          K.S. School of Business Management, Ahmedabad
                        </option>
                        <option value="Kadi Sarva Vishwavidyalaya	">
                          Kadi Sarva Vishwavidyalaya{" "}
                        </option>
                        <option value="Karnavati University, Ahmedabad">
                          Karnavati University, Ahmedabad
                        </option>
                        <option value="L. J. Institute of Management Studies, Ahmedabad">
                          L. J. Institute of Management Studies, Ahmedabad
                        </option>
                        <option value="L.J. Institute of Engineering & Technology, Ahmedabad">
                          L.J. Institute of Engineering & Technology, Ahmedabad
                        </option>
                        <option value="Lalbhai Dalpatbhai College of Engineering, Ahmedabad">
                          Lalbhai Dalpatbhai College of Engineering, Ahmedabad
                        </option>
                        <option value="LDRP Institute of Technology and Research, Gandhinagar">
                          LDRP Institute of Technology and Research, Gandhinagar
                        </option>
                        <option value="Lukhdhirji Engineering College, Morbi">
                          Lukhdhirji Engineering College, Morbi
                        </option>
                        <option value="Maharaja Sayajirao University of Baroda">
                          Maharaja Sayajirao University of Baroda
                        </option>
                        <option value="Marwadi University, Rajkot">
                          Marwadi University, Rajkot
                        </option>
                        <option value="Narnarayan Shastri Institute of Technology, Ahmedabad">
                          Narnarayan Shastri Institute of Technology, Ahmedabad
                        </option>
                        <option value="National Institute of Mass Communication and Journalism - NIMCJ, Ahmedabad">
                          National Institute of Mass Communication and
                          Journalism - NIMCJ, Ahmedabad
                        </option>
                        <option value="Nirma University of Science and Technology">
                          Nirma University of Science and Technology
                        </option>
                        <option value="P P Savani University">
                          P P Savani University
                        </option>
                        <option value="Pandit Deendayal Energy University">
                          Pandit Deendayal Energy University
                        </option>
                        <option value="Parul Institute of Engineering and Technology, Vadodara">
                          Parul Institute of Engineering and Technology,
                          Vadodara
                        </option>
                        <option value="Parul University">
                          Parul University
                        </option>
                        <option value="PDM College of Commerce, Rajkot">
                          PDM College of Commerce, Rajkot
                        </option>
                        <option value="Rai University">Rai University</option>
                        <option value="Rashtriya Raksha University">
                          Rashtriya Raksha University
                        </option>
                        <option value="Sardar Patel University">
                          Sardar Patel University
                        </option>
                        <option value="Sardar Vallabhbhai National Institute of Technology, Surat">
                          Sardar Vallabhbhai National Institute of Technology,
                          Surat
                        </option>
                        <option value="Sardar Vallabhbhai Patel Institute of Technology, Vasad">
                          Sardar Vallabhbhai Patel Institute of Technology,
                          Vasad
                        </option>
                        <option value="Sarvajanik College of Engineering and Technology, Surat">
                          Sarvajanik College of Engineering and Technology,
                          Surat
                        </option>
                        <option value="Shantilal Shah Engineering College, Sidsar, Bhavnagar">
                          Shantilal Shah Engineering College, Sidsar, Bhavnagar
                        </option>
                        <option value="Shri Labhubhai Trivedi Institute of Engineering & Technology, Rajkot">
                          Shri Labhubhai Trivedi Institute of Engineering &
                          Technology, Rajkot
                        </option>
                        <option value="Silver Oak College of Engineering and Technology, Ahmedabad">
                          Silver Oak College of Engineering and Technology,
                          Ahmedabad
                        </option>
                        <option value="Silver Oak University">
                          Silver Oak University
                        </option>
                        <option value="St. Kabir Institute of Professional Studies, Ahmedabad">
                          St. Kabir Institute of Professional Studies, Ahmedabad
                        </option>
                        <option value="St. Xavier's College, Ahmedabad">
                          St. Xavier's College, Ahmedabad
                        </option>
                        <option value="Times Business School, Bodakdev, Ahmedabad">
                          Times Business School, Bodakdev, Ahmedabad
                        </option>
                        <option value="U. V. Patel College of Engineering, Mehsana">
                          U. V. Patel College of Engineering, Mehsana
                        </option>
                        <option value="Unitedworld School of Business, Ahmedabad">
                          Unitedworld School of Business, Ahmedabad
                        </option>
                        <option value="Vishwakarma Government Engineering College, Gandhinagar">
                          Vishwakarma Government Engineering College,
                          Gandhinagar
                        </option>
                      </select>
                    ) : (
                      <span>{college || "Student"}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Update Semester</p>
                    {editingMode ? (
                      <input
                        type="number"
                        name="semester"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        className="box"
                      />
                    ) : (
                      <span>{semester}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Gender</p>
                    {editingMode ? (
                      <select
                        id="dropdown"
                        name="gender"
                        className="box"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value=" ">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefernottosay">
                          Prefer Not To Say
                        </option>
                      </select>
                    ) : (
                      <span>{gender}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Birthdate</p>
                    <FontAwesomeIcon className="calendar edit-icon" />
                    {editingMode ? (
                      <input
                        type="date"
                        name="birthdate"
                        className="box"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    ) : (
                      <span>{formatDate(birthdate)}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>LinkedIn URL:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="LinkedIn url"
                        placeholder="Enter your LinkedIn URL"
                        className="box"
                        value={linkedinURL}
                        onChange={(e) => setLinkedinURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{linkedinURL}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Github URL:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="Github url"
                        placeholder="Enter your Github URL"
                        maxLength="50"
                        className="box"
                        value={githubURL}
                        onChange={(e) => setGithubURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{githubURL}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p> Resume link:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="Resume url"
                        placeholder="Enter Resume Link"
                        className="box"
                        value={resumeURL}
                        onChange={(e) => setresumeURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{resumeURL}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Instagram URL:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="Instagram url"
                        placeholder="Enter Instagram Url"
                        maxLength="50"
                        className="box"
                        value={instaURL}
                        onChange={(e) => setinstaURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{instaURL}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Twitter link:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="Profile url"
                        placeholder="Enter twitter Link"
                        className="box"
                        value={twitterURL}
                        onChange={(e) => settwitterURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{twitterURL}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Coding Profile or Leetcode URL:</p>
                    {editingMode ? (
                      <input
                        type="url"
                        name="Coding url"
                        placeholder="Enter Coding url"
                        maxLength="50"
                        className="box"
                        value={codingURL}
                        onChange={(e) => setCodingURL(e.target.value)}
                      />
                    ) : (
                      <span
      style={{
        wordWrap: "break-word",
        maxWidth: "80%",
      }}>{codingURL}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Roles</p>
                    <div className="roles-dropdown">
  {editingMode && (
    <div
      className="selected-role-dropdown"
      onClick={() => setShowRolesDropdown(!showRolesDropdown)}
    >
      Select Roles{" "}
      <i className={`arrow ${showRolesDropdown ? "up" : "down"}`} />
    </div>
  )}
  {showRolesDropdown && editingMode && (
    <div className="roles-options">
      {availableRoles.map((role) => (
        <div
          key={role}
          className="role-option"
          onClick={() => handleRoleSelect(role)}
        >
          {role}
        </div>
      ))}
    </div>
  )}
  <div className="selected-roles-container">
    {selectedRoles.includes("Student") ? (
      <div key="Student" className={`selected-role default-role`}>
        <span>Student</span>
      </div>
    ) : null}
    {selectedRoles.map(
      (role) =>
        role !== "Student" && (
          <div key={role} className={`selected-role`}>
            <span>{role}</span>
            {editingMode && (
              <button onClick={() => handleRoleRemove(role)}>X</button>
            )}
          </div>
        )
    )}
  </div>
</div>

                  </div>
                  <div className="box right-field">
                    <p>About Me</p>
                    {editingMode ? (
                      <textarea
                        name="aboutMe"
                        placeholder="Write something about yourself..."
                        className="box"
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                      />
                    ) : (
                      <span>{aboutMe}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Skills</p>
                    {editingMode ? (
                      <div className="skills-dropdown">
                        <div
                          className="selected-skill-dropdown"
                          onClick={() =>
                            setShowSkillsDropdown(!showSkillsDropdown)
                          }
                        >
                          Select Skills{" "}
                          <i
                            className={`arrow ${
                              showSkillsDropdown ? "up" : "down"
                            }`}
                          />
                        </div>
                        {showSkillsDropdown && (
                          <div className="skills-options">
                            {availableSkills.map((skill) => (
                              <div
                                key={skill}
                                className="skill-option"
                                onClick={() => handleSkillSelect(skill)}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="selected-skills-container">
                          {selectedSkills.map((skill) => (
                            <div key={skill} className="selected-skill">
                              <span>{skill}</span>
                              {editingMode && (
                                <button
                                  onClick={() => handleSkillRemove(skill)}
                                >
                                  X
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="selected-skills-container">
                        {selectedSkills.map((skill) => (
                          <div key={skill} className="selected-skill">
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>CPI</p>
                    {editingMode ? (
                      <input
                        type="number"
                        name="cpi"
                        value={cpi}
                        step={0.01}
                        onChange={(e) => setCPI(e.target.value)}
                        className="box"
                      />
                    ) : (
                      <span>{cpi}</span>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="box left-field">
                    <p>Hobbies</p>
                    {editingMode ? (
                      <input
                        type="text"
                        name="hobbies"
                        placeholder="Enter your hobbies separated by commas"
                        className="box"
                        value={hobbies.join(", ")}
                        onChange={(e) =>
                          setHobbies(
                            e.target.value
                              .split(",")
                              .map((hobby) => hobby.trim())
                          )
                        }
                      />
                    ) : (
                      <span>{hobbies.join(", ")}</span>
                    )}
                  </div>
                  <div className="box right-field">
                    <p>Goals/Interests</p>
                    {editingMode ? (
                      <textarea
                        name="goals"
                        placeholder="&nbsp;&nbsp;&nbsp;Enter your goals/interests..."
                        value={goals}
                        onChange={(e) => setGoals(e.target.value)}
                        className="box"
                      />
                    ) : (
                      <span>{goals}</span>
                    )}
                  </div>
                </div>

                {editingMode ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
export default UpdateProfile;
