/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_6_Ai_Units() {
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
              <h3>Artificial Intelligence [CT601-N]</h3>
              <p>
              The search and problem solving methods are applicable throughout a large range of industrial, civil,
medical, financial, robotic, and information systems. 
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/611" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Introduction</h3>
            </a>
          </Link>

          <Link to="/watchvideo/612" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Intelligent Agents</h3>
  </a>
</Link>

<Link to="/watchvideo/613" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Problem Spaces and Search</h3>
  </a>
</Link>

<Link to="/watchvideo/614" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Adversarial search and Game Playing</h3>
  </a>
</Link>

<Link to="/watchvideo/615" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Knowledge and Reasoning</h3>
  </a>
</Link>

<Link to="/watchvideo/616" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Knowledge Engineering</h3>
  </a>
</Link>

<Link to="/watchvideo/617" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction to PROLOG</h3>
  </a>
</Link>

<Link to="/watchvideo/618" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Uncertain knowledge and reasoning</h3>
  </a>
</Link>

        </div>
      </section>
    </>
  );
}

export default Sem_6_Ai_Units;
