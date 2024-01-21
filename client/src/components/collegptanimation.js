/* eslint-disable no-loop-func */
import React, {  useEffect } from "react";

import handledarkmode from "./handledarkmode";

const Welcome_Collegpt = () => {
  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>
      <div className="welcome-center-container">
        
        <button class="buttongpt">

            <text
              className="welcome-text"
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              CoLLe<tspan className="welcome-gpt">GPT</tspan>
            </text>
            </button>
        
      </div>
    </>
  );
};

export default Welcome_Collegpt;