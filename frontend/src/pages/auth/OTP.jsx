import { useState, useEffect, React } from "react";
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
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef());

  // Handle countdown for resend button
  useEffect(() => {
    if (countdown > 0 && resendDisabled) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  const handleOTPChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);

    // Auto-focus to the next input
    if (value && index < 5) {
      inputRefs[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].focus();
    }

    // Handle left arrow key
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].focus();
    }

    // Handle right arrow key
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs[index + 1].focus();
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
      inputRefs[5].focus();
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

      if (!response.ok) {
        throw new Error(data.error || "OTP verification failed");
      }

      if (data.token && data.user) {
        toast.success("OTP verification successful!");
        navigate("/login");
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
      // Use the signup endpoint with the same email to resend OTP
      // In a real app, you might want a dedicated resend-OTP endpoint
      const response = await fetch(ENDPOINTS.SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend OTP");
      }

      toast.success("OTP has been resent. Please check your email");
      setResendDisabled(true);
      setCountdown(60);
    } catch (error) {
      toast.error(error.message || "An error occurred while resending OTP");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Left side - OTP Verification */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <img
              src="/logo.svg"
              alt="Logo"
              className="mx-auto h-12 w-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Email Verification
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <p className="text-sm">We've sent a code to {userEmail}</p>
            </div>
          </div>

          {/* OTP Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
                    Enter the 6-digit verification code
                  </label>

                  <div
                    className="flex justify-center gap-3"
                    onPaste={handlePaste}
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs[index] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOTPChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-xl font-semibold 
                                 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] 
                                 rounded-lg text-gray-900 dark:text-white 
                                 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-all"
                        autoComplete="off"
                      />
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 
                           dark:bg-blue-500 dark:hover:bg-blue-600 text-white 
                           rounded-lg font-medium transition-all duration-200 
                           flex items-center justify-center focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                           focus:ring-offset-white dark:focus:ring-offset-[#111111] 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
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
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Verify Email
                    </div>
                  )}
                </button>

                {/* Resend OTP */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Didn't receive the code?
                  </p>
                  <button
                    onClick={handleResendOTP}
                    disabled={resendDisabled}
                    className={`mt-2 px-4 py-2 text-sm font-medium text-blue-500 
                              hover:text-blue-600 dark:text-blue-400 
                              disabled:opacity-50 disabled:cursor-not-allowed 
                              flex items-center justify-center mx-auto`}
                  >
                    <RefreshCw
                      className={`h-4 w-4 mr-2 ${
                        !resendDisabled && "animate-spin"
                      }`}
                    />
                    {resendDisabled ? `Resend in ${countdown}s` : "Resend code"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Security Info */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-100 dark:bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10"></div>

        <div className="relative h-full p-12 flex flex-col justify-between">
          {/* Top Section */}
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Secure Your
                <div className="relative inline-block ml-3">
                  <span className="text-blue-500">Account</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
                </div>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We take security seriously. Email verification helps us keep
                your account safe and protected.
              </p>
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Account Security",
                desc: "Two-factor authentication keeps your account protected",
              },
              {
                icon: <Lock className="w-8 h-8 text-blue-500" />,
                title: "Data Protection",
                desc: "Your information is encrypted and secure",
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-blue-500" />,
                title: "Fraud Prevention",
                desc: "Email verification helps prevent unauthorized access",
              },
              {
                icon: <Mail className="w-8 h-8 text-blue-500" />,
                title: "Verified Communications",
                desc: "Receive important updates at your verified email",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 dark:bg-[#111111]/90 rounded-xl backdrop-blur-sm"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Section - Trust Indicators */}
          <div className="mt-12 p-6 bg-white/80 dark:bg-[#111111]/80 rounded-xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Trusted Security
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Protected by industry-leading security protocols
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
