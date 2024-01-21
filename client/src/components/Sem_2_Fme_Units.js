/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-2/FME.png";
import postpic from "./images/Thumbnail/Sem-2/FME.png";

import newpic from "./images/Thumbnail/Sem-2/FME.png";
import handledarkmode from "./handledarkmode";
function Sem_2_Fme_Units() {
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
            <span>15 Units</span>
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
            <h3>Fundamental Of Mechanical Engineering [CC104-N]</h3>
            <p>To present a problem oriented introductory knowledge of Fundamentals of Mechanical Engineering. To address the underlying concepts and methods behind mechanical engineering. </p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">
    <Link to='/watchvideo/241' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={newpic} alt=""/>
        <h3>Introduction</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/242' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={newpic} alt=""/>
        <h3>Properties of Gases</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/243' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Heat Engines</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/244' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={newpic} alt=""/>
        <h3>Properties of Steam</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/245' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Steam and Steam Generator</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/246' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Refrigeration and Air conditioning</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/247' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>I.C. Engine</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/248' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Air Compressor</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/249' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Speed Control</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2410' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Fuels and Combustion</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2411' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Power Transmission Methods and Devices</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2412' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Pump</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2413' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Engineering Materials</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2414' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Mechanical Working of Metals and Press Operations</h3>
      </a> 
    </Link>

    <Link to='/watchvideo/2415' class="box">  
      <a>
        {/* <i class="fas fa-play"></i> */}
        <img src={postpic} alt=""/>
        <h3>Heat Transfer & Turbines</h3>
      </a> 
    </Link>
  </div>

</section>





</>
  );
}

export default Sem_2_Fme_Units;