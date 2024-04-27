import React, { useState, useEffect } from "react";
import mayank from "./images/mayank.webp";
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline  focus:shadow-inner shadow-outer shadow-sm"
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline focus:shadow-inner shadow-outer shadow-sm"
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outlinefocus:shadow-inner shadow-outer shadow-sm"
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline focus:shadow-inner shadow-outer shadow-sm"
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
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600  dark:bg-gray-600 dark:bg-opacity-100"
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
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600  dark:bg-gray-600 dark:bg-opacity-100"
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
            className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600  dark:bg-gray-600 dark:bg-opacity-100"
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
    className="mr-3 h-8 w-8 rounded border border-gray-900 dark:border-gray-900 text-primary-600  dark:bg-gray-600 dark:bg-opacity-100"
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline focus:shadow-inner shadow-outer shadow-sm"
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
                    className="bg-gray-300 dark:bg-gray-600 dark:bg-opacity-25 bg-opacity-30 backdrop-blur-2xl border border-gray-300 text-gray-500 text-3xl rounded-lg   block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white shadow-outline focus:shadow-inner shadow-outer shadow-sm"
                    placeholder="Anything??Extra...."
                    
                  />
                </div>
              </div>
              <div class="flex items-center justify-center align-center space-x-4">
                <button
                  type="submit"
                  class="text-white bg-primary-700 hover:bg-primary-800  focus:outline-none  font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Submit
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
