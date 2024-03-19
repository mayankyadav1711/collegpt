/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/Vector.png";

import lightLogo from "./images/lightheader.svg";
import darkLogo from "./images/darkheader.svg";
import handledarkmode from "./handledarkmode";
import toast from 'react-hot-toast';

const Footer = () => {
    const [logoSrc, setLogoSrc] = useState(lightLogo);

    useEffect(() => {
        handledarkmode(); // Call your existing handledarkmode function

        const handleLogoSource = () => {
            const isDarkModeEnabled =
                localStorage.getItem("dark-mode") === "enabled";
            setLogoSrc(isDarkModeEnabled ? darkLogo : lightLogo);
        };

        // Call the function initially
        handleLogoSource();

        // Periodically check the local storage for changes
        const intervalId = setInterval(() => {
            handleLogoSource();
        }, 500); // Adjust the interval as needed

        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handlesubscribe = (e) => {
        e.preventDefault();
        toast.success("Subscribed Successfully")
    };

    return (
        <>
        <footer class="footer-section ">
        <div class="container mx-auto px-4 sm:px-10 py-8 lg:flex lg:justify-center">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-40">
            {/* Left side: Logo and contact info */}
            <div class="flex flex-col space-y-5">
                                        {/* <h3 className="text-3xl font-bold  text-gray-900 dark:text-white">ColleGPT</h3> */}
                    <Link to="/">
                    <div className=" text-gray-900 dark:text-white">
    <span
      style={{ fontSize: "4rem" }}
      className="flex items-center font-bold"
    >
      <span>C</span>
      <img
        src={logo}
        className="inline align-middle h-auto mx-1 md:mx-2"
        alt="Logo"
        style={{ height: "2.75rem", width: "2.75rem" }}
      />
      <span>LLEGPT</span>
    </span>
  </div></Link>
                    <div className="mt-4 text-xl text-gray-900 dark:text-white">
                        <p><Link to="mailto:collegpt@gmail.com">Mail Us: collegpt@gmail.com</Link></p>
                    </div>
                </div>

                {/* Middle: Subscribe box and navigation links */}
                <div class="flex flex-col items-center space-y-5 sm:space-y-0 space-x-2 lg:space-x-2">
                                        <div className="mb-4">
                        <form onSubmit={handlesubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-gray-400 text-2xl"
                            />
                            <button className="px-4 py-2 bg-[#12b8ff] text-white rounded-lg ml-2 text-2xl">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div class="flex justify-center mt-2 sm:justify-center ml-7 sm:mt-0">
                        <a
                            href="https://www.linkedin.com/in/collegpt/" target="_blank" rel="noreferrer"
                            class="text-blue-700 hover:text-blue-900 dark:hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 48 48">
                                <path
                                    fill="#0288D1"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                <path
                                    fill="#FFF"
                                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                            <span class="sr-only">LinkedIn page</span>
                        </a>
                        <a
                            href="https://twitter.com/ColleGPT" target="_blank" rel="noreferrer"
                            class="text-blue-500 hover:text-blue-700 dark:hover:text-white  ms-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 48 48">
                                <path
                                    fill="#00000"
                                    fill-rule="evenodd"
                                    d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                                    clip-rule="evenodd"></path>
                                <path
                                    fill="#fff"
                                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
                                <polygon
                                    fill="#fff"
                                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
                                <polygon
                                    fill="#fff"
                                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="https://www.instagram.com/collegpt?igsh=aXFjNTQzemI3eGVx" target="_blank" rel="noreferrer"
                            class="text-purple-700   hover:text-purple-900 dark:hover:text-white ms-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 48 48">
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                    cx="19.38"
                                    cy="42.035"
                                    r="44.899"
                                    gradientUnits="userSpaceOnUse">
                                    <stop
                                        offset="0"
                                        stop-color="#fd5"></stop>
                                    <stop
                                        offset=".328"
                                        stop-color="#ff543f"></stop>
                                    <stop
                                        offset=".348"
                                        stop-color="#fc5245"></stop>
                                    <stop
                                        offset=".504"
                                        stop-color="#e64771"></stop>
                                    <stop
                                        offset=".643"
                                        stop-color="#d53e91"></stop>
                                    <stop
                                        offset=".761"
                                        stop-color="#cc39a4"></stop>
                                    <stop
                                        offset=".841"
                                        stop-color="#c837ab"></stop>
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                    cx="11.786"
                                    cy="5.54"
                                    r="29.813"
                                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                    gradientUnits="userSpaceOnUse">
                                    <stop
                                        offset="0"
                                        stop-color="#4168c9"></stop>
                                    <stop
                                        offset=".999"
                                        stop-color="#4168c9"
                                        stop-opacity="0"></stop>
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <path
                                    fill="#fff"
                                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                <circle
                                    cx="31.5"
                                    cy="16.5"
                                    r="1.5"
                                    fill="#fff"></circle>
                                <path
                                    fill="#fff"
                                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                            <span class="sr-only">Instagram page</span>
                        </a>

                        <a
                            href="https://chat.whatsapp.com/KKbEWaxNaxt1OI9EVtJxm9" target="_blank" rel="noreferrer"
                            class="text-green-600 hover:text-green-800 dark:hover:text-white pl-4 ms-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 48 48">
                                <path
                                    fill="#fff"
                                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                                <path
                                    fill="#fff"
                                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                                <path
                                    fill="#cfd8dc"
                                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path>
                                <path
                                    fill="#40c351"
                                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                                <path
                                    fill="#fff"
                                    fill-rule="evenodd"
                                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">WhatsApp</span>
                        </a>
                    </div>
                    
                </div>

                {/* Right side: Social media links and legal info */}
                <div className="flex lg:justify-between justify-center">
                    <div className="w-5/12 flex flex-col text-2xl">
                    <Link to="/">
                        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                            ColleGPT
                        </h2>
                        </Link>
                        <div className="mt-2">
                            <Link to="/about"
                                className=" hover:text-gray-400 text-gray-900 dark:text-white">
                                About
                                </Link>
                            <br />
                            <Link to="/courses"
                                className=" hover:text-gray-400 text-gray-900 dark:text-white">
                                X-Notes
                            </Link>
                            <br />
                            <Link to="/userlist"
                                className=" hover:text-gray-400 text-gray-900 dark:text-white">
                                Our Community
                            </Link>
                            <br />
                            <Link to="/watchvideo/cs_html"
                                className=" hover:text-gray-400 text-gray-900 dark:text-white">
                                Cheatsheets
                            </Link>
                            <br />
                            <Link to="/roadmap_mern"
                                className="hover:text-gray-400 text-gray-900 dark:text-white">
                                Roadmaps
                            </Link>
                        </div>
                    </div>
                    <div className="w-10/2 flex flex-col text-2xl">
                        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                            Legal
                        </h2>
                        <div className="mt-2">
                            <Link to="/privacy"  className=" hover:text-gray-400 text-gray-900 dark:text-white">
                       
                                    Privacy Policy
                        
                                <br />
                            </Link>
                            <Link to="/term" className=" hover:text-gray-400 text-gray-900 dark:text-white">
                                    Terms & Conditions
                             
                                <br />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="row bg-[#c0e8eb] dark:bg-[#151e3689]">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>
                            Copyright &copy; 2024, All Right Reserved{" "}
                            <a href="www.collegpt.com">ColleGPT</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Footer;
