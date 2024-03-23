/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useParams, Link,useNavigate } from "react-router-dom";
import profilepic from "./images/60111.png";
import handledarkmode from "./handledarkmode";
import toast from 'react-hot-toast';



const  WatchVideo = () =>{
  const { state } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const [pdfFilePath, setPdfFilePath] = useState("");
  const [sem, setSem] = useState("");
  const [sub, setSub] = useState("");
  const [unit, setUnit] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [doubt, setDoubt] = useState("");
  const [uploadTimestamp, setUploadTimestamp] = useState("");
  const [pdfdownloadlink, setPdfDownloadLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [downloadTimer, setDownloadTimer] = useState(30); // Timer starts from 10 seconds

  const { code } = useParams();

  useEffect(() => {
    // Fetch the PDF link using the 'code' parameter
    const fetchPdfLink = async () => {

      try {
        const response = await fetch(`https://api-collegpt.vercel.app/pdf-forms/${code}`);
        const data = await response.json();
  
        if (response.ok) {
          const pdfPreviewUrl = `${data.link.replace('/view?usp=drive_link', '/preview')}`;
          setPdfDownloadLink(data.link)
          setPdfFilePath(pdfPreviewUrl);
          setSem(data.sem);
          setSub(data.sub);
          setUnit(data.unit);
          setAuthor(data.author);
          setDescription(data.description);
          setExtra(data.extra);
          setUploadTimestamp(new Date(data.timestamp).toLocaleString()); // Format the upload date
        } else {
          // Handle the error when the response is not ok
          console.error("Error fetching PDF link:", data.error);
        }
      } catch (error) {
        console.error("Error fetching PDF link:", error);
      }
    };

    fetchPdfLink();
    handledarkmode();
  }, [code]);

  const startDownloadTimer = () => {
    if (downloadTimer === 0) {
      return; // Timer reached 0, do nothing
    }
    const timer = setTimeout(() => {
      setDownloadTimer(prevTimer => prevTimer - 1); // Decrease timer by 1 second
    }, 1000); // Update timer every second
    return () => clearTimeout(timer); // Clear timer on component unmount
  };

  useEffect(() => {
    if (downloadTimer > 0) {
      startDownloadTimer();
    }
  }, [downloadTimer]);

  const handleDownloadClick = () => {
    if (downloadTimer === 0) {
      // Timer reached 0, allow download
      window.open(pdfdownloadlink, "_blank");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state?._id) {
      // If user is not logged in, navigate to the login page
      toast.success("Please login first")
      navigate("/login");
      return;
    }
    const formData = {
      code: code,
      semester: sem,
      subjectName: sub,
      unitName: unit,
      author: author,
      doubt,
      // Assuming you store user ID in local storage
    };
    console.log(formData);
    try {
      const response = await fetch("https://api-collegpt.vercel.app/doubt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Doubt Submitted Successfully");
        toast.success("Will Respond Shortly");
      } else {
        // Handle error
        console.error("Doubt submission failed.");
      }
    } catch (error) {
      console.error("Error submitting Doubt:", error);
    }
  };
 

  return (
    <>
    {pdfFilePath ? (
      <> 
      <div className="mt-44 flex justify-center items-center">
  <iframe
    src={pdfFilePath}
    width="1165"
    height="590"
    className="rounded-3xl"
    title="PDF Viewer"
    id="pdfIframe"
    sandbox="allow-scripts allow-same-origin"
  />





            </div>

<br/>
<div className="flex mb-8 lg:mb-16 space-y-4 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
            <button onClick={handleDownloadClick} disabled={downloadTimer !== 0} className="text-5xl lg:text-2xl inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              {downloadTimer === 0 ? "Download" : `Please wait ${downloadTimer} seconds`}
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
            </>
          ) : (
            <div className="title-apple-coming-soon">Coming Soon</div>
          )}
          <section className="watch-video">
           
         
            <div class="video-container">
              <h3 class="title"> {unit}</h3>
              <div class="info">
                {/* display the time here  */}
                <p class="date">
                  <i class="fas fa-calendar"></i>
                  <span>{uploadTimestamp}</span>
                </p>
              </div>
              <div class="tutor">
                <img src={extra || profilepic} alt="" />
                <div>
                  <h3>{author}</h3>
                  <span>Author</span>
                </div>
              </div>
              <form action="" method="post" class="flex">
                {/* <Link to="/playlist">
              {" "}
              <a class="inline-btn">view playlist</Link>{" "}
            </Link>
           */}
              </form>
              <p class="description">{description}</p>
             
            </div>
          </section>

          <section class="comments">
            <form onSubmit={handleSubmit} class="add-comment">
              <h3>Any Doubts?</h3>
              <textarea
                name="doubt"
                placeholder="Enter your doubts..."
                required
                maxlength="1000"
                cols="30"
                rows="10"
                value={doubt}
                onChange={(e) => setDoubt(e.target.value)}
              ></textarea>
              <input
                type="submit"
                value="Submit"
                class="inline-btn"
                name="submit_doubt"
              />
            </form>
          </section>
   
  
    </>
  );
}

export default WatchVideo;
