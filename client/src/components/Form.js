import React, { useState, useEffect } from "react";
import mayank from "./images/mayank.png";
const Form = () => {
  

  return (
    <>
      <>
        {/* Your existing form code */}

        <section class="flex items-center justify-center min-h-screen">
          <div class="max-w-screen w-full px-4 py-8 mx-auto lg:py-16">
            <h2 class="mb-4 text-6xl font-bold text-center text-gray-900 dark:text-white mt-28">
              Portfolio Form
            </h2>
            <h2 class="mb-0 text-4xl font-bold text-gray-900 dark:text-white">
              Selected Template:
            </h2>
            <div className="flex items-center justify-center">
    <img src={mayank} alt="Your Photo" className="w-96 h-xl rounded" />
</div>
<div className="flex items-center justify-center mt-4">
    <p className="text-xl text-gray-900 dark:text-white">Price: Rs 2999</p>
</div>

            <form action="#">
              <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Name<span>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="w-full">
                <label
                    for="name"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Email<span>*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div class="w-full">
                <label
                    for="contact"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Contact No.:<span>*</span>{" "}
                  </label>
                  <input
                    type="number"
                    // name="contact"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Enter Contact No."
                    required
                  />
                </div>
                <div>
                <label
                    for="document"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Document:<span>*</span>{" "}
                  </label>
                  <input
                    type="file"
        name="document"
        accept=".docx,.pdf"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Enter Contact No."
                    required
                  />
                  <p className="mt-2 text-2xl dark:text-white">NOTE: Include the photos if you want...</p>
                </div>
                <div>
                <label
                    for="photo"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Upload Photo:
                    
                  </label>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
    <div className="flex items-center">
        <input
            type="checkbox"
            id="Light-Dark Mode"
            name="Light-Dark Mode"
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600 focus:ring-primary-500 dark:bg-gray-600 dark:bg-opacity-100"
        />
        <div className="w-96"> {/* Set a consistent width here */}
            <label
                htmlFor="Light-Dark Mode"
                className="text-3xl text-gray-900 dark:text-white"
            >
                Light-Dark Mode <br /><p className="text-2xl text-primary-500"> Rs 349 </p>
            </label>
        </div>
    </div>
    <div className="flex items-center">
        <input
            type="checkbox"
            id="contactus"
            name="contactus"
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600 focus:ring-primary-500 dark:bg-gray-600 dark:bg-opacity-100"
        />
        <div className="w-xl"> {/* Set a consistent width here */}
            <label
                htmlFor="contactus"
                className="text-3xl text-gray-900 dark:text-white"
            >
                Contact Us Form (Email Update) <br /><p className="text-2xl text-primary-500"> Rs 349 </p>
            </label>
        </div>
    </div>
</div>
<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
    <div className="flex items-center">
        <input
            type="checkbox"
            id="domainsetup"
            name="domainsetup"
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600 focus:ring-primary-500 dark:bg-gray-600 dark:bg-opacity-100"
        />
        <div className="w-96"> {/* Set a consistent width here */}
            <label
                htmlFor="domainsetup"
                className="text-3xl text-gray-900 dark:text-white"
            >
                Domain Setup <br /> (on your own domain) <br /><p className="text-2xl text-primary-500"> Rs 449 </p>
            </label>
        </div>
    </div>
    <div className="flex items-center">
    <input
    type="checkbox"
    id="logo"
    name="logo"
    className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600 focus:ring-primary-500 dark:bg-gray-600 dark:bg-opacity-100"
/>

        <div className="w-xl"> {/* Set a consistent width here */}
            <label
                htmlFor="logo"
                className="text-3xl text-gray-900 dark:text-white"
            >
                Personalized Logo <br /><p className="text-2xl text-primary-500"> Rs 249 </p>
            </label>
        </div>
    </div>
</div>


                </div>
                <div class="w-full">
                <label
                    for="name"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Remark:
                  </label>
                  <textarea
                   
                    name="remark"
                    id="remark"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Enter Remark if any"
                    
                  />
                </div>
                <div class="w-full">
                <label
                    for="extra"
                    class="block mb-2 text-4xl font-medium text-gray-900 dark:text-white"
                  >
                    Extra:
                  </label>
                  <textarea
                    name="extra"
                    id="extra"
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline ring-1 ring-gray-500 focus:ring-1 focus:ring-gray-500 focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Anything??Extra...."
                    
                  />
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <button
                  type="submit"
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Update product
                </button>
                <button
                  type="button"
                  class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <svg
                    class="w-5 h-5 mr-1 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    </>
  );
};

export default Form;
