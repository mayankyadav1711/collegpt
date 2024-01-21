/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Darshit = () => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleButtonClick = (targetSection) => {
    setActiveSection(targetSection);
  };

  return (
    <div className="chakrabody">
      <div
        className={`card ${activeSection === "#about" ? "" : "is-active"}`}
        data-state={activeSection}
      >
        <div className="card-header">
          <div className="card-cover-darshit"></div>
          <img
            className="card-avatar"
            src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg"
            alt="avatar"
          />
          <p className="card-fullname">Darshit Sojitra</p>
          <h2 className="card-jobtitle">Front-End Developer</h2>
        </div>
        <div className="card-main">
          <div
            className={`card-section ${
              activeSection === "#about" ? "is-active" : ""
            }`}
            id="about"
          >
            <div className="card-content">
              <div className="card-subtitle1">ABOUT</div>
              <p className="card-desc">
                Welcome to my website! I'm a 3<sup>rd</sup> year Computer
                Engineering student at LDRP-ITR College, passionate about
                programming and technology.
              </p>
            </div>
            <div class="card-social">
            <ul>
            <li>
              <a href="https://github.com/DPS21302" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/in/darshit-sojitra/"
                target="_blank" rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
              </li>
              <li>
              <a href="#" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
              </a>
              </li>
              <li>
              <a href="https://drive.google.com/file/d/1hxeehUs1XbsN-5L9ytGj5OMf_yf8PDF5/view?usp=drivesdk" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </a>
              </li>
              <li>
              <a
                href="https://www.instagram.com/darshit_sojitraa/"
                target="_blank" rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              </li>
              <li>
              <a
                href="https://twitter.com/DarshitSojitraa?t=B7p7nOVhyLYfc-rmTeWx_g&s=09"
                target="_blank" rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.7778in"
                  height="17.7778in"
                  fill="currentColor"
                  viewBox="0 0 1280 1280"
                >
                  <path
                    id="Selection #3"
                    stroke="black"
                    stroke-width="1"
                    d="M 2.00 40.00 C 2.00 40.00 373.00 40.00 373.00 40.00 376.57 40.01 380.69 39.89 384.00 41.43 389.54 44.01 397.49 55.78 401.37 61.00 401.37 61.00 445.37 120.00 445.37 120.00 445.37 120.00 635.13 374.00 635.13 374.00 635.13 374.00 688.58 446.00 688.58 446.00 688.58 446.00 701.58 464.00 701.58 464.00 702.79 465.66 704.77 468.96 707.09 468.96 709.79 468.96 715.06 462.99 716.91 461.00 716.91 461.00 739.99 436.00 739.99 436.00 739.99 436.00 773.09 400.00 773.09 400.00 773.09 400.00 837.09 331.00 837.09 331.00 837.09 331.00 982.91 174.00 982.91 174.00 982.91 174.00 1042.96 109.00 1042.96 109.00 1042.96 109.00 1090.00 58.00 1090.00 58.00 1100.94 46.92 1102.46 40.03 1119.00 40.00 1119.00 40.00 1221.00 40.00 1221.00 40.00 1215.56 51.09 1197.20 68.01 1188.17 78.00 1188.17 78.00 1115.09 157.00 1115.09 157.00 1115.09 157.00 974.91 309.00 974.91 309.00 974.91 309.00 876.83 415.00 876.83 415.00 876.83 415.00 789.72 509.00 789.72 509.00 789.72 509.00 770.00 530.00 770.00 530.00 767.60 532.43 762.24 537.50 761.98 541.00 761.70 544.64 767.55 551.14 769.79 554.00 769.79 554.00 793.00 585.00 793.00 585.00 793.00 585.00 890.29 715.00 890.29 715.00 890.29 715.00 977.13 831.00 977.13 831.00 977.13 831.00 1076.37 964.00 1076.37 964.00 1076.37 964.00 1163.88 1081.00 1163.88 1081.00 1163.88 1081.00 1241.87 1185.00 1241.87 1185.00 1251.35 1197.64 1274.52 1226.35 1280.00 1239.00 1280.00 1239.00 907.00 1239.00 907.00 1239.00 904.57 1239.00 901.26 1239.13 899.00 1238.26 893.56 1236.16 884.24 1222.15 880.37 1217.00 880.37 1217.00 830.29 1150.00 830.29 1150.00 830.29 1150.00 764.37 1062.00 764.37 1062.00 764.37 1062.00 623.87 874.00 623.87 874.00 623.87 874.00 567.71 799.00 567.71 799.00 567.71 799.00 553.63 780.00 553.63 780.00 552.08 777.99 549.73 774.46 546.96 774.30 543.06 774.06 538.35 780.38 535.91 783.00 535.91 783.00 511.00 810.00 511.00 810.00 511.00 810.00 472.91 851.00 472.91 851.00 472.91 851.00 403.83 926.00 403.83 926.00 403.83 926.00 369.09 963.00 369.09 963.00 369.09 963.00 281.09 1058.00 281.09 1058.00 281.09 1058.00 206.09 1139.00 206.09 1139.00 206.09 1139.00 182.00 1165.00 182.00 1165.00 182.00 1165.00 161.91 1187.00 161.91 1187.00 161.91 1187.00 132.17 1219.00 132.17 1219.00 127.98 1223.63 117.27 1236.25 112.00 1238.26 109.72 1239.13 106.45 1239.00 104.00 1239.00 104.00 1239.00 0.00 1239.00 0.00 1239.00 3.14 1230.81 10.83 1223.21 17.00 1217.00 17.00 1217.00 34.91 1198.00 34.91 1198.00 34.91 1198.00 109.91 1117.00 109.91 1117.00 109.91 1117.00 264.09 950.00 264.09 950.00 264.09 950.00 376.17 829.00 376.17 829.00 376.17 829.00 425.91 776.00 425.91 776.00 425.91 776.00 443.09 757.00 443.09 757.00 443.09 757.00 463.42 735.00 463.42 735.00 463.42 735.00 483.00 714.00 483.00 714.00 485.66 711.33 491.61 705.72 492.23 702.00 492.90 697.97 487.70 692.11 485.37 689.00 485.37 689.00 462.88 659.00 462.88 659.00 462.88 659.00 370.15 535.00 370.15 535.00 370.15 535.00 287.87 425.00 287.87 425.00 287.87 425.00 113.12 191.00 113.12 191.00 113.12 191.00 39.63 93.00 39.63 93.00 39.63 93.00 14.29 59.00 14.29 59.00 9.46 52.26 5.46 47.74 2.00 40.00 Z M 1112.00 1155.00 C 1112.00 1155.00 1053.37 1075.00 1053.37 1075.00 1053.37 1075.00 932.88 914.00 932.88 914.00 932.88 914.00 845.37 797.00 845.37 797.00 845.37 797.00 593.63 460.00 593.63 460.00 593.63 460.00 526.88 371.00 526.88 371.00 526.88 371.00 386.37 183.00 386.37 183.00 386.37 183.00 353.34 139.00 353.34 139.00 353.34 139.00 339.83 124.74 339.83 124.74 339.83 124.74 332.00 124.00 332.00 124.00 332.00 124.00 170.00 124.00 170.00 124.00 170.00 124.00 185.58 146.00 185.58 146.00 185.58 146.00 233.12 210.00 233.12 210.00 233.12 210.00 359.63 379.00 359.63 379.00 359.63 379.00 605.37 708.00 605.37 708.00 605.37 708.00 755.12 908.00 755.12 908.00 755.12 908.00 895.12 1095.00 895.12 1095.00 895.12 1095.00 927.89 1139.00 927.89 1139.00 930.61 1142.53 938.47 1152.70 942.17 1154.26 944.26 1155.14 947.71 1155.00 950.00 1155.00 950.00 1155.00 1112.00 1155.00 1112.00 1155.00 Z"
                  />
                </svg>
              </a>
              </li>
              </ul>
            </div>
          </div>
          <div
            className={`card-section ${
              activeSection === "#experience" ? "is-active" : ""
            }`}
            id="experience"
          >
            <div className="card-content">
              <div className="card-subtitle2">WORK EXPERIENCE</div>
              <div class="card-timeline">
              <div class="card-item" data-year="2023">
                  <div class="card-item-title">
                    <b>Founder, Developer and Content Creator at ColleGPT</b>
                  </div>
                  <div class="card-item-desc">
                  As ColleGPT's founder, I assisted in establishing its mission and set its path while also creating original intellectual content that stimulated the minds of many.
                  </div>
                </div>
                <div class="card-item" data-year="2023">
                  <div class="card-item-title">
                    Top Contributor at Google Crowdsource and Cloud Community by India
                  </div>
                  <div class="card-item-desc">
                  Oct 2022 - Present • Remote • Test Management
                  </div>
                </div>
                <div class="card-item" data-year="2022">
                  <div class="card-item-title">
                    Hackathons
                  </div>
                  <div class="card-item-desc">
                  <p><b>↪</b> E-Challan Payment <b>(SSIP-State Level Finalist)</b></p>
                  <p><b>↪</b> Online Hair Cut Booking System (BTB)</p>
                     
                  </div>
                </div>
                <div class="card-item" data-year="2022">
                  <div class="card-item-title">
                    UI/UX and Logo Designer
                  </div>
                  <div class="card-item-desc">
                    God is a Designer. I am just a tool.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`card-section ${
              activeSection === "#contact" ? "is-active" : ""
            }`}
            id="contact"
          >
            <div class="card-content">
              <div class="card-subtitle3">CONTACT</div>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Ahmedabad, Gujarat, Bharat-382350.
                </div>
                {/* <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 0.00,0.00 0.00,0.00 256.00,0.00 256.00,0.00 256.00,0.00 256.00,256.00 256.00,256.00 256.00,256.00 0.00,256.00 0.00,256.00 0.00,256.00 0.00,0.00 0.00,0.00 Z 88.00,4.30 78.76,6.02 66.46,9.75 59.00,15.53 45.22,26.19 42.22,43.71 40.92,60.00 40.47,65.58 39.86,66.70 40.01,73.00 40.01,73.00 40.97,83.00 40.97,83.00 42.52,111.24 53.38,139.39 66.69,164.00 82.95,194.06 103.28,220.85 133.00,238.80 148.00,247.85 167.42,256.36 185.00,249.91 191.07,247.68 197.06,243.18 202.00,239.08 208.72,233.50 216.66,226.73 215.66,217.00 215.07,211.21 211.15,204.92 208.20,200.00 208.20,200.00 193.68,176.00 193.68,176.00 190.84,171.50 188.17,165.29 182.00,165.21 176.79,165.14 162.54,174.47 157.00,177.08 152.25,179.61 148.66,181.92 144.63,177.08 144.63,177.08 130.75,152.00 130.75,152.00 130.75,152.00 107.75,108.00 107.75,108.00 107.75,108.00 99.78,93.00 99.78,93.00 98.62,90.73 96.96,87.66 97.70,85.04 98.50,82.21 101.62,80.28 104.00,78.88 104.00,78.88 123.00,69.20 123.00,69.20 126.90,67.02 130.96,64.02 130.37,59.00 129.97,55.68 124.09,43.82 122.42,40.00 122.42,40.00 108.37,11.04 108.37,11.04 106.65,8.76 104.55,6.97 102.00,5.69 97.77,3.56 92.59,3.84 88.00,4.30 Z" />
                  </svg>
                  +91 9313465232
                </div> */}

                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  sojitradarshitpiyushbhai@gmail.com
                </div>
                <Link to="mailto:sojitradarshitpiyushbhai@gmail.com"> <button class="contact-me">WORK TOGETHER</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card-buttons">
          <button
            onClick={() => handleButtonClick("#about")}
            className={activeSection === "#about" ? "is-active" : ""}
            data-section="#about"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleButtonClick("#experience")}
            className={activeSection === "#experience" ? "is-active" : ""}
            data-section="#experience"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => handleButtonClick("#contact")}
            className={activeSection === "#contact" ? "is-active" : ""}
            data-section="#contact"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Darshit;
