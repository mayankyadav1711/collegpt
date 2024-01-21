/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import s11 from "./images/Thumbnail/Sem-1/FOP.png";
import s12 from "./images/Thumbnail/Sem-1/Maths-1.png";
import s13 from "./images/Thumbnail/Sem-1/EOC.png";
import s14 from "./images/Thumbnail/Sem-1/EG.png";
import s15 from "./images/Thumbnail/Sem-1/EP.png";
import s16 from "./images/Thumbnail/Sem-1/ES.png";

import s21 from "./images/Thumbnail/Sem-2/OOPC.png";
import s22 from "./images/Thumbnail/Sem-2/Maths-2.png";
import s23 from "./images/Thumbnail/Sem-2/BEEE.png";
import s24 from "./images/Thumbnail/Sem-2/FME.png";
import s25 from "./images/Thumbnail/Sem-2/BCPS.png";
import s26 from "./images/Thumbnail/Sem-2/WORKSHOP.png";
import s27 from "./images/Thumbnail/Sem-2/IICT.png";

import s31 from "./images/Thumbnail/Sem-3/DSA.png";
import s32 from "./images/Thumbnail/Sem-3/Maths-3.png";
import s33 from "./images/Thumbnail/Sem-3/DBMS.png";
import s34 from "./images/Thumbnail/Sem-3/DE.png";
import s35 from "./images/Thumbnail/Sem-3/ITW.png";

import s41 from "./images/Thumbnail/Sem-4/OOPJ.png";
import s42 from "./images/Thumbnail/Sem-4/Maths-41.png";
import s43 from "./images/Thumbnail/Sem-4/OS.png";
import s44 from "./images/Thumbnail/Sem-4/COA.png";
import s45 from "./images/Thumbnail/Sem-4/POM.png";

import s51 from "./images/Thumbnail/Sem-5/AJP.png";
import s52 from "./images/Thumbnail/Sem-5/DAA.png";
import s53 from "./images/Thumbnail/Sem-5/SE.png";
import s54 from "./images/Thumbnail/Sem-5/TOC.png";
import s55 from "./images/Thumbnail/Sem-5/CN.png";
import s56 from "./images/Thumbnail/Sem-5/MAP.jpg";
import s57 from "./images/Thumbnail/Sem-5/Python.png";
import s58 from "./images/Thumbnail/Sem-5/SOA.jpg";

// import handledarkmode from "./handledarkmode";
const  Courses = () =>{
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // handledarkmode();
  }, []);
  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab !== null) {
      setActiveTab(parseInt(storedActiveTab, 10));
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Save the active tab index to localStorage when a tab is clicked
    localStorage.setItem("activeTab", index);
  };

  // Define the content for each semester
  const tabContents = [
    // Content for Semester 1 (Tab 0)
    <ul className="tab-content">
      <li class="active">
        <h1 className="heading">Semester 1</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              {/*  */}
              <div className="info">
              <h3 className="title">Fundamental Of Programming</h3>
                
              </div>
            </div>
            <div className="thumb" data-title="Fundamental Of Programming">
              <img src={s11} alt="/" />
              <span>7 Units</span>
            </div>
           
            <Link to="/sem_1_fop_units">
              {" "}
              <a class="inline-btn">View Units</a>
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              {/* <img src={profilepiccs} alt="" /> */}
              <div className="info">
            <h3 className="title">Engineering Mathematics – 1</h3>
                
              </div>
            </div>
            <div className="thumb" data-title="Engineering Mathematics – 1">
              <img src={s12} alt="" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_1_maths_units">
              <a className="inline-btn">View Units</a>
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Elements Of Civil Engineering</h3>
              </div>
            </div>
            <div className="thumb" data-title="Elements Of Civil Engineering">
              <img src={s13} alt="" />
              <span>10 Units</span>
            </div>
            <Link to="/sem_1_eoc_units">
              <a className="inline-btn">View Units</a>
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Engineering Graphics</h3>
              </div>
            </div>
            <div className="thumb" data-title="Engineering Graphics">
              <img src={s14} alt="" />
              <span>12 Units</span>
            </div>
            <Link to="/sem_1_eg_units">
              <a className="inline-btn">View Units</a>
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Engineering Physics</h3>
              </div>
            </div>
            <div className="thumb" data-title="Engineering Physics">
              <img src={s15} alt="" />
              <span>10 Units</span>
            </div>
            <Link to="/sem_1_ep_units">
              <a className="inline-btn">View Units</a>
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Enviromental Science</h3>
              </div>
            </div>
            <div className="thumb" data-title="Enviromental Science">
              <img src={s16} alt="" />
              <span>5 Units</span>
            </div>
            <Link to="/sem_1_es_units">
              <a className="inline-btn">View Units</a>
            </Link>
          </div>
        </div>
      </li>
    </ul>,
    // Content for Semester 2 (Tab 1)
    <ul className="tab-content">
      <li>
        <h1 className="heading">Semester 2</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Object Oriented Programming Using 'C++'</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s21} alt="/" />
              <span>10 Units</span>
            </div>
            <Link to="/sem_2_oopc_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Engineering Mathematics – 2</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s22} alt="" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_2_maths_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Basic Electrical and Electronics Engineering
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s23} alt="" />
              <span>8 Units</span>
            </div>
              
            <Link to="/sem_2_beee_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Fundamental Of Mechanical Engineering</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s24} alt="" />
              <span>15 Units</span>
            </div>
            <Link to="/sem_2_fme_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Business communication and presentation skills
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s25} alt="" />
              <span>13 Units</span>
            </div>
              
            <Link to="/sem_2_bcps_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Workshop [Only Labs]</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s26} alt="" />
              <span># Units</span>
            </div>
            <Link to="/sem_2_workshop_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Introduction To Information & Communication Technology
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s27} alt="" />
              <span># Units</span>
            </div>
              
            <Link to="/watchvideo/iict">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
        </div>
      </li>
    </ul>,
    // Content for Semester 3 (Tab 2)
    <ul className="tab-content">
      <li>
        <h1 className="heading">Semester 3</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Data Structures & Algorithms</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s31} alt="/" />
              <span>6 Units</span>
            </div>
            <Link to="/sem_3_dsa_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Discrete Mathematics - 3</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s32} alt="" />
              <span>5 Units</span>
            </div>
            <Link to="/sem_3_maths_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Database Management Systems</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s33} alt="" />
              <span>10 Units</span>
            </div>
            <Link to="/sem_3_dbms_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Digital Electronics</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s34} alt="" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_3_de_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">IT Workshop</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s35} alt="" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_3_itw_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
        </div>
      </li>
    </ul>,
    // Content for Semester 4 (Tab 3)
    <ul className="tab-content">
      <li>
        <h1 className="heading">Semester 4</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Object Oriented Programming Using Java</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s41} alt="/" />
              <span>8 Units</span>
            </div>
            <Link to="/sem_4_oopj_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Probability, Statistics and Numerical Methods
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s42} alt="" />
              <span>7 Units</span>
            </div>
              
            <Link to="/sem_4_psnm_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Operating Systems</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s43} alt="" />
              <span>6 Units</span>
            </div>
            <Link to="/sem_4_os_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Computer Organization & Architecture</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s44} alt="" />
              <span>6 Units</span>
            </div>
            <Link to="/sem_4_coa_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Principles of Management</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s45} alt="" />
              <span>5 Units</span>
            </div>
            <Link to="/sem_4_pom_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
        </div>
      </li>
    </ul>,
    // Content for Semester 5 (Tab 4)
    <ul className="tab-content">
      <li>
        <h1 className="heading">Semester 5</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Advanced Java Programming</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s51} alt="/" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_5_ajp_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Design & Analysis of Algorithms</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s52} alt="" />
              <span>8 Units</span>
            </div>
            <Link to="/sem_5_daa_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Software Engineering</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s53} alt="" />
              <span>10 Units</span>
            </div>
            <Link to="/sem_5_se_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Theory of Computation</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s54} alt="" />
              <span>8 Units</span>
            </div>
            <Link to="/sem_5_toc_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Computer Networks</h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s55} alt="" />
              <span>7 Units</span>
            </div>
            <Link to="/sem_5_cn_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>

          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Microprocessor Architecture and Programming
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s56} alt="" />
              <span>7 Units</span>
            </div>
              
            <Link to="/sem_5_map_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Python Programming
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s57} alt="" />
              <span>6 Units</span>
            </div>
              
            <Link to="/sem_5_python_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              
              <div className="info">
            
            <h3 className="title">Service Oriented Architecture
            </h3>
              </div>
            </div>
            <div className="thumb">
              <img src={s58} alt="" />
              <span>6 Units</span>
            </div>
              
            <Link to="/sem_5_soa_units">
              {" "}
              <a class="inline-btn">View Units</a>{" "}
            </Link>
          </div>
        </div>
      </li>
    </ul>,
  ];
  return (
    <>
      <section className="courses">
        <ul id="tabs">
          <li
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            <h3>Sem 1</h3>
          </li>
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <h3>Sem 2</h3>
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <h3>Sem 3</h3>
          </li>
          <li
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            <h3>Sem 4</h3>
          </li>
          <li
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            <h3>Sem 5</h3>
          </li>
        </ul>

        {/* Render the content based on the active tab */}
        {tabContents[activeTab]}
      </section>
    </>
  );
}

export default Courses;
