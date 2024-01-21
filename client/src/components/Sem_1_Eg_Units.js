/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect} from "react";
import {   Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-1/EG.png"
import postpic from "./images/Thumbnail/Sem-1/EG.png"
import newpic from "./images/thumb-4.png"
import handledarkmode from "./handledarkmode";

function Sem_1_Eg_Units() {
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
            <span>12 Units</span>
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
            <h3>Engineering Graphics [CC110-N]</h3>
            <p>Importance of graphics in engineering applications – Use of drafting instruments – BIS conventions and specifications – Size, layout and folding of drawing sheets – Lettering and dimensioning.</p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo/141' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={thumb} alt=""/>
    <h3>Introduction</h3>
  </a>
</Link>

<Link to='/watchvideo/142' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Scales</h3>
  </a>
</Link>

<Link to='/watchvideo/143' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Engineering Curves</h3>
  </a>
</Link>

<Link to='/watchvideo/144' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Loci of Points</h3>
  </a>
</Link>

<Link to='/watchvideo/145' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Projections of Points & Lines</h3>
  </a>
</Link>

<Link to='/watchvideo/146' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Projections of Planes</h3>
  </a>
</Link>

<Link to='/watchvideo/147' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Projections of Solids</h3>
  </a>
</Link>

<Link to='/watchvideo/148' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Section of Solids</h3>
  </a>
</Link>

<Link to='/watchvideo/149' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Development of Lateral Surfaces</h3>
  </a>
</Link>

<Link to='/watchvideo/1410' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Orthographic Projections</h3>
  </a>
</Link>

<Link to='/watchvideo/1411' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Isometric Projections and Isometric View or Drawing</h3>
  </a>
</Link>

<Link to='/watchvideo/1412' class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt=""/>
    <h3>Machine Drawing</h3>
  </a>
</Link>

   </div>

</section>





</>
  );
}

export default Sem_1_Eg_Units;