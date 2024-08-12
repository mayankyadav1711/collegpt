/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_7_BT_Units() {
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
                <h3 className="mt-5">john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3 className="mt-5">Blockchain Technology [CT703D‐N]</h3>
              <p>
                Blockchain technology offers a decentralized, transparent, and secure way to record transactions. It underpins cryptocurrencies like Bitcoin and has potential use cases across various industries.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/741" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Background Theories</h3>
            </a>
          </Link>

          <Link to="/watchvideo/742" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Bitcoin</h3>
            </a>
          </Link>

          <Link to="/watchvideo/743" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to Blockchain</h3>
            </a>
          </Link>

          <Link to="/watchvideo/744" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Consensus</h3>
            </a>
          </Link>

          <Link to="/watchvideo/745" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Mining</h3>
            </a>
          </Link>

          <Link to="/watchvideo/746" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Permissioned Blockchain</h3>
            </a>
          </Link>

          <Link to="/watchvideo/747" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Blockchain Use Cases</h3>
            </a>
          </Link>

          <Link to="/watchvideo/748" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Smart Contract</h3>
            </a>
          </Link>

          <Link to="/watchvideo/749" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Research in Blockchain</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_7_BT_Units;
