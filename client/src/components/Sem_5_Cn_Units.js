/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect} from "react";
import {  Link } from "react-router-dom";
// import profilepic from './images/pic-1.jpg'
// import thumb from "./images/Thumbnail/Sem-5/CN.webp"
import postpic from "./images/Thumbnail/Sem-5/CN.webp"

import handledarkmode from "./handledarkmode";
function Sem_5_Cn_Units() {
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
                <span>7 Units</span>
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
                <h3 className="mt-5">Computer Networks [CE505-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
            <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/561' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Overview of Networks and Data Communications</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/562' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Physical layer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/563' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Data Link layer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/564' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Medium Access control sub layer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/565' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Network layer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/566' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Transport layer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/567' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3 className="mt-5">Application layer</h3>
    </a> 
  </Link>
</div>


</section>





</>
);
}

export default Sem_5_Cn_Units;