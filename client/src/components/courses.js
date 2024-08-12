/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import s11 from "./images/Thumbnail/Sem-1/FOP.webp";
import s12 from "./images/Thumbnail/Sem-1/Maths-1.webp";
import s13 from "./images/Thumbnail/Sem-1/EOC.webp";
import s14 from "./images/Thumbnail/Sem-1/EG.webp";
import s15 from "./images/Thumbnail/Sem-1/EP.webp";
import s16 from "./images/Thumbnail/Sem-1/ES.webp";

import s21 from "./images/Thumbnail/Sem-2/OOPC.webp";
import s22 from "./images/Thumbnail/Sem-2/Maths-2.webp";
import s23 from "./images/Thumbnail/Sem-2/BEEE.webp";
import s24 from "./images/Thumbnail/Sem-2/FME.webp";
import s25 from "./images/Thumbnail/Sem-2/BCPS.webp";
import s26 from "./images/Thumbnail/Sem-2/WORKSHOP.webp";
import s27 from "./images/Thumbnail/Sem-2/IICT.webp";

import s31 from "./images/Thumbnail/Sem-3/DSA.webp";
import s32 from "./images/Thumbnail/Sem-3/Maths-3.webp";
import s33 from "./images/Thumbnail/Sem-3/DBMS.webp";
import s34 from "./images/Thumbnail/Sem-3/DE.webp";
import s35 from "./images/Thumbnail/Sem-3/ITW.webp";

import s41 from "./images/Thumbnail/Sem-4/OOPJ.webp";
import s42 from "./images/Thumbnail/Sem-4/Maths-41.webp";
import s43 from "./images/Thumbnail/Sem-4/OS.webp";
import s44 from "./images/Thumbnail/Sem-4/COA.webp";
import s45 from "./images/Thumbnail/Sem-4/POM.webp";

import s51 from "./images/Thumbnail/Sem-5/AJP.webp";
import s52 from "./images/Thumbnail/Sem-5/DAA.webp";
import s53 from "./images/Thumbnail/Sem-5/SE.webp";
import s54 from "./images/Thumbnail/Sem-5/TOC.webp";
import s55 from "./images/Thumbnail/Sem-5/CN.webp";
import s56 from "./images/Thumbnail/Sem-5/MAP.webp";
import s57 from "./images/Thumbnail/Sem-5/Python.webp";
import s58 from "./images/Thumbnail/Sem-5/SOA.webp";

import s61 from "./images/Thumbnail/Sem-6/AI.webp";
import s62 from "./images/Thumbnail/Sem-6/pyp.webp";
import s63 from "./images/Thumbnail/Sem-6/cns.webp";
import s64 from "./images/Thumbnail/Sem-6/ml.webp";
import s65 from "./images/Thumbnail/Sem-6/ap.webp";
import s66 from "./images/Thumbnail/Sem-6/iot.webp";
import s67 from "./images/Thumbnail/Sem-6/sc.webp";
import s68 from "./images/Thumbnail/Sem-6/is.webp";
import s69 from "./images/Thumbnail/Sem-6/dc.webp";
import s70 from "./images/Thumbnail/Sem-6/ecom.webp";

import s71 from "./images/sample.webp";

// import handledarkmode from "./handledarkmode";
const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
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
  // Define data for semesters
  const semesters = [
    {
      title: "Sem 1",
      courses: [
        { title: "Fundamental Of Programming", units: 7, thumbnail: s11 },
        { title: "Engineering Mathematics – 1", units: 7, thumbnail: s12 },
        { title: "Elements Of Civil Engineering", units: 10, thumbnail: s13 },
        { title: "Engineering Graphics", units: 12, thumbnail: s14 },
        { title: "Engineering Physics", units: 10, thumbnail: s15 },
        { title: "Environmental Science", units: 5, thumbnail: s16 }
      ]
    },
    {
      title: "Sem 2",
      courses: [
        { title: "Object Oriented Programming Using 'C++'", units: 10, thumbnail: s21 },
        { title: "Engineering Mathematics – 2", units: 7, thumbnail: s22 },
        { title: "Basic Electrical and Electronics Engineering", units: 8, thumbnail: s23 },
        { title: "Fundamental Of Mechanical Engineering", units: 15, thumbnail: s24 },
        { title: "Business communication and presentation skills", units: 13, thumbnail: s25 },
        { title: "Workshop [Only Labs]", units: "#", thumbnail: s26 },
        { title: "Introduction To Information & Communication Technology", units: "#", thumbnail: s27 }
      ]
    },
    {
      title: "Sem 3",
      courses: [
        { title: "Data Structures & Algorithms", units: 6, thumbnail: s31 },
        { title: "Discrete Mathematics - 3", units: 5, thumbnail: s32 },
        { title: "Database Management Systems", units: 10, thumbnail: s33 },
        { title: "Digital Electronics", units: 7, thumbnail: s34 },
        { title: "IT Workshop", units: 7, thumbnail: s35 }
      ]
    },
    {
      title: "Sem 4",
      courses: [
        { title: "Object Oriented Programming Using Java", units: 8, thumbnail: s41 },
        { title: "Probability, Statistics and Numerical Methods", units: 7, thumbnail: s42 },
        { title: "Operating Systems", units: 7, thumbnail: s43 },
        { title: "Computer Organization & Architecture", units: 6, thumbnail: s44 },
        { title: "Principles of Management", units: 5, thumbnail: s45 }
      ]
    },
    {
      title: "Sem 5",
      courses: [
        { title: "Advanced Java Programming", units: 7, thumbnail: s51 },
        { title: "Design & Analysis of Algorithms", units: 8, thumbnail: s52 },
        { title: "Software Engineering", units: 10, thumbnail: s53 },
        { title: "Theory of Computation", units: 8, thumbnail: s54 },
        { title: "Computer Networks", units: 7, thumbnail: s55 },
        { title: "Microprocessor Architecture and Programming", units: 7, thumbnail: s56 },
        { title: "Python Programming", units: 6, thumbnail: s57 },
        { title: "Service Oriented Architecture", units: 6, thumbnail: s58 }
      ]
    },
    {
      title: "Sem 6",
      courses: [
        { title: "Artificial Intelligence", units: 8, thumbnail: s61 },
        { title: "Python Programming", units: 6, thumbnail: s62 },
        { title: "Cryptography and Network Security", units: 10, thumbnail: s63 },
        { title: "Machine Learning", units: 8, thumbnail: s64 },
        { title: "Android Programming", units: 7, thumbnail: s65 },
        { title: "Internet of Things", units: 6, thumbnail: s66 },
        { title: "Soft Computing", units: 7, thumbnail: s67 },
        { title: "Information Security", units: 7, thumbnail: s68 },
        { title: "Data Compression", units: 7, thumbnail: s69 },
        { title: "E-Commerce and E-Business", units: 7, thumbnail: s70 },
      ]
    },
    {
      title: "Sem 7",
      courses: [
        { title: "Compiler Design", units: 10, thumbnail: s71 },
        { title: "Distributed Systems", units: 10, thumbnail: s71 },
        { title: "Cyber Security", units: 9, thumbnail: s71 },
        { title: "Blockchain Technology", units: 9, thumbnail: s71 },
        { title: "Image Processing", units: 7, thumbnail: s71 },
        { title: "Natural Language Processing", units: 8, thumbnail: s71 },
        { title: "Web Data Management", units: 8, thumbnail: s71 },
        { title: "Cloud  Computing", units: 9, thumbnail: s71 },
      ]
    },
    {
      title: "Sem 8",
      courses: [
        { title: "Next Generation Networks", units: 8, thumbnail: s71 },
        { title: "Big Data Analytics", units: 9, thumbnail: s71 }
      ]
    }
    
    
  ];
  

;

  return (
    <section className="courses">
     <div className="flex flex-col items-center justify-center">
  {/* Tabs for large screens */}
  <div className="hidden lg:flex lg:justify-center lg:space-x-4">
    <ul id="tabs" className="flex flex-row space-x-4">
      {semesters.map((semester, index) => (
        <li
          key={index}
          className={`mb-4 ${activeTab === index ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
        >
          <h3>{semester.title}</h3>
        </li>
      ))}
    </ul>
  </div>
  
  {/* Tabs for small screens */}
  <div className="lg:hidden">
    <div className="flex flex-col">
      <ul id="tabs" className="flex flex-row space-x-4">
        {semesters.slice(0, 3).map((semester, index) => (
          <li
            key={index}
            className={`mb-4 ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <h3>{semester.title}</h3>
          </li>
        ))}
      </ul>
      <ul id="tabs" className="flex flex-row space-x-4">
        {semesters.slice(3).map((semester, index) => (
          <li
            key={index + 3}
            className={`mb-4 ${activeTab === index + 3 ? "active" : ""}`}
            onClick={() => handleTabClick(index + 3)}
          >
            <h3>{semester.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>



      <div className="box-container">
        {semesters[activeTab].courses.map((course, index) => (
          <div key={index} className="box">
            <div className="tutor">
              <div className="info">
                <h3 className="title">{course.title}</h3>
              </div>
            </div>
            <div className="thumb" data-title={course.title}>
              <img src={course.thumbnail} alt="" />
              <span>{course.units} Units</span>
            </div>
            <Link to={`/sem_${activeTab + 1}_${index + 1}_units`} className="inline-btn">
           View Units
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
