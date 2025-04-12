import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  Users,
  FileText,
  Code,
  FileCheck,
  Calendar,
  Globe,
  CheckCircle,
  ArrowRight,
  Bookmark,
  MessageSquare,
  Award,
  Compass,
  GraduationCap,
  Sparkles,
  User,
  Clock,
  Star,
  Heart,
  PenTool,
  Download,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Youtube,
  Github,
  Play,
  Brain,
  GitBranch,
  Share2,
  Archive,
  PlayCircle,
  Eye,
  BookmarkPlus,
} from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Section refs for navigation
  const heroRef = useRef(null);
  const notesRef = useRef(null);
  const placementRef = useRef(null);
  const roadmapsRef = useRef(null);
  const communityRef = useRef(null);
  const cheatsheetsRef = useRef(null);
  const projectsRef = useRef(null);
  const videosRef = useRef(null);
  const exploreRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "Computer Science, 3rd Year",
      image: "https://i.pravatar.cc/150?img=33",
      text: "ColleGPT has completely transformed my study habits. The interactive notes and placement calendar are absolute game-changers for serious students.",
    },
    {
      name: "Priya Patel",
      role: "Electrical Engineering, 4th Year",
      image: "https://i.pravatar.cc/150?img=23",
      text: "The roadmaps feature guided me through my entire final year project. It's like having a senior mentor available 24/7.",
    },
    {
      name: "Rahul Gupta",
      role: "Data Science, 2nd Year",
      image: "https://i.pravatar.cc/150?img=12",
      text: "ColleGPT's cheatsheets helped me ace my algorithms exam. I printed them all and they became my go-to reference guide.",
    },
    {
      name: "Maya Desai",
      role: "Mechanical Engineering, 4th Year",
      image: "https://i.pravatar.cc/150?img=5",
      text: "The interview prep section is phenomenal. I landed offers from 3 top companies using the mock interview questions and experiences shared here.",
    },
  ];

  // Upcoming placement events
  const placementEvents = [
    {
      company: "Microsoft",
      date: "May 5, 2025",
      roles: ["Software Engineer", "Product Manager"],
      eligibility: "7+ CGPA, CSE/IT Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      company: "Google",
      date: "May 12, 2025",
      roles: ["Associate Software Engineer", "UX Designer"],
      eligibility: "8+ CGPA, All Engineering Branches",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
    },
    {
      company: "Amazon",
      date: "May 18, 2025",
      roles: ["SDE Intern", "Business Analyst"],
      eligibility: "7.5+ CGPA, CSE/IT/ECE Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    },
    {
      company: "Accenture",
      date: "May 25, 2025",
      roles: ["Associate Software Engineer", "Analyst"],
      eligibility: "6.5+ CGPA, All Engineering Branches",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png",
    },
  ];

  // Popular notes categories for tabs
  const noteCategories = [
    { id: "all", name: "All" },
    { id: "cs", name: "Computer Science" },
    { id: "ee", name: "Electrical" },
    { id: "mech", name: "Mechanical" },
    { id: "gate", name: "GATE" },
    { id: "interview", name: "Interview Prep" },
  ];

  // Notes data
  const notesData = [
    {
      title: "Data Structures & Algorithms",
      category: "cs",
      pages: 42,
      author: "Prof. Sharma",
      downloads: "4.5K",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1800&auto=format&fit=crop",
      featured: true,
    },
    {
      title: "Operating Systems",
      category: "cs",
      pages: 38,
      author: "Dr. Reddy",
      downloads: "3.2K",
      thumbnail:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Digital Electronics",
      category: "ee",
      pages: 56,
      author: "Prof. Kumar",
      downloads: "2.8K",
      thumbnail:
        "https://images.unsplash.com/photo-1601047095130-e3a5c7a70ba7?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Thermodynamics",
      category: "mech",
      pages: 45,
      author: "Dr. Singh",
      downloads: "2.1K",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "GATE CSE Complete Guide",
      category: "gate",
      pages: 120,
      author: "GATE Toppers",
      downloads: "8.7K",
      thumbnail:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1800&auto=format&fit=crop",
      featured: true,
    },
    {
      title: "Interview Questions Compilation",
      category: "interview",
      pages: 65,
      author: "Industry Experts",
      downloads: "10.2K",
      thumbnail:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop",
      featured: true,
    },
  ];

  // Roadmap data
  const roadmaps = [
    {
      title: "Web Development",
      icon: Globe,
      steps: 12,
      progress: 65,
      color: "blue",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      steps: 15,
      progress: 40,
      color: "purple",
    },
    {
      title: "GATE CSE",
      icon: GraduationCap,
      steps: 20,
      progress: 30,
      color: "orange",
    },
    {
      title: "Placement Preparation",
      icon: Briefcase,
      steps: 10,
      progress: 85,
      color: "emerald",
    },
  ];

  // Projects showcase data
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 45,
      thumbnail:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Stock Price Predictor",
      category: "Machine Learning",
      tech: ["Python", "TensorFlow", "Pandas"],
      stars: 67,
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "College Social Network",
      category: "Full Stack",
      tech: ["Next.js", "Firebase", "Tailwind"],
      stars: 38,
      thumbnail:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Attendance System",
      category: "IoT",
      tech: ["Arduino", "React", "Express"],
      stars: 29,
      thumbnail:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  // Video tutorials data
  const videoTutorials = [
    {
      title: "Neural Networks Explained",
      duration: "45:20",
      views: "128K",
      instructor: "Prof. Sharma",
      thumbnail:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "React Hooks Masterclass",
      duration: "32:15",
      views: "95K",
      instructor: "Ankit Malik",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Data Structures: Arrays & Linked Lists",
      duration: "28:40",
      views: "210K",
      instructor: "Dr. Reddy",
      thumbnail:
        "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  // Filter notes based on active tab
  const filteredNotes =
    activeTab === "all"
      ? notesData
      : notesData.filter((note) => note.category === activeTab);

  return (
    <div className="font-jost bg-slate-50 text-slate-900 dark:bg-[#0A0A1A] dark:text-white overflow-x-hidden min-h-screen">
      {/* Hero Section with custom styling */}
      <section
        ref={heroRef}
        className="relative pt-16 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        {/* Abstract background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-64 w-[70rem] h-[35rem] bg-gradient-to-r from-[#12b8ff]/10 to-[#0080ff]/5 blur-3xl opacity-60 dark:opacity-30 rounded-b-full"></div>
          <div className="absolute -top-24 -right-64 w-[60rem] h-[45rem] bg-gradient-to-l from-indigo-600/5 to-purple-600/10 blur-3xl opacity-60 dark:opacity-20 rounded-bl-full"></div>

          {/* Scattered symbols for tech vibes - visible in both modes */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern
                  id="smallSymbols"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <text
                    x="10"
                    y="20"
                    className="text-slate-900 dark:text-white"
                    style={{ font: "12px monospace" }}
                  >
                    {"{"}
                  </text>
                  <text
                    x="30"
                    y="40"
                    className="text-slate-900 dark:text-white"
                    style={{ font: "14px monospace" }}
                  >
                    {"}"}
                  </text>
                  <text
                    x="50"
                    y="10"
                    className="text-slate-900 dark:text-white"
                    style={{ font: "10px monospace" }}
                  >
                    {"<"}
                  </text>
                  <text
                    x="5"
                    y="50"
                    className="text-slate-900 dark:text-white"
                    style={{ font: "11px monospace" }}
                  >
                    {">"}
                  </text>
                  <text
                    x="40"
                    y="30"
                    className="text-slate-900 dark:text-white"
                    style={{ font: "10px monospace" }}
                  >
                    {"()"}
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallSymbols)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-anta tracking-tight mb-6"
            >
              <span className="text-slate-950 dark:text-white">
                Your Ultimate
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#12b8ff] to-[#0080ff] bg-clip-text text-transparent">
                College Companion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto font-light"
            >
              Comprehensive resources crafted specifically for students to excel
              in academics, placements, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/register">
                <button className="px-8 py-4 bg-gradient-to-r from-[#12b8ff] to-[#0080ff] text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 transition-all flex items-center justify-center group">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/explore">
                <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                  Explore Features
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#12b8ff]" />
                <span>15,000+ Students</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-[#12b8ff]" />
                <span>300+ Resources</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#12b8ff]" />
                <span>98% Success Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Notes Section */}
      <section
        ref={notesRef}
        className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#12b8ff]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#12b8ff]/50 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-blue-50 dark:bg-blue-900/20 text-[#12b8ff] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <BookOpen className="w-4 h-4 mr-1.5" />
                Smart Study Materials
              </span>
              <span className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white">
                Interactive <span className="text-[#12b8ff]">Notes</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
            >
              Premium quality notes with visual explanations, interactive
              diagrams, and practice problems designed for maximum retention.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {noteCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === category.id
                      ? "bg-[#12b8ff] text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Notes Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map((note, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                    note.featured
                      ? "border-2 border-[#12b8ff]/20"
                      : "border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {/* Thumbnail with hover effect */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={note.thumbnail}
                      alt={note.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Download button with hover reveal */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-4 py-2.5 bg-[#12b8ff] text-white rounded-full flex items-center font-medium transform hover:scale-105 transition-all">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full">
                        {noteCategories.find((cat) => cat.id === note.category)
                          ?.name || "General"}
                      </span>
                    </div>

                    {/* Featured badge if needed */}
                    {note.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-medium px-2.5 py-1 bg-[#12b8ff] text-white rounded-full flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-2">
                      {note.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {note.author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {note.pages} pages
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#12b8ff]">
                        <Download className="w-4 h-4 mr-1.5" />
                        <span className="text-sm font-medium">
                          {note.downloads} downloads
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl p-1 shadow-xl border border-blue-200/50 dark:border-blue-500/10"
          >
            <div className="bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-[calc(1.5rem-4px)] overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Sample PDF page preview */}
                <div className="md:w-1/2 p-8">
                  <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 shadow-inner h-full relative">
                    <div className="flex justify-between mb-6">
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        Data Structures
                      </h3>
                      <div className="text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                        Page 14/42
                      </div>
                    </div>

                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                      Binary Search Tree
                    </h4>

                    <div className="mb-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        Definition:
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        A binary search tree is a binary tree where each node
                        has up to two children, with all values in the left
                        subtree less than the node's value and all values in the
                        right subtree greater.
                      </p>
                    </div>

                    {/* Sample diagram */}
                    <div className="flex justify-center mb-4">
                      <div className="w-40 h-40 bg-white dark:bg-slate-800 rounded-lg shadow flex items-center justify-center p-2">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                          <circle
                            cx="60"
                            cy="20"
                            r="15"
                            className="fill-blue-500"
                          />
                          <text
                            x="60"
                            y="25"
                            textAnchor="middle"
                            className="fill-white text-xs font-bold"
                          >
                            10
                          </text>

                          <line
                            x1="50"
                            y1="32"
                            x2="30"
                            y2="50"
                            className="stroke-slate-400 stroke-2"
                          />
                          <circle
                            cx="30"
                            cy="65"
                            r="15"
                            className="fill-blue-400"
                          />
                          <text
                            x="30"
                            y="70"
                            textAnchor="middle"
                            className="fill-white text-xs font-bold"
                          >
                            5
                          </text>

                          <line
                            x1="70"
                            y1="32"
                            x2="90"
                            y2="50"
                            className="stroke-slate-400 stroke-2"
                          />
                          <circle
                            cx="90"
                            cy="65"
                            r="15"
                            className="fill-blue-400"
                          />
                          <text
                            x="90"
                            y="70"
                            textAnchor="middle"
                            className="fill-white text-xs font-bold"
                          >
                            15
                          </text>
                        </svg>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                      Time Complexity:
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-2 shadow-sm flex justify-around text-sm">
                      <div>
                        <div className="text-center font-mono text-blue-600 dark:text-blue-400">
                          O(log n)
                        </div>
                        <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                          Search
                        </div>
                      </div>
                      <div>
                        <div className="text-center font-mono text-blue-600 dark:text-blue-400">
                          O(log n)
                        </div>
                        <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                          Insert
                        </div>
                      </div>
                      <div>
                        <div className="text-center font-mono text-blue-600 dark:text-blue-400">
                          O(log n)
                        </div>
                        <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                          Delete
                        </div>
                      </div>
                    </div>

                    {/* Highlight markers */}
                    <div className="absolute top-4 right-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-8 bg-yellow-300 rounded-full opacity-70"></div>
                        <div className="w-2 h-8 bg-green-300 rounded-full opacity-70"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Not your average study notes
                  </h3>

                  <ul className="space-y-5">
                    {[
                      {
                        title: "Comprehensive Coverage",
                        description:
                          "From fundamentals to advanced topics, covering entire syllabus with detailed explanations.",
                        icon: BookOpen,
                        color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
                      },
                      {
                        title: "Visual Learning",
                        description:
                          "Diagrams, flowcharts, and visualizations that simplify complex concepts.",
                        icon: PenTool,
                        color:
                          "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
                      },
                      {
                        title: "Practice Problems",
                        description:
                          "Curated problems with step-by-step solutions to strengthen your understanding.",
                        icon: FileCheck,
                        color:
                          "text-green-500 bg-green-100 dark:bg-green-900/30",
                      },
                      {
                        title: "Previous Year Questions",
                        description:
                          "Analysis and solutions for past exam papers and placement questions.",
                        icon: Clock,
                        color:
                          "text-amber-500 bg-amber-100 dark:bg-amber-900/30",
                      },
                    ].map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mr-4`}
                        >
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white text-lg">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link to="/notes">
                      <button className="px-6 py-3 bg-[#12b8ff] hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        <span>Explore All Notes</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placement Calendar Section */}
      <section
        ref={placementRef}
        className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
      >
        {/* Background shapes */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100 to-blue-50/0 dark:from-blue-900/10 dark:to-transparent rounded-tl-3xl -z-10"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/2 bg-gradient-to-br from-slate-100 to-slate-50/0 dark:from-slate-800/10 dark:to-transparent rounded-br-3xl -z-10"></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col">
                <span className="bg-blue-50 dark:bg-blue-900/20 text-[#12b8ff] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center self-start mb-4">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Never Miss An Opportunity
                </span>
                <h2 className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white mb-6">
                  Placement <span className="text-[#12b8ff]">Calendar</span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Stay ahead in your placement journey with our comprehensive
                calendar tracking upcoming campus drives, application deadlines,
                and interview schedules.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Real-time notifications for upcoming events",
                  "Filter companies by branch and eligibility criteria",
                  "Detailed company profiles and job descriptions",
                  "Interview experience from successful candidates",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/placements">
                <button className="px-6 py-3 bg-[#12b8ff] hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>View Full Calendar</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Top bar with controls */}
              <div className="bg-[#12b8ff] text-white p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Placement Schedule</h3>
                  <div className="flex items-center gap-4">
                    <button className="p-1.5 rounded-full hover:bg-white/20 transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-medium">May 2025</span>
                    <button className="p-1.5 rounded-full hover:bg-white/20 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Calendar grid */}
              <div className="p-4 bg-white dark:bg-slate-800">
                {/* Days of week */}
                <div className="grid grid-cols-7 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, idx) => (
                      <div
                        key={idx}
                        className="text-center text-slate-500 dark:text-slate-400 text-sm py-2 font-medium"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>

                {/* Calendar dates */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Previous month days (greyed out) */}
                  {[28, 29, 30].map((date, idx) => (
                    <div key={`prev-${idx}`} className="p-1">
                      <div className="h-14 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-600">
                        {date}
                      </div>
                    </div>
                  ))}

                  {/* Current month days */}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                    // Check if date has an event
                    const hasEvent = placementEvents.some((event) => {
                      const eventDate = new Date(event.date);
                      return eventDate.getDate() === date;
                    });

                    return (
                      <div key={`current-${date}`} className="p-1">
                        <div
                          className={`relative h-14 rounded-lg flex flex-col items-center justify-start p-1 ${
                            hasEvent
                              ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50"
                              : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                          } transition-colors cursor-pointer group`}
                        >
                          <span
                            className={`text-sm ${
                              hasEvent
                                ? "font-medium text-[#12b8ff]"
                                : "text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {date}
                          </span>

                          {hasEvent && (
                            <div className="mt-1 w-5 h-1 bg-[#12b8ff] rounded-full"></div>
                          )}

                          {/* Tooltip on hover */}
                          {hasEvent && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {placementEvents
                                .filter((event) => {
                                  const eventDate = new Date(event.date);
                                  return eventDate.getDate() === date;
                                })
                                .map((event, idx) => (
                                  <div key={idx} className="mb-2 last:mb-0">
                                    <div className="flex items-center">
                                      <div className="w-6 h-6 rounded bg-white dark:bg-slate-700 p-1 mr-2">
                                        <img
                                          src={event.logo}
                                          alt={event.company}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                      <span className="text-xs font-medium text-slate-900 dark:text-white">
                                        {event.company}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Upcoming events list */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#12b8ff]" />
                  Upcoming Events
                </h4>

                <div className="space-y-3">
                  {placementEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center">
                          <img
                            src={event.logo}
                            alt={event.company}
                            className="max-w-full max-h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h5 className="font-medium text-slate-900 dark:text-white">
                              {event.company}
                            </h5>
                            <span className="text-xs text-[#12b8ff]">
                              {event.date}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {event.eligibility}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 flex gap-2 flex-wrap">
                        {event.roles.map((role, i) => (
                          <span
                            key={i}
                            className="inline-block px-2 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 rounded"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <button className="text-sm text-[#12b8ff] font-medium hover:underline">
                    View All Upcoming Events
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Roadmaps Section */}
      <section
        ref={roadmapsRef}
        className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent dark:from-[#080816] dark:to-transparent -z-10"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <Compass className="w-4 h-4 mr-1.5" />
                Guided Learning Paths
              </span>
              <span className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white">
                Learning <span className="text-[#12b8ff]">Roadmaps</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
            >
              Structured learning paths designed by experts to guide you from
              beginner to advanced levels in various domains.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {roadmaps.map((roadmap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden relative`}
                >
                  {/* Top progress bar */}
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700">
                    <div
                      className={`h-full ${
                        roadmap.color === "blue"
                          ? "bg-blue-500"
                          : roadmap.color === "purple"
                          ? "bg-purple-500"
                          : roadmap.color === "orange"
                          ? "bg-orange-500"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${roadmap.progress}%` }}
                    ></div>
                  </div>

                  <div className="p-6">
                    {/* Header with icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                            roadmap.color === "blue"
                              ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                              : roadmap.color === "purple"
                              ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                              : roadmap.color === "orange"
                              ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                              : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                          } group-hover:scale-110 transition-transform duration-300`}
                        >
                          <roadmap.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                          {roadmap.title}
                        </h3>
                      </div>

                      <div
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          roadmap.color === "blue"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                            : roadmap.color === "purple"
                            ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                            : roadmap.color === "orange"
                            ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                        }`}
                      >
                        {roadmap.steps} Steps
                      </div>
                    </div>

                    {/* Roadmap timeline visualization */}
                    <div className="space-y-4 mb-6">
                      {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="flex items-start">
                          <div
                            className={`relative mr-4 ${i < 2 ? "pb-4" : ""}`}
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 relative ${
                                i === 0
                                  ? `${
                                      roadmap.color === "blue"
                                        ? "bg-blue-500"
                                        : roadmap.color === "purple"
                                        ? "bg-purple-500"
                                        : roadmap.color === "orange"
                                        ? "bg-orange-500"
                                        : "bg-emerald-500"
                                    } text-white`
                                  : i === 1
                                  ? `${
                                      roadmap.color === "blue"
                                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 ring-2 ring-blue-500"
                                        : roadmap.color === "purple"
                                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400 ring-2 ring-purple-500"
                                        : roadmap.color === "orange"
                                        ? "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 ring-2 ring-orange-500"
                                        : "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400 ring-2 ring-emerald-500"
                                    }`
                                  : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {i === 0 ? (
                                <CheckCircle className="w-5 h-5" />
                              ) : i === 1 ? (
                                <span className="text-sm font-bold">2</span>
                              ) : (
                                <span className="text-sm font-bold">3</span>
                              )}
                            </div>

                            {/* Connecting line */}
                            {i < 2 && (
                              <div
                                className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-full ${
                                  i === 0
                                    ? `${
                                        roadmap.color === "blue"
                                          ? "bg-blue-500"
                                          : roadmap.color === "purple"
                                          ? "bg-purple-500"
                                          : roadmap.color === "orange"
                                          ? "bg-orange-500"
                                          : "bg-emerald-500"
                                      }`
                                    : "bg-slate-200 dark:bg-slate-700"
                                }`}
                              ></div>
                            )}
                          </div>

                          <div className="pt-1">
                            <h4
                              className={`font-medium ${
                                i <= 1
                                  ? "text-slate-900 dark:text-white"
                                  : "text-slate-500 dark:text-slate-400"
                              }`}
                            >
                              {i === 0
                                ? "Fundamentals"
                                : i === 1
                                ? "Core Concepts"
                                : "Advanced Topics"}
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                              {i === 0
                                ? "4 lessons completed"
                                : i === 1
                                ? "In progress (2/5)"
                                : "Coming soon"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                          Progress:{" "}
                        </span>
                        <span
                          className={`font-medium ${
                            roadmap.color === "blue"
                              ? "text-blue-600 dark:text-blue-400"
                              : roadmap.color === "purple"
                              ? "text-purple-600 dark:text-purple-400"
                              : roadmap.color === "orange"
                              ? "text-orange-600 dark:text-orange-400"
                              : "text-emerald-600 dark:text-emerald-400"
                          }`}
                        >
                          {roadmap.progress}%
                        </span>
                      </div>

                      <button
                        className={`flex items-center text-sm font-medium ${
                          roadmap.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : roadmap.color === "purple"
                            ? "text-purple-600 dark:text-purple-400"
                            : roadmap.color === "orange"
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-emerald-600 dark:text-emerald-400"
                        } hover:underline`}
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expanded view of a roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 rounded-3xl p-1 shadow-xl border border-slate-200/50 dark:border-slate-700/30"
          >
            <div className="bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-[calc(1.5rem-4px)] overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mr-4">
                        <Brain className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Machine Learning
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      A comprehensive roadmap to master Machine Learning from
                      foundational concepts to advanced applications, with
                      practical projects.
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center">
                        <Book className="w-5 h-5 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          15 Milestones
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          6 months
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                        Your Progress
                      </h4>
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mb-2">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          40% Complete
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          6/15 Steps
                        </span>
                      </div>

                      <button className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Continue Learning
                      </button>
                    </div>
                  </div>

                  <div className="md:w-2/3 mt-6 md:mt-0">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                        <GitBranch className="w-5 h-5 text-blue-500 mr-2" />
                        Learning Path
                      </h4>

                      <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute top-0 bottom-0 left-[29px] w-px bg-slate-200 dark:bg-slate-700"></div>

                        <div className="space-y-8">
                          {[
                            {
                              title: "Python Fundamentals",
                              status: "completed",
                              modules: 4,
                              duration: "2 weeks",
                            },
                            {
                              title: "Mathematics for ML",
                              status: "completed",
                              modules: 3,
                              duration: "3 weeks",
                            },
                            {
                              title: "Data Preprocessing",
                              status: "in-progress",
                              modules: 5,
                              duration: "4 weeks",
                            },
                            {
                              title: "Supervised Learning",
                              status: "upcoming",
                              modules: 6,
                              duration: "5 weeks",
                            },
                            {
                              title: "Deep Learning",
                              status: "upcoming",
                              modules: 7,
                              duration: "8 weeks",
                            },
                          ].map((step, idx) => (
                            <div key={idx} className="relative flex">
                              <div
                                className={`w-[60px] flex-shrink-0 z-10 ${
                                  idx === step.length - 1 ? "" : "pb-8"
                                }`}
                              >
                                <div
                                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center ${
                                    step.status === "completed"
                                      ? "bg-blue-500 text-white"
                                      : step.status === "in-progress"
                                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 ring-2 ring-blue-500"
                                      : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                                  }`}
                                >
                                  {step.status === "completed" ? (
                                    <CheckCircle className="w-6 h-6" />
                                  ) : (
                                    <span className="text-xl font-bold">
                                      {idx + 1}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div
                                className={`flex-1 pt-1.5 pb-8 ${
                                  idx === step.length - 1 ? "pb-0" : ""
                                }`}
                              >
                                <div className="pl-6">
                                  <h5
                                    className={`font-medium text-lg ${
                                      step.status === "upcoming"
                                        ? "text-slate-500 dark:text-slate-400"
                                        : "text-slate-900 dark:text-white"
                                    }`}
                                  >
                                    {step.title}
                                  </h5>

                                  <div className="flex flex-wrap gap-3 mt-2">
                                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                      <Book className="w-4 h-4 mr-1.5" />
                                      {step.modules} Modules
                                    </div>
                                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                      <Clock className="w-4 h-4 mr-1.5" />
                                      {step.duration}
                                    </div>
                                  </div>

                                  {step.status === "in-progress" && (
                                    <div className="mt-3 flex items-center">
                                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mr-3 flex-1">
                                        <div
                                          className="h-full bg-blue-500 rounded-full"
                                          style={{ width: "60%" }}
                                        ></div>
                                      </div>
                                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                        60%
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* View all roadmaps CTA */}
          <div className="mt-12 text-center">
            <Link to="/roadmaps">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
                <Compass className="w-5 h-5 mr-2" />
                <span>Explore All Roadmaps</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        ref={communityRef}
        className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-[#0C0C20] dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent dark:from-[#0C0C20] dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col">
                <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center self-start mb-4">
                  <Users className="w-4 h-4 mr-1.5" />
                  Learn Together
                </span>
                <h2 className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white mb-6">
                  Supportive <span className="text-[#12b8ff]">Community</span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Connect with peers, share knowledge, and get help when you need
                it. Our community brings together students to learn and grow
                together.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Ask questions and get quick answers from peers and seniors",
                  "Form study groups for collaborative learning",
                  "Share resources and study materials",
                  "Get guidance from experienced mentors",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/community">
                <button className="px-6 py-3 bg-[#12b8ff] hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Join Our Community</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Community Discussions
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs font-medium">24 Online</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Trending topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    All Topics
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
                    Placements
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    Academics
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    Projects
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
                    Q&A
                  </span>
                </div>

                {/* Discussion threads */}
                <div className="space-y-4">
                  {[
                    {
                      author: "Ankit Verma",
                      avatar: "AV",
                      time: "12 minutes ago",
                      title: "How to approach system design questions?",
                      content:
                        "I have an upcoming interview and I'm struggling with system design questions. Any tips or resources?",
                      replies: 8,
                      likes: 12,
                      isPinned: true,
                    },
                    {
                      author: "Priya Mehta",
                      avatar: "PM",
                      time: "3 hours ago",
                      title: "Study group for Machine Learning",
                      content:
                        "Looking for peers interested in forming a study group for the upcoming ML course...",
                      replies: 15,
                      likes: 24,
                      isPinned: false,
                    },
                    {
                      author: "Rahul Singh",
                      avatar: "RS",
                      time: "Yesterday",
                      title: "Resume review request for SDE roles",
                      content:
                        "Would appreciate if someone could review my resume for upcoming SDE applications...",
                      replies: 4,
                      likes: 7,
                      isPinned: false,
                    },
                  ].map((thread, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            {thread.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">
                              {thread.author}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {thread.time}
                            </div>
                          </div>
                        </div>

                        {thread.isPinned && (
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-xs font-medium">Pinned</span>
                          </div>
                        )}
                      </div>

                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                        {thread.title}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                        {thread.content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center">
                            <MessageSquare className="w-3.5 h-3.5 mr-1" />{" "}
                            {thread.replies} replies
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3.5 h-3.5 mr-1" />{" "}
                            {thread.likes} likes
                          </span>
                        </div>
                        <button className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
                          Join Discussion
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors">
                    View All Discussions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section
        ref={videosRef}
        className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <Play className="w-4 h-4 mr-1.5" />
                Visual Learning
              </span>
              <span className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white">
                Video <span className="text-[#12b8ff]">Tutorials</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
            >
              Watch expert-led video content that simplifies complex topics
              through visual explanations and step-by-step demonstrations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTutorials.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform transition-transform group-hover:scale-110">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#12b8ff] border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-slate-900/70 text-white text-xs font-medium rounded">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-2">
                      {video.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {video.instructor}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {video.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/g4EHCU-o4tA?si=Zp4jeQNd7-vS1lrb"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Neural Networks Explained: A Comprehensive Guide
                    </h3>
                    <p className="text-slate-300">
                      Learn how neural networks work through visual explanations
                      and practical examples. Perfect for beginners and
                      intermediate learners alike.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center mr-6">
                    <User className="w-5 h-5 mr-2 text-slate-400" />
                    <span className="text-slate-300">Mayank Yadav</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Clock className="w-5 h-5 mr-2 text-slate-400" />
                    <span className="text-slate-300">15 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-slate-400" />
                    <span className="text-slate-300">350+ views</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link to="/videos">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all flex items-center mx-auto">
                <Youtube className="w-5 h-5 mr-2" />
                <span>Browse All Tutorials</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cheatsheets & Quick References Section */}
      <section
        ref={cheatsheetsRef}
        className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col">
                <span className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center self-start mb-4">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Quick Revision
                </span>
                <h2 className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white mb-6">
                  Cheatsheets &{" "}
                  <span className="text-[#12b8ff]">References</span>
                </h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Condense complex topics into easy-to-digest formats perfect for
                revision and reference during exams or interviews.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Printable PDF formats for offline use",
                  "Key concepts and formulas at a glance",
                  "Examples and edge cases highlighted",
                  "Subject-specific quick references",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link to="/cheatsheets">
                <button className="px-6 py-3 bg-[#12b8ff] hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Browse All Cheatsheets</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                {/* Tabs for cheatsheet navigation */}
                <div className="flex border-b border-slate-200 dark:border-slate-700">
                  {[
                    "Algorithms",
                    "Data Structures",
                    "Design Patterns",
                    "SQL",
                  ].map((tab, idx) => (
                    <button
                      key={idx}
                      className={`flex-1 py-3 px-4 text-center text-sm font-medium ${
                        idx === 0
                          ? "text-[#12b8ff] border-b-2 border-[#12b8ff]"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Cheatsheet Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Code className="w-5 h-5 text-[#12b8ff] mr-2" />
                    Sorting Algorithms Cheatsheet
                  </h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-700 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                            Algorithm
                          </th>
                          <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                            Time Complexity
                          </th>
                          <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                            Space Complexity
                          </th>
                          <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-600">
                            Stable
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Quick Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n log n)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(log n)
                          </td>
                          <td className="px-4 py-3 text-red-500">No</td>
                        </tr>
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Merge Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n log n)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n)
                          </td>
                          <td className="px-4 py-3 text-green-500">Yes</td>
                        </tr>
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Heap Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n log n)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(1)
                          </td>
                          <td className="px-4 py-3 text-red-500">No</td>
                        </tr>
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Bubble Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n²)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(1)
                          </td>
                          <td className="px-4 py-3 text-green-500">Yes</td>
                        </tr>
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Selection Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n²)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(1)
                          </td>
                          <td className="px-4 py-3 text-red-500">No</td>
                        </tr>
                        <tr className="text-sm bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            Insertion Sort
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(n²)
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-mono">
                            O(1)
                          </td>
                          <td className="px-4 py-3 text-green-500">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Code example */}
                  <div className="mb-6">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                      Implementation Example (Quick Sort):
                    </div>
                    <div className="bg-slate-800 rounded-lg text-white p-4 font-mono text-sm overflow-x-auto">
                      <pre className="text-slate-300">
                        {`function quickSort(arr) {
 if (arr.length <= 1) return arr;
 
 const pivot = arr[Math.floor(arr.length / 2)];
 const left = arr.filter(x => x < pivot);
 const middle = arr.filter(x => x === pivot);
 const right = arr.filter(x => x > pivot);
 
 return [...quickSort(left), ...middle, ...quickSort(right)];
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>

                    <button className="flex items-center gap-1 px-3 py-1.5 bg-[#12b8ff] text-white rounded-lg text-sm hover:bg-blue-500 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section
        ref={projectsRef}
        className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <PenTool className="w-4 h-4 mr-1.5" />
                Build & Showcase
              </span>
              <span className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white">
                Student <span className="text-[#12b8ff]">Projects</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
            >
              Explore outstanding projects built by students and get inspired
              for your next creation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 relative">
                  {/* Project thumbnail */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Star count */}
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-amber-400/90 text-amber-900 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-amber-900" />
                        {project.stars}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="text-sm text-[#12b8ff] hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all flex items-center mx-auto">
                <PenTool className="w-5 h-5 mr-2" />
                <span>Explore All Projects</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNCA0aC00djJoNHYtMnptMCA0di0yMGgtMnYyMGgyem0wLTI0di0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-indigo-900/40 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <Star className="w-4 h-4 mr-1.5" />
                Success Stories
              </span>
              <span className="text-4xl md:text-5xl font-anta text-white">
                Student <span className="text-[#12b8ff]">Testimonials</span>
              </span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Testimonial Slides */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentTestimonial * 100}%` }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="flex"
                >
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#12b8ff]">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="mb-4">
                              {[0, 1, 2, 3, 4].map((_, i) => (
                                <Star
                                  key={i}
                                  className="inline-block w-5 h-5 text-amber-400 fill-amber-400 mr-0.5"
                                />
                              ))}
                            </div>

                            <blockquote className="text-xl text-white mb-6 italic">
                              "{testimonial.text}"
                            </blockquote>

                            <div>
                              <div className="font-medium text-white text-lg">
                                {testimonial.name}
                              </div>
                              <div className="text-slate-400">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={currentTestimonial === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentTestimonial === 0
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      Math.min(prev + 1, testimonials.length - 1)
                    )
                  }
                  disabled={currentTestimonial === testimonials.length - 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentTestimonial === testimonials.length - 1
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      idx === currentTestimonial
                        ? "bg-blue-500"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section - Feature Grid */}
      <section ref={exploreRef} className="py-24 bg-white dark:bg-[#0C0C20]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="bg-blue-50 dark:bg-blue-900/20 text-[#12b8ff] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                <Compass className="w-4 h-4 mr-1.5" />
                Unlock Your Potential
              </span>
              <span className="text-4xl md:text-5xl font-anta text-slate-900 dark:text-white">
                Explore <span className="text-[#12b8ff]">All Features</span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
            >
              A comprehensive suite of tools designed to enhance your academic
              journey and prepare you for professional success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Notes",
                description:
                  "Comprehensive study materials with visualizations and interactive elements.",
                icon: BookOpen,
                color: "blue",
                link: "/notes",
              },
              {
                title: "Placement Calendar",
                description:
                  "Never miss recruitment opportunities with our smart calendar and alerts.",
                icon: Calendar,
                color: "sky",
                link: "/placements",
              },
              {
                title: "Learning Roadmaps",
                description:
                  "Follow structured learning paths from beginner to advanced levels.",
                icon: Compass,
                color: "purple",
                link: "/roadmaps",
              },
              {
                title: "Student Community",
                description:
                  "Connect with peers, share knowledge, and collaborate on projects.",
                icon: Users,
                color: "indigo",
                link: "/community",
              },
              {
                title: "Video Tutorials",
                description:
                  "Visual explanations of complex topics through expert-led videos.",
                icon: Play,
                color: "red",
                link: "/videos",
              },
              {
                title: "Quick Reference Guides",
                description:
                  "Concise cheatsheets for exam preparation and interview revision.",
                icon: FileText,
                color: "amber",
                link: "/cheatsheets",
              },
              {
                title: "Project Showcase",
                description:
                  "Display your work and get inspired by other student projects.",
                icon: PenTool,
                color: "green",
                link: "/projects",
              },
              {
                title: "Interview Prep",
                description:
                  "Practice with mock interviews and review shared experiences.",
                icon: Briefcase,
                color: "gray",
                link: "/interviews",
              },
              {
                title: "Resource Library",
                description:
                  "Access to books, papers, and articles for in-depth learning.",
                icon: Archive,
                color: "rose",
                link: "/resources",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group"
              >
                <Link to={feature.link}>
                  <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-800/30">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        feature.color === "blue"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          : feature.color === "sky"
                          ? "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400"
                          : feature.color === "purple"
                          ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                          : feature.color === "indigo"
                          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                          : feature.color === "red"
                          ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : feature.color === "amber"
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                          : feature.color === "green"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : feature.color === "rose"
                          ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                      }`}
                    >
                      <feature.icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-[#12b8ff] transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-[#12b8ff] font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-anta mb-6"
            >
              Ready to Transform Your Learning Journey?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Join thousands of students who are excelling in academics and
              placements with ColleGPT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/register">
                <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center group">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-4 bg-blue-500/30 hover:bg-blue-500/40 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 transition-all">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;