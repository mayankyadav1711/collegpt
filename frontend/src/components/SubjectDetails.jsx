import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getSemester, getSubject } from "../data/coursedata";
import { 
  BookOpen, 
  ArrowLeft, 
  FileText,
  Clock,
  ChevronRight,
  Layers,
  GraduationCap
} from "lucide-react";

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
          onClick={() => navigate('/courses')}
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
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 dark:text-blue-400 mr-3">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Total Units</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{subject.totalUnits}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500 dark:text-green-400 mr-3">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Est. Duration</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{subject.totalUnits * 1.5} hrs</div>
                </div>
              </div>
              
              <div className="flex items-center col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500 dark:text-purple-400 mr-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Level</div>
                  <div className="font-semibold text-slate-900 dark:text-white">Undergraduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Units List */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-brand-500" />
          <span>Course Content</span>
        </h2>
        
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {subject.units && Array.isArray(subject.units) ? (
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {subject.units.map((unit, index) => (
                <Link 
                  key={index}
                  to={`/semester/${semesterId}/subject/${subjectId}/unit/${unit.id}`}
                  className="block transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
                >
                  <div className="p-4 sm:p-5 flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500 dark:text-brand-400 font-bold mr-4">
                      {unit.id}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white truncate pr-4">
                          {unit.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      </div>
                      
                      <div className="mt-1 flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <FileText className="w-4 h-4 mr-1.5" />
                        <span>Learning Material Available</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">No units found for this subject.</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Content may be added soon.</p>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl p-6 text-white text-center shadow-lg mb-6"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-xl font-bold mb-2">Ready to start learning?</h3>
        <p className="mb-4 opacity-90">Begin with the first unit and track your progress as you go.</p>
        {subject.units && subject.units.length > 0 && (
          <Link 
            to={`/semester/${semesterId}/subject/${subjectId}/unit/${subject.units[0].id}`}
            className="inline-block px-6 py-3 bg-white text-brand-600 font-medium rounded-lg hover:bg-opacity-95 transition-colors"
          >
            Start First Unit
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default SubjectDetails;