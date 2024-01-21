/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";

import thumb from "./images/Thumbnail/Sem-1/Maths-1.png"
import postpic from "./images/Thumbnail/Sem-1/Maths-1.png"

import newpic from "./images/Thumbnail/Sem-1/Maths-1.png"
import handledarkmode from "./handledarkmode";

function Sem_1_Maths_Units() {
    useEffect(() => {
        handledarkmode();
      }, []);
  return (
    <>



<section class="playlist-details">

   <h1 class="heading">Subject Details</h1>

   <div class="row">

      <div class="column">
         
   
         <div class="thumb">
            <img src={thumb}alt=""/>
            <span>7 Units</span>
         </div>
      </div>
      <div class="column">
         
   
         <div class="details">
            <h3>Engineering Mathematics – 1 [CC101-N]</h3>
            <p>The course consists of topics in differential calculus,integral calculus, linear algebra and differential equations with applications to various engineering problems. This course will cover the following main topics: Mean Value Theorems; Indeterminate Forms; Taylor's and Maclaurin's Theorems. Partial Derivatives; Differentiability; Taylor's Expansion of Functions of Several Variables.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo/121' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={newpic} alt=""/>
    <h3>Differential Calculus</h3>
  </a>
</Link>

<Link to='/watchvideo/122' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Partial differentiation and its applications</h3>
  </a>
</Link>

<Link to='/watchvideo/123' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Curve Tracing</h3>
  </a>
</Link>

<Link to='/watchvideo/124' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Beta & Gamma function</h3>
  </a>
</Link>

<Link to='/watchvideo/125' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Integral Calculus</h3>
  </a>
</Link>

<Link to='/watchvideo/126' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Multiple Integrals and its applications</h3>
  </a>
</Link>

<Link to='/watchvideo/127' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Infinite Series</h3>
  </a>
</Link>

   </div>

</section>




</>
  );
}

export default Sem_1_Maths_Units;