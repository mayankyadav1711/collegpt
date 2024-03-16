// Welcome_Collegpt.js
import React from "react";

import logo from "./images/Group.svg";
const Welcome_Collegpt = () => {
  return (
    <>
      <div className="welcome-center-container text-gray-900 dark:text-white">
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
      </div>
    </>
  );
};

export default Welcome_Collegpt;