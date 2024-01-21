/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-5/Python.png"
import postpic from "./images/Thumbnail/Sem-5/Python.png"

import handledarkmode from "./handledarkmode";
function Sem_5_Python_Units() {
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
                <h3>Python Programming [IT506F-N]</h3>
                <p>The course is designed to provide understanding of the basic components of computer programming using the Python language – and
might be a gentle introduction to programming for those who think they might have a longer term
interest in the subject area.
</p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>             </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/521' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to Python Programming Language</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/522' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Data Collections and Language Component</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/523' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Object and Classes :</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/524' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Functions and Modules</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/525' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>I/O and Error Handling In Python</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/526' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Simple Algorithms and Data structures</h3>
    </a> 
  </Link>


</div>


</section>





</>
);
}

export default Sem_5_Python_Units;