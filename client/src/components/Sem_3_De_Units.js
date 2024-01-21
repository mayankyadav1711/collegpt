/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-3/DE.png"
import postpic from "./images/Thumbnail/Sem-3/DE.png"

import handledarkmode from "./handledarkmode";
function Sem_3_De_Units() {
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
            <span>7 Units</span>
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
            <h3>Digital Electronics [CT304-N]</h3>
            <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth
tables. </p>
<Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
        </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">
  <Link to='/watchvideo/341' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Number Systems and Codes</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/342' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Boolean Algebra and Logic Gates</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/343' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Combinational Logic Circuit</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/344' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Flip Flops and Sequential Logic and Circuits</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/345' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to State Machines</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/346' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Programmable Logic Devices</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/347' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>D/A and A/D Converters</h3>
    </a> 
  </Link>
</div>


</section>





</>
  );
}

export default Sem_3_De_Units;