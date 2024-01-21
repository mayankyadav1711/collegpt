/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import profilepic from './images/pic-1.jpg'
import thumb from "./images/Thumbnail/Sem-4/COA.png"
import postpic from "./images/Thumbnail/Sem-4/COA.png"

import handledarkmode from "./handledarkmode";
function Sem_4_Coa_Units() {
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
                <span>6 Units</span>
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
                <h3>Computer Organization & Architecture [CT403-N]</h3>
                <p>Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables. </p>
                <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
        </div>
    </div>

</section>

<section class="playlist-videos">

    <h1 class="heading">Unit List</h1>

    <div class="box-container">
  <Link to='/watchvideo/441' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Overview of Register Transfer and Micro-operations</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/442' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Basic Computer Organization and Design</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/443' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Programming the Basic Computer</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/444' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Central Processing Unit</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/445' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Pipeline Processing</h3>
    </a> 
  </Link>

  <Link to='/watchvideo/446' class="box">  
    <a>
      {/* <i class="fas fa-play"></i> */}
      <img src={postpic} alt=""/>
      <h3>Memory Organization</h3>
    </a> 
  </Link>
</div>


</section>





</>
);
}

export default Sem_4_Coa_Units;