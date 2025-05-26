import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { ENDPOINTS } from '../../api/api';
import toast from 'react-hot-toast';
import { 
  Eye, 
  EyeOff, 
  UserPlus, 
  Upload, 
  Mail, 
  User, 
  School, 
  Calendar, 
  Users,
  CheckCircle,
  Sparkle,
  BookOpen,
  GraduationCap,
  Lock,
  Shield,
  Clock,
  Star,
  Send,
  CheckSquare,
  ArrowRight
} from 'lucide-react';
import registerImage from "../../images/scholar.png";

const defaultProfilePic = "https://www.collegpt.com/static/media/60111.c6884fb1e4065b2484d9.webp";

const Register = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const registerRef = useRef(null);
  const [formFocused, setFormFocused] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [formStage, setFormStage] = useState(1); // 1 for basic info, 2 for additional details
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
    university: '',
    sem: '1',
    gender: ''
  });
  
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(defaultProfilePic);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE_MB = 1;
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  // Current date and time for the footer
  const [currentDateTime] = useState("2025-04-14 08:35:23");
  const currentUser = "mayankyadav1711";

  // Handle mouse movement for lighting effect
  const handleMouseMove = (e) => {
    if (registerRef.current) {
      const bounds = registerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Handle responsive viewport
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Check password strength
    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    
    let strength = 0;
    // Length check
    if (password.length >= 8) strength += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    // Contains number
    if (/[0-9]/.test(password)) strength += 1;
    // Contains special char
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "Very Weak";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    if (passwordStrength === 4) return "Strong";
    return "Very Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 2) return "red";
    if (passwordStrength < 4) return "yellow";
    return "green";
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024);

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast.error("Only JPG, JPEG, and PNG image files are allowed");
      e.target.value = '';
      return;
    }
    
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      toast.error(`File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB`);
      e.target.value = '';
      return;
    }

    setProfileImage(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "studymate");

    try {
      const loadingToastId = toast.loading("Uploading profile image...");
      
      const response = await fetch("https://api.cloudinary.com/v1_1/dkyrtfk1u/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      toast.dismiss(loadingToastId);
      
      if (data.error) {
        throw new Error(data.error.message || "Failed to upload image");
      }
      
      return data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    
    // Validate first part of the form
    if (!formData.name || !formData.email || !formData.password || !formData.c_password) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Validate email format
    if (!/^([^\\s@]+@gmail\\.com|[^@]+@ldrp\\.ac\\.in)$/.test(formData.email)) {
      toast.error('Please enter a valid Gmail or LDRP email address');
      return;
    }
    
    // Validate password match
    if (formData.password !== formData.c_password) {
      toast.error('Passwords do not match');
      return;
    }
    
    // Validate password strength
    if (passwordStrength < 3) {
      toast.error('Please choose a stronger password');
      return;
    }
    
    // Move to next stage
    setFormStage(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Final validation
    if (!formData.university || !formData.gender) {
      toast.error('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    try {
      // Upload profile image if selected
      let imageUrl = '';
      if (profileImage) {
        imageUrl = await handleImageUpload(profileImage);
      }

      // Prepare payload
      const payload = {
        ...formData,
        profilePic: imageUrl || defaultProfilePic,
      };

      // Submit registration
      const response = await fetch(ENDPOINTS.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      if (data.message === "OTP sent successfully. Please check your email to verify your account.") {
        toast.success('Registration successful! Please check your email for OTP verification.');
        navigate(`/otp?email=${encodeURIComponent(formData.email)}`);
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred during registration');
      console.error('Registration error:', error);
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

  const slideVariants = {
    hidden: { x: formStage === 1 ? -50 : 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: formStage === 1 ? 50 : -50, opacity: 0, transition: { duration: 0.3 } }
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
      ref={registerRef}
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

      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 lg:px-8 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          className="w-full max-w-xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo and Header */}
          <motion.div 
            className="text-center mb-8"
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
                Create Your Account
              </span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of students on their learning journey
            </p>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            variants={itemVariants}
            className="mb-6 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Step {formStage} of 2
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {formStage === 1 ? "Basic Information" : "Additional Details"}
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: formStage === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-xl -z-10"></div>
            
            <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl overflow-hidden">
              <form onSubmit={formStage === 1 ? handleContinue : handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Stage 1: Basic Information */}
                  {formStage === 1 && (
                    <motion.div 
                      key="stage1"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      {/* Name field */}
                      <motion.div 
                        className="space-y-2" 
                        variants={itemVariants}
                      >
                        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        
                        <div 
                          className={`relative transition-all duration-200 ${formFocused === 'name' ? 'scale-[1.02]' : ''}`}
                        >
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                          
                          <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFormFocused('name')}
                            onBlur={() => setFormFocused(null)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50/80 dark:bg-gray-800/50
                                     border border-gray-200 dark:border-gray-700 rounded-lg 
                                     text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                                     transition-all shadow-sm"
                            placeholder="Enter your full name"
                            required
                          />
                          
                          {/* Shimmer effect */}
                          {formFocused === 'name' && (
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

                      {/* Email field */}
                      <motion.div 
                        className="space-y-2" 
                        variants={itemVariants}
                      >
                        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        
                        <div 
                          className={`relative transition-all duration-200 ${formFocused === 'email' ? 'scale-[1.02]' : ''}`}
                        >
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                          
                          <input
                            name="email"
                            type="email"
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
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                          We accept Gmail or LDRP Institute email addresses
                        </p>
                      </motion.div>

                      {/* Password field */}
                      <motion.div 
                        className="space-y-2" 
                        variants={itemVariants}
                      >
                        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                          Password <span className="text-red-500">*</span>
                        </label>
                        
                        <div 
                          className={`relative transition-all duration-200 ${formFocused === 'password' ? 'scale-[1.02]' : ''}`}
                        >
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                          
                          <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={() => setFormFocused('password')}
                            onBlur={() => setFormFocused(null)}
                            className="w-full pl-10 pr-12 py-3 bg-gray-50/80 dark:bg-gray-800/50
                                     border border-gray-200 dark:border-gray-700 rounded-lg 
                                     text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                                     transition-all shadow-sm"
                            placeholder="Create a secure password"
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
                        
                        {/* Password strength indicator */}
                        {formData.password && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium">Password Strength</span>
                              <span 
                                className={`text-xs font-medium ${
                                  getPasswordStrengthColor() === "red" ? "text-red-500" :
                                  getPasswordStrengthColor() === "yellow" ? "text-yellow-500" :
                                  "text-green-500"
                                }`}
                              >
                                {getPasswordStrengthText()}
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  getPasswordStrengthColor() === "red" ? "bg-red-500" :
                                  getPasswordStrengthColor() === "yellow" ? "bg-yellow-500" :
                                  "bg-green-500"
                                }`}
                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {passwordStrength > 0 && (
                          <div className="mt-2 grid grid-cols-2 gap-1">
                            <div className={`text-xs flex items-center ${/[A-Z]/.test(formData.password) ? "text-green-500" : "text-gray-400"}`}>
                              <CheckSquare className="w-3 h-3 mr-1" />
                              Uppercase letter
                            </div>
                            <div className={`text-xs flex items-center ${/[a-z]/.test(formData.password) ? "text-green-500" : "text-gray-400"}`}>
                              <CheckSquare className="w-3 h-3 mr-1" />
                              Lowercase letter
                            </div>
                            <div className={`text-xs flex items-center ${/[0-9]/.test(formData.password) ? "text-green-500" : "text-gray-400"}`}>
                              <CheckSquare className="w-3 h-3 mr-1" />
                              Number
                            </div>
                            <div className={`text-xs flex items-center ${/[^A-Za-z0-9]/.test(formData.password) ? "text-green-500" : "text-gray-400"}`}>
                              <CheckSquare className="w-3 h-3 mr-1" />
                              Special character
                            </div>
                            <div className={`text-xs flex items-center ${formData.password.length >= 8 ? "text-green-500" : "text-gray-400"}`}>
                              <CheckSquare className="w-3 h-3 mr-1" />
                              8+ characters
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {/* Confirm Password field */}
                      <motion.div 
                        className="space-y-2" 
                        variants={itemVariants}
                      >
                        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                          Confirm Password <span className="text-red-500">*</span>
                        </label>
                        
                        <div 
                          className={`relative transition-all duration-200 ${formFocused === 'c_password' ? 'scale-[1.02]' : ''}`}
                        >
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                          
                          <input
                            name="c_password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.c_password}
                            onChange={handleChange}
                            onFocus={() => setFormFocused('c_password')}
                            onBlur={() => setFormFocused(null)}
                            className="w-full pl-10 pr-12 py-3 bg-gray-50/80 dark:bg-gray-800/50
                                     border border-gray-200 dark:border-gray-700 rounded-lg 
                                     text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                                     transition-all shadow-sm"
                            placeholder="Confirm your password"
                            required
                          />
                          
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                          
                          {formFocused === 'c_password' && (
                            <motion.div 
                              className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-lg"
                              variants={shimmerVariants}
                              animate="animate"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Password match indicator */}
                        {formData.password && formData.c_password && (
                          <div className="flex items-center mt-1">
                            {formData.password === formData.c_password ? (
                              <>
                                <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1" />
                                <span className="text-xs text-green-500">Passwords match</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-3.5 h-3.5 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-xs text-red-500">Passwords don't match</span>
                              </>
                            )}
                          </div>
                        )}
                      </motion.div>

                      {/* Continue Button */}
                      <motion.div variants={itemVariants}>
                        <div className="relative">
                          <motion.button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                                     dark:from-blue-500 dark:to-indigo-500 text-white 
                                     rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30
                                     transition-all duration-200 
                                     flex items-center justify-center gap-2
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                     dark:focus:ring-offset-gray-800 overflow-hidden"
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                          >
                            <div className="flex items-center">
                              <span>Continue</span>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                            
                            {/* Animated shine effect */}
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
                    </motion.div>
                  )}

                  {/* Stage 2: Additional Details */}
                  {formStage === 2 && (
                    <motion.div 
                      key="stage2"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* University field */}
                        <motion.div 
                          className="space-y-2" 
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            University <span className="text-red-500">*</span>
                          </label>
                          
                          <div 
                            className={`relative transition-all duration-200 ${formFocused === 'university' ? 'scale-[1.02]' : ''}`}
                          >
                            <School className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                            
                            <select
                              name="university"
                              value={formData.university}
                              onChange={handleChange}
                              onFocus={() => setFormFocused('university')}
                              onBlur={() => setFormFocused(null)}
                              className="w-full pl-10 pr-10 py-3 bg-gray-50/80 dark:bg-gray-800/50
                                      border border-gray-200 dark:border-gray-700 rounded-lg 
                                      text-gray-900 dark:text-white appearance-none
                                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                                      transition-all shadow-sm"
                              required
                            >
                              <option value="">Select University</option>
                              <option value="LDRP Institute of Technology and Research, Gandhinagar">LDRP Institute of Technology and Research</option>
                              <option value="Gujarat Technological University">Gujarat Technological University</option>
                              <option value="Nirma University of Science and Technology">Nirma University</option>
                              <option value="Ahmedabad University">Ahmedabad University</option>
                            </select>
                            
                            {/* Dropdown icon */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            
                            {formFocused === 'university' && (
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

                        {/* Semester field */}
                        <motion.div 
                          className="space-y-2" 
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            Semester <span className="text-red-500">*</span>
                          </label>
                          
                          <div 
                            className={`relative transition-all duration-200 ${formFocused === 'sem' ? 'scale-[1.02]' : ''}`}
                          >
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                            
                            <select
                              name="sem"
                              value={formData.sem}
                              onChange={handleChange}
                              onFocus={() => setFormFocused('sem')}
                              onBlur={() => setFormFocused(null)}
                              className="w-full pl-10 pr-10 py-3 bg-gray-50/80 dark:bg-gray-800/50
                                      border border-gray-200 dark:border-gray-700 rounded-lg 
                                      text-gray-900 dark:text-white appearance-none
                                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
                                      transition-all shadow-sm"
                              required
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                <option key={sem} value={sem}>
                                  Semester {sem}
                                </option>
                              ))}
                            </select>
                            
                            {/* Dropdown icon */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            
                            {formFocused === 'sem' && (
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

                        {/* Gender field */}
                        <motion.div 
                          className="space-y-2 md:col-span-2" 
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            Gender <span className="text-red-500">*</span>
                          </label>
                          
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { value: "Male", label: "Male" },
                              { value: "Female", label: "Female" },
                              { value: "LGBTQIA2S+", label: "LGBTQIA2S+" }
                            ].map((option) => (
                              <label 
                                key={option.value}
                                className={`flex items-center justify-center px-4 py-3 border ${
                                  formData.gender === option.value
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
                                    : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                                } rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors`}
                              >
                                <input
                                  type="radio"
                                  name="gender"
                                  value={option.value}
                                  checked={formData.gender === option.value}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                <span>{option.label}</span>
                                {formData.gender === option.value && (
                                  <CheckCircle className="w-4 h-4 ml-1.5 text-blue-500" />
                                )}
                              </label>
                            ))}
                          </div>
                        </motion.div>

                        {/* Profile Picture Upload */}
                        <motion.div 
                          className="md:col-span-2 space-y-2" 
                          variants={itemVariants}
                        >
                          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            Profile Picture
                          </label>
                          
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                            >
                              <img
                                src={profilePreview}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                              
                              {/* Upload overlay on hover */}
                              <div 
                                className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                                onClick={() => fileInputRef.current?.click()}
                              >
                                <Upload className="w-6 h-6 text-white" />
                              </div>
                            </motion.div>
                            
                            <div className="flex-1">
                              <motion.button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="inline-flex items-center px-4 py-2.5 border border-gray-300 
                                          dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium
                                          text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800
                                          hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                              >
                                <Upload className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                                Choose Image
                              </motion.button>
                              
                              <input
                                ref={fileInputRef}
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                                accept="image/jpeg,image/jpg,image/png"
                              />
                              
                              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                JPG, JPEG or PNG (max. {MAX_FILE_SIZE_MB}MB)
                              </p>
                              
                              {profileImage && (
                                <p className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                                  {profileImage.name} selected
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Action buttons */}
                      <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-3 pt-2"
                      >
                        {/* Back button */}
                        <motion.button
                          type="button"
                          onClick={() => setFormStage(1)}
                          className="w-full sm:w-1/3 py-3 border border-gray-300 dark:border-gray-700
                                  bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300
                                  rounded-lg font-medium transition-all flex items-center justify-center"
                          whileHover={{ y: -2 }}
                          whileTap={{ y: 0 }}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          Back
                        </motion.button>
                        
                        {/* Submit button */}
                        <div className="relative w-full sm:w-2/3">
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
                                <span>Creating account...</span>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <UserPlus className="w-5 h-5 mr-2" />
                                <span>Create Account</span>
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
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Sign In Link */}
                <motion.p 
                  className="text-center text-gray-600 dark:text-gray-400 mt-6"
                  variants={itemVariants}
                >
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="relative inline-flex text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Sign in
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600/30 dark:bg-blue-400/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </Link>
                </motion.p>
              </form>
            </div>
          </motion.div>
          
          {/* Secure form indicator */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-xs">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              <span className="text-gray-600 dark:text-gray-400">Secure registration</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <Clock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
              <span className="text-gray-500 dark:text-gray-400 font-mono">{currentDateTime}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Visual showcase */}
      <div 
        className={`w-full md:w-1/2 relative z-10 ${viewportWidth < 768 ? 'hidden' : 'block'}`}
      >
        <div className="w-full h-full flex flex-col justify-between p-8 md:p-12">
          {/* Top section */}
          <div className="max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Join the
              <div className="relative inline-block ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Learning Revolution
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
              Join thousands of students who are already transforming their academic journey with our comprehensive learning platform.
            </motion.p>
          </div>
          
          {/* Center section - Graduation 3D illustration */}
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
                src={registerImage} 
                alt="3D Graduate Student" 
                className="relative z-10 w-[250px] h-[250px] object-contain"
              />
            </div>
          </motion.div>
          
          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: <Sparkle className="w-7 h-7 text-blue-500" />,
                title: "Interactive Learning",
                desc: "Engage with dynamic content and practical projects"
              },
              {
                icon: <Users className="w-7 h-7 text-purple-500" />,
                title: "Community Support",
                desc: "Connect with peers and mentors for guidance"
              },
              {
                icon: <BookOpen className="w-7 h-7 text-cyan-500" />,
                title: "Rich Resources",
                desc: "Access comprehensive study materials and guides"
              },
              {
                icon: <GraduationCap className="w-7 h-7 text-amber-500" />,
                title: "Expert Teachers",
                desc: "Learn from industry professionals and academics"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
        
        </div>
      </div>
      
      {/* Add necessary styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 40% 30% 70% 50%; }
          75% { border-radius: 40% 60% 70% 30% / 60% 40% 30% 70%; }
        }
        
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Register;