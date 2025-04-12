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
  FileText
} from "lucide-react";
import toast from 'react-hot-toast';

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
          // Generate the PDF code
const pdfCode = generatePdfCode(semesterId, subjectId, unitId);
console.log("Generated PDF code:", pdfCode); // Add this to debug

// Fetch PDF data using the code
try {
  const response = await fetch(`https://api-collegpt.vercel.app/pdf-forms/${pdfCode}`);
  const data = await response.json();

  if (response.ok) {
    const pdfPreviewUrl = `${data.link.replace('/view?usp=drive_link', '/preview')}`;
    setPdfDownloadLink(data.link);
    setPdfFilePath(pdfPreviewUrl);
    setAuthor(data.author);
    setDescription(data.description);
    setExtra(data.extra);
    setUploadTimestamp(new Date(data.timestamp).toLocaleString());
  } else {
    console.error("Error fetching PDF link:", data.error);
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
      const response = await fetch("https://api-collegpt.vercel.app/doubt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
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
          to={`/semester/${semesterId}/subject/${subjectId}`}
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
          {/* PDF Viewer */}
          {pdfFilePath ? (
            <div className="mt-4 flex justify-center items-center">
              <iframe
                src={pdfFilePath}
                width="100%"
                height="590"
                className="rounded-xl"
                title="PDF Viewer"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : (
            <div className="bg-slate-900 aspect-video rounded-xl overflow-hidden shadow-lg mb-6 relative flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10" />
                </div>
                <p className="text-lg font-medium">PDF not available for this unit</p>
              </div>
            </div>
          )}
          
          {/* Download Button */}
          {pdfFilePath && (
            <div className="flex mb-8 lg:mb-16 space-y-4 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleDownloadClick} 
                disabled={downloadTimer !== 0} 
                className="text-lg inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {downloadTimer === 0 ? "Download" : `Please wait ${downloadTimer} seconds`}
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          )}
          
          {/* Unit Content */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  {unit.id}
                </span>
                {unit.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium rounded-full">
                  {subject.code}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                  Unit {unit.id} of {subject.totalUnits}
                </span>
              </div>
              
              {/* Display the author information */}
              {author && (
                <div className="watch-video">
                  <div className="video-container">
                    <div className="tutor">
                      <img src={extra || "https://api.dicebear.com/7.x/initials/svg?seed=" + author} alt={author} />
                      <div>
                        <h3>{author}</h3>
                        <span>Author</span>
                      </div>
                    </div>
                    <p className="description">{description}</p>
                    {uploadTimestamp && (
                      <div className="info">
                        <p className="date">
                          <i className="fas fa-calendar"></i>
                          <span>{uploadTimestamp}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* If no author/description from the API, show default content */}
              {!author && !description && (
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
                  
                  <h2>Key Learning Objectives</h2>
                  <ul>
                    <li>Understand the fundamental concepts of {unit.title}</li>
                    <li>Apply theoretical knowledge to practical problems</li>
                    <li>Analyze related case studies and examples</li>
                    <li>Develop critical thinking skills in this domain</li>
                  </ul>
                  
                  <h2>Additional Resources</h2>
                  <p>
                    You can download supplementary materials like PDFs, presentations, and 
                    code samples using the download button in the sidebar.
                  </p>
                </div>
              )}
            </div>
            
            {/* Action Bar */}
            <div className="border-t border-slate-200 dark:border-slate-700 p-4 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>Helpful</span>
                </button>
                
                <button className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  <MessageSquare className="w-5 h-5 mr-1" />
                  <span>Comment</span>
                </button>
                
                <button className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  <Bookmark className="w-5 h-5 mr-1" />
                  <span>Save</span>
                </button>
              </div>
              
              {pdfDownloadLink && (
                <div>
                  <button 
                    onClick={handleDownloadClick}
                    disabled={downloadTimer !== 0}
                    className="inline-flex items-center px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>{downloadTimer === 0 ? "Download Materials" : `Wait ${downloadTimer}s`}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Doubt Submission Form */}
          <section className="comments mb-8">
            <form onSubmit={handleSubmitDoubt} className="add-comment">
              <h3>Any Doubts?</h3>
              <textarea
                name="doubt"
                placeholder="Enter your doubts..."
                required
                maxLength="1000"
                cols="30"
                rows="10"
                value={doubt}
                onChange={(e) => setDoubt(e.target.value)}
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="inline-btn"
                name="submit_doubt"
              />
            </form>
          </section>
          
          {/* Unit Navigation */}
          <div className="flex items-center justify-between mt-8">
            {prevUnit ? (
              <Link 
                to={`/semester/${semesterId}/subject/${subjectId}/unit/${prevUnit.id}`}
                className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span>Previous: {prevUnit.title}</span>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextUnit ? (
              <Link 
                to={`/semester/${semesterId}/subject/${subjectId}/unit/${nextUnit.id}`}
                className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <span>Next: {nextUnit.title}</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            ) : (
              <div></div>
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
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
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
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center">
                <FileText className="w-5 h-5 mr-2 text-brand-500" />
                All Units
              </h3>
            </div>
            
            <div className="p-4">
              <ul className="space-y-1">
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