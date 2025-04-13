import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Clock,
  ChevronRight,
  ChevronLeft,
  FilePen,
  Check,
  AlertCircle,
  ChartBar,
  Download,
  Star,
  Bell,
  Calendar,
  BookMarked,
  Award,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Users,
} from "lucide-react";

const GateSection = forwardRef((props, ref) => {
  // State for tabs and mouse position
  const [activeTab, setActiveTab] = useState("resources");
  const [activeTopic, setActiveTopic] = useState("algorithms");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Resource tabs
  const resourceTabs = [
    { id: "resources", name: "Study Material", icon: BookOpen },
    { id: "handwritten", name: "Handwritten Notes", icon: FilePen },
    { id: "tracker", name: "Progress Tracker", icon: ChartBar },
    { id: "notifications", name: "Notifications", icon: Bell },
  ];

  // Main GATE topics
  const gateTopics = [
    { id: "algorithms", name: "Algorithms", progress: 85 },
    { id: "data-structures", name: "Data Structures", progress: 78 },
    { id: "os", name: "Operating Systems", progress: 65 },
    { id: "dbms", name: "Database Systems", progress: 72 },
    { id: "networks", name: "Computer Networks", progress: 58 },
    { id: "compiler", name: "Compiler Design", progress: 45 },
    { id: "toc", name: "Theory of Computation", progress: 62 },
    { id: "digital", name: "Digital Logic", progress: 70 },
  ];

  // GATE resources
  const gateResources = [
    {
      title: "GATE CSE Complete Course",
      type: "PDF & Video",
      topics: 28,
      pages: 450,
      rating: 4.9,
      downloads: "14K+",
      premium: true,
    },
    {
      title: "Previous Year Questions (2015-2025)",
      type: "PDF with Solutions",
      topics: 8,
      pages: 320,
      rating: 4.8,
      downloads: "22K+",
      premium: false,
    },
    {
      title: "Master Algorithm Design",
      type: "Interactive Course",
      topics: 12,
      pages: 280,
      rating: 4.7,
      downloads: "9K+",
      premium: true,
    },
    {
      title: "Data Structures & Algorithms",
      type: "Illustrated Guide",
      topics: 15,
      pages: 210,
      rating: 4.9,
      downloads: "18K+",
      premium: false,
    },
  ];

  // Handwritten notes
  const handwrittenNotes = [
    {
      title: "Operating Systems Concepts",
      author: "Prof. Sharma",
      pages: 52,
      topics: ["Process Management", "Memory Management", "File Systems"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Algorithm Design & Analysis",
      author: "Dr. Gupta",
      pages: 64,
      topics: ["Greedy Algorithms", "Dynamic Programming", "NP-Completeness"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Computer Networks",
      author: "Prof. Verma",
      pages: 48,
      topics: ["OSI Model", "TCP/IP", "Routing Algorithms"],
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Database Management Systems",
      author: "Dr. Kumar",
      pages: 56,
      topics: ["Normalization", "Transaction Processing", "SQL"],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  // Latest notifications
  const notifications = [
    {
      title: "GATE 2025 Registration Deadline",
      date: "2024-10-05",
      type: "deadline",
      description: "Last date to apply for GATE 2025 examination.",
    },
    {
      title: "New Practice Tests Added",
      date: "2024-04-10",
      type: "update",
      description: "5 new full-length mock tests with detailed solutions.",
    },
    {
      title: "GATE Syllabus Update",
      date: "2024-04-01",
      type: "update",
      description: "Minor changes in Computer Networks & DBMS sections.",
    },
    {
      title: "Previous Year Paper Analysis",
      date: "2024-03-25",
      type: "resource",
      description: "Comprehensive analysis of GATE 2024 paper with solutions.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Dynamic content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "resources":
        return (
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gateResources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="relative">
                    {/* Top color strip */}
                    <div className="h-1.5 bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"></div>

                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                          {resource.title}
                        </h3>
                        {resource.premium && (
                          <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium rounded-md flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Premium
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="inline-flex items-center mr-3">
                          <FileText className="w-3.5 h-3.5 mr-1 text-slate-400 dark:text-slate-500" />
                          {resource.type}
                        </span>
                        <span className="inline-flex items-center">
                          <BookOpen className="w-3.5 h-3.5 mr-1 text-slate-400 dark:text-slate-500" />
                          {resource.topics} topics
                        </span>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${
                                star <= Math.floor(resource.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-slate-300 dark:text-slate-600"
                              }`}
                            />
                          ))}
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-300 ml-1.5">
                            {resource.rating}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {resource.downloads} downloads
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {resource.pages} pages
                        </span>
                        <button className="flex items-center text-xs font-medium text-[#00AEEF] hover:underline">
                          <Download className="w-3.5 h-3.5 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured resource */}
            <div className="bg-gradient-to-r from-[#0067b5] to-[#00AEEF] rounded-xl p-0.5 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/5">
              <div className="bg-white/95 dark:bg-slate-800/95 rounded-[calc(0.75rem-1px)] p-4 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-4">
                <div className="rounded-lg bg-blue-50 dark:bg-slate-700 p-3 sm:self-start">
                  <GraduationCap className="w-8 h-8 text-[#00AEEF]" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                    GATE 2025 Complete Preparation Package
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    Comprehensive study material, 50+ mock tests, personalized
                    analytics, and expert guidance.
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white text-sm font-medium rounded-lg inline-flex items-center">
                    Explore Package
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "handwritten":
        return (
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Horizontal scroll for handwritten notes */}
            <div className="flex space-x-3 pb-2 overflow-x-auto hide-scrollbar">
              {handwrittenNotes.map((note, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="min-w-[260px] bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm group hover:shadow-md transition-all"
                >
                  <div className={`h-2.5 bg-gradient-to-r ${note.color}`}></div>
                  <div className="p-5">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-[#00AEEF] transition-colors">
                      {note.title}
                    </h4>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        By {note.author}
                      </span>
                      <span className="text-xs flex items-center text-slate-600 dark:text-slate-300">
                        <FileText className="w-3.5 h-3.5 mr-1 text-slate-400 dark:text-slate-500" />
                        {note.pages} pages
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      {note.topics.map((topic, i) => (
                        <div key={i} className="flex items-center text-xs">
                          <Check className="w-3.5 h-3.5 text-green-500 mr-1.5" />
                          <span className="text-slate-600 dark:text-slate-300">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-1.5 bg-slate-100 dark:bg-slate-700/50 rounded text-center text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center">
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      Get Notes
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upload your notes section */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-white/20 dark:border-slate-700/50 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5">
                <FileText className="w-32 h-32" />
              </div>

              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                Have Your Own Notes?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 max-w-lg">
                Share your handwritten or digital notes with the community. Earn
                rewards and help fellow students excel in GATE.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white text-sm font-medium rounded-lg inline-flex items-center">
                  Upload Notes
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </button>
                <button className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg inline-flex items-center border border-slate-200 dark:border-slate-600">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        );

      case "tracker":
        return (
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Topic selection */}
            <div className="flex space-x-2 pb-2 overflow-x-auto hide-scrollbar">
              {gateTopics.map((topic, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                    activeTopic === topic.id
                      ? "bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white"
                      : "bg-white/80 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-white/20 dark:border-slate-700/50"
                  }`}
                  onClick={() => setActiveTopic(topic.id)}
                >
                  {topic.name}
                </button>
              ))}
            </div>

            {/* Progress overview */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg">
                    {gateTopics.find((t) => t.id === activeTopic)?.name}
                  </h4>
                  <div className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    {gateTopics.find((t) => t.id === activeTopic)?.progress}%
                    Complete
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-1">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        gateTopics.find((t) => t.id === activeTopic)?.progress
                      }%`,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Content for Algorithms */}
              <div className="p-5">
                <div className="space-y-4">
                  {/* Each subtopic */}
                  {[
                    { name: "Analysis of Algorithms", completion: 100 },
                    { name: "Searching & Sorting", completion: 90 },
                    { name: "Greedy Algorithms", completion: 85 },
                    { name: "Dynamic Programming", completion: 70 },
                    { name: "Graph Algorithms", completion: 50 },
                  ].map((subtopic, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          {subtopic.completion === 100 ? (
                            <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-2">
                              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-2 text-xs text-slate-500 dark:text-slate-400">
                              {subtopic.completion}%
                            </div>
                          )}
                          <h5 className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-[#00AEEF] transition-colors">
                            {subtopic.name}
                          </h5>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#00AEEF] hover:underline">
                          Continue
                        </button>
                      </div>
                      <div className="ml-7 w-[calc(100%-28px)] h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"
                          style={{ width: `${subtopic.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weekly stats */}
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
                  <h5 className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 text-[#00AEEF] mr-1.5" />
                    Weekly Progress
                  </h5>

                  <div className="flex justify-between items-end h-20">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day, idx) => {
                        const height = [60, 30, 75, 45, 90, 60, 25][idx];
                        const today =
                          idx === new Date().getDay() - 1 ||
                          (idx === 6 && new Date().getDay() === 0);

                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center w-1/7"
                          >
                            <div className="relative w-full flex justify-center mb-1">
                              <div
                                className={`w-5 rounded-sm ${
                                  today
                                    ? "bg-[#00AEEF]"
                                    : "bg-slate-300 dark:bg-slate-600"
                                }`}
                                style={{ height: `${height}%` }}
                              ></div>
                            </div>
                            <span
                              className={`text-xs ${
                                today
                                  ? "font-medium text-[#00AEEF]"
                                  : "text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {day}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "notifications":
        return (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-slate-900 dark:text-white">
                Important Updates
              </h4>
              <button className="text-xs text-[#00AEEF] font-medium hover:underline flex items-center">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Notifications list */}
            <div className="space-y-3">
              {notifications.map((notification, idx) => {
                // Define icon and color based on notification type
                let IconComponent = AlertCircle;
                let bgColor = "bg-blue-50 dark:bg-blue-900/20";
                let textColor = "text-blue-600 dark:text-blue-400";

                if (notification.type === "deadline") {
                  IconComponent = Clock;
                  bgColor = "bg-red-50 dark:bg-red-900/20";
                  textColor = "text-red-600 dark:text-red-400";
                } else if (notification.type === "update") {
                  IconComponent = Bell;
                  bgColor = "bg-amber-50 dark:bg-amber-900/20";
                  textColor = "text-amber-600 dark:text-amber-400";
                } else if (notification.type === "resource") {
                  IconComponent = BookOpen;
                  bgColor = "bg-green-50 dark:bg-green-900/20";
                  textColor = "text-green-600 dark:text-green-400";
                }

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 p-4 flex gap-3 hover:shadow-md transition-all"
                  >
                    <div className={`${bgColor} p-2 rounded-lg self-start`}>
                      <IconComponent className={`w-5 h-5 ${textColor}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">
                          {notification.title}
                        </h5>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {formatDate(notification.date)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                        {notification.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-xs capitalize text-slate-600 dark:text-slate-300">
                          {notification.type}
                        </span>
                        <button className="text-xs text-[#00AEEF] font-medium hover:underline flex items-center">
                          Details
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Calendar preview */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 p-4 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-medium text-slate-900 dark:text-white flex items-center">
                  <Calendar className="w-4 h-4 text-[#00AEEF] mr-1.5" />
                  Important Dates
                </h5>
                <div className="flex gap-1">
                  <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Mini calendar */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {/* Days */}
                {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 py-1"
                  >
                    {day}
                  </div>
                ))}

                {/* Dates with key events */}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 4; // Start from previous month
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isToday = day === 13;
                  const hasEvent = [5, 15, 22, 28].includes(day);

                  return (
                    <div
                      key={i}
                      className={`text-xs rounded-full aspect-square flex items-center justify-center ${
                        isCurrentMonth
                          ? isToday
                            ? "bg-[#00AEEF] text-white"
                            : hasEvent
                            ? "bg-blue-50 dark:bg-blue-900/20 text-[#00AEEF] font-medium"
                            : "text-slate-700 dark:text-slate-300"
                          : "text-slate-400 dark:text-slate-600"
                      }`}
                    >
                      {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 30}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      ref={(node) => {
        // Assign the ref both to the forwarded ref and our local ref
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="gate"
      className="relative min-h-screen py-16 bg-slate-50 dark:bg-[#080816] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#0067b5]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_39px,#00AEEF_1px),linear-gradient(90deg,transparent_39px,#00AEEF_1px)] bg-[length:40px_40px]"></div>
        </div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.07), transparent 80%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
          <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
            <DecryptedText
              text="Gate Exam Preparation"
              speed={30}
              sequential={true}
              maxIterations={2}
              animateOn="view"
            />
          </span>
        </span>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
            GATE
          </span>
          <span className="text-[#00AEEF]"> Preparation</span>
        </h2>

        <motion.p
          className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive preparation resources, structured learning paths, and
          advanced tools designed to help you excel in GATE Computer
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column: Content and Features */}
          <motion.div
            className="w-full md:w-5/12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
                <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
                  <DecryptedText
                    text="GATE Exam Preparation"
                    speed={30}
                    sequential={true}
                    maxIterations={2}
                    animateOn="view"
                  />
                </span>
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Master Your <span className="text-[#00AEEF]">GATE</span> Exam
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                Comprehensive preparation resources, structured learning paths,
                and advanced tools designed to help you excel in GATE Computer
                Science & Engineering.
              </p>
            </motion.div>

            {/* GATE Features */}
            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {[
                {
                  title: "Comprehensive Study Materials",
                  description:
                    "Topic-wise resources, handwritten notes, and solved examples covering the entire GATE CSE syllabus",
                  icon: BookOpen,
                  color:
                    "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                },
                {
                  title: "Performance Analytics",
                  description:
                    "Track your progress with AI-powered analytics that identify your strengths and improvement areas",
                  icon: ChartBar,
                  color:
                    "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
                },
                {
                  title: "Previous Year Papers",
                  description:
                    "Solve GATE papers from 2000-2025 with detailed solutions and topic-wise question bank",
                  icon: FileText,
                  color:
                    "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
                },
                {
                  title: "Important Notifications",
                  description:
                    "Stay updated with exam dates, application deadlines, and pattern changes right when they happen",
                  icon: Bell,
                  color:
                    "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/30 hover:bg-white/80 dark:hover:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 transition-all"
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg ${feature.color} mr-4`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats & CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col space-y-4"
            >
              <div className="grid grid-cols-4 gap-2">
                {[
                  { value: "98%", label: "Success Rate" },
                  { value: "15K+", label: "PYQs Solved" },
                  { value: "50+", label: "Mock Tests" },
                  { value: "500+", label: "Video Lessons" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-3 text-center"
                  >
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-transparent bg-clip-text">
                      <DecryptedText
                        text={stat.value}
                        speed={20}
                        maxIterations={5}
                        animateOn="view"
                      />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/gate">
                <motion.button
                  className="group px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-[#0067b5] to-[#00AEEF] relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated light effect */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  <span className="relative z-10 text-white font-medium flex items-center">
                    Explore GATE Resources
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Resources Content */}
          <motion.div
            className="w-full md:w-7/12 h-[580px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glass card with content */}
            <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl h-full p-6 relative">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-[#00AEEF]/5 z-0"></div>

              {/* Soft inner shadow */}
              <div className="absolute inset-0 shadow-inner z-0"></div>

              {/* Top tab navigation */}
              <div className="relative z-10 flex gap-2 mb-6">
                {resourceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF] -z-10"
                        layoutId="activeTabGate"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <tab.icon className="w-4 h-4 mr-1.5" />
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Dynamic content based on active tab */}
              <div className="relative z-10 h-[calc(100%-60px)] overflow-auto hide-scrollbar px-1">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>

              {/* Floating design elements */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00AEEF]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default GateSection;
