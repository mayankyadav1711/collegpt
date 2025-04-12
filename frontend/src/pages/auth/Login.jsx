import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";

const Login = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-indigo-500" />,
      title: "Xclusive Notes",
      description:
        "Comprehensive notes with entertaining memes for enhanced engagement",
    },
    {
      icon: <FileText className="w-10 h-10 text-indigo-500" />,
      title: "Handy Cheat Sheets",
      description:
        "Quick reference guides for essential information and key concepts",
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-500" />,
      title: "Engaging Community",
      description:
        "Exchange ideas and collaborate with a supportive community of learners",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-indigo-500" />,
      title: "Learning Guides",
      description:
        "Detailed roadmaps to master challenging topics and concepts",
    },
  ];

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

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

    // Validate form
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(ENDPOINTS.SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login");
      }

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

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rotate-6 transform flex items-center justify-center">
                  <Sparkle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-300 animate-pulse delay-150" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Sign in to continue your learning journey
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign in
                  </span>
                )}
              </button>
            </form>

            {/* Register link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Features Showcase */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative w-full h-full flex items-center justify-center p-12">
          <div className="max-w-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Prepared Together
              </h2>
              <p className="text-indigo-100 text-lg">
                Join our community and revolutionize your academic journey with
                engaging resources and supportive peers.
              </p>
            </div>

            {/* Features slider */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="absolute -top-2 -right-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium text-white">
                Features
              </div>

              <div className="h-64 relative">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center text-center 
                      ${
                        index === currentFeature
                          ? "opacity-100 translate-x-0"
                          : index < currentFeature
                          ? "opacity-0 -translate-x-8"
                          : "opacity-0 translate-x-8"
                      }`}
                  >
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-indigo-100">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Feature indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFeature
                        ? "bg-white w-6"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial/social proof */}
            <div className="mt-8 flex items-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <p className="text-sm">
                Trusted by 10,000+ students from 50+ universities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for patterns and animations */}
      <style jsx global>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .bg-size-200 {
          background-size: 200% 100%;
        }

        .bg-pos-0 {
          background-position: 0% 0%;
        }

        .bg-pos-100 {
          background-position: 100% 0%;
        }
      `}</style>
    </div>
  );
};

export default Login;
