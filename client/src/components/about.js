/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import profilepic from "./images/60111.png";
import handledarkmode from "./handledarkmode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Darshit from "./Darshit";
import Divya from "./Divya";
import Mayank from "./Mayank";
const About = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    handledarkmode();
  }, []);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating); // Update the rating when a star is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ feedback, rating }),
      });

      if (response.ok) {
        setFeedback("");
        setRating(0);
        toast.dark("Feedback submitted successfully", {
          className: "custom-toast", 
        });
      } else {
        toast.error("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("click", () => {
        box.classList.toggle("expanded");
      });
    });
  };

  return (
    <>
      <div className="dev">
        <section class="about">
          <div class="row">
            <div class="content">
              <h3>why us?</h3>
              <p>
              ColleGPT - Get Prepared Together! With the intention of learning and growing together, our team has built this platform, to revolutionize your academic journey by providing engaging resources and supportive community. 
              
              
              Our passionate team is dedicated to helping you learn, grow, and succeed together. Join us!
              </p>
            
            </div>
          </div>

          <h3 className="heading">Our Team</h3>
          <div class="box-container">
            <Darshit />
            <Divya />
            <Mayank />
          </div>

        </section>
        <section class="reviews">
          <h1 class="heading">student's reviews</h1>

          <div class="box-container">
            <div class="box">
              <p>
              The X-notes section comes as a saviour for those deep learners while the cheat-sheets could help in last second revision. The games for enhancing typing and focus, the courses for students to study in a subjective manner, all in all this is the perfect spot for "everything of TECH". The overall layout and color scheme of the website looks quite catchy and stylish. More power to the developers of this amazing platform.
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697348820/qkswpmr6tnzuiqnfqxtu.png" alt="" />
                <div>
                  <h3> Gaurav </h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i> 
                  </div>
                </div>
              </div>
            </div>

            <div class="box">
              <p>
              ColleGPT is an remarkable app for college learning and exploration. It offers a seamless platform for accessing study materials and provides regular updates that have proven to be invaluable in preparing for my college exams. The exclusive notes available on this app are a game-changer, making complex subjects easy to understand. With CollegePT, I've found a trusted companion in my educational journey.
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697348767/yqvnwr4ae1wd2fjb8xnx.jpg" alt="" />
                <div>
                  <h3>Anusha Shripati</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="box">
              <p>
              Collegpt is a valuable resource for college students, offering simplified notes and event updates. Their cheatsheets and detailed roadmaps are incredibly helpful, and the supportive student community enhances the learning experience. The user-friendly website makes it easy to navigate. It's like having a knowledgeable study buddy in the digital world, making your college journey more enjoyable.
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697376989/jnn5jjpqay2x81nynom4.jpg" alt="" />
                <div>
                  <h3>Kandarp</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              This Site is most helpful for not only the college exam study notes but also for the real time current trends ongoing in todays world.Also,would would highly recommend this website to all the people whom i know,really it has helped me a lot.. Let's Give It A Try!! And lastly,,i would like to thank all the devloper team to design a user friendly website.
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698734994/v2ydemrh9bbb1gbczeac.jpg" alt="" />
                <div>
                  <h3>Mit Patel</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              This website has been my saviour and its really helpful in the last moments of exams whether it be any language, cheatsheets or detailed notes At the time of exams, All I can see in everyone's hands is the collegegpt material And That's enough to show how great and helpful this website is to the students 😍
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697375081/fyxl35wnkjobvmt4kyo6.jpg" alt="" />
                <div>
                  <h3>Yashvi Vithalani</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="box">
              <p>
              This collegpt is helpful for college student.Collegpt's material is very simple way to understand.
              </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697365096/rne8savrfhd1zmuhfkuv.jpg" alt="" />
                <div>
                  <h3>Kartik Katharotiya</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              A great initiative and platform for college students ...provided cheat sheets and material is really good though .
               </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698733076/xcxmbp78qpdvqc5pnk1f.jpg" alt="" />
                <div>
                  <h3>Dirghanshu</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              Keep it up 🔥🔥🔥🔥
               </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698916264/uhsudhbtuw1pia9auoah.jpg" alt="" />
                <div>
                  <h3>Dhyey</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              This website is very helpful and attractive.I appriciate your hardwork.This notes will be very heplful in the final exama. pls upload the remaining notes as soon as possible.
               </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698735315/lltw61x65kcznsznxviw.jpg" alt="" />
                <div>
                  <h3>Hiranshi</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              Your website is great but sometimes it takes some time to launch and needs some responsive changes, if you do this it will be the best website where students can find work related to them. Otherwise the website has nice animations. The website looks amazing. Good job guys.
               </p>
              <div class="student">
                <img src={profilepic} alt="" />
                <div>
                  <h3>Vihar Talaviya</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <p>
              A great resource for college students! Websites like ColleGPT, which offer notes, cheat sheets, and event updates, can be incredibly valuable for both exam preparation and overall learning. These resources can help students grasp complex subjects more effectively and stay informed about important events related to their academic journey. I am really happy and thankful to them for making such a great platform
               </p>
              <div class="student">
                <img src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697463347/tijod8wmuwycp8ut4zyb.jpg" alt="" />
                <div>
                  <h3>Juhi Gajjar</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===============================================Review Now========================================================================================== */}

          <section class="comments">
            <h1 class="heading">review now</h1>

            <form className="add-comment" onSubmit={handleSubmit}>
              <textarea
                name="feedback_box"
                placeholder="Enter your review"
                required
                maxLength="1000"
                cols="30"
                rows="10"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>

              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <i
                    key={value}
                    className={`star${value} ${
                      value <= rating ? "fas" : "far"
                    } fa-star`}
                    onClick={() => handleStarClick(value)}
                  ></i>
                ))}
              </div>
              <input
                type="submit"
                value="Submit"
                className="inline-btn"
                name="add_comment"
              />
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default About;
