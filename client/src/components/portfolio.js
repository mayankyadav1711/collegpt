import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aptitude from "./images/mayank.webp";
import portfolio from "./images/darshit.webp";
import qr from "./images/qr.webp";
import AOS from "aos";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
import Swiper from "swiper/bundle";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import handledarkmode from "./handledarkmode";

const Portfolio = () => {
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
        const nextSectionId = isMobile
            ? "feature-section-sm"
            : "feature-section-lg";
        const nextSection = document.getElementById(nextSectionId);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="flex flex-col gap-48 md:flex-row items-center justify-center  px-4 py-8 align-middle h-screen">
                <div className="w-full md:w-1/2 mt-10 max-w-full relative">
                    <Tilt
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={500}
                        scale={1}
                        transitionSpeed={1000}
                        gyroscope={true}>
                        <Fade cascade>
                            <img
                                src={aptitude}
                                alt="Photo"
                                className="w-[80rem] h-[35rem] rounded-lg  shadow-[5px_5px_rgba(66,_132,_242,_0.5),_10px_10px_rgba(66,_132,_242,_0.3),_15px_15px_rgba(66,_132,_242,_0.25),_20px_20px_rgba(66,_132,_242,_0.1),_25px_25px_rgba(66,_132,_242,_0.05)]"
                            />
                            
                        </Fade>
                    </Tilt>
                </div>

                <div className="w-full md:w-1/2 max-w-2xl">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">
                            Premium{" "}
                            <span style={{ color: "#3B82F6" }}>Portfolio</span>{" "}
                            Showcase{" "}
                        </h2>
                        <p className="text-3xl text-gray-500 dark:text-gray-300 ">
                            Unlock exclusive access to our Premium Portfolio,
                            featuring high-end projects and bespoke solutions
                            tailored to discerning clients. Elevate your
                            perspective with our curated collection of
                            outstanding work.
                        </p>
                    </div>

                    <div>
                        <ul className="list-disc text-3xl text-gray-900 dark:text-gray-300 pl-6 font-medium ">
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "8px",
                                }}>
                                <IoCheckmarkDoneCircleOutline
                                    size="24px"
                                    color="#12b8ff"
                                    style={{ marginTop: "0px" }}
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Advanced site analytics
                                </span>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "8px",
                                }}>
                                <IoCheckmarkDoneCircleOutline
                                    size="24px"
                                    color="#12b8ff"
                                    style={{ marginTop: "0px" }}
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Deliver as LIVE Website
                                </span>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "8px",
                                }}>
                                <IoCheckmarkDoneCircleOutline
                                    size="24px"
                                    color="#12b8ff"
                                    style={{ marginTop: "0px" }}
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Free domain for 1 year
                                </span>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "8px",
                                }}>
                                <IoCheckmarkDoneCircleOutline
                                    size="24px"
                                    color="#12b8ff"
                                    style={{ marginTop: "0px" }}
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Customization Options
                                </span>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "8px",
                                }}>
                                <IoCheckmarkDoneCircleOutline
                                    size="24px"
                                    color="#12b8ff"
                                    style={{ marginTop: "0px" }}
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Accept payments
                                </span>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        Get Now
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </div>
            </section>
            <div className="flex flex-col gap-48 md:flex-row items-center justify-center  align-middle h-screen">
            <div className="mt-48 ml-10 ml-auto w-full max-w-[900px] ">
    <iframe
        width="900"
        height="515"
                    src="https://darshit-dev.vercel.app/"
                    title="Darshit Sojitra || Portfolio"></iframe>{" "}
            </div>

            <div className="w-full md:w-1/2 max-w-2xl  relative">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">
                            Premium{" "}
                            <span style={{ color: "#3B82F6" }}>Portfolio</span>{" "}
                            Showcase{" "}
                        </h2>
                        <p className="text-3xl text-gray-500 dark:text-gray-300 ">
                            Unlock exclusive access to our Premium Portfolio,
                            featuring high-end projects and bespoke solutions
                            tailored to discerning clients. Elevate your
                            perspective with our curated collection of
                            outstanding work.
                        </p>
                    </div>
</div>

            </div>


            <div className="flex flex-col gap-48 md:flex-row items-center justify-center align-middle h-screen">
            <div className="w-full md:w-1/2 max-w-2xl  ml-20 relative">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-4">
                            Premium{" "}
                            <span style={{ color: "#3B82F6" }}>Portfolio</span>{" "}
                            Showcase{" "}
                        </h2>
                        <p className="text-3xl text-gray-500 dark:text-gray-300 ">
                            Unlock exclusive access to our Premium Portfolio,
                            featuring high-end projects and bespoke solutions
                            tailored to discerning clients. Elevate your
                            perspective with our curated collection of
                            outstanding work.
                        </p>
                    </div>
</div>
            <div className="mt-48 mr-24 ml-auto w-full max-w-[900px] ">
    <iframe
        width="900"
        height="515"
        src="https://mayank-dev.vercel.app/"
        title="Mayank Yadav || Portfolio"></iframe>
</div>

</div>
<section> {/* Adjusted to add positive margin if needed */}



<div className="flex justify-center">
             <div className="mb-10 pt-16 max-w-screen-md lg:mt-16">
<h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">Lite<br /></h2>
</div></div>
<div class="grid grid-cols-3 gap-5">
        <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
    </div>

    <div className="flex justify-center">
             <div className="mb-10 pt-16 max-w-screen-md lg:mt-16">
<h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">Lite<br /></h2>
</div></div>
<div class="grid grid-cols-3 gap-5">
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
    </div>

    <div className="flex justify-center">
             <div className="mb-10 pt-16 max-w-screen-md lg:mt-16">
<h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">Lite<br /></h2>
</div></div>
<div class="grid grid-cols-3 gap-5">
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
     <div>
            <img class="max-w-full rounded-lg" src={portfolio} alt="" />
            <Link to="https://darshit-dev.vercel.app/"  target="_blank"
                                rel="noreferrer" ><button
                        type="button"
                     
                        className="group text-white flex justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl mt-5 w-64 h-16  px-5 py-2.5 text-center me-2 mb-2 ">
                        
                        Preview
                        <svg
                            className="hidden group-hover:block w-5.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button></Link>
        </div>
    </div>
</section>



            <section id="feature-section-lg" className="hidden lg:block">
                <div className="flex justify-center">
                    <div className="mt-16 pt-16 max-w-screen-md lg:mt-16">
                        <h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">
                            Insights of RESUME
                            <br />
                        </h2>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" max-w-screen-md lg:my-16 flex justify-center">
                        <p className=" text-3xl text-gray-700 dark:text-gray-300">
                            Get hired 33% faster with our feature-packed and
                            easy-to-use resume builder app
                        </p>{" "}
                    </div>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex justify-center">
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/hM60Hd9/Xenesis-2024-23.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="AI resume builder"
                            description="Use AI-enabled resume suggestions in the Resume Builder app to write a keyword-rich resume."
                        />
                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/rxWXPcX/Xenesis-2024-29.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="Professional templates"
                            description="Choose from over 30 applicant tracking systems (ATS)-friendly modern and professional templates."
                        />

                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/gT0fX1C/Xenesis-2024-25.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="Customize fonts and colors"
                            description="Select custom fonts and colors on any resume template."
                        />
                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/DGGRmZT/Xenesis-2024-31.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="ATS-friendly templates"
                            description="Sail through applicant tracking systems with resume templates that appeal to both machines and humans."
                        />
                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/7NPHC38/Xenesis-2024-27.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="Free resume examples"
                            description="Use our more than 500 resume examples and templates to see what a great resume looks like in your field."
                        />

                        <FeatureCard
                            icon={
                                <img
                                    src="https://i.ibb.co/p2JqFmg/Xenesis-2024-30.png"
                                    className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                    alt="icon"
                                />
                            }
                            title="Expert tips and guidance"
                            description="Get help every step of the way as you build your resume with expert tips and suggested phrases."
                        />
                    </div>
                </div>
            </section>
            <section
                id="feature-section-sm"
                className="block lg:hidden relative">
                <div className="my-8 max-w-screen-md pt-40 flex justify-center mt-32">
                    <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
                        Experience ColleGPT 🚀 <br />
                    </h2>
                </div>
                <div className="my-8 max-w-screen-md  flex justify-center">
                    <p className="mt-6 text-4xl text-gray-700 dark:text-gray-300">
                        Discover a New Era of Learning with ColleGPT
                    </p>{" "}
                </div>
                <div className="relative pt-24 lg:pt-28 flex justify-center">
                    <div className="mx-auto px-6 max-w-7xl md:px-12">
                        <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
                            <div className="swiper proofSlides pb-6">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="px-6 pt-2 pb-12 flex items-center justify-center">
                                            <div className="box-container text-center">
                                                <FeatureCard
                                                    icon={
                                                        <img
                                                            src="https://i.ibb.co/hM60Hd9/Xenesis-2024-23.png"
                                                            className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                                            alt="icon"
                                                        />
                                                    }
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
                                                    icon={
                                                        <img
                                                            src="https://i.ibb.co/gT0fX1C/Xenesis-2024-25.png"
                                                            className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                                            alt="icon"
                                                        />
                                                    }
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
                                                    icon={
                                                        <img
                                                            src="https://i.ibb.co/rxWXPcX/Xenesis-2024-29.png"
                                                            className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                                            alt="icon"
                                                        />
                                                    }
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
                                                    icon={
                                                        <img
                                                            src="https://i.ibb.co/7NPHC38/Xenesis-2024-27.png"
                                                            className="w-15 h-15 text-primary-600 lg:w-24 lg:h-24 dark:text-primary-300"
                                                            alt="icon"
                                                        />
                                                    }
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
            <section className="mb-5">
 
 <div className="flex justify-center">
             <div className="mt-16 pt-16 max-w-screen-md lg:mt-16">
<h2 className="text-6xl text-gray-950 dark:text-white font-semibold text-center">Our Pricing Plan<br /></h2>
</div>
                             </div>
                             <div className=" flex justify-center">
                             <div className=" max-w-screen-md lg:my-16 flex justify-center">
                             <p className=" text-2xl text-gray-700 dark:text-gray-300">
                             There are many variations of passages of Lorem Ipsum available
               but the majority have suffered alteration in some form.
                             </p> </div></div>

    

      
      <div className="flex flex-wrap justify-center gap-20">
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-4xl font-medium text-gray-500 dark:text-gray-400">Lite</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-3xl font-semibold dark:text-gray-500">₹</span>
<span className="text-6xl font-extrabold text-[#12b8ff] tracking-tight">249</span>
<span className="ms-1 text-2xl font-normal text-gray-500 dark:text-gray-400">/month</span>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight  text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
</li>
<li className="flex line-through decoration-black">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">API Access</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
</li>
</ul>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
</div>  


<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-4xl font-medium text-gray-500 dark:text-gray-400">Lite</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-3xl font-semibold dark:text-gray-500">₹</span>
<span className="text-6xl font-extrabold text-[#12b8ff] tracking-tight">249</span>
<span className="ms-1 text-2xl font-normal text-gray-500 dark:text-gray-400">/month</span>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight  text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
</li>
<li className="flex line-through decoration-black">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">API Access</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
</li>
</ul>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
</div>  


<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-4xl font-medium text-gray-500 dark:text-gray-400">Lite</h5>
<div className="flex items-baseline text-gray-900 dark:text-white">
<span className="text-3xl font-semibold dark:text-gray-500">₹</span>
<span className="text-6xl font-extrabold text-[#12b8ff] tracking-tight">249</span>
<span className="ms-1 text-2xl font-normal text-gray-500 dark:text-gray-400">/month</span>
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<svg className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
</li>
<li className="flex">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight  text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
</li>
<li className="flex line-through decoration-black">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">API Access</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
</li>
<li className="flex line-through decoration-gray-500">
<svg className="flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span className="text-2xl font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
</li>
</ul>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
</div>  



</div>


</section>
        </>
    );
};

export default Portfolio;

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-white transition duration-300 ease-in-out transform hover:scale-105">
            <div className="absolute rounded-lg pointer-events-none"></div>
            <div className="relative z-10 flex flex-col justify-center items-center p-6">
                <div className="flex justify-center items-center mb-4 w-32 h-32 ">
                    {icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white text-center">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center text-xl">
                    {description}
                </p>
            </div>
        </div>
    );
};
