import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/home/SideNav";
import HeroSection from "../../components/home/HeroSection";
import NotesSection from "../../components/home/NotesSection";
import PlacementSection from "../../components/home/PlacementSection";
import HackathonSection from "../../components/home/HackathonSection";
import GateSection from "../../components/home/GateSection";
import ProjectsSection from "../../components/home/ProjectsSection";
import YoutubeSection from "../../components/home/YoutubeSection";
import CommunitySection from "../../components/home/CommunitySection";
import AISection from "../../components/home/AISection";

const Home = () => {
  // State management
  const [currentTime, setCurrentTime] = useState("");
  const [currentSection, setCurrentSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenCollegeGPTModal');
    if (!hasSeenModal) {
      setShowInfoModal(true);
      localStorage.setItem('hasSeenCollegeGPTModal', 'true');
    }
  }, []);

  // Handle modal close
  const handleModalClose = () => {
    setShowInfoModal(false);
  };

  // Refs for sections
  const heroRef = useRef(null);
  const notesRef = useRef(null);
  const placementRef = useRef(null);
  const roadmapsRef = useRef(null);
  const gateRef = useRef(null);
  const projectsRef = useRef(null);
  const videosRef = useRef(null);
  const communityRef = useRef(null);
  const exploreRef = useRef(null);
  const aiRef = useRef(null);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Handle scroll for section detection and parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine current section based on scroll position
      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: notesRef, id: "notes" },
        { ref: aiRef, id: "ai" },
        { ref: placementRef, id: "placement" },
        { ref: roadmapsRef, id: "roadmaps" },
        { ref: gateRef, id: "gate" },
        { ref: projectsRef, id: "projects" },
        { ref: videosRef, id: "videos" },
        { ref: communityRef, id: "community" },
        { ref: exploreRef, id: "explore" },
      ];

      for (const section of sections) {
        if (!section.ref.current) continue;

        const rect = section.ref.current.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compile all section refs
  const sectionRefs = {
    heroRef,
    notesRef,
    aiRef,
    placementRef,
    roadmapsRef,
    gateRef,
    projectsRef,
    videosRef,
    communityRef,
    exploreRef,
  };

  return (
    <div className="font-jost bg-slate-50 text-slate-900 dark:bg-[#050a14] dark:text-white overflow-x-hidden min-h-screen relative">
      {/* Showcase Information Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Welcome to CollegeGPT! 🎓
              </h2>
              <button
                onClick={handleModalClose}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                This is an open-source project showcasing various features that could be implemented in a college-focused platform. 
                All the data you see is sample/mock data for demonstration purposes.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Features Available for Contribution:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
                  <li>Study Notes & Resources</li>
                  <li>Placement Preparation</li>
                  <li>Hackathon Updates</li>
                  <li>GATE Exam Resources</li>
                  <li>Project Showcase</li>
                  <li>Educational Videos</li>
                  <li>Community Features</li>
                  <li>AI-Powered Learning Assistant</li>
                </ul>
              </div>

              <p className="text-sm italic">
                Feel free to contribute to any of these features! Check out our GitHub repository for more information.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors"
              >
                Got it!
              </button>
              <a
                href="https://github.com/mayankyadav1711/collegpt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Side Navigation */}
      {/* <SideNav currentSection={currentSection} /> */}

      {/* Main Content Sections */}
      <HeroSection ref={heroRef} notesRef={notesRef} />
      <NotesSection ref={notesRef} />
      <AISection ref={aiRef}  />
      <PlacementSection ref={placementRef} />
      <HackathonSection ref={roadmapsRef} />
      <GateSection ref={gateRef} />
      <ProjectsSection ref={projectsRef} />
      <YoutubeSection ref={videosRef} />
      <CommunitySection ref={communityRef} />

      {/* Matrix rain animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -10px) scale(1.05);
          }
          50% {
            transform: translate(-5px, 10px) scale(0.95);
          }
          75% {
            transform: translate(-10px, -5px) scale(1.02);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default Home;
