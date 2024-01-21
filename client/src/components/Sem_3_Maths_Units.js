/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-3/Maths-3.png"
import postpic from "./images/Thumbnail/Sem-3/Maths-3.png"

import newpic from "./images/thumb-4.png"
import handledarkmode from "./handledarkmode";
function Sem_3_Maths_Units() {
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
            <h3>Discrete Mathematics - 3 [CC302B-N]</h3>
            <p>1. Use mathematically correct terminology and notation.
                 2. Construct correct direct and indirect proofs.
                 3. Use division into cases in a proof.
                 4. Use counterexamples. 
                 5. Apply logical reasoning to solve a variety of problems.</p>
                 <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
        </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">
  <Link to='/watchvideo/321' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={thumb} alt=""/>
      <h3>Set, Relation & Function</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/322' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Lattices</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/323' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Propositional Logic</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/324' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Algebraic Structures and Morphism</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/325' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Graphs and Trees</h3>
    </a> 
  </Link>
</div>


</section>





</>
  );
}

export default Sem_3_Maths_Units;