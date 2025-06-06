import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Upload,
  FileText,
  Link as LinkIcon,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  GraduationCap,
  Briefcase,
  Code,
  Clock,
  Library,
  Palette,
  BookOpen,
  Award,
  ArrowLeft,
  Heart,
  Star,
  Send,
  Sparkles,
  User,
  ChevronRight,
  MessageSquare,
  Edit,
  Image,
  Video,
  Music,
  FileCode,
  Users,
  Layers,
  ExternalLink
} from "lucide-react";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { ENDPOINTS, fetchWithAuth } from "../../api/api";

const contributionTypes = [
  {
    id: "college_notes",
    label: "College Notes",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Share lecture notes, study guides, or exam prep materials",
    color: "blue"
  },
  {
    id: "gate_notes",
    label: "GATE Notes",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Contribute GATE exam preparation materials and resources",
    color: "purple"
  },
  {
    id: "placement",
    label: "Placement Materials",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Interview prep, resume guides, or company-specific resources",
    color: "green"
  },
  {
    id: "web_dev",
    label: "Web Development",
    icon: <Code className="w-5 h-5" />,
    description: "Tutorials, code samples, or project templates",
    color: "indigo"
  },
  {
    id: "reference",
    label: "Reference Books",
    icon: <Library className="w-5 h-5" />,
    description: "Reading lists, book summaries, or resource compilations",
    color: "amber"
  },
  {
    id: "design",
    label: "Design Resources",
    icon: <Palette className="w-5 h-5" />,
    description: "UI/UX resources, graphics, or design templates",
    color: "rose"
  },
  {
    id: "exam_prep",
    label: "Exam Preparation",
    icon: <Clock className="w-5 h-5" />,
    description: "Question banks, practice tests, or exam strategies",
    color: "teal"
  },
  {
    id: "other",
    label: "Other",
    icon: <Layers className="w-5 h-5" />,
    description: "Any other educational materials or resources",
    color: "gray"
  }
];

const ContributorForm = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Form state
  const [semester, setSemester] = useState("1");
  const [subjectName, setSubjectName] = useState("");
  const [fileLinks, setFileLinks] = useState("");
  const [pdfDescription, setPdfDescription] = useState("");
  const [contributionType, setContributionType] = useState("college_notes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);

  // Handle mouse move for dynamic lighting effect
  const handleMouseMove = (e) => {
    if (formRef.current) {
      const bounds = formRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top
      });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    },
  };

  // Preview handler
  const handlePreview = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    if (!subjectName.trim()) errors.subjectName = "Subject name is required";
    if (!fileLinks.trim()) errors.fileLinks = "File link is required";
    if (!pdfDescription.trim()) errors.pdfDescription = "Description is required";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsPreviewing(true);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!auth.user?._id) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      semester,
      subjectName,
      fileLinks,
      pdfDescription,
      contributionType,
    };

    try {
      const response = await fetchWithAuth(ENDPOINTS.SUBMIT_CONTRIBUTION, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      toast.success("Contribution submitted successfully!");
      setSuccessfulSubmission(true);

      // Reset form
      setSemester("1");
      setSubjectName("");
      setFileLinks("");
      setPdfDescription("");
      setContributionType("college_notes");
      setFormErrors({});
      setIsPreviewing(false);
    } catch (error) {
      toast.error("Failed to submit contribution. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeColor = (typeId) => {
    const type = contributionTypes.find(type => type.id === typeId);
    return type ? type.color : "blue";
  };

  // Render success screen
  if (successfulSubmission) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-full mx-auto flex items-center justify-center mb-8"
          >
            <CheckCircle className="w-14 h-14 text-green-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contribution Submitted Successfully!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto"
          >
            Thank you for contributing to ColleGPT! Your submission will be reviewed by our team shortly. Once approved, you'll be featured on our Wall of Fame!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contributors-wall-of-fame"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all flex items-center gap-2"
            >
              <Award className="w-5 h-5" />
              View Wall of Fame
            </Link>
            
            <button
              onClick={() => {
                setSuccessfulSubmission(false);
                setPdfDescription("");
                setSubjectName("");
                setFileLinks("");
              }}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Submit Another Contribution
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Render preview screen
  if (isPreviewing) {
    const typeColor = getTypeColor(contributionType);
    const selectedType = contributionTypes.find(type => type.id === contributionType);

    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex items-center justify-between"
          >
            <button
              onClick={() => setIsPreviewing(false)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Form
            </button>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Preview Your Contribution</h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 mb-10"
          >
            {/* Header */}
            <div className={`h-20 bg-gradient-to-r from-${typeColor}-500 to-${typeColor === 'blue' ? 'indigo' : typeColor}-600 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTFoMnYxaC0ydi0xem0wIDNoMnYxaC0ydi0xem0tMyAyaDF2MWgtMXYtMXptMCAxaC0xdjFoMVYzN3pNMzQgMzVoMXYxaC0xdi0xem0tMS0xaDF2MWgtMXYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25"></div>
              
              {/* Icon */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg`}>
                  {selectedType && selectedType.icon}
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{subjectName}</h2>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <div className={`px-3 py-1 rounded-full bg-${typeColor}-100 dark:bg-${typeColor}-900/30 text-${typeColor}-700 dark:text-${typeColor}-400 text-sm mr-3`}>
                      {selectedType && selectedType.label}
                    </div>
                    
                    {contributionType === "college_notes" && (
                      <div className="text-sm">
                        Semester {semester}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5 mb-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {pdfDescription}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-5 mb-6 border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                  <LinkIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  Resource Link
                </h3>
                
                <a 
                  href={fileLinks} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all flex items-center"
                >
                  {fileLinks}
                  <ExternalLink className="w-4 h-4 ml-1 flex-shrink-0" />
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-gradient-to-r from-${typeColor}-600 to-${typeColor === 'blue' ? 'indigo' : typeColor}-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Contribution</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => setIsPreviewing(false)}
                  className="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-all flex items-center gap-2"
                >
                  <Edit className="w-5 h-5" />
                  Edit Submission
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Render form
  return (
    <div 
      ref={formRef}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic spotlight effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`,
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-200/20 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-70 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            style={{ opacity, y: translateY }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Upload className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 tracking-wide uppercase">
                Share Knowledge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              <span className="inline-block mr-3">
                Contribute to
              </span>
              <span className="inline-block relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500">
                  ColleGPT
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 dark:from-purple-500/20 dark:to-indigo-500/20 -z-10 transform"></span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Share your knowledge, resources, and expertise to help fellow students succeed in their academic journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contributors-wall-of-fame"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <Award className="w-5 h-5" />
                View Wall of Fame
              </Link>
            </motion.div>
          </motion.div>

          {/* Information Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100/80 dark:border-purple-800/30 rounded-xl p-6 mb-10 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center mb-4">
              <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
              Contribution Guidelines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Share high-quality, accurate, and well-organized materials
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Ensure you have permission to share the content (no copyright violations)
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Use cloud storage services (Google Drive, Dropbox, OneDrive) with proper permissions
                  </span>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-amber-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Submissions are reviewed by our team before being published
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-16"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Upload className="w-5 h-5 mr-2 text-purple-500" />
                Submission Form
              </h2>
              
              <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Star className="w-4 h-4 mr-1 text-amber-500" />
                <span>Required fields</span>
              </div>
            </div>

            <form onSubmit={handlePreview} className="p-6">
              {/* Contribution Type */}
              <motion.div variants={cardVariant} className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <Layers className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Contribution Type <span className="text-red-500">*</span></span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {contributionTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setContributionType(type.id)}
                      className={`
                        cursor-pointer border rounded-lg p-4 transition-all
                        ${
                          contributionType === type.id
                            ? `border-${type.color}-500 bg-${type.color}-50 dark:bg-${type.color}-900/20 dark:border-${type.color}-700`
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }
                      `}
                    >
                      <div
                        className={`
                          w-10 h-10 rounded-lg flex items-center justify-center mb-3
                          ${
                            contributionType === type.id
                              ? `bg-${type.color}-100 dark:bg-${type.color}-800 text-${type.color}-700 dark:text-${type.color}-300`
                              : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                          }
                        `}
                      >
                        {type.icon}
                      </div>
                      <h3
                        className={`text-sm font-medium mb-1 ${
                          contributionType === type.id
                            ? `text-${type.color}-700 dark:text-${type.color}-300`
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {type.label}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {type.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Semester - Show only for college notes */}
              {contributionType === "college_notes" && (
                <motion.div variants={cardVariant} className="mb-6">
                  <label
                    htmlFor="semester"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
                  >
                    <GraduationCap className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Semester <span className="text-red-500">*</span></span>
                  </label>
                  <select
                    id="semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num.toString()}>
                        Semester {num}
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Subject Name */}
              <motion.div variants={cardVariant} className="mb-6">
                <label
                  htmlFor="subjectName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Subject / Topic Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="subjectName"
                  placeholder="Enter subject or topic name"
                  value={subjectName}
                  onChange={(e) => {
                    setSubjectName(e.target.value);
                    if (formErrors.subjectName) {
                      setFormErrors({ ...formErrors, subjectName: undefined });
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.subjectName
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
                    formErrors.subjectName
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-500"
                  } focus:border-transparent transition-colors`}
                />
                {formErrors.subjectName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 flex items-center"
                  >
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {formErrors.subjectName}
                  </motion.p>
                )}
              </motion.div>

              {/* File Links */}
              <motion.div variants={cardVariant} className="mb-6">
                <label
                  htmlFor="fileLinks"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <div className="flex items-center">
                    <LinkIcon className="w-4 h-4 mr-2 text-purple-500" />
                    <span>
                      Upload File Link <span className="text-red-500">*</span>
                    </span>
                    <div className="relative ml-2 group">
                      <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-10">
                        Provide a publicly accessible link to your file from
                        Google Drive, Dropbox, etc.
                      </div>
                    </div>
                  </div>
                </label>
                <div
                  className={`flex border ${
                    formErrors.fileLinks
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg overflow-hidden focus-within:ring-2 ${
                    formErrors.fileLinks
                      ? "focus-within:ring-red-500"
                      : "focus-within:ring-purple-500"
                  } focus-within:border-transparent transition-colors`}
                >
                  <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center px-3">
                    <LinkIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="url"
                    id="fileLinks"
                    placeholder="https://drive.google.com/..."
                    value={fileLinks}
                    onChange={(e) => {
                      setFileLinks(e.target.value);
                      if (formErrors.fileLinks) {
                        setFormErrors({ ...formErrors, fileLinks: undefined });
                      }
                    }}
                    className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
                  />
                </div>
                {formErrors.fileLinks && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 flex items-center"
                  >
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {formErrors.fileLinks}
                  </motion.p>
                )}
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <HelpCircle className="w-3.5 h-3.5 mr-1" />
                  Share files via Google Drive, Dropbox, OneDrive, etc. Make sure the link is accessible to anyone.
                </p>
              </motion.div>

              {/* Description */}
              <motion.div variants={cardVariant} className="mb-8">
                <label
                  htmlFor="pdfDescription"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Description <span className="text-red-500">*</span></span>
                </label>
                
                <div className={`bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm ${
                  formErrors.pdfDescription
                    ? "border-2 border-red-500"
                    : "border border-gray-300 dark:border-gray-600"
                }`}>
                  {/* Textarea header */}
                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs flex-1 font-mono">
                      description.md
                    </div>
                  </div>
                  
                  <textarea
                    id="pdfDescription"
                    rows="6"
                    placeholder="Provide a detailed description of the material, its content, and how it can help other students..."
                    value={pdfDescription}
                    onChange={(e) => {
                      setPdfDescription(e.target.value);
                      if (formErrors.pdfDescription) {
                        setFormErrors({ ...formErrors, pdfDescription: undefined });
                      }
                    }}
                    className="w-full px-4 py-3 text-base bg-transparent text-gray-900 dark:text-gray-300 focus:outline-none resize-y"
                  ></textarea>
                </div>
                
                {formErrors.pdfDescription && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-500 flex items-center"
                  >
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {formErrors.pdfDescription}
                  </motion.p>
                )}
                
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <HelpCircle className="w-3.5 h-3.5 mr-1" />
                  Include details about the content, sources, and how it might help other students.
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={cardVariant} className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Preview Submission</span>
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300">Find answers to common questions about contributing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 text-purple-500 mr-2" />
                  How are contributions reviewed?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our team reviews all submissions for quality, accuracy, and appropriateness before making them available to other students.
                  This process typically takes 1-3 business days.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Can I update my contribution after submitting?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes! If you need to make changes or updates to your submitted materials, please contact our support team with the details of your contribution and the changes you'd like to make.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 text-purple-500 mr-2" />
                  What types of files are accepted?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We accept PDFs, documents (Word, Google Docs), spreadsheets, presentations, and other educational materials. For code contributions, you can use GitHub repositories or code-sharing platforms.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <HelpCircle className="w-4 h-4 text-purple-500 mr-2" />
                  How do I get featured on the Wall of Fame?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Contributors whose submissions are approved and published will be featured on our Wall of Fame. The quality, impact, and uniqueness of your contribution are key factors in the selection process.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Wall of Fame CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-xl relative border border-purple-200 dark:border-purple-800/30 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-200/40 dark:from-purple-500/10 to-transparent transform translate-x-1/4"></div>
              <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-t from-indigo-200/40 dark:from-indigo-500/10 to-transparent transform -translate-x-1/4"></div>
            </div>
            
            <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
              <div className="flex items-center md:items-start flex-col">
                <Award className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left">Check Out Our Wall of Fame</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
                  See who's already contributed to making ColleGPT better for everyone.
                </p>
              </div>
              
              <Link
                to="/contributors-wall-of-fame"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Users className="w-5 h-5" />
                <span>View Wall of Fame</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributorForm;