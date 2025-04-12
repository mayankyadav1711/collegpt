import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  GraduationCap
} from 'lucide-react';

const defaultProfilePic = "https://www.collegpt.com/static/media/60111.c6884fb1e4065b2484d9.webp";

const Register = () => {
  const navigate = useNavigate();
  
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const MAX_FILE_SIZE_MB = 1;
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
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
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "studymate");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dkyrtfk1u/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "Failed to upload image");
      }
      
      return data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.password || !formData.c_password || 
        !formData.university || !formData.gender) {
      toast.error('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Validate email format
    if (!/^([^\\s@]+@gmail\\.com|[^@]+@ldrp\\.ac\\.in)$/.test(formData.email)) {
      toast.error('Please enter a valid Gmail or LDRP email address');
      setIsLoading(false);
      return;
    }

    // Validate password match
    if (formData.password !== formData.c_password) {
      toast.error('Passwords do not match');
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
        profilePic: imageUrl,
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-[#0A0A0A] transition-colors duration-200">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <img
              src="/logo.svg"
              alt="Logo"
              className="mx-auto h-12 w-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of students in their learning journey
            </p>
          </div>

          {/* Registration Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        name="email"
                        type="email"
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

                  {/* Password fields */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
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
                        placeholder="Create password"
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

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        name="c_password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.c_password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Confirm password"
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

                  {/* University field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      University <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <School className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <select
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        required
                      >
                        <option value="">Select University</option>
                        <option value="LDRP Institute of Technology and Research, Gandhinagar">LDRP Institute of Technology and Research</option>
                        <option value="Gujarat Technological University">Gujarat Technological University</option>
                        <option value="Nirma University of Science and Technology">Nirma University</option>
                        <option value="Ahmedabad University">Ahmedabad University</option>
                      </select>
                    </div>
                  </div>

                  {/* Semester field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Semester <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <select
                        name="sem"
                        value={formData.sem}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <option key={sem} value={sem}>
                            Semester {sem}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Gender field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="LGBTQIA2S+">LGBTQIA2S+</option>
                      </select>
                    </div>
                  </div>

                  {/* Profile Picture Upload */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Profile Picture
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                        <img
                          src={profileImage ? URL.createObjectURL(profileImage) : defaultProfilePic}
                          alt="Profile Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 
                                        dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium
                                        text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1A1A1A]
                                        hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                          <Upload className="mr-2 h-5 w-5" />
                          Choose Image
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleImageChange}
                            accept="image/jpeg,image/jpg,image/png"
                          />
                        </label>
                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          JPG, JPEG or PNG (max. {MAX_FILE_SIZE_MB}MB)
                        </p>
                      </div>
                    </div>
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
                      Creating account...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Create Account
                    </div>
                  )}
                </button>

                {/* Sign In Link */}
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Features */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-100 dark:bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10"></div>
        
        <div className="relative h-full p-12 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Begin Your Learning
                <div className="relative inline-block ml-3">
                  <span className="text-blue-500">Journey</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/20 rounded-full"></div>
                </div>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Join our community of learners and unlock your potential with interactive resources and expert guidance.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i + 1}`}
                    alt={`User ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111111]"
                  />
                ))}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium">
                  Join 1,000+ students this week
                </span>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            {[
              {
                icon: <Sparkle className="w-8 h-8 text-blue-500" />,
                title: "Interactive Learning",
                desc: "Engage with dynamic content and real-world projects"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Community Support",
                desc: "Connect with peers and mentors for guidance"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-500" />,
                title: "Rich Resources",
                desc: "Access comprehensive study materials and guides"
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
                title: "Expert Teachers",
                desc: "Learn from industry professionals and academics"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/90 dark:bg-[#111111]/90 rounded-xl backdrop-blur-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Register;