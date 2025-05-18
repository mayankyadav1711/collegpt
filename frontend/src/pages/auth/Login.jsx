import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { ENDPOINTS } from "../../api/api";
import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  LogIn,
  Mail,
  Lock,
  BookOpen,
  Users,
  FileText,
  GraduationCap,
  Sparkle,
  CheckCircle,
  Terminal,
  Code,
  Compass,
  ArrowRight,
  Laptop,
  Smartphone,
  Zap,
  Shield,
  Clock,
  Star
} from "lucide-react";
import loginImage from "../../images/scholar.png";

const Login = () => {
  const { auth, theme } = useAppContext();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const loginRef = useRef(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFocused, setFormFocused] = useState(null);
  
  // For animated date display
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate] = useState("2025-04-14"); // Using the provided date
  
  // For animated decoration
  const decorationCircles = useRef([...Array(6)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 20,
    delay: Math.random() * 4
  })));

  // Handle mouse movement for lighting effects
  const handleMouseMove = (e) => {
    if (loginRef.current) {
      const bounds = loginRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };
  
  // Features for the right panel
  const features = [
    {
      icon: <Terminal className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      title: "Smart Learning Platform",
      description: "Advanced learning tools powered by cutting-edge technology, designed to adapt to your unique learning style."
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500 dark:text-purple-400" />,
      title: "Interactive Resources",
      description: "Hands-on learning with practical examples and exercises to reinforce concepts and build real-world skills."
    },
    {
      icon: <Compass className="w-10 h-10 text-cyan-500 dark:text-cyan-400" />,
      title: "Guided Learning Paths",
      description: "Structured curriculum designed by industry experts to help you progress from beginner to advanced levels."
    }
  ];

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Feature rotation
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(featureInterval);
  }, [features.length]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    try {
      // Display loading toast
      const loadingToastId = toast.loading("Authenticating...");
      
      const response = await fetch(ENDPOINTS.SIGN_IN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      // Dismiss loading toast
      toast.dismiss(loadingToastId);

      if (!response.ok) throw new Error(data.error || "Failed to login");

      if (data.token && data.user) {
        auth.login(data.user, data.token);
        toast.success("Login successful! Welcome back.");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during login");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
  
  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.5,
        ease: "linear",
        repeatDelay: 3
      }
    }
  };

  return (
    <section 
      ref={loginRef}
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Grid with perspective */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute inset-0 transform"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <div 
              className="absolute inset-0 transform"
              style={{
                transform: "rotateX(75deg) translateZ(-50px)",
                background: `linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
        
        {/* Animated gradient blobs */}
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 blur-[120px] animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 blur-[120px] animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Dynamic spotlight */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Animated decorative circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {decorationCircles.current.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"
            style={{
              width: circle.size,
              height: circle.size,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              x: [0, -20, 0, 20, 0],
              y: [0, 15, -10, -15, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              delay: circle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left side - Login Form */}
      <motion.div 
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <motion.div 
            className="text-center mb-10"
            variants={itemVariants}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="relative w-16 h-16"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img
                  src="/logo.svg"
                  alt="ColleGPT Logo"
                  className="w-full h-full object-contain"
                />
                <div className="absolute -inset-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-xl -z-10"></div>
              </motion.div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Welcome back
              </span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to continue your learning journey
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-xl -z-10"></div>
            
            <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <motion.div 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                    Email Address
                  </label>
                  
                  <div 
                    className={`relative transition-all duration-200 ${formFocused === 'email' ? 'scale-[1.02]' : ''}`}
                  >
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFormFocused('email')}
                      onBlur={() => setFormFocused(null)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50/80 dark:bg-gray-800/50
                               border border-gray-200 dark:border-gray-700 rounded-lg 
                               text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                               transition-all shadow-sm"
                      placeholder="name@example.com"
                      required
                    />
                    
                    {/* Shimmer effect */}
                    {formFocused === 'email' && (
                      <motion.div 
                        className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-lg"
                        variants={shimmerVariants}
                        animate="animate"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Password */}
                <motion.div 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                      Password
                    </label>
                    
                    <Link
                      to="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  
                  <div 
                    className={`relative transition-all duration-200 ${formFocused === 'password' ? 'scale-[1.02]' : ''}`}
                  >
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setFormFocused('password')}
                      onBlur={() => setFormFocused(null)}
                      className="w-full pl-10 pr-12 py-3 bg-gray-50/80 dark:bg-gray-800/50
                               border border-gray-200 dark:border-gray-700 rounded-lg 
                               text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                               transition-all shadow-sm"
                      placeholder="••••••••"
                      required
                    />
                    
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                    
                    {/* Shimmer effect */}
                    {formFocused === 'password' && (
                      <motion.div 
                        className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-lg"
                        variants={shimmerVariants}
                        animate="animate"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Remember Me */}
                <motion.div 
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 
                              text-blue-500 focus:ring-blue-500 focus:ring-offset-1
                              dark:bg-gray-800 dark:focus:ring-offset-gray-800
                              transition-colors"
                    />
                    <div className={`absolute inset-0 bg-blue-500/10 rounded scale-0 ${formData.rememberMe ? 'scale-150 opacity-0 animate-ping' : ''} transition-all`}></div>
                  </div>
                  
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                              dark:from-blue-500 dark:to-indigo-500 text-white 
                              rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                              transition-all duration-200 
                              flex items-center justify-center gap-2
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                              dark:focus:ring-offset-gray-800
                              disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      whileHover={!isLoading ? { y: -2 } : {}}
                      whileTap={!isLoading ? { y: 0 } : {}}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                          <span>Logging in...</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <LogIn className="w-5 h-5 mr-2" />
                          <span>Sign in</span>
                        </div>
                      )}
                      
                      {/* Animated shine effect */}
                      {!isLoading && (
                        <span className="absolute inset-0 overflow-hidden">
                          <motion.span
                            className="absolute top-0 left-0 w-[200%] h-full bg-white/20 transform -skew-x-12"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 2.5,
                              repeatDelay: 1
                            }}
                          />
                        </span>
                      )}
                    </motion.button>
                    
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity -z-10"
                      animate={{ 
                        opacity: [0.2, 0.3, 0.2],
                        scale: [0.99, 1.01, 0.99]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </div>
                </motion.div>
              </form>

              {/* Register Link */}
              <motion.p 
                className="mt-8 text-center text-gray-600 dark:text-gray-400"
                variants={itemVariants}
              >
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="relative inline-flex text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Create an account
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600/30 dark:bg-blue-400/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              </motion.p>
            </div>
          </motion.div>
          
          {/* Device Information and Time */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex justify-center items-center text-gray-500 dark:text-gray-400"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-xs font-mono">
              {/* Security badge */}
              <span className="inline-flex items-center pr-2 border-r border-gray-300 dark:border-gray-600">
                <Shield className="w-3 h-3 mr-1 text-green-500" />
                <span>Secured Login</span>
              </span>
              
              {/* Date and time */}
              <span>
                <Clock className="w-3 h-3 mr-1 inline-block" />
                <span>{currentDate} {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Visual showcase */}
      <div 
        className={`w-full md:w-1/2 relative z-10 ${isMobile ? 'hidden' : 'block'}`}
      >
        <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
          {/* Top section - Features */}
          <div className="max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Transform Your
              <div className="relative inline-block ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Learning Journey
                </span>
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-lg"
            >
              Join thousands of students who are already achieving academic excellence with our cutting-edge educational platform.
            </motion.p>
            
            {/* Animated feature carousel */}
            <div className="mt-10">
              <AnimatePresence mode="wait">
                {features.map((feature, index) => (
                  index === activeFeatureIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                          {feature.icon}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Feature indicator dots */}
              <div className="flex justify-center gap-2 mt-5">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeatureIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeFeatureIndex === idx 
                        ? "w-6 bg-blue-500" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`View feature ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Center section - Main image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center py-10"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Main image */}
              <img 
                src={loginImage} 
                alt="3D Graduate Student" 
                className="relative z-10 w-[250px] h-[250px] object-contain"
              />
            </div>
          </motion.div>
          
          {/* Bottom section - Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex justify-between items-center"
          >
            {/* User avatars and count */}
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <motion.img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${20 + i}`}
                    alt={`User ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                    whileHover={{ y: -3, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                ))}
              </div>
              
              <div className="inline-flex items-center px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  1,000+ students joined this week
                </span>
              </div>
            </div>
            
            {/* Platform stats */}
            <div className="hidden md:flex items-center gap-3">
              {[
                { label: "Top Rated", icon: <Star className="w-3.5 h-3.5 text-amber-400" /> },
                { label: "24/7 Support", icon: <Zap className="w-3.5 h-3.5 text-blue-500" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center space-x-1.5 shadow-sm"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {stat.icon}
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;