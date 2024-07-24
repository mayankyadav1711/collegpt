/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable default-case */
import React, { useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_MobileDeveloper = () => {
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
        <h1 class="main-title">Android/iOS Developer Roadmap</h1>

        <div class="slider">
          {/* step -1 */}
          <div class="slide active">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-1</h1>
                <h2 className="roadmap-slide-center-subtitle"> Programming Fundamentals</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Choose Your Platform</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Android: Learn Java or Kotlin
                  </li>
                  <li>
                    iOS: Learn Swift or Objective-C
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Object-Oriented Programming (OOP)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand classes, objects, inheritance, and polymorphism
                  </li>
                  <li>
                    Learn design patterns relevant to mobile development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Version Control</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master Git for source code management
                  </li>
                  <li>
                    Learn about branching strategies and collaboration workflows
                  </li>
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
                <h2 className="roadmap-slide-center-subtitle"> Platform-Specific Development</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Android Development</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn Android Studio and Android SDK
                  </li>
                  <li>
                    Understand Android app components and lifecycle
                  </li>
                  <li>
                    Master XML layouts and Material Design principles
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> iOS Development</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn Xcode and iOS SDK
                  </li>
                  <li>
                    Understand iOS app architecture and lifecycle
                  </li>
                  <li>
                    Master Storyboards, Auto Layout, and iOS design guidelines
                  </li>
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
                <h2 className="roadmap-slide-center-subtitle"> Essential Mobile Development Concepts</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">User Interface (UI) Development</h2>
              <div class="slide-description">
                <ul>
                  <li>Master responsive layouts and UI components</li>
                  <li>Learn animations and transitions</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Data Storage and Management</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn SQLite for local data storage</li>
                  <li>Understand shared preferences and file storage</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Networking and APIs</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn RESTful API integration
                  </li>
                  <li>Understand JSON parsing and networking libraries</li>
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
              <h2 class="slide-Title"> App Architecture Patterns</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn MVC, MVP, and MVVM patterns</li>
                  <li>Understand clean architecture principles</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Dependency Injection</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand the concept of dependency injection
                  </li>
                  <li>
                    Learn popular DI frameworks (Dagger for Android, Swinject for iOS)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> Reactive Programming</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn RxJava/RxSwift for reactive programming
                  </li>
                  <li>Understand observables, operators, and schedulers</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Testing and Deployment</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Testing</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn unit testing (JUnit for Android, XCTest for iOS)
                  </li>
                  <li>
                    Understand UI testing and integration testing
                  </li>
                  <li>
                    Explore test-driven development (TDD) practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Continuous Integration and Deployment</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Set up CI/CD pipelines (Jenkins, Fastlane, etc.)
                  </li>
                  <li>Learn about app signing and distribution</li>
                  <li>
                    Understand app store submission processes
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
                    Following this roadmap will equip you with the skills and
                    knowledge needed to excel as an Android or iOS developer.
                  </li>
                  <li>
                    Remember to continuously learn, stay updated with platform changes,
                    and build a portfolio of apps to showcase your skills in the
                    dynamic field of mobile app development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap_MobileDeveloper;
