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
  Coffee,
  Brain,
  CheckCircle2,
  FileText,
  Layers,
  Github,
  User,
  Globe as Global,
  Youtube,
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
  const [activeValue, setActiveValue] = useState(null);
  const sectionRef = useRef(null);

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

  // Core values with personal touch
  const coreValues = [
    {
      title: "Innovation",
      description:
        "When I started ColleGPT, I knew education needed fresh ideas. We don't just use technology — we reimagine what's possible with it.",
      icon: Lightbulb,
      color: "blue",
      personalNote:
        "During my college days, I found myself creating makeshift study tools because nothing available really clicked with how I learned. That's what drives our innovation now — solving real problems students face daily.",
      stat: "40+ innovative features launched in our first year",
    },
    {
      title: "Collaboration",
      description:
        "Learning in isolation is tough — I've been there. We've built ColleGPT to bring students together, because brilliant ideas happen when minds connect.",
      icon: Users,
      color: "indigo",
      personalNote:
        "Some of my biggest breakthroughs in college came from late-night study sessions with friends. That collaborative energy is something we've worked hard to capture digitally.",
      stat: "30,000+ collaborative study sessions monthly",
    },
    {
      title: "Accessibility",
      description:
        "Knowledge shouldn't be a privilege. I wanted ColleGPT to be a place where quality resources reach everyone, regardless of where they're starting from.",
      icon: GraduationCap,
      color: "purple",
      personalNote:
        "Growing up, I saw how unequal access to resources created unfair advantages. Breaking down these barriers isn't just a business goal — it's a personal mission.",
      stat: "Resources available in 8 languages and growing",
    },
    {
      title: "Student-First",
      description:
        "Every feature we build starts with asking: 'How does this help students?' If it doesn't make your life better, we won't build it. Simple as that.",
      icon: Heart,
      color: "rose",
      personalNote:
        "We've turned down partnerships worth millions because they would've compromised our commitment to putting students first. It's not always the easy choice, but it's always the right one.",
      stat: "94% of features developed from student requests",
    },
  ];

  const milestones = [
    {
      date: "May 2023",
      title: "Handwritten Beginnings",
      description:
        "Started sharing handwritten notes in WhatsApp groups. Our first community of 15-20 students began to form.",
      icon: FileText,
      color: "emerald",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
      stats: "20+ students",
      tag: "Genesis",
    },
    {
      date: "August 2023",
      title: "Beta Launch",
      description:
        "Released our beta website with custom UI, authentication, profiles, roadmaps, and cheatsheets. Our 5th semester notes went live. Learned web development, hosting, and collaboration tools.",
      icon: Code,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
      stats: "10,000+ lines of code",
      achievement: "First domain purchase",
      tag: "Milestone",
    },
    {
      date: "December 2023 - 2024",
      title: "Feature Expansion",
      description:
        "Added more features, resolved issues, and prepared content for 6th, 7th, and 8th semesters. Produced YouTube lecture videos and conducted pre-exam meets to help students.",
      icon: Layers,
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
      stats: "3 semesters of content",
      tag: "Growth",
    },
    {
      date: "2025 - Present",
      title: "Open Source Evolution",
      description:
        "Expanding to GATE preparation, placement resources, and hackathons. ColleGPT is now open source, inviting everyone to contribute. By the community, for the community.",
      icon: Github,
      color: "amber",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=350&q=80",
      stats: "Open to all contributors",
      tag: "Future",
    },
  ];

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

      <section
        ref={sectionRef}
        className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Personal header from founders */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                <Sparkles className="mr-1.5 w-4 h-4" />
                Our Story & Vision
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Why{" "}
                <span className="text-blue-600 dark:text-blue-400 italic">
                  we
                </span>{" "}
                built ColleGPT
              </h2>

              {/* Mayank's Story */}
              <div className="prose prose-lg dark:prose-invert mb-12 text-gray-600 dark:text-gray-300">
                <p>
                  Back in my third year of engineering, I was drowning in
                  lecture notes and textbooks, yet somehow still missing key
                  concepts. My friends and I would spend hours hunting for clear
                  explanations, sharing PDFs, and teaching each other.
                </p>
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    That's when it hit me — why isn't there a place that brings
                    all this together?
                  </span>{" "}
                  Not just content, but connection. Not just information, but
                  understanding.
                </p>

                {/* Mayank's signature */}
                <div className="flex items-center mt-6 not-prose">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white shadow-md">
                    <img
                      src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg"
                      alt="Mayank Yadav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      Mayank Yadav
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Founder & Lead Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Divya's Story */}
              <div className="prose prose-lg dark:prose-invert mb-12 text-gray-600 dark:text-gray-300">
                <p>
                  As a student passionate about algorithms and database design,
                  I always felt that traditional learning platforms missed a
                  crucial element:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    structured knowledge that builds connections between
                    concepts
                  </span>
                  . We'd memorize isolated facts without understanding how they
                  fit together.
                </p>
                <p>
                  When Mayank approached me with the idea of ColleGPT, I
                  immediately saw how we could create something that helps
                  students build mental models, not just memorize facts. I've
                  focused on developing our database architecture and backend
                  systems to ensure that knowledge is organized in ways that
                  reflect how our brains actually learn.
                </p>

                {/* Divya's signature */}
                <div className="flex items-center mt-6 not-prose">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white shadow-md">
                    <img
                      src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg"
                      alt="Divya Kaurani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      Divya Kaurani
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Co-Founder & Backend Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Darshit's Story */}
              <div className="prose prose-lg dark:prose-invert mb-8 text-gray-600 dark:text-gray-300">
                <p>
                  Before joining the ColleGPT team, I was frustrated by how most
                  educational platforms seemed to prioritize content over
                  experience.{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Learning shouldn't feel like a chore
                  </span>{" "}
                  — the interface and interactions are just as important as the
                  material itself.
                </p>
                <p>
                  With my background in UI/UX, I've worked to create an
                  environment where students actually enjoy spending time. Every
                  animation, color choice, and interaction is designed to reduce
                  cognitive load and let you focus on what matters:
                  understanding the concepts and connecting with others. When
                  learning feels good, you do more of it.
                </p>

                {/* Darshit's signature */}
                <div className="flex items-center mt-6 not-prose">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white shadow-md">
                    <img
                      src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg"
                      alt="Darshit Sojitra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      Darshit Sojitra
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Co-Founder & UI/UX Designer
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="/about/team"
                className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 group w-fit mt-8"
                whileHover={{ y: -2, x: 0 }}
                whileTap={{ y: 0 }}
              >
                Learn more about our team
                <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Visual Timeline - Enhanced Version */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="relative max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                  Our{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Journey
                  </span>{" "}
                  So Far
                </h3>

                {/* Modern visual timeline */}
                <div className="relative">
                  {/* Center line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-amber-500 rounded-full"></div>

                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={`flex flex-col md:flex-row items-center mb-16 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } relative`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {/* Timeline center marker */}
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-${milestone.color}-500 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: [0.8, 1.2, 1] }}
                          transition={{ duration: 1, times: [0, 0.5, 1] }}
                          viewport={{ once: true }}
                        >
                          <milestone.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Date tag - styled differently based on position */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 -top-9 md:top-auto md:-translate-x-0 md:left-auto ${
                          index % 2 === 0
                            ? "md:right-1/2 md:mr-20"
                            : "md:left-1/2 md:ml-20"
                        }`}
                      >
                        <div
                          className={`px-4 py-1.5 rounded-full bg-${milestone.color}-100 dark:bg-${milestone.color}-900/30 text-${milestone.color}-600 dark:text-${milestone.color}-400 font-medium text-sm shadow-sm`}
                        >
                          {milestone.date}
                        </div>
                      </div>

                      {/* First column - card */}
                      <div
                        className={`w-full md:w-5/12 mb-8 md:mb-0 ${
                          index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                        }`}
                      >
                        <motion.div
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Tag at the top */}
                          <div className="relative">
                            <div className="h-40 overflow-hidden">
                              <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Tag */}
                            <div className="absolute top-4 left-4">
                              <div
                                className={`px-3 py-1 rounded-full bg-${milestone.color}-500 text-white text-xs font-medium shadow-lg`}
                              >
                                {milestone.tag}
                              </div>
                            </div>

                            {/* Title overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <h4 className="text-xl font-bold text-white">
                                {milestone.title}
                              </h4>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                              {milestone.description}
                            </p>

                            {/* Stats and achievements */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              <div
                                className={`px-3 py-1 bg-${milestone.color}-100 dark:bg-${milestone.color}-900/20 text-${milestone.color}-600 dark:text-${milestone.color}-400 text-xs rounded-full`}
                              >
                                {milestone.stats}
                              </div>

                              {milestone.achievement && (
                                <div
                                  className={`px-3 py-1 bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs rounded-full`}
                                >
                                  <Award className="inline-block w-3 h-3 mr-1" />
                                  {milestone.achievement}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Middle spacer - visible only on larger screens */}
                      <div className="hidden md:block md:w-2/12"></div>

                      {/* Content column - for alternate text and visual elements */}
                      <div className="w-full md:w-5/12 flex items-center">
                        {index % 2 === 0 ? (
                          // Right side content (for even indexed items)
                          <motion.div
                            className="space-y-3 w-full"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            {index === 0 && (
                              <div className="flex items-center mb-2 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                                <Users className="w-8 h-8 text-emerald-500 mr-3 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white">
                                    Our First Community
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Started with just a WhatsApp group
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 1 && (
                              <div className="flex flex-col gap-3">
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                  <div className="font-medium text-gray-900 dark:text-white mb-1">
                                    10,000+ lines of code
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Built our first website with external CSS
                                  </div>
                                </div>
                                <div className="text-sm italic text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-blue-300 dark:border-blue-700">
                                  "We were learning web development as we went,
                                  struggling with Git and celebrating our first
                                  successful deployment."
                                </div>
                              </div>
                            )}

                            {index === 2 && (
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <Youtube className="w-6 h-6 text-red-500 mr-3" />
                                  <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Started producing lecture videos
                                  </div>
                                </div>
                                <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
                                  <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Created content for three full semesters
                                  </div>
                                </div>
                                <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                  <Users className="w-6 h-6 text-purple-500 mr-3" />
                                  <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Conducted pre-exam preparation meets
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 3 && (
                              <div className="space-y-3">
                                <div className="flex items-start p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                  <Github className="w-8 h-8 text-gray-900 dark:text-white mr-3 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900 dark:text-white">
                                      Open Source
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                      "By the community, for the community" —
                                      now anyone can contribute to improving
                                      education
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                                  <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center">
                                    <GraduationCap className="w-5 h-5 text-green-500 mr-2" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      GATE prep
                                    </span>
                                  </div>
                                  <div className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center">
                                    <Rocket className="w-5 h-5 text-blue-500 mr-2" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      Placements
                                    </span>
                                  </div>
                                  <div className="px-3 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center">
                                    <Code className="w-5 h-5 text-purple-500 mr-2" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      Hackathons
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          // Left side content (for odd indexed items)
                          <motion.div
                            className="space-y-3 w-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                          >
                            {index === 1 && (
                              <div className="flex flex-col gap-4">
                                <div className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                  Features we built:
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <Users className="w-5 h-5 text-blue-500 mr-2" />
                                    <div className="text-sm text-gray-700 dark:text-gray-300">
                                      Authentication
                                    </div>
                                  </div>
                                  <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <User className="w-5 h-5 text-blue-500 mr-2" />
                                    <div className="text-sm text-gray-700 dark:text-gray-300">
                                      User Profiles
                                    </div>
                                  </div>
                                  <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <Rocket className="w-5 h-5 text-blue-500 mr-2" />
                                    <div className="text-sm text-gray-700 dark:text-gray-300">
                                      Roadmaps
                                    </div>
                                  </div>
                                  <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <FileText className="w-5 h-5 text-blue-500 mr-2" />
                                    <div className="text-sm text-gray-700 dark:text-gray-300">
                                      Cheatsheets
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {index === 3 && (
                              <div className="flex flex-col gap-4">
                                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/20">
                                  <h5 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                                    <Global className="w-5 h-5 mr-2 text-amber-500" />
                                    Vision for the Future
                                  </h5>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    From helping a small WhatsApp group to
                                    becoming an open platform that serves
                                    students across the country — we're just
                                    getting started.
                                  </p>
                                </div>

                                <div className="text-sm italic text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                                  "We believe education should be collaborative,
                                  accessible, and actually enjoyable. That's why
                                  we're opening ColleGPT to contributors from
                                  everywhere."
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final connector */}
                <motion.div
                  className="flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg font-bold">
                    Now
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Core values interactive section */}
          <div ref={valuesRef} className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Four principles guiding{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  everything
                </span>{" "}
                we do
              </h3>
            </motion.div>

            {/* Interactive values cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  onClick={() =>
                    setActiveValue(activeValue === index ? null : index)
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl cursor-pointer transform transition-all duration-300 ${
                    activeValue === index
                      ? `bg-${value.color}-50 dark:bg-${value.color}-900/20 border-${value.color}-200 dark:border-${value.color}-800/20 shadow-xl scale-105`
                      : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-lg"
                  } border p-6 relative overflow-hidden group`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-${value.color}-500 opacity-70`}
                  ></div>

                  {/* Content */}
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${value.color}-100 dark:bg-${value.color}-900/30 text-${value.color}-600 dark:text-${value.color}-400 flex items-center justify-center mb-4`}
                    >
                      <value.icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {activeValue === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                          <div
                            className={`p-4 bg-${value.color}-50/50 dark:bg-${value.color}-900/10 rounded-lg mb-4`}
                          >
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                              "{value.personalNote}"
                            </p>
                          </div>

                          <div
                            className={`inline-flex items-center px-3 py-1.5 rounded-full bg-${value.color}-100/70 dark:bg-${value.color}-900/30 text-${value.color}-700 dark:text-${value.color}-300 text-xs font-medium`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                            {value.stat}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click to expand indicator */}
                  <div
                    className={`mt-4 text-xs text-${
                      value.color
                    }-600 dark:text-${
                      value.color
                    }-400 flex items-center gap-1 ${
                      activeValue === index
                        ? "opacity-0"
                        : "opacity-70 group-hover:opacity-100"
                    } transition-opacity`}
                  >
                    {activeValue === index
                      ? "Click to collapse"
                      : "Click to learn more"}
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
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
