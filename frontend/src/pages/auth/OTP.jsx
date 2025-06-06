import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ENDPOINTS } from "../../api/api";
import toast from "react-hot-toast";
import {
  Check,
  RefreshCw,
  Mail,
  Lock,
  Shield,
  AlertCircle,
  Key,
  Clock,
  CheckCircle,
  ChevronRight,
  User,
  Zap,
  ArrowRight
} from "lucide-react";

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get("email") || "";
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeInput, setActiveInput] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(["email"]);
  
  const otpSectionRef = useRef(null);
  const inputRefs = useRef([]);
  
  // Current date and time for footer
  const [currentDateTime] = useState("2025-04-14 08:42:59");
  const [currentUser] = useState("mayankyadav1711");

  // Handle mouse movement for lighting effect
  const handleMouseMove = (e) => {
    if (otpSectionRef.current) {
      const bounds = otpSectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Handle countdown for resend button
  useEffect(() => {
    if (countdown > 0 && resendDisabled) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  // Focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleOTPChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);

    // Auto-focus to the next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
      setActiveInput(index - 1);
    }

    // Handle left arrow key
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
      setActiveInput(index - 1);
    }

    // Handle right arrow key
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
      setActiveInput(index + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted data is numeric and of correct length
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);

      // Focus the last input
      inputRefs.current[5].focus();
      setActiveInput(5);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");

    // Validate OTP
    if (otpValue.length !== 6 || !/^\d{6}$/.test(otpValue)) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      const loadingToastId = toast.loading("Verifying your email...");
      
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const response = await fetch(ENDPOINTS.VERIFY_OTP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          otp: otpValue,
        }),
      });

      const data = await response.json();
      
      toast.dismiss(loadingToastId);

      if (!response.ok) {
        throw new Error(data.error || "OTP verification failed");
      }

      if (data.token && data.user) {
        // Animate verification success
        setIsVerified(true);
        setCompletedSteps([...completedSteps, "verified"]);
        toast.success("Email verification successful!");
        
        // Navigate after showing success animation
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during OTP verification");
      console.error("OTP verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendDisabled) return;

    if (!userEmail) {
      toast.error("Email address is missing");
      return;
    }

    try {
      const loadingToastId = toast.loading("Sending new verification code...");
      
      // Use the signup endpoint with the same email to resend OTP
      const response = await fetch(ENDPOINTS.SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();
      
      toast.dismiss(loadingToastId);

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend OTP");
      }

      toast.success("A new verification code has been sent to your email");
      setResendDisabled(true);
      setCountdown(60);
      
      // Clear the OTP fields
      setOtp(["", "", "", "", "", ""]);
      // Focus first input
      inputRefs.current[0].focus();
      setActiveInput(0);
    } catch (error) {
      toast.error(error.message || "An error occurred while resending OTP");
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

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(37, 99, 235, 0.4)",
        "0 0 0 10px rgba(37, 99, 235, 0)",
        "0 0 0 0 rgba(37, 99, 235, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
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
      ref={otpSectionRef}
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

      {/* Left side - OTP Verification */}
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                {isVerified ? "Email Verified!" : "Verify Your Email"}
              </span>
            </h1>
            
            {!isVerified && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 text-blue-500" />
                <p className="text-sm">
                  We've sent a code to <span className="font-medium text-gray-800 dark:text-gray-200">{userEmail}</span>
                </p>
              </div>
            )}
          </motion.div>

          {/* Progress steps */}
          <motion.div
            variants={itemVariants}
            className="mb-8 max-w-sm mx-auto"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    completedSteps.includes("email") 
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                  }`}
                  animate={completedSteps.includes("email") ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {completedSteps.includes("email") ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                </motion.div>
                <span className="text-xs mt-1 font-medium text-gray-500 dark:text-gray-400">Registration</span>
              </div>
              
              {/* Connecting line */}
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 relative mx-2">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-blue-500 dark:bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: isVerified ? "100%" : "50%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
              
              <div className="flex flex-col items-center">
                <motion.div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    completedSteps.includes("verified") 
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                  }`}
                  animate={completedSteps.includes("verified") ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {completedSteps.includes("verified") ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                </motion.div>
                <span className="text-xs mt-1 font-medium text-gray-500 dark:text-gray-400">Verification</span>
              </div>
              
              {/* Connecting line */}
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 relative mx-2">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-blue-500 dark:bg-blue-400"
                  initial={{ width: "0%" }}
                  animate={{ width: isVerified ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500`}>
                  <User className="w-5 h-5" />
                </div>
                <span className="text-xs mt-1 font-medium text-gray-500 dark:text-gray-400">Login</span>
              </div>
            </div>
          </motion.div>

          {/* OTP Form / Success Message */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-xl -z-10"></div>
            
            <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {isVerified ? (
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center py-4"
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.2
                        }}
                      >
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Successfully Verified!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Your account has been activated. You can now sign in with your credentials.
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button 
                        onClick={() => navigate("/login")}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-lg font-medium transition-all flex items-center justify-center mx-auto"
                      >
                        Continue to Login
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="otpForm"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-4 text-center">
                        Enter the 6-digit verification code
                      </label>

                      <div
                        className="flex justify-center gap-3"
                        onPaste={handlePaste}
                      >
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                          <motion.div
                            key={index}
                            className="relative"
                            animate={{
                              scale: activeInput === index ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <input
                              ref={(el) => (inputRefs.current[index] = el)}
                              type="text"
                              maxLength={1}
                              value={otp[index]}
                              onChange={(e) => handleOTPChange(index, e.target.value)}
                              onKeyDown={(e) => handleKeyDown(index, e)}
                              onFocus={() => setActiveInput(index)}
                              onBlur={() => setActiveInput(null)}
                              className={`w-12 h-14 text-center text-2xl font-semibold 
                                      bg-gray-50/80 dark:bg-gray-800/50
                                      border border-gray-200 dark:border-gray-700 
                                      rounded-xl text-gray-900 dark:text-white 
                                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 
                                      transition-all shadow-sm`}
                              autoComplete="one-time-code"
                            />
                            
                            {/* Shimmer effect when input is focused */}
                            {activeInput === index && (
                              <motion.div 
                                className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-lg"
                                variants={shimmerVariants}
                                animate="animate"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-3/4 h-full transform skew-x-12"></div>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center gap-1">
                          <Key className="w-3.5 h-3.5" />
                          Please check your inbox for the verification code
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
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
                            <span>Verifying...</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Shield className="w-5 h-5 mr-2" />
                            <span>Verify Email</span>
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

                    {/* Resend OTP */}
                    <div className="text-center pt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Didn't receive the code?
                      </p>
                      <motion.button
                        onClick={handleResendOTP}
                        disabled={resendDisabled}
                        className={`mt-2 px-4 py-2 text-sm font-medium ${
                          resendDisabled 
                            ? "text-gray-500 dark:text-gray-500" 
                            : "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        } disabled:opacity-80 disabled:cursor-not-allowed 
                        flex items-center justify-center mx-auto transition-colors`}
                        whileHover={!resendDisabled ? { scale: 1.05 } : {}}
                        whileTap={!resendDisabled ? { scale: 0.95 } : {}}
                      >
                        <RefreshCw
                          className={`h-4 w-4 mr-2 ${
                            !resendDisabled ? "animate-spin" : ""
                          }`}
                        />
                        {resendDisabled ? (
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1.5" />
                            Resend in <span className="font-mono mx-1">{countdown}s</span>
                          </span>
                        ) : (
                          "Resend verification code"
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          {/* Secure auth indicator */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-xs">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              <span className="text-gray-600 dark:text-gray-400">Secure email verification</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <User className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
              <span className="text-gray-500 dark:text-gray-400 font-mono">{currentUser}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Security Info */}
      <div className="hidden md:block md:w-1/2 relative z-10 overflow-hidden">
        <div className="w-full h-full flex flex-col justify-between p-8 md:p-12 relative">
          {/* Top section */}
          <div className="max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Secure Your
              <div className="relative inline-block ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Account
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
              We take security seriously. Email verification helps us protect your account and ensure your information remains safe.
            </motion.p>
            
            {/* Countdown timer */}
            {resendDisabled && countdown > 0 && (
              <motion.div 
                className="mt-6 inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Code valid for:</span>
                  </div>
                  <div className="flex justify-center items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                    <span className="text-xl font-mono font-medium text-blue-700 dark:text-blue-400">
                      {String(countdown).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Center section - Security illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center py-10"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Shield animation */}
              <motion.div 
                className="w-40 h-40 rounded-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 flex items-center justify-center"
                variants={pulseVariants}
                animate="animate"
              >
                <motion.div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Shield className="w-14 h-14 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Security Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: <Shield className="w-7 h-7 text-blue-500" />,
                title: "Account Security",
                desc: "Two-factor authentication keeps your account protected"
              },
              {
                icon: <Lock className="w-7 h-7 text-purple-500" />,
                title: "Data Protection",
                desc: "Your information is encrypted and secure"
              },
              {
                icon: <AlertCircle className="w-7 h-7 text-amber-500" />,
                title: "Fraud Prevention",
                desc: "Email verification helps prevent unauthorized access"
              },
              {
                icon: <Mail className="w-7 h-7 text-teal-500" />,
                title: "Verified Communications",
                desc: "Receive updates at your verified email address"
              },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
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
          
          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-between items-center mt-6"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <div className="p-2 mr-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">Trusted Security</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Protected by industry-leading encryption</p>
              </div>
            </div>
            
            {/* Current time */}
            <div className="hidden lg:block px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-mono">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {currentDateTime}
              </div>
            </div>
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

        .perspective-laptop {
          transform: perspective(2000px) rotateX(0deg);
        }
        
        .perspective-laptop-closed {
          transform: perspective(2000px) rotateX(-90deg);
        }
      `}</style>
    </section>
  );
};

export default OTP;