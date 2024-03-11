// Welcome_Collegpt.js
import React, { useEffect, useState } from "react";
import lightLogo from "./images/lightheader.svg";
import darkLogo from "./images/darkheader.svg";
import handledarkmode from "./handledarkmode";

const Welcome_Collegpt = () => {
  const [logoSrc, setLogoSrc] = useState(lightLogo);

  useEffect(() => {
    handledarkmode(); // Call your existing handledarkmode function

    const handleLogoSource = () => {
      const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
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

  return (
    <>
      <img
        className="welcome-center-container"
        src={logoSrc}
        alt="College GPT"
      />
    </>
  );
};

export default Welcome_Collegpt;
