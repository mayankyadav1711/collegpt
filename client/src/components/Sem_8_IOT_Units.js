/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_8_IOT_Units() {
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
              <span>9 Units</span>
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
              <h3 className="mt-5">Internet of Things [IT802-N]</h3>
              <p>
                This course introduces the Internet of Things (IoT), an emerging technology 
                that automates manual processes and integrates them with business systems. 
                Students will learn IoT concepts and develop practical IoT applications.
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
          <Link to="/watchvideo/871" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction to IoT</h3>
            </a>
          </Link>

          <Link to="/watchvideo/872" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">IoT & M2M</h3>
            </a>
          </Link>

          <Link to="/watchvideo/873" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Network & Communication Aspects</h3>
            </a>
          </Link>

          <Link to="/watchvideo/874" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Web Infrastructure for Managing IoT Resources</h3>
            </a>
          </Link>

          <Link to="/watchvideo/875" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Challenges in IoT</h3>
            </a>
          </Link>

          <Link to="/watchvideo/876" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Domain Specific Applications of IoT</h3>
            </a>
          </Link>

          <Link to="/watchvideo/877" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Developing IoTs</h3>
            </a>
          </Link>

          <Link to="/watchvideo/878" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">IoT Tools</h3>
            </a>
          </Link>

          <Link to="/watchvideo/879" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">IoT Strategy Execution</h3>
            </a>
          </Link>
          <Link to="/watchvideo/8710" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">IoT Solution Delivery</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_8_IOT_Units;