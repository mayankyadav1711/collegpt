import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useParams, Link, useNavigate } from "react-router-dom";
import handledarkmode from "./handledarkmode";
import toast from "react-hot-toast";
// import { ThumbUp, Visibility, Subscriptions } from "@material-ui/icons";
import { BiSolidLike } from "react-icons/bi";
import { FaEye   } from "react-icons/fa6";
import { MdSubscriptions   } from "react-icons/md";
import { MdVerified    } from "react-icons/md";
const Youtube_Lecture = () => {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();
  const [pdfFilePath, setPdfFilePath] = useState("");
  const [sem, setSem] = useState("");
  const [sub, setSub] = useState("");
  const [unit, setUnit] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [youtube, setYoutube] = useState("");
  const [doubt, setDoubt] = useState("");
  const [uploadTimestamp, setUploadTimestamp] = useState("");
  const [views, setViews] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [comments, setComments] = useState("");
  const [subscribers, setSubscribers] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { code } = useParams();

  useEffect(() => {
    const fetchPdfLink = async () => {
      try {
        const response = await fetch(
          `https://api-collegpt.vercel.app/pdf-forms/${code}`
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setPdfFilePath(data.link);
          setSem(data.sem);
          setSub(data.sub);
          setUnit(data.unit);
          setAuthor(data.author);
          setDescription(data.description);
          setExtra(data.extra);
          setYoutube(data.youtube);
          setUploadTimestamp(new Date(data.timestamp).toLocaleString());

          // Fetch YouTube video details
          if (data.youtube) {
            fetchYoutubeVideoDetails(data.youtube);
          }
        } else {
          console.error("Error fetching PDF link:", data.error);
        }
      } catch (error) {
        console.error("Error fetching PDF link:", error);
      }
    };

    fetchPdfLink();
    handledarkmode();
  }, [code]);

  const fetchYoutubeVideoDetails = async (youtubeUrl) => {
    try {
      const videoId = youtubeUrl.split("/").pop().split("?")[0];
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=AIzaSyCdeQS71SGmaB8U4Fu6nenkCOi6YIZ2jAY`
      );
      const data = await response.json();
      if (response.ok) {
        const videoDetails = data.items[0];
        console.log(videoDetails);
        // Set video title and other details
        setUnit(videoDetails.snippet.title);
        setDescription(videoDetails.snippet.description);

        // Set video statistics
        setViews(videoDetails.statistics.viewCount);
        setLikes(videoDetails.statistics.likeCount);
        setDislikes(videoDetails.statistics.dislikeCount);
        setComments(videoDetails.statistics.commentCount);

        // Fetch channel statistics
        fetchChannelStatistics(videoDetails.snippet.channelId);
      } else {
        console.error("Error fetching YouTube video details:", data.error);
      }
    } catch (error) {
      console.error("Error fetching YouTube video details:", error);
    }
  };

  const fetchChannelStatistics = async (channelId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=AIzaSyCdeQS71SGmaB8U4Fu6nenkCOi6YIZ2jAY`
      );
      const data = await response.json();
      if (response.ok) {
        const channelDetails = data.items[0];
        console.log(channelDetails);
        // Set channel statistics
        setSubscribers(channelDetails.statistics.subscriberCount);
      } else {
        console.error("Error fetching YouTube channel details:", data.error);
      }
    } catch (error) {
      console.error("Error fetching YouTube channel details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state?._id) {
      toast.success("Please login first");
      navigate("/login");
      return;
    }
    const formData = {
      code: code,
      semester: sem,
      subjectName: sub,
      unitName: unit,
      author: author,
      doubt,
    };
    
    try {
      const response = await fetch("https://api-collegpt.vercel.app/doubt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Doubt Submitted Successfully");
        toast.success("Will Respond Shortly");
      } else {
        console.error("Doubt submission failed.");
      }
    } catch (error) {
      console.error("Error submitting Doubt:", error);
    }
  };

  return (
    <>
      {youtube ? (
        <div className="mt-40">
          <section className="youtube-preview">
            <iframe
              width="400"
              height="800"
              src={youtube}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </section>
          <section className="watch-video">
            <div className="video-container">
     
              <h3 className="title text-left">
              
               {unit}</h3>
              <div className="info">
                <p className="date">
                  <i className="fas fa-calendar"></i>
                  <span>{uploadTimestamp}</span>
                </p>
              </div>
              <Link to="https://www.youtube.com/@ColleGPT" target="blank">
                <div className="tutor">
                  <img src="https://yt3.ggpht.com/3zPQXWu3swZ9FbRjspX0A3pIYq2zYZNGc65Qv7fTqOfI-eMuA1V31dDMGT6Vxf9NwcXvszp7=s48-c-k-c0x00ffffff-no-rj" alt="" />
   
                  <div className="">
                  
                    <h3 className="font-semibold  absolute ">ColleGPT</h3>
          
                    <div className="text-gray-900 dark:text-white text-2xl ml-36 relative mt-2 ">
                  <MdVerified />
                  </div><div className="mt-2">
                    <span className="text-gray-900 dark:text-white font-semibold mr-2">
                  
                  {subscribers} Subscribers
             </span>
             <div className="tutor grid gap-4 mb-5 grid-columns-1">
              <span className="text-gray-900 dark:text-white font-semibold mr-2">
                    <FaEye   className="mr-2" />
                  Views: {views}
             </span>
                    <span className="text-gray-900 dark:text-white font-semibold mr-2">
                    <BiSolidLike className="mr-2" />
                  Likes: {likes}
             </span>
             </div>

                    </div>
                  </div>
                  </div>
         
              </Link>
              <p className="description text-justify text-wrap whitespace-pre-wrap">{description}</p>
            </div>
          </section>
         
        </div>
      ) : (
        <div className="title-apple-coming-soon">Coming Soon</div>
      )}

      <section className="comments">
        <form onSubmit={handleSubmit} className="add-comment">
          <h3>Any Doubts?</h3>
          <textarea
            name="doubt"
            placeholder="Enter your doubts..."
            required
            maxLength="1000"
            cols="30"
            rows="10"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="inline-btn"
            name="submit_doubt"
          />
        </form>
      </section>
    </>
  );
};

export default Youtube_Lecture;
