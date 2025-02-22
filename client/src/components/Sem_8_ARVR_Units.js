/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_8_ARVR_Units() {
  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>
      <section className="playlist-details">
        <h1 className="heading">Subject Details</h1>

        <div className="row">
          <div className="column">
            <form action="" method="post" className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark"></i> <span>save unitlist</span>
              </button>
            </form>

            <div className="thumb">
              <img src={postpic} alt="" />
              <span>7 Units</span>
            </div>
          </div>

          <div className="column">
            <div className="tutor">
              <div>
                <h3 className="mt-5">john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div className="details">
              <h3 className="mt-5">Augmented and Virtual Reality [IT803D-N]</h3>
              <p>
                This course provides knowledge of augmented and virtual reality, 
                covering historical perspectives, sensation and perception fundamentals, 
                technical aspects of AR/VR systems, and their design evaluation. 
                Students will implement AR/VR technologies for practical understanding.
              </p>
              <Link to='/teacherProfile'>
                <a className="inline-btnd">view profile</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">Unit List</h1>

        <div className="box-container">
          <Link to="/watchvideo/861" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction</h3>
            </a>
          </Link>

          <Link to="/watchvideo/862" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">VR Systems</h3>
            </a>
          </Link>

          <Link to="/watchvideo/863" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Stereoscopic Vision & Haptic Rendering</h3>
            </a>
          </Link>

          <Link to="/watchvideo/864" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">VR Software Development</h3>
            </a>
          </Link>

          <Link to="/watchvideo/865" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">3D Interaction Techniques</h3>
            </a>
          </Link>

          <Link to="/watchvideo/866" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">AR Software Development</h3>
            </a>
          </Link>

          <Link to="/watchvideo/867" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Applications of AR and VR</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_8_ARVR_Units;