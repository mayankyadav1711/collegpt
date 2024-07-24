/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable default-case */
import React, { useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_DataScientist = () => {
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
        <h1 class="main-title">Data Scientist Roadmap</h1>

        <div class="slider">
          {/* step -1 */}
          <div class="slide active">
            <div class="slide-container">
              <h2 class="slide-Title"></h2>
              <div class="slide-description">
                <h1 className="roadmap-slide-center"> Step-1</h1>
                <h2 className="roadmap-slide-center-subtitle"> Foundation</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Mathematics and Statistics</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master linear algebra, calculus, and probability theory.
                  </li>
                  <li>
                    Learn statistical concepts and hypothesis testing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Programming Languages</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn Python or R for data analysis and modeling.
                  </li>
                  <li>
                    Understand SQL for database querying.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Data Manipulation and Analysis</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master libraries like Pandas, NumPy, and dplyr.
                  </li>
                  <li>
                    Learn data cleaning and preprocessing techniques.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Data Visualization</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn tools like Matplotlib, Seaborn, or ggplot2.
                  </li>
                  <li>Understand principles of effective data visualization.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Machine Learning Fundamentals</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Supervised Learning</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn regression and classification algorithms.
                  </li>
                  <li>
                    Understand model evaluation and validation techniques.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Unsupervised Learning</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Study clustering and dimensionality reduction techniques.
                  </li>
                  <li>
                    Learn about anomaly detection methods.
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
                <h2 className="roadmap-slide-center-subtitle"> Advanced Machine Learning</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Deep Learning</h2>
              <div class="slide-description">
                <ul>
                  <li>Understand neural networks and their architectures.</li>
                  <li>Learn frameworks like TensorFlow or PyTorch.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Natural Language Processing (NLP)</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn text processing and sentiment analysis.</li>
                  <li>Explore language models and transformers.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Computer Vision</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand image processing and recognition techniques.
                  </li>
                  <li>Learn about convolutional neural networks (CNNs).</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Big Data and Cloud Computing</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Big Data Technologies</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn Hadoop and MapReduce concepts.</li>
                  <li>Understand distributed computing with Apache Spark.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Cloud Platforms</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Familiarize with cloud services (AWS, Azure, or GCP).
                  </li>
                  <li>
                    Learn about cloud-based machine learning services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> Data Engineering Basics</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand data pipelines and ETL processes.
                  </li>
                  <li>Learn about data warehousing concepts.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Advanced Topics and Soft Skills</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Domain Expertise</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Develop knowledge in a specific industry or field.
                  </li>
                  <li>
                    Understand business problems and translate them into data questions.
                  </li>
                  <li>
                    Learn about ethical considerations in data science.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Communication and Storytelling</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Develop skills to present findings to non-technical audiences.
                  </li>
                  <li>Learn data storytelling techniques.</li>
                  <li>
                    Practice creating impactful data-driven presentations.
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
                    knowledge needed to excel as a Data Scientist.
                  </li>
                  <li>
                    Remember to continuously learn, stay updated with industry trends,
                    and work on real-world projects to build your portfolio and
                    expertise in the dynamic field of Data Science.
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

export default Roadmap_DataScientist;
