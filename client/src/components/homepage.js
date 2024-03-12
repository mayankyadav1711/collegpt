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
          <div class="playground-box">
            <h3 class="title-xclusive">PlayGround🎮</h3>
            <p class="tutor">
              <i>
                <b>"Where Tech Meets Play"</b>
              </i>
            </p>
            {/* <a href="teachers.html" class="inline-btn">get started</Link> */}
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
          </div>
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
              <span className="roadmap" >Frontend Developer</span>
              </Link>
              <Link to="/roadmap_mern">
              <div className="line"></div>
              <i class="fa-solid fa-leaf"></i>
              <i class="fa-regular fa-circle"><div className="express">EX</div></i>
              <i class="fab fa-react"></i>
              <i class="fa-brands fa-node"></i>
              <div className="line"></div>
              <span className="roadmap" >Mern Developer</span>
              </Link>
              <Link to="/roadmap_backend">
              <div className="line"></div>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-java"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fas fa-gem"></i>
              <div className="line"></div>
              <span className="roadmap" >Backend Developer</span>
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