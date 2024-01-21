/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-5/MAP.jpg"
import postpic from "./images/Thumbnail/Sem-5/MAP.jpg"

import handledarkmode from "./handledarkmode";
function Sem_5_Map_Units() {
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
                <h3>Microprocessor Architecture and Programming [CE502-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>             </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/571' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction of 8085/80x86/8088</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/572' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Programming of 8085/8086</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/573' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Interrupts and Interrupt processing</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/574' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Memories</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/575' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Interfacing peripherals and applications</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/576' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Intel microprocessors</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/577' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>ARM Processor</h3>
    </a> 
  </Link>
</div>


</section>





</>
);
}

export default Sem_5_Map_Units;