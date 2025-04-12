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
  Terminal,
  Code,
  Compass,
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
      icon: <Terminal className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      title: "Smart Learning Platform",
      description: "Advanced learning tools powered by cutting-edge technology",
    },
    {
      icon: <Code className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      title: "Interactive Resources",
      description: "Hands-on learning with practical examples and exercises",
    },
    {
      icon: <Compass className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      title: "Guided Learning Paths",
      description: "Structured curriculum designed by industry experts",
    },
  ];

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
      const response = await fetch(ENDPOINTS.SIGN_IN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

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

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Left side - Login Form */}
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
              Welcome back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Login Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
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

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                               border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                               text-gray-900 dark:text-white placeholder-gray-500
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                               transition-all"
                      placeholder="••••••••"
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
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 
                             bg-gray-50 dark:bg-[#1A1A1A] text-blue-500 
                             focus:ring-blue-500 focus:ring-offset-white 
                             dark:focus:ring-offset-[#111111]"
                  />
                  <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
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
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign in
                    </div>
                  )}
                </button>
              </form>

              {/* Register Link */}
              <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Features */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-100 dark:bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10"></div>

        <div className="relative h-full p-12 flex flex-col justify-between">
          {/* Top Section */}
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Your Gateway to
                <div className="relative inline-block ml-3">
                  <span className="text-blue-500">Excellence</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
                </div>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Join thousands of students who are already transforming their
                learning journey.
              </p>
            </div>

           
          </div>

          {/* Masonry Grid */}
          <div className="mt-12 grid grid-cols-3 gap-4 auto-rows-[120px]">
            {[
              {
                img: "https://images.unsplash.com/photo-1568737142757-2e51c3b80ddb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                span: "row-span-2",
                title: "Interactive Learning",
              },
              {
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format",
                span: "col-span-2",
                title: "Study Groups",
              },
              {
                img: "https://images.unsplash.com/photo-1613141410841-22165ed73a08?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                span: "col-span-2",
                title: "Resources",
              },
              {
                img: "https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                span: "col-span-2 row-span-2",
                title: "Live Sessions",
              },
              {
                img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format",
                span: "col-span-1 row-span-2",
                title: "Mentorship",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative group ${item.span} overflow-hidden rounded-xl`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Trust Indicators */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i + 1}`}
                    alt={`User ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111111] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium">
                  Joined by 1,000+ students this week
                </span>
              </div>
            </div>

            {/* Dynamic Time Display */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div
                className="px-3 py-1 rounded-full bg-white/80 dark:bg-[#111111]/80 backdrop-blur-sm
                      border border-gray-200 dark:border-[#1A1A1A]"
              >
                <time>{new Date().toLocaleTimeString()}</time>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-8 right-8 flex flex-col space-y-4">
            {[
              { label: "Top Rated", icon: "⭐" },
              { label: "24/7 Support", icon: "🎯" },
            ].map((badge, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-white/90 dark:bg-[#111111]/90 
                   backdrop-blur-sm border border-gray-200 dark:border-[#1A1A1A]
                   flex items-center space-x-2 shadow-lg"
              >
                <span>{badge.icon}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
