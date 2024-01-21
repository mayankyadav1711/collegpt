/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-3/ITW.png"
import postpic from "./images/Thumbnail/Sem-3/ITW.png"
import handledarkmode from "./handledarkmode";
function Sem_3_Itw_Units() {
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
                <h3>IT Workshop [CT305-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/351' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to WWW</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/352' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to HTML</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/353' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>CSS</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/354' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>JavaScript</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/355' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>XML and Ajax</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/356' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>PHP</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/357' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>SciLab</h3>
    </a> 
  </Link>
</div>


</section>





</>
);
}

export default Sem_3_Itw_Units;