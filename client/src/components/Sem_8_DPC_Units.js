/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import postpic from "./images/sample.webp";
import handledarkmode from "./handledarkmode";

function Sem_8_DPC_Units() {
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
              <span>8 Units</span>
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
              <h3 className="mt-5">Distributed and Parallel Computing [IT801-N]</h3>
              <p>
                This course covers advanced concepts of Parallel and Distributed Computing, 
                focusing on implementation and assessment through parallel programming 
                languages like MPI, Pthread, and OpenMP. Students will learn to design 
                parallel and distributed algorithms and understand system architectures.
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
          <Link to="/watchvideo/851" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Introduction</h3>
            </a>
          </Link>

          <Link to="/watchvideo/852" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Message Passing Computing</h3>
            </a>
          </Link>

          <Link to="/watchvideo/853" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Partitioning and Divide-and-Conquer Strategies</h3>
            </a>
          </Link>

          <Link to="/watchvideo/854" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Pipelined Computations</h3>
            </a>
          </Link>

          <Link to="/watchvideo/855" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Synchronous Computations</h3>
            </a>
          </Link>

          <Link to="/watchvideo/856" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Load Balancing and Termination Detection</h3>
            </a>
          </Link>

          <Link to="/watchvideo/857" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Programming with Shared Memory</h3>
            </a>
          </Link>

          <Link to="/watchvideo/858" className="box">
            <a>
              <img src={postpic} alt="" />
              <h3 className="mt-5">Distributed Shared Memory Systems and Programming</h3>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Sem_8_DPC_Units;