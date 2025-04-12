import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSemester, getSubject } from "../data/coursedata";
import { BookOpen, ArrowLeft, Bookmark, Share2, Download } from "lucide-react";

const SubjectDetails = () => {
  const { semesterId, subjectId } = useParams();
  const [subject, setSubject] = useState(null);
  const [semester, setSemester] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subject and semester data
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        // Log what we're looking for to help debug
        console.log(`Looking for semester ${semesterId} and subject ${subjectId}`);
        
        // Get the data directly from your getAllSemesters function to ensure we have data
        const allSemesters = await getSemester(semesterId);
        console.log("Fetched semester data:", allSemesters);
        
        if (allSemesters) {
          setSemester(allSemesters);
          
          // Find the subject in the semester
          if (allSemesters.subjects && Array.isArray(allSemesters.subjects)) {
            const foundSubject = allSemesters.subjects.find(
              sub => sub.id === subjectId
            );
            
            console.log("Found subject:", foundSubject);
            
            if (foundSubject) {
              setSubject(foundSubject);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [semesterId, subjectId]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  if (!subject || !semester) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Subject Not Found</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          The subject you're looking for doesn't exist or has been moved.<br />
          Looking for: Semester {semesterId}, Subject {subjectId}
        </p>
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
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Course List</span>
        </button>
      </div>

      {/* Subject Header */}
      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Subject Thumbnail */}
          <div className="lg:w-1/3 relative">
            <div className="aspect-video lg:aspect-square w-full h-full">
              <img 
                src={subject.thumbnail || "/images/sample.webp"} 
                alt={subject.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/sample.webp"; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 font-medium rounded-lg flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-brand-500" />
              <span>{subject.totalUnits} Units</span>
            </div>
          </div>
          
          {/* Subject Info */}
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2.5 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-medium rounded">
                {semester.title}
              </span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded">
                {subject.code}
              </span>
            </div>
            
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {subject.title}
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {subject.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <Bookmark className="w-4 h-4 mr-2" />
                <span>Save Subject</span>
              </button>
              
              <button className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                <span>Share</span>
              </button>
              
              <button className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                <span>Download Materials</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Units List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-brand-500" />
          <span>Unit List</span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {subject.units && Array.isArray(subject.units) ? (
            subject.units.map((unit, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="relative group"
              >
                <Link to={`/semester/${semesterId}/${subjectId}/unit/${unit.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 p-4 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500 dark:text-brand-400 font-bold">
                        {unit.id}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                          {unit.title}
                        </h3>
                        
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          Click to view content
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-slate-600 dark:text-slate-300">No units found for this subject.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectDetails;