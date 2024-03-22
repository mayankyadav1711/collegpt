/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/is.webp";
import handledarkmode from "./handledarkmode";
function Sem_6_Is_Units() {
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
              <span>7 Units</span>
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
              <h3 className="mt-5">Information Security [IT602-N]</h3>
              <p>
              The course is intended to familiarize the student to the domain of information and network security. After
introducing the basics of cryptography and security along with the essential mathematical background, the
course aims to elaborate the understanding of various cryptographic primitives such as
symmetric/asymmetric key encryption, hash, MAC, key management, digital signature etc. 
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/681" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Introduction</h3>
  </a>
</Link>

<Link to="/watchvideo/682" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Conventional Cryptography</h3>
  </a>
</Link>

<Link to="/watchvideo/683" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Network Security</h3>
  </a>
</Link>

<Link to="/watchvideo/684" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Security Protocols</h3>
  </a>
</Link>

<Link to="/watchvideo/685" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Mathematical Background</h3>
  </a>
</Link>

<Link to="/watchvideo/686" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Symmetric and Asymmetric Cryptographic Techniques</h3>
  </a>
</Link>

<Link to="/watchvideo/687" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3 className="mt-5">Authentication Techniques</h3>
  </a>
</Link>

        </div>
      </section>
    </>
  );
}

export default Sem_6_Is_Units;
