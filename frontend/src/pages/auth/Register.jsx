import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../api/api';
import toast from 'react-hot-toast';
import { Eye, EyeOff, UserPlus, Upload } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create an Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Join ColleGPT and elevate your learning experience</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your full name"
                maxLength="50"
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
                maxLength="50"
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Create a password"
                  maxLength="20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  tabIndex="-1"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div>
              <label htmlFor="c_password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="c_password"
                  name="c_password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.c_password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Confirm your password"
                  maxLength="20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  tabIndex="-1"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* University field */}
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                University/College <span className="text-red-500">*</span>
              </label>
              <select
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">-- Select a university --</option>
                <option value="LDRP Institute of Technology and Research, Gandhinagar">LDRP Institute of Technology and Research, Gandhinagar</option>
                <option value="Gujarat Technological University">Gujarat Technological University</option>
                <option value="Nirma University of Science and Technology">Nirma University of Science and Technology</option>
                <option value="Ahmedabad University">Ahmedabad University</option>
                {/* Add more university options as needed */}
              </select>
            </div>

            {/* Semester field */}
            <div>
              <label htmlFor="sem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Semester <span className="text-red-500">*</span>
              </label>
              <select
                id="sem"
                name="sem"
                required
                value={formData.sem}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

            {/* Gender field */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">-- Select gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="LGBTQIA2S+">LGBTQIA2S+</option>
              </select>
            </div>

            {/* Profile picture */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Profile Picture
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                  <img
                    src={profileImage ? URL.createObjectURL(profileImage) : defaultProfilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="profile-upload" className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <Upload className="mr-2 h-5 w-5" />
                    Choose Image
                  </label>
                  <input
                    id="profile-upload"
                    name="profileImage"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    JPG, JPEG or PNG, Max {MAX_FILE_SIZE_MB}MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit button */}
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
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                <UserPlus className="mr-2 h-4 w-4" />
                Create Account
              </span>
            )}
          </button>
        </form>

        {/* Login link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;