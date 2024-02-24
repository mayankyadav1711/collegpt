/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_6_Sc_Units() {
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
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3>Soft Computing [CT605A-N]</h3>
              <p>
              Soft computing is an emerging approach to computing which parallel the remarkable ability of the human
mind to reason and learn in an environment of uncertainty and imprecision. Soft computing is based on
some biological inspired methodologies such as genetics, evolution, ant’s behaviors, particles swarming,
human nervous systems, etc.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/671" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction of Soft computing and Hard computing</h3>
  </a>
</Link>

<Link to="/watchvideo/672" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Neural Networks</h3>
  </a>
</Link>

<Link to="/watchvideo/673" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Fuzzy Logic</h3>
  </a>
</Link>

<Link to="/watchvideo/674" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Genetic Algorithm</h3>
  </a>
</Link>

<Link to="/watchvideo/675" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Hybrid System</h3>
  </a>
</Link>

<Link to="/watchvideo/676" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Genetic Algorithm</h3>
  </a>
</Link>

<Link to="/watchvideo/677" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Fuzzy based Backpropagation Network</h3>
  </a>
</Link>

        </div>
      </section>
    </>
  );
}

export default Sem_6_Sc_Units;
