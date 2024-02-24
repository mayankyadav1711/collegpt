/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_6_Ml_Units() {
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
              <span>10 Units</span>
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
              <h3>Machine Learning [CT604E-N]</h3>
              <p>
              Machine learning concerns with designing and developing of algorithms that allow machines, essentially
computers, to evolve realistic or human like behavior based on the empirical data available. This course
aims to discuss the building blocks of Computer vision and Natural Language Processing problems and
provide an overview of the machine leaning and advance topics. 
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/641" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction</h3>
  </a>
</Link>

<Link to="/watchvideo/642" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Linear Regression</h3>
  </a>
</Link>

<Link to="/watchvideo/643" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Classification</h3>
  </a>
</Link>

<Link to="/watchvideo/644" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Resampling Methods and Evaluation</h3>
  </a>
</Link>

<Link to="/watchvideo/645" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Neural Network Representation and Learning</h3>
  </a>
</Link>

<Link to="/watchvideo/646" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Ensemble method</h3>
  </a>
</Link>

<Link to="/watchvideo/647" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Clustering</h3>
  </a>
</Link>

<Link to="/watchvideo/648" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Dimensionality Reduction Graphical Model</h3>
  </a>
</Link>

  <Link to="/watchvideo/649" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Introduction Reinforcement Learning</h3>
    </a>
  </Link>

  <Link to="/watchvideo/6410" class="box">
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt="" />
      <h3>Machine Learning Applications</h3>
    </a>
  </Link>


        </div>
      </section>
    </>
  );
}

export default Sem_6_Ml_Units;
