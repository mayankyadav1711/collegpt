/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_6_Ee_Units() {
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
              <button type="submit">
                <i class="far fa-bookmark"></i> <span>save unitlist</span>
              </button>
            </form>

            <div class="thumb">
              <img src={postpic} alt="" />
              <span>8 Units</span>
            </div>
          </div>

          <div class="column">
            <div class="tutor">
              {/* <img src={profilepic} alt="" /> */}
              <div>
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div class="details">
              <h3>E-Commerce and E-Business [IT605G-N]</h3>
              <p>
              Define E-Marketplaces and list their components.
List the Major types of Electronic Markets and describe their features.
Describe the types Of Intermediaries in EC and their roles.
Describe electronic Catalogs, Shopping carts, and search Engines.
Describe the various types of Auctions and list their characteristics.
              </p>
              <Link to='/teacherProfile' >   <a  class="inline-btnd">view profile</a> </Link> 
            </div>
          </div>
        </div>
      </section>

      <section class="playlist-videos">
        <h1 class="heading">Unit List</h1>

        <div class="box-container">
        <Link to="/watchvideo/6101" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Introduction to E-Business and E-Commerce</h3>
  </a>
</Link>

<Link to="/watchvideo/6102" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>E-Marketplaces: Structures, Mechanisms, Economics, & impacts</h3>
  </a>
</Link>

<Link to="/watchvideo/6103" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>E-Business applications, E-Procurement and E-Payment Systems</h3>
  </a>
</Link>

<Link to="/watchvideo/6104" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>The Impact of E-Business on Different Fields and Industries</h3>
  </a>
</Link>

<Link to="/watchvideo/6105" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>E-Learning and Online Education</h3>
  </a>
</Link>

<Link to="/watchvideo/6106" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>E-Government</h3>
  </a>
</Link>

<Link to="/watchvideo/6107" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>Lunching Online Business and E-Commerce Projects</h3>
  </a>
</Link>

<Link to="/watchvideo/6108" class="box">
  <a>
    {/* <i class="fas fa-play"></i> */}
    <img src={postpic} alt="" />
    <h3>M-Commerce</h3>
  </a>
</Link>

        </div>
      </section>
    </>
  );
}

export default Sem_6_Ee_Units;
