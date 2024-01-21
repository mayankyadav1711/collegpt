/* eslint-disable no-loop-func */
import React, {  useEffect } from "react";

import handledarkmode from "./handledarkmode";

const Welcome_Message = () => {
  useEffect(() => {
    handledarkmode();
    const typedTextSpan = document.querySelector(".welcome-typed-text");
    const cursorSpan = document.querySelector(".welcome-cursor");

    const textArray = [
      "Xclusive Notes",
      "Handy Cheatsheets",
      "Expert Roadmaps",
      "Event Calendar",
      "Supportive Community",
    ];
    const typingDelay = 80;
    const erasingDelay = 80;
    const newTextDelay = 800;
    let textArrayIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("welcome-typing"))
          cursorSpan.classList.add("welcome-typing");
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("welcome-typing");
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("welcome-typing"))
          cursorSpan.classList.add("welcome-typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("welcome-typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
      }
    };

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  return (
    <>
      <div class="welcome-container">
        <div>
          <h2>Embark on a Journey with </h2>
          <p>
            <span class="welcome-typed-text"></span>
            <span class="welcome-cursor">&nbsp;</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome_Message;
