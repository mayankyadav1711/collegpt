import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section className="home-grid h-screen">
        <section className="flex items-center justify-center text-center h-full">
          <div className="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-52 lg:px-12 mb-16">
            <Link
              to="/"
              className="inline-flex justify-between items-center py-1 px-1 mb-12 text-xl lg:text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-4xl lg:text-2xl bg-primary-600 rounded-full text-white px-8 lg:px-4 py-3.5 lg:py-1.5 mr-3">
                404
              </span>
              <span className="text-4xl lg:text-2xl font-medium">
                Page Not Found 🚫
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-9xl dark:text-white">
              Oops! Lost in Space?
            </h1>
            <p className="mb-16 text-5xl font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable. Please check the URL or
              return to the home page.
            </p>
            <div className="flex flex-col justify-center gap-8 md:flex-row">
              <div className="flex justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row">
                <Link
                  to="/"
                  className="text-5xl lg:text-3xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Home Page
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
              <div className="flex justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="text-5xl lg:text-3xl flex justify-center items-center lg:py-3 py-8 px-12 lg:px-12 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Contact Us
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
        </section>
      </section>
    </>
  );
};

export default PageNotFound;
