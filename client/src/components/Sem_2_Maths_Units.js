/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-2/Maths-2.png"
import postpic from "./images/Thumbnail/Sem-2/Maths-2.png"

import newpic from "./images/Thumbnail/Sem-2/Maths-2.png"
import handledarkmode from "./handledarkmode";
function Sem_2_Maths_Units() {
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
            <h3>Engineering Mathematics – 2 [CC201-N]</h3>
            <p>To present the foundations of many basic Mathematical tools and concepts related Engineering.To provide a coherent development to the students for the courses of various branches of Engineering like Control Theory , Circuits and Networks, Digital Logic design ,Fluid Mechanics, Machine Design etc</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

<Link to='/watchvideo/221' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={newpic} alt=""/>
      <h3>Matrix Theory and Application of Matrices</h3>
   </a>
</Link>

<Link to='/watchvideo/222' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={newpic} alt=""/>
      <h3>Eigen value and Eigenvector and Applications</h3>
   </a>
</Link>

<Link to='/watchvideo/223' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Vectors in R<sup>n</sup></h3>
   </a>
</Link>

<Link to='/watchvideo/224' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Vector Space</h3>
   </a>
</Link>

<Link to='/watchvideo/225' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Linear Transformation</h3>
   </a>
</Link>

<Link to='/watchvideo/226' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Vector differential Calculus</h3>
   </a>
</Link>

<Link to='/watchvideo/227' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Vector Integral Calculus</h3>
   </a>
</Link>

<Link to='/watchvideo/228' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>New Title</h3>
   </a>
</Link>



<Link to='/watchvideo/229' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Another Title</h3>
   </a>
</Link>

<Link to='/watchvideo/2210' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Final Title</h3>
   </a>
</Link>

</div>


</section>





</>
  );
}

export default Sem_2_Maths_Units;