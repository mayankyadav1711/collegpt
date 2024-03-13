/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import handledarkmode from "./handledarkmode";

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis'

// gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  //  const lenis = useRef(null);
  // const section1Ref = useRef(null);
  // // const colLeftRef = useRef(null);

  // useEffect(() => {
  //   lenis.current = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   function raf(time) {
  //     lenis.current.raf(time);
  //     ScrollTrigger.update();
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   const timeln = gsap.timeline({ paused: true });
  //   // timeln.fromTo(colLeftRef.current, { y: 0 }, { y: '170vh', duration: 1, ease: 'none' }, 0);

  //   ScrollTrigger.create({
  //     animation: timeln,
  //     trigger: section1Ref.current,
  //     start: 'top top',
  //     end: 'bottom center',
  //     scrub: true,
  //   });
  // }, []);

  useEffect(() => {
    handledarkmode();
  }, []);
  //   useEffect(() => {
  //     const UP = 'up';
  // const DOWN = 'down';

  // const app = {
  //   sections: [],
  //   isAnimating: false,
  //   direction: null,
  //   viewportHeight: window.innerHeight,

  //   init() {
  //     this.sections.forEach((section) => {
  //       section.addEventListener('intersect', this.onIntersect);
  //     });

  //     document.addEventListener('wheel', this.onWheel);
  //     window.addEventListener('resize', this.onResize);
  //   },

  //   onIntersect(event) {
  //     if (!this.isAnimating && event.isIntersecting && event.target.offsetTop < this.viewportHeight) {
  //       this.isAnimating = true;
  //       this.scrollTo(event.target);
  //     }
  //   },

  //   onWheel(event) {
  //     this.direction = event.deltaY < 0 ? UP : DOWN;

  //     if (this.isAnimating) {
  //       event.preventDefault();
  //     }
  //   },

  //   onResize() {
  //     this.viewportHeight = window.innerHeight;
  //   },

  //   scrollTo(target) {
  //     window.scrollTo({
  //       top: target.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   },
  // };

  // app.init();

  //   }, []);
  // Read the active tab index from localStorage on page load

  return (
    <div>
      <section class="home-grid">
        <section>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-52 lg:px-12 mb-16  ">
            <a
              href="#"
              class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-12 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span class="text-2xl bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span class="text-2xl font-medium">
                ColleGPT is Live! See what's new
              </span>
              <svg
                class="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
              Get Prepared Together
            </h1>
            <p class="mb-16 text-lg font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
              With the intention of learning and growing together, our team has
              built this platform, to revolutionize your academic journey by
              providing engaging resources and supportive community.
            </p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                class="text-2xl inline-flex justify-center items-center py-3 px-5  font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Explore more
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <Link to="/courses">
              <a
               
                class="inline-flex justify-center items-center py-3 px-5 text-2xl  font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Our Courses
              </a>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h1 class="heading">quick options</h1>

          <div class="box-container">
            <div class="notes-box">
              <h3 class="title-xclusive">Xclusive Notes🔥</h3>
              <p class="tutor">
                <i>
                  <b>
                    "Discover our Handwritten College Notes designed to help you
                    excel in your studies and ace your exams."
                  </b>
                </i>
              </p>

              <Link to="/courses">
                {" "}
                <button class="button-56 glowing" role="button">
                  X~Notes
                </button>{" "}
              </Link>
            </div>
            {/* <div class="playground-box">
            <h3 class="title-xclusive">PlayGround🎮</h3>
            <p class="tutor">
              <i>
                <b>"Where Tech Meets Play"</b>
              </i>
            </p>
      
            <Link to="/watchvideo/typefastio">
              {" "}
              <button class="button-56" role="button">
                Key-Master🕹️
              </button>{" "}
              <br />{" "}
            </Link>
            <hr className="pacman" />
            <br />
            <Link to="/watchvideo/ztype">
              {" "}
              <button class="button-56" role="button">
                Type-Blaster☄️
              </button>{" "}
            </Link>
          </div> */}
          </div>
        </section>

        <section>
          <div class="box-container">
            <div class="cheatsheet-box">
              <h3 class="title-xclusive">CheatSheets📋🎯</h3>
              <p class="likes">
                {" "}
                <i>
                  <b>"Unlocking Excellence: Your Rapid Technical Guide" </b>
                </i>
              </p>
              <div class="flex">
                <Link to="/watchvideo/cs_html" target="_blank">
                  <i class="fab fa-html5"></i>
                  {/* <span>HTML</span> */}
                </Link>
                <Link to="/watchvideo/cs_css" target="_blank">
                  <i class="fab fa-css3"></i>
                </Link>
                <Link to="/watchvideo/cs_js" target="_blank">
                  <i class="fab fa-js"></i>
                </Link>
                <Link to="/watchvideo/cs_bootstrap" target="_blank">
                  <i class="fab fa-bootstrap"></i>
                </Link>
                <Link to="/watchvideo/cs_gpt" target="_blank">
                  <i class="fab fa-react"></i>
                </Link>

                <Link to="/watchvideo/cs_vscode" target="_blank">
                  <i class="fas fa-file-code"></i>
                </Link>

                <Link to="/watchvideo/cs_python" target="_blank">
                  <i class="fa-brands fa-python"></i>
                </Link>
                <Link to="/watchvideo/cs_web" target="_blank">
                  <i class="fa-solid fa-globe"></i>
                </Link>
                <Link to="/watchvideo/cs_database" target="_blank">
                  <i class="fa-solid fa-database"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="box-container">
            <div class="roadmap-box">
              <h3 class="title-xclusive">RoadMaps🚀📈</h3>
              <p class="likes">
                {" "}
                <i>
                  <b>"Guiding Your Journey Along the Technical Pathway"</b>{" "}
                </i>
              </p>
              <div class="flex">
                <Link to="/roadmap_frontend">
                  <div className="line"></div>
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3"></i>
                  <i class="fab fa-js"></i>
                  <i class="fas fa-code"></i>
                  <div className="line"></div>
                  <span className="roadmap">Frontend Developer</span>
                </Link>
                <Link to="/roadmap_mern">
                  <div className="line"></div>
                  <i class="fa-solid fa-leaf"></i>
                  <i class="fa-regular fa-circle">
                    <div className="express">EX</div>
                  </i>
                  <i class="fab fa-react"></i>
                  <i class="fa-brands fa-node"></i>
                  <div className="line"></div>
                  <span className="roadmap">Mern Developer</span>
                </Link>
                <Link to="/roadmap_backend">
                  <div className="line"></div>
                  <i class="fa-brands fa-python"></i>
                  <i class="fa-brands fa-java"></i>
                  <i class="fa-brands fa-node"></i>
                  <i class="fas fa-gem"></i>
                  <div className="line"></div>
                  <span className="roadmap">Backend Developer</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
