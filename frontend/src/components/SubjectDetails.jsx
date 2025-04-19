import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getSemester } from "../data/coursedata";
import { useAppContext } from "../context/AppContext";
import toast, { Toaster } from 'react-hot-toast';
import { 
  BookOpen, 
  ArrowLeft, 
  FileText,
  Clock,
  ChevronRight,
  Layers,
  Star,
  Download,
  Users,
  Share2,
  Bookmark,
  Play,
  Eye,
  LayoutGrid,
  Linkedin,
  Copy,
  X,
  ChevronDown
} from "lucide-react";

const SubjectDetails = () => {
  const { semesterId, subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [semester, setSemester] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("content");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hoverUnit, setHoverUnit] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  
  // Get auth from context
  const { auth, theme } = useAppContext();
  
  // Ref for the share button
  const shareButtonRef = useRef(null);
  
  const navigate = useNavigate();
  const headerRef = useRef(null);
  
  // For parallax scrolling effect
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.7]);
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 200], [0, -20]);
  const parallaxY = useTransform(scrollY, [0, 300], [0, 100]);
  const parallaxScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  
  // Track scroll progress for the progress bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch subject and semester data
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        console.log(`Looking for semester ${semesterId} and subject ${subjectId}`);
        
        const allSemesters = await getSemester(semesterId);
        console.log("Fetched semester data:", allSemesters);
        
        if (allSemesters) {
          setSemester(allSemesters);
          
          // Find the subject in the semester
          if (allSemesters.subjects && Array.isArray(allSemesters.subjects)) {
            const foundSubject = allSemesters.subjects.find(
              sub => sub.id === subjectId
            );
            
            console.log("Found subject:", foundSubject);
            
            if (foundSubject) {
              setSubject(foundSubject);
              // Check if this subject is bookmarked in localStorage
              const bookmarks = JSON.parse(localStorage.getItem('subjectBookmarks') || '[]');
              setIsBookmarked(bookmarks.includes(`${semesterId}-${subjectId}`));
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [semesterId, subjectId]);

  const toggleBookmark = () => {
    const bookmarkId = `${semesterId}-${subjectId}`;
    const bookmarks = JSON.parse(localStorage.getItem('subjectBookmarks') || '[]');
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(id => id !== bookmarkId);
      localStorage.setItem('subjectBookmarks', JSON.stringify(updatedBookmarks));
    } else {
      bookmarks.push(bookmarkId);
      localStorage.setItem('subjectBookmarks', JSON.stringify(bookmarks));
    }
    
    setIsBookmarked(!isBookmarked);
  };

  // Close share menu with escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowShareMenu(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
  };
  
  const tabVariants = {
    inactive: { opacity: 0.7 },
    active: { opacity: 1 }
  };
  
  const tabUnderlineVariants = {
    inactive: { opacity: 0, scale: 0 },
    active: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-8 border-slate-200 dark:border-slate-700 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-8 border-t-brand-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-6 text-slate-600 dark:text-slate-300 font-medium">Loading course details...</p>
      </div>
    );
  }

  // Not found state
  if (!subject || !semester) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <motion.div 
          className="text-center py-16 px-10 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
            <Eye className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Course Not Found</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
            The course you're looking for doesn't exist or has been moved.
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-400 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg inline-block mb-8">
            Looking for: Semester {semesterId}, Course {subjectId}
          </div>
          <button 
            onClick={() => navigate('/courses')} 
            className="px-8 py-3 bg-gradient-to-r from-brand-500 to-indigo-600 text-white rounded-xl font-medium shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all hover:-translate-y-1"
          >
            Browse All Courses
          </button>
        </motion.div>
      </div>
    );
  }

  // Main component render
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20 relative">
      {/* React Hot Toast Container */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            border: '1px solid #E2E8F0',
            padding: '16px',
            color: '#1E293B',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '10px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: 9999
          },
        }}
      />
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-500 to-indigo-600"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Back Button - Floating */}
      <div className="sticky top-4 z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.button
          onClick={() => navigate('/courses')}
          className="flex items-center px-3 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors rounded-lg shadow-md border border-slate-200/50 dark:border-slate-700/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Courses</span>
        </motion.button>
      </div>

      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative w-full overflow-hidden bg-slate-900 text-white"
        style={{ 
          opacity: headerOpacity,
          scale: headerScale,
          y: headerY
        }}
        ref={headerRef}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background with parallax effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ 
              y: parallaxY,
              scale: parallaxScale
            }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900/95 z-10"></div>
            <img 
              src={subject.thumbnail || "/images/sample.webp"} 
              alt="" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = "/images/sample.webp";
              }}
            />
          </motion.div>
        </div>
        
        {/* Mac-inspired blurred glass pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-10"></div>
        
        {/* Content - Using container for proper alignment */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20 pb-16">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {/* Course code and semester badges */}
            <motion.div className="flex flex-wrap gap-3 mb-4" variants={itemVariants}>
              <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/10">
                {subject.code}
              </div>
              <div className="px-4 py-1.5 bg-brand-500/20 backdrop-blur-md rounded-full text-sm font-medium border border-brand-500/20 text-brand-300">
                {semester.title}
              </div>
            </motion.div>
            
            {/* Course title */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display tracking-tight"
              variants={itemVariants}
            >
              {subject.title}
            </motion.h1>
            
            {/* Course description */}
            <motion.p 
              className="text-lg text-white/80 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              {subject.description}
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mr-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Units</div>
                    <div className="font-semibold text-white">{subject.totalUnits || (subject.units?.length || 0)}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-300 mr-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Duration</div>
                    <div className="font-semibold text-white">{(subject.totalUnits || (subject.units?.length || 0)) * 2} hrs</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 mr-3">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Rating</div>
                    <div className="font-semibold text-white">
                      {subject.rating || "Not rated"}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 mr-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Students</div>
                    <div className="font-semibold text-white">{subject.students || "0"}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Action buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 items-center"
              variants={itemVariants}
            >
              {subject.units && subject.units.length > 0 && (
                <Link 
                  to={`/semester/${semesterId}/subject/${subjectId}/unit/${subject.units[0].id}`}
                  className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all flex items-center group"
                >
                  <Play className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  <span>Start Learning</span>
                </Link>
              )}
              
              <button 
                onClick={toggleBookmark}
                className={`p-3 rounded-xl font-medium shadow transition-all flex items-center justify-center
                  ${isBookmarked 
                    ? 'bg-amber-500 text-white shadow-amber-500/25 hover:shadow-amber-500/40' 
                    : 'bg-white/10 backdrop-blur-md text-white/80 border border-white/10 hover:bg-white/20'
                  }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-white' : ''}`} />
              </button>
              
              <button className="p-3 bg-white/10 backdrop-blur-md text-white/80 rounded-xl font-medium transition-all flex items-center justify-center border border-white/10 hover:bg-white/20">
                <Download className="w-5 h-5" />
              </button>
              
                          <button 
                ref={shareButtonRef}
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-3 bg-white/10 backdrop-blur-md text-white/80 rounded-xl font-medium transition-all flex items-center justify-center border border-white/10 hover:bg-white/20"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              {/* Share Menu Overlay */}
              <AnimatePresence>
                {showShareMenu && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
                    onClick={() => setShowShareMenu(false)}
                  >
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-sm mx-4 overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <h3 className="font-medium text-slate-800 dark:text-white">Share this course</h3>
                        <button 
                          onClick={() => setShowShareMenu(false)}
                          className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                        </button>
                      </div>
                      
                      <div className="p-4 space-y-3">
                        <button 
                          onClick={() => {
                            const url = window.location.href;
                            window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this course: ${subject.title} ${url}`)}`, '_blank');
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">Share via WhatsApp</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            const url = window.location.href;
                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                            <Linkedin className="w-5 h-5" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">Share on LinkedIn</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            
                            // Show toast (may not be visible in some environments)
                            toast.success('Link copied to clipboard!', {
                              duration: 3000,
                              position: 'top-center',
                              style: {
                                border: '1px solid #E2E8F0',
                                padding: '16px',
                                color: '#1E293B',
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '10px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                maxWidth: '350px',
                                fontSize: '14px',
                                fontWeight: '500'
                              },
                              iconTheme: {
                                primary: '#10B981',
                                secondary: '#ECFDF5',
                              }
                            });
                            
                            // Backup approach using state
                            setCopyStatus("Copied to clipboard!");
                            setTimeout(() => {
                              setCopyStatus("");
                            }, 5000);
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative"
                        >
                          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 mr-3">
                            <Copy className="w-5 h-5" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">Copy link</span>
                          
                          {/* In-button feedback */}
                          {copyStatus && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                            >
                              Copied!
                            </motion.div>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Curved bottom edge for hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-12 z-20">
          <svg
            className="absolute bottom-0 w-full text-slate-50 dark:text-slate-900 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path d="M0 48h1440V0C1159.52 41.33 720 48 0 0z" />
          </svg>
        </div>
      </motion.div>

      {/* Main Content area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Tabs for Content */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
          <div className="flex space-x-8">
            <motion.button
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === "content" ? "active" : "inactive"}
              onClick={() => setActiveTab("content")}
              className="relative pb-4 text-lg font-medium text-slate-800 dark:text-white"
            >
              Course Content
              {activeTab === "content" && (
                <motion.div 
                  variants={tabUnderlineVariants}
                  initial="inactive"
                  animate="active"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-500 rounded-t-full"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
          </div>
        </div>
        
        {/* Dynamic Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === "content" && (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title with icon */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500 mr-3">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Course Units
                </h2>
              </div>
              
              {/* Units List */}
              {subject.units && Array.isArray(subject.units) ? (
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {subject.units.map((unit, index) => (
                    <motion.div
                      key={unit.id}
                      variants={itemVariants}
                    >
                      <Link 
                        to={`/semester/${semesterId}/subject/${subjectId}/unit/${unit.id}`}
                        onMouseEnter={() => setHoverUnit(unit.id)}
                        onMouseLeave={() => setHoverUnit(null)}
                      >
                        <motion.div 
                          className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all relative"
                          initial="initial"
                          whileHover="hover"
                          variants={cardVariants}
                        >
                          {/* Subtle gradient border effect on hover */}
                          <AnimatePresence>
                            {hoverUnit === unit.id && (
                              <motion.div 
                                className="absolute inset-0 rounded-xl border-2 border-transparent dark:from-gray-700 dark:to-gray-600 bg-gradient-to-r from-brand-200 to-indigo-200 opacity-1 z-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ padding: '1px' }}
                              />
                            )}
                          </AnimatePresence>
                          
                          <div className="p-5 relative z-10">
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              
                              <div className="ml-4 flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {unit.title}
                                  </h3>
                                  
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                                  </motion.div>
                                </div>
                                
                                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                                  <div className="flex items-center text-slate-500 dark:text-slate-400">
                                    <FileText className="w-4 h-4 mr-1.5 text-brand-500" />
                                    <span>Learning Materials</span>
                                  </div>
                                  
                                  <div className="flex items-center text-slate-500 dark:text-slate-400">
                                    <Clock className="w-4 h-4 mr-1.5 text-amber-500" />
                                    <span>{unit.duration || 2} hr duration</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="p-10 bg-white dark:bg-slate-800 rounded-xl text-center shadow border border-slate-200 dark:border-slate-700"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-4">
                    <FileText className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Units Available</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Content for this course is currently being developed.
                  </p>
                  <button 
                    onClick={() => navigate('/courses')}
                    className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium shadow-md transition-colors"
                  >
                    Browse Other Courses
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Call to Action Card */}
        <motion.div 
          className="mt-12 relative overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl p-8 lg:p-10 text-white relative z-10 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -mb-10 -ml-10"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Ready to start learning?</h3>
                <p className="text-white/80 max-w-lg mb-6 lg:mb-0">
                  Begin your learning journey with this course today.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {subject.units && subject.units.length > 0 && (
                  <Link 
                    to={`/semester/${semesterId}/subject/${subjectId}/unit/${subject.units[0].id}`}
                    className="px-8 py-3.5 bg-white text-brand-600 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center group"
                  >
                    <Play className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    <span>Start First Unit</span>
                  </Link>
                )}
                
                <button 
                  onClick={toggleBookmark}
                  className={`px-8 py-3.5 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 
                    ${isBookmarked 
                      ? 'bg-amber-500 text-white border-2 border-white/20' 
                      : 'bg-transparent text-white border-2 border-white/20 hover:bg-white/10'
                    }`}
                >
                  {isBookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectDetails;