import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  Code,
  Layers,
  Monitor,
  Share2,
  ArrowRight,
  ExternalLink,
  Download,
  Github,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Play,
  PauseCircle,
  Tag,
  CheckCircle,
  Zap,
  Box,
  Laptop,
  Smartphone,
  Braces
} from "lucide-react";

const ProjectSection = forwardRef((props, ref) => {
  // State for mouse position and active tab
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("featured");
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  
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

  // Auto-rotate featured projects
  useEffect(() => {
    if (animationPaused) return;
    
    const interval = setInterval(() => {
      setActiveFeatured((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [animationPaused]);
  
  // Project categories/tabs
  const projectTabs = [
    { id: "featured", name: "Featured Projects", icon: Sparkles },
    { id: "starter", name: "Starter Kits", icon: Box },
    { id: "templates", name: "Templates", icon: Layers }
  ];

  // Featured projects data
  const featuredProjects = [
    {
      title: "Saarthi",
      description: "🚀 Developed an Alumni Engagement Platform that bridges the gap between students and alumni through mentorship, networking, and career opportunities. \nThe platform fosters a supportive ecosystem where students can connect with experienced alumni for guidance.\nIt includes features like personalized dashboards, career tips, and chat-based mentorship.\nBuilt with a modern MERN stack and deployed for seamless access.",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://www.youtube.com/watch?v=64OEl6a2mr8",
      demo: "https://saarthi-alumni.vercel.app",
      image: "https://i.ibb.co/d4d4pkF6/image.png",
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "Unite-Bharat",
      description: "🌟 Our team emerged as a Smart India Hackathon (SIH) Finalist 🚀 by building a dynamic project repository platform. \nIt showcases innovations from across India, allowing users to explore, share, and collaborate on impactful projects.\nThe platform encourages innovation through real-time uploads, search features, and interactive project displays.\nIt’s a one-stop solution for discovering student-led tech solutions.",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/mayankyadav1711/Unite-Bharat",
      demo: "https://unite-bharat.vercel.app/",
      image: "https://i.ibb.co/wFjMJc1M/image.png",
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Nivesh AI",
      description: "📊 Nivesh AI is a smart digital assistant for retail investors, offering real-time stock market insights and personalized investment guidance. \nIt leverages AI to analyze trends, suggest strategies, and simplify financial decisions for users.\nUsers can interact via chat to ask for portfolio suggestions, stock summaries, and market news.\nDesigned for both beginners and experienced investors looking for an edge.",
      tags: ["React.js", "AI", "Financial APIs"],
      github: "#",
      demo: "https://niveshai.vercel.app/",
      image: "https://i.ibb.co/35qBmfSp/image.png", 
      color: "from-amber-500 to-orange-500"
    }
  ];
  
  
  // Starter kits data
  const starterKits = [
    {
      title: "MERN Stack Starter",
      description: "Complete development environment with MongoDB, Express, React and Node.js with authentication and API structure.",
      downloads: "15K+",
      complexity: "Intermediate",
      prerequisites: ["JavaScript", "Basic React", "Node.js"],
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "ML Project Boilerplate",
      description: "Machine Learning project structure with data processing pipelines, model training templates and evaluation scripts.",
      downloads: "8K+",
      complexity: "Advanced",
      prerequisites: ["Python", "Basic ML concepts", "NumPy/Pandas"],
      color: "from-blue-600 to-indigo-500"
    },
    {
      title: "Full-Stack Next.js Kit",
      description: "Modern web application starter with Next.js, Tailwind CSS, Prisma ORM and authentication.",
      downloads: "12K+",
      complexity: "Intermediate",
      prerequisites: ["React", "JavaScript/TypeScript", "Basic SQL"],
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Mobile App Starter",
      description: "React Native project template with navigation, state management, and API integration setup.",
      downloads: "10K+",
      complexity: "Intermediate",
      prerequisites: ["React", "JavaScript", "Mobile dev basics"],
      color: "from-rose-500 to-red-500"
    }
  ];
  
  // Template frameworks
  const templates = [
    {
      title: "Dashboard UI Kit",
      description: "Ready-to-use dashboard components including charts, tables, and analytics widgets.",
      components: 45,
      framework: "React + Tailwind",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop",
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "E-Commerce Template",
      description: "Complete e-commerce solution with product listings, cart functionality, and checkout process.",
      components: 52,
      framework: "Vue.js + Vuetify",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1800&auto=format&fit=crop",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Learning Platform UI",
      description: "Educational platform template with course listings, video player, and progress tracking.",
      components: 38,
      framework: "Angular + Material",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1800&auto=format&fit=crop",
      color: "from-blue-600 to-indigo-500"
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
  
  // Function to scroll carousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Adjust based on your card width + gap
      const newPosition = carouselRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Render active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "featured":
        return (
          <motion.div 
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row h-full gap-6">
              {/* Left side: Project details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                {/* Project info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-2xl text-slate-900 dark:text-white">
                      {featuredProjects[activeFeatured].title}
                    </h4>
                    <div className="flex">
                      <button 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors mr-2"
                        onClick={() => setAnimationPaused(!animationPaused)}
                      >
                        {animationPaused ? (
                          <Play className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        ) : (
                          <PauseCircle className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        )}
                      </button>
                      
                      <div className="flex">
                        {featuredProjects.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                              idx === activeFeatured
                                ? "bg-[#00AEEF]"
                                : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                            }`}
                            onClick={() => {
                              setActiveFeatured(idx);
                              setAnimationPaused(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300">
                    {featuredProjects[activeFeatured].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[activeFeatured].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-md flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1.5 text-slate-500 dark:text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links and buttons */}
                <div className="flex gap-4 mt-6">
                  <a 
                    href={featuredProjects[activeFeatured].github} 
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                  
                  <a 
                    href={featuredProjects[activeFeatured].demo} 
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
              
              {/* Right side: Project Screenshot */}
              <div className="w-full md:w-1/2 flex items-center">
                <div className="w-full relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700"
                
                >
                  <img
                    src={featuredProjects[activeFeatured].image}
                    alt={featuredProjects[activeFeatured].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Desktop and mobile mockup overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00AEEF]"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00AEEF]"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#00AEEF]"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#00AEEF]"></div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md flex items-center justify-center">
                      <Laptop className="w-4 h-4 text-[#00AEEF]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-[#00AEEF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case "starter":
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
              >
                {starterKits.map((kit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="min-w-[300px] max-w-[300px] bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm group"
                  >
                    {/* Top gradient bar */}
                    <div className={`h-2 bg-gradient-to-r ${kit.color}`}></div>
                    
                    <div className="p-5">
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                        {kit.title}
                      </h4>
                      
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                        {kit.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Download className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            {kit.downloads}
                          </span>
                        </div>
                        <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                          {kit.complexity}
                        </span>
                      </div>
                      
                      <div className="space-y-1.5 mb-4">
                        <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                          Prerequisites:
                        </div>
                        {kit.prerequisites.map((prereq, i) => (
                          <div key={i} className="flex items-center text-xs">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1.5" />
                            <span className="text-slate-600 dark:text-slate-300">{prereq}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full py-2 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white text-sm font-medium rounded flex items-center justify-center">
                        <Download className="w-4 h-4 mr-1.5" />
                        Get Starter Kit
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
                onClick={() => scrollCarousel('left')}
              >
                <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
              
              <button 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
                onClick={() => scrollCarousel('right')}
              >
                <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>

            {/* Custom kit banner */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Need a Custom Starter Kit?
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md">
                    We can create tailored development environments and boilerplates for your specific project requirements.
                  </p>
                </div>
                
                <button className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-medium rounded-lg flex items-center shadow-lg">
                  <Zap className="w-5 h-5 mr-2 text-[#00AEEF]" />
                  Request Custom Kit
                </button>
              </div>
            </div>
          </motion.div>
        );
        
      case "templates":
        return (
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {templates.map((template, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm group"
                >
                  {/* Image preview */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Bottom info bar */}
                    <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between">
                      <span className="text-white text-sm font-medium">
                        {template.framework}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {template.components} Components
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                      {template.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      {template.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <button className="text-[#00AEEF] text-sm font-medium hover:underline flex items-center">
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </button>
                      
                      <button className="px-3 py-1.5 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white text-sm font-medium rounded flex items-center">
                        <Download className="w-3.5 h-3.5 mr-1.5" />
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Custom template request */}
            <div className="mt-6 p-5 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                  Looking for Something Specific?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Browse our full template library with 100+ premium designs for various use cases.
                </p>
              </div>
              
              <Link to="/templates">
                <button className="whitespace-nowrap px-5 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center">
                  Browse All Templates
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </Link>
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
      id="projects"
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
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
              <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
                <DecryptedText
                  text="Build Amazing Projects"
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
            Showcase & <span className="text-[#00AEEF]">Create</span> Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Explore featured projects, access ready-to-use starter kits, and jumpstart 
            your development with professional templates.
          </motion.p>
        </div>
        
        {/* Main content */}
        <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl">
          {/* Tab navigation */}
          <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex gap-2">
            {projectTabs.map((tab) => (
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
                    layoutId="activeTabProject"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <tab.icon className="w-4 h-4 mr-1.5" />
                {tab.name}
              </button>
            ))}
          </div>
          
          {/* Content area */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
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
  {/* Button container */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Link to="/projects">
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
          Explore All Projects & Templates
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
    </Link>

    {/* GitHub themed Contribute button */}
    <a href="https://github.com/KauraniDivya/ColleGPT-Projects" target="_blank" rel="noopener noreferrer">
      <motion.button
        className="group px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 dark:border-slate-600 rounded-lg overflow-hidden relative shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* GitHub button hover effect */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></div>
        </div>

        <span className="relative z-10 text-white font-medium flex items-center">
          <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Contribute to Projects
          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
    </a>
  </div>
  
  <p className="mt-4 text-slate-500 dark:text-slate-400">
    Join 20,000+ students who have completed amazing projects
  </p>
</motion.div>
      </div>
    </section>
  );
});

export default ProjectSection;