/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import profilepic from "./images/60111.png";
import handledarkmode from "./handledarkmode";
import { toast } from "react-toastify";
import $ from "jquery";

import "jquery-ui-dist/jquery-ui";
import "react-toastify/dist/ReactToastify.css";

const  WatchVideo = () =>{
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
        const response = await fetch(`/pdf-forms/${code}`);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setPdfFilePath(data.link);
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
      const response = await fetch("/doubt", {
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
  useEffect(() => {
    initializeDrag();
  }, [pdfFilePath]);

  const initializeDrag = () => {
    // Initialize the slider when pdfFilePath is available

    setIsLoading(false);
    $("#unlock .drag").draggable({
      axis: "x",
      containment: "parent",
      drag: function (event, ui) {
        $("#unlock .content .drop").addClass("active");

        if (ui.position.left > 105) {
          $("#unlock .content .drop").addClass("hover");
        }
      },
      stop: function (event, ui) {
        if (ui.position.left < 105) {
          $(this).animate({
            left: 0,
          });
          $("#unlock .content .drop").removeClass("hover");
          $("#unlock .content .drop").removeClass("active");
        } else {
          $(this).animate({
            left: 0,
          });
          $("#unlock .content .drop").removeClass("hover");
          $("#unlock .content .drop").removeClass("active");

          // UNLOCK
          $("#unlock").addClass("unlock");
          $("#home").addClass("unlock");

          // Open PDF link in new tab
          window.open(pdfFilePath, "_blank");
        }
      },
    });

    $(".restart").click(function () {
      $("#unlock").removeClass("unlock");
      $("#home").removeClass("unlock");
    });
  };

  return (
    <>
      {!pdfFilePath ? (
        <div className="iframe-container">
        <div class="title-apple-coming-soon">Coming Soon</div>
        </div>
      ) : code === "typefastio" || code === "ztype" ? (
        <>
          <iframe
            src={pdfFilePath}
            width="100%"
            height="650rem"
            allow="autoplay"
          ></iframe>
        </>
      ) : (
        <>
          <section className="watch-video">
            {/* <div>
          <iframe
            src={
              pdfFilePath ||
              "https://drive.google.com/file/d/1fl48I3rPKtvoNMv9yI58kwNJ5y1mxTz1/preview"
            }
            width="100%"
            height="650rem"
            allow="autoplay"
          ></iframe>
        </div> */}
            <div class="swiper-container">
              <div class="swipe-container">
                <div id="unlock">
                  <div class="title-apple">{unit}</div>
                  <div class="subtitle">Swipe to Access</div>

                  <div class="content">
                    <div class="drag">
                      <svg
                        // xmlns="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 7 10"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 3.51 7.67 C 3.32 7.67 3.13 7.59 2.98 7.44 L -0.78 3.63 C -1.07 3.34 -1.07 2.85 -0.78 2.56 C -0.49 2.26 -0.01 2.26 0.28 2.56 L 3.51 5.83 L 6.74 2.56 C 7.04 2.26 7.51 2.26 7.81 2.56 C 8.1 2.85 8.1 3.34 7.81 3.63 L 4.05 7.44 C 3.9 7.59 3.71 7.67 3.51 7.67"
                        />
                      </svg>
                    </div>

                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>

                    <div class="drop">
                      <div class="wave"></div>
                    </div>
                  </div>
                  <div>
  <a href={pdfFilePath} target="_blank">
    <button class="button-57" role="button">
      <span class="text">Click Me</span>
      <span>Padh Le Jaa</span>
    </button>
  </a>
</div>
                </div>

                <div id="home">
                  <div class="restart">Once More ? Once More</div>
                </div>
              </div>{" "}
            </div>
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
              <a class="inline-btn">view playlist</a>{" "}
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
      )}
    </>
  );
}

export default WatchVideo;
