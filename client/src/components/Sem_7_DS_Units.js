/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_7_DS_Units() {
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
              <h3 className="mt-5">Distributed Systems [CT704A-N]</h3>
              <p>
                Distributed systems involve multiple interconnected computers that communicate and coordinate their actions by sharing data and resources. These systems provide improved performance, scalability, and reliability.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/721" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Concepts of Distributed Systems</h3>
            </a>
          </Link>

          <Link to="/watchvideo/722" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Basic Network Communications</h3>
            </a>
          </Link>

          <Link to="/watchvideo/723" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Inter Process Communication</h3>
            </a>
          </Link>

          <Link to="/watchvideo/724" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Remote Communication</h3>
            </a>
          </Link>

          <Link to="/watchvideo/725" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Distributed System Synchronization</h3>
            </a>
          </Link>

          <Link to="/watchvideo/726" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Distributed System Management</h3>
            </a>
          </Link>

          <Link to="/watchvideo/727" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Distributed Shared Memory</h3>
            </a>
          </Link>

          <Link to="/watchvideo/728" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Distributed File System</h3>
            </a>
          </Link>

          <Link to="/watchvideo/729" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Security</h3>
            </a>
          </Link>

          <Link to="/watchvideo/7210" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Emerging Trends in Distributed Systems</h3>
            </a>
          </Link>

        </div>
      </section>
    </>
  );
}

export default Sem_7_DS_Units;
