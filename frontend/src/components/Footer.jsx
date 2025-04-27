import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  BookOpen,
  FileText,
  Users,
  Calendar,
  Sparkle,
  ExternalLink,
  GraduationCap,
  Heart,
  Code,
  ArrowRight,
  Github,
  Star,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 2, // -1 to 1
      y: (clientY / innerHeight - 0.5) * 2, // -1 to 1
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  const footerLinks = {
    Features: [
      {
        name: "Notes & Resources",
        href: "/courses",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: "Events Calendar",
        href: "/events",
        icon: <Calendar className="w-4 h-4" />,
      },
      {
        name: "Cheat Sheets",
        href: "/cheatsheets",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        name: "Learning Guides",
        href: "/guides",
        icon: <GraduationCap className="w-4 h-4" />,
      },
      {
        name: "Community Forum",
        href: "/community",
        icon: <Users className="w-4 h-4" />,
      },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contribute", href: "/contributor" },
      { name: "Contact", href: "/contact" },
      { name: "Team", href: "/team" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  };

  const currentDate = new Date();
  const stats = [
    { value: "15K+", label: "Students" },
    { value: "200+", label: "Resources" },
    { value: "50+", label: "Institutions" },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 border-t border-gray-200/20 dark:border-gray-800/20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>

      {/* Floating Astronaut with parallax effect */}
      <div className="absolute right-[5%] bottom-[10%] md:bottom-[15%] lg:bottom-[20%] w-48 h-48 md:w-80 md:h-80 lg:w-80 lg:h-80 select-none pointer-events-none z-10 order-first md:order-last">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
            x: mousePosition.x * -10,
          }}
          transition={{
            y: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src="https://i.ibb.co/4Z2VV9Zp/image.png"
            alt="Floating Astronaut"
            className="w-full h-full object-contain"
          />

          {/* Shadow beneath astronaut */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-6 bg-black/20 dark:bg-black/30 rounded-full blur-md"
            animate={{
              width: [50, 80, 50],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-2xl -z-10"></div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Logo, About & Newsletter */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center">
              <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center group">
                C
                <img
                  src="/logo.svg"
                  className="inline-block h-8 w-8 mt-1 transform transition-transform group-hover:rotate-12"
                  alt="ColleGPT Logo"
                />
                LLEGPT
              </span>
            </Link>

            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Transforming educational journeys through AI-powered resources,
                collaborative learning, and a supportive community of students
                and educators.
              </p>

              <div className="flex gap-4">
                <SocialLink
                  href="https://www.github.com/mayankyadav1711"
                  icon={<Github />}
                  label="GitHub"
                  className="bg-gray-900 text-white hover:bg-gray-700"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/collegpt/"
                  icon={<Linkedin />}
                  label="LinkedIn"
                  className="bg-[#0077B5] text-white hover:bg-blue-700"
                />
                <SocialLink
                  href="https://twitter.com/ColleGPT"
                  icon={<Twitter />}
                  label="Twitter"
                  className="bg-[#1DA1F2] text-white hover:bg-blue-500"
                />
                <SocialLink
                  href="https://www.instagram.com/collegpt"
                  icon={<Instagram />}
                  label="Instagram"
                  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FFDC80] text-white"
                />
                <SocialLink
                  href="https://collegpt.com"
                  icon={<Globe />}
                  label="Website"
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl dark:shadow-gray-900/20 backdrop-blur-xl border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Get updates and resources
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                Join our newsletter for the latest educational content, events,
                and opportunities.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                             bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-slate-900 dark:text-white
                             focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none
                             placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500
                           hover:from-indigo-700 hover:to-blue-600
                           dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600 
                           text-white font-medium transition-all shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 
                           flex items-center justify-center gap-2"
                >
                  Subscribe to Newsletter
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 relative inline-flex items-center">
                    {category}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    {links.map((link) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={link.href}
                          className="group flex items-center text-slate-600 dark:text-slate-300 
                                   hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                        >
                          {link.icon && (
                            <span
                              className="mr-3 text-slate-400 dark:text-slate-500 
                                       group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                            >
                              {link.icon}
                            </span>
                          )}
                          <span className="inline-flex items-center space-x-1 transform transition-all group-hover:translate-x-1">
                            <span>{link.name}</span>
                            <motion.span
                              className="opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0"
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-3 h-3 text-indigo-500" />
                            </motion.span>
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700/50 pt-10 mt-10">
          <div className="flex items-center ">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentDate.getFullYear()} ColleGPT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Social Link Component
const SocialLink = ({ href, icon, label, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-10 h-10 flex items-center justify-center rounded-xl
             shadow-lg transition-all ${className}`}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Footer;
