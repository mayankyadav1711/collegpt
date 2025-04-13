import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  ThumbsUp,
  Share2,
  Bookmark,
  MessageSquare,
  Bell,
  PlayCircle,
  Clock,
  CheckCircle,
  MoreHorizontal,
  ChevronRight,
  User,
  ExternalLink,
  Gift,
  Hash,
  ChevronDown,
  GraduationCap,
  Trophy,
  Laptop,
  Zap,
  ArrowRight
} from "lucide-react";

const YouTubeSection = forwardRef((props, ref) => {
  // State for tracking video player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [videoCategory, setVideoCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState(0);
  const [isHoveringPlayer, setIsHoveringPlayer] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const playerRef = useRef(null);

  // Simulated total video duration in seconds
  const videoDuration = 1245; // 20:45 in seconds
  
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

  // Auto hide controls after a period of inactivity
  useEffect(() => {
    let timeout;
    
    if (isHoveringPlayer) {
      setShowControls(true);
      timeout = setTimeout(() => {
        if (!isPlaying) return;
        setShowControls(false);
      }, 3000);
    } else {
      setShowControls(true);
    }
    
    return () => clearTimeout(timeout);
  }, [isHoveringPlayer, isPlaying]);

  // Helper function to format time (seconds -> MM:SS)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Note: In a real implementation, this would control the actual video playback
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Video Categories
  const videoCategories = [
    { id: "all", name: "All" },
    { id: "gate", name: "GATE Preparation", icon: GraduationCap },
    { id: "hackathons", name: "Hackathons", icon: Trophy },
    { id: "projects", name: "Projects", icon: Laptop },
    { id: "tutorials", name: "Tutorials", icon: Zap }
  ];
  
  // Featured videos data
  const featuredVideos = [
    {
      id: "v1",
      title: "Complete GATE CSE Algorithms & Data Structures - 2025 Edition",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
      channel: "GATE Masters",
      views: "245K",
      timestamp: "2 weeks ago",
      duration: "1:45:32",
      verified: true,
      category: "gate",
      description: `This comprehensive lecture covers everything you need to know about Algorithms and Data Structures for GATE CSE 2025 examination.

Key topics covered:
• Time & Space Complexity Analysis
• Sorting Algorithms (Quick Sort, Merge Sort, Heap Sort)
• Advanced Data Structures (AVL Trees, Red-Black Trees)
• Graph Algorithms (Dijkstra's, Bellman-Ford, Floyd-Warshall)
• Dynamic Programming
• Greedy Algorithms

This lecture is part of our complete GATE CSE 2025 preparation series that has helped over 10,000 students score 99+ percentile in previous GATE exams.`,
      tags: ["GATE 2025", "Data Structures", "Algorithms", "CSE"]
    },
    {
      id: "v2",
      title: "How We Won Smart India Hackathon 2024 - Project Walkthrough",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
      channel: "Tech Innovators",
      views: "126K",
      timestamp: "3 days ago",
      duration: "28:45",
      verified: true,
      category: "hackathons",
      description: `In this video, we take you behind the scenes of our winning project at Smart India Hackathon 2024. We explain our approach, the challenges we faced, and how we overcame them to build a solution that impressed the judges.

Our project "EcoTrack" is an IoT-based environmental monitoring system that uses machine learning to predict pollution levels and suggest mitigation strategies. We discuss:

• Problem statement and our unique approach
• Technical architecture and implementation
• Demo of the working prototype
• Presentation strategies that worked
• Judges' feedback and key insights

If you're planning to participate in upcoming hackathons, this walkthrough will provide valuable insights into creating winning projects.`,
      tags: ["Smart India Hackathon", "Project Demo", "IoT", "Environmental Tech"]
    },
    {
      id: "v3",
      title: "Building a Full-Stack AI Web App with React, Node.js and TensorFlow.js",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1470&auto=format&fit=crop",
      channel: "CodeCrafters",
      views: "189K",
      timestamp: "1 month ago",
      duration: "52:18",
      verified: false,
      category: "projects",
      description: `Learn how to build an AI-powered web application from scratch using React for the frontend, Node.js for the backend, and TensorFlow.js for implementing machine learning capabilities directly in the browser.

This tutorial covers:
• Project setup and architecture
• Building a responsive UI with React and Tailwind CSS
• Setting up a Node.js backend with Express
• Implementing user authentication with JWT
• Integrating TensorFlow.js models
• Deploying to production using Docker

By the end of this tutorial, you'll have a fully functional AI web application that can perform image recognition tasks. All source code is available on GitHub.`,
      tags: ["React.js", "TensorFlow.js", "Full-Stack", "AI Project"]
    },
    {
      id: "v4",
      title: "Database Management Systems: Complete Course for GATE 2025",
      thumbnail: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1470&auto=format&fit=crop",
      channel: "GATE Masters",
      views: "178K",
      timestamp: "3 weeks ago",
      duration: "2:12:45",
      verified: true,
      category: "gate",
      description: `Master Database Management Systems for GATE Computer Science 2025 with this comprehensive lecture. This video covers all DBMS concepts that are important from the GATE examination perspective.

Topics covered:
• Database Design & ER Modeling
• Relational Model & Relational Algebra
• SQL: Advanced Queries and Optimization
• Normalization (1NF through BCNF)
• Transaction Processing & Concurrency Control
• Recovery Techniques
• Indexing & B+ Trees
• Previous Year Question Analysis

The lecture includes visual explanations, practical examples, and tips for solving GATE questions efficiently. Practice questions with solutions are provided at the end.`,
      tags: ["GATE CSE", "DBMS", "Database", "SQL"]
    },
    {
      id: "v5",
      title: "Kavach Cybersecurity Hackathon 2024: Preparation Guide",
      thumbnail: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1470&auto=format&fit=crop",
      channel: "Cyber Defenders",
      views: "95K",
      timestamp: "2 weeks ago",
      duration: "42:56",
      verified: true,
      category: "hackathons",
      description: `This video provides a comprehensive preparation guide for the upcoming Kavach Cybersecurity Hackathon 2024. Learn about the competition format, problem statement expectations, and strategies to maximize your chances of success.

Key areas covered:
• Overview of Kavach Hackathon format and themes
• Essential cybersecurity tools and frameworks
• Building an effective team with complementary skills
• Rapid prototyping techniques for security solutions
• Presentation strategies that impress judges
• Resources for additional practice

With insights from previous winners and organizing committee members, this guide gives you an insider perspective on what it takes to excel at Kavach 2024.`,
      tags: ["Cybersecurity", "Hackathon", "Kavach", "Network Security"]
    },
    {
      id: "v6",
      title: "Neural Networks & Deep Learning Simplified - GATE Special",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1470&auto=format&fit=crop",
      channel: "AI Academy",
      views: "215K",
      timestamp: "1 month ago",
      duration: "1:32:18",
      verified: true,
      category: "gate",
      description: `Demystifying Neural Networks and Deep Learning specifically tailored for GATE Computer Science aspirants. This lecture simplifies complex ML concepts with intuitive explanations and plenty of examples.

Topics covered:
• Perceptrons and Neural Network basics
• Activation functions and their significance
• Backpropagation algorithm simplified
• CNN, RNN, LSTM architectures
• Training techniques and optimization algorithms
• Deep Learning frameworks overview
• Previous GATE questions on Machine Learning

This video is designed to make Neural Networks accessible even if you're new to Machine Learning, while still covering advanced concepts needed for GATE.`,
      tags: ["Machine Learning", "Neural Networks", "Deep Learning", "GATE CSE"]
    },
    {
      id: "v7",
      title: "Building a Real-time Dashboard with React, Firebase and D3.js",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
      channel: "WebDev Wizards",
      views: "134K",
      timestamp: "3 weeks ago",
      duration: "58:42",
      verified: false,
      category: "projects",
      description: `In this tutorial, learn how to create a stunning real-time analytics dashboard using React for the UI, Firebase for the backend and real-time database, and D3.js for interactive data visualizations.

You'll learn:
• Setting up a React project with modern tooling
• Configuring Firebase and implementing authentication
• Creating responsive layouts with CSS Grid and Flexbox
• Building interactive charts and graphs with D3.js
• Implementing real-time updates with Firebase Firestore
• Deploying your application to Firebase Hosting

By the end of this tutorial, you'll have a professional-grade dashboard application that updates in real-time and features beautiful data visualizations.`,
      tags: ["React", "Firebase", "D3.js", "Dashboard"]
    },
    {
      id: "v8",
      title: "Operating Systems Complete Course - GATE CSE 2025",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop",
      channel: "GATE Masters",
      views: "198K",
      timestamp: "2 months ago", 
      duration: "2:28:15",
      verified: true,
      category: "gate",
      description: `Master Operating Systems concepts for GATE CS/IT with this comprehensive lecture covering everything from process management to file systems.

Topics covered:
• Process Management and Scheduling Algorithms
• Memory Management (Paging, Segmentation, Virtual Memory)
• Process Synchronization (Semaphores, Monitors, Deadlocks)
• I/O Systems and Secondary Storage
• File Systems and Implementation
• Protection and Security
• Distributed Systems Fundamentals
• Previous Year Questions Analysis (2010-2024)

This lecture includes visual explanations of complex concepts, comparative analysis of algorithms, and tips for solving numerical problems quickly.`,
      tags: ["Operating Systems", "GATE 2025", "Process Management", "Memory Management"]
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
        // Assign the ref both to the forwarded ref and our local ref
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
            Learn With <span className="text-[#00AEEF]">Videos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Access premium lectures, hackathon updates, project tutorials, and exam preparation
            videos from top educators and industry experts.
          </motion.p>
        </div>
        
        {/* Video Categories */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {videoCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center ${
                videoCategory === category.id
                  ? "bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white"
                  : "bg-white/80 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/70"
              } transition-all`}
              onClick={() => setVideoCategory(category.id)}
            >
              {category.icon && <category.icon className="w-3.5 h-3.5 mr-1.5" />}
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Main video player and content section */}
        <div className="flex flex-col lg:flex-row gap-6 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl p-6">
          {/* Left side: Video Player + Video Info */}
          <div className="w-full lg:w-8/12 space-y-6">
            {/* Video Player */}
            <div
              className="aspect-video bg-black rounded-2xl overflow-hidden relative"
              ref={playerRef}
              onMouseEnter={() => setIsHoveringPlayer(true)}
              onMouseLeave={() => setIsHoveringPlayer(false)}
            >
              {/* Video Poster/Thumbnail */}
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark overlay for better visibility of controls */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Play Button (center) for when video is paused */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                  onClick={togglePlayPause}
                >
                  <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#00AEEF] flex items-center justify-center hover:bg-[#0088cc] transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Video Controls Overlay (bottom) */}
              <div className={`absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress bar */}
                <div className="relative h-1 bg-white/30 rounded-full mb-4 cursor-pointer group">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-[#00AEEF] rounded-full"
                    animate={{ width: `${(videoTime / videoDuration) * 100}%` }}
                    transition={{ duration: 0.1 }}
                  ></motion.div>
                  {/* Preview tooltip */}
                  <div className="absolute top-0 -translate-y-8 translate-x-[-50%] bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {formatTime(Math.floor(videoDuration * 0.5))}
                  </div>
                  {/* Larger hit area for better interaction */}
                  <div className="absolute inset-y-0 left-0 right-0 -top-2 -bottom-2"></div>
                </div>
                
                {/* Controls row */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause button */}
                    <button 
                      className="text-white hover:text-[#00AEEF] transition-colors"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    
                    {/* Volume button */}
                    <button 
                      className="text-white hover:text-[#00AEEF] transition-colors"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    
                    {/* Time display */}
                    <span className="text-white text-xs">
                      {formatTime(videoTime)} / {formatTime(videoDuration)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Settings button */}
                    <button className="text-white hover:text-[#00AEEF] transition-colors">
                      <Settings className="w-5 h-5" />
                    </button>
                    
                    {/* Fullscreen button */}
                    <button className="text-white hover:text-[#00AEEF] transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* "Playing" indicator */}
              {isPlaying && (
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-md flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse"></div>
                  Playing
                </div>
              )}
            </div>
            
            {/* Video Info */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {currentVideo.title}
              </h1>
              
              {/* Video stats row */}
              <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400 text-sm mb-4">
                <div className="flex items-center">
                  <span>{currentVideo.views} views</span>
                </div>
                <div className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
                <div>{currentVideo.timestamp}</div>
                <div className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
                <div className="flex items-center">
                  <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">
                    {currentVideo.duration}
                  </span>
                </div>
              </div>
              
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
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      42.3K subscribers
                    </div>
                  </div>
                  
                  <button className="ml-4 px-3 py-1.5 text-sm bg-[#00AEEF] hover:bg-[#0088cc] text-white rounded-full font-medium transition-colors flex items-center">
                    <Bell className="w-3.5 h-3.5 mr-1.5" />
                    Subscribe
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-sm transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>1.2K</span>
                  </button>
                  
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <Share2 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </button>
                  
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <Bookmark className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </button>
                  
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  </button>
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
              
              {/* Comments section preview */}
              <div className="space-y-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-slate-900 dark:text-white flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-slate-700 dark:text-slate-300" />
                    Comments (245)
                  </h3>
                  <button className="text-sm text-[#00AEEF] font-medium flex items-center">
                    View all
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="flex items-start gap-3 pb-4">
                  <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all"
                    />
                  </div>
                </div>
              </div>
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
                        setIsPlaying(false);
                        setVideoTime(0);
                        // Scroll to top of video section for better UX
                        playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <div className="flex gap-3">
                      {/* Thumbnail with duration */}
                      <div className="w-36 h-20 rounded-lg overflow-hidden relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 text-white text-[10px] rounded-sm">
                          {video.duration}
                        </div>
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
                        
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Link to all videos */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
                <button className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-800 dark:text-white text-sm font-medium transition-colors flex items-center justify-center">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Browse All Videos
                </button>
              </div>
            </div>
            
          
          </div>
        </div>
        
        {/* Featured playlists */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              Featured Playlists
            </h3>
            
            <Link to="/videos/playlists" className="text-sm text-[#00AEEF] font-medium flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "GATE CSE 2025 Complete Series",
                videos: 48,
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
                color: "from-emerald-500 to-teal-400"
              },
              {
                title: "Hackathon Preparation Masterclass",
                videos: 24,
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
                color: "from-purple-500 to-violet-400"
              },
              {
                title: "Full-Stack Web Development",
                videos: 36,
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1470&auto=format&fit=crop",
                color: "from-blue-500 to-cyan-400"
              }
            ].map((playlist, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm group hover:shadow-md transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 bg-gradient-to-r ${playlist.color} text-white text-xs rounded-full font-medium`}>
                        Playlist
                      </span>
                      
                      <div className="flex items-center text-white text-xs">
                        <PlayCircle className="w-3.5 h-3.5 mr-1" />
                        {playlist.videos} videos
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#00AEEF]/80 flex items-center justify-center hover:bg-[#00AEEF] transition-colors">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-[#00AEEF] transition-colors">
                    {playlist.title}
                  </h4>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Last updated 3 days ago
                    </span>
                    
                    <button className="text-xs text-[#00AEEF] font-medium hover:underline">
                      View Playlist
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <Link to="/videos">
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
                Explore All Videos & Courses
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
          
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Join 50,000+ students learning from our premium video content
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default YouTubeSection;