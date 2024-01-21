/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-4/OOPJ.png"
import postpic from "./images/Thumbnail/Sem-4/OOPJ.png"

import handledarkmode from "./handledarkmode";
function Sem_4_Oopj_Units() {
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
                <h3>Object Oriented Programming Using Java [CT405-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/411' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to Java</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/412' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Objects and Classes</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/413' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Inheritance and Polymorphism</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/414' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Collection Interface and Classes</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/415' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Exception Handling in Java</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/416' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Multithreading in Java</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/417' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>I/O Programming</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/418' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Event and GUI Programming</h3>
    </a> 
  </Link>
</div>


</section>





</>
);
}

export default Sem_4_Oopj_Units;