/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/sc.webp";
import handledarkmode from "./handledarkmode";

function Sem_7_CC_Units() {
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
              <h3 className="mt-5">Cloud Computing [IT704D‐N]</h3>
              <p>
                Cloud Computing revolutionizes the way data is stored and accessed, offering scalable and flexible resources over the internet. It enables businesses to migrate their operations to the cloud for better efficiency and cost management.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
          <Link to="/watchvideo/781" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to Cloud Computing</h3>
            </a>
          </Link>

          <Link to="/watchvideo/782" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Migrating into a Cloud</h3>
            </a>
          </Link>

          <Link to="/watchvideo/783" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Enriching the ‘Integration as a Service’ Paradigm for the Cloud Era</h3>
            </a>
          </Link>

          <Link to="/watchvideo/784" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">The Enterprise Cloud Computing Paradigm</h3>
            </a>
          </Link>

          <Link to="/watchvideo/785" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Virtual Machines Provisioning and Migration Services</h3>
            </a>
          </Link>

          <Link to="/watchvideo/786" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Virtual Machines for Cloud Infrastructures</h3>
            </a>
          </Link>

          <Link to="/watchvideo/787" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Secure Distributed Data Storage in Cloud Computing</h3>
            </a>
          </Link>

          <Link to="/watchvideo/788" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Workflow Engine for Clouds</h3>
            </a>
          </Link>

          <Link to="/watchvideo/789" class="box">
            <a>
              {/* <i class="fas fa-play"></i> */}
              <img src={postpic} alt="" />
              <h3 className="mt-5">Case Studies: Aneka, CometCloud, T‐Systems, AWS</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_7_CC_Units;
