import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { fetchWithAuth, BASE_URL } from "../../api/api";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  Star,
  Send,
  Users,
  BookOpen,
  Code,
  Sparkle,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MousePointer,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TeamSection from "../../components/custom/TeamSection";

const About = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();

  // Feedback form state
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle star rating click
  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  // Handle feedback submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.isAuthenticated) {
      toast.error("Please log in first");
      navigate("/login");
      return;
    }

    if (!feedback.trim()) {
      toast.error("Please enter your feedback");
      return;
    }

    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetchWithAuth(`${BASE_URL}/feedback`, {
        method: "POST",
        body: JSON.stringify({ feedback, rating }),
      });

      if (response) {
        setFeedback("");
        setRating(0);
        toast.success("Feedback submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      caption: "Collaborative Learning",
      icon: Users,
    },

    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Coding Excellence",
      icon: Code,
    },
  ];

  // Autoplay effect
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, heroImages.length]);

  // Carousel navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
    setAutoplay(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Mouse parallax effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
    setMousePosition({ x, y });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12 relative" onMouseMove={handleMouseMove}>
        {/* Premium Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradients */}
          <div
            className="absolute -top-80 -left-80 w-[500px] h-[500px] rounded-full bg-blue-500/10 mix-blend-multiply blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * -30}px, ${
                mousePosition.y * -30
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
          <div
            className="absolute -bottom-80 -right-80 w-[500px] h-[500px] rounded-full bg-indigo-500/10 mix-blend-multiply blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${
                mousePosition.y * 30
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500/20 mix-blend-screen"
              style={{
                width: Math.random() * 10 + 2 + "px",
                height: Math.random() * 10 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
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

        {/* Main Hero Content */}
        <div className="relative rounded-3xl overflow-hidden h-[80vh] min-h-[600px] max-h-[800px] shadow-2xl">
          {/* Image Carousel */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              {heroImages.map(
                (image, index) =>
                  index === activeSlide && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 z-10 mix-blend-multiply"></div>

                      {/* Subtle Parallax Effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.img
                          src={image.url}
                          alt={image.caption}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            scale: 1.1,
                            x: mousePosition.x * 20,
                            y: mousePosition.y * 20,
                          }}
                          transition={{
                            type: "tween",
                            ease: "easeOut",
                            duration: 0.5,
                          }}
                        />
                      </div>

                      {/* Overlay Pattern */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQjREQkUiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0xaDJ2MWgtMnYtMXptMCAzaDJ2MWgtMnYtMXptLTMgMmgxdjFoLTF2LTF6bTAgMWgtMXYxaDFWMzd6TTM0IDM1aDF2MWgtMXYtMXptLTEtMWgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 z-20"></div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Content Area */}
          <div className="relative z-30 flex flex-col h-full justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-5xl mx-auto">
              {/* Small tagline with animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
                  Revolutionizing Education
                </span>
              </motion.div>

              {/* Main heading with animation */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="block">ColleGPT -</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                  Get Prepared Together!
                </span>
              </motion.h1>

              {/* Description with animation */}
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mb-10 text-blue-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                With the intention of learning and growing together, our team
                has built this platform to revolutionize your academic journey
                by providing engaging resources and a supportive community.
              </motion.p>

              {/* Action buttons with animations */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.a
                  href="#our-mission"
                  className="relative overflow-hidden py-3.5 px-8 bg-white text-blue-600 rounded-full font-medium shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Animated highlight effect */}
                  <motion.span
                    className="absolute inset-0 w-0 bg-gradient-to-r from-blue-100 to-blue-50 transition-all duration-300"
                    style={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                  <span className="relative flex items-center">
                    Our Mission
                    <motion.span
                      className="ml-2 transition-transform duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.a>

                <motion.a
                  href="#our-team"
                  className="py-3.5 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-medium shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Meet Our Team <Users className="ml-2 w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute z-40 bottom-8 right-8 flex space-x-2 md:hidden">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeSlide === index ? "bg-white scale-125" : "bg-white/40"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls (visible on larger screens) */}
          <div className="absolute inset-y-0 left-4 z-30 flex items-center hidden md:flex">
            <button
              onClick={() =>
                goToSlide(
                  (activeSlide - 1 + heroImages.length) % heroImages.length
                )
              }
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 z-30 flex items-center hidden md:flex">
            <button
              onClick={() => goToSlide((activeSlide + 1) % heroImages.length)}
              className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Our Mission Section */}
      <section id="our-mission" className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're on a mission to make education more accessible, collaborative,
            and engaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-xl p-6 shadow-lg">
            <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Quality Learning Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We curate and create high-quality notes, cheat sheets, and study
              materials to help students excel in their academic pursuits.
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-xl p-6 shadow-lg">
            <Code className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Interactive Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              From coding exercises to interactive games, we offer tools to
              enhance your focus, typing skills, and technical abilities.
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-xl p-6 shadow-lg">
            <Sparkle className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Continuous Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We constantly evolve our platform to incorporate the latest
              educational technologies and trends to keep your learning
              experience fresh and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Learn, Collaborate, Succeed
        </h2>

        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
          <div className="col-span-12 md:col-span-8 row-span-3 relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Study session"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-medium">
                Interactive Learning Sessions
              </span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 row-span-6 relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Coding session"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-medium">
                Coding Workshops
              </span>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 row-span-3 relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Group study"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-medium">
                Peer Learning
              </span>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 row-span-3 relative rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Online learning"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <span className="text-white text-xl font-medium">
                Virtual Classrooms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're proud of what we've accomplished together with our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">5,000+</div>
              <p className="text-blue-100">Active Students</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">200+</div>
              <p className="text-blue-100">Study Resources</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-blue-100">Universities</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.8/5</div>
              <p className="text-blue-100">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Share Your Feedback
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Help us improve by sharing your experience with ColleGPT
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Textarea for feedback */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Feedback
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows="4"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                               border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                               text-gray-900 dark:text-white placeholder-gray-500
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                               transition-all"
                      placeholder="Share your thoughts about ColleGPT..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Rate Your Experience
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleStarClick(value)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            value <= rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {rating > 0
                        ? `${rating} out of 5 stars`
                        : "Select a rating"}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 
                           dark:bg-blue-500 dark:hover:bg-blue-600 text-white 
                           rounded-lg font-medium transition-all duration-200 
                           flex items-center justify-center focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                           focus:ring-offset-white dark:focus:ring-offset-[#111111] 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Feedback
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to enhance your learning journey?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already transforming their
            academic experience with ColleGPT.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="flex -space-x-2 mr-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i + 1}`}
                    alt={`User ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111111]"
                  />
                ))}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Joined by 1,000+ students this month</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
