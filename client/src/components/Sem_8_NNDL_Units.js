/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_8_NNDL_Units() {
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
              <span>6 Units</span>
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
              <h3 className="mt-5">Neural Network and Deep Learning [CT803B-N]</h3>
              <p>
                This course covers fundamentals of neural networks and advanced topics like recurrent neural networks, 
                long short-term memory cells, and convolutional neural networks. Students will learn machine learning 
                terminology, deep neural network functionalities, and apply these techniques to practical problems 
                using Python programming.
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
          <Link to="/watchvideo/841" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction</h3>
            </a>
          </Link>

          <Link to="/watchvideo/842" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Feed Forward and Deep Neural Network</h3>
            </a>
          </Link>

          <Link to="/watchvideo/843" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Convolutional Neural Networks</h3>
            </a>
          </Link>

          <Link to="/watchvideo/844" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Recurrent Neural Networks</h3>
            </a>
          </Link>

          <Link to="/watchvideo/845" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Deep Neural Networks</h3>
            </a>
          </Link>

          <Link to="/watchvideo/846" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Generative Models and Recent Trends</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_8_NNDL_Units;