/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable default-case */
import React, { useEffect } from "react";
import { gsap } from "gsap";

import $ from "jquery";

import handledarkmode from "./handledarkmode";

const Roadmap_Devops = () => {
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
        <h1 class="main-title">DevOps Developer Roadmap</h1>

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
              <h2 class="slide-Title"> Basic Programming and Scripting</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn a programming language like Python or Go.
                  </li>
                  <li>
                    Master shell scripting (Bash, PowerShell).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Operating Systems and Networking</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand Linux/Unix systems and basic administration.
                  </li>
                  <li>
                    Learn networking concepts (TCP/IP, DNS, HTTP/S).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Version Control Systems</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Master Git for code versioning and collaboration.
                  </li>
                  <li>
                    Learn about branching strategies and workflows.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Cloud Platforms</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Familiarize yourself with major cloud providers (AWS, Azure, GCP).
                  </li>
                  <li>Understand cloud services and deployment models.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Core DevOps Practices</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Continuous Integration and Continuous Deployment (CI/CD)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn CI/CD principles and best practices.
                  </li>
                  <li>
                    Master tools like Jenkins, GitLab CI, or GitHub Actions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Infrastructure as Code (IaC)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn configuration management tools (Ansible, Puppet, Chef).
                  </li>
                  <li>
                    Master infrastructure provisioning (Terraform, CloudFormation).
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
                <h2 className="roadmap-slide-center-subtitle"> Containerization and Orchestration</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title">Containerization</h2>
              <div class="slide-description">
                <ul>
                  <li>Master Docker for containerizing applications.</li>
                  <li>Understand container concepts and best practices.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Container Orchestration</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn Kubernetes for container orchestration.</li>
                  <li>Explore other orchestration tools like Docker Swarm.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title">Microservices Architecture</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand microservices principles and design patterns.
                  </li>
                  <li>Learn about service discovery and API gateways.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Monitoring and Observability</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Logging and Monitoring</h2>
              <div class="slide-description">
                <ul>
                  <li>Learn about centralized logging (ELK stack, Splunk).</li>
                  <li>Understand monitoring tools (Prometheus, Grafana).</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Application Performance Monitoring (APM)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Explore APM tools like New Relic or Datadog.
                  </li>
                  <li>
                    Learn about tracing and profiling applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide ">
            <div class="slide-container">
              <h2 class="slide-Title"> Alerting and Incident Management</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Set up alerting systems and on-call rotations.
                  </li>
                  <li>Learn about incident response and postmortems.</li>
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
                <h2 className="roadmap-slide-center-subtitle"> Advanced Topics and Best Practices</h2>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Security and Compliance</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Learn about DevSecOps principles and practices.
                  </li>
                  <li>
                    Understand security scanning and compliance automation.
                  </li>
                  <li>
                    Explore tools like SonarQube and OWASP ZAP.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="slide-container">
              <h2 class="slide-Title"> Site Reliability Engineering (SRE)</h2>
              <div class="slide-description">
                <ul>
                  <li>
                    Understand SRE principles and practices.
                  </li>
                  <li>Learn about service level objectives (SLOs) and error budgets.</li>
                  <li>
                    Implement chaos engineering practices.
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
                    knowledge needed to excel as a DevOps developer.
                  </li>
                  <li>
                    Remember to continuously learn, stay updated with industry trends,
                    and contribute to your professional network to thrive in the
                    dynamic field of DevOps.
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

export default Roadmap_Devops;
