/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilepic from "./images/pic-1.jpg";
import thumb from "./images/Thumbnail/Sem-5/TOC.png";
import postpic from "./images/Thumbnail/Sem-5/TOC.png";
import handledarkmode from "./handledarkmode";
function Sem_6_Dc_Units() {
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
                            <img src={thumb} alt="" />
                            <span>8 Units</span>
                        </div>
                    </div>

                    <div class="column">
                        <div class="tutor">
                            <img src={profilepic} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <span>21-10-2022</span>
                            </div>
                        </div>

                        <div class="details">
                            <h3>Data Compression [IT603-N]</h3>
                            <p>
                                To introduce students to basic applications ,
                                concepts, and techniques of Data Compression. To
                                develop skills for using recent data compression
                                software to solve practical problems in a
                                variety of disciplines. To gain experience doing
                                independent study and research.
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
                    <Link to="/watchvideo/691" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Compression Techniques</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/692" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>
                                Mathematical Preliminaries for Lossless
                                Compression Models
                            </h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/693" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Huffman Coding</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/694" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Arithmetic Coding</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/695" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Dictionary Techniques</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/696" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Context-Based Compression</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/697" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Lossless Image Compression</h3>
                        </a>
                    </Link>

                    <Link to="/watchvideo/698" class="box">
                        <a>
                            {/* <i class="fas fa-play"></i> */}
                            <img src={postpic} alt="" />
                            <h3>Quantization</h3>
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Sem_6_Dc_Units;
