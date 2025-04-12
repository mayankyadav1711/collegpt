// In Courses.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getAllSemesters } from "../../data/coursedata";
import { BookOpen, ChevronRight, Sparkles, Star, Users, Clock } from "lucide-react";

const Courses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverCard, setHoverCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    };
    
    loadSemesters();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMousePosition({ x, y });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    }
  };

  const tabVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      } 
    }
  };

  // If loading or no data, show a loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  // If no semesters data, show an error state
  if (!semesters || semesters.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Courses Available</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          We couldn't load the course data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section 
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient blobs */}
        <div 
          className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-brand-400/10 to-brand-600/5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-indigo-600/10 to-purple-600/5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/20 dark:bg-grid-slate-700/20 bg-[size:20px_20px] mask-image:radial-gradient(circle, white, transparent)"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-500/20 dark:bg-brand-400/20 mix-blend-screen"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
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

      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 text-sm font-medium mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Interactive Learning Experience</span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="block text-slate-900 dark:text-white">Explore Our</span>
          <span className="bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400 text-transparent bg-clip-text">
            Comprehensive Courses
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Access structured learning materials organized by semester to enhance your academic journey
        </p>
      </motion.div>

      {/* Semester Tabs */}
      <div className="flex flex-col items-center justify-center mb-16">
        {/* Tabs for large screens */}
        <div className="hidden lg:block mb-8 relative">
          <motion.div 
            className="inline-flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-xl p-2 shadow-xl border border-slate-200/50 dark:border-slate-700/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {semesters.map((semester, index) => (
              <motion.button
                key={index}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === index ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTabClick(index)}
                className={`relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeTab === index 
                    ? "text-white shadow-md" 
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                {activeTab === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500 to-indigo-600 dark:from-brand-600 dark:to-indigo-700 rounded-lg -z-10"
                    layoutId="activeTab"
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
          </motion.div>
        </div>
        
        {/* Tabs for small screens */}
        <div className="lg:hidden space-y-2">
          <motion.div 
            className="flex justify-center flex-wrap gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {semesters.map((semester, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeTab === index 
                    ? "bg-gradient-to-r from-brand-500 to-indigo-600 text-white shadow-md" 
                    : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                  }`}
              >
                {semester.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Courses Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {semesters.length > 0 && activeTab < semesters.length && semesters[activeTab]?.subjects && (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {semesters[activeTab].subjects.map((course, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoverCard(index)}
                  onMouseLeave={() => setHoverCard(null)}
                >
                  <div className="group relative h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-70 blur transition duration-500 ${hoverCard === index ? 'opacity-70' : 'opacity-0'}`}></div>
                    
                    <div className="relative h-full">
                      {/* Course Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <motion.img 
                          src={course.thumbnail || "/images/sample.webp"} 
                          alt={course.title} 
                          className="w-full h-full object-cover transition-transform duration-700"
                          whileHover={{ scale: 1.1 }}
                          onError={(e) => {
                            e.target.src = "/images/sample.webp"; // Fallback image if thumbnail fails to load
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 pointer-events-none"></div>
                        
                        <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-xs font-medium rounded-full flex items-center">
                          <BookOpen className="w-3.5 h-3.5 mr-1.5 text-brand-500" />
                          <span>{course.totalUnits} Units</span>
                        </div>
                        
                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-xs font-medium rounded-full">
                          {course.code}
                        </div>
                      </div>
                      
                      {/* Course Info */}
                      <div className="p-6">
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {course.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 line-clamp-3">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center gap-4 mb-5 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1.5 text-brand-500" />
                            <span>500+ Students</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5 text-brand-500" />
                            <span>{course.totalUnits * 2}h Content</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1.5 text-amber-500 fill-amber-500" />
                            <span>4.8/5</span>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/semester/${semesters[activeTab].id}/${course.id}`} 
                          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white rounded-xl font-medium shadow-md hover:shadow-xl transition-all group/btn"
                        >
                          <span>Explore Course</span>
                          <ChevronRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Courses;