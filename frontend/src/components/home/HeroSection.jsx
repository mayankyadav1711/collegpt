import React, { forwardRef, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  Github,
  Code,
  Users,
  PenTool,
  Share2,
  GitBranch,
  Star,
  GitPullRequest,
  ExternalLink,
  File,
} from "lucide-react";

const HeroSection = forwardRef(({ notesRef }, ref) => {
  // Mouse position tracking for lighting effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [splineReady, setSplineReady] = useState(false);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isRobotLoaded, setIsRobotLoaded] = useState(false);
  const [selectedSpline, setSelectedSpline] = useState("robotFollow"); // or "robotScene"

  // Spline onLoad handler
  const handleSplineLoad = () => {
    setIsRobotLoaded(true);
  };

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const bounds = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Handle intersection observer for animations
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

  // Stats with improved structure
  const stats = [
    {
      value: "2500+",
      label: "Students",
      icon: <Users className="w-4 h-4 text-[#00AEEF]" />,
    },
    {
      value: "350+",
      label: "Resources",
      icon: <Code className="w-4 h-4 text-[#00AEEF]" />,
    },
    {
      value: "Open",
      label: "Source",
      icon: <Github className="w-4 h-4 text-[#00AEEF]" />,
    },
  ];

  // Open source benefits
  const openSourceFeatures = [
    {
      icon: <GitBranch className="w-5 h-5" />,
      text: "Contribute code & content",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      text: "Shape the future of learning",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Join a community of creators",
    },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] flex items-center py-16 md:py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Premium Grid Background with 3D perspective */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-8 dark:opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,174,239,0.07)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient
              id="spotlight"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="rgba(0,174,239,0.03)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* 3D Perspective grid */}
          <g transform="scale(1, 0.5) rotate(-30) translate(100, 100)">
            <rect
              width="2000"
              height="2000"
              fill="url(#grid)"
              transform="translate(-500, -500)"
            />
          </g>

          {/* Bottom grid layer for depth */}
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
        </svg>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.08), transparent 80%)`,
        }}
        ref={heroRef}
      />

      {/* Subtle ambient gradients */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/5 to-blue-500/0 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/5 to-cyan-500/0 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column: Hero Text & Buttons */}
            <motion.div
              className="lg:w-7/12 lg:pr-8 text-center lg:text-left"
              variants={containerVariants}
            >
              {/* Open Source Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-sm bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20"
              >
                <Github className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent font-medium">
                  <DecryptedText
                    text="Now Open Source on GitHub"
                    speed={30}
                    sequential={true}
                    maxIterations={2}
                    animateOn="view"
                  />
                </span>
              </motion.div>

              {/* Main Title with premium effect */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-jost relative"
              >
                <span className="block mb-2 tracking-tight">
                  <span className="relative">
                    <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-70 rounded-lg"></span>
                    <span className="relative text-slate-900 dark:text-white">
                      Colle
                    </span>
                  </span>
                  <span className="text-[#00AEEF]">GPT</span>
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-300 mt-4">
                  <DecryptedText
                    text="By the community, for the community"
                    className="font-light"
                    speed={40}
                    maxIterations={5}
                    sequential={true}
                    animateOn="view"
                  />
                </span>
              </motion.h1>

              {/* Description - Updated for Open Source */}
              <motion.p
                variants={itemVariants}
                className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 my-8 leading-relaxed"
              >
                ColleGPT is now an open source project, welcoming contributions
                from developers, designers, educators, and students. Join us in
                building the future of collaborative education through code and
                content.
              </motion.p>

              {/* Open Source Features */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                {openSourceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20"
                  >
                    <span className="text-[#00AEEF]">{feature.icon}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Updated for Open Source */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              >
                <a
                  href="https://github.com/yourusername/collegpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="relative group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#2b3137] to-[#404b55] flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated light effect */}
                    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>

                    <Github className="w-5 h-5 text-white" />
                    <span className="relative z-10 text-white font-medium flex items-center">
                      Star on GitHub
                      <Star className="ml-2 w-4 h-4 text-amber-300" />
                    </span>
                  </motion.button>
                </a>

                <Link to="/courses">
                  <motion.button
                    className="relative group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated light effect */}
                    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>

                    <span className="relative z-10 text-white font-medium flex items-center">
                      Explore Resources
                      <File className="ml-2 w-4 h-4" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 gap-2 md:gap-6"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 dark:from-slate-800/40 dark:to-slate-800/20 backdrop-blur-md rounded-xl border border-white/10 dark:border-slate-700/20 overflow-hidden p-4 md:p-6 hover:shadow-lg transition-shadow">
                      {/* Pulsing background effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
                        animate={{
                          opacity: [0, 0.2, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />

                      {/* Value with animated counter effect */}
                      <div className="flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 dark:from-white to-slate-500 dark:to-slate-300 bg-clip-text text-transparent">
                          <DecryptedText
                            text={stat.value}
                            speed={20}
                            maxIterations={8}
                            animateOn="view"
                          />
                        </span>
                        {stat.suffix && (
                          <span className="text-3xl md:text-4xl font-bold text-yellow-500 ml-1">
                            {stat.suffix}
                          </span>
                        )}
                      </div>

                      {/* Label with icon */}
                      <div className="flex items-center justify-center gap-1.5 text-sm md:text-base text-center text-slate-500 dark:text-slate-400 mt-2">
                        {stat.icon}
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Robot Animation */}
            <motion.div
              className="lg:w-5/12 mt-12 lg:mt-0"
              variants={itemVariants}
            >
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto pt-4">
                {/* Loading state */}
                {!isRobotLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-[#00AEEF] animate-spin mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Loading interactive robot...
                    </p>
                  </div>
                )}

                {/* Robot animation using custom iframe with removed watermark */}
                <div
                  className={`w-full h-full transition-opacity duration-700 ${
                    isRobotLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Custom iframe wrapper to handle the Spline watermark */}
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://my.spline.design/robotfollowcursorforlandingpage-T77lkoiVqe2I4yDJDtZyuILC/"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      title="Interactive Robot"
                      onLoad={handleSplineLoad}
                      className="absolute inset-0 w-full h-full"
                      style={{ zIndex: 1 }}
                    ></iframe>
                    
                    {/* Overlay to hide watermark */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#070D19] z-2" style={{ zIndex: 2 }}></div>
                  </div>
                </div>

                {/* Fallback animation if Spline fails to load */}
                {!isRobotLoaded && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="aspect-[4/5] max-w-md mx-auto relative">
                      {/* Main graphic - circular layers */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Rotating rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute border border-cyan-500/20 rounded-full"
                            style={{
                              width: `${80 - i * 15}%`,
                              height: `${80 - i * 15}%`,
                            }}
                            animate={{
                              rotate: 360,
                              borderColor: [
                                "rgba(0,174,239,0.2)",
                                "rgba(0,103,181,0.2)",
                                "rgba(0,174,239,0.2)",
                              ],
                            }}
                            transition={{
                              duration: 20 + i * 5,
                              ease: "linear",
                              repeat: Infinity,
                              borderColor: { duration: 3, repeat: Infinity },
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => notesRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="w-5 h-10 rounded-full border-2 border-slate-300/30 dark:border-slate-700/30 flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-slate-400/50 dark:bg-slate-500/50 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
});

export default HeroSection;