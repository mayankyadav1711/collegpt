import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/home/SideNav";
import HeroSection from "../../components/home/HeroSection";
import NotesSection from "../../components/home/NotesSection";
import PlacementSection from "../../components/home/PlacementSection";
import RoadmapsSection from "../../components/home/RoadmapsSection";
import GateSection from "../../components/home/GateSection";
import ProjectsSection from "../../components/home/ProjectsSection";
import VideosSection from "../../components/home/VideosSection";
import CommunitySection from "../../components/home/CommunitySection";
import ExploreSection from "../../components/home/ExploreSection";

const Home = () => {
  // State management
  const [currentTime, setCurrentTime] = useState("");
  const [currentSection, setCurrentSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Side Navigation */}
      {/* <SideNav currentSection={currentSection} /> */}

      {/* Main Content Sections */}
      <HeroSection ref={heroRef} notesRef={notesRef} />
      <NotesSection ref={notesRef} />
      <PlacementSection ref={placementRef} />
      <RoadmapsSection ref={roadmapsRef} />
      <GateSection ref={gateRef} />
      <ProjectsSection ref={projectsRef} />
      <VideosSection ref={videosRef} />
      <CommunitySection ref={communityRef} />
      <ExploreSection ref={exploreRef} />

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
