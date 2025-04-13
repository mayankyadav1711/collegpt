import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send, Heart, GraduationCap, CheckCircle } from "lucide-react";
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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const glitchText = {
    animate: {
      opacity: [1, 0.8, 1],
      x: [0, -1, 1, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
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

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Form data
    const formData = {
      name,
      email,
      rating,
      feedback,
      graduationYear: currentYear,
    };

    try {
      // Send feedback to the server
      const response = await fetch(ENDPOINTS.SUBMIT_GRADUATE_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show success message
      setShowSuccessMessage(true);

      // Reset form
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9effd] to-[#e5f5f7] dark:from-[#0c2440] dark:to-[#050a14] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="#00AEEF"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing orbs in background */}
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {!showSuccessMessage ? (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            {/* Terminal-inspired header with blinking cursor */}
            <motion.div
              className="w-full max-w-5xl mx-auto mb-12 bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-100/80 dark:bg-gray-900/80 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs flex-1 text-center font-mono">
                  collegpt:~/graduate-feedback
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-mono">
                  {currentTime}
                </div>
              </div>

              {/* Header */}
              <div className="text-center p-8 bg-white/50 dark:bg-black/30">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-[#00AEEF] dark:bg-gray-800/80 dark:text-[#00AEEF] mb-4 border border-gray-200 dark:border-gray-700">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Class of {currentYear}
                </div>

                <div className="flex justify-center">
                  <div className="perspective-container mb-8 relative">
                    {/* Animated background with tech lines */}
                    <div className="absolute inset-0 -z-10">
                      <svg className="w-full h-full" viewBox="0 0 100 20">
                        <pattern
                          id="techGrid"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="#00AEEF"
                            strokeWidth="0.3"
                            opacity="0.5"
                          />
                        </pattern>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#techGrid)"
                        />
                      </svg>
                    </div>

                    {/* Main heading with 3D effect */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-center py-4">
                        {/* Glow effect behind text */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#00AEEF]/20 dark:bg-[#00AEEF]/30 rounded-full blur-xl"></div>

                        {/* Main text with outer stroke */}
                        <h1 className="relative text-4xl md:text-6xl font-black tracking-tight">
                          <span className="block text-gray-800 dark:text-white relative z-10">
                            Your ColleGPT Journey
                          </span>

                          {/* Text shadow effect */}
                          <span className="absolute inset-0 z-0 text-[#00AEEF] blur-[1px] opacity-70 transform translate-y-[2px] translate-x-[2px]">
                            Your ColleGPT Journey
                          </span>

                          {/* Highlight bars */}
                          <motion.span
                            className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.span>
                        </h1>

                        {/* Tech effect dots */}
                        <div className="flex justify-center gap-1 mt-3">
                          <motion.div
                            className="h-2 w-2 rounded-full bg-[#00AEEF]"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          ></motion.div>
                          <motion.div
                            className="h-2 w-2 rounded-full bg-[#00AEEF]"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          ></motion.div>
                          <motion.div
                            className="h-2 w-2 rounded-full bg-[#00AEEF]"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="font-mono flex items-center justify-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    STATUS:
                  </span>
                  <span className="text-[#00AEEF] dark:text-[#00AEEF] ml-2">
                    Graduation_Sequence_Complete
                  </span>
                  <motion.span
                    className="w-3 h-6 bg-[#00AEEF] dark:bg-[#00AEEF] inline-block ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>

                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6">
                  After 4 years of shared learning and growth, your ColleGPT
                  journey is complete. Tell us how our AI companion transformed
                  your academic experience and shaped your path to graduation.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-2xl mx-auto px-6 py-8">
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono"
                    >
                      <span className="text-[#00AEEF] dark:text-[#00AEEF]">
                        &gt;
                      </span>{" "}
                      User.name <span className="text-red-500">*</span>
                    </label>
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
                      placeholder="Enter your identity parameter"
                      className={`w-full px-4 py-2.5 rounded-lg border font-mono ${
                        formErrors.name
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      } bg-white/70 dark:bg-black/50 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                        formErrors.name
                          ? "focus:ring-red-500"
                          : "focus:ring-[#00AEEF]"
                      } focus:border-transparent transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500 font-mono">
                        ERROR: {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono"
                    >
                      <span className="text-[#00AEEF] dark:text-[#00AEEF]">
                        &gt;
                      </span>{" "}
                      User.contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (formErrors.email) {
                          setFormErrors({ ...formErrors, email: undefined });
                        }
                      }}
                      placeholder="your.email@network.domain"
                      className={`w-full px-4 py-2.5 rounded-lg border font-mono ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      } bg-white/70 dark:bg-black/50 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                        formErrors.email
                          ? "focus:ring-red-500"
                          : "focus:ring-[#00AEEF]"
                      } focus:border-transparent transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500 font-mono">
                        ERROR: {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono">
                      <span className="text-[#00AEEF] dark:text-[#00AEEF]">
                        &gt;
                      </span>{" "}
                      System.rating <span className="text-red-500">*</span>
                    </label>
                    <div className="p-4 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-lg border border-gray-300 dark:border-gray-700">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none transition-colors"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                (hoverRating || rating) >= star
                                  ? "text-[#00AEEF] fill-[#00AEEF]"
                                  : "text-gray-300 dark:text-gray-600"
                              } transition-colors`}
                            />
                          </button>
                        ))}
                        <span className="ml-3 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md font-mono text-sm text-gray-700 dark:text-gray-300">
                          {rating === 0 && "[ Select Rating ]"}
                          {rating === 1 && "[ Poor 😞 ]"}
                          {rating === 2 && "[ Fair 😐 ]"}
                          {rating === 3 && "[ Good 👍 ]"}
                          {rating === 4 && "[ Very Good 😃 ]"}
                          {rating === 5 && "[ Excellent! 🌟 ]"}
                        </span>
                      </div>
                    </div>
                    {formErrors.rating && (
                      <p className="mt-1 text-sm text-red-500 font-mono">
                        ERROR: {formErrors.rating}
                      </p>
                    )}
                  </div>

                  {/* Feedback */}
                  <div className="mb-6">
                    <label
                      htmlFor="feedback"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-mono"
                    >
                      <span className="text-[#00AEEF] dark:text-[#00AEEF]">
                        &gt;
                      </span>{" "}
                      User.experience_log{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-900/10 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden">
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-1 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs flex-1 font-mono">
                          feedback.log
                        </div>
                      </div>
                      <textarea
                        id="feedback"
                        rows="6"
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
                        placeholder="Share how ColleGPT has supported you through these 3 years - which features helped most with assignments, how it enhanced your study sessions, and what improvements could benefit future students. Your feedback shapes the next generation of ColleGPT."
                        className={`w-full px-4 py-2.5 font-mono ${
                          formErrors.feedback ? "border-red-500" : "border-none"
                        } bg-transparent text-gray-900 dark:text-gray-300 focus:outline-none resize-y`}
                      ></textarea>
                    </div>
                    {formErrors.feedback && (
                      <p className="mt-1 text-sm text-red-500 font-mono">
                        ERROR: {formErrors.feedback}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] dark:from-[#00AEEF] dark:to-[#73E0E0] text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          <span className="font-mono">PROCESSING...</span>
                        </>
                      ) : (
                        <>
                          <span className="font-mono">TRANSMIT FEEDBACK</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center font-mono text-xs text-gray-500 dark:text-gray-500">
                    <motion.div
                      className="cursor-default"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0.5 }}
                    >
                      ID:{" "}
                      {Math.random().toString(36).substr(2, 9).toUpperCase()}
                      -GRD-{currentYear} • TRACE: 0xCLGPT-{currentYear} •{" "}
                      {new Date().toISOString()}
                    </motion.div>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="mt-8 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <blockquote className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 italic px-6 md:px-12 font-mono">
                "As one journey ends, your insights light the path for others.
                Thank you for growing with us these past four years. Your
                ColleGPT story continues in every student we help tomorrow."
              </blockquote>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-2xl mx-auto mt-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="bg-gray-100/80 dark:bg-gray-900/80 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs flex-1 text-center font-mono">
                  collegpt:~/success
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-mono">
                  {currentTime}
                </div>
              </div>

              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-[#00AEEF]/10 dark:bg-[#00AEEF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#00AEEF] dark:text-[#00AEEF]" />
                </div>

                <motion.h2
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                  variants={glitchText}
                  animate="animate"
                >
                  Feedback Transmission Complete
                </motion.h2>

                <div className="bg-gray-100/50 dark:bg-gray-900/50 p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-800 font-mono">
                  <p className="text-[#00AEEF] dark:text-[#00AEEF]">
                    System log:
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Trace: 0xC0113G37
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Time: {new Date().toISOString()}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Data integration successful
                  </p>
                  <p className="text-green-600 dark:text-green-400">
                    Status:{" "}
                    <span className="text-white font-bold">COMPLETE</span>
                  </p>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Your data will optimize ColleGPT for future users. We wish you
                  optimal performance in all future systems.
                </p>

                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] dark:from-[#00AEEF] dark:to-[#73E0E0] text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 dark:focus:ring-offset-slate-800 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                >
                  <span className="font-mono">RETURN TO MAINFRAME</span>
                </a>

                <div className="mt-6 text-center font-mono text-xs text-gray-500 dark:text-gray-500">
                  <motion.div
                    className="cursor-default"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0.5 }}
                  >
                    SUCCESS CODE:{" "}
                    {Math.random().toString(36).substr(2, 9).toUpperCase()} •
                    SESSION TERMINATED • {new Date().toISOString()}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GraduateFeedbackForm;
