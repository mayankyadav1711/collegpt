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
  const [isLoading, setIsLoading] = useState(true);

  const { code } = useParams();

  useEffect(() => {
    // Fetch the PDF link using the 'code' parameter
    const fetchPdfLink = async () => {

      try {
        const response = await fetch(`https://api-collegpt.vercel.app/pdf-forms/${code}`);
        const data = await response.json();
  
        if (response.ok) {
          const pdfPreviewUrl = `${data.link.replace('/view?usp=drive_link', '/preview')}`;

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
