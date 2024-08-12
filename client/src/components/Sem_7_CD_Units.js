/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_7_CD_Units() {
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
                <h3 className="mt-5">john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3 className="mt-5">Compiler Design [CE701-N]</h3>
              <p>
                Compiler Design focuses on the theory and practice of building compilers, translating source code into machine code efficiently, and ensuring error-free execution of programs.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/711" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to Compiling</h3>
            </a>
          </Link>

          <Link to="/watchvideo/712" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Lexical Analyzer</h3>
            </a>
          </Link>

          <Link to="/watchvideo/713" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Parsing Theory</h3>
            </a>
          </Link>

          <Link to="/watchvideo/714" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Error Recovery</h3>
            </a>
          </Link>

          <Link to="/watchvideo/715" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Type Checking</h3>
            </a>
          </Link>

          <Link to="/watchvideo/716" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Run Time Environments</h3>
            </a>
          </Link>

          <Link to="/watchvideo/717" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Intermediate Code Generation</h3>
            </a>
          </Link>

          <Link to="/watchvideo/718" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Code Generation</h3>
            </a>
          </Link>

          <Link to="/watchvideo/719" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Code Optimization</h3>
            </a>
          </Link>

          <Link to="/watchvideo/7110" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to Language Processors and System Software</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_7_CD_Units;
