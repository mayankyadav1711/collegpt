/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";
// import profilepic from './images/pic-1.jpg'
// import thumb from "./images/Thumbnail/Sem-3/DBMS.webp"
import postpic from "./images/Thumbnail/Sem-3/DBMS.webp"

// import newpic from "./images/Thumbnail/Sem-3/DBMS.webp"
import handledarkmode from "./handledarkmode";
function Sem_3_Dbms_Units() {
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
            <img src={postpic}alt=""/>
            <span>9 Units</span>
         </div>
      </div>
      <div class="column">
         <div class="tutor">
                        {/* <img src={profilepic} alt=""/> */}
            <div>
               <h3 className="mt-5">john deo</h3>
               <span>21-10-2022</span>
            </div>
         </div>
   
         <div class="details">
            <h3 className="mt-5">Database Management Systems [CT306-N]</h3>
            <p>To understand the different issues involved in the design and implementation of a database system. To design and build a simple database system and demonstrate competence with the fundamental tasks involved with modeling, designing, and implementing a DBMS.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
        </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">
  <Link to='/watchvideo/331' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>

      <h3 className="mt-5">Database System Architecture</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/332' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Data Models</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/333' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Relational Query Languages</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/334' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Relational Database Design</h3>
    </a> 
  </Link>
  
  <Link to='/watchvideo/335' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Query Processing and Optimization</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/336' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Storage Strategies</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/337' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Transaction Processing</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/338' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Database Security</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/339' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Advanced Topics</h3>
    </a> 
  </Link>
</div>


</section>





</>
  );
}

export default Sem_3_Dbms_Units;