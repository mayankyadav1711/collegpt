import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { fetchWithAuth, BASE_URL } from "../../api/api";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import toast from "react-hot-toast";
import {
  Send,
  Users,
  BookOpen,
  Code,
  Star,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  MousePointer,
  Rocket,
  ChevronRight,
  Globe,
  Lightbulb,
  ArrowUpRight,
  Sparkles,
  Award,
  PenTool,
  Cpu,
  GraduationCap,
  Zap,
  RefreshCw,
  Clock,
  Heart,
  ChevronLeft,
} from "lucide-react";
import TeamSection from "../../components/custom/TeamSection";

const About = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();

  // Refs for sections (for scroll animations)
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const missionRef = useRef(null);
  const feedbackRef = useRef(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll();

  // Feedback form state
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
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
      <div id="our-team">
        <TeamSection />
      </div>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-24 relative bg-white dark:bg-gray-900"
      >
        {/* Moving light effect */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.05), transparent 40%)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="text-blue-600 dark:text-blue-400">Impact</span>{" "}
              in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Since our founding, we've been committed to making education more
              accessible, engaging, and effective for students everywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15K+", label: "Students", icon: Users, delay: 0 },
              {
                value: "200+",
                label: "Learning Resources",
                icon: BookOpen,
                delay: 0.1,
              },
              { value: "50+", label: "Universities", icon: Globe, delay: 0.2 },
              {
                value: "4.9/5",
                label: "Student Satisfaction",
                icon: Star,
                delay: 0.3,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/10 border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden"
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
                  <Award className="w-6 h-6 text-yellow-300 mr-2" />
                  <h3 className="text-xl font-bold">Student Success Stories</h3>
                </div>
                <p className="text-blue-100 max-w-2xl">
                  Our platform has empowered thousands of students to achieve
                  their academic goals, secure placements at top companies, and
                  build innovative projects that solve real-world problems.
                </p>
              </div>

              <a
                href="/success-stories"
                className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg flex items-center shadow-xl shadow-blue-700/20 transition-all whitespace-nowrap"
              >
                Read Stories
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        ref={valuesRef}
        className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-10 z-0"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34h4v1h-4v-1zm0-8h4v1h-4v-1zm0 4h4v1h-4v-1zm-20 4h4v1h-4v-1zm0-8h4v1h-4v-1zm0 4h4v1h-4v-1z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center py-1.5 px-4 mb-4 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              <Heart className="mr-1.5 w-4 h-4" />
              Our Core Values
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Guiding Principles That{" "}
              <span className="text-blue-600 dark:text-blue-400">Drive Us</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              At ColleGPT, our values shape everything we do, from the features
              we develop to the community we foster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We're constantly exploring new ways to make learning more effective and engaging through technology.",
                icon: Lightbulb,
                color: "from-blue-500 to-indigo-500",
                delay: 0,
              },
              {
                title: "Collaboration",
                description:
                  "We believe education thrives when students can learn together, share knowledge, and support each other.",
                icon: Users,
                color: "from-indigo-500 to-purple-500",
                delay: 0.1,
              },
              {
                title: "Accessibility",
                description:
                  "We're committed to making quality educational resources available to all students, regardless of background.",
                icon: GraduationCap,
                color: "from-purple-500 to-pink-500",
                delay: 0.2,
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest quality in our resources, platform, and community interactions.",
                icon: Award,
                color: "from-amber-500 to-orange-500",
                delay: 0.3,
              },
              {
                title: "Adaptability",
                description:
                  "We evolve with educational trends and technology to keep our platform relevant and effective.",
                icon: RefreshCw,
                color: "from-emerald-500 to-green-500",
                delay: 0.4,
              },
              {
                title: "Student-centered",
                description:
                  "We put students' needs first, designing every feature with their success and experience in mind.",
                icon: Heart,
                color: "from-red-500 to-pink-500",
                delay: 0.5,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: value.delay }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/10 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <div className="p-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                  >
                    <value.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        id="mission"
        ref={missionRef}
        className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center py-1.5 px-4 mb-4 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                <Rocket className="mr-1.5 w-4 h-4" />
                Our Purpose
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Mission
                </span>{" "}
                & Vision
              </h2>

              <div className="prose prose-lg dark:prose-invert text-black dark:text-white">
                <p>
                  ColleGPT was born out of a passion to transform how students
                  learn and grow together. Our mission is to create a vibrant
                  educational ecosystem where technology enhances learning, not
                  replaces it.
                </p>

                <p className="font-medium">We envision a world where:</p>

                <ul>
                  <li>
                    Every student has access to quality learning resources
                  </li>
                  <li>
                    Collaborative learning breaks down isolated study patterns
                  </li>
                  <li>Technology adapts to diverse learning styles</li>
                  <li>Education becomes more engaging and less intimidating</li>
                </ul>

                <p>
                  By combining cutting-edge technology with thoughtfully
                  designed resources and community features, we're creating a
                  platform that doesn't just help students pass exams, but truly
                  master subjects and develop lifelong learning skills.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/about/story"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read our founding story
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right - Feature Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Quality Learning Resources",
                    description:
                      "Expertly curated study materials designed to simplify complex concepts",
                    icon: BookOpen,
                    color:
                      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                    delay: 0,
                  },
                  {
                    title: "Interactive Learning",
                    description:
                      "Gamified experiences that make studying engaging and effective",
                    icon: Zap,
                    color:
                      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                    delay: 0.1,
                  },
                  {
                    title: "Community Support",
                    description:
                      "Connect with peers and mentors who can help you overcome challenges",
                    icon: Users,
                    color:
                      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                    delay: 0.2,
                  },
                  {
                    title: "Cutting-Edge Tools",
                    description:
                      "Modern technologies that adapt to your learning style and pace",
                    icon: Cpu,
                    color:
                      "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
                    delay: 0.3,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: feature.delay }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/10 border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/20"
              >
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                      "ColleGPT has transformed how I study. The resources are
                      concise yet comprehensive, and the community is incredibly
                      supportive."
                    </p>
                    <div className="font-medium text-gray-900 dark:text-white">
                      Aryan Patel, B.Tech Student
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        id="feedback"
        ref={feedbackRef}
        className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 dark:opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-70 dark:opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center py-1.5 px-4 mb-4 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              <MessageSquare className="mr-1.5 w-4 h-4" />
              Your Thoughts Matter
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Share Your{" "}
              <span className="text-blue-600 dark:text-blue-400">Feedback</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Help us improve by sharing your experience with ColleGPT. Your
              insights drive our innovation.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
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
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-700 
                                 border border-gray-300 dark:border-gray-600 rounded-lg 
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
                          className="focus:outline-none transition-transform hover:scale-110"
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
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600
                             hover:from-blue-700 hover:to-indigo-700 text-white 
                             rounded-lg font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30
                             transition-all duration-200 
                             flex items-center justify-center focus:outline-none 
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
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mb-12 bg-white dark:bg-gray-900 relative rounded-b-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/20"
          >
            <div className="relative px-8 py-16 md:p-16">
              {/* Background pattern */}
              <div className="absolute inset-0 overflow-hidden">
                <svg
                  className="absolute right-0 top-0 h-full opacity-20 transform translate-x-1/3 -translate-y-1/4"
                  width="400"
                  height="400"
                  fill="none"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M400 0H0V400H400V0Z" fill="none" />
                    <path
                      d="M209 89C154.5 52 81.5 33 37 132C-7.5 231 -35 271 -35 328.5C-35 386 22 405.5 54 424C86 442.5 116 483.5 209 424C302 364.5 327 328.5 345 302C363 275.5 346.5 221.5 327 185C307.5 148.5 263.5 126 209 89Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="400" height="400" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to enhance your learning journey?
                  </h2>
                  <p className="text-blue-100 text-lg mb-8 md:max-w-xl">
                    Join thousands of students who are already transforming
                    their academic experience with ColleGPT.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <motion.a
                      href="/register"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg shadow-lg shadow-blue-700/20 transition-all flex items-center"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Join Our Community
                    </motion.a>

                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-blue-700/30 hover:bg-blue-700/40 text-white font-medium rounded-lg transition-all flex items-center backdrop-blur-sm"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Contact Us
                    </motion.a>
                  </div>
                </div>

                {/* Testimonial preview */}
                <div className="hidden md:block max-w-xs">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-300 fill-yellow-300"
                        />
                      ))}
                    </div>
                    <p className="italic text-white/90 mb-4 text-sm">
                      "ColleGPT has been a game-changer for my studies. The
                      resources and community support helped me ace my exams
                      with confidence!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://i.pravatar.cc/100"
                          alt="Student"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          Priya Sharma
                        </div>
                        <div className="text-xs text-white/70">
                          Computer Science Student
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-12 pt-8 border-t border-white/10 relative flex items-center justify-center md:justify-start">
                <div className="flex -space-x-2 mr-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-600"
                      >
                        <img
                          src={`https://i.pravatar.cc/32?img=${i + 10}`}
                          alt={`User ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-300 mr-2" />
                  <span>Joined by 1,000+ students this month</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
