import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ENDPOINTS } from '../../api/api';
import toast from 'react-hot-toast';
import { 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Key, 
  Lock, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Fingerprint 
} from 'lucide-react';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(ENDPOINTS.NEW_PASSWORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          password: formData.password,
          token
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Password reset failed');
      }

      toast.success(data.message || 'Password has been reset successfully');
      setIsSuccess(true);
      
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      toast.error(error.message || 'An error occurred during password reset');
      console.error('Password reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Left side - Reset Password Form */}
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
              Create New Password
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Make sure it's secure and easy to remember
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* New Password field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Enter new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                      Must be at least 6 characters long
                    </p>
                  </div>

                  {/* Confirm Password field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Confirm new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        )}
                      </button>
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
                        Updating Password...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Key className="w-4 h-4 mr-2" />
                        Set New Password
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
                    Password Updated!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your password has been reset successfully.
                    <br />
                    Redirecting to login page...
                  </p>
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

      {/* Right side - Password Security Info */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-100 dark:bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10"></div>
        
        <div className="relative h-full p-12 flex flex-col justify-between">
          {/* Top Section */}
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Strong
                <div className="relative inline-block ml-3">
                  <span className="text-blue-500">Security</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
                </div>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Create a strong password to keep your account secure and protected.
              </p>
            </div>
          </div>

          {/* Password Guidelines */}
          <div className="space-y-6 mt-12">
            {[
              {
                icon: <Lock className="w-8 h-8 text-blue-500" />,
                title: "Strong Password Tips",
                items: [
                  "Use at least 6 characters",
                  "Mix uppercase and lowercase letters",
                  "Include numbers and symbols",
                  "Avoid common words or phrases"
                ]
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-500" />,
                title: "Security Best Practices",
                items: [
                  "Never share your password",
                  "Use unique passwords for each account",
                  "Enable two-factor authentication",
                  "Update passwords regularly"
                ]
              }
            ].map((section, index) => (
              <div 
                key={index}
                className="p-6 bg-white/90 dark:bg-[#111111]/90 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Note */}
          <div className="mt-12 p-6 bg-white/80 dark:bg-[#111111]/80 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-[#1A1A1A]">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Important Note
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  After setting your new password, you'll need to use it to log in to your account. 
                  Make sure to remember it or store it securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;