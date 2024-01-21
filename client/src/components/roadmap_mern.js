/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-undef */
/* eslint-disable default-case */
import React, {  useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_Mern = () => {
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
        <h1 class="main-title">MERN Stack Roadmap</h1>

        <div class="slider">
          {/* step -1 */}
          <div class="slide active">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-1</h1>
                <h2 className="roadmap-slide-center-subtitle">
                  Fundamentals and Web Development Basics
                </h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Understand How the Web Works</h2>
              <div class="slide-description">
                <ul>
                  <li className="list-roadmap">
                    HTTP: Protocol for web communication, using methods like GET
                    and POST to exchange data.
                  </li>
                  <li>
                    {" "}
                    URLs: Web addresses containing protocol, domain, and path to
                    locate resources.{" "}
                  </li>
                  <li>
                    Browsers: Software rendering web content via engines,
                    interacting with servers and displaying pages.{" "}
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                {" "}
                Learn HTML5, CSS3 for Building Structured and Styled Web Pages
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    HTML5: Markup language for structuring web content using
                    elements and semantic tags.
                  </li>
                  <li>
                    CSS3: Stylesheet language for designing and layout, applying
                    properties to HTML elements.{" "}
                  </li>
                  <li>
                    Responsive Design: Design approach adapting pages to various
                    screen sizes using media queries.{" "}
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Master JavaScript Fundamentals</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Variables: Containers storing data, declared with var, let,
                    or const keywords.
                  </li>
                  <li>
                    Control Structures: Conditional statements (if), loops (for,
                    while), and switches for code flow.{" "}
                  </li>
                  <li>
                    Functions: Blocks of reusable code, with parameters, return
                    values, and scope.{" "}
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                Study Version Control Systems (Git) and Code Collaboration
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Version Control: Method to track code changes, manage
                    history, and collaborate.
                  </li>
                  <li>
                    Git: Distributed version control system with commands for
                    committing, branching, and merging.{" "}
                  </li>
                  <li>
                    Code Collaboration: Online platforms (GitHub, GitLab)
                    hosting repositories, enabling teamwork through pull
                    requests and code reviews.{" "}
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
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
                <h2 className="roadmap-slide-center-subtitle"> Backend Development with Node.js and Express.js</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                {" "}
                Get Familiar with Node.js Fundamentals
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Modules: Encapsulate functionality in files, allowing code
                    organization and reusability.
                  </li>
                  <li>
                    {" "}
                    npm (Node Package Manager): Tool to manage and share
                    packages, including libraries and tools.{" "}
                  </li>
                  <li>
                    Event Loop: Core concept in Node.js handling asynchronous
                    operations, enabling non-blocking I/O.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                {" "}
                Learn about Express.js Framework and Middleware Concepts:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Express.js: Web application framework simplifying
                    server-side development with routing and middleware.
                  </li>
                  <li>
                    Middleware: Functions handling requests and responses,
                    enabling features like logging and authentication.
                  </li>
                  <li>
                    Routing: Define routes for handling different HTTP methods
                    (GET, POST, etc.) and URLs.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">
                Build RESTful APIs Using Express.js for CRUD Operations:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    RESTful APIs: Design principles for creating web services
                    with clear routes and HTTP methods.
                  </li>
                  <li>
                    CRUD Operations: Create, Read, Update, and Delete data using
                    corresponding HTTP actions.
                  </li>
                  <li>
                    Express Routing: Define routes for different endpoints,
                    implementing controllers for each operation.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                Implement User Authentication and Authorization (JWT, OAuth):
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    User Authentication: Verify user identity through
                    credentials or tokens, ensuring secure access.
                  </li>
                  <li>
                    JWT (JSON Web Tokens): Compact, self-contained tokens for
                    securely transmitting information between parties.
                  </li>
                  <li>
                    OAuth: Framework for delegated authorization, allowing
                    third-party apps to access resources on behalf of users
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                Explore Database Concepts and Connect to MongoDB Using Mongoose:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Databases: Structured storage systems for data persistence
                    and retrieval.
                  </li>
                  <li>
                    MongoDB: NoSQL database using JSON-like documents, providing
                    flexibility and scalability.
                  </li>
                  <li>
                    Mongoose: ODM (Object-Document Mapping) library simplifying
                    interaction with MongoDB, defining models and schemas.rs
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
                <h2 className="roadmap-slide-center-subtitle"> Frontend Development with React.js</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Understand React.js Fundamentals</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Components: Modular building blocks for UI elements,
                    encapsulating behavior and rendering.
                  </li>
                  <li>
                    Props: Data passed from parent to child components, enabling
                    dynamic content.
                  </li>
                  <li>
                    State: Internal data managed by components, used for dynamic
                    updates and rendering.
                  </li>
                  <li>
                    JSX: Syntax extension for JavaScript, allowing HTML-like
                    elements in React code for UI rendering.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                {" "}
                Learn About React Router for Client-Side Routing:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    React Router: Library for handling navigation and routing in
                    single-page applications.
                  </li>
                  <li>
                    Routing: Managing different views and URLs without full-page
                    reloads, enhancing user experience.
                  </li>
                  <li>
                    Route Components: Define routes and associated components,
                    enabling conditional rendering.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">
                Handle State Management with Tools Like React Context or Redux:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    State Management: Efficiently manage and share data between
                    components, maintaining a single source of truth.
                  </li>
                  <li>
                    React Context: Built-in solution for prop drilling,
                    providing a way to share state globally.
                  </li>
                  <li>
                    Redux: External library for predictable state management,
                    utilizing a central store and reducers
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                Study Form Handling and Validation in React:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Form Handling: Capture user input and manage form state for
                    data submission.
                  </li>
                  <li>
                    Form Components: Create controlled components, binding input
                    values to state.
                  </li>
                  <li>
                    Validation: Ensure input data meets specified criteria,
                    providing user-friendly feedback.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
                Practice Responsive Web Design and CSS-in-JS Libraries:
              </h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Responsive Web Design: Designing layouts that adapt to
                    different screen sizes and devices.
                  </li>
                  <li>
                    Media Queries: Use CSS media queries to apply styles based
                    on screen characteristics.
                  </li>
                  <li>
                    CSS-in-JS Libraries: Implement styling using JavaScript,
                    enabling dynamic and scoped styles for components.
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
                <h className="roadmap-slide-center-subtitle"> Final Step</h>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Connecting Backend and Frontend:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    API Integration: Utilize HTTP requests to connect frontend
                    (React) with backend (Node.js, Express).
                  </li>
                  <li>
                    Fetch and Axios: Use libraries to perform GET, POST, PUT,
                    DELETE requests to API endpoints.
                  </li>
                  <li>
                    CORS Handling: Ensure Cross-Origin Resource Sharing
                    permissions for secure data exchange.
                  </li>
                  <li>
                    JSX: Syntax extension for JavaScript, allowing HTML-like
                    elements in React code for UI rendering.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Advanced Backend Concepts:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Middleware Chains: Build complex API workflows with multiple
                    middleware functions.
                  </li>
                  <li>
                    Authentication Strategies: Explore OAuth2, Passport.js for
                    secure user login and API access.
                  </li>
                  <li>
                    Real-time Communication: Implement WebSockets (Socket.io)
                    for instant data updates.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Advanced Frontend Concepts:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Hooks: Utilize useState, useEffect, useContext for better
                    component organization.
                  </li>
                  <li>
                    Client-side Routing: Implement nested routes, route guards
                    for more sophisticated navigation.
                  </li>
                  <li>
                    Performance Optimization: Lazy loading, memoization, and
                    PureComponent for efficient rendering
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Testing and Debugging:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Unit Testing: Write tests using libraries like Jest to
                    ensure individual components work as expected.
                  </li>
                  <li>
                    Integration Testing: Test interactions between frontend and
                    backend, simulating real scenarios.
                  </li>
                  <li>
                    Debugging Tools: Utilize browser DevTools, React DevTools,
                    and server logs for issue resolution.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Deployment and Cloud Services:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Netlify, Vercel, Render: Deploy frontend and backend
                    applications using user-friendly platforms.
                  </li>
                  <li>
                    Domain Configuration: Link custom domains, enable HTTPS for
                    secure connections.
                  </li>
                  <li>
                    Cloud Services (AWS, Firebase): Explore cloud solutions for
                    scalable, managed hosting and databases.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Project Development:</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Planning and Architecture: Define project scope, user
                    stories, and choose an architecture pattern (MVC,
                    Microservices).
                  </li>
                  <li>
                    Version Control: Collaborate on Git platforms, follow Git
                    Flow for organized code management.
                  </li>
                  <li>
                    Continuous Integration and Deployment (CI/CD): Set up
                    pipelines for automated testing and deployment to ensure
                    code quality and consistency.
                  </li>
                  {/* <li>Nulla dignissim ligula nec faucibus feugiat. </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">
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
                    By following this roadmap, you'll acquire the skills needed
                    to become a proficient MERN stack developer.
                  </li>
                  <li>
                    Keep in mind that continuous learning and staying updated
                    with emerging technologies will contribute to your success
                    in the dynamic field of full stack development.
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

export default Roadmap_Mern;
