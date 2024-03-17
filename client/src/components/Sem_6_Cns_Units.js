/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/cns.webp";
import handledarkmode from "./handledarkmode";
function Sem_6_Cns_Units() {
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
              <span>8 Units</span>
            </div>
          </div>

          <div class="column">
            <div class="tutor">
              {/* <img src={profilepic} alt="" /> */}
              <div>
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3>Cryptography and Network Security [CE603-N]</h3>
              <p>
              The course is intended to familiarize the student to the domain of information and network security. After
introducing the basics of cryptography and security along with the essential mathematical background, the
course aims to elaborate the understanding of various cryptographic primitives such as
symmetric/asymmetric key encryption, hash, MAC, key management, digital signature etc. Together with
the various attacks, the course also includes few modern security protocols.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/631" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction</h3>
  </a>
</Link>
  <Link to="/watchvideo/632" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Symmetric Encryption</h3>
    </a>
  </Link>

  <Link to="/watchvideo/633" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Mathematical Background</h3>
    </a>
  </Link>

  <Link to="/watchvideo/634" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Asymmetric Encryption</h3>
    </a>
  </Link>

  <Link to="/watchvideo/635" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Hash/MAC</h3>
    </a>
  </Link>

  <Link to="/watchvideo/636" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Cryptanalysis</h3>
    </a>
  </Link>

  <Link to="/watchvideo/637" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Security Protocols</h3>
    </a>
  </Link>

  <Link to="/watchvideo/638" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Advanced Topics</h3>
    </a>
  </Link>


        </div>
      </section>
    </>
  );
}

export default Sem_6_Cns_Units;
