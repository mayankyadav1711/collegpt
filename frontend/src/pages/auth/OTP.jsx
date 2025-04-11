import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ENDPOINTS } from '../../api/api';
import toast from 'react-hot-toast';
import { Check, RefreshCw } from 'lucide-react';

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get("email") || "";
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(60);
  const inputRefs = Array(6).fill(0).map(() => useState(null)[0]);

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
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].focus();
    }

    // Handle left arrow key
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].focus();
    }

    // Handle right arrow key
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Check if pasted data is numeric and of correct length
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      
      // Focus the last input
      inputRefs[5].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const otpValue = otp.join('');
    
    // Validate OTP
    if (otpValue.length !== 6 || !/^\d{6}$/.test(otpValue)) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(ENDPOINTS.VERIFY_OTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: userEmail, 
          otp: otpValue 
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'OTP verification failed');
      }

      if (data.token && data.user) {
        toast.success('OTP verification successful!');
        navigate('/login');
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred during OTP verification');
      console.error('OTP verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendDisabled) return;
    
    if (!userEmail) {
      toast.error('Email address is missing');
      return;
    }

    try {
      // Use the signup endpoint with the same email to resend OTP
      // In a real app, you might want a dedicated resend-OTP endpoint
      const response = await fetch(ENDPOINTS.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userEmail })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend OTP');
      }

      toast.success('OTP has been resent. Please check your email');
      setResendDisabled(true);
      setCountdown(60);
    } catch (error) {
      toast.error(error.message || 'An error occurred while resending OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Verify Your Email</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We've sent a 6-digit code to {userEmail}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
              Enter the verification code
            </label>
            
            <div 
              className="flex justify-center gap-2 sm:gap-4" 
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs[index] = el}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleOTPChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-semibold border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  autoComplete="off"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Verify OTP
              </span>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Didn't receive the code?{' '}
            <button
              onClick={handleResendOTP}
              disabled={resendDisabled}
              className={`font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto mt-2 ${resendDisabled ? '' : 'hover:underline'}`}
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${resendDisabled ? '' : 'animate-spin'}`} />
              {resendDisabled ? `Resend OTP (${countdown}s)` : 'Resend OTP'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;