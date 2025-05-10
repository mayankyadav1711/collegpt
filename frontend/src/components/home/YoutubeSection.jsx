import React, { forwardRef, useState, useRef } from "react";
import { motion } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  PlayCircle,
  CheckCircle,
  Hash,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const YouTubeSection = forwardRef((props, ref) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  // Handle mouse movement for lighting effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };
  
  // Featured videos data
  const featuredVideos = [
    {
      id: "g4EHCU-o4tA",
      title: "🔥 Perceptron Numerical | Step-by-Step Calculation with Activation Functions 🧮 | Neural Network 🧠",
      thumbnail: "https://i.ytimg.com/vi/g4EHCU-o4tA/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🧠 Are you preparing for university-level exams in Artificial Intelligence (AI) 🤖, Machine Learning (ML) 📊, or Computer Science 💻? In this video, we break down the Perceptron Model and show how to compute its output using different activation functions like the step function and sigmoid function 📈.

✅ This video is perfect for students studying Neural Networks, Deep Learning, and AI topics in college-level exams 🎓.

🔎 Commonly Searched Questions Covered in This Video:
✔️ How to solve perceptron model problems in AI?
✔️ What is an activation function in a neural network?
✔️ How to calculate the output of a perceptron?
✔️ Step function vs. Sigmoid function in perceptrons
✔️ How to find weighted sum and apply activation functions?

🔹 Topics Covered:
✔️ Perceptron Model & Neural Network Basics
✔️ Weighted Sum Calculation 
✔️ Types of Activation Functions (Step Function, Sigmoid, etc.)
✔️ Step-by-Step Problem Solving for College-Level Exams
✔️ Common Mistakes & Tips for Faster Problem-Solving`,
      tags: ["Neural Networks", "AI", "Machine Learning", "Perceptron"]
    },
    {
      id: "Iv9xbwjwlUM",
      title: "🎥 SocialPulse: Social Media Performance Analysis 🔥| Level Supermind Hackathon 2025 Submission 🚀",
      thumbnail: "https://i.ytimg.com/vi/Iv9xbwjwlUM/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🚀 Level Supermind Hackathon 2025 - Pre-assignment Submission | Guests : @ranveerallahbadia , @HiteshCodeLab ,@Sakshamchoudharyofficial , @HarshilKaria .

🎯 Project: Social Media Analytics Assistant using Langflow & DataStax

🛠️ Task:
Develop a basic analytics module to analyze engagement data from mock social media accounts using Langflow and DataStax Astra DB.

💻 Implementation:
✅ Langflow workflow for data processing and GPT integration.
✅ DataStax Astra DB to store and query social media metrics.
✅ Integrated the agent into a MERN Stack application with:
   - 📊 Real-time analytics.
   - 📈 Performance visualizations.
   - 🎙️ Voice command support.`,
      tags: ["Hackathon", "Social Media", "Analytics", "AI"]
    },
    {
      id: "64OEl6a2mr8",
      title: "🏆Winner - Smart India Hackathon 2024🚀 | Team Saarthi | SIH1609 | Government of Gujarat | SIH Winner🥇",
      thumbnail: "https://i.ytimg.com/vi/64OEl6a2mr8/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🌟 In this video, we present Saarthi, our innovative Alumni Platform designed to bridge the gap between alumni and institutions, fostering connections, collaboration, and innovation. ✨💡

🌟 This project was our contribution to building Digital Bharat 🇮🇳 and empowering communities through technology.

▫️ Problem ID : 1609
▫️ Problem Statement: Implementation of the Alumni Association platform for the University/Institute.
▫️ Organization : Government of Gujarat
▫️ Department : Education Department
▫️ Category : Software
▫️ Theme : Smart Education`,
      tags: ["Smart India Hackathon", "Winner", "Alumni Platform", "Digital India"]
    },
    {
      id: "wM0V84Di9RA",
      title: "FitBite - Diet Recommendation System",
      thumbnail: "https://i.ytimg.com/vi/wM0V84Di9RA/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🍎 Introducing FitBite: Your AI-Powered Health Companion! 🚀

Discover the future of personalized nutrition and wellness with our groundbreaking app, FitBite! Watch as we showcase its incredible features:

🔹 AI-Driven Diet Recommendations
🔹 BMI, BMR & Body Fat Calculators
🔹 Smart Calorie Tracker with Gemini AI Insights
🔹 Nutrition Information Database
🔹 AI Recipe Generator
🔹 Menu Scanner for Healthy Eating Out
🔹 Google Fitbit Integration

Plus, our special Women's Health segment:
👩‍⚕️ Phase-Specific Diet Plans
👩‍⚕️ Menstrual Cycle Insights
👩‍⚕️ Pregnancy Nutrition Guide`,
      tags: ["AI", "Health", "Diet", "Fitness"]
    },
    {
      id: "IEfEId9_Cx4",
      title: "CodeYantra - Web based IDE || Vs-Code Clone || Replit Clone || MERN Stack || IDE Project",
      thumbnail: "https://i.ytimg.com/vi/IEfEId9_Cx4/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🌐💻 CodeYantra! This is a powerful, web-based IDE designed to enhance coding productivity and collaboration with some exciting features and AI functionalities.

🚀 Here are some key highlights of CodeYantra:

File Explorer: Navigate and manage your files seamlessly with a tree-structured file explorer that allows you to open and close tabs easily.

Code Editor: Enjoy features like syntax highlighting, keyword suggestions, various themes, real-time file synchronization, and an auto-save feature that saves your work every 10 seconds.

Coding Timer: Keep track of the time you spend coding to help manage your productivity.

Terminal: Execute commands directly within the web-based terminal using the xterm module and PowerShell.

Search: Quickly find files within your project by typing in keywords.

Copy Code: Easily copy the code of the selected file with a single click, thanks to the navigator object.`,
      tags: ["IDE", "Web Development", "MERN Stack", "VS Code"]
    },
    {
      id: "LyIgccgM1K4",
      title: "Biometric Web Authentication🔒 using JavaScript || 👆 Fingerprint Login System || WebAuthn",
      thumbnail: "https://i.ytimg.com/vi/LyIgccgM1K4/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🔒👆 FINGERPRINT Authentication in Website???? 👆🔒

🔍 WebAuthn and Passkeys: Explore the future of secure login with Web Authentication (WebAuthn) and passkeys! WebAuthn enables passwordless authentication using biometric-based login methods, while passkeys replace traditional passwords with secure biometric data or devices, ensuring enhanced security and user convenience. 🌟

⭐ Key Features ⭐:

💬 Password-less Authentication: Bid farewell to passwords with seamless biometric-based login.
🛡️ Enhanced Security: Safeguard user accounts with state-of-the-art authentication technology.
🔄 Frictionless Experience: Enjoy a smooth login process across various devices for maximum accessibility.`,
      tags: ["WebAuthn", "Security", "Authentication", "JavaScript"]
    },
    {
      id: "Y10tSipjNt4",
      title: "IPL-2024 Dashboard using Web Scrapping || React Js || Node Js || MERN Stack || Indian Premier League",
      thumbnail: "https://i.ytimg.com/vi/Y10tSipjNt4/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `Our IPL Dashboard provides real-time updates and comprehensive information about the Indian Premier League (IPL). Utilizing web scraping techniques instead of paid APIs, we've created a dynamic and interactive platform to keep cricket enthusiasts informed and engaged.

Technologies :
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js

Features : 
1. Live Score (Real-time Update) 🏏
2. IPL Points Table 📊
3. Teams 🏅
4. Stadiums 🏟️
5. Match Results 🥇
6. Fixtures or Upcoming Matches 📅`,
      tags: ["IPL", "Web Scraping", "React", "Node.js"]
    },
    {
      id: "OnfbZgunh1k",
      title: "Using Bluetooth Web API with JavaScript || Implement Bluetooth Web API using HTML, CSS & JavaScript",
      thumbnail: "https://i.ytimg.com/vi/OnfbZgunh1k/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `🧠 Did you know you can use Bluetooth with JavaScript? 🎧💻

🚀 The Bluetooth Web API allows seamless integration of Bluetooth functionality into web applications. Now, developers can interact with Bluetooth-enabled devices directly from the browser without the need for native apps or plugins.

🔥 Features: Discover nearby devices, interact with services, and ensure secure communication with the Bluetooth Web API.

💡 Limited Connectivity: Note that the API currently supports devices compliant with Bluetooth Low Energy (BLE) standards.`,
      tags: ["Bluetooth", "Web API", "JavaScript", "Web Development"]
    },
    {
      id: "v7rXYWjg5HE",
      title: "WikiLoop || Wikipedia Philosophy Game || React Js || Node Js || Express Js || Mayank Yadav",
      thumbnail: "https://i.ytimg.com/vi/v7rXYWjg5HE/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `The Wikipedia Loop project is like a game where you start from any Wikipedia page and try to reach the "Philosophy" page by clicking on the first normal-looking link you see on each page. The goal is to see how many clicks it takes to get to the Philosophy page and make sure you don't get stuck in a loop where you keep going in circles without reaching Philosophy. It's like a fun journey through Wikipedia to find the path to Philosophy!

Project Overview 🌟 
The Wikipedia Loop project consists of both server-side and client-side components:

Server-Side ⚙️
Framework: Built with Node.js and Express.
Caching: Utilizes caching to enhance performance by storing visited URLs and their corresponding first links.
Infinite Loop Detection: Detects and handles infinite loops, preventing the application from getting stuck in endless cycles.`,
      tags: ["Wikipedia", "Game", "React", "Node.js"]
    },
    {
      id: "5j9qLj1xRcM",
      title: "MySocket - Chat Application using Socket IO || MERN Stack || React Js || Redux || Node Js || Mongodb",
      thumbnail: "https://i.ytimg.com/vi/5j9qLj1xRcM/maxresdefault.jpg",
      channel: "Mayank Yadav",
      verified: true,
      description: `Recently, I've delved into the fascinating world of sockets! 🧵✨ Sockets are the backbone of real-time communication on the web, enabling seamless data exchange between clients and servers. Inspired by this technology, I embarked on a journey to integrate sockets into my latest project: a robust Chat Application built with the powerful MERN Stack.

🚀 Here are some key highlights of my Chat Application:

1. 🔐 User Authentication: Seamlessly create accounts and securely log in to access the chat features.
2. 👥 Chat Rooms (Groups): Engage in lively group conversations by creating or joining chat rooms.
3. 💬 Real-time Messaging: Experience instant messaging capabilities for swift and responsive communication.
4. 📎 File Attachments: Share files, images, and other media types within chat rooms to enrich conversations.
5. 🤝 Friend Requests: Build connections by sending and accepting friend requests within the application.`,
      tags: ["Socket.IO", "Chat", "MERN Stack", "Real-time"]
    }
  ];
  
  // Current video being displayed
  const currentVideo = featuredVideos[activeVideo];
  
  // Related videos (excluding the current one)
  const relatedVideos = React.useMemo(() => {
    return featuredVideos
      .filter((_, idx) => idx !== activeVideo)
      .slice(0, 5);
  }, [activeVideo, featuredVideos]);

  return (
    <section
      ref={(node) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="videos"
      className="relative min-h-screen py-16 bg-slate-50 dark:bg-[#080816] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#0067b5]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>
      
      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
                <DecryptedText
                  text="Premium Video Content"
                  speed={30}
                  sequential={true}
                  maxIterations={2}
                  animateOn="view"
                />
              </span>
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Learn With <span className="text-[#00AEEF]">Mayank Yadav</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Access premium tutorials, hackathon updates, project walkthroughs, and AI/ML content
            from a passionate developer and educator.
          </motion.p>
        </div>
        
        {/* Main video player and content section */}
        <div className="flex flex-col lg:flex-row gap-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl p-6">
          {/* Left side: Video Player + Video Info */}
          <div className="w-full lg:w-8/12 space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`}
                title={currentVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {currentVideo.title}
              </h1>
              
              {/* Channel and actions */}
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700/50 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0067b5] to-[#00AEEF] flex items-center justify-center text-white font-bold text-lg">
                    {currentVideo.channel.charAt(0)}
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-slate-900 dark:text-white">
                        {currentVideo.channel}
                      </span>
                      {currentVideo.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-[#00AEEF] ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div 
                className={`bg-slate-50/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-100 dark:border-slate-700/50 mb-4 transition-all duration-300 ${
                  isDescriptionExpanded ? "max-h-[500px] overflow-y-auto" : "max-h-[180px] overflow-hidden"
                }`}
              >
                <div className="whitespace-pre-line text-slate-700 dark:text-slate-300 text-sm">
                  {currentVideo.description}
                </div>
                
                <div 
                  className={`flex flex-wrap gap-2 mt-4 ${isDescriptionExpanded ? "" : "pb-8"}`}
                >
                  {currentVideo.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-white/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-xs rounded flex items-center"
                    >
                      <Hash className="w-3 h-3 mr-1 text-slate-500 dark:text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {!isDescriptionExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 dark:from-slate-800 to-transparent pointer-events-none"></div>
                )}
              </div>
              
              <button 
                className="text-sm text-[#00AEEF] font-medium flex items-center mb-6"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? "Show less" : "Show more"}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDescriptionExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
          
          {/* Right side: Related Videos */}
          <div className="w-full lg:w-4/12">
            <div className="bg-slate-50/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700/50">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700/50">
                <h3 className="font-medium text-slate-900 dark:text-white">Related Videos</h3>
              </div>
              
              <div className="divide-y divide-slate-200 dark:divide-slate-700/50 max-h-[calc(100vh-200px)] overflow-y-auto hide-scrollbar">
                {relatedVideos.map((video, idx) => (
                  <div 
                    key={idx}
                    className="p-4 hover:bg-slate-100/80 dark:hover:bg-slate-700/30 transition-colors cursor-pointer"
                    onClick={() => {
                      const newIndex = featuredVideos.findIndex(v => v.id === video.id);
                      if (newIndex !== -1) {
                        setActiveVideo(newIndex);
                      }
                    }}
                  >
                    <div className="flex gap-3">
                      {/* Thumbnail */}
                      <div className="w-36 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Video info */}
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2 mb-1 leading-tight">
                          {video.title}
                        </h4>
                        
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center">
                            {video.channel}
                            {video.verified && (
                              <CheckCircle className="w-2.5 h-2.5 text-[#00AEEF] ml-1" />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Link to all videos */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
                <a 
                  href="https://www.youtube.com/@mayankyadav1711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-800 dark:text-white text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Browse All Videos
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a 
            href="https://www.youtube.com/@mayankyadav1711"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#0067b5] to-[#00AEEF] relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated light effect */}
              <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>

              <span className="relative z-10 text-white font-medium text-lg flex items-center">
                Subscribe to YouTube Channel
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default YouTubeSection;