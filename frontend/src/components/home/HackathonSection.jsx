import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  Trophy,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Users,
  FileText,
  PresentationIcon,
  Award,
  Layers,
  Zap,
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
  BarChart3,
  Laptop,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Github
} from "lucide-react";

const HackathonSection = forwardRef((props, ref) => {
  // State for tracking active elements and mouse position
  const [activeHackathon, setActiveHackathon] = useState(0);
  const [activeTab, setActiveTab] = useState("events");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

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

  // Intersection observer for animations
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

  // Auto-rotate hackathon carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHackathon((prev) => (prev + 1) % hackathonEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to scroll carousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 330; // Adjust based on your card width + gap
      const newPosition =
        carouselRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  // Section tabs
  const contentTabs = [
    { id: "events", name: "Hackathons", icon: Trophy },
    { id: "guides", name: "Guides & Resources", icon: FileText },
    { id: "winners", name: "Winning Projects", icon: Award },
  ];

  // Hackathon events data
  const hackathonEvents = [
    {
      name: "Smart India Hackathon (SIH)",
      description:
        "India's largest hackathon where students work on problems given by government and industry. Offers opportunities to translate vision to reality.",
      organization: "Government of India",
      date: "October 2025",
      prize: "₹1 Lakh - ₹5 Lakh",
      deadline: "July 15, 2025",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      type: "government",
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "SSIP Hackathon",
      description:
        "Student Startup & Innovation Policy hackathon focused on creating innovative solutions to pressing problems with potential for commercialization.",
      organization: "Education Department, Govt. of Gujarat",
      date: "August 2025",
      prize: "₹50,000 - ₹2 Lakh",
      deadline: "June 30, 2025",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      type: "government",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Kavach Cybersecurity Hackathon",
      description:
        "Focused on discovering innovative cybersecurity solutions to protect digital India's infrastructure and address emerging threats.",
      organization: "Ministry of Education",
      date: "September 2025",
      prize: "₹1 Lakh - ₹3 Lakh",
      deadline: "July 25, 2025",
      image:
        "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=2069&auto=format&fit=crop",
      link: "#",
      type: "government",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Pentathon Challenge",
      description:
        "India's premier cybersecurity hackathon with five different challenges across network security, web application security, and cryptography.",
      organization: "Ministry of Electronics & IT",
      date: "November 2025",
      prize: "₹2 Lakh",
      deadline: "September 10, 2025",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop",
      link: "#",
      type: "government",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Microsoft Imagine Cup",
      description:
        "Global competition that empowers student developers to create innovative solutions that tackle some of the world's biggest social challenges.",
      organization: "Microsoft",
      date: "March 2025",
      prize: "$100,000",
      deadline: "December 15, 2024",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      type: "private",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "TCS CodeVita",
      description:
        "One of the largest coding contests, designed to help students showcase their coding skills and win recognition and rewards.",
      organization: "Tata Consultancy Services",
      date: "February 2025",
      prize: "$10,000",
      deadline: "January 10, 2025",
      image:
        "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      type: "private",
      color: "from-rose-500 to-pink-500",
    },
  ];

  // Winning projects data
  const winningProjects = [
    {
      name: "MediScan",
      hackathon: "Smart India Hackathon 2024",
      team: "Tech Innovators",
      description:
        "AI-powered medical diagnosis tool that scans X-rays and identifies anomalies with 98% accuracy, making healthcare accessible in remote areas.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      prize: "₹5 Lakh",
      technologies: ["TensorFlow", "React Native", "Flask"],
    },
    {
      name: "EcoTrack",
      hackathon: "SSIP Hackathon 2024",
      team: "Green Coders",
      description:
        "Environmental monitoring system using IoT sensors to track air quality, water pollution, and provide real-time analytics for mitigation strategies.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      prize: "₹2 Lakh",
      technologies: ["Arduino", "React.js", "Node.js", "IoT"],
    },
    {
      name: "CyberShield",
      hackathon: "Kavach 2024",
      team: "Secure Devs",
      description:
        "Next-generation cybersecurity solution that uses behavior analysis and ML to detect and prevent zero-day attacks on critical infrastructure.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      prize: "₹3 Lakh",
      technologies: ["Python", "TensorFlow", "Elasticsearch"],
    },
  ];

  // Hackathon guides and resources
  const hackathonGuides = [
    {
      title: "Presentation Mastery",
      description:
        "Learn how to create compelling presentations that showcase your project's value proposition and technical excellence.",
      icon: PresentationIcon,
      color: "from-amber-500 to-orange-500",
      resources: [
        "Effective Slide Design Templates",
        "Presentation Structure Guide",
        "Demo Day Checklist",
      ],
    },
    {
      title: "Pitch Perfect",
      description:
        "Master the art of pitching your solution to judges, investors, and potential users within tight time constraints.",
      icon: Lightbulb,
      color: "from-purple-500 to-violet-500",
      resources: [
        "Elevator Pitch Formula",
        "Handling Judges' Questions",
        "Value Proposition Canvas",
      ],
    },
    {
      title: "Team Collaboration",
      description:
        "Strategies for effective team collaboration, task distribution, and agile development during intense hackathon timeframes.",
      icon: Users,
      color: "from-blue-500 to-cyan-400",
      resources: [
        "Role Assignment Template",
        "Sprint Planning Guide",
        "Collaboration Tools Setup",
      ],
    },
    {
      title: "Technical Implementation",
      description:
        "Best practices for rapid prototyping, MVP development, and implementing technical solutions under time pressure.",
      icon: Laptop,
      color: "from-emerald-500 to-teal-400",
      resources: [
        "Code Repository Templates",
        "API Integration Shortcuts",
        "Deployment Checklists",
      ],
    },
  ];

  // Stats about hackathons
  const hackathonStats = [
    { value: "90+", label: "Hackathons", icon: Trophy },
    { value: "₹50L+", label: "Prize Money", icon: Award },
    { value: "75+", label: "Winning Teams", icon: Users },
    { value: "500+", label: "Projects Built", icon: Laptop },
  ];

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

  // Render current tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main featured hackathon */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={hackathonEvents[activeHackathon].image}
                      alt={hackathonEvents[activeHackathon].name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      key={hackathonEvents[activeHackathon].name} // Force re-render on change
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  </div>

                  <div className="relative p-6 md:p-8 text-white h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-${
                            hackathonEvents[activeHackathon].type ===
                            "government"
                              ? "amber"
                              : "blue"
                          }-500/20 text-${
                            hackathonEvents[activeHackathon].type ===
                            "government"
                              ? "amber"
                              : "blue"
                          }-400 border border-${
                            hackathonEvents[activeHackathon].type ===
                            "government"
                              ? "amber"
                              : "blue"
                          }-500/30`}
                        >
                          {hackathonEvents[activeHackathon].type ===
                          "government"
                            ? "Government"
                            : "Private"}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {hackathonEvents[activeHackathon].name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-200 mb-4 max-w-md">
                        {hackathonEvents[activeHackathon].description}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={hackathonEvents[activeHackathon].link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium rounded-lg flex items-center transition-all"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>

                      <button className="px-4 py-2 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:shadow-lg text-white text-sm font-medium rounded-lg flex items-center transition-all">
                        Register
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-6">
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {hackathonEvents[activeHackathon].date}
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        Virtual & Onsite
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          Organized by
                        </div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          {hackathonEvents[activeHackathon].organization}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          Prize Pool
                        </div>
                        <div className="font-semibold text-lg text-[#00AEEF]">
                          {hackathonEvents[activeHackathon].prize}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                          Registration Deadline
                        </div>
                        <div className="flex items-center">
                          <div className="font-medium text-slate-900 dark:text-white">
                            {hackathonEvents[activeHackathon].deadline}
                          </div>
                          <span className="ml-2 px-2 py-0.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-full">
                            Upcoming
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-3">
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                        Why participate?
                      </div>
                      <div className="space-y-2">
                        {[
                          "Cash prizes and funding opportunities",
                          "Connect with industry experts and mentors",
                          "Showcase skills to potential employers",
                          "Transform ideas into real-world solutions",
                        ].map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    {/* Hackathon pagination */}
                    <div className="flex space-x-1">
                      {hackathonEvents.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            activeHackathon === idx
                              ? "bg-[#00AEEF]"
                              : "bg-slate-300 dark:bg-slate-600"
                          }`}
                          onClick={() => setActiveHackathon(idx)}
                        ></button>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                        onClick={() =>
                          setActiveHackathon((prev) =>
                            prev === 0 ? hackathonEvents.length - 1 : prev - 1
                          )
                        }
                      >
                        <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button
                        className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                        onClick={() =>
                          setActiveHackathon((prev) =>
                            prev === hackathonEvents.length - 1 ? 0 : prev + 1
                          )
                        }
                      >
                        <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "guides":
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured guide with visual */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 md:p-8 text-white">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm mb-4">
                    <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                    Featured Guide
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ultimate Hackathon <br />
                    Survival Guide
                  </h3>

                  <p className="text-slate-300 mb-6">
                    Everything you need to know to excel in hackathons - from
                    ideation to presentation, teamwork to technical
                    implementation, and time management strategies.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Step-by-step preparation checklist",
                      "Proven team coordination techniques",
                      "Presentation templates that win",
                      "Technical implementation shortcuts",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-5 py-2.5 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:shadow-lg text-white font-medium rounded-lg flex items-center transition-all">
                    Download Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                <div className="w-full md:w-1/2 relative">
                  {/* Abstract visualization */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
                    <div className="w-[500px] h-[500px] bg-[#00AEEF] rounded-full filter blur-[80px]"></div>
                  </div>

                  {/* Layered mockups */}
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="w-72 h-96 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl transform rotate-[-5deg] absolute">
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-[#00AEEF]/80 flex items-center justify-center">
                        <PresentationIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-72 h-96 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-xl transform rotate-[3deg] absolute">
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-72 h-96 bg-slate-800 rounded-xl border border-slate-700 shadow-xl relative">
                      <div className="p-4">
                        <div className="mb-8 mt-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="h-2.5 w-full bg-slate-700 rounded-full"></div>
                          <div className="h-2.5 w-4/5 bg-slate-700 rounded-full"></div>
                          <div className="h-2.5 w-3/5 bg-slate-700 rounded-full"></div>
                          <div className="h-2.5 w-4/5 bg-slate-700 rounded-full"></div>
                          <div className="h-2.5 w-full bg-slate-700 rounded-full"></div>
                        </div>

                        <div className="mt-8 flex justify-end">
                          <div className="w-20 h-8 rounded-md bg-[#00AEEF]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hackathonGuides.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${guide.color} flex items-center justify-center mb-4`}
                  >
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {guide.title}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {guide.description}
                  </p>

                  <div className="mb-5">
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      Resources included:
                    </div>
                    <div className="space-y-1.5">
                      {guide.resources.map((resource, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF] mr-1.5" />
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            {resource}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      5 min read
                    </span>
                    <button className="text-sm font-medium text-[#00AEEF] hover:underline flex items-center">
                      View Guide
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Community banner */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Join Our Hackathon Community
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Connect with fellow hackers, mentors and industry experts. Get
                  exclusive access to workshops, resources and networking
                  opportunities.
                </p>
                <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-lg flex items-center transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  Join Discord Community
                </button>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0067b5]/20 to-[#00AEEF]/20 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-transparent bg-clip-text">
                        2500+
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Members
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "winners":
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Winning projects showcase */}
            <div className="grid grid-cols-1 gap-8">
              {winningProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-md"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        style={{ minHeight: "280px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/70 to-transparent"></div>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs inline-flex items-center mb-2">
                          <Trophy className="w-3.5 h-3.5 mr-1.5 text-yellow-400" />
                          {project.hackathon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.name}
                        </h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <Users className="w-4 h-4 mr-1.5" />
                          Team: {project.team}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between mb-4">
                          <span className="text-xs bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2.5 py-1 rounded-full font-medium flex items-center">
                            <Award className="w-3.5 h-3.5 mr-1" />
                            Winner
                          </span>
                          <span className="text-lg font-bold text-[#00AEEF]">
                            {project.prize}
                          </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-5">
                          {project.description}
                        </p>

                        <div className="mb-5">
                          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                            Technologies Used:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-xs text-slate-800 dark:text-slate-300 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-lg flex items-center transition-colors">
                          <PresentationIcon className="w-4 h-4 mr-1.5" />
                          View Presentation
                        </button>
                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-lg flex items-center transition-colors">
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action - Submit your project */}
            <div className="bg-gradient-to-r from-[#0067b5] to-[#00AEEF] rounded-xl p-6 text-white relative overflow-hidden">
              {/* Abstract shape decoration */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/5 backdrop-blur-sm"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Have a Winning Project to Showcase?
                  </h3>
                  <p className="text-white/80">
                    Share your hackathon success story and inspire other
                    students to create amazing projects.
                  </p>
                </div>

                <button className="px-5 py-2.5 bg-white text-[#0067b5] hover:bg-slate-100 font-medium rounded-lg whitespace-nowrap flex items-center transition-colors shadow-lg">
                  Submit Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

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
      id="hackathons"
      className="relative min-h-screen py-16 bg-slate-50 dark:bg-[#080816] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#0067b5]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
              <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
                <DecryptedText
                  text="Innovation Challenges"
                  speed={30}
                  sequential={true}
                  maxIterations={2}
                  animateOn="view"
                />
              </span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Hackathons & <span className="text-[#00AEEF]">Events</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Participate in prestigious hackathons, access winning project
            showcases, and get comprehensive guides to help you excel in
            innovation challenges.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathonStats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl p-4 flex items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0067b5] to-[#00AEEF] flex items-center justify-center shadow-md mr-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-transparent bg-clip-text">
                  <DecryptedText
                    text={stat.value}
                    speed={20}
                    maxIterations={5}
                    animateOn="view"
                  />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl">
          {/* Tab navigation */}
          <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex gap-2">
            {contentTabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF] -z-10"
                    layoutId="activeTabHackathon"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <tab.icon className="w-4 h-4 mr-1.5" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="p-6">
            <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Bottom CTA - Updated */}
<motion.div
  className="mt-16 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  {/* Button container with flexbox for responsive layout */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <Link to="/hackathons">
      <motion.button
        className="group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#0067b5] to-[#00AEEF] relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated light effect */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>

        <span className="relative z-10 text-white font-medium text-lg flex items-center">
          Explore All Hackathons & Events
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
    </Link>

    {/* GitHub themed Contribute button */}
    <a href="https://github.com/KauraniDivya/ColleGPT-Hackathon" target="_blank" rel="noopener noreferrer">
      <motion.button
        className="group px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 dark:border-slate-600 rounded-lg overflow-hidden relative shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* GitHub button hover effect */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></div>
        </div>

        <span className="relative z-10 text-white font-medium flex items-center">
          <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          Contribute to Hackathons 
          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
    </a>
  </div>
  
  <p className="mt-4 text-slate-500 dark:text-slate-400">
    Join 10,000+ students who've participated in our hackathon programs
  </p>
</motion.div>

          
        </motion.div>
      </div>
    </section>
  );
});

export default HackathonSection;
