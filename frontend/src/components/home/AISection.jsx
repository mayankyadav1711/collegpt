import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Brain,
  Sparkles,
  ArrowRight,
  FileText,
  CheckCircle,
  Award,
  BookOpen,
  Star,
  Clock,
  TrendingUp,
  Lightbulb,
  Zap
} from "lucide-react";
import DecryptedText from "../bits/DecryptedText";

const AISection = React.forwardRef((props, ref) => {
  // State for mouse position (for lighting effects)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('pyq');
  const [highlightedMessage, setHighlightedMessage] = useState(1);

  // Ongoing chat simulation
  const chatMessages = [
    { id: 1, type: 'user', content: 'What are the most important topics for GATE CSE?', time: '2 mins ago' },
    { id: 2, type: 'bot', content: 'Based on analysis of last 5 years, focus on: Operating Systems, DBMS, Computer Networks, and Algorithms. These constitute ~60% of the paper.', time: '2 mins ago' },
    { id: 3, type: 'user', content: 'Can you explain virtual memory in simple terms?', time: '1 min ago' },
    { id: 4, type: 'bot', content: 'Virtual memory is like a trick your computer uses to run bigger programs than your RAM can hold. It moves less-used parts to the hard disk temporarily, swapping them back when needed. Think of it as using a small desk but keeping additional papers in a nearby drawer.', time: 'Just now' },
  ];

  // Important PYQ topics with weights
  const pyqTopics = [
    { name: 'Operating Systems', weight: 18, trend: 'up' },
    { name: 'DBMS', weight: 15, trend: 'stable' },
    { name: 'Computer Networks', weight: 14, trend: 'up' },
    { name: 'Algorithms', weight: 13, trend: 'stable' },
    { name: 'Theory of Computation', weight: 10, trend: 'down' },
    { name: 'Data Structures', weight: 9, trend: 'up' },
  ];

  // Important topics with descriptions
  const importantTopics = [
    {
      title: 'Virtual Memory',
      description: 'Paging, segmentation, and page replacement algorithms',
      importance: 'High',
      icon: Brain
    },
    {
      title: 'TCP/IP Protocol',
      description: 'Flow control, congestion control, and connection management',
      importance: 'High',
      icon: Zap
    },
    {
      title: 'SQL Queries',
      description: 'Joins, aggregation, and complex nested queries',
      importance: 'Medium',
      icon: FileText
    },
    {
      title: 'Graph Algorithms',
      description: 'Shortest path, MST, and traversal techniques',
      importance: 'High',
      icon: TrendingUp
    },
  ];

  // Expected questions
  const expectedQuestions = [
    'Compare and contrast various page replacement algorithms',
    'Solve recurrence relations for time complexity analysis',
    'Calculate throughput in a sliding window protocol',
    'Design an efficient algorithm for specific graph problems',
    'Normalize a given database schema to 3NF/BCNF'
  ];

  // Auto-advance highlighted message every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedMessage(prev => prev < chatMessages.length ? prev + 1 : 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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
          controls.start("visible");
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
  }, [ref, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="ai-assistant"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements - Similar to Notes Section */}
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
        {/* Premium Hero Row */}
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
                text="PYQ-Trained AI Assistant"
                speed={30}
                sequential={true}
                maxIterations={2}
                animateOn="view"
              />
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Meet
            </span>
            <span className="text-[#00AEEF]"> Nova</span>
            <motion.span
              className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Meet Nova
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your AI study companion trained on thousands of previous year questions, expertly designed to help you master complex concepts and ace your exams
          </motion.p>
        </motion.div>

        {/* Main Content: Left-Right Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
          {/* Left Side: Interactive Chat & Robot */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Chat interface preview with ongoing conversation */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                {/* Chat header */}
                <div className="bg-gradient-to-r from-[#0067b5] to-[#00AEEF] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <img 
                        src="/robot.gif" 
                        alt="Nova AI" 
                        className="w-8 h-8 rounded-full object-contain"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Nova</h3>
                      <div className="flex items-center text-xs text-white/80 space-x-1">
                        <span>Online</span>
                        <span className="bg-white/20 rounded-full px-1.5 text-[10px] ml-1">PYQ Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">Premium</span>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-4 h-[320px] overflow-y-auto bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="space-y-4">
                    {chatMessages.map((message, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 transition-all duration-300 ${
                            message.type === 'user'
                              ? 'bg-[#00AEEF] text-white rounded-tr-none'
                              : 'bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-tl-none'
                          } ${highlightedMessage === message.id ? 'shadow-lg scale-[1.02]' : ''}`}
                        >
                          <p className={message.type === 'user' ? 'text-white' : 'text-slate-800 dark:text-slate-200'}>
                            {message.content}
                          </p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' 
                              ? 'text-white/80' 
                              : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Chat input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="flex items-center relative">
                    <input
                      type="text"
                      placeholder="Ask about important topics, PYQs, concepts..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                               bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-slate-900 dark:text-white
                               focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none
                               placeholder-slate-500 dark:placeholder-slate-400 transition-all pr-12"
                      disabled
                    />
                    <button 
                      className="absolute right-2 p-2 rounded-lg bg-[#00AEEF] text-white"
                      aria-label="Send message"
                    >
                      <SendIcon />
                    </button>
                  </div>
                </div>

                {/* Digital data streams animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(3)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent overflow-hidden"
                      style={{
                        top: `${20 + idx * 30}%`,
                        left: "0%",
                        width: "100%",
                        transform: `rotate(${idx * 3}deg)`,
                      }}
                      animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 2 + idx * 0.5,
                        repeat: Infinity,
                        repeatDelay: idx * 0.5 + 1,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Nova's capabilities pill */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Sparkles className="text-[#00AEEF] w-4 h-4" />
                <span className="text-slate-700 dark:text-slate-300">Trained on 10+ years of PYQs</span>
              </motion.div>

              {/* Call to action button */}
              <motion.div 
                className="mt-12 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link to="/collegptai">
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
                      Ask Nova Anything
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Features Tabs */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Main heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Master Your <span className="text-[#00AEEF]">Exams</span>
                <span className="block">With AI-Powered Insights</span>
              </h3>
            </motion.div>

            {/* Tabs Navigation */}
            <motion.div variants={itemVariants} className="flex space-x-2 mb-6">
              <TabButton 
                active={activeTab === 'pyq'} 
                onClick={() => setActiveTab('pyq')}
                icon={<FileText className="w-4 h-4" />}
                label="PYQ Analysis"
              />
              <TabButton 
                active={activeTab === 'topics'} 
                onClick={() => setActiveTab('topics')}
                icon={<BookOpen className="w-4 h-4" />}
                label="Important Topics"
              />
              <TabButton 
                active={activeTab === 'expected'} 
                onClick={() => setActiveTab('expected')}
                icon={<Lightbulb className="w-4 h-4" />}
                label="Expected Questions"
              />
            </motion.div>

            {/* Tab Content */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl">
              <AnimatePresence mode="wait">
                {activeTab === 'pyq' && (
                  <motion.div
                    key="pyq"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                      <Award className="text-[#00AEEF] w-5 h-5" />
                      Topic-wise PYQ Distribution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      Based on analysis of previous 5 years' question papers
                    </p>
                    
                    <div className="space-y-3">
                      {pyqTopics.map((topic, idx) => (
                        <div key={idx} className="relative">
                          <div className="flex justify-between mb-1 items-center">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{topic.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-[#00AEEF]/10 text-[#00AEEF] py-0.5 px-1.5 rounded">
                                {topic.weight}%
                              </span>
                              {topic.trend === 'up' && (
                                <TrendingUp className="w-3 h-3 text-green-500" />
                              )}
                              {topic.trend === 'down' && (
                                <TrendingUp className="w-3 h-3 text-red-500 transform rotate-180" />
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-[#0067b5] to-[#00AEEF] h-2 rounded-full"
                              style={{ width: `${topic.weight}%` }}
                              initial={{ width: 0 }}
                              animate={{ width: `${topic.weight}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-4">
                      <Link to="/collegptai" className="inline-flex items-center text-[#00AEEF] font-medium text-sm hover:underline">
                        Get detailed PYQ analysis
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'topics' && (
                  <motion.div
                    key="topics"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                      <Star className="text-[#00AEEF] w-5 h-5" />
                      Must-Study Topics
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      Focus on these high-yield topics for maximum results
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {importantTopics.map((topic, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-slate-50 dark:bg-gray-800 p-4 rounded-xl border border-slate-200 dark:border-gray-700"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-[#00AEEF]/10">
                              <topic.icon className="w-5 h-5 text-[#00AEEF]" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-slate-900 dark:text-white">{topic.title}</h5>
                              <div className="flex items-center">
                                <span className={`text-xs rounded-full px-2 py-0.5 ${
                                  topic.importance === 'High' 
                                    ? 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400' 
                                    : 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400'
                                }`}>
                                  {topic.importance} Priority
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{topic.description}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-2">
                      <Link to="/collegptai" className="inline-flex items-center text-[#00AEEF] font-medium text-sm hover:underline">
                        Explore all important topics
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'expected' && (
                  <motion.div
                    key="expected"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                      <Lightbulb className="text-[#00AEEF] w-5 h-5" />
                      Most Expected Questions
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      Based on pattern analysis and recent trends
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      {expectedQuestions.map((question, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-gray-800 rounded-lg border border-slate-200 dark:border-gray-700"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] font-medium text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-sm text-slate-700 dark:text-slate-300">{question}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-2">
                      <Link to="/collegptai" className="inline-flex items-center text-[#00AEEF] font-medium text-sm hover:underline">
                        Get detailed practice questions
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Additional Feature */}
            <motion.div
              variants={itemVariants} 
              className="mt-6 bg-gradient-to-r from-[#0067b5]/10 to-[#00AEEF]/10 backdrop-blur-sm rounded-xl p-4 border border-[#00AEEF]/20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white dark:bg-gray-800">
                  <img 
                    src="/robot.gif" 
                    alt="Nova" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Nova Explains Complex Topics Simply</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Ask questions in your own words and get easy-to-understand explanations
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <FeatureCard
            icon={<FileText className="w-6 h-6 text-white" />}
            title="PYQ Deep Dives"
            description="Get detailed explanations and solutions for questions from previous year papers"
            color="from-[#0067b5] to-[#00AEEF]"
          />
          <FeatureCard
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Topic Mastery Paths"
            description="Follow AI-generated learning paths to master complex subjects efficiently"
            color="from-[#0067b5] to-[#00AEEF]"
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6 text-white" />}
            title="Last-Minute Revision"
            description="Quick summaries and key points for effective exam preparation"
            color="from-[#0067b5] to-[#00AEEF]"
          />
        </motion.div>
      </div>
    </section>
  );
});

// Helper Components
const TabButton = ({ active, onClick, icon, label }) => (
  <button
    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
      active 
        ? "bg-white dark:bg-gray-900 text-[#00AEEF] shadow-md border border-slate-200 dark:border-slate-700" 
        : "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="font-medium whitespace-nowrap">{label}</span>
  </button>
);

const FeatureCard = ({ icon, title, description, color }) => (
  <motion.div
    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 shadow-lg`}>
      {icon}
    </div>
    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300">{description}</p>
  </motion.div>
);

// Simple Send icon component
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4 20-7Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

export default AISection;