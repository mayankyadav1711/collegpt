/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MiniHeader from "./miniheader";
import Sidebar from "./sidebar";
import Footer from "./footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handledarkmode from "./handledarkmode";
import defaultprofilepic from "./images/60111.png";
import Welcome_Message from "./welcomemsg";

function Register() {
  useEffect(() => {
    handledarkmode();
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [sem, setSem] = useState(1);
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const MAX_FILE_SIZE_MB = 1;

  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

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

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Perform validation (you can add more validation rules as needed)
    if (!name || !email || !password || !c_password || !university || !gender) {
      toast.error("Please fill in all the required fields.");
      return;
    }
if (!/^([^\s@]+@gmail\.com|[^@]+@ldrp\.ac\.in)$/.test(email)) {
  toast.error("Enter a valid Gmail !");
  return;
}


    if (password !== c_password) {
      toast.error("Passwords do not match.");
      return;
    }

    // Check if a profileImage is selected, and upload it to Cloudinary if so
    let imageUrl = "";
    if (profileImage) {
      try {
        imageUrl = await handleImageUpload(profileImage);
        console.log(imageUrl);
        if (!imageUrl) {
          // Error occurred during image upload
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

    // Create a JSON payload to send in the request body
    const payload = {
      name,
      email,
      password,
      university,
      sem,
      gender,
      profilePic: imageUrl, // Use the Cloudinary image URL, or an empty string if no image was uploaded
    };

    // Make an API call to your server for user registration
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        if (
          data.message ===
          "OTP sent successfully. Please check your email to verify your account."
        ) {
          toast.success(
            "Registration successful! Please check your email for OTP verification."
            , {
              className: "custom-toast", 
            });
          navigate(`/otp?email=${encodeURIComponent(email)}`); // Redirect to the OTP verification page after successful registration
        } else {
          toast.error(
            data.error || "Registration failed. Please try again later."
          );
        }
      })
      .catch((error) => {
        console.error("Error occurred during registration:", error);
        alert("An error occurred during registration. Please try again later.");
      });
  };

  return (
    <>
      <div className="background-container">
        <MiniHeader />
        <Sidebar />
        <Welcome_Message />
<section className="register">
        <section className="form-container">
          <form onSubmit={handleRegistration} encType="multipart/form-data">
            {/* <Welcome_Collegpt /> */}
            <h3>Register Now</h3>
            <p>
              &nbsp;&nbsp; Your Name <span>*</span>
            </p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength="50"
              className="box"
            />
            <p>
              &nbsp;&nbsp; Your Email <span>*</span>
            </p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength="50"
              className="box"
            />
            <p>
              &nbsp;&nbsp; Your Password <span>*</span>
            </p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              maxLength="20"
              className="box"
            />
            <p>
              &nbsp;&nbsp; Confirm Password <span>*</span>
            </p>
            <input
              type="password"
              name="c_password"
              placeholder="Confirm your password"
              value={c_password}
              onChange={(e) => setCPassword(e.target.value)}
              required
              maxLength="20"
              className="box"
            />
            <p>
              &nbsp;&nbsp; College <span>*</span>
            </p>
            <select
              name="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="box"
            >
              <option value="">-- Select a university --</option>
       
              <option value="A. D. Patel Institute of Technology, Vallabh Vidyanagar">
                A. D. Patel Institute of Technology, Vallabh Vidyanagar
              </option>
              <option value="Adani Institute of Infrastructure Management, Ahmedabad">
                Adani Institute of Infrastructure Management, Ahmedabad
              </option>
              <option value="Ahmedabad University">Ahmedabad University</option>
              <option value="Birla Vishwakarma Mahavidyalaya">
                Birla Vishwakarma Mahavidyalaya
              </option>
              <option value="Birla Vishwakarma Mahavidyalaya, Anand">
                Birla Vishwakarma Mahavidyalaya, Anand
              </option>
              <option value="C K Pithawala College of Engineering and Technology, Surat">
                C K Pithawala College of Engineering and Technology, Surat
              </option>
              <option value="C. U. Shah College of Engineering and Technology, Surendranagar">
                C. U. Shah College of Engineering and Technology, Surendranagar
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
                Devang Patel Institute of Advance Technology and Research
              </option>
              <option value="Dharamsinh Desai University">
                Dharamsinh Desai University
              </option>
              <option value="Dr. Jivraj Mehta Institute of Technology, Anand">
                Dr. Jivraj Mehta Institute of Technology, Anand
              </option>
              <option value="Ganpat University">Ganpat University</option>
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
              <option value="Indus University">Indus University</option>
              <option value="International Institute of Management and Technical Studies, Ahmedabad">
                International Institute of Management and Technical Studies,
                Ahmedabad
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
                National Institute of Mass Communication and Journalism - NIMCJ,
                Ahmedabad
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
                Parul Institute of Engineering and Technology, Vadodara
              </option>
              <option value="Parul University">Parul University</option>
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
                Sardar Vallabhbhai National Institute of Technology, Surat
              </option>
              <option value="Sardar Vallabhbhai Patel Institute of Technology, Vasad">
                Sardar Vallabhbhai Patel Institute of Technology, Vasad
              </option>
              <option value="Sarvajanik College of Engineering and Technology, Surat">
                Sarvajanik College of Engineering and Technology, Surat
              </option>
              <option value="Shantilal Shah Engineering College, Sidsar, Bhavnagar">
                Shantilal Shah Engineering College, Sidsar, Bhavnagar
              </option>
              <option value="Shri Labhubhai Trivedi Institute of Engineering & Technology, Rajkot">
                Shri Labhubhai Trivedi Institute of Engineering & Technology,
                Rajkot
              </option>
              <option value="Silver Oak College of Engineering and Technology, Ahmedabad">
                Silver Oak College of Engineering and Technology, Ahmedabad
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
                Vishwakarma Government Engineering College, Gandhinagar
              </option>
            </select>
            <p>
              &nbsp;&nbsp; Semester <span>*</span>
            </p>
            <select
              name="sem"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
              className="box"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <p>
              &nbsp;&nbsp; Gender <span>*</span>
            </p>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="box"
            >
              <option value="">-- Select gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="LGBTQIA2S+">LGBTQIA2S+</option>
            </select>
            <p>&nbsp;&nbsp; Select Profile</p>

            <img
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : defaultprofilepic
              }
              alt="Profile"
              className="profile-pic-preview"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="box image-input"
              style={{ width: "40rem" ,
        wordWrap: "break-word",
        maxWidth: "100%",
      }} // Adjust the width as needed
            />
           
            <button type="submit" className="btn">
              Send OTP
            </button>
            <p>&nbsp;&nbsp; Already have an account? </p>
            <Link to="/login">
              <a className="btn">Login</a>
            </Link>
          </form>
        </section>
</section>
        <Footer />
      </div>
    </>
  );
}

export default Register;