import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  BookOpen,
  Check,
  Star,
  MapPin,
  ExternalLink,
  Award,
  ArrowRight,
  Clock,
  Building,
  Tag
} from "lucide-react";

// Company logos - in a real implementation, these would be imported from files
const companyLogos = {
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png",
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  "Meta": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/113px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
  "Adobe": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png",
  "Apple": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png"
};

const PlacementSection = forwardRef((props, ref) => {
  // State for current calendar view
  const [currentMonth, setCurrentMonth] = useState(4); // May (0-indexed months)
  const [currentYear, setCurrentYear] = useState(2025);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("calendar");
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

  // Get days in month helper function
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Get previous month's days to display
  const getPreviousMonthDays = (year, month) => {
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    if (firstDayOfMonth === 0) return []; // Sunday, no previous days needed
    
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    
    return Array.from(
      { length: firstDayOfMonth },
      (_, i) => daysInPrevMonth - firstDayOfMonth + i + 1
    );
  };

  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Placement events data
  const placementEvents = [
    {
      company: "Microsoft",
      date: new Date(2025, 4, 5), // May 5, 2025
      roles: ["Software Engineer", "Product Manager"],
      eligibility: "7+ CGPA, CSE/IT Students",
      package: "₹20-32 LPA",
      logo: companyLogos.Microsoft
    },
    {
      company: "Google",
      date: new Date(2025, 4, 15), // May 15, 2025
      roles: ["SDE", "Data Scientist"],
      eligibility: "8+ CGPA, All Engineering Streams",
      package: "₹30-45 LPA",
      logo: companyLogos.Google
    },
    {
      company: "Amazon",
      date: new Date(2025, 4, 22), // May 22, 2025
      roles: ["Software Development", "DevOps"],
      eligibility: "7.5+ CGPA, CSE/IT/ECE Students",
      package: "₹18-32 LPA",
      logo: companyLogos.Amazon
    },
    {
      company: "Meta",
      date: new Date(2025, 4, 28), // May 28, 2025
      roles: ["Frontend Engineer", "Research Engineer"],
      eligibility: "8+ CGPA, CSE/IT Students",
      package: "₹24-40 LPA",
      logo: companyLogos.Meta
    },
    {
      company: "Adobe",
      date: new Date(2025, 5, 10), // June 10, 2025
      roles: ["Software Engineer", "UX Designer"],
      eligibility: "7.5+ CGPA, All Engineering Streams",
      package: "₹18-28 LPA",
      logo: companyLogos.Adobe
    }
  ];

  // Filter events for current month
  const eventsThisMonth = placementEvents.filter(
    event => event.date.getMonth() === currentMonth && event.date.getFullYear() === currentYear
  );

  // Resource types
  const resourceTypes = [
    { id: "calendar", name: "Calendar", icon: CalendarIcon },
    { id: "alumni", name: "Alumni", icon: Users },
    { id: "resources", name: "Resources", icon: BookOpen }
  ];

  // Alumni testimonials
  const alumniInterviews = [
    {
      name: "Rajat Sharma",
      company: "Google",
      position: "Software Engineer",
      batch: "2024",
      quote: "The structured preparation resources and mock interviews were key to my success at Google interviews.",
      package: "₹42 LPA",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Priya Mehta",
      company: "Microsoft",
      position: "Product Manager",
      batch: "2023",
      quote: "ColleGPT's placement calendar kept me organized, and the company-specific resources were invaluable.",
      package: "₹32 LPA",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Akshay Patel",
      company: "Amazon",
      position: "SDE-2",
      batch: "2022",
      quote: "The alumni network and interview experiences helped me prepare for the exact questions I faced.",
      package: "₹36 LPA",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  // Placement resources
  const placementResources = [
    {
      title: "System Design Interview Kit",
      type: "PDF & Code Samples",
      rating: 4.9,
      downloads: "15K+",
      icon: "document"
    },
    {
      title: "Data Structures Crash Course",
      type: "Interactive Tutorial",
      rating: 4.8,
      downloads: "22K+",
      icon: "video"
    },
    {
      title: "Company-Specific Interview FAQs",
      type: "Compiled Database",
      rating: 4.7,
      downloads: "18K+",
      icon: "database"
    }
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
  
  // Dynamic code snippet content based on active tab
  const getCodeSnippet = () => {
    switch (activeTab) {
      case "calendar":
        return `// Placement Calendar Service
const events = await api.getPlacementEvents({
  month: ${currentMonth + 1},
  year: ${currentYear}
});

// Filter by user preferences
return events.filter(event => 
  user.preferences.branches.includes(event.eligibility)
);`;
      case "alumni":
        return `// Alumni Experience API
const experiences = await api.getAlumniInterviews({
  companies: ["Google", "Microsoft", "Amazon"],
  limit: 3,
  sort: "recent"
});

experiences.forEach(exp => renderTestimonial(exp));`;
      case "resources":
        return `// Resource Recommendation Algorithm
function recommendResources(user) {
  const targetCompanies = user.preferences.companies;
  const skillGaps = assessSkills(user.profile);
  
  return resources.filter(r => 
    r.addresses(skillGaps) && 
    r.relevantFor(targetCompanies)
  );
}`;
      default:
        return "";
    }
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "calendar":
        return (
          <motion.div
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                <div className="px-2 py-1 bg-blue-100 dark:bg-[#00AEEF]/20 rounded-md text-xs font-medium text-[#00AEEF] border border-blue-200 dark:border-[#00AEEF]/30">
                  Sample Data
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  onClick={goToPreviousMonth}
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  onClick={goToNextMonth}
                >
                  <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden shadow-lg mb-4">
              {/* Week days */}
              <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/80">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                  <div
                    key={idx}
                    className="text-center text-slate-500 dark:text-slate-400 text-sm py-2 font-medium"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar dates */}
              <div className="grid grid-cols-7 bg-white/80 dark:bg-slate-800/30 backdrop-blur-md">
                {/* Previous month days */}
                {getPreviousMonthDays(currentYear, currentMonth).map((date, idx) => (
                  <div key={`prev-${idx}`} className="border-b border-r border-slate-100 dark:border-slate-700/30">
                    <div className="h-16 p-1 flex items-start justify-end">
                      <span className="text-sm text-slate-400 dark:text-slate-600 p-1">
                        {date}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Current month days */}
                {Array.from({ length: getDaysInMonth(currentYear, currentMonth) }, (_, i) => i + 1).map((date) => {
                  // Check if date has an event
                  const dayEvents = eventsThisMonth.filter(
                    event => event.date.getDate() === date
                  );
                  const hasEvents = dayEvents.length > 0;
                  
                  return (
                    <div 
                      key={`current-${date}`} 
                      className={`border-b border-r border-slate-100 dark:border-slate-700/30 relative group ${
                        hasEvents ? "bg-blue-50/50 dark:bg-[#00AEEF]/5" : ""
                      }`}
                    >
                      <div className="h-16 p-1 flex flex-col">
                        <div className="flex justify-between">
                          <span className={`text-sm p-1 ${
                            hasEvents 
                              ? "font-medium text-[#00AEEF]" 
                              : "text-slate-700 dark:text-slate-300"
                          }`}>
                            {date}
                          </span>
                          
                          {hasEvents && (
                            <div className="flex gap-0.5">
                              {dayEvents.slice(0, 2).map((event, idx) => (
                                <div 
                                  key={idx} 
                                  className="w-6 h-6 rounded-full border border-white dark:border-slate-700 shadow-sm overflow-hidden bg-white dark:bg-slate-800"
                                >
                                  <img 
                                    src={event.logo} 
                                    alt={event.company}
                                    className="w-full h-full object-contain p-0.5"
                                  />
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <span className="text-xs bg-[#00AEEF]/10 text-[#00AEEF] w-5 h-5 flex items-center justify-center rounded-full">
                                  +{dayEvents.length - 2}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        {hasEvents && dayEvents.length === 1 && (
                          <div className="px-1.5 py-0.5 mt-0.5 text-xs bg-white/80 dark:bg-slate-900/50 rounded truncate text-slate-600 dark:text-slate-300">
                            {dayEvents[0].company}
                          </div>
                        )}
                        
                        {/* Tooltip for events */}
                        {hasEvents && (
                          <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                            {dayEvents.map((event, idx) => (
                              <div key={idx} className={`p-2 ${idx > 0 ? "border-t border-slate-100 dark:border-slate-700/50 mt-1" : ""}`}>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded bg-white dark:bg-slate-700 p-1 flex-shrink-0">
                                    <img
                                      src={event.logo}
                                      alt={event.company}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm text-slate-900 dark:text-white">
                                      {event.company}
                                    </h4>
                                    <div className="flex items-center mt-0.5">
                                      <Tag className="w-3 h-3 text-slate-400 dark:text-slate-500 mr-1" />
                                      <span className="text-xs text-[#00AEEF]">
                                        {event.package}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-1.5 flex gap-1 flex-wrap">
                                  {event.roles.slice(0, 2).map((role, i) => (
                                    <span
                                      key={i}
                                      className="inline-block px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700/50 text-xs text-slate-600 dark:text-slate-400 rounded"
                                    >
                                      {role}
                                    </span>
                                  ))}
                                  {event.roles.length > 2 && (
                                    <span className="inline-block px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700/50 text-xs text-slate-600 dark:text-slate-400 rounded">
                                      +{event.roles.length - 2}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                            <button className="w-full mt-2 text-center text-xs font-medium text-[#00AEEF] hover:underline">
                              View Details
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="space-y-2 overflow-auto max-h-32">
              {placementEvents.slice(0, 3).map((event, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-slate-700/50 flex gap-3 items-center hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg p-1.5 flex items-center justify-center shadow-sm">
                    <img
                      src={event.logo}
                      alt={event.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h5 className="font-semibold text-slate-900 dark:text-white">
                        {event.company}
                      </h5>
                      <div className="flex items-center bg-slate-50 dark:bg-slate-700/50 px-2 py-0.5 rounded text-xs">
                        <Clock className="w-3 h-3 text-[#00AEEF] mr-1" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center">
                      <Building className="w-3 h-3 mr-1" />
                      {event.eligibility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
        
      case "alumni":
        return (
          <motion.div
            className="space-y-4 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-slate-700/50 overflow-hidden shadow-lg">
              {/* Scrollable carousel for alumni testimonials */}
              <div className="relative overflow-x-auto hide-scrollbar">
                <div className="flex">
                  {alumniInterviews.map((alumni, idx) => (
                    <div key={idx} className="min-w-[280px] p-4 border-r border-slate-100 dark:border-slate-700/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                          <img
                            src={alumni.photo}
                            alt={alumni.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white">
                            {alumni.name}
                          </h4>
                          <p className="text-xs text-[#00AEEF] font-medium">
                            {alumni.position} @ {alumni.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-900/30 p-3 rounded-lg relative mb-3">
                        <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                          "{alumni.quote}"
                        </p>
                        {/* Quote mark */}
                        <div className="absolute -top-2 -left-2 text-[#00AEEF]/20 text-3xl font-serif">
                          "
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                            Batch {alumni.batch}
                          </span>
                          <span className="bg-blue-50 dark:bg-[#00AEEF]/10 px-2 py-1 rounded text-[#00AEEF] font-medium">
                            {alumni.package}
                          </span>
                        </div>
                        <button className="text-[#00AEEF] font-medium hover:underline flex items-center">
                          Read more
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Scrollbar indicators */}
                <div className="absolute bottom-1 left-0 w-full flex justify-center gap-1">
                  {alumniInterviews.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full ${
                        idx === 0 ? "bg-[#00AEEF]" : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm text-slate-900 dark:text-white">Top Companies</h5>
                  <span className="text-xs text-[#00AEEF]">View all</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(companyLogos).slice(0, 6).map(([name, logo], idx) => (
                    <div 
                      key={idx} 
                      className="aspect-square bg-white dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={logo}
                        alt={name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm text-slate-900 dark:text-white">Placement Stats</h5>
                  <span className="text-xs text-[#00AEEF]">2024-25</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Highest CTC</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">₹58 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Average CTC</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">₹18.5 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-600 dark:text-slate-400">Placement Rate</span>
                    <span className="text-sm font-medium text-slate-900 dark:text-white">94.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case "resources":
        return (
          <motion.div
            className="space-y-3 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top resources */}
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 overflow-hidden">
              {placementResources.map((resource, idx) => (
                <div 
                  key={idx}
                  className={`p-3 flex gap-3 items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                    idx < placementResources.length - 1 
                      ? "border-b border-slate-100 dark:border-slate-700/30" 
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0067b5] to-[#00AEEF] flex items-center justify-center text-white flex-shrink-0">
                    {resource.icon === "document" && <BookOpen className="w-5 h-5" />}
                    {resource.icon === "video" && <Award className="w-5 h-5" />}
                    {resource.icon === "database" && <Briefcase className="w-5 h-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {resource.title}
                    </h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {resource.type}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                          {resource.rating}
                        </span>
                        <span className="mx-1 text-slate-400 dark:text-slate-500">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {resource.downloads} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    Access
                  </button>
                </div>
              ))}
            </div>
            
            {/* Quick access tools */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gradient-to-br from-[#0067b5] to-[#00AEEF] text-white rounded-xl p-4 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/5 backdrop-blur-sm">
                <h4 className="font-medium mb-1 flex items-center">
                  <Users className="w-4 h-4 mr-1.5" />
                  Mock Interviews
                </h4>
                <p className="text-xs text-white/80 mb-3">
                  Practice with peers and industry experts
                </p>
                <button className="text-xs font-medium bg-white/20 hover:bg-white/30 transition-colors py-1 px-2 rounded flex items-center">
                  Schedule Session
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
              
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-slate-700/50">
                <h4 className="font-medium text-slate-900 dark:text-white mb-1 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#00AEEF]" />
                  Dream Companies
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Get targeted prep for your top choices
                </p>
                <button className="text-xs font-medium text-[#00AEEF] py-1 px-2 rounded border border-[#00AEEF]/30 flex items-center">
                  Set Preferences
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
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
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="placement"
      className="relative py-16 min-h-screen bg-slate-50/80 dark:bg-[#080816] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#0067b5]/5 to-transparent rounded-full filter blur-[60px]"></div>
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

      {/* Digital code snippets */}
      <div className="absolute left-10 top-20 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        <motion.div
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            y: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {getCodeSnippet().split('\n').map((line, idx) => (
            <div key={idx} className={idx === 0 ? "text-[#00AEEF] dark:text-[#00AEEF]" : ""}>
              {line}
            </div>
          ))}
        </motion.div>
      </div>

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
                    text="Placement Assistance"
                    speed={30}
                    sequential={true}
                    maxIterations={2}
                    animateOn="view"
                  />
                </span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Your Path to <span className="text-[#00AEEF]">Dream Career</span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Comprehensive resources, expert guidance, and strategic planning to help you land your ideal job at top tech companies.
              </p>
            </motion.div>
            
            {/* Feature highlights */}
            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {[
                {
                  title: "Placement Calendar",
                  description: "Track upcoming placement drives, deadlines and interview schedules in real-time",
                  icon: CalendarIcon,
                  color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                },
                {
                  title: "Alumni Insights",
                  description: "Learn from the experiences of successful alumni who cracked top tech interviews",
                  icon: Users,
                  color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                },
                {
                  title: "Prep Resources",
                  description: "Access curated resources including interview questions, prep courses and mock tests",
                  icon: BookOpen,
                  color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-4 rounded-xl cursor-pointer ${
                    activeTab === feature.title.toLowerCase().split(' ')[0]
                      ? "bg-white dark:bg-slate-800/80 shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                      : "bg-white/50 dark:bg-slate-800/30 hover:bg-white/80 dark:hover:bg-slate-800/50 border border-transparent"
                  } transition-all`}
                  onClick={() => setActiveTab(feature.title.toLowerCase().split(' ')[0])}
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
            <motion.div variants={itemVariants} className="flex flex-col space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "400+", label: "Companies" },
                  { value: "94%", label: "Placement Rate" },
                  { value: "₹58L", label: "Top Package" }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-3 text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-transparent bg-clip-text">
                      <DecryptedText
                        text={stat.value}
                        speed={20}
                        maxIterations={5}
                        animateOn="view"
                      />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/placements">
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
                    View All Placement Resources
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Interactive Calendar/Content */}
          <motion.div 
            className="w-full md:w-7/12 h-[500px]"
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
                {resourceTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                      activeTab === type.id
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                    onClick={() => setActiveTab(type.id)}
                  >
                    {activeTab === type.id && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF] -z-10"
                        layoutId="activeTabPlacement"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <type.icon className="w-4 h-4 mr-1.5" />
                    {type.name}
                  </button>
                ))}
              </div>
              
              {/* Dynamic content based on active tab */}
              <div className="relative z-10 h-[calc(100%-60px)]">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
              
              {/* Floating design elements */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00AEEF]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent"></div>
              
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default PlacementSection;