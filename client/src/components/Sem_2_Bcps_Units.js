/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-2/BCPS.png"
import postpic from "./images/Thumbnail/Sem-2/BCPS.png"

import newpic from "./images/Thumbnail/Sem-2/BCPS.png"
import handledarkmode from "./handledarkmode";
function Sem_2_Bcps_Units() {
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
            <span>13 Units</span>
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
            <h3>Business communication and presentation skills [CC106-N]</h3>
            <p>To enhance learners communication skills in both social and professional contexts. Employ principles of effective group communication to increase open participation, and strengthen decision making in work groups and teams.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={newpic} alt=""/>
         <h3>Soon</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={newpic} alt=""/>
         <h3>Soon</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Soon</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Soon</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>AC Fundamentals</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Analysis of A.C. Circuit</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Polyphase Circuits</h3>
      </a> </Link>

      <Link to='/watchvideo'  class="box">  <a >
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3>Basics of Electronics</h3>
      </a> </Link> 

   </div>

</section>





</>
  );
}

export default Sem_2_Bcps_Units;