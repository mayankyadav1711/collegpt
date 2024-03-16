/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import handledarkmode from "./handledarkmode";

import Swiper from "swiper/bundle";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Homepage = () => {
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
    }, []);
    return (
        <>
            <main className="mt-8 overflow-hidden text-gray-900 dark:text-white ">
                <section class="home-grid">
                    <section>
                        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-52 lg:px-12 mb-16  ">
                            <a
                                href="#"
                                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-12 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                role="alert">
                                <span class="text-2xl bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                                    New
                                </span>{" "}
                                <span class="text-2xl font-medium">
                                    ColleGPT is Live! 🚀
                                </span>
                                <svg
                                    class="ml-2 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
                                Get Prepared Together
                            </h1>
                            <p class="mb-16 text-lg font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
                                With the intention of learning and growing
                                together, our team has built this platform, to
                                revolutionize your academic journey by providing
                                engaging resources and supportive community.
                            </p>
                            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <Link to="/courses">
                                    {" "}
                                    <a
                                        href="#"
                                        class="text-2xl inline-flex justify-center items-center py-3 px-5  font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                        Explore more
                                        <svg
                                            class="ml-2 -mr-1 w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="my-8 max-w-screen lg:my-16">
                            <h2 className="mb-4 text-7xl sm:text-6xl font-extrabold text-gray-900 dark:text-white">
                                Welcome to ColleGPT 🚀
                            </h2>
                            <p className="text-gray-500 sm:text-xl lg:text-2xl dark:text-gray-400">
                                Your ultimate College Companion is here to
                                revolutionize your academic journey. Break down
                                the boundaries of traditional education with our
                                innovative features!
                            </p>
                        </div>
                        <div className="space-y-8 pt-20 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-24 md:gap-12 lg:gap-y-24 lg:gap-x-56 md:space-y-0">
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14  sm:w-14 sm:h-14   dark:text-[#83b1e9]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                }
                                title="Xclusive Notes"
                                description="Access comprehensive notes in plain language, spiced up with entertaining memes for engaging learning."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14   sm:w-14 sm:h-14 dark:text-primary-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                    </svg>
                                }
                                title="Real-Time Event Updates"
                                description="Stay informed about upcoming academic events, seminars, and workshops."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14  sm:w-14 sm:h-14 dark:text-primary-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                            clipRule="evenodd"></path>
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                    </svg>
                                }
                                title="Handy Cheat Sheets"
                                description="Quick reference guides for key concepts, formulas, and more."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14  sm:w-14 sm:h-14 dark:text-primary-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                }
                                title="In-Depth Learning Guides"
                                description="Detailed roadmaps to help you navigate and master challenging topics."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14  sm:w-14 sm:h-14 dark:text-primary-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                }
                                title="Engaging Community"
                                description="Join a supportive community of learners, exchange ideas, and seek assistance."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#12b8ff] lg:w-14 lg:h-14  sm:w-14 sm:h-14 dark:text-primary-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                    </svg>
                                }
                                title="Intuitive User Interface"
                                description="Our user-friendly interface ensures a seamless and enjoyable browsing experience."
                            />
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <div className="relative pt-24 lg:pt-28">
                        <div className="mx-auto px-6 max-w-7xl md:px-12">
                            <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
                                <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]" />
                                <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/10 mx-auto blur-3xl" />
                                <div className="swiper proofSlides pb-6">
                                    <div className="swiper-wrapper">
                                        <div className="px-6 pt-2 pb-12 swiper-slide flex items-center justify-center">
                                            <div className="box-container text-center">
                                                <div className="box">
                                                    <svg
                                                        className="icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100"
                                                        height="100"
                                                        viewBox="0 0 24 24"
                                                        fill="none">
                                                        <path
                                                            d="M0 0h24v24H0V0z"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 15h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"
                                                            fill="#32E6E2"
                                                        />
                                                    </svg>
                                                    <p className="text-lg mt-4">
                                                        Xclusive Notes
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-2 pb-12 swiper-slide flex items-center justify-center">
                                            <div className="box-container text-center">
                                                <div className="box">
                                                    <svg
                                                        className="icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100"
                                                        height="100"
                                                        viewBox="0 0 24 24"
                                                        fill="none">
                                                        <path
                                                            d="M0 0h24v24H0V0z"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15h-4v-2h4v2zm4-4H4v-2h14v2zm0-4H4V7h14v2z"
                                                            fill="#32E6E2"
                                                        />
                                                    </svg>
                                                    <p className="text-lg mt-4">
                                                        Cheatsheets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-2 pb-12 swiper-slide flex items-center justify-center">
                                            <div className="box-container text-center">
                                                <div className="box">
                                                    <svg
                                                        className="icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="100"
                                                        height="100"
                                                        viewBox="0 0 24 24"
                                                        fill="none">
                                                        <path
                                                            d="M0 0h24v24H0V0z"
                                                            fill="none"
                                                        />
                                                        <path
                                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z"
                                                            fill="#32E6E2"
                                                        />
                                                    </svg>
                                                    <p className="text-lg mt-4">
                                                        Roadmaps
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* cheatsheets *************************************************************************************************************************/}
                <section>
                    <div className="pt-36">
                        <div className="mx-auto px-6 max-w-6xl text-gray-500">
                            <div className="text-center">
                                <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
                                    Cheatsheets <br />
                                </h2>
                                <p className="mt-6 text-4xl text-gray-700 dark:text-gray-300">
                                    Unlocking Excellence: Your Rapid Technical
                                    Guide
                                </p>
                            </div>
                            <div className="mt-12 relative w-fit h-fit sm:mx-auto sm:px-0 -mx-6 px-6 overflow-x-auto ">
                                <div className="mb-10 flex w-fit mx-auto gap-24 text-gray-950 dark:text-white">
                                <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_html"  >
  
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                               
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path
                                                    fill="#E65100"
                                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                                <path
                                                    fill="#FF6D00"
                                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                                <path
                                                    fill="#FFF"
                                                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                                                <path
                                                    fill="#EEE"
                                                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mb-10 flex w-fit mx-auto gap-24">
                                <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_css">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path
                                                    fill="#0277BD"
                                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                                <path
                                                    fill="#039BE5"
                                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                                <path
                                                    fill="#FFF"
                                                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                                <path
                                                    fill="#EEE"
                                                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_js">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path
                                                    fill="#f7df1e"
                                                    d="M6,42V6h36v36H6z"></path>
                                                <path
                                                    fill="#000001"
                                                    d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className=" mb-10 flex w-fit mx-auto gap-24">
                                <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_bootstrap">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <linearGradient
                                                    id="Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1"
                                                    x1="24"
                                                    x2="24"
                                                    y1="41"
                                                    y2="7"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop
                                                        offset="0"
                                                        stop-color="#643499"></stop>
                                                    <stop
                                                        offset=".011"
                                                        stop-color="#68369f"></stop>
                                                    <stop
                                                        offset=".135"
                                                        stop-color="#773db6"></stop>
                                                    <stop
                                                        offset=".193"
                                                        stop-color="#8042c3"></stop>
                                                    <stop
                                                        offset=".248"
                                                        stop-color="#8343c8"></stop>
                                                    <stop
                                                        offset=".388"
                                                        stop-color="#8444c9"></stop>
                                                    <stop
                                                        offset=".732"
                                                        stop-color="#9751d2"></stop>
                                                    <stop
                                                        offset=".997"
                                                        stop-color="#9c55d4"></stop>
                                                    <stop
                                                        offset=".998"
                                                        stop-color="#9c55d4"></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#9c55d4"></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1)"
                                                    d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"></path>
                                                <path
                                                    fill="#fff"
                                                    d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_gpt">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path d="M 22.390625 3.0078125 C 17.654395 2.8436595 13.569833 5.8435619 11.859375 10.025391 C 9.0176557 10.679494 6.5710372 12.403786 5.0136719 14.898438 C 2.5039309 18.9172 3.0618709 23.952784 5.828125 27.525391 C 4.9739102 30.313925 5.2421456 33.294602 6.6230469 35.890625 C 8.849447 40.074109 13.491637 42.111879 17.96875 41.501953 C 19.956295 43.635551 22.671724 44.892008 25.609375 44.994141 C 30.344873 45.157538 34.429949 42.156517 36.140625 37.974609 C 38.982335 37.320506 41.427906 35.596214 42.984375 33.101562 C 45.494116 29.082044 44.937696 24.046828 42.171875 20.474609 C 43.02609 17.686075 42.757854 14.705398 41.376953 12.109375 C 39.150553 7.9258913 34.508363 5.8881211 30.03125 6.4980469 C 28.043705 4.3644591 25.328276 3.109049 22.390625 3.0078125 z M 21.632812 6.0078125 C 23.471341 5.9259913 25.222619 6.4704661 26.662109 7.5058594 C 26.386892 7.6365081 26.113184 7.7694041 25.845703 7.9238281 L 18.322266 12.267578 C 17.829266 12.552578 17.523484 13.077484 17.521484 13.646484 L 17.470703 25.443359 L 14 23.419922 L 14 14.277344 C 14 9.9533438 17.312812 6.1998125 21.632812 6.0078125 z M 31.925781 9.3496094 C 34.481875 9.4330566 36.944688 10.675 38.398438 12.953125 C 39.388773 14.504371 39.790276 16.293997 39.613281 18.058594 C 39.362598 17.885643 39.111144 17.712968 38.84375 17.558594 L 31.320312 13.216797 C 30.827312 12.932797 30.220562 12.930891 29.726562 13.212891 L 19.486328 19.066406 L 19.503906 15.050781 L 27.421875 10.478516 C 28.825875 9.6677656 30.392125 9.299541 31.925781 9.3496094 z M 11.046875 13.449219 C 11.022558 13.752013 11 14.055332 11 14.363281 L 11 23.050781 C 11 23.619781 11.302922 24.146594 11.794922 24.433594 L 21.984375 30.376953 L 18.498047 32.369141 L 10.580078 27.798828 C 6.8350781 25.635828 5.240375 20.891687 7.234375 17.054688 C 8.0826085 15.421856 9.4306395 14.178333 11.046875 13.449219 z M 29.501953 15.630859 L 37.419922 20.201172 C 41.164922 22.364172 42.759625 27.108313 40.765625 30.945312 C 39.917392 32.578144 38.569361 33.821667 36.953125 34.550781 C 36.977447 34.247986 37 33.944668 37 33.636719 L 37 24.949219 C 37 24.380219 36.697078 23.853406 36.205078 23.566406 L 26.015625 17.623047 L 29.501953 15.630859 z M 24.019531 18.763672 L 28.544922 21.400391 L 28.523438 26.638672 L 23.980469 29.236328 L 19.455078 26.599609 L 19.476562 21.361328 L 24.019531 18.763672 z M 30.529297 22.556641 L 34 24.580078 L 34 33.722656 C 34 38.046656 30.687188 41.800187 26.367188 41.992188 C 24.528659 42.074009 22.777381 41.529534 21.337891 40.494141 C 21.613108 40.363492 21.886816 40.230596 22.154297 40.076172 L 29.677734 35.732422 C 30.170734 35.447422 30.476516 34.922516 30.478516 34.353516 L 30.529297 22.556641 z M 28.513672 28.933594 L 28.496094 32.949219 L 20.578125 37.521484 C 16.834125 39.683484 11.927563 38.691875 9.6015625 35.046875 C 8.6112269 33.495629 8.2097244 31.706003 8.3867188 29.941406 C 8.6374463 30.114402 8.8888065 30.286983 9.15625 30.441406 L 16.679688 34.783203 C 17.172688 35.067203 17.779438 35.069109 18.273438 34.787109 L 28.513672 28.933594 z"   fill="#74aa9c"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_vscode">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <linearGradient
                                                    id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1"
                                                    x1="37.8"
                                                    x2="37.8"
                                                    y1="43.37"
                                                    y2="7.42"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop
                                                        offset="0"
                                                        stop-color="#29b6f6"></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#13b2f6"></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)"
                                                    d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path>
                                                <linearGradient
                                                    id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2"
                                                    x1="6.085"
                                                    x2="34.793"
                                                    y1="34.801"
                                                    y2="7.173"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop
                                                        offset=".115"
                                                        stop-color="#0076bb"></stop>
                                                    <stop
                                                        offset=".257"
                                                        stop-color="#0069b0"></stop>
                                                    <stop
                                                        offset=".28"
                                                        stop-color="#0069b0"></stop>
                                                    <stop
                                                        offset=".424"
                                                        stop-color="#0069b0"></stop>
                                                    <stop
                                                        offset=".491"
                                                        stop-color="#0072b7"></stop>
                                                    <stop
                                                        offset=".577"
                                                        stop-color="#0076bb"></stop>
                                                    <stop
                                                        offset=".795"
                                                        stop-color="#0076bb"></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#006eb9"></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)"
                                                    d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path>
                                                <path
                                                    fill="#0288d1"
                                                    d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mb-10 flex w-fit mx-auto gap-24">
                                <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_python">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <linearGradient
                                                    id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1"
                                                    x1="10.458"
                                                    x2="26.314"
                                                    y1="12.972"
                                                    y2="26.277"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop
                                                        offset="0"
                                                        stop-color="#26abe7"></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#086dbf"></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)"
                                                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path>
                                                <linearGradient
                                                    id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2"
                                                    x1="35.334"
                                                    x2="23.517"
                                                    y1="37.911"
                                                    y2="21.034"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop
                                                        offset="0"
                                                        stop-color="#feb705"></stop>
                                                    <stop
                                                        offset="1"
                                                        stop-color="#ffda1c"></stop>
                                                </linearGradient>
                                                <path
                                                    fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)"
                                                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_web">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path
                                                    fill="#0277BD"
                                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                                <path
                                                    fill="#039BE5"
                                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                                <path
                                                    fill="#FFF"
                                                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                                <path
                                                    fill="#EEE"
                                                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mb-10 flex w-fit mx-auto gap-24 text-gray-950 dark:text-white">
                                <div className="border flex relative *:relative *:size-30 *:m-auto size-32 mx-auto rounded-3xl dark:bg-[#b5b5b510]  before:absolute before:rounded-3xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow ">
                                        <Link to="/watchvideo/cs_css">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="50"
                                                height="50"
                                                viewBox="0 0 48 48">
                                                <path
                                                    fill="#0277BD"
                                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                                                <path
                                                    fill="#039BE5"
                                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                                                <path
                                                    fill="#FFF"
                                                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                                                <path
                                                    fill="#EEE"
                                                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
    <div className="pt-36">
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
                All your favorite dev tools work with Ada
              </h2>
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Harum quae dolore inventore repudiandae? orrupti aut temporibus
                assumenda atque ab, accusamus sit, molestiae veniam laboriosam
                pariatur.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] divide-[--ui-light-border-color] dark:divide-[--ui-dark-border-color] *:py-3 *:flex *:items-center *:gap-3 text-gray-700 dark:text-gray-300">
              <li>
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m7 9l5 3.5L17 9"
                    />
                    <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                  </g>
                </svg>
                Email and web support
              </li>
              <li>
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z"
                    clipRule="evenodd"
                  />
                </svg>
                Fast response time
              </li>
              <li>
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"
                  />
                </svg>
                Menitoring and analytics
              </li>
              <li>
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"
                  />
                </svg>
                Architectural review
              </li>
            </ul>
          </div>
          <div className="overflow-hidden lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
            <div className="flex gap-2 py-6 *:size-2.5 *:rounded-full px-[--card-padding]">
              <div className="bg-[#f87171]" />
              <div className="bg-[#fbbf24]" />
              <div className="bg-[#a3e635]" />
            </div>
            <div className="flex gap-3 px-[--card-padding] text-gray-600 dark:text-gray-400 *:aspect-square *:border *:p-4 *:rounded-[calc(var(--card-border-radius)/2)] *:border-[--ui-light-border-color] dark:*:border-[--ui-dark-border-color]">
              <div>
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188a3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614c.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z"
                  />
                </svg>
              </div>
              <div className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.53em"
                  height="1em"
                  viewBox="0 0 256 168"
                >
                  <path
                    fill="currentColor"
                    d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.268 6.268 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.882 5.882 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.269 6.269 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.195 6.195 0 0 1-.611-3.977a5.881 5.881 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.538 3.538 0 0 0 1.598-2.37a3.769 3.769 0 0 0-.645-2.85a4.072 4.072 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.131 1.131 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.138 1.138 0 0 1-.01-.45a1.066 1.066 0 0 1 .48-.713l5.129-3.268a1.13 1.13 0 0 1 .314-.138a1.227 1.227 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.62 6.62 0 0 1 2.005 1.003l.263.192l.096-.295c.052-.156.093-.316.123-.478a3.769 3.769 0 0 0-.644-2.85a4.073 4.073 0 0 0-4.371-1.621a3.74 3.74 0 0 0-1.042.458L7.34 7.357a3.537 3.537 0 0 0-1.6 2.37a3.768 3.768 0 0 0 .645 2.85a4.073 4.073 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248c.098-.061.204-.108.315-.137a1.228 1.228 0 0 1 1.5.899c.034.147.037.3.011.449a1.067 1.067 0 0 1-.482.713l-5.127 3.269a1.125 1.125 0 0 1-.314.137a1.226 1.226 0 0 1-1.317-.488a1.149 1.149 0 0 1-.207-.762l.017-.19l-.19-.058a6.613 6.613 0 0 1-2.005-1.003l-.263-.192l-.096.295a3.568 3.568 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.073 4.073 0 0 0 1.93 1.498"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div>
                <pre className="px-[--card-padding]">
                  {"                                        "}
                  <code className="text-sm font-mono">
                    {"\n"}import Annonce from "tailus-ui/Annonce";{"\n"}
                    {"\n"}export default () =&gt; {"{"}
                    {"\n"}
                    {"    "}return ({"\n"}
                    {"        "}&lt;Annonce.Root variant="outlined"&gt;{"\n"}
                    {"            "}&lt;Annonce.Concern intent="primary"&gt;
                    {"\n"}
                    {"                "}New{"\n"}
                    {"            "}&lt;/Annonce.Concern&gt;{"\n"}
                    {"            "}&lt;Annonce.Message&gt;{"\n"}
                    {"                "}Say hello to the new Tailus !{"\n"}
                    {"            "}&lt;/Annonce.Message&gt;{"\n"}
                    {"        "}&lt;/Annonce.Root&gt;{"\n"}
                    {"    "}){"\n"}
                    {"}"};
                  </code>
                  {"\n"}
                  {"                                    "}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

                <section>
                    <div className="pt-36 mb-4">
                        <div className="mx-auto px-6 max-w-6xl text-gray-500">
                            <div className="text-center">
                                <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
                                    Roadmaps <br />
                                </h2>
                                <p className="mt-6 text-4xl text-gray-700 dark:text-gray-300">
                                    Guiding Your Journey Along The Technical
                                    Pathway{" "}
                                </p>
                            </div>
                            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative   mt-4 flex flex-col items-center justify-center">
                                        <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                    
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="-11.5 -10.23174 23 20.46348">
                                                <title>React Logo</title>
                                                <circle
                                                    cx="0"
                                                    cy="0"
                                                    r="2.05"
                                                    fill="#61dafb"
                                                />
                                                <g
                                                    stroke="#61dafb"
                                                    stroke-width="1"
                                                    fill="none">
                                                    <ellipse rx="11" ry="4.2" />
                                                    <ellipse
                                                        rx="11"
                                                        ry="4.2"
                                                        transform="rotate(60)"
                                                    />
                                                    <ellipse
                                                        rx="11"
                                                        ry="4.2"
                                                        transform="rotate(120)"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                Front-end Developer
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-sky-500/50 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative mt-4 flex flex-col items-center justify-center">
                                    <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="120"
                                                height="258"
                                                viewBox="0 0 120 258"
                                                fill="none">
                                                <path
                                                    d="M83.0089 28.7559C72.1328 15.9086 62.7673 2.86053 60.8539 0.150554C60.6525 -0.0501848 60.3503 -0.0501848 60.1489 0.150554C58.2355 2.86053 48.8699 15.9086 37.9938 28.7559C-55.3594 147.292 52.6968 227.287 52.6968 227.287L53.6031 227.889C54.4087 240.235 56.4228 258 56.4228 258H60.451H64.4792C64.4792 258 66.4934 240.335 67.299 227.889L68.2052 227.187C68.306 227.187 176.362 147.292 83.0089 28.7559ZM60.451 225.48C60.451 225.48 55.6172 221.365 54.3081 219.257V219.057L60.1489 89.9813C60.1489 89.5798 60.7532 89.5798 60.7532 89.9813L66.594 219.057V219.257C65.2848 221.365 60.451 225.48 60.451 225.48Z"
                                                    fill="#00684A"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                MERN Stack Developer
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative mt-4 flex flex-col items-center justify-center">
                                          <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="2270"
                                                height="2500"
                                                viewBox="0 0 256 282"
                                                preserveAspectRatio="xMinYMin meet">
                                                <g fill="#8CC84B">
                                                    <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                                                    <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                Backend Developer
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative mt-4 flex flex-col items-center justify-center">
                                     <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="2500"
                                                viewBox="-.557 117.607 598.543 423.631"
                                                width="2269">
                                                <g fill="#0091e2">
                                                    <path d="m592.162 277.804c-1.664-1.37-16.642-12.597-48.815-12.597-8.321 0-16.92.822-25.24 2.191-6.102-41.898-41.327-62.162-42.714-63.257l-8.598-4.93-5.547 7.942c-6.934 10.68-12.204 22.729-15.255 35.052-5.824 23.824-2.219 46.279 9.985 65.447-14.7 8.216-38.553 10.133-43.545 10.406h-393.853c-10.262 0-18.583 8.216-18.583 18.348-.554 33.956 5.27 67.912 17.197 99.951 13.59 35.052 33.838 61.067 59.91 76.95 29.4 17.799 77.383 27.931 131.468 27.931 24.408 0 48.815-2.19 72.946-6.572 33.56-6.025 65.734-17.526 95.412-34.23a260.485 260.485 0 0 0 64.902-52.577c31.342-34.778 49.925-73.663 63.515-108.167h5.547c34.116 0 55.195-13.418 66.844-24.92 7.766-7.12 13.59-15.882 17.751-25.74l2.497-7.12z" />
                                                    <path d="m55.193 306.83h52.698c2.497 0 4.716-1.916 4.716-4.654v-46.553c0-2.465-1.942-4.655-4.716-4.655h-52.698c-2.496 0-4.715 1.916-4.715 4.655v46.553c.277 2.738 2.219 4.655 4.715 4.655zm72.668 0h52.699c2.496 0 4.715-1.916 4.715-4.654v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.7c-2.496 0-4.715 1.916-4.715 4.655v46.553c.278 2.738 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 1.942 4.655 4.715 4.655zm72.946 0h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.942-4.655-4.715-4.655h-52.699c-2.496 0-4.715 1.916-4.715 4.655v46.553c0 2.738 2.219 4.655 4.715 4.655zm-147-66.543h52.698c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c.278 2.464 2.22 4.655 4.715 4.655m74.055 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-1.942-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 1.942 4.655 4.715 4.655m72.946 0h52.699c2.496 0 4.715-2.19 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m0-66.817h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-2.22-4.656-4.715-4.656h-52.699c-2.496 0-4.715 1.917-4.715 4.656v46.553c0 2.464 2.219 4.655 4.715 4.655m73.5 133.36h52.699c2.496 0 4.715-1.917 4.715-4.655v-46.553c0-2.465-1.941-4.655-4.715-4.655h-52.698c-2.497 0-4.716 1.916-4.716 4.655v46.553c.278 2.738 2.22 4.655 4.716 4.655" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                Dev-Ops Developer
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative mt-4 flex flex-col items-center justify-center">
                                     <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="2500"
                                                preserveAspectRatio="xMidYMid"
                                                width="2336"
                                                viewBox="0 0 256 273.612">
                                                <path
                                                    d="M191.548 186.292l.06 60.52-53.705 26.8v-60.494zM256 153.947v60.731l-45.805 22.86-.033-60.454zm-64.533-48.66l.06 59.885-53.625 26.647v-59.905zm64.533-32.082v59.509l-45.851 23.309-.04-60.005zm-126.262-7.04l47.933 24.195-49.731 24.975-47.028-23.62zM63.065 32.511l45.718 23.077-48.938 25.543-46.954-23.58zm130.69.35l49.243 24.69-44.04 22.12-48.032-24.228zM128.233 0l44.33 22.225-42.506 22.694L84.377 21.88z"
                                                    fill="#4dabcf"
                                                />
                                                <path
                                                    d="M118.944 131.914L82.77 113.728v78.606S38.533 98.207 34.434 89.752c-.528-1.091-2.703-2.288-3.259-2.578C23.243 83.009 0 71.235 0 71.235V210.11l32.154 17.188v-72.59s43.768 84.105 44.211 85.024c.443.92 4.84 9.784 9.533 12.897 6.253 4.139 33.053 20.255 33.053 20.255z"
                                                    fill="#4d77cf"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                Data Scientist
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
                                    <div
                                        aria-hidden="true"
                                        className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                                    />
                                    <div className="relative mt-4 flex flex-col items-center justify-center">
                                     <div className="flex relative *:relative *:size-12 *:m-auto size-20 rounded-xl dark:bg-[#b5b5b510]  before:absolute before:rounded-xl before:inset-0 before:from-slate-200  before:bg-gradient-to-b dark:before:from-neutral-800   dark:before:to-black/50 before:shadow  ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="2025"
                                                viewBox="32.9 57.77898118 414.2 366.56939652"
                                                width="2500">
                                                <path d="m64.2 370.885c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2c-.1-10.8-7.3-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-8h13.2v59.9h-10.2a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.9-31.2m47.4 1.2h13.2v8.1c3.6-6 10.4-9.3 18.2-9.3 13.9 0 22.9 9.8 22.9 25v36.1h-10.1a3.009 3.009 0 0 1 -3-3v-30.9c0-9.5-4.8-15.2-12.5-15.2-8.7 0-15.5 6.8-15.5 19.6v29.5h-10.1a3.009 3.009 0 0 1 -3-3zm95.9 10.7c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9h-10.1a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2m47.4 1.2h13.2v10.7a16.961 16.961 0 0 1 15.8-11.3 22.063 22.063 0 0 1 5.1.5v13.5a21.243 21.243 0 0 0 -6.6-1.1c-7.5 0-14.4 6.4-14.4 18.3v29.2h-10.1a3.009 3.009 0 0 1 -3-3zm69.6 48.8c10.5 0 18-8.3 18-18.9 0-10.7-7.4-18.9-18-18.9-10.7 0-18.1 8.3-18.1 18.9.1 10.7 7.4 18.9 18.1 18.9m0 12.3a31.151 31.151 0 1 1 31.4-31.1 30.948 30.948 0 0 1 -31.4 31.1m42.1-61.1h13.2v59.9h-10.1a3.009 3.009 0 0 1 -3-3zm6.6-13.1a8.985 8.985 0 0 1 -8.9-8.9 8.88 8.88 0 0 1 8.9-8.7 8.8 8.8 0 0 1 0 17.6m48.7 23.8c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2c-.2-10.8-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9h-10.1a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2"  fill="#3ddc84" />
                                                <path
                                                    d="m341.5 129.185 34.5-59.7a7.17 7.17 0 0 0 -12.4-7.2l-34.9 60.4a216.078 216.078 0 0 0 -177.2 0l-34.9-60.4a7.17 7.17 0 0 0 -12.4 7.2l34.5 59.7c-59.5 32.2-99.9 92.1-105.8 162.8h414c-5.9-70.7-46.4-130.6-105.4-162.8zm-196.8 103.8a17.2 17.2 0 1 1 17.2-17.2 17.2 17.2 0 0 1 -17.2 17.2zm190.6 0a17.2 17.2 0 1 1 17.2-17.2 17.2 17.2 0 0 1 -17.2 17.2z"
                                                    fill="#3ddc84"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                            <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
                                                Android/IOS Developer
                                            </p>
                                        </div>
                                        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                                            <a
                                                href="#"
                                                className="group rounded-5 disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-xl h-10 px-4 justify-center">
                                                <span>Explore</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div className="text-center mt-9">
                            <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
                                Built by the Community for the Community <br />
                            </h2>
                            <p className="mt-6 text-2xl text-gray-700 dark:text-gray-300">
                                Together, we've built something remarkable—a
                                testament to our strength.
                            </p>
                        </div>
                        <div class="grid gap-8 mt-24 lg:gap-16 sm:grid-cols-3 sm:grid-x-3 md:grid-cols-3 md:gap-x-2 lg:grid-cols-3 justify-center ">
                            <Link
                                to="https://mayank-dev.vercel.app/"
                                target="_blank"
                                rel="noreferrer">
                                <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                                    <img
                                        class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500"
                                        src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg"
                                        alt="Mayank Yadav"
                                    />

                                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a
                                            href="https://mayank-dev.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer">
                                            Mayank Yadav
                                        </a>
                                    </h3>
                                    <p>Founder, Developer and Content Writer</p>
                                </div>
                            </Link>
                            <Link to="" target="_blank" rel="noreferrer">
                                <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                                    <img
                                        class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500"
                                        src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg"
                                        alt="Divya Kaurani"
                                    />

                                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer">
                                            Divya Kaurani
                                        </a>
                                    </h3>
                                    <p>Founder, Developer and Content Writer</p>
                                </div>
                            </Link>
                            <Link to="https://darshit-dev.vercel.app/" target="_blank" rel="noreferrer">
                                <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                                    <img
                                        class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500"
                                        src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg"
                                        alt="Darshit Sojitra"
                                    />

                                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer">
                                            Darshit Sojitra
                                        </a>
                                    </h3>
                                    <p>Founder, Developer and Content Writer</p>
                                </div>
                            </Link>
                        {/* </div> */}

                        {/* <div class="grid gap-8 mt-24 lg:gap-16 sm:grid-cols-0 md:grid-cols-1 lg:grid-cols-3 justify-center "> */}
                        <Link to="https://www.behance.net/the_graphic_guy" target="_blank" rel="noreferrer">
                                <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                                    <img
                                        class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500"
                                        src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1708844593/x8f1ay9rbefzfzusbbqw.png"
                                        alt="Kussh Prajapati"
                                    />

                                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer">
                                            Kussh Prajapati
                                        </a>
                                    </h3>
                                    <p>Graphic Designer & Content Writer</p>
                                </div>
                            </Link>
                            <Link to="/about" target="_blank" rel="noreferrer">
                                <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                                    <img
                                        class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500"
                                        src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1708837420/sbga0ipdyfjkd2gvc51l.png"
                                        alt="Aastha Suthar"
                                    />

                                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer">
                                            Aastha Suthar
                                        </a>
                                    </h3>
                                    <p>Content Writer</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Homepage;

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-20 lg:w-20 dark:bg-primary-900">
                {icon}
            </div>
            <h3 className="mb-2 text-3xl font-bold dark:text-white">{title}</h3>
            <p className="text-xl text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};
