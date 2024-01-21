/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-1/ES.png"
import postpic from "./images/Thumbnail/Sem-1/ES.png"

import newpic from "./images/thumb-4.png"
import handledarkmode from "./handledarkmode";
function Sem_1_Es_Units() {
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
            <span>5 Units</span>
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
            <h3>Enviromental Science [UE101]</h3>
            <p>To create awareness, acquire knowledge such that students manage their society properly inculcate skills for identifying problems associated with environment and develop ability to evaluate participate in environmental protection activities that is helpful to all living things.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

<Link to='/watchvideo/161' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={thumb} alt=""/>
      <h3>Introduction to environment, Ecology and Ecosystem</h3>
   </a>
</Link>

<Link to='/watchvideo/162' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Ecology & Ecosystem</h3>
   </a>
</Link>

<Link to='/watchvideo/163' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Population & Natural Resources</h3>
   </a>
</Link>

<Link to='/watchvideo/164' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Environmental Pollution</h3>
   </a>
</Link>

<Link to='/watchvideo/165' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Social Issues</h3>
   </a>
</Link>

</div>


</section>





</>
  );
}

export default Sem_1_Es_Units;