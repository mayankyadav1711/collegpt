/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-3/DSA.png";
import postpic from "./images/Thumbnail/Sem-3/DSA.png";

import newpic from "./images/Thumbnail/Sem-3/DSA.png";
import handledarkmode from "./handledarkmode";
function Sem_3_Dsa_Units() {
  useEffect(() => {
 
    
    handledarkmode();
    }, []);
  return (
    <>



<section class="playlist-details">

   <h1 class="heading">Subject Details</h1>

   <div class="row">

      <div class="column">
         <form action="" method="post" class="save-playlist">
            <button type="submit"><i class="far fa-bookmark"></i> <span>save unitlist</span></button>
         </form>
   
         <div class="thumb">
            <img src={thumb}alt=""/>
            <span>6 Units</span>
         </div>
      </div>
      <div class="column">
         <div class="tutor">
            <img src={profilepic} alt=""/>
            <div>
               <h3>john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
   
         <div class="details">
            <h3>Data Structures & Algorithms [CT303-N]</h3>
            <p>To introduce the fundamentals of data structures, abstract concepts and how these concepts are useful in problem solving. To learn to develop algorithms and step by step approach to solve various problems.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
        </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">
  <Link to='/watchvideo/311' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={newpic} alt=""/>
      <h3>Introduction</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/312' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Linear Data Structures</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/313' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Nonlinear Data Structures</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/314' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Sorting and Searching</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/315' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Hashing</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/316' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>File Structures</h3>
    </a> 
  </Link>
</div>


</section>





</>
  );
}

export default Sem_3_Dsa_Units;