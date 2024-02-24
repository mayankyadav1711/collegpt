/* eslint-disable no-loop-func */
import React, {  useEffect } from "react";
import logo from "./images/collegpt2.svg";
import handledarkmode from "./handledarkmode";

const Welcome_Collegpt = () => {
  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>


<img className="welcome-center-container" src={logo} alt="College GPT" />

    </>
  );
};

export default Welcome_Collegpt;