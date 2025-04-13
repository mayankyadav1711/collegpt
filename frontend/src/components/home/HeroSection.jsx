import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, BookOpen, Award } from "lucide-react";

const HeroSection = forwardRef(({ notesRef }, ref) => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const glitchText = {
    animate: {
      opacity: [1, 0.9, 1],
      x: [0, -2, 1, 0],
      filter: ["blur(0px)", "blur(0.5px)", "blur(0px)"],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 5,
      },
    },
  };

  // Stats to display
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Active Students",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: BookOpen,
      value: "300+",
      label: "Learning Resources",
      color: "from-purple-500/20 to-purple-500/5",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "from-green-500/20 to-green-500/5",
    },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      {/* Animated Matrix-style Grid Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-10 dark:opacity-20"
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

      {/* Digital particles effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00AEEF]/10 dark:bg-[#00AEEF]/5 filter blur-[80px] animate-blob"></div>
        <div className="absolute top-2/3 left-2/3 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 filter blur-[60px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 filter blur-[50px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Digital rain effect (Matrix-style falling characters) */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-10 dark:opacity-20">
        <div className="matrix-rain"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal-inspired header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20"
          >
            <div className="mr-2 flex space-x-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <span className="font-mono text-slate-800 dark:text-slate-200">
              collegpt:~/welcome
            </span>
            <motion.span
              className="w-1.5 h-4 bg-[#00AEEF] inline-block ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>

          {/* Main hero content */}
          <div className="text-center md:text-left">
            <motion.div
              className="relative mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="absolute -left-2 -top-2 text-6xl md:text-8xl text-[#00AEEF] opacity-20 font-bold font-mono"
                animate={{ opacity: [0.2, 0.15, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"{"}
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white to-slate-800 dark:to-slate-300 inline-block">
                ColleGPT
              </h1>
              <motion.span
                className="absolute -right-2 -bottom-2 text-6xl md:text-8xl text-[#00AEEF] opacity-20 font-bold font-mono"
                animate={{ opacity: [0.2, 0.15, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"}"}
              </motion.span>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold relative inline-block">
                <motion.span
                  className="text-[#00AEEF]"
                  variants={glitchText}
                  animate="animate"
                >
                  Get Prepared Together
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0"
            >
              Your complete learning ecosystem designed to enhance your
              college journey with intelligent resources, community support,
              and career preparation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-12"
            >
              <Link to="/register">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white font-medium rounded-xl overflow-hidden"
                  whileHover={{
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 174, 239, 0.3), 0 4px 6px -4px rgba(0, 174, 239, 0.3)",
                  }}
                >
                  {/* Glowing effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00AEEF] to-[#0067b5] opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500"></span>

                  {/* Button content */}
                  <span className="relative flex items-center justify-center z-10">
                    <span>Access System</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/explore">
                <button className="px-8 py-4 bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm text-slate-800 dark:text-white font-medium rounded-xl border border-slate-300/50 dark:border-slate-700/50 hover:border-[#00AEEF]/30 dark:hover:border-[#00AEEF]/30 transition-all hover:bg-white/20 dark:hover:bg-slate-800/50">
                  Explore Features
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto md:mx-0"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm p-6 rounded-xl border border-white/20 dark:border-slate-700/30`}
                >
                  <stat.icon className="w-8 h-8 text-[#00AEEF] mb-3" />
                  <div className="font-mono font-bold text-3xl mb-1 flex items-center text-slate-900 dark:text-white">
                    <span>{stat.value}</span>
                    <motion.div
                      className="w-1.5 h-6 bg-[#00AEEF] ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Digital arrow pointing down */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => notesRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
          SCROLL
        </div>
        <ChevronRight className="w-5 h-5 text-[#00AEEF] transform rotate-90" />
      </motion.div>
    </section>
  );
});

export default HeroSection;