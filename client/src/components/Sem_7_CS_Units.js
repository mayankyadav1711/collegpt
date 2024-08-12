/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/sc.webp";
import handledarkmode from "./handledarkmode";

function Sem_7_CS_Units() {
  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>
      <section class="playlist-details">
        <h1 class="heading">Subject Details</h1>

        <div class="row">
          <div class="column">
            <form action="" method="post" class="save-playlist">
              <button type="submit">
                <i class="far fa-bookmark"></i> <span>save unitlist</span>
              </button>
            </form>

            <div class="thumb">
              <img src={postpic} alt="" />
              <span>9 Units</span>
            </div>
          </div>

          <div class="column">
            <div class="tutor">
              {/* <img src={profilepic} alt="" /> */}
              <div>
                <h3 className="mt-5">john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3 className="mt-5">Cyber Security [CT702-N]</h3>
              <p>
                Cybersecurity involves protecting computer systems and networks from information disclosure, theft, or damage. It is crucial in today's digital world to safeguard sensitive information and ensure privacy.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/731" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to Cyber Crime</h3>
            </a>
          </Link>

          <Link to="/watchvideo/732" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Information Security Concepts</h3>
            </a>
          </Link>

          <Link to="/watchvideo/733" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Phishing and Identity Theft</h3>
            </a>
          </Link>

          <Link to="/watchvideo/734" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Security Threats and Vulnerabilities</h3>
            </a>
          </Link>

          <Link to="/watchvideo/735" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Privacy Control Concept</h3>
            </a>
          </Link>

          <Link to="/watchvideo/736" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Access Control and Intrusion Detection</h3>
            </a>
          </Link>

          <Link to="/watchvideo/737" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Cybercrimes and Cyber Security: The Legal Perspectives</h3>
            </a>
          </Link>

          <Link to="/watchvideo/738" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Legal, Ethical and Professional Issues in Information Security</h3>
            </a>
          </Link>

          <Link to="/watchvideo/739" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Hands on Open Source</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_7_CS_Units;
