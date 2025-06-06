import React, { useState, forwardRef, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  PenTool,
  FileCheck,
  Clock,
  Download,
  CheckCircle,
  Star,
  BookMarked,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import DecryptedText from "../bits/DecryptedText";

const NotesSection = forwardRef((props, ref) => {
  // Mouse position tracking for lighting effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const featureControls = useAnimation();

  // Handle mouse movement for the glowing effect
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
          featureControls.start("visible");
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
  }, [ref, featureControls]);

  // Auto-rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Key features of the notes
  const features = [
    {
      icon: FileCheck,
      title: "Comprehensive Coverage",
      description:
        "Every topic, concept, and subtlety covered in-depth with expert insights",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: BookMarked,
      title: "Previous Year Questions",
      description:
        "All PYQs analyzed and solved with step-by-step explanations",
      color: "from-purple-500 to-pink-500",
    },

    {
      icon: MessageSquare,
      title: "Engaging Content",
      description: "Relevant memes and examples that make learning enjoyable",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const textItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Note page rotation animation constant
  const rotationAngles = [-15, 15]; // Left and right rotation angles

  return (
    <section
      ref={(node) => {
        // Assign the ref both to the forwarded ref and our local ref
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="notes"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid background with fade effect */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#00AEEF_1px),linear-gradient(90deg,transparent_9px,#00AEEF_1px)] bg-[length:100px_100px]"></div>
        </div>

        {/* Ambient gradient orbs */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#00AEEF]/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#0067b5]/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        {/* Ultra-Premium Hero Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
              <DecryptedText
                text="Premium Study Resources"
                speed={30}
                sequential={true}
                maxIterations={2}
                animateOn="view"
              />
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Masterclass
            </span>
            <span className="text-[#00AEEF]"> Notes</span>
            <motion.span
              className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Masterclass Notes
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expertly crafted study materials that cover everything from
            fundamentals to advanced topics, with comprehensive PYQ analysis and
            engaging visual content.
          </motion.p>
        </motion.div>

        {/* Main Content: Left-Right Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side: Content & Features */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Main heading */}
            <motion.div variants={textItemVariants} className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Not Just Notes, But A
                <span className="block text-[#00AEEF]">
                  Complete Learning Experience
                </span>
              </h3>
            </motion.div>

            {/* Features list with animations */}
            <motion.div variants={containerVariants} className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={textItemVariants}
                  className={`p-5 rounded-xl transition-all duration-300 ${
                    activeFeatureIndex === idx
                      ? "bg-white dark:bg-slate-800/80 shadow-lg"
                      : "bg-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 cursor-pointer"
                  }`}
                  onClick={() => setActiveFeatureIndex(idx)}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mr-4 shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {[
                { value: "300+", label: "Notes Uploaded" },
                { value: "4.9", label: "Avg. Rating", suffix: "★" },
                { value: "10K+", label: "Downloads" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="rounded-xl p-4 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 shadow-sm"
                >
                  <div className="flex justify-center items-end mb-1">
                    <span className="text-2xl md:text-3xl font-bold text-[#00AEEF]">
                      <DecryptedText
                        text={stat.value}
                        speed={20}
                        maxIterations={5}
                        animateOn="view"
                      />
                    </span>
                    {stat.suffix && (
                      <span className="text-2xl md:text-3xl font-bold text-yellow-500 ml-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={textItemVariants} className="mt-10">
              <Link to="/notes">
                <motion.button
                  className="group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#0067b5] to-[#00AEEF] relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated light effect */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  <span className="relative z-10 text-white font-medium flex items-center">
                    Explore All Notes
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: V-shaped Notes Arrangement */}
          <motion.div
            className="w-full lg:w-1/2 h-[300px] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Base platform with reflection */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-6 bg-black/10 dark:bg-black/20 rounded-[100%] blur-md"></div>

            {/* Notes in V-Shape */}
            {[
              {
                title: "Data Structures & Algorithms",
                color: "from-blue-600 to-cyan-400",
                angle: rotationAngles[0], // Left-side note
                zIndex: 10,
                offsetX: -20,
                offsetY: 15,
              },
              {
                title: "GATE CSE Complete Notes",
                color: "from-purple-600 to-pink-500",
                angle: rotationAngles[1], // Right-side note
                zIndex: 20,
                offsetX: 20,
                offsetY: 0,
              },
            ].map((note, idx) => (
              <motion.div
                key={idx}
                className="absolute left-1/2 bottom-[10%] w-[280px] md:w-[320px] origin-bottom"
                initial={{
                  rotateZ: note.angle,
                  x: `-50%`,
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  rotateZ: note.angle,
                  x: `calc(-50% + ${note.offsetX}px)`,
                  y: note.offsetY,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ zIndex: note.zIndex }}
                whileHover={{
                  y: note.offsetY - 15,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  {/* Note Header */}
                  <div
                    className={`bg-gradient-to-r ${note.color} px-6 py-4 flex justify-between items-center`}
                  >
                    <h4 className="text-white font-bold text-lg truncate">
                      {note.title}
                    </h4>
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      PDF
                    </span>
                  </div>

                  {/* Note Preview Content */}
                  <div className="px-6 py-4">
                    {/* Sample content specific to each note */}
                    {idx === 0 ? (
                      <>
                        <div className="mb-3 text-sm font-medium text-slate-900 dark:text-white">
                          Binary Search Tree Operations
                        </div>
                        <div className="space-y-3">
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                        </div>
                        <div className="mt-4 flex justify-center">
                          <div className="relative w-28 h-28">
                            {/* Simple tree visualization */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">
                                10
                              </span>
                            </div>
                            <div className="absolute top-[40%] left-[20%] w-6 h-6 bg-[#00AEEF] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">
                                5
                              </span>
                            </div>
                            <div className="absolute top-[40%] right-[20%] w-6 h-6 bg-[#00AEEF] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">
                                15
                              </span>
                            </div>
                            <div className="absolute w-[1px] h-12 bg-slate-400 top-[10px] left-1/2 transform -translate-x-1/2 rotate-[-30deg] origin-top"></div>
                            <div className="absolute w-[1px] h-12 bg-slate-400 top-[10px] right-[46%] transform rotate-[30deg] origin-top"></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-3 text-sm font-medium text-slate-900 dark:text-white">
                          Topic-wise PYQ Analysis
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-1/3 h-2 bg-[#00AEEF] rounded mr-2"></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Operating Systems
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1/4 h-2 bg-purple-500 rounded mr-2"></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              DBMS
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1/2 h-2 bg-green-500 rounded mr-2"></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Data Structures
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-[40%] h-2 bg-amber-500 rounded mr-2"></div>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              Algorithms
                            </span>
                          </div>
                        </div>
                        {/* Highlight areas */}
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center text-xs text-green-500">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            <span>90% Success Rate</span>
                          </div>
                          <div className="flex items-center text-xs text-amber-500">
                            <Star className="w-3 h-3 mr-1" />
                            <span>Top Rated</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Note Footer */}
                  <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {idx === 0 ? "42 pages" : "120 pages"}
                      </span>
                    </div>
                    <button className="flex items-center text-xs font-medium text-[#00AEEF] hover:text-[#0067b5] transition-colors">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </button>
                  </div>

                  {/* Highlight corner */}
                  <div className="absolute top-0 right-0">
                    <div className="w-16 h-16 overflow-hidden">
                      <div
                        className={`w-[120%] h-[120%] bg-gradient-to-r ${note.color} rotate-45 transform origin-top-left flex items-center justify-center`}
                      >
                        <Sparkles className="w-3 h-3 text-white transform rotate-[-45deg] relative top-6 right-6" />
                      </div>
                    </div>
                  </div>

                  {/* Digital data streams */}
                  <AnimatePresence>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`stream-${idx}-${i}`}
                        className={`absolute h-0.5 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent overflow-hidden pointer-events-none`}
                        style={{
                          top: `${20 + i * 30}%`,
                          left: "0%",
                          width: "100%",
                          transform: `rotate(${i * 3}deg)`,
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.7, 0] }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{
                          duration: 1.5 + i * 0.3,
                          repeat: Infinity,
                          repeatDelay: i * 0.5 + 1,
                        }}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Subtle glowing orb near the notes */}
            <motion.div
              className="absolute bottom-[20%] left-1/2 w-[200px] h-[100px] rounded-full bg-[#00AEEF]/10 filter blur-[40px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default NotesSection;
