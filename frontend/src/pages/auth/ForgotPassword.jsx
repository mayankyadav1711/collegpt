import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../../api/api';
import toast from 'react-hot-toast';
import { Mail, ArrowLeft, Lock, Shield, AlertCircle, CheckCircle, KeyRound } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(ENDPOINTS.RESET_PASSWORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Password reset request failed');
      }

      toast.success(data.message || 'Reset link sent successfully. Please check your email');
      setIsSubmitted(true);
    } catch (error) {
      toast.error(error.message || 'An error occurred during password reset request');
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Left side - Password Reset Form */}
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
              Reset Password
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Don't worry, we'll help you recover your password
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="name@example.com"
                        required
                      />
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
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Reset Link...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <KeyRound className="w-4 h-4 mr-2" />
                        Send Reset Link
                      </div>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/10 mb-6">
                    <CheckCircle className="h-8 w-8 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Check your inbox
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We've sent a password reset link to
                    <br />
                    <span className="font-medium text-blue-500">{email}</span>
                  </p>
                  <div className="p-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Didn't receive the email? Check your spam folder or
                      <button 
                        onClick={handleSubmit}
                        className="text-blue-500 hover:text-blue-600 font-medium ml-1"
                      >
                        try again
                      </button>
                    </p>
                  </div>
                </div>
              )}

              {/* Back to Login */}
              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Password Recovery Info */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-100 dark:bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10"></div>
        
        <div className="relative h-full p-12 flex flex-col justify-between">
          {/* Top Section */}
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Password
                <div className="relative inline-block ml-3">
                  <span className="text-blue-500">Recovery</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
                </div>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Follow our secure password recovery process to regain access to your account.
              </p>
            </div>
          </div>

          {/* Recovery Steps */}
          <div className="space-y-6 mt-12">
            {[
              {
                icon: <Mail className="w-8 h-8 text-blue-500" />,
                title: "1. Enter Email",
                desc: "Provide your registered email address"
              },
              {
                icon: <Lock className="w-8 h-8 text-blue-500" />,
                title: "2. Check Inbox",
                desc: "Click the reset link in your email"
              },
              {
                icon: <KeyRound className="w-8 h-8 text-blue-500" />,
                title: "3. Reset Password",
                desc: "Create a new secure password"
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "4. Secure Access",
                desc: "Log in with your new password"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/90 dark:bg-[#111111]/90 rounded-xl backdrop-blur-sm"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Note */}
          <div className="mt-12 p-6 bg-white/80 dark:bg-[#111111]/80 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-[#1A1A1A]">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Security Note
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  For your security, the password reset link will expire in 30 minutes. 
                  Make sure to complete the process within this timeframe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;