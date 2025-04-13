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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close overlay when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  // Prevent body scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed right-6 top-6 z-50 w-12 h-12 rounded-full bg-[#00AEEF] text-white flex items-center justify-center shadow-lg hover:bg-[#0098d1] transition-colors"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto px-4 py-16 w-full h-full md:h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 h-full md:h-auto">
                {navItems.map((item, index) => (
                  <FlowingMenuItem 
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={currentSection === item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small indicator dots (visible when overlay is closed) */}
      {!isOpen && (
        <motion.div
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className="w-2 h-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-150"
              style={{ 
                backgroundColor: currentSection === item.id ? '#00AEEF' : '#94a3b8',
              }}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

const FlowingMenuItem = ({ item, index, isActive, onClick }) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    // Set initial positions
    marqueeRef.current.style.transition = 'none';
    marqueeInnerRef.current.style.transition = 'none';
    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`;
    marqueeInnerRef.current.style.transform = `translateY(${edge === 'top' ? '101%' : '-101%'})`;
    
    // Force reflow to ensure the above styles are applied before starting the animation
    void marqueeRef.current.offsetWidth;
    
    // Animate in
    marqueeRef.current.style.transition = 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
    marqueeInnerRef.current.style.transition = 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
    marqueeRef.current.style.transform = 'translateY(0%)';
    marqueeInnerRef.current.style.transform = 'translateY(0%)';
  };
  
  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    
    // Animate out
    marqueeRef.current.style.transform = `translateY(${edge === 'top' ? '-101%' : '101%'})`;
    marqueeInnerRef.current.style.transform = `translateY(${edge === 'top' ? '101%' : '-101%'})`;
  };

  const Icon = item.icon;

  // Animation delay based on index
  const delay = index * 0.1;

  return (
    <motion.div 
      ref={itemRef}
      className="relative cursor-pointer h-24 md:h-32 rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Default state */}
      <div className="flex flex-col items-center justify-center h-full gap-2 p-4 text-center">
        <Icon className={`${isActive ? 'text-[#00AEEF]' : 'text-white'}`} size={28} />
        <span className={`font-medium ${isActive ? 'text-[#00AEEF]' : 'text-white'}`}>
          {item.label}
        </span>
      </div>
      
      {/* Marquee overlay that slides in on hover */}
      <div 
        ref={marqueeRef}
        className="absolute inset-0 bg-[#00AEEF] transform translate-y-full pointer-events-none overflow-hidden"
      >
        <div 
          ref={marqueeInnerRef}
          className="flex items-center h-full w-full transform"
          style={{
            minWidth: "250%",
            willChange: "transform",
            animation: "marquee 10s linear infinite"
          }}
        >
          {/* Repeated content for the marquee effect */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap mx-4">
              <Icon className="text-slate-900 mr-2" size={24} />
              <span className="text-slate-900 font-semibold text-lg uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SideNav;