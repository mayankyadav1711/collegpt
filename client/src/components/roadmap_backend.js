/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable default-case */
import React, { useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_Backend = () => {
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
        <h1 class="main-title">Backend Developer Roadmap</h1>

        <div class="slider">
          {/* step -1 */}
          <div class="slide active">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-1</h1>
                <h2 className="roadmap-slide-center-subtitle"> Lay the Foundation</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Basic Computer Science Concepts</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn algorithms, data structures, and object-oriented
                    programming principles.
                  </li>
                  <li>
                    Understand fundamental concepts of time and space
                    complexity.
                  </li>
                  {/* <li>Study semantic HTML for better accessibility and SEO.</li> */}
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Databases and Database Design</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Study database types (relational, NoSQL, etc.) and their use
                    cases.
                  </li>
                  <li>
                    Learn about data modeling, normalization, and indexing.
                  </li>
                  {/* <li>Understand CSS box model, positioning, and layout.</li> */}
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Programming Languages</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master at least one backend programming language: Java,
                    Python, JavaScript (Node.js), PHP, or Ruby.
                  </li>
                  <li>
                    Understand language features, syntax, and best practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Web Frameworks</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Choose and learn a backend web framework: ASP.NET, Laravel,
                    Ruby on Rails (ROR), Django, or Express.js.
                  </li>
                  <li>Explore routing, middleware, and MVC architecture.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Understand the Webs</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> HTTP and Web Technologies</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Dive into the HTTP protocol, methods, and status codes.
                  </li>
                  <li>
                    Learn about URLs, DNS, and web browsers' role in the
                    client-server communication.
                  </li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> DevOps and Security Concepts</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand containerization (Docker), CI/CD pipelines, and
                    deployment.
                  </li>
                  <li>
                    Explore encryption, authentication, and security best
                    practices.
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
                <h2 className="roadmap-slide-center-subtitle"> Master Backend Development</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Backend Language Proficiency</h2>
              <div class="slide-description">
                <ul>
                  <li>Deepen your knowledge of the chosen backend language.</li>
                  <li>Explore advanced features, libraries, and frameworks.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Backend Framework Mastery</h2>
              <div class="slide-description">
                <ul>
                  <li>Dive deeper into your chosen backend framework.</li>
                  <li>Build RESTful APIs and implement CRUD operations.</li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Web Security Fundamentals</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about authentication, authorization, encryption, and
                    secure coding practices.
                  </li>
                  <li>Implement security measures to protect user data.</li>

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
                <h2 className="roadmap-slide-center-subtitle"> Advanced Concepts</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Version Control Systems (VCS)</h2>
              <div class="slide-description">
                <ul>
                  <li>Master Git for code versioning and collaboration.</li>
                  <li>Understand branching, merging, and pull requests.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Architectural Patterns</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Study common architectural patterns like MVC, Microservices,
                    and Serverless.
                  </li>
                  <li>
                    Apply appropriate patterns based on project requirements.
                  </li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> APIs and Integration</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Explore different types of APIs: RESTful, SOAP, and GraphQL.
                  </li>
                  <li>Learn how to integrate with third-party APIs.</li>

                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> Webhooks and Real-time Communication</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about webhooks and how to implement real-time
                    communication.
                  </li>
                  <li>Build features like notifications using webhooks.</li>

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
                <h2 className="roadmap-slide-center-subtitle"> Final Step</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Build a Strong Portfolio</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Build a personal portfolio website to showcase your projects
                    and skills.
                  </li>
                  <li>
                    Create diverse and meaningful projects showcasing backend
                    skills.
                  </li>
                  <li>
                    Contribute to open-source projects or collaborate with
                    others.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Certification and Internship</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Consider earning relevant certifications in backend
                    technologies.
                  </li>
                  <li>Apply for internships to gain real-world experience.</li>

                  <li>
                    Learn from experienced professionals and contribute to real
                    projects.
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
                    By Following this roadmap will equip you with the skills and
                    knowledge needed to excel as a backend developer.
                  </li>
                  <li>
                    Continuously learning, staying updated with industry trends,
                    and contributing to your professional network will help you
                    thrive in the dynamic field of backend development.
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

export default Roadmap_Backend;
