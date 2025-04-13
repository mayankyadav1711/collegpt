import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { getSemester, getSubject } from "../data/coursedata";
import { useAppContext } from "../context/AppContext"; // Import the context
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
  Send,
  ThumbsUp,
  MessageSquare,
  AlertCircle
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
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviews, setReviews] = useState([]);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCounts, setRatingCounts] = useState({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
  
  // Get auth from context
  const { auth, theme } = useAppContext();
  
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const reviewInputRef = useRef(null);
  
  // For parallax scrolling effect - Move these hooks to the top level
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
        // Log what we're looking for to help debug
        console.log(`Looking for semester ${semesterId} and subject ${subjectId}`);
        
        // Get the data directly from your getAllSemesters function to ensure we have data
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
              
              // Load reviews from localStorage
              loadReviews();
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
  
  // Load reviews from localStorage
  const loadReviews = () => {
    const savedReviews = JSON.parse(localStorage.getItem(`reviews-${semesterId}-${subjectId}`) || '[]');
    setReviews(savedReviews);
    
    // Calculate average rating and counts
    if (savedReviews.length > 0) {
      // Calculate average rating
      const sum = savedReviews.reduce((total, review) => total + review.rating, 0);
      const avg = sum / savedReviews.length;
      setAverageRating(parseFloat(avg.toFixed(1)));
      
      // Calculate rating counts
      const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      savedReviews.forEach(review => {
        counts[review.rating] = (counts[review.rating] || 0) + 1;
      });
      setRatingCounts(counts);
    }
  };

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
  
  // Submit a new review
  const submitReview = () => {
    if (!auth.isAuthenticated) {
      alert("Please sign in to leave a review");
      return;
    }
    
    if (!reviewText.trim()) {
      alert("Please write something in your review");
      return;
    }
    
    setReviewSubmitting(true);
    
    setTimeout(() => {
      const newReview = {
        id: Date.now().toString(),
        userId: auth.user?.id || "anonymous",
        userName: auth.user?.name || auth.user?.username || "Anonymous User",
        userAvatar: auth.user?.avatar || auth.user?.name?.charAt(0) || "U",
        rating: reviewRating,
        comment: reviewText,
        date: new Date().toISOString(),
        likes: 0,
        timestamp: Date.now()
      };
      
      const updatedReviews = [newReview, ...reviews];
      
      // Save to localStorage
      localStorage.setItem(`reviews-${semesterId}-${subjectId}`, JSON.stringify(updatedReviews));
      
      // Update state
      setReviews(updatedReviews);
      setReviewText("");
      setReviewRating(5);
      setReviewSubmitting(false);
      
      // Recalculate average and counts
      loadReviews();
    }, 800);
  };
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

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
                    <div className="font-semibold text-white">{subject.totalUnits}</div>
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
                    <div className="font-semibold text-white">{subject.totalUnits * 2} hrs</div>
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
                      {reviews.length > 0 ? averageRating : "No ratings"}/5
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
                    <div className="font-semibold text-white">2,500+</div>
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
              
              <button className="p-3 bg-white/10 backdrop-blur-md text-white/80 rounded-xl font-medium transition-all flex items-center justify-center border border-white/10 hover:bg-white/20">
                <Share2 className="w-5 h-5" />
              </button>
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
        {/* Tabs for Content/Overview/Reviews */}
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
            
            <motion.button
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === "overview" ? "active" : "inactive"}
              onClick={() => setActiveTab("overview")}
              className="relative pb-4 text-lg font-medium text-slate-800 dark:text-white"
            >
              Overview
              {activeTab === "overview" && (
                <motion.div 
                  variants={tabUnderlineVariants}
                  initial="inactive"
                  animate="active"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-500 rounded-t-full"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
            
            <motion.button
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === "reviews" ? "active" : "inactive"}
              onClick={() => setActiveTab("reviews")}
              className="relative pb-4 text-lg font-medium text-slate-800 dark:text-white flex items-center"
            >
              Reviews
              {reviews.length > 0 && (
                <span className="ml-2 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium px-2 py-0.5 rounded-full">
                  {reviews.length}
                </span>
              )}
              {activeTab === "reviews" && (
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
                                    <span>{(unit.id % 3) + 1} hr duration</span>
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
        
        {activeTab === "overview" && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 mr-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Course Overview
              </h2>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <h3>About this course</h3>
              <p>
                {subject.description} This comprehensive course is designed to provide students with a solid understanding of the subject matter through interactive lessons, practical exercises, and real-world applications.
              </p>
              
              <h3>What you'll learn</h3>
              <ul>
                <li>Understand core concepts and principles of {subject.title}</li>
                <li>Apply theoretical knowledge to practical scenarios</li>
                <li>Develop critical thinking and problem-solving skills</li>
                <li>Master essential techniques used in the field</li>
                <li>Complete hands-on projects to reinforce learning</li>
              </ul>
              
              <h3>Prerequisites</h3>
              <p>
                Basic understanding of related concepts is recommended. No specific prior coursework is required, but familiarity with introductory concepts will be helpful.
              </p>
              
              <h3>Course structure</h3>
              <p>
                This course consists of {subject.units?.length || 0} units, with an estimated total of {subject.totalUnits * 2} hours of learning material. Each unit builds upon previous knowledge and includes various activities to enhance comprehension.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === "reviews" && (
          <motion.div 
            key="reviews"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 mr-3">
                <Star className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Student Reviews
              </h2>
            </div>
            
            {/* Write a review section */}
            <motion.div 
              className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                Write a Review
              </h3>
              
              {auth.isAuthenticated ? (
                <div>
                  <div className="flex items-center mb-3">
                    <div className="mr-2 text-slate-700 dark:text-slate-300 text-sm font-medium">Your rating:</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star}
                          onClick={() => setReviewRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star 
                            className={`w-6 h-6 ${star <= reviewRating ? 'text-amber-500 fill-amber-500' : 'text-slate-300 dark:text-slate-600'}`}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="ml-2 text-amber-500 font-medium">
                      {reviewRating}/5
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      ref={reviewInputRef}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Share your experience with this course..."
                      className="w-full p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 resize-none transition-all min-h-[120px]"
                    ></textarea>
                    
                    <button 
                      onClick={submitReview}
                      disabled={reviewSubmitting || !reviewText.trim()}
                      className={`absolute bottom-4 right-4 p-2 rounded-lg ${
                        reviewSubmitting || !reviewText.trim() 
                          ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400' 
                          : 'bg-brand-500 hover:bg-brand-600 text-white'
                      } transition-colors`}
                    >
                      {reviewSubmitting ? (
                        <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center mr-2 font-medium">
                      {auth.user?.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      Posting as <span className="font-medium text-slate-700 dark:text-slate-300">{auth.user?.name || auth.user?.username || "Anonymous User"}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-5 border border-slate-200 dark:border-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-300">
                      Please sign in to leave a review
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium shadow-md transition-colors">
                    Sign In
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Rating Summary */}
            {reviews.length > 0 ? (
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Rating summary */}
                <div className="md:w-1/3 bg-slate-50 dark:bg-slate-700/30 rounded-xl p-5 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2">{averageRating}</div>
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.round(averageRating) ? 'fill-amber-500' : ''}`} 
                      />
                    ))}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</div>
                </div>
                
                {/* Rating bars */}
                <div className="md:w-2/3">
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map(stars => {
                      const count = ratingCounts[stars] || 0;
                      const percentage = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0;
                      
                      return (
                        <div key={stars} className="flex items-center">
                          <div className="w-10 text-sm font-medium text-slate-600 dark:text-slate-400">
                            {stars}
                            <Star className="w-3 h-3 inline ml-0.5 text-amber-500" />
                          </div>
                          <div className="flex-1 h-2 mx-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-amber-500 rounded-full" 
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            ></motion.div>
                          </div>
                          <div className="w-10 text-right text-sm font-medium text-slate-600 dark:text-slate-400">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-8 text-center mb-8">
                <Star className="w-12 h-12 mx-auto mb-3 text-slate-300 dark:text-slate-600" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">No Reviews Yet</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Be the first to share your experience with this course
                </p>
                {!auth.isAuthenticated && (
                  <button className="px-5 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium shadow-md transition-colors">
                    Sign In to Review
                  </button>
                )}
              </div>
            )}
            
            {/* Reviews list */}
            {reviews.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                </h3>
                
                {reviews.map((review, index) => (
                  <motion.div 
                    key={review.id}
                    className="bg-slate-50 dark:bg-slate-700/20 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-medium text-lg">
                        {review.userAvatar}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-slate-900 dark:text-white">{review.userName}</h4>
                          <span className="text-sm text-slate-500 dark:text-slate-400">{formatDate(review.date)}</span>
                        </div>
                        <div className="flex text-amber-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-amber-500' : ''}`} 
                            />
                          ))}
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-3">{review.comment}</p>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            <span>Helpful {review.likes > 0 && `(${review.likes})`}</span>
                          </button>
                          <button className="flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                Join thousands of students who have already enrolled in this course and start your educational journey today.
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
      
      {/* Related Courses Section */}
      <motion.div 
        className="mt-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mr-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Related Courses
            </h2>
          </div>
          
          <Link 
            to="/courses"
            className="text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-medium flex items-center"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample related courses - would be populated with actual related data */}
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item * 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src="/images/sample.webp" 
                  alt="Related course" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 pointer-events-none"></div>
                
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-brand-500 to-indigo-600 text-white text-xs font-semibold rounded-md">
                  COURSE {item}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                  Related Course Title {item}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  A related course that complements the current subject with additional specialized content.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1.5 text-brand-500" />
                    <span>6 hours</span>
                  </div>
                  
                  <div className="flex text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
};

export default SubjectDetails;