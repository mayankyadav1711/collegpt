import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { ENDPOINTS, fetchWithAuth, BASE_URL } from "../../api/api";
import toast from "react-hot-toast";
import {
  Save,
  Edit,
  Eye,
  EyeOff,
  Mail,
  User,
  Briefcase,
  Calendar,
  Link as LinkIcon,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
  Code,
  Award,
  Heart,
  Target,
  Upload,
} from "lucide-react";

const Profile = () => {
  const { auth, theme } = useAppContext();
  const navigate = useNavigate();

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Edit mode toggle
  const [editingMode, setEditingMode] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    sem: 1,
    gender: "",
    birthdate: "",
    linkedinURL: "",
    githubURL: "",
    twitterURL: "",
    resumeURL: "",
    instaURL: "",
    codingURL: "",
    Roles: [],
    Skills: [],
    aboutMe: "",
    cpi: "",
    hobbies: [],
    goals: "",
  });

  // Profile image
  const [profileImage, setProfileImage] = useState(null);
  const [previousPic, setPreviousPic] = useState(null);

  // Dropdowns state
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const [showRolesDropdown, setShowRolesDropdown] = useState(false);

  // Available options for dropdowns
  const availableSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Machine Learning",
    "Artificial Intelligence",
    "C",
    "C++",
    "PHP",
    "React Native",
  ];

  const availableRoles = [
    "MERN Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Student",
    "Faculty",
  ];

  // Validation constants
  const MAX_FILE_SIZE_MB = 1;
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  // Regex patterns for URL validation
  const urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/;
  const linkedinRegex =
    /^(https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+)\/?$/;
  const codingRegex =
    /^(https:\/\/(www\.)?)?(leetcode\.com|codechef\.com|codeforces\.com|hackerearth\.com|hackerank\.com|codingstudio\.com|codingninja\.com|topcoder\.com|coderbyte\.com|codewars\.com|geeksforgreeks\.org)\/[a-zA-Z0-9_-]+\/?$/;
  const instagramRegex =
    /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?(?:\?.*)?$/;
  const twitterRegex =
    /^(https?:\/\/)?(www\.)?twitter\.com\/([a-zA-Z0-9_]+)\/?$/;

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!auth.user || !auth.user._id) {
        navigate("/login");
        return;
      }

      try {
        setIsLoading(true);
        const data = await fetchWithAuth(ENDPOINTS.VIEW_PROFILE(auth.user._id));

        // Update form data with fetched profile
        setFormData({
          name: data.name || "",
          email: data.email || "",
          university: data.university || "",
          sem: data.sem || 1,
          gender: data.gender || "",
          birthdate: data.birthdate || "",
          linkedinURL: data.linkedinURL || "",
          githubURL: data.githubURL || "",
          twitterURL: data.twitterURL || "",
          resumeURL: data.resumeURL || "",
          instaURL: data.instaURL || "",
          codingURL: data.codingURL || "",
          Roles: data.Roles || ["Student"],
          Skills: data.Skills || [],
          aboutMe: data.aboutMe || "",
          cpi: data.cpi || "",
          hobbies: data.hobbies || [],
          goals: data.goals || "",
        });

        setPreviousPic(data.profilePic || "");
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [auth.user, navigate]);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "hobbies") {
      setFormData((prev) => ({
        ...prev,
        hobbies: value.split(",").map((hobby) => hobby.trim()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handlers for skills
  const handleSkillSelect = (skill) => {
    if (!formData.Skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        Skills: [...prev.Skills, skill],
      }));
    }
    setShowSkillsDropdown(false);
  };

  const handleSkillRemove = (skill) => {
    setFormData((prev) => ({
      ...prev,
      Skills: prev.Skills.filter((item) => item !== skill),
    }));
  };

  // Handlers for roles
  const handleRoleSelect = (role) => {
    if (!formData.Roles.includes(role)) {
      setFormData((prev) => ({
        ...prev,
        Roles: [...prev.Roles, role],
      }));
    }
    setShowRolesDropdown(false);
  };

  const handleRoleRemove = (role) => {
    // Don't allow removing "Student" if it's the only role
    if (role === "Student" && formData.Roles.length === 1) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      Roles: prev.Roles.filter((item) => item !== role),
    }));
  };

  // Handler for profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024);

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      toast.error("Only JPG, JPEG, and PNG image files are allowed.");
      setProfileImage(null);
      e.target.value = "";
    } else if (fileSizeMB > MAX_FILE_SIZE_MB) {
      toast.error(`File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB.`);
      setProfileImage(null);
      e.target.value = "";
    } else {
      setProfileImage(file);
    }
  };

  // URL validation
  const isValidURL = (url, regex) => {
    return !url || regex.test(url);
  };

  const validateURLs = () => {
    const urls = [
      { url: formData.githubURL, regex: githubRegex, name: "GitHub" },
      { url: formData.linkedinURL, regex: linkedinRegex, name: "LinkedIn" },
      { url: formData.codingURL, regex: codingRegex, name: "coding profile" },
      { url: formData.instaURL, regex: instagramRegex, name: "Instagram" },
      { url: formData.twitterURL, regex: twitterRegex, name: "Twitter" },
    ];

    for (const { url, regex, name } of urls) {
      if (url && !isValidURL(url, regex)) {
        toast.error(`Invalid ${name} URL`);
        return false;
      }
    }
    return true;
  };

  // Image upload to Cloudinary
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "studymate");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkyrtfk1u/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.error) {
        toast.error(data.error.message || "Failed to upload image");
        return null;
      }

      return data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
      return null;
    }
  };

  // Edit mode toggle
  const handleEditClick = () => {
    setEditingMode(true);
  };

  // Save profile changes
  const handleSaveClick = async () => {
    if (!validateURLs()) {
      return;
    }

    setIsLoading(true);
    let imageUrl = previousPic;

    try {
      // Upload image if a new one was selected
      if (profileImage) {
        imageUrl = await handleImageUpload(profileImage);
        if (!imageUrl) {
          setIsLoading(false);
          return;
        }
      }

      // Prepare data payload
      const profileData = {
        _id: auth.user._id,
        ...formData,
        profilepic: imageUrl,
      };

      // Update profile
      const UPDATE_PROFILE_ENDPOINT = `${BASE_URL}/update-profile`;
      const response = await fetchWithAuth(UPDATE_PROFILE_ENDPOINT, {
        method: "PUT",
        body: JSON.stringify(profileData),
      });

      if (response) {
        toast.success("Profile updated successfully");

        // Update global state
        auth.updateProfile({
          ...response,
          profilePic: imageUrl,
        });

        setPreviousPic(imageUrl);
        setEditingMode(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-12 w-12 text-blue-500 mb-3"
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
          <p className="text-gray-600 dark:text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
        <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {editingMode ? "Update Profile" : "Your Profile"}
            </h1>
            <button
              onClick={editingMode ? handleSaveClick : handleEditClick}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
            >
              {editingMode ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Profile Image & Basic Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative group mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-[#1A1A1A] shadow-md">
                    <img
                      src={
                        profileImage
                          ? URL.createObjectURL(profileImage)
                          : previousPic || "https://via.placeholder.com/150"
                      }
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {editingMode && (
                    <label
                      htmlFor="profile-image"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-white">
                        <Upload className="w-6 h-6 mb-1" />
                        <span className="text-sm">Upload Photo</span>
                      </div>
                      <input
                        type="file"
                        id="profile-image"
                        className="hidden"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}
                </div>

                {/* Name & Email (always visible) */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">
                  {formData.name || "Your Name"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
                  {formData.email || "email@example.com"}
                </p>

                {/* Roles */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {formData.Roles?.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="w-full space-y-3 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Connect
                  </h3>

                  {/* Social media links displayed in view mode */}
                  {!editingMode && (
                    <div className="space-y-3">
                      {formData.linkedinURL && (
                        <a
                          href={formData.linkedinURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      )}

                      {formData.githubURL && (
                        <a
                          href={formData.githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      )}

                      {formData.twitterURL && (
                        <a
                          href={formData.twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </a>
                      )}

                      {formData.instaURL && (
                        <a
                          href={formData.instaURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      )}

                      {formData.codingURL && (
                        <a
                          href={formData.codingURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          Coding Profile
                        </a>
                      )}

                      {formData.resumeURL && (
                        <a
                          href={formData.resumeURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Resume
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Personal Information Section */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    {editingMode ? (
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                    border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                    text-gray-900 dark:text-white placeholder-gray-500
                                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                    transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {formData.name}
                      </p>
                    )}
                  </div>

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
                        disabled
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all cursor-not-allowed opacity-70"
                      />
                    </div>
                  </div>

                  {/* University/College */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      University/College
                    </label>
                    {editingMode ? (
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <select
                          name="university"
                          value={formData.university}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                    border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                    text-gray-900 dark:text-white placeholder-gray-500
                                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                    transition-all"
                        >
                          <option value="">-- Select a university --</option>
                          <option value="A. D. Patel Institute of Technology, Vallabh Vidyanagar">
                            A. D. Patel Institute of Technology
                          </option>
                          <option value="Ahmedabad University">
                            Ahmedabad University
                          </option>
                          <option value="CEPT University">
                            CEPT University
                          </option>
                          <option value="Charotar University of Science and Technology">
                            Charotar University of Science and Technology
                          </option>
                          <option value="Darshan University, Rajkot">
                            Darshan University, Rajkot
                          </option>
                          <option value="GLS University">GLS University</option>
                          <option value="LDRP Institute of Technology and Research, Gandhinagar">
                            LDRP Institute of Technology and Research
                          </option>
                          <option value="Gujarat Technological University">
                            Gujarat Technological University
                          </option>
                          <option value="Nirma University of Science and Technology">
                            Nirma University
                          </option>
                        </select>
                      </div>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {formData.university || "Not specified"}
                      </p>
                    )}
                  </div>

                  {/* Semester */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Current Semester
                    </label>
                    {editingMode ? (
                      <input
                        type="number"
                        name="sem"
                        min="1"
                        max="8"
                        value={formData.sem}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        Semester {formData.sem}
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Gender
                    </label>
                    {editingMode ? (
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefernottosay">
                          Prefer Not To Say
                        </option>
                      </select>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {formData.gender || "Not specified"}
                      </p>
                    )}
                  </div>

                  {/* Birthdate */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Birth Date
                    </label>
                    {editingMode ? (
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="date"
                          name="birthdate"
                          value={formData.birthdate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                   border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                   text-gray-900 dark:text-white placeholder-gray-500
                                   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                   transition-all"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {formData.birthdate
                          ? formatDate(formData.birthdate)
                          : "Not specified"}
                      </p>
                    )}
                  </div>

                  {/* CPI */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      CPI
                    </label>
                    {editingMode ? (
                      <div className="relative">
                        <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="number"
                          name="cpi"
                          min="0"
                          max="10"
                          step="0.01"
                          value={formData.cpi}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                   border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                   text-gray-900 dark:text-white placeholder-gray-500
                                   focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                   transition-all"
                          placeholder="Enter your CPI"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {formData.cpi || "Not specified"}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Skills and About Section */}
              <section className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                  Skills & Biography
                </h3>

                {/* About Me */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    About Me
                  </label>
                  {editingMode ? (
                    <textarea
                      name="aboutMe"
                      value={formData.aboutMe}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1A1A1A] 
                                border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                text-gray-900 dark:text-white placeholder-gray-500
                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                transition-all"
                      placeholder="Write something about yourself..."
                    />
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {formData.aboutMe || "No information provided."}
                    </p>
                  )}
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Skills
                  </label>

                  {editingMode ? (
                    <div className="relative">
                      <div
                        onClick={() =>
                          setShowSkillsDropdown(!showSkillsDropdown)
                        }
                        className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white cursor-pointer"
                      >
                        <span>Select Skills</span>
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {showSkillsDropdown && (
                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#2A2A2A] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {availableSkills.map((skill) => (
                            <div
                              key={skill}
                              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#222222] cursor-pointer text-gray-900 dark:text-white"
                              onClick={() => handleSkillSelect(skill)}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.Skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-full text-sm text-gray-800 dark:text-gray-200 flex items-center"
                      >
                        <span>{skill}</span>
                        {editingMode && (
                          <button
                            type="button"
                            onClick={() => handleSkillRemove(skill)}
                            className="ml-2 text-gray-500 hover:text-red-500"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}

                    {formData.Skills.length === 0 && !editingMode && (
                      <p className="text-gray-500 dark:text-gray-400">
                        No skills added yet.
                      </p>
                    )}
                  </div>
                </div>

                {/* Roles (in edit mode) */}
                {editingMode && (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Roles
                    </label>

                    <div className="relative">
                      <div
                        onClick={() => setShowRolesDropdown(!showRolesDropdown)}
                        className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white cursor-pointer"
                      >
                        <span>Select Roles</span>
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {showRolesDropdown && (
                        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#2A2A2A] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {availableRoles.map((role) => (
                            <div
                              key={role}
                              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#222222] cursor-pointer text-gray-900 dark:text-white"
                              onClick={() => handleRoleSelect(role)}
                            >
                              {role}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.Roles.map((role) => (
                        <div
                          key={role}
                          className={`px-3 py-1.5 ${
                            role === "Student" && formData.Roles.length === 1
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                              : "bg-gray-100 dark:bg-[#1A1A1A] text-gray-800 dark:text-gray-200"
                          } border border-gray-200 dark:border-[#2A2A2A] rounded-full text-sm flex items-center`}
                        >
                          <span>{role}</span>
                          {editingMode &&
                            !(
                              role === "Student" && formData.Roles.length === 1
                            ) && (
                              <button
                                type="button"
                                onClick={() => handleRoleRemove(role)}
                                className="ml-2 text-gray-500 hover:text-red-500"
                              >
                                ×
                              </button>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hobbies */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Hobbies
                  </label>
                  {editingMode ? (
                    <div className="relative">
                      <Heart className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        name="hobbies"
                        value={formData.hobbies.join(", ")}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                text-gray-900 dark:text-white placeholder-gray-500
                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                transition-all"
                        placeholder="Reading, Writing, Gaming, etc. (comma separated)"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300">
                      {formData.hobbies && formData.hobbies.length > 0
                        ? formData.hobbies.join(", ")
                        : "No hobbies specified."}
                    </p>
                  )}
                </div>

                {/* Goals */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Goals/Interests
                  </label>
                  {editingMode ? (
                    <div className="relative">
                      <Target className="absolute left-3 top-10 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        rows="3"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-[#1A1A1A] 
                                border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                text-gray-900 dark:text-white placeholder-gray-500
                                focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                transition-all"
                        placeholder="Share your career goals or interests..."
                      />
                    </div>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {formData.goals || "No goals specified."}
                    </p>
                  )}
                </div>
              </section>

              {/* Social/Professional Links Section - Edit Mode Only */}
              {editingMode && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                    Links & Social Media
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* LinkedIn */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        LinkedIn URL
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="linkedinURL"
                          value={formData.linkedinURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="https://www.linkedin.com/in/username"
                        />
                      </div>
                    </div>

                    {/* GitHub */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        GitHub URL
                      </label>
                      <div className="relative">
                        <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="githubURL"
                          value={formData.githubURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>

                    {/* Twitter */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Twitter URL
                      </label>
                      <div className="relative">
                        <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="twitterURL"
                          value={formData.twitterURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="https://twitter.com/username"
                        />
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Instagram URL
                      </label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="instaURL"
                          value={formData.instaURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="https://instagram.com/username"
                        />
                      </div>
                    </div>

                    {/* Coding Profiles */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Coding Profile URL
                      </label>
                      <div className="relative">
                        <Code className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="codingURL"
                          value={formData.codingURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="LeetCode, CodeChef, HackerRank, etc."
                        />
                      </div>
                    </div>

                    {/* Resume */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Resume URL
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="url"
                          name="resumeURL"
                          value={formData.resumeURL}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                  border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                  text-gray-900 dark:text-white placeholder-gray-500
                                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                  transition-all"
                          placeholder="Link to your resume"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Save Button for Edit Mode */}
          {editingMode && (
            <div className="mt-10 flex justify-end">
              <button
                onClick={handleSaveClick}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200 font-medium shadow-md"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
