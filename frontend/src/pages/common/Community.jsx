import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Users, 
  Search, 
  Twitter, 
  Github, 
  Linkedin, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles,
  Globe,
  MessageSquare,
  UserPlus,
  Mail,
  Briefcase,
  Calendar,
  FileText,
  Code,
  Award,
  Heart,
  Target,
  MapPin,
  Book,
  ExternalLink,
  Minimize2,
  Maximize2,
  Instagram,
  User2
} from "lucide-react";
import defaultProfilePic from "../../images/60111.webp";
import { fetchWithAuth, BASE_URL } from "../../api/api";

const Community = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profilesPerPage = 12;
  const [visibleCount, setVisibleCount] = useState(0);
  const [hoveredProfile, setHoveredProfile] = useState(null);
  
  // Profile popup states
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isDragging, setIsDragging] = useState(false);
  
  const searchInputRef = useRef(null);
  const communityRef = useRef(null);
  const popupRef = useRef(null);
  const dragHandleRef = useRef(null);
  const isInView = useInView(communityRef, { once: false, amount: 0.1 });

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/all-profiles`);
        const data = await response.json();
        const profilesWithState = data.map((profile) => ({
          ...profile,
          isOpen: false,
        }));
        setUserProfiles(profilesWithState);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
        setIsLoading(false);
      }
    };

    fetchUserProfiles();
  }, []);

  // Animate profile count
  useEffect(() => {
    if (isInView && visibleCount < userProfiles.length) {
      const interval = setInterval(() => {
        setVisibleCount(prev => {
          const nextCount = prev + 1;
          return nextCount <= userProfiles.length ? nextCount : userProfiles.length;
        });
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isInView, visibleCount, userProfiles.length]);

  // Calculate correct initial position for popup
  useEffect(() => {
    const calculateCenterPosition = () => {
      // Use a smaller popup size to account for the header
      const popupWidth = 700;
      const popupHeight = 500;
      
      // Account for header height - approximately 60px
      const headerHeight = 60;
      
      const x = Math.max(0, (window.innerWidth - popupWidth) / 2);
      const y = Math.max(headerHeight, (window.innerHeight - popupHeight) / 2);
      
      setPopupPosition({ x, y });
    };

    calculateCenterPosition();
    
    window.addEventListener('resize', calculateCenterPosition);
    return () => window.removeEventListener('resize', calculateCenterPosition);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMousePosition({ x, y });
  };

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  
  const filteredProfiles = userProfiles.filter((userProfile) => {
    // Basic search filtering
    const matchesSearch = 
      searchTerm === "" || 
      userProfile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (userProfile.Roles && userProfile.Roles.some(role => 
        role.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
      (userProfile.university && userProfile.university.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Role filtering
    const matchesFilter = 
      filter === "all" || 
      (userProfile.Roles && userProfile.Roles.some(role => 
        role.toLowerCase() === filter.toLowerCase()
      ));
    
    return matchesSearch && matchesFilter;
  });

  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: communityRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: communityRef.current.offsetTop, behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  // Popup handlers
  const handleOpenProfile = (profile) => {
    // Store the entire profile object instead of just the ID
    setSelectedProfile(profile);
    setIsProfilePopupOpen(true);
    
    // Reset position to center
    const popupWidth = 700;
    const popupHeight = 500;
    const headerHeight = 60;
    
    const x = Math.max(0, (window.innerWidth - popupWidth) / 2);
    const y = Math.max(headerHeight, (window.innerHeight - popupHeight) / 2);
    
    setPopupPosition({ x, y });
  };
  
  const closeProfilePopup = () => {
    setIsProfilePopupOpen(false);
    setSelectedProfile(null);
    setIsFullscreen(false);
    setActiveTab("about");
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

{/* Additional code needed to make sure the popup works correctly on mobile */}
{/* Add this function to your component to calculate correct position on window resize */}
useEffect(() => {
  const handleResize = () => {
    if (isProfilePopupOpen) {
      // Recalculate position for mobile
      if (window.innerWidth <= 768) {
        setPopupPosition({
          x: window.innerWidth * 0.05,
          y: window.innerHeight * 0.05
        });
      } else {
        // Center for desktop if not already positioned by user
        if (!isDragging) {
          const popupWidth = 700;
          const popupHeight = 650;
          const headerHeight = 60;
          
          const x = Math.max(0, (window.innerWidth - popupWidth) / 2);
          const y = Math.max(headerHeight, (window.innerHeight - popupHeight) / 2);
          
          setPopupPosition({ x, y });
        }
      }
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isProfilePopupOpen, isDragging]);

// Add this function to handle mobile touch for dragging
useEffect(() => {
  // Only for desktop - we disable dragging on mobile
  if (popupRef.current && dragHandleRef.current && window.innerWidth > 768) {
    const popupElement = popupRef.current;
    const dragHandle = dragHandleRef.current;
    
    let isDragging = false;
    let startX, startY, initialX, initialY;
    
    const onTouchStart = (e) => {
      if (isFullscreen) return;
      
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      initialX = popupPosition.x;
      initialY = popupPosition.y;
      
      isDragging = true;
    };
    
    const onTouchMove = (e) => {
      if (!isDragging) return;
      
      e.preventDefault();
      const touch = e.touches[0];
      
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      
      const newX = initialX + dx;
      const newY = initialY + dy;
      
      // Apply direct style for smoother dragging
      popupElement.style.transform = `translate3d(${newX}px, ${newY}px, 0) scale(1)`;
      
      setPopupPosition({
        x: newX,
        y: newY
      });
    };
    
    const onTouchEnd = () => {
      isDragging = false;
      
      // Ensure within bounds
      let newX = popupPosition.x;
      let newY = popupPosition.y;
      const width = popupElement.offsetWidth;
      const height = popupElement.offsetHeight;
      
      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;
      if (newX + width > window.innerWidth) newX = window.innerWidth - width;
      if (newY + height > window.innerHeight) newY = window.innerHeight - height;
      
      setPopupPosition({ x: newX, y: newY });
    };
    
    dragHandle.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
    
    return () => {
      dragHandle.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }
}, [popupRef, dragHandleRef, popupPosition, isFullscreen]);


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 pb-20" onMouseMove={handleMouseMove} ref={communityRef}>
      {/* Hero Section with parallax effect */}
      <section className="relative py-24 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated gradient background */}
          <motion.div
            style={{ 
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 -left-1/4 w-2/3 h-2/3 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 -right-1/4 w-2/3 h-2/3 rounded-full bg-gradient-to-tl from-indigo-500/15 to-cyan-400/10 dark:from-indigo-500/10 dark:to-cyan-400/5 blur-3xl"></div>
          </motion.div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-50 dark:opacity-30"></div>
          
          {/* Glass-like reflections */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white dark:bg-slate-400 mix-blend-screen"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
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
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 shadow-md text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-slate-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Meet Our Community</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="block text-gray-900 dark:text-white">Our Amazing</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                Community Members
              </span>
            </h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Join a diverse network of students, educators, and professionals who are shaping the future of education together.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="#join-community"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                <span>Join Our Community</span>
              </motion.a>
              
              <motion.a
                href="#browse-members"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-xl font-medium shadow border border-gray-200 dark:border-gray-700 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <span>Browse Members</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative"
                >
                  <span className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
                    <motion.span
                      className="inline-block font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 1
                      }}
                    >
                      {visibleCount}
                    </motion.span>
                    <span className="ml-2">Community Members</span>
                  </span>
                  {/* Animated underline effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.div>
              </div>
            
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <div id="browse-members" className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-800 py-6 px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full max-w-2xl">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search community members..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white placeholder-gray-400 text-lg shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col justify-center items-center min-h-[60vh]">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 dark:border-gray-700 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-8 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 font-medium">Loading community members...</p>
          </div>
        ) : filteredProfiles.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 px-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No members found</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
              {searchTerm
                ? `We couldn't find any members matching "${searchTerm}". Try a different search term or clear your filters.`
                : "There are no community members available that match your current filters."}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md transition-colors"
              >
                Clear Search
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentProfiles.map((profile, index) => (
              <ProfileCard 
                key={profile._id}
                profile={profile}
                index={index}
                setHoveredProfile={setHoveredProfile}
                hoveredProfile={hoveredProfile}
                handleOpenProfile={handleOpenProfile}
              />
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {!isLoading && filteredProfiles.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  currentPage === 1
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <span className="font-medium">Page {currentPage}</span>
                <span className="mx-1 text-gray-400">/</span>
                <span>{totalPages}</span>
              </div>
              
              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  currentPage === totalPages
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700'
                }`}
                whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Join Community Section */}
      <section id="join-community" className="mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg
                className="absolute left-0 top-0 h-full w-full opacity-20"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_501_1809)">
                  <path
                    d="M400 0H0V400H400V0Z"
                    fill="url(#paint0_radial_501_1809)"
                  />
                  <path
                    d="M209 89C154.5 52 81.5 33 37 132C-7.5 231 -35 271 -35 328.5C-35 386 22 405.5 54 424C86 442.5 116 483.5 209 424C302 364.5 327 328.5 345 302C363 275.5 346.5 221.5 327 185C307.5 148.5 263.5 126 209 89Z"
                    fill="url(#paint1_radial_501_1809)"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_501_1809"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(200 200) rotate(90) scale(200)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_501_1809"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(148.5 230) rotate(90) scale(150.004 190)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_501_1809">
                    <rect width="400" height="400" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-200 mr-2" />
                  <h3 className="text-xl font-bold">Become Part of Our Community</h3>
                </div>
                <p className="text-blue-100 max-w-2xl">
                  Join our growing network of learners, educators, and tech enthusiasts. Share knowledge, collaborate on projects, and grow together with like-minded individuals.
                </p>
              </div>

              <a
                href="/register"
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg flex items-center shadow-xl shadow-blue-700/20 transition-all whitespace-nowrap"
              >
                Join Now
                <UserPlus className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
{/* Profile Popup with Responsive Design */}
<AnimatePresence>
  {isProfilePopupOpen && selectedProfile && (
    <motion.div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeProfilePopup}
    >
      <motion.div
        ref={popupRef}
        className={`absolute bg-white dark:bg-gray-900 ${
          isFullscreen 
            ? 'fixed inset-0 m-0 rounded-none mt-20 pb-5' 
            : 'rounded-xl overflow-hidden shadow-2xl'
        } border border-gray-200 dark:border-gray-800 flex flex-col max-h-screen`}
        initial={{ 
          opacity: 0, 
          scale: 0.9,
          x: popupPosition.x,
          y: popupPosition.y,
          width: window.innerWidth <= 768 ? '90%' : 700,
          height: window.innerWidth <= 768 ? 'auto' : 650
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: isFullscreen ? 0 : (window.innerWidth <= 768 ? window.innerWidth * 0.05 : popupPosition.x),
          y: isFullscreen ? 0 : (window.innerWidth <= 768 ? window.innerHeight * 0.05 : popupPosition.y),
          width: isFullscreen ? '100%' : (window.innerWidth <= 768 ? '90%' : 700),
          height: isFullscreen ? '100%' : (window.innerWidth <= 768 ? '90%' : 650)
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.9,
          transition: { duration: 0.2 }
        }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 300
        }}
        onClick={(e) => e.stopPropagation()}
        style={{ 
          position: isFullscreen ? 'fixed' : 'absolute',
          maxWidth: isFullscreen ? '100%' : (window.innerWidth <= 768 ? '90%' : '700px')
        }}
      >
        {/* Mac-style window header */}
        <div 
          ref={dragHandleRef}
          className="bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 flex items-center cursor-move"
          onMouseDown={(e) => {
            if (isFullscreen || window.innerWidth <= 768) return;
            
            e.preventDefault();
            setIsDragging(true);
            
            // Get initial positions
            const startX = e.clientX;
            const startY = e.clientY;
            const startPosX = popupPosition.x;
            const startPosY = popupPosition.y;
            
            const handleMouseMove = (moveEvent) => {
              if (!isDragging) return;
              
              const deltaX = moveEvent.clientX - startX;
              const deltaY = moveEvent.clientY - startY;
              
              // Direct position update without animation
              const newX = startPosX + deltaX;
              const newY = startPosY + deltaY;
              
              // Apply position directly to prevent elastic effect
              if (popupRef.current) {
                popupRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0) scale(1)`;
              }
              
              // Update state to keep track of position
              setPopupPosition({
                x: newX,
                y: newY
              });
            };
            
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
              setIsDragging(false);
              
              // Get window dimensions for boundary checks
              const width = popupRef.current?.offsetWidth || 700;
              const height = popupRef.current?.offsetHeight || 650;
              
              // Ensure within bounds
              let newX = popupPosition.x;
              let newY = popupPosition.y;
              
              if (newX < 0) newX = 0;
              if (newY < 0) newY = 0;
              if (newX + width > window.innerWidth) newX = window.innerWidth - width;
              if (newY + height > window.innerHeight) newY = window.innerHeight - height;
              
              setPopupPosition({ x: newX, y: newY });
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        >
          <div className="flex space-x-2 mr-4">
            <button 
              onClick={closeProfilePopup}
              className="w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center group hover:bg-red-600 transition-colors"
            >
              <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            >
              <Minimize2 className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button 
              onClick={toggleFullscreen}
              className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            >
              {isFullscreen ? 
                <Minimize2 className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" /> :
                <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              }
            </button>
          </div>
          
          <div className="flex-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300 truncate">
            {selectedProfile.name}'s Profile
          </div>
          
          <div className="w-16">
            {/* Placeholder to center the title */}
          </div>
        </div>
        
        {/* Main content area */}
        <div className={`flex-1 flex flex-col overflow-hidden ${isFullscreen ? 'max-h-screen' : ''}`}>
          {/* Tabs navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            {[
              { id: 'about', label: 'About', icon: User2 },
              { id: 'education', label: 'Education', icon: Book },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'interests', label: 'Interests', icon: Heart }
            ].map(tab => (
              <button
                key={tab.id}
                className={`flex-1 flex justify-center items-center py-2 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap px-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Content area */}
          <div className={`flex-1 overflow-y-auto ${isFullscreen ? 'h-full' : ''}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeTab === 'about' && (
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left column - Profile photo and basic info */}
                    <div className="md:w-1/3 bg-gray-50 dark:bg-gray-800/50 p-6 border-r border-gray-200 dark:border-gray-700">
                      {/* Profile photo */}
                      <div className="aspect-square rounded-xl overflow-hidden shadow-lg mb-6">
                        <img 
                          src={selectedProfile.profilePic || defaultProfilePic}
                          alt={selectedProfile.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultProfilePic;
                          }}
                        />
                      </div>
                      
                      {/* Name and Role */}
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {selectedProfile.name}
                        </h2>
                        {selectedProfile.Roles && selectedProfile.Roles[0] && (
                          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                            {selectedProfile.Roles[0]}
                          </span>
                        )}
                      </div>

                      {/* University */}
                      {selectedProfile.university && (
                        <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-6">
                          <Book className="w-4 h-4 mr-2" />
                          <span className="text-sm">{selectedProfile.university}</span>
                        </div>
                      )}

                      {/* Personal details */}
                      {(selectedProfile.gender || selectedProfile.birthdate) && (
                        <div className="space-y-3 mb-6">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                            Personal Details
                          </h3>
                          {selectedProfile.gender && (
                            <div className="flex justify-between items-center px-3 py-2 bg-white dark:bg-gray-700 rounded-lg">
                              <span className="text-sm text-gray-500 dark:text-gray-400">Gender</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedProfile.gender}</span>
                            </div>
                          )}
                          {selectedProfile.birthdate && (
                            <div className="flex justify-between items-center px-3 py-2 bg-white dark:bg-gray-700 rounded-lg">
                              <span className="text-sm text-gray-500 dark:text-gray-400">Birth Date</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {formatDate(selectedProfile.birthdate)}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Social links */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Connect
                        </h3>
                        <div className="space-y-2">
                          {selectedProfile.linkedinURL && (
                            <a
                              href={selectedProfile.linkedinURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">
                                <Linkedin className="w-4 h-4" />
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-auto text-gray-400" />
                            </a>
                          )}
                          
                          {selectedProfile.githubURL && (
                            <a
                              href={selectedProfile.githubURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3 text-gray-700 dark:text-gray-300">
                                <Github className="w-4 h-4" />
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">GitHub</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-auto text-gray-400" />
                            </a>
                          )}
                          
                          {selectedProfile.twitterURL && (
                            <a
                              href={selectedProfile.twitterURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                              <div className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center mr-3 text-sky-500 dark:text-sky-400">
                                <Twitter className="w-4 h-4" />
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">Twitter</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-auto text-gray-400" />
                            </a>
                          )}
                          
                          {/* Add other social links similarly */}
                        </div>
                      </div>
                    </div>

                    {/* Right column - Main content */}
                    <div className="md:w-2/3 p-6">
                      {/* Stats dashboard */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">9</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Skills</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">1</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Projects</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Connections</div>
                        </div>
                      </div>
                      
                      {/* About text */}
                      {selectedProfile.aboutMe ? (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <User2 className="w-5 h-5 text-blue-500 mr-2" />
                            About
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {selectedProfile.aboutMe}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm text-center mb-6">
                          <User2 className="w-10 h-10 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                          <p className="text-base text-gray-500 dark:text-gray-400">
                            This user hasn't added a bio yet.
                          </p>
                        </div>
                      )}

                      {/* Goals section */}
                      {selectedProfile.goals && (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Target className="w-5 h-5 text-amber-500 mr-2" />
                            Goals
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {selectedProfile.goals}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {activeTab === 'education' && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Book className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" />
                      Education
                    </h3>
                    
                    {(selectedProfile.university || selectedProfile.sem || selectedProfile.cpi) ? (
                      <div className="space-y-4 md:space-y-6">
                        {selectedProfile.university && (
                          <div className="border-l-2 border-green-500 pl-3 md:pl-4">
                            <h4 className="text-xs md:text-sm uppercase text-green-600 dark:text-green-400 tracking-wider">University</h4>
                            <p className="text-md md:text-lg font-medium text-gray-900 dark:text-white mt-1">{selectedProfile.university}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          {selectedProfile.sem && (
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4">
                              <h4 className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">Current Semester</h4>
                              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{selectedProfile.sem}</p>
                            </div>
                          )}
                          
                          {selectedProfile.cpi && (
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 md:p-4">
                              <h4 className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1">CPI</h4>
                              <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{selectedProfile.cpi}</p>
                              
                              {/* CPI visualization */}
                              <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-green-500 rounded-full"
                                  style={{ width: `${(parseFloat(selectedProfile.cpi) / 10) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center py-6 md:py-8">
                        <Book className="w-10 h-10 md:w-12 md:h-12 text-gray-300 dark:text-gray-600 mb-2" />
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">No education details available</p>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2" />
                      Skills
                    </h3>
                    
                    {selectedProfile.Skills && selectedProfile.Skills.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        {selectedProfile.Skills.map((skill, index) => (
                          <div
                            key={skill}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 md:p-3 flex items-center"
                          >
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 md:mr-3">
                              <Code className="w-3 h-3 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center py-6 md:py-8">
                        <Code className="w-10 h-10 md:w-12 md:h-12 text-gray-300 dark:text-gray-600 mb-2" />
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">No skills have been added yet</p>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'interests' && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mr-2" />
                      Interests & Hobbies
                    </h3>
                    
                    {selectedProfile.hobbies && selectedProfile.hobbies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedProfile.hobbies.map((hobby) => (
                          <span
                            key={hobby}
                            className="inline-flex items-center px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-xs md:text-sm"
                          >
                            <Heart className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                            {hobby}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center py-6 md:py-8">
                        <Heart className="w-10 h-10 md:w-12 md:h-12 text-gray-300 dark:text-gray-600 mb-2" />
                        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">No interests or hobbies have been added yet</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-800 p-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400 px-3">
            {/* Optional footer content */}
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={closeProfilePopup}
              className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

// Profile Card Component
const ProfileCard = ({ profile, index, setHoveredProfile, hoveredProfile, handleOpenProfile }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      onMouseEnter={() => setHoveredProfile(profile._id)}
      onMouseLeave={() => setHoveredProfile(null)}
      className="h-full"
    >
      <div className={`group relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${hoveredProfile === profile._id ? 'shadow-2xl scale-[1.02] border-blue-300 dark:border-blue-700' : ''}`}>
        {/* New improved glow effect on hover */}
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-700 ${hoveredProfile === profile._id ? 'opacity-40' : ''}`}></div>
        
        <div className="relative h-full flex flex-col items-center p-6">
          {/* Profile Image */}
          <motion.div
            className="relative mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/30 shadow-lg">
              <img 
                src={profile.profilePic || defaultProfilePic} 
                alt={profile.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultProfilePic;
                }}
              />
            </div>
            
            {/* Role Badge */}
            {profile.Roles && profile.Roles[0] && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap">
                {profile.Roles[0]}
              </div>
            )}
          </motion.div>
          
          {/* Member Info */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {profile.name}
          </h3>
          
          {profile.university && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center line-clamp-2">
              {profile.university}
            </p>
          )}
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-auto">
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={profile.twitterURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-500 dark:text-sky-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-600 dark:hover:text-white transition-colors ${!profile.twitterURL ? 'cursor-default opacity-50' : ''}`}
              onClick={(e) => !profile.twitterURL && e.preventDefault()}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={profile.githubURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 dark:hover:text-white transition-colors ${!profile.githubURL ? 'cursor-default opacity-50' : ''}`}
              onClick={(e) => !profile.githubURL && e.preventDefault()}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={profile.linkedinURL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-colors ${!profile.linkedinURL ? 'cursor-default opacity-50' : ''}`}
              onClick={(e) => !profile.linkedinURL && e.preventDefault()}
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
          
          {/* View Profile Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              handleOpenProfile(profile);
            }}
            className="mt-5 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-md group-hover:shadow-lg transition-all text-center text-sm flex items-center justify-center overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine"></div>
            
            <span>View Profile</span>
            <ChevronRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;