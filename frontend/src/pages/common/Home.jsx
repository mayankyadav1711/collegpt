import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Book,
  Users,
  FileText,
  Code,
  FileCheck,
  BarChart2,
  Calendar,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Bookmark,
  Briefcase,
  MessageSquare,
  Monitor,
  Cpu,
  Award,
  Compass,
  GraduationCap,
  Sparkles,
  User,
  Clock,
  FileSearch,
  Zap,
  Send,
  Star,
  Heart,
  Coffee,
  PenTool,
  Download,
  BookOpen,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Laptop,
  Moon,
  Sun,
  Server,
  Database,
} from "lucide-react";

const Home = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // For smooth scrolling to sections
  const featuresRef = useRef(null);
  const calendarRef = useRef(null);
  const roadmapsRef = useRef(null);
  const notesRef = useRef(null);
  const communityRef = useRef(null);
  const tutorialsRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Hero section background images
  const heroImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1800&auto=format&fit=crop",
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "Computer Science, 3rd Year",
      image: "https://i.pravatar.cc/150?img=33",
      text: "ColleGPT has completely transformed how I study. The notes are comprehensive yet easy to understand, and the community is incredibly supportive. I've improved my grades significantly since using this platform!",
    },
    {
      name: "Priya Patel",
      role: "Electrical Engineering, 4th Year",
      image: "https://i.pravatar.cc/150?img=23",
      text: "As someone who was struggling with complex engineering concepts, the diagrams and simplified explanations on ColleGPT have been a lifesaver. The roadmaps helped me plan my learning journey effectively.",
    },
    {
      name: "Rahul Gupta",
      role: "Data Science, 2nd Year",
      image: "https://i.pravatar.cc/150?img=12",
      text: "The cheatsheets and quick reference guides are perfect for last-minute revision. They've helped me ace multiple exams! Plus, the community aspect makes learning feel less isolating.",
    },
    {
      name: "Maya Desai",
      role: "Mechanical Engineering, 4th Year",
      image: "https://i.pravatar.cc/150?img=5",
      text: "I love how ColleGPT makes complex topics digestible with visualization tools. The placement calendar feature helped me prepare for interviews effectively and land my dream job!",
    },
    {
      name: "Aryan Kapoor",
      role: "Computer Science, 2nd Year",
      image: "https://i.pravatar.cc/150?img=15",
      text: "The roadmaps provide clear direction for my learning journey. I used to feel overwhelmed, but now I know exactly what to focus on each week. Brilliant platform!",
    },
  ];

  // Upcoming placement calendar events
  const placementEvents = [
    {
      company: "Microsoft",
      date: "May 5, 2025",
      roles: ["Software Engineer", "Product Manager"],
      eligibility: "7+ CGPA, CSE/IT Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    },
    {
      company: "Google",
      date: "May 12, 2025",
      roles: ["Associate Software Engineer", "UX Designer"],
      eligibility: "8+ CGPA, All Engineering Branches",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
    },
    {
      company: "Amazon",
      date: "May 18, 2025",
      roles: ["SDE Intern", "Business Analyst"],
      eligibility: "7.5+ CGPA, CSE/IT/ECE Students",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    },
    {
      company: "Accenture",
      date: "May 25, 2025",
      roles: ["Associate Software Engineer", "Analyst"],
      eligibility: "6.5+ CGPA, All Engineering Branches",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png",
    },
  ];

  useEffect(() => {
    if (isScrolling) return;

    const interval = setInterval(() => {
      setActiveTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isScrolling, testimonials.length]);

  return (
    <div className="bg-white dark:bg-gray-950 overflow-x-hidden">
      {/* Hero Section with Masonry Grid Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Masonry Grid Background */}
        <div className="absolute inset-0 z-0 grid grid-cols-3 gap-4 p-4 opacity-20 dark:opacity-10">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden ${i % 3 === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={img}
                alt="College students"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-950/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className=" text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-900 dark:text-white bg-clip-text">
                Get Prepared
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Together</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your ultimate companion for academic excellence with comprehensive
              resources crafted by students, for students.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/register">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center group">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/explore">
                <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  Explore Features
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-500" />
                <span>15,000+ Students</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                <span>300+ Resources</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-500" />
                <span>98% Success Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section ref={featuresRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tools Designed for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Student Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We've built a complete suite of features to help you excel in your
              academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Calendar Section */}
      <section ref={calendarRef} className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Placement Calendar
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Never miss a recruitment opportunity again. Our interactive
                calendar helps you track upcoming campus placements, application
                deadlines, and interview schedules.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Personalized notifications
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Filter by branch and eligibility
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Company details and job descriptions
                  </span>
                </li>
              </ul>
              <Link to="/placements">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>View Full Calendar</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Upcoming Placements
                </h3>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  May 2025
                </div>
              </div>

              <div className="space-y-4">
                {placementEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg hover:border-blue-200 dark:hover:border-blue-700 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 flex items-center justify-center">
                        <img
                          src={event.logo}
                          alt={event.company}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {event.company}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <div className="pl-16 space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        {event.roles.map((role, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Eligibility: {event.eligibility}
                      </p>
                      <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                        <button className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                        page === 1
                          ? "bg-blue-600 dark:bg-blue-500 text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Roadmaps Section */}
      <section ref={roadmapsRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Abstract decorative pattern */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full"></div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-blue-500" />
                  Web Development Roadmap
                </h3>

                {/* Visual roadmap timeline */}
                <div className="space-y-6 relative">
                  {[
                    {
                      title: "HTML & CSS Fundamentals",
                      duration: "3 weeks",
                      status: "completed",
                      description: "Master the building blocks of the web",
                    },
                    {
                      title: "JavaScript Basics",
                      duration: "4 weeks",
                      status: "completed",
                      description: "Learn interactive programming",
                    },
                    {
                      title: "Frontend Frameworks",
                      duration: "6 weeks",
                      status: "current",
                      description: "React, Vue, or Angular",
                    },
                    {
                      title: "Backend Development",
                      duration: "6 weeks",
                      status: "upcoming",
                      description: "Server-side programming",
                    },
                    {
                      title: "Database Integration",
                      duration: "3 weeks",
                      status: "upcoming",
                      description: "Store and retrieve data",
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      {idx < 4 && (
                        <div
                          className={`absolute left-6 top-10 w-1 h-16 
                            ${
                              step.status === "completed"
                                ? "bg-blue-500"
                                : step.status === "current"
                                ? "bg-gradient-to-b from-blue-500 to-gray-200 dark:to-gray-700"
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                        ></div>
                      )}
                      <div className="flex items-start gap-6">
                        <div
                          className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center
                            ${
                              step.status === "completed"
                                ? "bg-blue-600 text-white"
                                : step.status === "current"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 ring-2 ring-blue-500"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                            }`}
                        >
                          {step.status === "completed" && (
                            <CheckCircle className="w-6 h-6" />
                          )}
                          {step.status === "current" && (
                            <Code className="w-6 h-6" />
                          )}
                          {step.status === "upcoming" && idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                              {step.title}
                            </h4>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {step.description}
                          </p>

                          {step.status === "current" && (
                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  Progress
                                </span>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                  65%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Learning Roadmaps
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Navigate your learning journey with expert-crafted roadmaps that
                guide you from fundamentals to mastery in any subject area.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Structured learning paths
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Track your progress seamlessly
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Roadmaps for every major and subject
                  </span>
                </li>
              </ul>
              <Link to="/roadmaps">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <Compass className="w-5 h-5 mr-2" />
                  <span>Explore All Roadmaps</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Notes Section */}
      <section ref={notesRef} className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Interactive Notes
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                More than just text. Our notes combine visuals, diagrams, and
                interactive elements to help you understand complex concepts
                with ease.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Visual explanations of complex topics
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Practice problems with step-by-step solutions
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Downloadable cheatsheets and quick references
                  </span>
                </li>
              </ul>
              <Link to="/notes">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>Browse Notes Collection</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main note card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <Book className="w-5 h-5 mr-2 text-blue-500" />
                    Computer Networks
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    OSI Model Layers
                  </h4>

                  {/* Interactive OSI layers visualization */}
                  <div className="space-y-2 mb-4">
                    {[
                      { name: "Application", color: "bg-indigo-500" },
                      { name: "Presentation", color: "bg-indigo-400" },
                      { name: "Session", color: "bg-blue-500" },
                      { name: "Transport", color: "bg-blue-400" },
                      { name: "Network", color: "bg-cyan-500" },
                      { name: "Data Link", color: "bg-cyan-400" },
                      { name: "Physical", color: "bg-green-500" },
                    ].map((layer, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-6 ${layer.color} rounded`}
                          ></div>
                          <div className="flex-1 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {layer.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sample note content */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/40">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      The OSI model defines a networking framework to implement
                      protocols in layers. Control is passed from one layer to
                      the next, starting at the application layer and working
                      down to the physical layer.
                    </p>
                  </div>
                </div>

                {/* Interactive elements */}
                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Updated 2 days ago
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 dark:bg-blue-900/20 rounded-full z-[-1]"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section ref={communityRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-blue-500" />
                    Community Discussions
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-xs px-2 py-1 rounded-full text-green-700 dark:text-green-400">
                    18 Online
                  </span>
                </div>

                {/* Discussion threads */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            Ankit Verma
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            12 minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-medium">Pinned</span>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      How to approach system design questions?
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      I have an upcoming interview and I'm struggling with
                      system design questions. Any tips or resources?
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <MessageSquare className="w-3.5 h-3.5 mr-1" /> 8
                          replies
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-3.5 h-3.5 mr-1" /> 12 likes
                        </span>
                      </div>
                      <button className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        Join Discussion
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            Priya Mehta
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            3 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      Study group for Machine Learning
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Looking for peers interested in forming a study group for
                      the upcoming ML course...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <MessageSquare className="w-3.5 h-3.5 mr-1" /> 15
                          replies
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-3.5 h-3.5 mr-1" /> 24 likes
                        </span>
                      </div>
                      <button className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                </div>

                <Link to="/community">
                  <button className="w-full py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                    View All Discussions
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Supportive Community
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Connect with peers, share knowledge, and get help when you need
                it. Our community brings together students from across
                disciplines to learn and grow together.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Ask questions and get quick answers
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Form study groups with like-minded peers
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Share resources and experiences
                  </span>
                </li>
              </ul>
              <Link to="/community">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Join Our Community</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section ref={tutorialsRef} className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Video Tutorials
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Watch expert-led video content that simplifies complex topics
                through visual explanations and step-by-step demonstrations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Concise, focused explanations
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Downloadable for offline viewing
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Comprehensive subject coverage
                  </span>
                </li>
              </ul>
              <Link to="/tutorials">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  <span>Watch Tutorials</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Video player card */}
              <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  {/* Video thumbnail */}
                  <img
                    src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1800&auto=format&fit=crop"
                    alt="Data Structures tutorial"
                    className="w-full h-full object-cover"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Data Structures Simplified
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Master the fundamentals of data structures with visual
                    examples
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-xs text-gray-300">
                        Prof. Sharma
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      <span>45 minutes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video playlist */}
              <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Up Next
                </h4>
                <div className="space-y-2">
                  {[
                    "Arrays and Linked Lists",
                    "Stacks and Queues",
                    "Trees and Graphs",
                  ].map((title, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          {idx + 1}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          15 minutes
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-24 bg-gray-900 dark:bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-grid-pattern"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/40 text-blue-400 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Hear what our community has to say about their learning journey
              with us.
            </p>
          </motion.div>

          {/* Horizontal Carousel Testimonials */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex items-stretch gap-6"
                initial={{ x: 0 }}
                animate={{ x: `-${activeTestimonialIndex * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ width: `${testimonials.length * 100}%` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full border border-white/10 hover:border-blue-500/30 transition-colors">
                      <div className="flex gap-4 items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                        />
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 inline-block text-yellow-400 mr-0.5"
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-300 italic mb-4">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeTestimonialIndex === 0
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => {
                  if (activeTestimonialIndex > 0) {
                    setActiveTestimonialIndex(activeTestimonialIndex - 1);
                    setIsScrolling(true);
                    setTimeout(() => setIsScrolling(false), 5000);
                  }
                }}
                disabled={activeTestimonialIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeTestimonialIndex >= testimonials.length - 3
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => {
                  if (activeTestimonialIndex < testimonials.length - 3) {
                    setActiveTestimonialIndex(activeTestimonialIndex + 1);
                    setIsScrolling(true);
                    setTimeout(() => setIsScrolling(false), 5000);
                  }
                }}
                disabled={activeTestimonialIndex >= testimonials.length - 3}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full ${
                    idx === Math.floor(activeTestimonialIndex / 3)
                      ? "bg-blue-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => {
                    setActiveTestimonialIndex(idx * 3);
                    setIsScrolling(true);
                    setTimeout(() => setIsScrolling(false), 5000);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cheatsheets Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Tabs for different cheatsheets */}
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  {[
                    "Algorithms",
                    "Data Structures",
                    "Design Patterns",
                    "SQL",
                  ].map((tab, idx) => (
                    <button
                      key={idx}
                      className={`flex-1 py-3 px-4 text-center text-sm font-medium ${
                        idx === 0
                          ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Cheatsheet Content - Algorithms */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Sorting Algorithms Cheatsheet
                  </h3>

                  <div className="mb-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-900 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                            <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                              Algorithm
                            </th>
                            <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                              Time Complexity
                            </th>
                            <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                              Space Complexity
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="text-sm">
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">
                              Quick Sort
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(n log n)
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(log n)
                            </td>
                          </tr>
                          <tr className="text-sm bg-gray-50 dark:bg-gray-900/50">
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">
                              Merge Sort
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(n log n)
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(n)
                            </td>
                          </tr>
                          <tr className="text-sm">
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">
                              Heap Sort
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(n log n)
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(1)
                            </td>
                          </tr>
                          <tr className="text-sm bg-gray-50 dark:bg-gray-900/50">
                            <td className="px-4 py-3 text-gray-900 dark:text-white font-medium">
                              Bubble Sort
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(n²)
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              O(1)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Page 1 of 4
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                        Download PDF
                      </button>
                      <button className="flex items-center gap-1 p-2 rounded text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                        Next Page
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-blue-600 dark:text-blue-400">
                  Quick Reference Guides
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Condense complex topics into easy-to-digest cheatsheets perfect
                for revision and reference during exams or interviews.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Printable PDF formats
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Key concepts at a glance
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Covers all major subjects and topics
                  </span>
                </li>
              </ul>
              <Link to="/cheatsheets">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Browse Cheatsheets</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
