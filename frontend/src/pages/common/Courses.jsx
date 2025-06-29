import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { getAllSemesters } from "../../data/coursedata";
import { 
  BookOpen, 
  ChevronRight, 
  Sparkles, 
  Star, 
  Users, 
  Clock, 
  Search, 
  Filter,
  X,
  Bookmark,
  BookmarkPlus,
  ChevronDown,
  Award,
  Lightbulb
} from "lucide-react";

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [hoverCard, setHoverCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSemesterIndex, setActiveSemesterIndex] = useState(0);
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);
  
  const searchInputRef = useRef(null);
  const gridRef = useRef(null);
  
  // Mouse parallax effect for hero section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const backgroundX = useTransform(mouseX, [-300, 300], [10, -10]);
  const backgroundY = useTransform(mouseY, [-300, 300], [10, -10]);
  
  const springConfig = { damping: 25, stiffness: 100 };
  const backgroundXSpring = useSpring(backgroundX, springConfig);
  const backgroundYSpring = useSpring(backgroundY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadSemesters = async () => {
      setIsLoading(true);
      try {
        // Try to get the semesters data
        let data = getAllSemesters();
        
        // If it's a promise, await it
        if (data instanceof Promise) {
          data = await data;
        }
        
        // Make sure we have an array
        if (data && Array.isArray(data)) {
          setSemesters(data);
        } else {
          console.error("Semesters data is not an array:", data);
          // Fallback to empty array
          setSemesters([]);
        }
      } catch (error) {
        console.error("Error loading semesters:", error);
        setSemesters([]);
      } finally {
        setIsLoading(false);
      }
      
      // Load active tab from localStorage
      const storedActiveTab = localStorage.getItem("activeTab");
      if (storedActiveTab !== null) {
        setActiveTab(parseInt(storedActiveTab, 10));
        setActiveSemesterIndex(parseInt(storedActiveTab, 10));
      }
      
      // Load favorites from localStorage
      const storedFavorites = localStorage.getItem("courseFavorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    
    loadSemesters();
  }, []);

  useEffect(() => {
    // Save favorites to localStorage
    localStorage.setItem("courseFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSemesterIndex(index);
    localStorage.setItem("activeTab", index);
    setIsSemesterDropdownOpen(false);
  };

  const toggleFavorite = (semesterId, courseId) => {
    const favoriteKey = `${semesterId}-${courseId}`;
    if (favorites.includes(favoriteKey)) {
      setFavorites(favorites.filter(fav => fav !== favoriteKey));
    } else {
      setFavorites([...favorites, favoriteKey]);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
    
    setMousePosition({ x, y });
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
    setShowFilterMenu(false);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setShowFilterMenu(false);
  };

  // Filter and sort courses based on current state
  const getFilteredCourses = () => {
    if (!semesters.length || activeTab >= semesters.length || !semesters[activeTab]?.subjects) {
      return [];
    }
    
    let filteredCourses = [...semesters[activeTab].subjects];
    
    // Apply search term filter
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(searchLower) || 
        course.description.toLowerCase().includes(searchLower) ||
        course.code.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply category filter
    if (filterBy !== "all") {
      filteredCourses = filteredCourses.filter(course => {
        if (filterBy === "favorites") {
          return favorites.includes(`${semesters[activeTab].id}-${course.id}`);
        }
        // Here you can add more filters like required/elective if you have that data
        return true;
      });
    }
    
    // Apply sorting
    filteredCourses.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "code":
          return a.code.localeCompare(b.code);
        case "units":
          return b.totalUnits - a.totalUnits;
        case "popular":
        default:
          // For demo purposes, let's sort by id as a proxy for popularity
          return a.id - b.id;
      }
    });
    
    return filteredCourses;
  };

  // Mac-inspired animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    }
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      } 
    },
    hover: {
      scale: 1.05, 
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }
    }
  };

  const filteredCourses = getFilteredCourses();

  const toggleSemesterDropdown = () => {
    setIsSemesterDropdownOpen(!isSemesterDropdownOpen);
  };

  // If loading, show a Mac-inspired loading state
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-slate-200 dark:border-slate-700"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 animate-spin border-t-brand-500"></div>
        </div>
        <p className="mt-6 font-medium text-slate-600 dark:text-slate-300">Loading courses...</p>
      </div>
    );
  }

  // If no semesters data, show an error state
  if (!semesters || semesters.length === 0) {
    return (
      <div className="px-4 py-16 mx-auto mt-12 max-w-xl text-center bg-white rounded-3xl border shadow-lg dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 text-red-500 bg-red-100 rounded-full dark:bg-red-900/30 dark:text-red-400">
          <X className="w-10 h-10" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">No Courses Available</h2>
        <p className="mb-8 text-slate-600 dark:text-slate-300">
          We couldn't load the course data. Please try again later or contact support if the problem persists.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium shadow-lg shadow-brand-500/20 transition-all"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20 min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Floating "Back to top" button - appears when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex fixed right-6 bottom-6 z-50 justify-center items-center w-12 h-12 bg-white rounded-full border shadow-lg transition-colors dark:bg-slate-800 text-brand-500 border-slate-200 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700"
          >
            <ChevronDown className="w-6 h-6 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Hero Section with parallax effect */}
      <section 
        className="overflow-hidden relative py-10"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Background Elements */}
        <div className="overflow-hidden absolute inset-0 -z-10">
          {/* Animated gradient background */}
          <motion.div
            style={{ 
              x: backgroundXSpring,
              y: backgroundYSpring,
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 -left-1/4 w-2/3 h-2/3 bg-gradient-to-br rounded-full blur-3xl from-brand-400/20 to-purple-500/10 dark:from-brand-400/10 dark:to-purple-500/5"></div>
            <div className="absolute bottom-0 -right-1/4 w-2/3 h-2/3 bg-gradient-to-tl rounded-full blur-3xl from-indigo-500/15 to-accent-400/10 dark:from-indigo-500/10 dark:to-accent-400/5"></div>
          </motion.div>
          
          {/* Mac-like window base pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-50 dark:opacity-30"></div>
          
          {/* Glass-like reflections */}
          <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent via-slate-200 dark:via-slate-700"></div>
          <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent via-slate-200 dark:via-slate-700"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full mix-blend-screen dark:bg-slate-400"
                style={{
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5,
                }}
                animate={{
                  y: [0, -Math.random() * 100 - 50],
                  opacity: [0, Math.random() * 0.5 + 0.1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto sm:px-6">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              damping: 25,
              stiffness: 100
            }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-md text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              <span>Interactive Learning Resources</span>
            </motion.div>
            
            <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-display">
              <span className="block text-slate-900 dark:text-white">Explore Our</span>
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-500 dark:from-brand-400 dark:via-indigo-400 dark:to-accent-400 text-transparent bg-clip-text animate-gradient bg.size-200">
                Class-Leading Courses
              </span>
            </h1>
            
            <motion.p 
              className="mx-auto mb-10 max-w-3xl text-xl text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Access carefully curated learning materials organized by semester with interactive tools, practice exercises, and collaborative features.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button className="flex items-center px-6 py-3 font-medium text-white rounded-xl shadow-lg transition-all bg-brand-500 hover:bg-brand-600 shadow-brand-500/25 hover:shadow-brand-500/40">
                <Lightbulb className="mr-2 w-5 h-5" />
                <span>Start Learning</span>
              </button>
              
              <button className="flex items-center px-6 py-3 font-medium bg-white rounded-xl border shadow transition-all dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700">
                <BookOpen className="mr-2 w-5 h-5 text-brand-500" />
                <span>Browse by Category</span>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-8 justify-center text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center">
                <Award className="mr-2 w-5 h-5 text-amber-500" />
                <span>Expert-crafted content</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 w-5 h-5 text-indigo-500" />
                <span>5,000+ Students</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 w-5 h-5 text-green-500" />
                <span>Regular updates</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Mac-inspired glowing scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="flex justify-center w-8 h-12 rounded-full border-2 border-slate-400 dark:border-slate-600"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-brand-500 dark:bg-brand-400 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Improved Modern Style Semester Selection */}
      <div className="container px-4 mx-auto mb-10 sm:px-6">
        <motion.div 
          className="overflow-hidden relative mx-auto max-w-5xl bg-white rounded-2xl border shadow-xl backdrop-blur-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Enhanced Semester Dropdown on Mobile */}
          <div className="p-3 md:hidden">
            <button
              onClick={toggleSemesterDropdown}
              className="flex justify-between items-center px-4 py-3 w-full font-medium rounded-xl border transition-all bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white border-slate-200 dark:border-slate-600"
            >
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-brand-500 mr-2.5"></span>
                <span>{semesters[activeSemesterIndex]?.title || "Select Semester"}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isSemesterDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isSemesterDropdownOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 bg-white rounded-xl border shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                >
                  <div className="overflow-y-auto p-2 max-h-64">
                    {semesters.map((semester, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 last:mb-0 transition-all ${
                          activeSemesterIndex === index
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 font-medium"
                            : "hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <span className={`w-2 h-2 rounded-full mr-2.5 ${
                          activeSemesterIndex === index 
                            ? "bg-brand-500" 
                            : "bg-slate-300 dark:bg-slate-600"
                        }`}></span>
                        {semester.title}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Improved Semester Tabs for Desktop */}
          <div className="hidden overflow-x-auto justify-between p-2 md:flex scrollbar-hide">
            <div className="flex">
              {semesters.map((semester, index) => (
                <motion.button
                  key={index}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeTab === index ? "active" : "inactive"}
                  whileHover="hover"
                  onClick={() => handleTabClick(index)}
                  className={`relative min-w-[120px] py-3 px-5 rounded-xl font-medium text-base transition-all duration-300
                    ${activeTab === index 
                      ? "text-white shadow-md z-10" 
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    }`}
                >
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r to-indigo-600 rounded-xl from-brand-500 dark:from-brand-600 dark:to-indigo-700 -z-10"
                      layoutId="activeSemTab"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                  <span className="relative z-10">{semester.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Bar (Filters, Search) */}
      <div className="sticky top-0 z-40 px-4 py-3 mb-8 border-b shadow-sm backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
        <div className="container mx-auto">
          <div className="flex gap-4 justify-between items-center">
            <div className="flex flex-grow items-center space-x-4">
              {/* Search Input */}
              <div className="relative flex-1 md:max-w-xs">
                <AnimatePresence>
                  {isSearchOpen || window.innerWidth > 768 ? (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="py-2 pr-4 pl-10 w-full rounded-lg bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-brand-500 focus:outline-none text-slate-800 dark:text-white placeholder-slate-400"
                      />
                      <Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-slate-400" />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={toggleSearch}
                      className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Search className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Filter dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
                
                <AnimatePresence>
                  {showFilterMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="overflow-hidden absolute right-0 z-50 mt-2 w-64 bg-white rounded-xl border shadow-xl dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                    >
                      <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Filter by</h4>
                      </div>
                      <div className="p-3 space-y-2">
                        <button
                          onClick={() => handleFilterChange("all")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "all" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          All Courses
                        </button>
                        <button
                          onClick={() => handleFilterChange("favorites")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            filterBy === "favorites" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          Favorites
                        </button>
                        {/* Add more filters as needed */}
                      </div>
                      
                      <div className="p-3 border-t border-b border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Sort by</h4>
                      </div>
                      <div className="p-3 space-y-2">
                        <button
                          onClick={() => handleSortChange("popular")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "popular" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          Popularity
                        </button>
                        <button
                          onClick={() => handleSortChange("name")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "name" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          Course Name
                        </button>
                        <button
                          onClick={() => handleSortChange("code")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "code" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          Course Code
                        </button>
                        <button
                          onClick={() => handleSortChange("units")}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                            sortBy === "units" 
                              ? "bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 font-medium" 
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                          }`}
                        >
                          Credit Units (High to Low)
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Results count and info */}
            <div className="hidden md:block">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {filteredCourses.length === 0 ? (
                  "No courses found"
                ) : (
                  <>Showing <span className="font-medium text-slate-700 dark:text-slate-300">{filteredCourses.length}</span> {filteredCourses.length === 1 ? "course" : "courses"}</>
                )}
                {searchTerm && <> matching "<span className="font-medium text-brand-500">{searchTerm}</span>"</>}
                {filterBy === "favorites" && <> in your <span className="font-medium text-amber-500">favorites</span></>}
              </p>
            </div>
          </div>
          
          {/* Mobile Results Count */}
          <div className="flex justify-between items-center mt-4 md:hidden">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {filteredCourses.length === 0 ? (
                "No courses found"
              ) : (
                <>Showing <span className="font-medium text-slate-700 dark:text-slate-300">{filteredCourses.length}</span> {filteredCourses.length === 1 ? "course" : "courses"}</>
              )}
              {searchTerm && <> matching "<span className="font-medium text-brand-500">{searchTerm}</span>"</>}
              {filterBy === "favorites" && <> in your <span className="font-medium text-amber-500">favorites</span></>}
            </p>
            
            {searchTerm && filteredCourses.length === 0 && (
              <button 
                onClick={() => setSearchTerm("")}
                className="text-sm font-medium text-brand-500 hover:text-brand-600"
              >
                Clear search
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto sm:px-6">
        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center px-4 py-16 mx-auto max-w-2xl bg-white rounded-2xl border shadow-md dark:bg-slate-800 border-slate-200 dark:border-slate-700"
          >
            <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">No courses found</h3>
            <p className="mb-6 max-w-md text-center text-slate-500 dark:text-slate-400">
              {searchTerm
                ? `We couldn't find any courses matching "${searchTerm}". Try a different search term or clear your filters.`
                : filterBy === "favorites"
                ? "You don't have any favorite courses yet. Mark courses as favorites to see them here."
                : "There are no courses available for this semester. Please check back later or select a different semester."}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-5 py-2 font-medium text-white rounded-lg shadow-md transition-colors bg-brand-500 hover:bg-brand-600"
              >
                Clear Search
              </button>
            )}
          </motion.div>
        )}

        {/* Course Grid View */}
        {filteredCourses.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${searchTerm}-${filterBy}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[300px]"
            >
              <motion.div 
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                ref={gridRef}
              >
                {filteredCourses.map((course, index) => (
                  <CourseCard 
                    key={course.id}
                    course={course}
                    semester={semesters[activeTab]}
                    index={index}
                    isFavorite={favorites.includes(`${semesters[activeTab].id}-${course.id}`)}
                    onToggleFavorite={() => toggleFavorite(semesters[activeTab].id, course.id)}
                    setHoverCard={setHoverCard}
                    hoverCard={hoverCard}
                  />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

// Enhanced Card view component with improved hover effects
const CourseCard = ({ course, semester, index, isFavorite, onToggleFavorite, setHoverCard, hoverCard }) => {
  // Animation variants for cards
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      onMouseEnter={() => setHoverCard(index)}
      onMouseLeave={() => setHoverCard(null)}
      className="h-full"
    >
      <div className={`group relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 border border-slate-200 dark:border-slate-700 ${hoverCard === index ? 'shadow-2xl scale-[1.02] border-brand-300 dark:border-brand-700' : ''}`}>
        {/* New improved glow effect on hover */}
        <div className={`absolute -inset-1 rounded-2xl opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-700 ${hoverCard === index ? 'opacity-40' : ''}`}></div>
        
        <div className="flex relative flex-col h-full">
          {/* Course Thumbnail */}
          <div className="overflow-hidden relative h-48">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={course.thumbnail || "/images/sample.webp"} 
                alt={course.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/images/sample.webp"; // Fallback image
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t pointer-events-none from-black/80 via-black/40 to-black/10"></div>
            
            <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-xs font-medium rounded-full flex items-center shadow-sm">
              <BookOpen className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
              <span>{course.totalUnits} Units</span>
            </div>
            
            {/* Favorite button with enhanced animation */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="flex absolute top-3 right-3 justify-center items-center w-8 h-8 rounded-full shadow-lg backdrop-blur-sm transition-all bg-white/80 dark:bg-slate-900/80 text-slate-400 dark:text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:scale-110"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {isFavorite ? (
                  <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                ) : (
                  <BookmarkPlus className="w-4 h-4" />
                )}
              </motion.div>
            </button>
            
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r from-brand-500 to-indigo-500 text-white text-xs font-semibold rounded-lg shadow-lg transform -skew-x-6">
              {course.code}
            </div>
          </div>
          
          {/* Course Info with improved styling */}
          <div className="flex flex-col flex-grow p-6">
            <h3 className="mb-3 text-xl font-bold transition-colors text-slate-900 dark:text-white line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400">
              {course.title}
            </h3>
            
            <p className="flex-grow mb-5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
              {course.description}
            </p>
            
          
            
            <Link 
              to={`/semester/${semester.id}/${course.id}`} 
              className="inline-flex overflow-hidden relative justify-center items-center px-4 py-3 w-full font-medium text-white bg-gradient-to-r to-indigo-600 rounded-xl shadow-md transition-all from-brand-500 group-hover:shadow-xl group/btn"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-transparent -translate-x-full via-white/30 group-hover:animate-shine"></div>
              
              <span>Explore Course</span>
              <ChevronRight className="ml-2 w-5 h-5 transition-transform transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;