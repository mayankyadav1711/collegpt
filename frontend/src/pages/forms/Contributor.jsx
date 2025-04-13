import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
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
} from "lucide-react";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { ENDPOINTS, fetchWithAuth } from "../../api/api";

const contributionTypes = [
  {
    id: "college_notes",
    label: "College Notes",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: "gate_notes",
    label: "GATE Notes",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: "placement",
    label: "Placement Materials",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "web_dev",
    label: "Web Development",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "reference",
    label: "Reference Books",
    icon: <Library className="w-5 h-5" />,
  },
  {
    id: "exam_prep",
    label: "Exam Preparation",
    icon: <Clock className="w-5 h-5" />,
  },
];

const ContributorForm = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();

  // Form state
  const [semester, setSemester] = useState("1");
  const [subjectName, setSubjectName] = useState("");
  const [fileLinks, setFileLinks] = useState("");
  const [pdfDescription, setPdfDescription] = useState("");
  const [contributionType, setContributionType] = useState("college_notes");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = {};
    if (!subjectName.trim()) errors.subjectName = "Subject name is required";
    if (!fileLinks.trim()) errors.fileLinks = "File link is required";
    if (!pdfDescription.trim())
      errors.pdfDescription = "Description is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

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

      // Reset form
      setSemester("1");
      setSubjectName("");
      setFileLinks("");
      setPdfDescription("");
      setContributionType("college_notes");
      setFormErrors({});
    } catch (error) {
      toast.error("Failed to submit contribution. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Contribute Learning Materials
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Share your notes, guides, and resources to help others succeed in
            their learning journey.
          </p>
        </div>

        {/* Information Panel */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 flex items-center mb-3">
            <HelpCircle className="w-5 h-5 mr-2" />
            Contribution Guidelines
          </h2>

          <ul className="space-y-3 text-blue-700 dark:text-blue-300">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Share high-quality, accurate, and well-organized materials
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Ensure you have permission to share the content (no copyright
                violations)
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Use cloud storage services (Google Drive, Dropbox, OneDrive)
                with proper permissions
              </span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Submissions are reviewed by our team before being published
              </span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <Upload className="w-5 h-5 mr-2 text-brand-500" />
              Submission Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Contribution Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Contribution Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {contributionTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setContributionType(type.id)}
                    className={`
                      cursor-pointer border rounded-lg p-3 flex items-center
                      ${
                        contributionType === type.id
                          ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-700"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      }
                    `}
                  >
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3
                      ${
                        contributionType === type.id
                          ? "bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-300"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                      }
                    `}
                    >
                      {type.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        contributionType === type.id
                          ? "text-brand-700 dark:text-brand-300"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {type.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester - Show only for college notes */}
            {contributionType === "college_notes" && (
              <div className="mb-6">
                <label
                  htmlFor="semester"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Semester <span className="text-red-500">*</span>
                </label>
                <select
                  id="semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num.toString()}>
                      Semester {num}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Subject Name */}
            <div className="mb-6">
              <label
                htmlFor="subjectName"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Subject / Topic Name <span className="text-red-500">*</span>
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
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  formErrors.subjectName
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                  formErrors.subjectName
                    ? "focus:ring-red-500"
                    : "focus:ring-brand-500"
                } focus:border-transparent transition-colors`}
              />
              {formErrors.subjectName && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.subjectName}
                </p>
              )}
            </div>

            {/* File Links */}
            <div className="mb-6">
              <label
                htmlFor="fileLinks"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                <div className="flex items-center">
                  <span>
                    Upload File Link <span className="text-red-500">*</span>
                  </span>
                  <div className="relative ml-2 group">
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 p-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
                    : "border-slate-300 dark:border-slate-600"
                } rounded-lg overflow-hidden focus-within:ring-2 ${
                  formErrors.fileLinks
                    ? "focus-within:ring-red-500"
                    : "focus-within:ring-brand-500"
                } focus-within:border-transparent transition-colors`}
              >
                <div className="flex-shrink-0 bg-slate-100 dark:bg-slate-700 flex items-center justify-center px-3">
                  <LinkIcon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
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
                  className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>
              {formErrors.fileLinks && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.fileLinks}
                </p>
              )}
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Share files via Google Drive, Dropbox, OneDrive, etc. Make sure
                the link is accessible to anyone.
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="pdfDescription"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="pdfDescription"
                rows="4"
                placeholder="Provide a detailed description of the material..."
                value={pdfDescription}
                onChange={(e) => {
                  setPdfDescription(e.target.value);
                  if (formErrors.pdfDescription) {
                    setFormErrors({ ...formErrors, pdfDescription: undefined });
                  }
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  formErrors.pdfDescription
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-300 dark:border-slate-600"
                } bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 ${
                  formErrors.pdfDescription
                    ? "focus:ring-red-500"
                    : "focus:ring-brand-500"
                } focus:border-transparent transition-colors resize-y`}
              ></textarea>
              {formErrors.pdfDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.pdfDescription}
                </p>
              )}
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Include details about the content, sources, and how it might
                help other students.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 mr-2" />
                    <span>Submit Contribution</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                How are contributions reviewed?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Our team reviews all submissions for quality, accuracy, and
                appropriateness before making them available to other students.
                This process typically takes 1-3 business days.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Can I update my contribution after submitting?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Yes! If you need to make changes or updates to your submitted
                materials, please contact our support team with the details of
                your contribution and the changes you'd like to make.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                What types of files are accepted?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                We accept PDFs, documents (Word, Google Docs), spreadsheets,
                presentations, and other educational materials. For code
                contributions, you can use GitHub repositories or code-sharing
                platforms.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContributorForm;
