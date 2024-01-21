/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-1/EOC.png"
import postpic from "./images/Thumbnail/Sem-1/EOC.png"

import newpic from "./images/Thumbnail/Sem-1/EOC.png"
import handledarkmode from "./handledarkmode";

function Sem_1_Eoc_Units() {
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
            <span>10 Units</span>
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
            <h3>Elements Of Civil Engineering [CC109-N]</h3>
            <p>The motto of the civil engineering is the “protection of the welfare and safety of the public”. Indeed, the term civil in civil engineering refers to the discipline’s involvement in public works, including government buildings, military bases, mass transit systems (i.e., highways, railways, airports, and water ways), water treatment works, waste management, irrigation etc.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo/131' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={newpic} alt=""/>
    <h3>Introduction and Scope of Civil Engineering</h3>
  </a>
</Link>

<Link to='/watchvideo/132' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Surveying</h3>
  </a>
</Link>

<Link to='/watchvideo/133' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Linear measurements</h3>
  </a>
</Link>

<Link to='/watchvideo/134' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Angular Measurements</h3>
  </a>
</Link>

<Link to='/watchvideo/135' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Elevation measurements</h3>
  </a>
</Link>

<Link to='/watchvideo/136' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Modern Tools of Surveying and Mapping</h3>
  </a>
</Link>

<Link to='/watchvideo/137' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Construction Materials</h3>
  </a>
</Link>

<Link to='/watchvideo/138' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Elements of Building Construction</h3>
  </a>
</Link>

<Link to='/watchvideo/139' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Water Resources Development</h3>
  </a>
</Link>

<Link to='/watchvideo/1310' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Transportation Engineering</h3>
  </a>
</Link>


   </div>

</section>





</>
  );
}

export default Sem_1_Eoc_Units;