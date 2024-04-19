import React, { useState, useEffect } from "react";
import aptitude from "./images/template.png"
import qr from "./images/qr.jpg"
import AOS from 'aos';
import Tilt from "react-parallax-tilt";
import Fade from 'react-reveal/Fade';
import Swiper from "swiper/bundle";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import handledarkmode from "./handledarkmode";


const Resume = () => {
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
    
     

  useEffect(() => {
    handledarkmode();
}, []);

useEffect(() => {
    const swiper = new Swiper(".proofSlides", {
      effect: "cube",
      cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        duration: 500,
      },
      grabCursor: true,
      modules: [Pagination],
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);
  const scrollToNextSection = () => {
    const isMobile = window.innerWidth < 768;
    const nextSectionId = isMobile ? "feature-section-sm" : "feature-section-lg";
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
    

  return (
    <>
  
               
<section class="flex flex-col gap-48 md:flex-row items-center justify-center  px-4 py-8 align-middle h-screen">
<div className="w-full md:w-1/2 max-w-2xl">
    <div className="mb-8">
        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">Professional Resume Builder: <span style={{ color: '#3B82F6' }}> Unlock Your Potential</span></h2>
        <p className="text-3xl text-gray-500 dark:text-gray-300 ">Craft your perfect resume with our expert-driven, customizable templates. Stand out from the crowd and land your dream job with a resume that speaks volumes</p>
    </div>
    
    <div>
        <ul className="list-disc text-3xl text-gray-900 dark:text-gray-300 pl-6 font-medium ">
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px'  }}>
  <IoCheckmarkDoneCircleOutline size="24px" color="#12b8ff" style={{ marginTop: '0px' }} />
  <span style={{ marginLeft: '8px' }}>1 Resume/CV</span>
</li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px'  }}>
  <IoCheckmarkDoneCircleOutline size="24px" color="#12b8ff" style={{ marginTop: '0px' }} />
  <span style={{ marginLeft: '8px' }}>Delivery in word/pdf format</span>
</li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
  <IoCheckmarkDoneCircleOutline size="24px" color="#12b8ff" style={{ marginTop: '0px' }} />
  <span style={{ marginLeft: '8px' }}>High ranking keywords enabled</span>
</li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px'  }}>
  <IoCheckmarkDoneCircleOutline size="24px" color="#12b8ff" style={{ marginTop: '0px' }} />
  <span style={{ marginLeft: '8px' }}>1-2 Working days delivery</span>
</li>

        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px'  }}>
  <IoCheckmarkDoneCircleOutline size="24px" color="#12b8ff" style={{ marginTop: '0px' }} />
  <span style={{ marginLeft: '8px' }}>ATS-Optimized Formats</span>
</li>
        </ul>
    </div>
    
    <button type="button" class="text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 px-5 py-2.5 text-center me-2 mb-2 ">Get Now <svg class="w-5.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></button>
</div>

<div class="w-full md:w-1/2 mt-10 max-w-3xl relative">

    <Tilt
     tiltMaxAngleX={20}
     tiltMaxAngleY={20}
     perspective={500}
     scale={1}
     transitionSpeed={1000}
     gyroscope={true}
     >
                <Fade cascade>
                    <img
                       src={aptitude}
                        alt="Photo"
                        className="w-[40rem] h-[55rem] rounded-lg shadow-xl"
                    />
                </Fade>
            </Tilt>
</div>
</section>

<section id="feature-section-lg" className="hidden lg:block">
                <div className="flex justify-center">
                <div className="mt-16 pt-16 max-w-screen-md lg:mt-16">
  <h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">Insights of RESUME<br /></h2>
</div>
                                </div>
                                <div className=" flex justify-center">
                                <div className=" max-w-screen-md lg:my-16 flex justify-center">
                                <p className=" text-3xl text-gray-700 dark:text-gray-300">
                                Get hired 33% faster with our feature-packed and easy-to-use resume builder app
                                </p> </div></div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex justify-center">
     
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <FeatureCard 
  icon={<img src="https://i.ibb.co/hM60Hd9/Xenesis-2024-23.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
  title="AI resume builder"
  description="Use AI-enabled resume suggestions in the Resume Builder app to write a keyword-rich resume."
/>
<FeatureCard 
  icon={<img src="https://i.ibb.co/rxWXPcX/Xenesis-2024-29.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Professional templates"
            description="Choose from over 30 applicant tracking systems (ATS)-friendly modern and professional templates."
          />
          
          <FeatureCard 
  icon={<img src="https://i.ibb.co/gT0fX1C/Xenesis-2024-25.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Customize fonts and colors"
            description="Select custom fonts and colors on any resume template."
          />
          <FeatureCard 
  icon={<img src="https://i.ibb.co/DGGRmZT/Xenesis-2024-31.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="ATS-friendly templates"
            description="Sail through applicant tracking systems with resume templates that appeal to both machines and humans."
          />
          <FeatureCard 
  icon={<img src="https://i.ibb.co/7NPHC38/Xenesis-2024-27.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Free resume examples"
            description="Use our more than 500 resume examples and templates to see what a great resume looks like in your field."
          />
         
          <FeatureCard 
  icon={<img src="https://i.ibb.co/p2JqFmg/Xenesis-2024-30.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Expert tips and guidance"
            description="Get help every step of the way as you build your resume with expert tips and suggested phrases."
          />
        </div>
      </div>
    </section>
    <section id="feature-section-sm" className="block lg:hidden relative">
    <div className="my-8 max-w-screen-md pt-40 flex justify-center mt-32">
        <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
        Experience ColleGPT 🚀 <br />
                                </h2>
                                </div>
                                <div className="my-8 max-w-screen-md  flex justify-center">
                                <p className="mt-6 text-4xl text-gray-700 dark:text-gray-300">
                                Discover a New Era of Learning with ColleGPT 
                                </p> </div>
      <div className="relative pt-24 lg:pt-28 flex justify-center">
        <div className="mx-auto px-6 max-w-7xl md:px-12">
          <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
            <div className="swiper proofSlides pb-6">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="px-6 pt-2 pb-12 flex items-center justify-center">
                    <div className="box-container text-center">
                    <FeatureCard 
  icon={<img src="https://i.ibb.co/hM60Hd9/Xenesis-2024-23.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
  title="AI resume builder"
  description="Use AI-enabled resume suggestions in the Resume Builder app to write a keyword-rich resume."
/>
                    </div>
                  </div>
                </div>
              
                <div className="swiper-slide">
                  <div className="px-6 pt-2 pb-12 flex items-center justify-center">
                    <div className="box-container text-center">
                    <FeatureCard 
  icon={<img src="https://i.ibb.co/gT0fX1C/Xenesis-2024-25.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Customize fonts and colors"
            description="Select custom fonts and colors on any resume template."
          />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="px-6 pt-2 pb-12 flex items-center justify-center">
                    <div className="box-container text-center">
                    <FeatureCard 
  icon={<img src="https://i.ibb.co/rxWXPcX/Xenesis-2024-29.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Professional templates"
            description="Choose from over 30 applicant tracking systems (ATS)-friendly modern and professional templates."
          />
                    </div>
                  </div>
                </div>
              
                <div className="swiper-slide">
                  <div className="px-6 pt-2 pb-12 flex items-center justify-center">
                    <div className="box-container text-center">
                    <FeatureCard 
  icon={<img src="https://i.ibb.co/7NPHC38/Xenesis-2024-27.png" className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300" alt="icon" />}
            title="Free resume examples"
            description="Use our more than 500 resume examples and templates to see what a great resume looks like in your field."
          />
         
                    </div>
                  </div>
                </div>
           
              </div>
            
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
        

<div id="default-carousel" class="relative w-[60rem] h-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={aptitude} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={qr} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={aptitude} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 4 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={qr} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 5 --> */}
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src={aptitude} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </section>


   
    </>
  );
};

export default Resume;

const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-white transition duration-300 ease-in-out transform hover:scale-105">
      <div className="absolute rounded-lg pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-center items-center p-6">
        <div className="flex justify-center items-center mb-4 w-32 h-32 ">
          {icon}
        </div>
        <h3 className="mb-2 text-2xl font-bold dark:text-white text-center">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center text-xl">{description}</p>
      </div>
    </div>
    );
  }