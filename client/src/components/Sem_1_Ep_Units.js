/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import { Link } from "react-router-dom";


import postpic from "./images/Thumbnail/Sem-1/EP.webp"
import handledarkmode from "./handledarkmode";
function Sem_1_Ep_Units() {
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
            <span>10 Units</span>
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
            <h3 className="mt-5">Engineering Physics [CC107-N]</h3>
            <p>The syllabus of Engineering Physics highlights the basic concepts of Physics and its technological applications to all branches of Engineering via ability to design and conduct experiments, as well as to analyse and interpret data.</p>
<Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link>          </div>
      </div>
   </div>

</section>

<section class="playlist-videos">

   <h1 class="heading">Unit List</h1>

   <div class="box-container">

   <Link to='/watchvideo/151' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>

         <h3 className="mt-5">Ultrasonics & Architectural Acoustic</h3>
      </a>
   </Link>

   <Link to='/watchvideo/152' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Elasticity</h3>
      </a>
   </Link>

   <Link to='/watchvideo/153' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Laser</h3>
      </a>
   </Link>

   <Link to='/watchvideo/154' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Fibre Optics</h3>
      </a>
   </Link>

   <Link to='/watchvideo/155' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Optoelectronic devices</h3>
      </a>
   </Link>

   <Link to='/watchvideo/156' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Artificial Radioactivity</h3>
      </a>
   </Link>

   <Link to='/watchvideo/157' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Crystal Structure And X-rays Diffraction</h3>
      </a>
   </Link>

   <Link to='/watchvideo/158' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Instrumentation</h3>
      </a>
   </Link>

   <Link to='/watchvideo/159' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Band Theory Of Solids</h3>
      </a>
   </Link>

   <Link to='/watchvideo/1510' class="box">
      <a>
         {/* <i class="fas fa-play"></i> */}
         <img src={postpic} alt=""/>
         <h3 className="mt-5">Nanomaterials And NDT</h3>
      </a>
   </Link>

</div>


</section>





</>
  );
}

export default Sem_1_Ep_Units;