import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  Code2,
  VideoIcon,
  MessageSquare,
  Layers,
  Menu,
  X
} from "lucide-react";

const SideNav = ({ currentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sidebarRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "notes", icon: BookOpen, label: "Notes" },
    { id: "placement", icon: Briefcase, label: "Placements" },
    { id: "roadmaps", icon: Compass, label: "Roadmaps" },
    { id: "gate", icon: GraduationCap, label: "GATE" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "videos", icon: VideoIcon, label: "Videos" },
    { id: "community", icon: MessageSquare, label: "Community" },
    { id: "explore", icon: Layers, label: "Features" },
  ];

  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <motion.button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed right-6 top-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#0067b5]/80 to-[#00AEEF]/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Desktop Glassy Side Navigation */}
      <motion.div 
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        ref={sidebarRef}
      >
        <div className="flex flex-col items-center gap-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            const isHovered = hoveredItem === item.id;
            
            return (
              <motion.div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigation(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glassy Icon Button */}
                <motion.div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md cursor-pointer shadow-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-[#0067b5]/80 to-[#00AEEF]/80 text-white" 
                      : "bg-white/10 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Icon size={22} />
                  
                  {/* Subtle Glow Effect */}
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#00AEEF]/20 filter blur-md -z-10"
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Expandable Label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute left-14 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg min-w-[120px] border border-white/20 dark:border-slate-700/30"
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: "auto" }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center whitespace-nowrap">
                        <span className={`font-medium ${isActive ? "text-[#00AEEF]" : "text-slate-800 dark:text-slate-200"}`}>
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Connector Line */}
                      <motion.div
                        className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-2 h-[2px] bg-gradient-to-r from-transparent to-white/50 dark:to-slate-600/50"
                        layoutId={`connector-${idx}`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-white/10 dark:bg-slate-900/80 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col h-full p-6 pt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => handleNavigation(item.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-[#0067b5]/30 to-[#00AEEF]/30 border border-[#00AEEF]/20" 
                          : "bg-white/5 dark:bg-slate-800/30 border border-white/10 dark:border-slate-700/20 hover:bg-white/10 dark:hover:bg-slate-700/30"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={28} className={isActive ? "text-[#00AEEF]" : "text-slate-800 dark:text-slate-200"} />
                      <span className={`mt-2 font-medium ${isActive ? "text-[#00AEEF]" : "text-slate-800 dark:text-slate-200"}`}>
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Indicator Dots - Optional Extra */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {navItems.map((item, idx) => {
          const isActive = currentSection === item.id;
          
          return (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 ${
                isActive ? "bg-[#00AEEF]" : "bg-slate-400/50 dark:bg-slate-600/50"
              }`}
              onClick={() => handleNavigation(item.id)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default SideNav;