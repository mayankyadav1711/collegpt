/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import FOP from "./images/Thumbnail/Sem-1/FOP.png";
import postpic from "./images/post-1-1.png";

import newpic from "./images/thumb-4.png";
import handledarkmode from "./handledarkmode";

function Sem_1_Fop_Units() {
  useEffect(() => {
    handledarkmode();
  }, []);
  return (
    <>
    <section className="playlist">
      <section class="playlist-details">
        <h1 class="heading">Subject Details</h1>

        <div class="row">
          <div class="column">
            <form action="" method="post" class="save-playlist">
              {/* <button type="submit">
                <i class="far fa-bookmark"></i> <span>save unitlist</span>
              </button> */}
            </form>

            <div class="thumb">
              <img src={FOP} alt="" />
              <span>7 Units</span>
            </div>
          </div>
          <div class="column">
           

            <div class="details">
              <h3>Fundamental Of Programming [CC103-N]</h3>
              <p>
                The basic programming concepts include variables, basic control
                structures, data structures, object-oriented programming,
                troubleshooting and debugging, and various programming tools.
                These concepts are similar across various programming languages,
                such as Python, C++, C, and Java.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/111" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Introduction to computer</h3>
            </a>
          </Link>

          <Link to="/watchvideo/112" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Introduction to Programming</h3>
            </a>
          </Link>

          <Link to="/watchvideo/113" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Fundamentals of ‘C’</h3>
            </a>
          </Link>

          <Link to="/watchvideo/114" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Control Structures in ‘C’</h3>
            </a>
          </Link>

          <Link to="/watchvideo/115" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Array & String</h3>
            </a>
          </Link>

          <Link to="/watchvideo/116" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Functions</h3>
            </a>
          </Link>

          <Link to="/watchvideo/117" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={FOP} alt="" />
              <h3>Structure and Union, Pointers, File Management</h3>
            </a>
          </Link>
        </div>
      </section>
      </section>
    </>
  );
}

export default Sem_1_Fop_Units;
