import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Sparkles,
  MapPin,
  Briefcase,
  Award,
  Calendar,
  ChevronRight,
  X,
  Minus,
  Plus,
  Search,
  Globe,
  User,
  Star,
  Code2,
  Layers,
  Monitor,
  Terminal,
  Wifi,
  Battery,
  ChevronLeft,
  LucideWifi,
  Signal,
  MoreHorizontal,
  Settings,
  Share2,
  Smartphone,
  Database,
  PenTool,
  BookOpen,
} from "lucide-react";
import ReactDOM from "react-dom";

// Enhanced MacOS Window Components
const MacOSWindow = ({ member, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [windowPosition, setWindowPosition] = useState({ x: 100, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const constraintsRef = useRef(null);
  const windowRef = useRef(null);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Tabs for the macOS window
  const tabs = [
    { id: "Profile", icon: User, color: member.color },
    { id: "Skills", icon: Code2, color: member.color },
    { id: "Experience", icon: Briefcase, color: member.color },
    { id: "Contact", icon: Mail, color: member.color },
  ];

  // Prevent body scrolling when window is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Add window blur and focus effects
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target)) {
        // Apply a subtle blur effect when clicking outside
        windowRef.current.style.filter = "brightness(0.98)";
      } else if (windowRef.current) {
        windowRef.current.style.filter = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  // Custom styled tabs for the window sidebar
  const SidebarTab = ({ tab }) => (
    <motion.button
      onClick={() => setActiveTab(tab.id)}
      whileHover={{
        x: 3,
        backgroundColor: activeTab === tab.id ? "" : "rgba(0,0,0,0.03)",
      }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center w-full px-4 py-2.5 mb-1.5 rounded-lg text-sm transition-colors ${
        activeTab === tab.id
          ? `bg-${tab.color}-50 text-${tab.color}-600 font-medium shadow-sm`
          : "text-gray-700 hover:bg-gray-100/50"
      }`}
    >
      <tab.icon
        size={16}
        className={`mr-3 ${
          activeTab === tab.id ? `text-${tab.color}-500` : "text-gray-500"
        }`}
      />
      {tab.id}
    </motion.button>
  );

  // Mobile iPhone-style view
  if (isMobile) {
    return (
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col bg-black isolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* iPhone Status Bar */}
        <div className="bg-black text-white px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="text-xs font-medium">9:41</span>
          </div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-1 bg-gray-700 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-1.5">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={14} />
          </div>
        </div>

        {/* iPhone App Header */}
        <div className="flex justify-between items-center px-4 py-3 text-white bg-gray-900">
          <button onClick={onClose} className="text-blue-400">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-base font-medium">{member.name}</h2>
          <button className="text-blue-400">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* iPhone App Content */}
        <div className="overflow-y-auto flex-1 bg-gray-100">
          {/* Profile Header */}
          <div className="p-5 mb-3 bg-white">
            <div className="flex items-center space-x-4">
              <div className="overflow-hidden w-20 h-20 rounded-full border-2 border-white shadow-md">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div
                  className={`inline-flex items-center mt-2 px-2 py-0.5 rounded-full bg-${member.color}-100 text-${member.color}-600 text-xs`}
                >
                  <Sparkles className="mr-1 w-3 h-3" />
                  {member.badge}
                </div>
              </div>
            </div>

            <div className="flex items-center mt-4 space-x-6">
              {member.social.slice(0, 4).map((socialItem, idx) => (
                <a
                  key={idx}
                  href={socialItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    socialItem.color.split(" ")[0]
                  } w-8 h-8 rounded-full flex items-center justify-center shadow-sm`}
                >
                  <socialItem.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* iPhone Navigation */}
          <div className="flex overflow-x-auto px-2 py-3 mb-3 bg-white hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 mx-1 rounded-full text-sm ${
                  activeTab === tab.id
                    ? `bg-${member.color}-100 text-${member.color}-600 font-medium`
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.id}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-5 mb-3 bg-white">
            {activeTab === "Profile" && (
              <div className="space-y-5">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    About
                  </h4>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {member.bioLong}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin size={14} className="mt-0.5 mr-2 text-gray-500" />
                      <span className="text-gray-600">{member.location}</span>
                    </div>
                    <div className="flex items-start">
                      <Calendar
                        size={14}
                        className="mt-0.5 mr-2 text-gray-500"
                      />
                      <span className="text-gray-600">
                        Joined {member.joinedDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex flex-col justify-center items-center p-4 bg-gray-50 rounded-xl">
                    <div
                      className={`w-8 h-8 rounded-full bg-${member.color}-100 flex items-center justify-center mb-1`}
                    >
                      <Briefcase
                        className={`w-4 h-4 text-${member.color}-600`}
                      />
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {member.yearsExperience}
                    </div>
                    <div className="text-xs text-gray-500">
                      Years Experience
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center p-4 bg-gray-50 rounded-xl">
                    <div
                      className={`w-8 h-8 rounded-full bg-${member.color}-100 flex items-center justify-center mb-1`}
                    >
                      <Code2 className={`w-4 h-4 text-${member.color}-600`} />
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {member.projectCount}
                    </div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Skills" && (
              <div className="space-y-4">
                <h4 className="mb-3 text-sm font-semibold text-gray-900">
                  Technical Skills
                </h4>

                {member.skillDomains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="p-4 mb-3 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center mb-3">
                      <domain.icon
                        size={16}
                        className={`text-${domain.color}-500 mr-2`}
                      />
                      <h5 className="text-xs font-semibold text-gray-800">
                        {domain.name}
                      </h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className={`px-3 py-1 bg-${domain.color}-100 text-${domain.color}-700 text-xs rounded-full`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="space-y-4">
                <h4 className="mb-3 text-sm font-semibold text-gray-900">
                  Professional Experience
                </h4>

                <div className="pl-5 space-y-5 border-l-2 border-gray-300">
                  {member.experience.map((exp, idx) => (
                    <div key={idx}>
                      <div
                        className={`absolute -ml-[22px] w-4 h-4 rounded-full ${
                          idx === 0 ? `bg-${member.color}-500` : "bg-gray-300"
                        }`}
                      ></div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <h5 className="text-sm font-medium">{exp.role}</h5>
                        <p className="text-xs text-gray-600">{exp.company}</p>
                        <p
                          className={`${
                            idx === 0
                              ? `text-${member.color}-600`
                              : "text-gray-500"
                          } text-xs mt-1 mb-2`}
                        >
                          {exp.period}
                        </p>
                        <ul className="space-y-1 text-xs text-gray-700">
                          {exp.achievements.map((achievement, aidx) => (
                            <li key={aidx} className="flex">
                              <span className="mr-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Contact" && (
              <div className="space-y-4">
                <h4 className="mb-3 text-sm font-semibold text-gray-900">
                  Contact Information
                </h4>

                {member.social.map((socialItem, idx) => (
                  <a
                    key={idx}
                    href={socialItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 mb-2 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:bg-gray-100"
                  >
                    <div
                      className={`w-8 h-8 ${
                        socialItem.color.split(" ")[0]
                      } rounded-full flex items-center justify-center mr-3`}
                    >
                      <socialItem.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {socialItem.platform}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {socialItem.platform === "Mail"
                          ? socialItem.url.replace("mailto:", "")
                          : socialItem.url.replace(
                              /(https?:\/\/)?(www\.)?/,
                              ""
                            )}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-gray-400" />
                  </a>
                ))}

                <div className="pt-4 mt-6">
                  <a
                    href={
                      member.social.find((s) => s.platform === "Mail")?.url ||
                      member.social[0].url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 bg-${member.color}-500 text-white text-center rounded-lg font-medium shadow-md`}
                  >
                    Contact via Email
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* iPhone Home Indicator */}
          <div className="flex justify-center py-2 bg-black">
            <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Desktop macOS window view
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div ref={constraintsRef} className="overflow-hidden absolute inset-0" />

      <motion.div
        ref={windowRef}
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.05}
        onClick={(e) => e.stopPropagation()}
        onDragEnd={(e, info) => {
          setWindowPosition({
            x: windowPosition.x + info.offset.x,
            y: windowPosition.y + info.offset.y,
          });
        }}
        style={{
          width: isFullscreen ? "calc(100vw - 60px)" : "900px", // Increased size
          height: isFullscreen ? "calc(100vh - 60px)" : "600px", // Increased size
          maxWidth: "95vw",
          maxHeight: "90vh",
          transition: "width 0.3s, height 0.3s",
        }}
      >
        {/* Premium Glass Effect & Shadow */}
        <div className="absolute inset-0 rounded-xl opacity-20 backdrop-blur-xl bg-white/10"></div>

        <div className="flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-[0_10px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200 backdrop-filter backdrop-blur">
          {/* Window Header - Enhanced macOS style */}
          <div className="flex items-center px-4 h-10 bg-gradient-to-b from-gray-100 to-gray-50 rounded-t-xl border-b border-gray-200">
            <div className="flex items-center space-x-2">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="absolute w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
              </motion.button>

              {/* Minimize button */}
              <motion.button
                className="w-3.5 h-3.5 rounded-full bg-yellow-400 flex items-center justify-center group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Minus className="absolute w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100" />
              </motion.button>

              {/* Maximize button */}
              <motion.button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="absolute w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100" />
              </motion.button>
            </div>

            <div className="absolute left-1/2 text-xs font-medium text-gray-600 transform -translate-x-1/2">
              {member.name} — Developer Profile
            </div>

            {/* Window Header Right Section */}
            <div className="flex items-center ml-auto space-x-3 text-gray-500">
              <Share2 size={13} className="opacity-70" />
              <Settings size={13} className="opacity-70" />
            </div>
          </div>

          {/* Window Toolbar - Enhanced macOS style */}
          <div className="flex items-center px-4 h-10 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 shadow-sm">
            <div className="flex space-x-2">
              <button className="p-1 text-gray-500 rounded hover:text-gray-700 hover:bg-gray-100">
                <ChevronLeft size={14} />
              </button>
              <button className="p-1 text-gray-500 rounded hover:text-gray-700 hover:bg-gray-100">
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="flex-1 mx-4">
              <div className="flex items-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200/70 transition-colors rounded-md text-xs text-gray-600 border border-gray-200/70 shadow-inner">
                <Search size={12} className="mr-2 text-gray-500" />
                <span>Search {member.name}'s profile</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-500">
              <Star
                size={14}
                className="opacity-70 cursor-pointer hover:opacity-100"
              />
              <Settings
                size={14}
                className="opacity-70 cursor-pointer hover:opacity-100"
              />
            </div>
          </div>

          {/* Window Content */}
          <div className="flex overflow-hidden flex-1">
            {/* Sidebar */}
            <div className="p-4 w-56 bg-gray-50 border-r border-gray-200">
              <div className="px-3 mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Developer
              </div>
              {tabs.map((tab) => (
                <SidebarTab key={tab.id} tab={tab} />
              ))}

              {/* Premium Section Divider */}
              <div className="px-4 my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
              </div>

              {/* Profile Quick Info */}
              <div className="px-3 pt-2">
                <div className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Profile
                </div>

                <div className="flex items-center mb-4">
                  <div className="overflow-hidden mr-3 w-12 h-10 rounded-md border border-white shadow-sm">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      {member.name}
                    </div>
                    <div className="text-xs text-gray-500">{member.role}</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={12} className="mr-2 text-gray-500" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-2 text-gray-500" />
                    <span>Joined {member.joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area - Enhanced with subtle shadows and premium styling */}
            <div className="overflow-y-auto flex-1 p-4 pr-12 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {activeTab === "Profile" && (
                    <div className="space-y-8">
                      {/* Profile Header */}
                      <div className="flex items-start space-x-6">
                        <div className="overflow-hidden w-36 h-36 rounded-xl border-2 border-white shadow-lg">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <div className="flex-1">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full bg-${member.color}-100/80 text-${member.color}-600 text-xs mb-2.5 border border-${member.color}-200/30`}
                          >
                            <Sparkles className="w-3 h-3 mr-1.5" />
                            {member.badge}
                          </div>

                          <h2 className="mb-1 text-3xl font-bold text-gray-900">
                            {member.name}
                          </h2>
                          <p className="mb-4 text-lg text-gray-600">
                            {member.role}
                          </p>

                          <div className="flex flex-wrap gap-5 items-center">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin size={16} className="mr-1.5" />
                              {member.location}
                            </div>

                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar size={16} className="mr-1.5" />
                              Joined {member.joinedDate}
                            </div>

                            <div className="flex items-center ml-auto space-x-4">
                              {member.social
                                .slice(0, 3)
                                .map((socialItem, idx) => (
                                  <motion.a
                                    key={idx}
                                    href={socialItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${
                                      socialItem.color.split(" ")[0]
                                    } w-8 h-8 rounded-full flex items-center justify-center shadow-sm`}
                                    whileHover={{ y: -2, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <socialItem.icon className="w-4 h-4 text-white" />
                                  </motion.a>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bio Section */}
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="flex items-center mb-4 text-base font-semibold text-gray-900">
                          <User
                            className={`w-4 h-4 mr-2 text-${member.color}-500`}
                          />
                          About
                        </h3>
                        <p className="leading-relaxed text-gray-700 whitespace-pre-line">
                          {member.bioLong}
                        </p>
                      </div>

                      {/* Summary Cards */}
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div
                            className={`w-10 h-10 rounded-full bg-${member.color}-100 flex items-center justify-center mb-2`}
                          >
                            <Code
                              className={`w-5 h-5 text-${member.color}-600`}
                            />
                          </div>
                          <div className="text-xl font-bold text-gray-900">
                            {member.projectCount}
                          </div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div
                            className={`w-10 h-10 rounded-full bg-${member.color}-100 flex items-center justify-center mb-2`}
                          >
                            <Award
                              className={`w-5 h-5 text-${member.color}-600`}
                            />
                          </div>
                          <div className="text-xl font-bold text-gray-900">
                            {member.achievements.length}
                          </div>
                          <div className="text-xs text-gray-500">
                            Achievements
                          </div>
                        </div>

                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div
                            className={`w-10 h-10 rounded-full bg-${member.color}-100 flex items-center justify-center mb-2`}
                          >
                            <Briefcase
                              className={`w-5 h-5 text-${member.color}-600`}
                            />
                          </div>
                          <div className="text-xl font-bold text-gray-900">
                            {member.yearsExperience}
                          </div>
                          <div className="text-xs text-gray-500">
                            Years Exp.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Skills" && (
                    <div className="space-y-8">
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Technical Skills
                        </h2>
                        <div
                          className={`px-3 py-1 bg-${member.color}-100/70 text-${member.color}-600 text-sm rounded-lg`}
                        >
                          {member.skillLevel}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        {/* Dynamic Skill Domains */}
                        {member.skillDomains.map((domain, idx) => (
                          <div
                            key={idx}
                            className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
                          >
                            <div className="flex items-center mb-4">
                              <div
                                className={`w-9 h-9 rounded-lg bg-${domain.color}-100 flex items-center justify-center mr-3`}
                              >
                                <domain.icon
                                  size={18}
                                  className={`text-${domain.color}-600`}
                                />
                              </div>
                              <h3 className="text-base font-semibold text-gray-900">
                                {domain.name}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {domain.skills.map((skill, skillIdx) => (
                                <span
                                  key={skillIdx}
                                  className={`px-3 py-1 bg-${domain.color}-100/70 text-${domain.color}-700 text-sm rounded-lg border border-${domain.color}-200/30`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Additional Expertise Section */}
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="mb-4 text-base font-semibold text-gray-900">
                          Additional Expertise
                        </h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                          {member.additionalExpertise.map((expertise, idx) => (
                            <div
                              key={idx}
                              className="p-4 text-center bg-white rounded-lg border border-gray-100"
                            >
                              <div
                                className={`w-8 h-8 mx-auto rounded-lg bg-${member.color}-100 flex items-center justify-center mb-2`}
                              >
                                <expertise.icon
                                  className={`w-4 h-4 text-${member.color}-600`}
                                />
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                {expertise.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Experience" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">
                          Professional Experience
                        </h2>
                      </div>

                      {/* Timeline - Enhanced with premium styling */}
                      <div className="relative pl-10 space-y-12 border-l-2 border-gray-200">
                        {/* Dynamic Experience Items */}
                        {member.experience.map((exp, idx) => (
                          <div key={idx} className="relative">
                            <div
                              className={`absolute -left-[25px] w-12 h-12 rounded-xl ${
                                idx === 0
                                  ? `bg-${member.color}-100 border-2 border-${member.color}-500`
                                  : "bg-gray-100 border-2 border-gray-300"
                              } flex items-center justify-center`}
                            >
                              <exp.icon
                                className={`w-5 h-5 ${
                                  idx === 0
                                    ? `text-${member.color}-500`
                                    : "text-gray-500"
                                }`}
                              ></exp.icon>
                            </div>

                            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
                              <div className="flex justify-between mb-2">
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900">
                                    {exp.role}
                                  </h3>
                                  <p className="text-base text-gray-600">
                                    {exp.company}
                                  </p>
                                </div>
                                <div
                                  className={`px-3 py-1 h-fit ${
                                    idx === 0
                                      ? `bg-${member.color}-100 text-${member.color}-600 border border-${member.color}-200/30`
                                      : "bg-gray-100 text-gray-600 border border-gray-200/30"
                                  } text-sm rounded-lg`}
                                >
                                  {exp.period}
                                </div>
                              </div>

                              <div className="mt-4">
                                {exp.description && (
                                  <p className="mb-4 text-gray-700">
                                    {exp.description}
                                  </p>
                                )}

                                {exp.achievements &&
                                  exp.achievements.length > 0 && (
                                    <ul className="space-y-3">
                                      {exp.achievements.map(
                                        (achievement, aidx) => (
                                          <li
                                            key={aidx}
                                            className="flex items-start"
                                          >
                                            <div
                                              className={`mt-1.5 w-2 h-2 rounded-full ${
                                                idx === 0
                                                  ? `bg-${member.color}-500`
                                                  : "bg-gray-400"
                                              } mr-2.5`}
                                            ></div>
                                            <span className="text-gray-700">
                                              {achievement}
                                            </span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </div>

                              {exp.technologies &&
                                exp.technologies.length > 0 && (
                                  <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-gray-100">
                                    {exp.technologies.map((tech, tidx) => (
                                      <span
                                        key={tidx}
                                        className="px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-md"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                )}
                            </div>
                          </div>
                        ))}

                        {/* Career Start Indicator */}
                        <div className="relative">
                          <div className="absolute -left-[16px] w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          </div>
                          <div className="ml-3 italic text-gray-500">
                            Career Start
                          </div>
                        </div>
                      </div>

                      {/* Education Section */}
                      {member.education && (
                        <div className="p-6 mt-10 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                          <h3 className="mb-4 text-lg font-bold text-gray-900">
                            Education
                          </h3>
                          <div className="space-y-4">
                            {member.education.map((edu, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between mb-2"
                              >
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {edu.degree}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {edu.institution}
                                  </p>
                                  {edu.description && (
                                    <p className="mt-1 text-sm text-gray-500">
                                      {edu.description}
                                    </p>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {edu.period}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "Contact" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                          Contact Information
                        </h2>
                        <p className="text-gray-600">
                          Reach out to {member.name} through any of these
                          platforms.
                        </p>
                      </div>

                      {/* Contact Cards - Beautiful grid layout */}
                      <div className="grid grid-cols-2 gap-4">
                        {member.social.map((socialItem, idx) => (
                          <motion.a
                            key={idx}
                            href={socialItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-5 bg-white rounded-xl border border-gray-200 shadow-sm transition-colors hover:bg-gray-50"
                            whileHover={{
                              y: -3,
                              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                            }}
                          >
                            <div
                              className={`w-12 h-12 ${
                                socialItem.color.split(" ")[0]
                              } rounded-xl flex items-center justify-center mr-4 shadow-md`}
                            >
                              <socialItem.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-lg font-semibold text-gray-900">
                                {socialItem.platform}
                              </div>
                              <div className="text-sm text-gray-600 truncate max-w-[200px]">
                                {socialItem.platform === "Mail"
                                  ? socialItem.url.replace("mailto:", "")
                                  : socialItem.url.replace(
                                      /(https?:\/\/)?(www\.)?/,
                                      ""
                                    )}
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                          </motion.a>
                        ))}
                      </div>

                      {/* Direct Email */}
                      <div className="mt-4 text-center">
                        <p className="mb-4 text-gray-600">
                          Send an email directly to connect with{" "}
                          {member.name.split(" ")[0]}:
                        </p>
                        <a
                          href={
                            member.social.find((s) => s.platform === "Mail")
                              ?.url || `mailto:${member.email}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-${member.color}-500 to-${member.color}-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow`}
                        >
                          <Mail className="mr-2 w-5 h-5" />
                          <span>Send Email</span>
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Team Section Component
const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for glow effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Team members data with enhanced information and unique experiences for each
  const teamMembers = [
    {
      id: 1,
      name: "Mayank Yadav",
      role: "Co-Founder & Developer",
      avatar:
        "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg",
      badge: "Remote Developer",
      location: "Ahmedabad, India",
      joinedDate: "June 2023",
      yearsExperience: 2,
      projectCount: 100,
      skillLevel: "Full Stack Expert",
      email: "mayankyadav1711@gmail.com",
    
      skillDomains: [
        {
          name: "Frontend",
          icon: Monitor,
          color: "blue",
          skills: [
            "React.js",
            "React Native",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript",
            "Phaser.js"
          ],
        },
        {
          name: "Backend",
          icon: Terminal,
          color: "green",
          skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "REST APIs",
            "Socket.IO"
          ],
        },
        {
          name: "Tools & DevOps",
          icon: Layers,
          color: "purple",
          skills: [
            "Git",
            "Docker",
            "CI/CD",
            "AWS",
            "Vercel",
            "Render",
            "Netlify"
          ],
        },
      ],
    
      additionalExpertise: [
        { name: "Clean Code", icon: Code },
        { name: "System Design", icon: Layers },
        { name: "UI/UX", icon: PenTool },
        { name: "API Development", icon: Globe },
      ],
    
      experience: [
        {
          role: "Full Stack Developer",
          company: "Enstead (EpicPay, Nigeria)",
          period: "Mar 2025 — Present",
          description:
            "Working remotely for a fintech company building payment and compliance apps using React Native, React.js, and Node.js.",
          icon: Briefcase,
          achievements: [
            "Built a React Native fintech app with secure transaction flows",
            "Integrated backend APIs and handled role-based access",
            "Contributed to both UI/UX and backend services for African payment systems",
            "Collaborated in Agile sprints with remote global teams"
          ],
          technologies: ["React Native", "React.js", "Node.js", "MongoDB", "AWS"]
        },
        {
          role: "Project Trainee",
          company: "eInfochips (An Arrow Company)",
          period: "Jun 2024 — Aug 2024",
          description:
            "Contributed to the React Planner project used for 3D architectural modeling with React.js and Three.js.",
          icon: Monitor,
          achievements: [
            "Integrated 50+ objects into the 3D modeling tool",
            "Built PoCs using React, Angular, and Node.js",
            "Completed advanced company training in React Testing Library, Jest, AWS, and System Design",
            "Streamlined form validation with secure UI components"
          ],
          technologies: ["React.js", "Three.js", "Angular", "Node.js"]
        },
        {
          role: "SDE Intern",
          company: "Hackingly",
          period: "Jan 2024 — Apr 2024",
          description:
            "Led performance optimization and framework migration for scalable frontend development.",
          icon: Briefcase,
          achievements: [
            "Migrated app from React to Next.js, improving performance by 70%",
            "Built responsive and SEO-friendly UI with real-time API integrations",
            "Cut data retrieval time by 50% through optimized API handling",
            "Contributed to 60% team productivity boost using Agile workflows"
          ],
          technologies: ["Next.js", "React.js", "REST APIs"]
        },
        {
          role: "Co-founder & Developer",
          company: "ColleGPT",
          period: "Jun 2023 — Present",
          description:
            "Co-founded and led full-stack development for ColleGPT while driving its strategic vision and content direction.",
          icon: Monitor,
          achievements: [
            "Defined mission, vision, and strategic roadmap of ColleGPT from scratch",
            "Led MERN-based architecture and full stack development",
            "Designed responsive UI components resulting in 70% engagement increase",
            "Mentored 1000+ students on tech and career growth"
          ],
          technologies: ["React.js", "Node.js", "MongoDB", "Express", "Vercel"]
        }
      ],
    
      education: [
        {
          degree: "Bachelor of Technology",
          institution: "Computer Engineering",
          period: "2021 - 2025",
          description:
            "CPI: 9.24"
        }
      ],
    
      achievements: [
        "Winner - Smart India Hackathon 2024",
        "1st Rank in College (CPI 9.24)",
        "GATE 2024 & 2025 Qualified (Score: 593)",
        "3rd Prize - State Level Poster Competition 2024",
        "NPTEL Domain Scholar & Star - Invited to IIT Bombay",
        "Finalist - SSIP Azadi Ka Amrit Mahotsav Hackathon 2022",
        "Winner - Break the Barrier National Hackathon 2022"
      ],
    
      bioShort:
        "Co-Founder, Developer & Content Creator at ColleGPT, and Full Stack Developer building secure fintech solutions and educational platforms.",
        bioLong: "Mayank is the Co-Founder, Developer, and Content Creator at ColleGPT. He defined the mission, vision, and guiding principles of the platform from inception, driving its strategic direction and technological evolution from the ground up.\n\nHe is also a remote Full Stack Developer at a leading African fintech company and winner of Smart India Hackathon 2024. With over 100+ completed projects and 2+ years of experience, Mayank has contributed to fintech, education, and AI platforms. Academically, he has been a consistent college topper, securing 1st rank across all branches with a CPI of 9.20. He has also contributed to college events like Xenesis and developed the MMPSRPC research portal.\n\nHis achievements include top rankings, national-level hackathon victories, GATE qualification, and prestigious recognitions from NPTEL and state competitions. Some of his major achievements are:\n\n- Winner – Smart India Hackathon 2024 (₹1 lakh prize)\n- Winner – Break the Barrier Hackathon 2022 (National Level)\n- 3rd Prize – State Level Poster Competition 2024\n- Domain Scholar & Discipline Star recognition in NPTEL Programming Domain, invited to IIT Bombay as an NPTEL Star\n- Finalist – SSIP Azadi Ka Amrit Mahotsav Hackathon 2022\n- Qualified for GATE 2024 and 2025 with a score of 593",
        color: "blue",
        
      gradient: "from-blue-600 to-indigo-600",
      lightGradient: "from-blue-500/10 to-blue-600/5",
    
      social: [
        {
          platform: "GitHub",
          icon: Github,
          url: "https://github.com/mayankyadav1711",
          color: "bg-gray-800 hover:bg-gray-700",
        },
        {
          platform: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/mayankyadav17/",
          color: "bg-blue-600 hover:bg-blue-700",
        },
        {
          platform: "Twitter",
          icon: Twitter,
          url: "https://twitter.com/mayankyadav_17",
          color: "bg-sky-500 hover:bg-sky-600",
        },
        {
          platform: "Mail",
          icon: Mail,
          url: "mailto:mayankyadav1711@gmail.com",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          platform: "Portfolio",
          icon: ExternalLink,
          url: "https://mayank-dev.vercel.app/",
          color: "bg-purple-600 hover:bg-purple-700",
        }
      ]
    }
    ,
    
    
    {
      "id": 2,
      "name": "Divya Kaurani",
      "role": "Co-Founder & Developer",
      "avatar": "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg",
      "badge": "Remote Developer",
      "location": "Ahmedabad, India",
      "joinedDate": "June 2023",
      "yearsExperience": 2,
      "projectCount": 50,
      "skillLevel": "Full Stack Expert",
      "email": "kauranidivya@gmail.com",
    
      "skillDomains": [
        {
          "name": "Frontend",
          "icon": Monitor,
          "color": "blue",
          "skills": [
            "React.js",
            "React Native",
            "Next.js",
            "Tailwind CSS",
            "Material UI",
            "Three.js",
            "TypeScript"
          ]
        },
        {
          "name": "Backend",
          "icon": Terminal,
          "color": "green",
          "skills": [
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "REST APIs",
            "GraphQL"
          ]
        },
        {
          "name": "Tools & DevOps",
          "icon": Layers,
          "color": "purple",
          "skills": [
            "Git",
            "Docker",
            "AWS",
            "Vercel",
            "Google Cloud Platform"
          ]
        }
      ],
    
      "additionalExpertise": [
        { "name": "UI/UX Design", "icon": PenTool },
        { "name": "Mobile App Development", "icon": Smartphone },
        { "name": "Database Management", "icon": Database },
        { "name": "API Development", "icon": Globe }
      ],
    
      "experience": [
  {
    "role": "Full Stack Developer",
    "company": "Enstead",
    "period": "April 2025 - Present",
    "description": "Developed backend functionalities and redesigned user interfaces for a fintech application. Integrated AWS S3 for storage solutions and implemented a referral module to boost user engagement.",
    "icon": Briefcase,
    "achievements": [
      "Refactored codebase using Husky for improved code quality",
      "Contributed to mobile application development using React Native",
      "Actively involved in logic building and module planning"
    ],
    "technologies": ["NodeJS", "TypeScript", "React Native", "React JS", "AWS"]
  },
  {
    "role": "Intern",
    "company": "York IE",
    "period": "July 2024 - September 2024",
    "description": "Contributed to the development of YorkIE Hub using ReactJS, NodeJS, Python, and AWS. Assisted in cloud application deployment and management.",
    "icon": Monitor,
    "achievements": [
      "Developed full-stack solutions leveraging AWS infrastructure",
      "Participated in daily stand-ups, sprint planning, and code reviews"
    ],
    "technologies": ["ReactJS", "NodeJS", "Python", "AWS"]
  },
  {
    "role": "Developer & Content Creator",
    "company": "ColleGPT",
    "period": "June 2023 - Present",
    "description": "Spearheaded the growth of ColleGPT by enhancing the responsive UI, increasing user engagement by 70%, and mentoring over 1,000 students.",
    "icon": Monitor,
    "achievements": [
      "Implemented 20+ mobile-responsive UI components",
      "Optimized website content and SEO strategies",
      "Guided students towards academic and professional excellence"
    ],
    "technologies": ["MERN Stack", "Tailwind CSS", "Foxit", "Figma", "Vercel"]
  }
],
    
      "education": [
        {
          "degree": "Bachelor of Engineering",
          "institution": "LDRP Institute of Technology and Research",
          "period": "2021 - 2025",
          "description": "CPI: 9.00"
        }
      ],
    
      "achievements": [
        "Winner - Smart India Hackathon 2024",
        "1st Rank in IT branch (CPI 9.00)",
        "Finalist - SSIP Azadi Ka Amrit Mahotsav Hackathon 2022",
        "NPTEL Domain Scholar & Star - Invited to IIT Bombay",
        "Winner - Break the Barrier National Hackathon 2022"
      ],
    
      "bioShort": "Developer & Content Creator at ColleGPT, focusing on full-stack development and community growth.",
      "bioLong": "Divya Kaurani is a Developer and Content Creator at ColleGPT, leading the development of user-friendly interfaces and mentoring students in tech. With expertise in MERN stack and responsive design, Divya plays a key role in enhancing user engagement and educational outreach at ColleGPT.",
      "color": "blue",
    
      "gradient": "from-blue-600 to-indigo-600",
      "lightGradient": "from-blue-500/10 to-blue-600/5",
    
      social: [
        {
          platform: "GitHub",
          icon: Github,
          url: "https://github.com/kauranidivya/",
          color: "bg-gray-800 hover:bg-gray-700",
        },
        {
          platform: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/divyakaurani/",
          color: "bg-blue-600 hover:bg-blue-700",
        },
        {
          platform: "Twitter",
          icon: Twitter,
          url: "https://x.com/d_kaurani61801",
          color: "bg-sky-500 hover:bg-sky-600",
        },
        {
          platform: "Mail",
          icon: Mail,
          url: "mailto:kauranidivya@gmail.com",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          platform: "Portfolio",
          icon: ExternalLink,
          url: "https://portfolio-divya-sooty.vercel.app/",
          color: "bg-purple-600 hover:bg-purple-700",
        }
      ]
    },
    
    {
      id: 3,
      name: "Darshit Sojitra",
      role: "Co-Founder & Developer",
      avatar:
        "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg",
      badge: "Co-Founder",
      location: "Ahmedabad, India",
      joinedDate: "February 2023",
      yearsExperience: 2,
      projectCount: 10,
      skillLevel: "UI/UX Specialist",
      email: "darshitsojitra@gmail.com",

      // Skill domains with appropriate icons
      skillDomains: [
        {
          name: "Frontend & Design",
          icon: PenTool,
          color: "green",
          skills: [
            "UI/UX Design",
            "Figma",
            "Tailwind CSS",
            "Framer Motion",
            "Responsive Design",
          ],
        },
        {
          name: "Frontend Development",
          icon: Monitor,
          color: "teal",
          skills: [
            "Next.js",
            "React.js",
            "TypeScript",
            "CSS Animation",
            "State Management",
          ],
        },
        {
          name: "Creative Tools",
          icon: Layers,
          color: "yellow",
          skills: [
            "Adobe XD",
            "Photoshop",
            "Illustrator",
            "Prototyping",
            "User Testing",
          ],
        },
      ],

      // Additional expertise areas
      additionalExpertise: [
        { name: "User Testing", icon: User },
        { name: "Animation", icon: Code },
        { name: "Accessibility", icon: Monitor },
        { name: "Mobile Design", icon: Smartphone },
      ],

      // Unique experience entries
      experience: [
        {
          role: "UI/UX Developer",
          company: "Creatives Digital Agency",
          period: "2022 — Present",
          description:
            "Leading design and frontend development for web applications.",
          icon: PenTool,
          achievements: [
            "Redesigned educational platform interface increasing user engagement by 40%",
            "Created comprehensive design system for consistent brand experience",
            "Implemented interactive animations improving user experience metrics",
            "Developed accessible components following WCAG guidelines",
          ],
          technologies: [
            "Figma",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript",
          ],
        },
        {
          role: "Frontend Intern",
          company: "Hackingly",
          period: "2021 — 2022",
          description:
            "Worked on Next.js-based projects and UI component libraries.",
          icon: Monitor,
          achievements: [
            "Built reusable component library improving development speed by 30%",
            "Contributed to open source design system with 500+ GitHub stars",
            "Optimized website performance increasing Lighthouse scores to 90+",
          ],
          technologies: ["React", "Next.js", "CSS", "JavaScript"],
        },
      ],

      // Education details
      education: [
        {
          degree: "B.Tech in Computer Engineering",
          institution: "LDRP-ITR College",
          period: "2019 - 2023",
          description:
            "Focus on Human-Computer Interaction and Web Technologies",
        },
      ],

      achievements: [
        "SIH Hackathon Finalist",
        "Google Crowdsource Top Contributor",
        "Cloud Community India Recognition",
      ],
      bioShort:
        "Talented front-end developer and UI/UX designer who brings ColleGPT's interface to life with intuitive and engaging experiences.",
      bioLong:
        "Darshit is the creative force behind ColleGPT's user interface, combining aesthetic sensibility with a deep understanding of user experience principles. Currently pursuing Computer Engineering at LDRP-ITR College, he brings fresh perspectives and innovative design approaches to the platform.\n\nHis professional experience includes interning as a Next.js developer at Hackingly and contributing significantly to open source projects. His participation in hackathons has honed his ability to design interfaces that not only look good but solve real user problems efficiently.",
      color: "green",
      gradient: "from-green-600 to-teal-600",
      lightGradient: "from-green-500/10 to-green-500/5",
      social: [
        {
          platform: "GitHub",
          icon: Github,
          url: "https://github.com/DPS21302",
          color: "bg-gray-800 hover:bg-gray-700",
        },
        {
          platform: "LinkedIn",
          icon: Linkedin,
          url: "https://www.linkedin.com/in/darshit-sojitra/",
          color: "bg-blue-600 hover:bg-blue-700",
        },
        {
          platform: "Instagram",
          icon: Instagram,
          url: "https://www.instagram.com/darshit_sojitraa/",
          color: "bg-pink-600 hover:bg-pink-700",
        },
        {
          platform: "Mail",
          icon: Mail,
          url: "mailto:darshitsojitra@gmail.com",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          platform: "Portfolio",
          icon: ExternalLink,
          url: "https://darshit-dev.vercel.app/",
          color: "bg-green-600 hover:bg-green-700",
        },
      ],
    },
  ];

  const renderMacOSWindowPortal = () => {
    if (!selectedMember) return null;

    return ReactDOM.createPortal(
      <MacOSWindow
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />,
      document.body // This renders directly in the body, outside your normal DOM hierarchy
    );
  };

  return (
    <section
      id="our-team"
      className="overflow-hidden relative py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/30 dark:to-gray-800/20"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic glow effect */}
      <div
        className="overflow-hidden absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.07), transparent 40%)`,
        }}
      />
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-4">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2 w-2 h-2 bg-blue-500 rounded-full"
            ></motion.span>
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              MEET OUR TEAM
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            The Minds Behind{" "}
            <span className="text-blue-600 dark:text-blue-400">ColleGPT</span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Our team combines technical expertise, educational insight, and
            creative vision to create an exceptional learning platform.
          </p>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Enhanced Team Members Row */}
        <div className="flex flex-wrap gap-14 justify-center items-center mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <motion.button
                onClick={() => setSelectedMember(member)}
                className="flex flex-col items-center duration-300"

              >
                {/* Profile Image with Animated Outline */}
                <div className="relative">
                  <div className="overflow-hidden mb-4 w-32 h-32 rounded-full border-2 border-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <motion.div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Name and Role */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>

                {/* Interactive View Profile Button */}
                <motion.div
                  className={`mt-3 px-4 py-1.5 bg-gradient-to-r from-${member.color}-500/80 to-${member.color}-600/80 backdrop-blur-sm rounded-full shadow-sm text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ y: 5 }}
                  animate={{ y: 0 }}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="flex items-center">
                    <span className="text-gray-900 dark:text-white">
                      View Profile
                    </span>
                    <ArrowRight className="ml-1 w-3 h-3 text-gray-900 dark:text-white" />
                  </span>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Team Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Our team combines diverse expertise across frontend, backend, and
            design to build innovative solutions that transform educational
            experiences.
          </p>
        </motion.div>

        {renderMacOSWindowPortal()}

        {/* Subtle Decorative Elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full blur-3xl bg-blue-400/5 -z-10"></div>
        <div className="absolute left-0 bottom-1/4 w-72 h-72 rounded-full blur-3xl bg-purple-400/5 -z-10"></div>
      </div>

      {/* Subtle Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none -z-10">
        <svg width="100%" height="100%">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </section>
  );
};

export default TeamSection;
