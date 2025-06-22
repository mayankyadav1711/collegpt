import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import {
  Star,
  Send,
  Heart,
  GraduationCap,
  CheckCircle,
  Zap,
  Laptop,
  Smartphone,
  CircleCheck,
  Loader2,
  Code,
  MessageCircle,
  Lightbulb,
  User,
  Mail,
  Award,
} from "lucide-react";
import { ENDPOINTS } from "../../api/api";

const GraduateFeedbackForm = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [currentTime, setCurrentTime] = useState("");
  const [formFocused, setFormFocused] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const sectionRef = useRef(null);

  // Interactive circle background
  const particlesRef = useRef([]);
  const numParticles = 30;

  // Advanced animations
  const textControls = useAnimation();
  const submitControls = useAnimation();
  const progressValue = useMotionValue(0);

  // Typewriter animation states
  const [showTyping, setShowTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText =
    "After years of shared learning and growth, your ColleGPT journey is complete. Share how we've supported your academic path.";
  const typingRef = useRef(null);
  const typingSpeed = 40; // ms between characters

  // Initialize particles
  useEffect(() => {
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < numParticles; i++) {
        const radius = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;
        const speed = Math.random() * 40 + 20;

        particlesRef.current.push({ radius, x, y, opacity, speed });
      }
    }
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText((prevText) => prevText + fullText.charAt(currentIndex));
        currentIndex++;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => setShowTyping(false), 1000);
      }
    };

    if (showTyping) {
      timer = setTimeout(typeText, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [showTyping]);

  // Handle responsive viewport
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update current time
  useEffect(() => {
    // Set current time
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    // Set up time updater
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const glitchText = {
    animate: {
      opacity: [1, 0.8, 1],
      x: [0, -1, 1, 0],
      textShadow: [
        "0 0 0 rgba(0, 174, 239, 0)",
        "0 0 5px rgba(0, 174, 239, 0.5)",
        "0 0 0 rgba(0, 174, 239, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        ease: "linear",
        repeatDelay: 3,
      },
    },
  };

  // Handle form validation
  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (rating === 0) errors.rating = "Please rate your experience";
    if (!feedback.trim()) errors.feedback = "Feedback is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit handler with animation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormErrors({});

    const formData = {
      name,
      email,
      rating,
      feedback,
      graduationYear: currentYear,
    };

    try {
      const response = await fetch(ENDPOINTS.SUBMIT_GRADUATE_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }
      setShowSuccessMessage(true);
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
    } catch (error) {
      setFormErrors({ submit: error.message || "Submission failed" });
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-16 md:py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>

        {/* Grid with perspective */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 transform"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 transform"
              style={{
                transform: "rotateX(70deg) translateZ(-100px)",
                background: `linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>

        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-cyan-500/3 to-blue-500/3 dark:from-cyan-500/8 dark:to-blue-500/8 blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Dynamic spotlight */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 174, 239, 0.08), transparent 80%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particlesRef.current.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 dark:bg-blue-400 pointer-events-none"
            style={{
              width: particle.radius,
              height: particle.radius,
              opacity: particle.opacity,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [
                particle.opacity,
                particle.opacity * 2,
                particle.opacity,
              ],
            }}
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {!showSuccessMessage ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            {/* Terminal-inspired header with blinking cursor */}
            <motion.div
              variants={fadeInUp}
              className="w-full mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5"
            >
              {/* Top bar with terminal controls */}
              <div className="bg-gray-100/90 dark:bg-gray-800/90 px-4 py-3 flex items-center gap-3 border-b border-gray-200/70 dark:border-gray-700/70">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500/90 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500/90 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500/90 rounded-full"></div>
                </div>

                <div className="flex-1 text-center">
                  <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                    collegpt://{currentYear}/graduate-feedback
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-gray-600 dark:text-gray-400 font-mono text-xs hidden sm:block">
                    {currentTime}
                  </div>
                  <div className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-mono text-xs">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 animate-ping"></span>
                    ACTIVE
                  </div>
                </div>
              </div>

              {/* Header content */}
              <div className="bg-gradient-to-b from-white/50 to-gray-50/70 dark:from-gray-900/50 dark:to-gray-800/70 p-8 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left side content */}
                  <motion.div
                    variants={fadeInUp}
                    className="md:col-span-7 text-center md:text-left"
                  >
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100/70 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 mb-4 border border-blue-200/30 dark:border-blue-900/50 shadow-sm">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Class of {currentYear}
                    </div>

                    <div className="relative">
                      {/* Premium title with gradient effect */}
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                        <span className="relative inline-block">
                          <span className="relative z-10">Your ColleGPT</span>
                          {/* Gradient underline */}
                          <span className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 dark:from-blue-600/30 dark:to-cyan-600/30 -z-10 transform translate-y-1"></span>
                        </span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                          Journey
                        </span>
                      </h1>

                      <motion.div
                        variants={fadeInUp}
                        className="font-mono flex md:justify-start justify-center items-center gap-2 mt-3 mb-5"
                      >
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          STATUS:
                        </span>
                        <span className="text-blue-600 dark:text-blue-400">
                          GRADUATION_SEQUENCE_COMPLETE
                        </span>
                        <motion.span
                          className="w-2 h-5 bg-blue-600 dark:bg-blue-400 inline-block"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/70 rounded-lg p-4 my-4 overflow-hidden font-mono text-gray-700 dark:text-gray-300 text-sm md:max-w-lg w-full cursor-default">
                          <div className="flex">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">
                              &gt;
                            </span>
                            <p className="relative">
                              {showTyping ? (
                                <>
                                  {typedText}
                                  <span className="inline-block w-2 h-4 ml-0.5 bg-blue-600 dark:bg-blue-400 animate-blink"></span>
                                </>
                              ) : (
                                fullText
                              )}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Icons row */}
                      <div className="hidden md:flex gap-4 mt-6">
                        <motion.div
                          className="flex flex-col items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-1">
                            <Lightbulb size={20} />
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Insights
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex flex-col items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-1">
                            <Code size={20} />
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Learning
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex flex-col items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-1">
                            <MessageCircle size={20} />
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Support
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex flex-col items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-1">
                            <Award size={20} />
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Achievement
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right side graphic */}
                  <motion.div
                    variants={fadeInUp}
                    className="md:col-span-5 hidden md:block"
                  >
                    <motion.div
                      className="relative"
                      variants={pulseVariants}
                      animate="animate"
                    >
                      {/* Radial gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-xl"></div>

                      {/* 3D Graduate illustration */}
                      <div className="relative w-[300px] h-[300px] mx-auto">
                        <img
                          src="https://i.ibb.co/SwDQfqjb/98408298989.png"
                          alt="Graduation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Form */}
              <motion.div
                variants={fadeInUp}
                className="max-w-3xl mx-auto px-6 py-8"
              >
                <form onSubmit={handleSubmit}>
                  {/* Form container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <motion.div
                      variants={formFieldVariants}
                      className={`relative group transition-all duration-300 ${
                        formFocused === "name" ? "scale-[1.02]" : ""
                      }`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        <span>
                          User.name <span className="text-red-500">*</span>
                        </span>
                      </label>

                      <div className="relative">
                        {/* Input field */}
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (formErrors.name) {
                              setFormErrors({ ...formErrors, name: undefined });
                            }
                          }}
                          onFocus={() => setFormFocused("name")}
                          onBlur={() => setFormFocused(null)}
                          placeholder="Enter your identity parameter"
                          className={`w-full px-4 py-3 rounded-lg shadow-sm font-mono text-base ${
                            formErrors.name
                              ? "border-2 border-red-500"
                              : "border border-gray-300 dark:border-gray-700 group-hover:border-blue-400 focus:border-blue-500 dark:focus:border-blue-500"
                          } bg-white/90 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                            formErrors.name
                              ? "focus:ring-red-500"
                              : "focus:ring-blue-500/30"
                          } focus:border-transparent transition-all`}
                        />

                        {/* Shimmer effect */}
                        {formFocused === "name" && (
                          <motion.div
                            className="absolute inset-0 w-full h-full -z-10 opacity-50"
                            variants={shimmerVariants}
                            animate="animate"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                          </motion.div>
                        )}
                      </div>

                      {/* Error message */}
                      {formErrors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-sm text-red-500 font-mono flex items-center"
                        >
                          <span className="mr-1">⚠</span> {formErrors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Email field */}
                    <motion.div
                      variants={formFieldVariants}
                      className={`relative group transition-all duration-300 ${
                        formFocused === "email" ? "scale-[1.02]" : ""
                      }`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-500" />
                        <span>
                          User.contact <span className="text-red-500">*</span>
                        </span>
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (formErrors.email) {
                              setFormErrors({
                                ...formErrors,
                                email: undefined,
                              });
                            }
                          }}
                          onFocus={() => setFormFocused("email")}
                          onBlur={() => setFormFocused(null)}
                          placeholder="your.email@network.domain"
                          className={`w-full px-4 py-3 rounded-lg shadow-sm font-mono text-base ${
                            formErrors.email
                              ? "border-2 border-red-500"
                              : "border border-gray-300 dark:border-gray-700 group-hover:border-blue-400 focus:border-blue-500 dark:focus:border-blue-500"
                          } bg-white/90 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                            formErrors.email
                              ? "focus:ring-red-500"
                              : "focus:ring-blue-500/30"
                          } focus:border-transparent transition-all`}
                        />

                        {/* Shimmer effect */}
                        {formFocused === "email" && (
                          <motion.div
                            className="absolute inset-0 w-full h-full -z-10 opacity-50"
                            variants={shimmerVariants}
                            animate="animate"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                          </motion.div>
                        )}
                      </div>

                      {formErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-sm text-red-500 font-mono flex items-center"
                        >
                          <span className="mr-1">⚠</span> {formErrors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  {/* Rating field */}
                  <motion.div variants={formFieldVariants} className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-blue-500" />
                      <span>
                        System.rating <span className="text-red-500">*</span>
                      </span>
                    </label>

                    <div className="relative p-6 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
                      {/* Rating stars */}
                      <div className="flex items-center justify-center md:justify-start flex-wrap gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <motion.button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-1 focus:outline-none transition-colors"
                            >
                              <Star
                                className={`w-8 h-8 ${
                                  (hoverRating || rating) >= star
                                    ? "text-blue-500 fill-blue-500"
                                    : "text-gray-300 dark:text-gray-600"
                                } transition-colors`}
                              />
                            </motion.button>
                          ))}
                        </div>

                        {/* Rating label */}
                        <motion.div
                          animate={{
                            opacity: (rating || hoverRating) > 0 ? 1 : 0.7,
                            scale: (rating || hoverRating) > 0 ? 1 : 0.95,
                          }}
                          className="ml-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-sm text-gray-700 dark:text-gray-300"
                        >
                          {rating === 0 &&
                            hoverRating === 0 &&
                            "Select Rating Value"}
                          {(hoverRating === 1 ||
                            (hoverRating === 0 && rating === 1)) &&
                            "Needs Improvement 😞"}
                          {(hoverRating === 2 ||
                            (hoverRating === 0 && rating === 2)) &&
                            "Fair 😐"}
                          {(hoverRating === 3 ||
                            (hoverRating === 0 && rating === 3)) &&
                            "Good 👍"}
                          {(hoverRating === 4 ||
                            (hoverRating === 0 && rating === 4)) &&
                            "Very Good 😃"}
                          {(hoverRating === 5 ||
                            (hoverRating === 0 && rating === 5)) &&
                            "Excellent! 🌟"}
                        </motion.div>
                      </div>

                      {/* Rating description based on hover/selection */}
                      {(hoverRating || rating) > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {(hoverRating === 1 ||
                              (hoverRating === 0 && rating === 1)) &&
                              "We're sorry to hear that ColleGPT didn't meet your expectations. Your feedback will help us make significant improvements."}
                            {(hoverRating === 2 ||
                              (hoverRating === 0 && rating === 2)) &&
                              "Thank you for your honest feedback. We'll work on enhancing our platform based on your experience."}
                            {(hoverRating === 3 ||
                              (hoverRating === 0 && rating === 3)) &&
                              "We appreciate your positive rating! We're glad ColleGPT was helpful during your academic journey."}
                            {(hoverRating === 4 ||
                              (hoverRating === 0 && rating === 4)) &&
                              "Great to hear that ColleGPT significantly enhanced your learning experience! We aim to keep improving."}
                            {(hoverRating === 5 ||
                              (hoverRating === 0 && rating === 5)) &&
                              "Fantastic! We're thrilled that ColleGPT exceeded your expectations and made a meaningful impact on your academic success!"}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {formErrors.rating && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-500 font-mono flex items-center"
                      >
                        <span className="mr-1">⚠</span> {formErrors.rating}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Feedback textarea */}
                  <motion.div
                    variants={formFieldVariants}
                    className={`mt-6 relative transition-all duration-300 ${
                      formFocused === "feedback" ? "scale-[1.01]" : ""
                    }`}
                    whileHover={{ scale: 1.005 }}
                  >
                    <label
                      htmlFor="feedback"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono flex items-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-blue-500" />
                      <span>
                        User.experience_log{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>

                    <div
                      className={`bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-lg overflow-hidden shadow-sm ${
                        formErrors.feedback
                          ? "border-2 border-red-500"
                          : "border border-gray-300 dark:border-gray-700"
                      }`}
                    >
                      {/* Textarea header */}
                      <div className="bg-gray-100/90 dark:bg-gray-800/90 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs flex-1 font-mono">
                          feedback.log
                        </div>
                        {/* Line numbers indicator */}
                        <div className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400 font-mono">
                          lines: {feedback.split("\n").length}
                        </div>
                      </div>

                      {/* Textarea with line numbers */}
                      <div
                        className="relative"
                        onFocus={() => setFormFocused("feedback")}
                        onBlur={() => setFormFocused(null)}
                      >
                        <div className="absolute top-0 bottom-0 left-0 w-10 bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-700 py-3 select-none">
                          {Array.from({
                            length: Math.max(1, feedback.split("\n").length),
                          }).map((_, i) => (
                            <div
                              key={i}
                              className="text-right px-2 text-xs font-mono text-gray-500 dark:text-gray-500 leading-6"
                            >
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <textarea
                          id="feedback"
                          rows="5"
                          value={feedback}
                          onChange={(e) => {
                            setFeedback(e.target.value);
                            if (formErrors.feedback) {
                              setFormErrors({
                                ...formErrors,
                                feedback: undefined,
                              });
                            }
                          }}
                          placeholder="Share how ColleGPT has supported your academic journey - which features helped most with your assignments, how it enhanced your study sessions, and what improvements could benefit future students..."
                          className="w-full pl-14 pr-4 py-3 font-mono text-base bg-transparent text-gray-900 dark:text-gray-300 focus:outline-none resize-y"
                        ></textarea>

                        {/* Shimmer effect for textarea */}
                        {formFocused === "feedback" && (
                          <motion.div
                            className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none"
                            variants={shimmerVariants}
                            animate="animate"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-full h-full transform skew-x-12"></div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {formErrors.feedback && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-sm text-red-500 font-mono flex items-center"
                      >
                        <span className="mr-1">⚠</span> {formErrors.feedback}
                      </motion.p>
                    )}

                    {/* Character count */}
                    <div className="mt-1 text-right">
                      <span
                        className={`text-xs font-mono ${
                          feedback.length > 500
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-500 dark:text-gray-500"
                        }`}
                      >
                        {feedback.length} characters
                      </span>
                    </div>
                  </motion.div>

                  {/* Responsive device indicator */}
                  <motion.div
                    variants={formFieldVariants}
                    className="mt-6 flex items-center gap-3 justify-center md:justify-end"
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      DEVICE:
                    </span>
                    <div className="flex gap-2 bg-gray-50 dark:bg-gray-800 p-1 rounded-md border border-gray-200 dark:border-gray-700 shadow-inner">
                      <div className="flex items-center gap-1 px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {viewportWidth >= 768 ? (
                          <>
                            <Laptop className="w-3 h-3" />
                            <span className="text-xs font-mono">DESKTOP</span>
                          </>
                        ) : (
                          <>
                            <Smartphone className="w-3 h-3" />
                            <span className="text-xs font-mono">MOBILE</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 text-gray-500 dark:text-gray-400">
                        <span className="text-xs font-mono">
                          {viewportWidth}px
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    variants={formFieldVariants}
                    className="flex justify-center md:justify-end mt-8"
                  >
                    <div className="relative">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                        whileHover={!isSubmitting ? { y: -2, scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { y: 0, scale: 0.98 } : {}}
                        animate={submitControls}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="font-mono">PROCESSING</span>
                          </>
                        ) : (
                          <>
                            <span className="font-mono">SUBMIT FEEDBACK</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      {/* Glow effect */}
                    </div>
                  </motion.div>

                  {/* Form ID */}
                  <motion.div
                    variants={formFieldVariants}
                    className="mt-6 text-center font-mono text-xs text-gray-500 dark:text-gray-500"
                  >
                    <motion.div
                      className="cursor-default inline-block px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
                      whileHover={{
                        backgroundColor: [
                          "rgba(243, 244, 246, 1)",
                          "rgba(239, 246, 255, 1)",
                          "rgba(243, 244, 246, 1)",
                        ],
                        color: [
                          "rgba(107, 114, 128, 1)",
                          "rgba(37, 99, 235, 1)",
                          "rgba(107, 114, 128, 1)",
                        ],
                      }}
                      transition={{ duration: 1.5 }}
                    >
                      ID:{" "}
                      {Math.random().toString(36).substr(2, 9).toUpperCase()}
                      -GRD-{currentYear} • SEC-LVL: B3 • {currentTime} UTC
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 max-w-3xl mx-auto text-center px-4"
            >
              <div className="relative">
                {/* Quote decoration */}
                <div className="absolute -top-6 -left-4 text-5xl text-blue-300/20 dark:text-blue-700/20 font-serif">
                  ❝
                </div>
                <div className="absolute -bottom-6 -right-4 text-5xl text-blue-300/20 dark:text-blue-700/20 font-serif">
                  ❞
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic px-6 relative z-10">
                  "As one journey ends, your insights light the path for others.
                  Thank you for growing with us these past years. Your ColleGPT
                  story continues in every student we help tomorrow."
                </blockquote>

                <div className="mt-4">
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    ColleGPT Team
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {currentYear}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="max-w-2xl mx-auto mt-10"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                {/* Success message terminal header */}
                <div className="bg-gray-100/90 dark:bg-gray-800/90 px-4 py-3 flex items-center gap-3 border-b border-gray-200/70 dark:border-gray-700/70">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500/90 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500/90 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500/90 rounded-full"></div>
                  </div>

                  <div className="flex-1 text-center">
                    <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                      collegpt://{currentYear}/success
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-gray-600 dark:text-gray-400 font-mono text-xs hidden sm:block">
                      {currentTime}
                    </div>
                    <div className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-mono text-xs">
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-ping"></span>
                      SUCCESS
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 text-center">
                  {/* Success animation */}
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    animate={{
                      scale: [0.8, 1],
                      opacity: [0, 1],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <CircleCheck className="w-12 h-12 text-blue-500 dark:text-blue-400" />
                    </motion.div>
                  </motion.div>

                  <motion.h2
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    variants={glitchText}
                  >
                    Transmission Complete
                  </motion.h2>

                  {/* Terminal-like output */}
                  <motion.div
                    className="bg-gradient-to-br from-gray-100/60 to-gray-50/60 dark:from-gray-800/60 dark:to-gray-900/60 p-6 mb-6 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-left relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <div className="flex flex-col gap-1 relative z-10">
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        $ system.post("/feedback", &#123;status: 200&#125;)
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <span className="text-green-500 dark:text-green-400 font-medium">
                          SUCCESS
                        </span>
                        <span className="mx-1">//</span>
                        Trace:{" "}
                        {Math.random().toString(36).substr(2, 16).toUpperCase()}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        <span className="text-gray-400 dark:text-gray-500">
                          {">"}
                        </span>{" "}
                        Timestamp: {new Date().toISOString()}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className="text-gray-400 dark:text-gray-500">
                          {">"}
                        </span>{" "}
                        User feedback received & processed
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className="text-gray-400 dark:text-gray-500">
                          {">"}
                        </span>{" "}
                        Data integration{" "}
                        <span className="text-green-500 dark:text-green-400">
                          successful
                        </span>
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <span className="text-green-500 dark:text-green-400">
                          ✓
                        </span>
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          OPERATION COMPLETED
                        </span>
                      </div>
                    </div>

                    {/* Animated background lines */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-px bg-blue-500/10 dark:bg-blue-400/10"
                        style={{
                          width: "100%",
                          left: 0,
                          top: `${i * 20 + 10}%`,
                        }}
                        animate={{
                          x: [-100, 500],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.4,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </motion.div>

                  <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    Your feedback will optimize ColleGPT for future students. We
                    wish you continued success in all your future endeavors.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.7 }}
                  >
                    <a
                      href="/"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden group"
                    >
                      {/* Button text */}
                      <span className="font-mono relative z-10 flex items-center gap-2">
                        <span>RETURN TO HOMEPAGE</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>

                      {/* Animated shine effect */}
                      <span className="absolute inset-0 overflow-hidden rounded-lg">
                        <motion.span
                          className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[45deg]"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            repeatDelay: 1,
                          }}
                        />
                      </span>
                    </a>

                    <motion.div
                      className="mt-6 text-center font-mono text-xs text-gray-500 dark:text-gray-500 px-4 py-2 rounded-md bg-gray-100/50 dark:bg-gray-800/50 inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      SESSION:{" "}
                      {Math.random().toString(36).substr(2, 6).toUpperCase()} •
                      CLOSED • {currentTime} UTC
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Add CSS styles to support animations */}
        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            25% {
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
            50% {
              border-radius: 50% 60% 30% 60% / 40% 30% 70% 50%;
            }
            75% {
              border-radius: 40% 60% 70% 30% / 60% 40% 30% 70%;
            }
          }

          .animate-blob {
            animation: blob 20s ease-in-out infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          .animate-blink {
            animation: blink 0.8s step-end infinite;
          }

          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default GraduateFeedbackForm;
