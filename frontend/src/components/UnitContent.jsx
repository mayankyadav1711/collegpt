import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSemester, getSubject, getUnit } from "../data/coursedata";
import { useAppContext } from "../context/AppContext";
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Share2, 
  ThumbsUp, 
  MessageSquare, 
  Bookmark,
  ChevronLeft,
  ChevronRight,
  FileText,
  AlertCircle,
  User
} from "lucide-react";
import toast from 'react-hot-toast';
import { ENDPOINTS, fetchWithAuth, generatePdfCode as apiGeneratePdfCode } from "../api/api";

const UnitContent = () => {
  // Use the AppContext instead of UserContext
  const { auth } = useAppContext();
  const { semesterId, subjectId, unitId } = useParams();
  const [subject, setSubject] = useState(null);
  const [unit, setUnit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // For navigation between units
  const [prevUnit, setPrevUnit] = useState(null);
  const [nextUnit, setNextUnit] = useState(null);

  // PDF related states
  const [pdfFilePath, setPdfFilePath] = useState("");
  const [pdfDownloadLink, setPdfDownloadLink] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [extra, setExtra] = useState("");
  const [uploadTimestamp, setUploadTimestamp] = useState("");
  const [downloadTimer, setDownloadTimer] = useState(30);
  const [doubt, setDoubt] = useState("");

  // Generate PDF code from semester, subject, and unit
  const generatePdfCode = (sem, subjectId, unitId) => {
    // Get the numeric subject index from the semester data
    let subjectIndex = null;
    
    // Find the subject index in the semester
    const semester = getSemester(sem);
    if (semester && semester.subjects) {
      // Find the index of the subject in the subjects array
      const index = semester.subjects.findIndex(s => 
        s.id === subjectId || 
        s.id.toLowerCase() === subjectId.toLowerCase()
      );
      
      if (index !== -1) {
        // Subject index is 1-based (not 0-based), so add 1
        subjectIndex = index + 1;
      }
    }
    
    // If we couldn't find the index, use a default
    if (subjectIndex === null) {
      console.error(`Could not find index for subject ${subjectId} in semester ${sem}`);
      subjectIndex = 1; // Default to first subject
    }
    
    // Format the code as expected by the API: [semester][subject_index][unit]
    if (unitId < 10) {
      return `${sem}${subjectIndex}${unitId}`;
    } else {
      return `${sem}${subjectIndex}${unitId}`;
    }
  };

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Try to get course data - this might be synchronous or asynchronous depending on implementation
        let subjectData, unitData;
        
        try {
          subjectData = await getSubject(semesterId, subjectId);
          unitData = await getUnit(semesterId, subjectId, unitId);
        } catch (error) {
          console.error("Error fetching course data:", error);
          // If async fails, try synchronous approach as fallback
          subjectData = getSubject(semesterId, subjectId);
          unitData = getUnit(semesterId, subjectId, unitId);
        }
        
        if (subjectData && unitData) {
          setSubject(subjectData);
          setUnit(unitData);
          
          // Set up prev/next navigation
          const currentUnitIndex = subjectData.units.findIndex(u => u.id === parseInt(unitId));
          if (currentUnitIndex > 0) {
            setPrevUnit(subjectData.units[currentUnitIndex - 1]);
          } else {
            setPrevUnit(null);
          }
          
          if (currentUnitIndex < subjectData.units.length - 1) {
            setNextUnit(subjectData.units[currentUnitIndex + 1]);
          } else {
            setNextUnit(null);
          }
  
          // Generate the PDF code
          const pdfCode = generatePdfCode(semesterId, subjectId, unitId);
          console.log("Generated PDF code:", pdfCode); // Add this to debug
  
          // Fetch PDF data using the code
          try {
            const data = await fetchWithAuth(ENDPOINTS.GET_PDF_BY_CODE(pdfCode));
            
            if (data) {
              const pdfPreviewUrl = `${data.link.replace('/view?usp=drive_link', '/preview')}`;
              setPdfDownloadLink(data.link);
              setPdfFilePath(pdfPreviewUrl);
              setAuthor(data.author);
              setDescription(data.description);
              setExtra(data.extra);
              setUploadTimestamp(new Date(data.timestamp).toLocaleString());
            } else {
              console.error("Error fetching PDF link: No data returned");
            }
          } catch (error) {
            console.error("Error fetching PDF link:", error);
          }
        }
      } catch (error) {
        console.error("Error in data fetching:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [semesterId, subjectId, unitId]);

  // Download timer logic
  useEffect(() => {
    if (downloadTimer > 0) {
      const timer = setTimeout(() => {
        setDownloadTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [downloadTimer]);

  const handleDownloadClick = () => {
    if (downloadTimer === 0 && pdfDownloadLink) {
      window.open(pdfDownloadLink, "_blank");
    }
  };

  // Handle doubt submission
  const handleSubmitDoubt = async (e) => {
    e.preventDefault();
    if (!auth.user?._id) {
      toast.success("Please login first");
      navigate("/login");
      return;
    }

    const pdfCode = generatePdfCode(semesterId, subjectId, unitId);
    const formData = {
      code: pdfCode,
      semester: semesterId,
      subjectName: subject?.title,
      unitName: unit?.title,
      author: author || "Unknown",
      doubt
    };

    try {
      const response = await fetchWithAuth(ENDPOINTS.SUBMIT_DOUBT, {
        method: "POST",
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Doubt Submitted Successfully");
        toast.success("Will Respond Shortly");
        setDoubt("");
      } else {
        toast.error("Doubt submission failed");
      }
    } catch (error) {
      console.error("Error submitting Doubt:", error);
      toast.error("An error occurred while submitting your doubt");
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  if (!subject || !unit) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Unit Not Found</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">The unit you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to={`/semester/${semesterId}/${subjectId}`}
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Subject</span>
        </Link>
      </div>

      {/* Unit Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <motion.div 
          className="lg:col-span-2"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Unit Title and Badge Section - Added above PDF */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                  <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    {unit.id}
                  </span>
                  {unit.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium rounded-full">
                    {subject.code}
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                    Unit {unit.id} of {subject.totalUnits}
                  </span>
                </div>
              </div>
              
              {pdfDownloadLink && (
                <button 
                  onClick={handleDownloadClick} 
                  disabled={downloadTimer !== 0} 
                  className="inline-flex items-center px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>{downloadTimer === 0 ? "Download PDF" : `Wait ${downloadTimer}s`}</span>
                </button>
              )}
            </div>
          </div>
          
          {/* PDF Viewer */}
          {pdfFilePath ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 p-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-brand-500" />
                Learning Material
              </h2>
              <div className="flex justify-center items-center">
                <iframe
                  src={pdfFilePath}
                  width="100%"
                  height="590"
                  className="rounded-xl"
                  title="PDF Viewer"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 p-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-brand-500" />
                Learning Material
              </h2>
              <div className="bg-slate-100 dark:bg-slate-700/50 aspect-video rounded-xl overflow-hidden relative flex items-center justify-center">
                <div className="text-slate-700 dark:text-slate-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-medium">PDF not available for this unit</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Content Information Card - Redesigned Author Section */}
          {author && (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 overflow-hidden">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-brand-500" />
                  Content Information
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Author Profile */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      {extra ? (
                        <img 
                          src={extra} 
                          alt={author} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${author}`;
                          }}
                        />
                      ) : (
                        <img 
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} 
                          alt={author} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Author Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h3 className="text-slate-900 dark:text-white font-medium text-lg">{author}</h3>
                      <span className="text-xs bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 px-2 py-0.5 rounded-full">Author</span>
                    </div>
                    
                    {description && (
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{description}</p>
                    )}
                    
                    {uploadTimestamp && (
                      <div className="mt-3 flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {uploadTimestamp}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* If no author/description from the API, show default content */}
          {!author && !description && (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 p-5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">About This Unit</h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  This is the learning content for {unit.title} in {subject.title}. 
                  In your actual implementation, this would contain the full learning materials 
                  including text content, images, code examples, and other interactive elements.
                </p>
                
                <p>
                  The content can be loaded dynamically from your backend or stored in a structured 
                  format in your frontend data store, allowing for rich educational experiences.
                </p>
                
                <h3>Key Learning Objectives</h3>
                <ul>
                  <li>Understand the fundamental concepts of {unit.title}</li>
                  <li>Apply theoretical knowledge to practical problems</li>
                  <li>Analyze related case studies and examples</li>
                  <li>Develop critical thinking skills in this domain</li>
                </ul>
                
                <h3>Additional Resources</h3>
                <p>
                  You can download supplementary materials like PDFs, presentations, and 
                  code samples using the download button at the top of this page.
                </p>
              </div>
            </div>
          )}
          
          {/* Revamped Doubt Submission Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 mb-6 overflow-hidden">
            <div className="p-5">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-brand-500" />
                Have Questions?
              </h2>
              
              <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  <p className="font-medium mb-1">Guidelines for effective questions:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Be specific and clear about what you don't understand</li>
                    <li>Reference specific sections or concepts from the material</li>
                    <li>Avoid asking questions already answered in the content</li>
                    <li>Share what you've tried or your current understanding</li>
                  </ul>
                </div>
              </div>
              
              <form onSubmit={handleSubmitDoubt} className="space-y-4">
                <div>
                  <textarea
                    name="doubt"
                    placeholder="Enter your question or doubt about this unit..."
                    required
                    maxLength="1000"
                    rows="4"
                    value={doubt}
                    onChange={(e) => setDoubt(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors resize-y"
                  ></textarea>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-right">
                    {doubt.length}/1000 characters
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                  >
                    Submit Question
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Unit Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            {prevUnit ? (
              <Link 
                to={`/semester/${semesterId}/subject/${subjectId}/unit/${prevUnit.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span className="truncate">Previous: {prevUnit.title}</span>
              </Link>
            ) : (
              <div className="w-full sm:w-auto"></div>
            )}
            
            {nextUnit ? (
              <Link 
                to={`/semester/${semesterId}/subject/${subjectId}/unit/${nextUnit.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <span className="truncate">Next: {nextUnit.title}</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            ) : (
              <div className="w-full sm:w-auto"></div>
            )}
          </div>
        </motion.div>
        
        {/* Sidebar */}
        <motion.div 
          className="lg:col-span-1"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Subject Info Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 mb-6 sticky top-20">
            <div className="aspect-video">
              <img 
                src={subject.thumbnail}
                alt={subject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                {subject.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                {subject.description}
              </p>
              
              <Link 
                to={`/semester/${semesterId}/subject/${subjectId}`}
                className="inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 transition-colors"
              >
                View All Units
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Unit List Quick Nav */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 sticky top-96">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-brand-500" />
                Course Units
              </h3>
            </div>
            
            <div className="p-4">
              <ul className="space-y-1 max-h-[350px] overflow-y-auto pr-2">
                {subject.units.map((u) => (
                  <li key={u.id}>
                    <Link 
                      to={`/semester/${semesterId}/subject/${subjectId}/unit/${u.id}`}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        parseInt(unitId) === u.id 
                          ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium' 
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mr-2 text-xs ${
                        parseInt(unitId) === u.id 
                          ? 'bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-300' 
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {u.id}
                      </span>
                      <span className="truncate">{u.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnitContent;