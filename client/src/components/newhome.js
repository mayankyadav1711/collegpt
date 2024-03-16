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

const NewHome = () => {
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


      <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="my-8 max-w-screen-md lg:my-16">
          <h2 className="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white">Welcome to ColleGPT 🚀</h2>
          <p className="text-gray-500 text-2xl sm:text-xl dark:text-gray-400">Your ultimate College Companion is here to revolutionize your academic journey. Break down the boundaries of traditional education with our innovative features!</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <FeatureCard 
  icon={<img src="https://i.ibb.co/pbrkP61/Xenesis-2024-22.png" className="w-15 h-15 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" alt="icon" />}
  title="Xclusive Notes"
  description="Access comprehensive notes in plain language, spiced up with entertaining memes for engaging learning."
/>

          <FeatureCard 
            icon={<svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>}
            title="Real-Time Event Updates"
            description="Stay informed about upcoming academic events, seminars, and workshops."
          />
          <FeatureCard 
            icon={<svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>}
            title="Handy Cheat Sheets"
            description="Quick reference guides for key concepts, formulas, and more."
          />
          <FeatureCard 
            icon={<svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>}
            title="In-Depth Learning Guides"
            description="Detailed roadmaps to help you navigate and master challenging topics."
          />
          <FeatureCard 
            icon={<svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>}
            title="Engaging Community"
            description="Join a supportive community of learners, exchange ideas, and seek assistance."
          />
          <FeatureCard 
            icon={<svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>}
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
                            fill="none"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 15h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"
                              fill="#32E6E2"
                            />
                          </svg>
                          <p className="text-lg mt-4">Xclusive Notes</p>
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
                            fill="none"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15h-4v-2h4v2zm4-4H4v-2h14v2zm0-4H4V7h14v2z"
                              fill="#32E6E2"
                            />
                          </svg>
                          <p className="text-lg mt-4">Cheatsheets</p>
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
                            fill="none"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z"
                              fill="#32E6E2"
                            />
                          </svg>
                          <p className="text-lg mt-4">Roadmaps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cheatsheets */}
        <section>
          <div className="pt-36">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
              <div className="text-center">
                <h2 className="text-6xl text-gray-950 dark:text-white font-semibold">
                  Cheatsheets <br />
                </h2>
                <p className="mt-6 text-4xl text-gray-700 dark:text-gray-300">
                  Unlocking Excellence: Your Rapid Technical Guide
                </p>
              </div>
              <div className="mt-12 relative w-fit h-fit sm:mx-auto sm:px-0 -mx-6 px-6 overflow-x-auto ">
                <div className="mb-3 flex w-fit mx-auto gap-3 text-gray-950 dark:text-white">
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.84em"
                      height="1em"
                      viewBox="0 0 256 308"
                    >
                      <path
                        fill="#ff3e00"
                        d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056a86.566 86.566 0 0 0 8.536 55.576a82.425 82.425 0 0 0-12.296 30.719a87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057a86.601 86.601 0 0 0-8.53-55.577a82.409 82.409 0 0 0 12.29-30.718a87.573 87.573 0 0 0-14.963-66.244"
                      />
                      <path
                        fill="#fff"
                        d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85a49.978 49.978 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.067 16.067 0 0 0 2.89 10.656a17.143 17.143 0 0 0 18.397 6.828a15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977a15.923 15.923 0 0 0-2.713-12.011a17.156 17.156 0 0 0-18.404-6.832a15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849a49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85a50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.099 16.099 0 0 0-2.89-10.656a17.143 17.143 0 0 0-18.398-6.828a15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.156 17.156 0 0 0 18.404 6.832a15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848a49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.53em"
                      height="1em"
                      viewBox="0 0 256 168"
                    >
                      <path
                        fill="#00dc82"
                        d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mb-3 flex w-fit mx-auto gap-3">
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#38bdf8"
                        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 128 128"
                    >
                      <path
                        className="text-[#014847] dark:text-white"
                        fill="currentColor"
                        d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"
                      />
                      <path
                        className="text-[#05bdba]"
                        fill="currentColor"
                        d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361" />
                          <stop offset="100%" stopColor="#3ecf8e" />
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      />
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      />
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" mb-3 flex w-fit mx-auto gap-3">
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.95em"
                      height="1em"
                      viewBox="0 0 256 271"
                    >
                      <defs>
                        <linearGradient
                          id="logosAngularIcon0"
                          x1="25.071%"
                          x2="96.132%"
                          y1="90.929%"
                          y2="55.184%"
                        >
                          <stop offset="0%" stopColor="#e40035" />
                          <stop offset="24%" stopColor="#f60a48" />
                          <stop offset="35.2%" stopColor="#f20755" />
                          <stop offset="49.4%" stopColor="#dc087d" />
                          <stop offset="74.5%" stopColor="#9717e7" />
                          <stop offset="100%" stopColor="#6c00f5" />
                        </linearGradient>
                        <linearGradient
                          id="logosAngularIcon1"
                          x1="21.863%"
                          x2="68.367%"
                          y1="12.058%"
                          y2="68.21%"
                        >
                          <stop offset="0%" stopColor="#ff31d9" />
                          <stop
                            offset="100%"
                            stopColor="#ff5be1"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosAngularIcon0)"
                        d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                      />
                      <path
                        fill="url(#logosAngularIcon1)"
                        d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.12em"
                      height="1em"
                      viewBox="0 0 256 229"
                    >
                      <path
                        fill="#0066da"
                        d="m19.354 196.034l11.29 19.5c2.346 4.106 5.718 7.332 9.677 9.678c11.34-14.394 19.232-25.44 23.68-33.137c4.513-7.811 10.06-20.03 16.641-36.655c-17.736-2.335-31.176-3.502-40.32-3.502c-8.777 0-22.217 1.167-40.322 3.502c0 4.545 1.173 9.09 3.519 13.196z"
                      />
                      <path
                        fill="#ea4335"
                        d="M215.681 225.212c3.96-2.346 7.332-5.572 9.677-9.677l4.692-8.064l22.434-38.855a26.566 26.566 0 0 0 3.518-13.196c-18.21-2.335-31.625-3.502-40.247-3.502c-9.266 0-22.682 1.167-40.248 3.502c6.503 16.716 11.977 28.935 16.422 36.655c4.483 7.789 12.4 18.834 23.752 33.137"
                      />
                      <path
                        fill="#00832d"
                        d="M128.001 73.311c13.12-15.845 22.162-28.064 27.125-36.655c3.997-6.918 8.396-17.964 13.196-33.137C164.363 1.173 159.818 0 155.126 0h-54.25C96.184 0 91.64 1.32 87.68 3.519c6.106 17.402 11.288 29.787 15.544 37.154c4.704 8.142 12.963 19.021 24.777 32.638"
                      />
                      <path
                        fill="#2684fc"
                        d="M175.36 155.42H80.642l-40.32 69.792c3.958 2.346 8.503 3.519 13.195 3.519h148.968c4.692 0 9.238-1.32 13.196-3.52z"
                      />
                      <path
                        fill="#00ac47"
                        d="M128.001 73.311L87.681 3.52c-3.96 2.346-7.332 5.571-9.678 9.677L3.519 142.224A26.567 26.567 0 0 0 0 155.42h80.642z"
                      />
                      <path
                        fill="#ffba00"
                        d="m215.242 77.71l-37.243-64.514c-2.345-4.106-5.718-7.331-9.677-9.677l-40.32 69.792l47.358 82.109h80.496c0-4.546-1.173-9.09-3.519-13.196z"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.56em"
                      height="1em"
                      viewBox="0 0 256 165"
                    >
                      <path
                        fill="#0364b8"
                        d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80.003 80.003 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"
                      />
                      <path
                        fill="#0078d4"
                        d="m97.618 45.552l-.002.009a63.683 63.683 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"
                      />
                      <path
                        fill="#1490df"
                        d="M207.502 60.148a52.595 52.595 0 0 0-3.51-.131a51.81 51.81 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1z"
                      />
                      <path
                        fill="#28a8ea"
                        d="M11.498 136.596a63.908 63.908 0 0 0 52.5 27.417h139.994a51.986 51.986 0 0 0 45.778-27.323l-98.413-58.95z"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/5 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.13em"
                      height="1em"
                      viewBox="0 0 256 228"
                    >
                      <path
                        fill="#00d8ff"
                        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887m110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565m-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-3 flex w-fit mx-auto gap-3">
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#38bdf8"
                        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 128 128"
                    >
                      <path
                        className="text-[#014847] dark:text-white"
                        fill="currentColor"
                        d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"
                      />
                      <path
                        className="text-[#05bdba]"
                        fill="currentColor"
                        d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361" />
                          <stop offset="100%" stopColor="#3ecf8e" />
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      />
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      />
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-3 flex w-fit mx-auto gap-3 text-gray-950 dark:text-white">
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.84em"
                      height="1em"
                      viewBox="0 0 256 308"
                    >
                      <path
                        fill="#ff3e00"
                        d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056a86.566 86.566 0 0 0 8.536 55.576a82.425 82.425 0 0 0-12.296 30.719a87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057a86.601 86.601 0 0 0-8.53-55.577a82.409 82.409 0 0 0 12.29-30.718a87.573 87.573 0 0 0-14.963-66.244"
                      />
                      <path
                        fill="#fff"
                        d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85a49.978 49.978 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.067 16.067 0 0 0 2.89 10.656a17.143 17.143 0 0 0 18.397 6.828a15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977a15.923 15.923 0 0 0-2.713-12.011a17.156 17.156 0 0 0-18.404-6.832a15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849a49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85a50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.099 16.099 0 0 0-2.89-10.656a17.143 17.143 0 0 0-18.398-6.828a15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.156 17.156 0 0 0 18.404 6.832a15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848a49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                      />
                    </svg>
                  </div>
                  <div className="border flex relative *:relative *:size-7 *:m-auto size-20 mx-auto rounded-[--card-border-radius] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc(var(--card-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.53em"
                      height="1em"
                      viewBox="0 0 256 168"
                    >
                      <path
                        fill="#00dc82"
                        d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
                      />
                    </svg>
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
          <div className="pt-36">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
              <div className="text-center">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
                  Roadmaps
                </h2>
                <p className="mt-6 text-gray-700 dark:text-gray-300">
                  Guiding Your Journey Along The Technical Pathway
                </p>
              </div>
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-transparent border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105">
  <div
    aria-hidden="true"
    className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-primary-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
  />
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        Frontend Developer
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        MERN Stack Developer
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        Backend Developer
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        Dev-Ops Developer
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        Data Scientist
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
  <div className="relative flex flex-col items-center justify-center">
    <div className="border border-primary-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-primary-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
      {/* Removed SVG */}
    </div>
    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
      <p className="text-gray-700 dark:text-gray-300 text-3xl text-center">
        Android/IOS Developer
      </p>
    </div>
    <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <a
        href="#"
        download="/"
        className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
      >
        <span>Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
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
       
        <section >
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
  <div class="text-center my-10">
                        <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Built by the Community <br/> for the Community</h2>
                        <p class="mt-6 text-gray-700 dark:text-gray-300">Together, we've built something remarkable—a testament to our strength.</p>
                    </div>
                    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center ">
                    <Link to="https://mayank-dev.vercel.app/" target="_blank" rel="noreferrer">
    <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
    <img class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500" src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg" alt="Mayank Yadav"/>

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="https://mayank-dev.vercel.app/" target="_blank" rel="noreferrer">Mayank Yadav</a>

        </h3>
        <p>Founder, Developer and Content Writer</p>
    </div>
    </Link>
    <Link to="" target="_blank" rel="noreferrer">
    <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500" src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg" alt="Divya Kaurani"/>

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#" target="_blank" rel="noreferrer">Divya Kaurani</a>
        </h3>
        <p>Founder, Developer and Content Writer</p>
    </div>
    </Link>
    <Link to="" target="_blank" rel="noreferrer">
    <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500" src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg" alt="Darshit Sojitra"/>

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#" target="_blank" rel="noreferrer">Darshit Sojitra</a>
        </h3>
        <p>Founder, Developer and Content Writer</p>
    </div>
</Link>
</div>  
  
<div class="my-4 grid gap-8 lg:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 justify-center ">
<Link to="" target="_blank" rel="noreferrer">
    <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500" src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1708844593/x8f1ay9rbefzfzusbbqw.png" alt="Kussh Prajapati"/>

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#" target="_blank" rel="noreferrer">Kussh Prajapati</a>
        </h3>
        <p>Graphic Designer & Content Writer</p>
    </div>
    </Link>
    <Link to="" target="_blank" rel="noreferrer">
    <div class="text-center text-gray-500 dark:text-gray-400 transform transition duration-300 ease-in-out hover:scale-105">
                <img class="mx-auto mb-4 w-36 h-36 rounded-full border-4 border-white hover:border-blue-500" src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1708837420/sbga0ipdyfjkd2gvc51l.png" alt="Aastha Suthar"/>

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#" target="_blank" rel="noreferrer">Aastha Suthar</a>
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

export default NewHome;



const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-white transition duration-300 ease-in-out transform hover:scale-105">
      <div className="absolute rounded-lg pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-center items-center p-6   rounded-lg">
        <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16 dark:bg-primary-900">
          {icon}
        </div>
        <h3 className="mb-2 text-2xl font-bold dark:text-white text-center">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center text-xl">{description}</p>
      </div>
    </div>
    );
  }