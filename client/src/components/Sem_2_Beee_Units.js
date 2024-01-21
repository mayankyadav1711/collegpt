/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-2/BEEE.png";
import postpic from "./images/Thumbnail/Sem-2/BEEE.png";

import newpic from "./images/Thumbnail/Sem-2/BEEE.png";
import handledarkmode from "./handledarkmode";
function Sem_2_Beee_Units() {
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
            <span>8 Units</span>
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
            <h3>Basic Electrical and Electronics Engineering [CC102-N]</h3>
            <p>To present a problem oriented introductory knowledge of Electrical Engineering Fundamentals. To focus on the study of electrical parameters & different engineering application based principles.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo/231'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={newpic} alt=""/>
         <h3>An Introduction to D.C. Circuits</h3>
      </a> </Link>

      <Link to='/watchvideo/232'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={newpic} alt=""/>
         <h3>Work, Power and energy</h3>
      </a> </Link>

      <Link to='/watchvideo/233'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Electrostatics & Capacitance</h3>
      </a> </Link>

      <Link to='/watchvideo/234'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Electromagnetic</h3>
      </a> </Link>

      <Link to='/watchvideo/235'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>AC Fundamentals</h3>
      </a> </Link>

      <Link to='/watchvideo/236'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Analysis of A.C. Circuit</h3>
      </a> </Link>

      <Link to='/watchvideo/237'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Polyphase Circuits</h3>
      </a> </Link>

      <Link to='/watchvideo/238'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Basics of Electronics</h3>
      </a> </Link>

   </div>

</section>





</>
  );
}

export default Sem_2_Beee_Units;