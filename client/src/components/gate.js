import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import aptitude from "./images/aptitude.webp";
import maths from "./images/DM.webp";
import dsa from "./images/dsa.webp";
import os from "./images/os.webp";
import DL from "./images/DL.webp";
import DB from "./images/DB.webp";
import TOC from "./images/TOC.webp";
import CD from "./images/CD.webp";
import CN from "./images/CN.webp";
import Algo from "./images/Algo.webp";
import user from "./images/60111.webp";
import {
  FaBook,
  FaFileAlt,
  FaChalkboardTeacher,
  FaLightbulb,
  FaRocket,
  FaClock,
} from "react-icons/fa";

const subjectsData = [
  { title: "Aptitude", image: aptitude, route: "aptitude" },
  {
    title: "Programming and Data Structures",
    image: dsa,
    route: "programming-and-data-structures",
  },
  {
    title: "Discrete Mathematics",
    image: maths,
    route: "discrete-mathematics",
  },
  { title: "Operating System", image: os, route: "operating-system" },
  { title: "Digital Logic", image: DL, route: "digital-logic" },
  {
    title: "Database Management System",
    image: DB,
    route: "database-management-system",
  },
  {
    title: "Theory Of Computation",
    image: TOC,
    route: "theory-of-computation",
  },
  { title: "Compiler Design", image: CD, route: "compiler-design" },
  { title: "Computer Networks", image: CN, route: "computer-networks" },
  { title: "Algorithms", image: Algo, route: "algorithms" },
];
const Gate = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []); // Empty dependency array means it will run once after the initial render

  return (
    <>
      <section class="home-grid h-screen">
        <section class="flex items-center justify-center text-center h-full">
          <div class="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-52 lg:px-12 mb-16">
            <a
              href="#"
              class="inline-flex justify-between items-center py-1 px-1 mb-12 text-xl lg:text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span class="text-4xl lg:text-2xl bg-primary-600 rounded-full text-white px-8 lg:px-4 py-3.5 lg:py-1.5 mr-3">
                New
              </span>
              <span class="text-4xl lg:text-2xl font-medium">
                ColleGPT is Live! 🚀
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
            <h1 class="mb-4 text-8xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
              <span class="text-sky-500">G</span>ATE &{" "}
              <span class="text-sky-500">P</span>lacement{" "}
              <span class="text-sky-500">T</span>oolkit
            </h1>
            <p class="mb-16 text-5xl font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
              Unlock your GATE and Placement Success. Prepare with our exclusive
              study materials, sessions, and resources.
            </p>
            <div class="flex justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row ">
              <a
                href="#"
                class="text-5xl lg:text-3xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
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
            </div>
          </div>
        </section>
      </section>
      <section className="flex flex-wrap justify-center gap-6">
        {subjectsData.map((subject, index) => (
          <div
            key={index}
            className="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110"
          >
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-60 h-40 mb-3"
                src={subject.image}
                alt={subject.title}
              />
              <h5 className="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white">
                {subject.title}
              </h5>
              <div className="flex mt-4 md:mt-6">
                <Link
                  to={`/watchvideo/${subject.route}`}
                  className="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Explore more
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section class="flex flex-col gap-48 md:flex-row items-center justify-center  px-4 py-8 align-middle h-screen">
        <div data-aos="flip-left" class="w-full md:w-1/2 max-w-3xl relative">
          <img
            class="w-full h-auto rounded-lg shadow-xl"
            src={aptitude}
            alt="Photo"
          />
          <div data-aos="flip-left" class="w-full md:w-1/2 max-w-3xl relative">
            <div class="absolute bottom-[-20px] left-4 z-10 bg-white bg-opacity-90 rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-md shadow-md p-3 flex align-middle justify-center items-center animate-bounce">
              <img
                class="w-24 h-24 object-cover rounded-full"
                src={user}
                alt="Photo"
              />
              <div class="ml-4">
                <p class="text-5xl text-center text-blue font-semibold ">
                  10+{" "}
                </p>
                <p class="text-xl text-gray-800">Subjects will be covered.</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="w-full md:w-1/2 max-w-2xl">
          <div className="mb-8">
            <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">
              Comprehensive
              <br />
              <span style={{ color: "#3B82F6" }}>
                Gate & Placement
              </span> <br /> Resources
            </h2>
            <p className="text-3xl text-gray-500 dark:text-gray-300 ">
              Access a wealth of curated materials to boost your GATE
              preparation and placement readiness.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 ">
              <Feature icon={<FaBook />} text="In-depth Study Materials" />
              <Feature icon={<FaFileAlt />} text="Practice Question Banks" />
              <Feature
                icon={<FaChalkboardTeacher />}
                text="Topic-wise Resources"
              />
              <Feature icon={<FaLightbulb />} text="Concept Explanations" />
              <Feature icon={<FaRocket />} text="Performance Boosters" />
              <Feature icon={<FaClock />} text="24/7 Resource Access" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="text-blue-500 text-3xl">{icon}</div>
    <p className="text-3xl font-medium text-gray-700 dark:text-gray-300">
      {text}
    </p>
  </div>
);

export default Gate;
