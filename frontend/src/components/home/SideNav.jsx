import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  Code2,
  VideoIcon,
  MessageSquare,
  Layers,
} from "lucide-react";

const SideNav = ({ currentSection }) => {
  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "notes", icon: BookOpen, label: "Notes" },
    { id: "placement", icon: Briefcase, label: "Placements" },
    { id: "roadmaps", icon: Compass, label: "Roadmaps" },
    { id: "gate", icon: GraduationCap, label: "GATE" },
    { id: "projects", icon: Code2, label: "Projects" },
    { id: "videos", icon: VideoIcon, label: "Videos" },
    { id: "community", icon: MessageSquare, label: "Community" },
    { id: "explore", icon: Layers, label: "Features" },
  ];

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 1.5 }}
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div
            className={`w-3 h-3 ${
              currentSection === item.id
                ? "bg-[#00AEEF]"
                : "bg-slate-300 dark:bg-slate-700"
            } rounded-full group-hover:bg-[#00AEEF] transition-colors`}
          />
          <div
            className={`absolute right-full mr-3 px-2 py-1 rounded bg-white dark:bg-slate-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none whitespace-nowrap ${
              currentSection === item.id ? "text-[#00AEEF]" : ""
            }`}
          >
            {item.label}
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default SideNav;