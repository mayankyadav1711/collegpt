/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/ap.webp";
import handledarkmode from "./handledarkmode";
function Sem_6_Ap_Units() {
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
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3>Android Programming [CT604A-N]</h3>
              <p>
              An Android technology is generally used in mobile system, where android is an open source technology.
This technology is used for mobile application development. Using android technology, student can
make own mobile applications and upload easily on mobile devices. 

              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/651" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction to Android</h3>
  </a>
</Link>

<Link to="/watchvideo/652" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Android Application Design and Resources</h3>
  </a>
</Link>

<Link to="/watchvideo/653" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Exploring User Interfaces screen elements</h3>
  </a>
</Link>

<Link to="/watchvideo/654" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Designing User Interfaces with Layouts</h3>
  </a>
</Link>

<Link to="/watchvideo/655" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Drawing and working with Animation</h3>
  </a>
</Link>

<Link to="/watchvideo/656" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Android Storage APIs</h3>
  </a>
</Link>

<Link to="/watchvideo/657" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Sharing Data Between Applications with Content Providers</h3>
  </a>
</Link>

<Link to="/watchvideo/658" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Using Android Network, Web and Multimedia APIs</h3>
  </a>
</Link>
<Link to="/watchvideo/659" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Telephony API and Notifications</h3>
  </a>
</Link>

        </div>
      </section>
    </>
  );
}

export default Sem_6_Ap_Units;
