/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilepic from "./images/pic-1.jpg";
import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_5_Toc_Units() {
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
              <img src={thumb} alt="" />
              <span>8 Units</span>
            </div>
          </div>

          <div class="column">
            <div class="tutor">
              <img src={profilepic} alt="" />
              <div>
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3>Theory of Computation [CE503-N]</h3>
              <p>
                Develop understanding of number systems and Boolean algebra.
                Understand the functioning of logic gates, their implementation
                and verification of truth tables.{" "}
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/551" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Introduction</h3>
            </a>
          </Link>

          <Link to="/watchvideo/552" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Regular Languages</h3>
            </a>
          </Link>

          <Link to="/watchvideo/553" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Finite Automata</h3>
            </a>
          </Link>

          <Link to="/watchvideo/554" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Context-Free Languages</h3>
            </a>
          </Link>

          <Link to="/watchvideo/555" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Pushdown Automata</h3>
            </a>
          </Link>

          <Link to="/watchvideo/556" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Pumping Lemma</h3>
            </a>
          </Link>

          <Link to="/watchvideo/557" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Context-Sensitive Languages</h3>
            </a>
          </Link>

          <Link to="/watchvideo/558" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3>Turing Machines</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_5_Toc_Units;
