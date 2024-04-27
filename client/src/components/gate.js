import React, { useState, useEffect } from "react";
import AOS from 'aos';
import aptitude from "./images/aptitude.webp"
import maths from "./images/DM.webp"
import dsa from "./images/dsa.webp"
import os from "./images/os.webp"
import DL from "./images/DL.webp"
import DB from "./images/DB.webp"
import TOC from "./images/TOC.webp"
import CD from "./images/CD.webp"
import CN from "./images/CN.webp"
import Algo from "./images/Algo.webp"
import user from "./images/60111.webp"
const Gate = () => {
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []); // Empty dependency array means it will run once after the initial render
    
     
    

  return (
    <>
    
    <section class="home-grid h-screen">
    <section class="flex items-center justify-center text-center h-full">
        <div class="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-52 lg:px-12 mb-16">
            <a href="#"   class="inline-flex justify-between items-center py-1 px-1 mb-12 text-xl lg:text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-4xl lg:text-2xl bg-primary-600 rounded-full text-white px-8 lg:px-4 py-3.5 lg:py-1.5 mr-3">New</span>
                <span class="text-4xl lg:text-2xl font-medium">ColleGPT is Live! 🚀</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <h1 class="mb-4 text-8xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
            Graduate Aptitude Test in Engineering
            </h1>
            <p class="mb-16 text-5xl font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
Unlock your GATE Success. Prepare with our exclusive study materials, sessions and resources.
            </p>
            <div class="flex justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row ">
                <a href="#"  class="text-5xl lg:text-3xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</section>
<section class="flex flex-wrap justify-center gap-6">
<div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-60 h-40 mb-3" src={aptitude} alt="Aptitude"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white">Aptitude</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-50 h-40 mb-3" src={dsa} alt="Data Structures and Algorithms."/>
            <h5 class="mb-1 h-20 text-center text-4xl font-medium text-gray-900 dark:text-white">Programming and Data Structures.</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-50 h-40 mb-3" src={maths} alt="Discrete Mathematics"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white truncate">Discrete Mathematics</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-50 h-40 mb-3" src={os} alt="Operating Systems"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white truncate">Operating System</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-40 h-40 mb-3" src={DL} alt="Digital Logic"/>
            <h5 class="mb-1 h-20 text-center text-4xl font-medium text-gray-900 dark:text-white">Digital Logic</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-60 h-40 mb-3" src={DB} alt="Database Management System"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white">Database Management System</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-60 h-40 mb-3" src={TOC} alt="Theory Of Computation"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white truncate">Theory Of Computation</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-40 h-40 mb-3" src={CD} alt="Compiler Design"/>
            <h5 class="mb-1 h-20 text-center text-4xl font-medium text-gray-900 dark:text-white">Compiler Design</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-55 h-40 mb-3" src={CN} alt="Computer Networks"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white">Computer Networks</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="w-full max-w-lg bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10 px-5 mr-4 transition-transform transform hover:scale-110">
        <div class="flex flex-col items-center pb-10">
            <img class="w-55 h-40 mb-3" src={Algo} alt="Algorithms"/>
            <h5 class="mb-1 h-20 text-4xl font-medium text-gray-900 dark:text-white">Algorithms</h5>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="text-5xl lg:text-2xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Explore more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
{/* <div class="w-full max-w-lg bg-white rounded-lg shadow-xl dark:bg-gray-800 flex items-center p-5 ml-5">
    <div class="mr-6">
        <img class="w-32 h-32" src={DL} alt="Photo"/>
    </div>

    <div class="flex-grow text-center">
        <h5 class="text-4xl font-medium text-gray-900 dark:text-white p-3">Digital Logic</h5>
        <a href="#" class="text-3xl flex justify-center items-center px-6 py-3  text-blue-900  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore more
        </a>
    </div>

    <div class="ml-auto">
        
    </div>
</div> */}

               
<section class="flex flex-col gap-48 md:flex-row items-center justify-center  px-4 py-8 align-middle h-screen">
<div data-aos="flip-left" class="w-full md:w-1/2 max-w-3xl relative">
    <img class="w-full h-auto rounded-lg shadow-xl" src={aptitude} alt="Photo"/>
    <div data-aos="flip-left" class="w-full md:w-1/2 max-w-3xl relative">
    
    <div class="absolute bottom-[-20px] left-4 z-10 bg-white bg-opacity-90 rounded-tl-xl rounded-tr-3xl rounded-bl-3xl rounded-br-md shadow-md p-3 flex align-middle justify-center items-center animate-bounce">
    <img class="w-24 h-24 object-cover rounded-full" src={user} alt="Photo"/>
    <div class="ml-4">
        <p class="text-5xl text-center text-blue font-semibold ">30+ </p>
        <p class="text-xl text-gray-800">30+ learners enrolled</p>
    </div>
</div>

</div>

</div>

  
    <div data-aos="fade-left" className="w-full md:w-1/2 max-w-2xl">
    <div className="mb-8">
        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">Over 10 Years in <br /><span style={{ color: '#3B82F6' }}>Distant learning</span> for<br /> Skill Development</h2>
        <p className="text-3xl text-gray-500 dark:text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vel enim venenatis blandit. Cras non nulla nec ex aliquet tincidunt.</p>
    </div>
    
    <div>
        <ul className="list-disc text-3xl text-gray-900 dark:text-gray-300 pl-6 font-medium ">
            <li className="mb-4">✔️Xclusive material</li>
            <li>✔️Live sessions</li>
        </ul>
    </div>
</div>

</section>

{/* <div class="container mx-auto px-4">
    <section class="mt-8">
        <h2 class="text-3xl font-bold mb-4">Latest News</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white bg-opacity-90 rounded-lg shadow-md p-4 flex flex-col">
                <img class="w-full h-48 object-cover rounded-t-lg" src="{news_image_source}" alt="News Image"/>

                <div class="flex-1 flex flex-col justify-between">
                    <h3 class="text-xl font-semibold mt-2">News Title</h3>
                    
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <a href="#" class="text-blue-500 mt-2 self-end">Read more</a>
                </div>
            </div>

            <div class="bg-white bg-opacity-90 rounded-lg shadow-md p-4 flex flex-col">
                <img class="w-full h-48 object-cover rounded-t-lg" src="{news_image_source}" alt="News Image"/>

                <div class="flex-1 flex flex-col justify-between">
                    <h3 class="text-xl font-semibold mt-2">News Title</h3>
                    
                    <p class="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <a href="#" class="text-blue-500 mt-2 self-end">Read more</a>
                </div>
            </div>

        </div>
    </section>
</div> */}

   
    </>
  );
};

export default Gate;

