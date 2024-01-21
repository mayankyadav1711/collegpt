/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-2/OOPC.png"
import postpic from "./images/Thumbnail/Sem-2/OOPC.png"
import newpic from "./images/Thumbnail/Sem-2/OOPC.png"
import handledarkmode from "./handledarkmode";
function Sem_2_Oopc_Units() {
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
            <h3>Object Oriented Programming Using 'C++' [CC111-N]</h3>
            <p>To make the students think in the direction of providing alternative option to procedural programming languages. To understand the importance of data over process.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
         </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

<Link to='/watchvideo/211' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={newpic} alt=""/>
      <h3>Elaborated understanding of Essentials C Programming</h3>
   </a>
</Link>

<Link to='/watchvideo/212' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Fundamental Concepts of OOP with C++</h3>
   </a>
</Link>

<Link to='/watchvideo/213' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>C++ Programming Syntactical Basics</h3>
   </a>
</Link>

<Link to='/watchvideo/214' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>C++ Functions</h3>
   </a>
</Link>

<Link to='/watchvideo/215' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Objects and Class</h3>
   </a>
</Link>

<Link to='/watchvideo/216' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Operator Overloading</h3>
   </a>
</Link>

<Link to='/watchvideo/217' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Inheritance</h3>
   </a>
</Link>

<Link to='/watchvideo/218' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Polymorphism & Virtual Functions</h3>
   </a>
</Link>

<Link to='/watchvideo/219' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Templates and Exception Handling</h3>
   </a>
</Link>

<Link to='/watchvideo/2110' class="box">
   <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Introduction to Streams and Files</h3>
   </a>
</Link>

</div>


</section>




</>
  );
}

export default Sem_2_Oopc_Units;