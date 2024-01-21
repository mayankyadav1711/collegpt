/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable default-case */
import React, {  useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_Frontend = () => {


  useEffect(() => {
    handledarkmode();

    var Slider = (function () {
      var total,
        $slide,
        $slider,
        sliderWidth,
        increment = 120;
      var on = function () {
        $slider = $(".slider");
        $slide = $(".slide");
        sliderWidth = $slider.width();
        total = $slide.length;
        position();
      };

      var position = function () {
        var sign,
          half = $(".active").index(),
          x = 0,
          z = 0,
          zindex,
          scaleX = 1.3,
          scaleY = 1.3,
          transformOrigin;
        $slide.each(function (index, element) {
          scaleX = scaleY = 1;
          transformOrigin = sliderWidth / 2;
          if (index < half) {
            sign = 1;
            zindex = index + 1;
            x = sliderWidth / 2 - increment * (half - index + 1);
            z = -increment * (half - index + 1);
          } else if (index > half) {
            sign = -1;
            zindex = total - index;
            x = sliderWidth / 2 + increment * (index - half + 1);
            z = -increment * (index - half + 1);
          } else {
            sign = 0;
            zindex = total;
            x = sliderWidth / 2;
            z = 1;
            scaleX = scaleY = 1.2;
            transformOrigin = "initial";
          }
          $(element).css({
            transform:
              "translate3d(" +
              calculateX(x, sign, 300) +
              "px, 0," +
              z +
              "px) scale3d(" +
              scaleX +
              "," +
              scaleY +
              ", 1)",
            "z-index": zindex,
            "transform-origin-x": transformOrigin,
          });
        });
      };

      var calculateX = function (position, sign, width) {
        switch (sign) {
          case 1:
          case 0:
            return position - width / 2;
          case -1:
            return position - width / 2;
        }
      };

      var imageSize = function () {
        return $slider.width() / 3;
      };

      var recalculateSizes = function () {
        sliderWidth = $slider.width();
        position();
      };

      var clickedImage = function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        position();
      };

      var addEvents = function () {
        $(window).resize(recalculateSizes);
        $(document).on("click", ".slide", clickedImage);
      };

      return {
        init: function () {
          on();
          addEvents();
        },
      };
    })();

    $(function () {
      var slider = Slider.init();
    });

    document.body.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.05,
      });
    });
    window.onload = function() {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 100);
    };
  
  }, []);

  return (
    <>
      <div class="container-roadmap">
        <div class="background-roadmap">
          <div class="cursor-roadmap"></div>

          <div class="shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>
        <h1 class="main-title">Frontend Developer Roadmap</h1>

        <div class="slider">
          {/* step -1 */}
          <div class="slide active">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-1</h1>
                <h2 className="roadmap-slide-center-subtitle"> Learn the Fundamentals</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> HTML Basics</h2>
              <div class="slide-description">
                <ul>
                  <li>Understand the structure of HTML documents.</li>
                  <li>Learn about HTML tags, elements, and attributes.</li>
                  <li>Study semantic HTML for better accessibility and SEO.</li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">CSS Fundamentals</h2>
              <div class="slide-description">
                <ul>
                  <li>Explore CSS syntax and selectors.</li>
                  <li>
                    Learn how to style text, colors, backgrounds, and borders.
                  </li>
                  <li>Understand CSS box model, positioning, and layout.</li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">JavaScript Essentials</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about data types, operators, and control structures. .{" "}
                  </li>
                  <li>Study functions, arrays, objects, and loops.</li>
                  <li>Master DOM manipulation for dynamic web interactions.</li>

                  <li>Learn about event handling and listeners.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* step -2 */}
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-2</h1>
                <h2 className="roadmap-slide-center-subtitle"> Master Frontend Tools</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> CSS Frameworks</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Choose and learn a popular CSS framework like Bootstrap or
                    Tailwind.
                  </li>
                  <li>
                    Understand grid systems, components, and responsive design.
                  </li>
                  <li>
                    Build a responsive website using the chosen framework..
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">CSS Preprocessors</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn a CSS preprocessor like SASS or LESS.</li>
                  <li>
                    Utilize variables, mixins, nesting, and functions for
                    efficient styling.
                  </li>
                  <li>Compile preprocessor code to standard CSS.</li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">JavaScript Frameworks</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Choose and learn a JavaScript framework like React, Angular,
                    or Vue.js.
                  </li>
                  <li>
                    Understand component-based architecture and state
                    management.
                  </li>
                  <li>Build interactive and dynamic user interfaces.</li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Version Control with Git</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn the basics of version control using Git.</li>
                  <li>
                    Understand concepts like commits, branches, and merges.
                  </li>
                  <li>
                    Collaborate with other developers using Git repositories.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* step -3 */}
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-3</h1>
                <h2 className="roadmap-slide-center-subtitle"> Enhance Your Skillset</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">State Management Libraries</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master a state management library like Redux, VueX, or NgRX.
                  </li>
                  <li>
                    Implement centralized state management in your applications.
                  </li>
                  <li>
                    Handle complex data flows and improve application
                    performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Testing and Quality Assurance</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about testing methodologies and their importance.
                  </li>
                  <li>
                    Write unit tests using testing frameworks like Jest or
                    Mocha.
                  </li>
                  <li>
                    Understand end-to-end testing with tools like Cypress or
                    Selenium.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Website Deployment</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Explore various deployment options like GitHub Pages,
                    Heroku, or Netlify.
                  </li>
                  <li>
                    Deploy your projects to a live environment for public
                    access.
                  </li>
                  <li>
                    Configure domain names, SSL certificates, and continuous
                    integration.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* step -4 */}
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-4</h1>
                <h2 className="roadmap-slide-center-subtitle"> Explore Advanced Topics</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> GraphQL</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about GraphQL and its benefits over traditional REST
                    APIs.
                  </li>
                  <li>
                    Understand schema, queries, mutations, and subscriptions.
                  </li>
                  <li>
                    Implement GraphQL in your frontend projects for efficient
                    data fetching.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Progressive Web Apps (PWAs)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Study PWAs and their capabilities, including offline access
                    and push notifications. Convert a web application into a PWA
                    using service workers and manifest files.
                  </li>
                  <li>
                    Study PWAs and their capabilities, including offline access
                    and push notifications. Convert a web application into a PWA
                    using service workers and manifest files.
                  </li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> Static Site Generators (SSGs)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Explore SSGs like Gatsby, Next.js, or Hugo for static site
                    generation. Build high-performance websites with improved
                    loading speeds.
                  </li>
                  <li>
                    Explore SSGs like Gatsby, Next.js, or Hugo for static site
                    generation. Build high-performance websites with improved
                    loading speeds.
                  </li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* step -5 */}
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-5</h1>
                <h2 className="roadmap-slide-center-subtitle"> Showcase Your Work</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Portfolio Creation</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Build a personal portfolio website to showcase your projects
                    and skills.
                  </li>
                  <li>
                    Include descriptions, screenshots, and links to your
                    completed projects.
                  </li>
                  <li>
                    Highlight your expertise and demonstrate your frontend
                    development abilities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> 2 Networking and Collaboration</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Engage with the frontend developer community through forums,
                    social media, and meetups.
                  </li>
                  <li>
                    Collaborate on open-source projects or contribute to
                    existing repositories.
                  </li>

                  <li>
                    Attend workshops and conferences to stay updated on industry
                    trends.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">
                {" "}
                <b
                  className=" slide-Title"
                  style={{ fontSize: "2.5rem", color: "gold" }}
                >
                  Congratulations!
                </b>
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    By following this roadmap, you'll be well-equipped with the
                    skills and knowledge needed to excel as a frontend
                    developer.
                  </li>
                  <li>
                    Remember that continuous learning and staying updated with
                    the latest technologies are essential to thrive in the
                    dynamic field of frontend development.
                  </li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Roadmap_Frontend;
