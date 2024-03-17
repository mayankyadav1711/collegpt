/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import profilepic from "./images/pic-1.jpg";
// import thumb from "./images/Thumbnail/Sem-5/TOC.webp";
import postpic from "./images/Thumbnail/Sem-6/iot.webp";
import handledarkmode from "./handledarkmode";
function Sem_6_Iot_Units() {
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
                                <i class="far fa-bookmark"></i>{" "}
                                <span>save unitlist</span>
                            </button>
                        </form>

                        <div class="thumb">
                            <img src={postpic} alt="" />
                            <span>7 Units</span>
                        </div>
                    </div>

                    <div class="column">
                         {/* <div class="tutor">
                            <img src={profilepic} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div> */}

                        <div class="details">
                            <h3>Internet of Things [CE605D-N]</h3>
                            <p>
                                The aim of this course is to make students aware
                                about 'Internet of Things'-IOT, which is an
                                emerging technology through which all the manual
                                process is to be converted in to system operated
                                process and also integrates with the business.
                            </p>
                            <Link to="/teacherProfile">
                                {" "}
                                <a class="inline-btnd">view profile</a>{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="playlist-videos">
                <h1 class="heading">Unit List</h1>

                <div class="box-container">
                    <Link to="/watchvideo/661" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Introduction to IoT</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/662" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>IoT & M2M</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/663" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Network & Communication aspects</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/664" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>
                                Web Infrastructure for Managing IoT Resources
                            </h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/665" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Challenges in IoT</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/666" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Domain specific applications Of IoT</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/667" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Developing IoTs</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/668" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>IoT Tools</h3>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Sem_6_Iot_Units;
