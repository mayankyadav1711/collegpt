import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  MessageSquare,
  Users,
  Send,
  Smile,
  Search,
  Bell,
  Hash,
  Image,
  Code,
  Calendar,
  ArrowRight,
  Laptop,
  Smartphone,
  Wifi,
  Battery,
  Settings,
  ChevronDown,
  ChevronRight,
  FilePlus,
  GraduationCap,
  BookOpen,
  Award
} from "lucide-react";

const CommunitySection = forwardRef((props, ref) => {
  // State for interactive elements
  const [activeChat, setActiveChat] = useState("general");
  const [messageText, setMessageText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showReaction, setShowReaction] = useState(null);
  const [activeThread, setActiveThread] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScreenOpen, setIsScreenOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const sectionRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Handle mouse movement for lighting effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-animate screen opening
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScreenOpen(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Get current time for status bar
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Simulate typing indicator
  useEffect(() => {
    const typingTimer = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 5000);
    return () => clearInterval(typingTimer);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [activeChat]);

  // Chat data - channels and categories
  const chatCategories = [
    {
      id: "academic",
      name: "Academic Support",
      channels: [
        { id: "general", name: "General", unread: 3 },
        { id: "gate-prep", name: "GATE Preparation", unread: 12 },
        { id: "coding", name: "Coding Help", unread: 0 }
      ]
    },
    {
      id: "career",
      name: "Career & Opportunities",
      channels: [
        { id: "placements", name: "Placements", unread: 7 },
        { id: "internships", name: "Internships", unread: 2 },
        { id: "interviews", name: "Interview Prep", unread: 0 }
      ]
    },
    {
      id: "projects",
      name: "Projects & Hackathons",
      channels: [
        { id: "hackathons", name: "Hackathon Updates", unread: 5 },
        { id: "project-showcase", name: "Project Showcase", unread: 0 },
        { id: "team-finder", name: "Team Finder", unread: 1 }
      ]
    }
  ];

  // Community members
  const members = [
    { id: 1, name: "Mayank Yadav", username: "mayankyadav1711", avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg", status: "online", role: "admin" },
    { id: 2, name: "Divya Kaurani", username: "divya_k", avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg", status: "online", role: "moderator" },
    { id: 3, name: "Darshit Sojitra", username: "darshit_s", avatar: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg", status: "idle", role: "member" },
    { id: 4, name: "Sneha Gupta", username: "sneha_g", avatar: "https://randomuser.me/api/portraits/women/65.jpg", status: "online", role: "member" },
    { id: 5, name: "Gaurav Tiwari", username: "gaurav_t", avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1697348820/qkswpmr6tnzuiqnfqxtu.png", status: "offline", role: "member" }
  ];

  // Chat messages for different channels
  const chats = {
    "general": [
      {
        id: 1,
        user: members[0],
        message: "Hey everyone! Welcome to our community. Feel free to introduce yourself and connect with fellow students.",
        time: "10:30 AM",
        reactions: [
          { emoji: "👋", count: 12 },
          { emoji: "❤️", count: 5 }
        ],
        replies: []
      },
      {
        id: 2,
        user: members[1],
        message: "Hi! I'm Divya, a final year BTech student. I'm interested in AI/ML and web development. Looking forward to connecting with everyone!",
        time: "10:35 AM",
        reactions: [
          { emoji: "👋", count: 8 }
        ],
        replies: []
      },
      {
        id: 3,
        user: members[2],
        message: "Hello! I'm Darshit, a sophomore. I'm working on a project using React and Node.js. Would love to connect with other developers!",
        time: "10:42 AM",
        reactions: [],
        replies: [
          {
            id: 1,
            user: members[3],
            message: "Hi Darshit! I'm working with the same stack. Would love to collaborate sometime!",
            time: "10:45 AM"
          },
          {
            id: 2,
            user: members[2],
            message: "That sounds great! Let's connect in DM to discuss more.",
            time: "10:47 AM"
          }
        ]
      },
      {
        id: 4,
        user: members[4],
        message: "Just joined! I'm Arjun, focusing on competitive coding and placement prep. Anyone here preparing for placements?",
        time: "11:05 AM",
        reactions: [
          { emoji: "👋", count: 3 },
          { emoji: "💯", count: 2 }
        ],
        replies: []
      }
    ],
    "gate-prep": [
      {
        id: 1,
        user: members[1],
        message: "Has anyone checked the new GATE syllabus for 2026? I heard there are some changes in the Computer Networks section.",
        time: "9:15 AM",
        reactions: [
          { emoji: "👀", count: 5 }
        ],
        replies: []
      },
      {
        id: 2,
        user: members[3],
        message: "Yes, they've added some topics related to advanced network security and IoT communication protocols.",
        time: "9:20 AM",
        reactions: [
          { emoji: "👍", count: 7 },
          { emoji: "🙏", count: 4 }
        ],
        replies: []
      },
      {
        id: 3,
        user: members[0],
        message: "I've created a comprehensive study plan for GATE 2026. It covers all topics with week-wise targets. Would anyone be interested?",
        time: "9:45 AM",
        reactions: [
          { emoji: "🔥", count: 15 },
          { emoji: "👍", count: 12 }
        ],
        replies: [
          {
            id: 1,
            user: members[4],
            message: "That would be super helpful! Please share it.",
            time: "9:48 AM"
          },
          {
            id: 2,
            user: members[2],
            message: "Count me in! I'm starting my preparation this month.",
            time: "9:52 AM"
          },
          {
            id: 3,
            user: members[0],
            message: "Great! I'll upload it to the resources section and share the link here by evening.",
            time: "10:00 AM"
          }
        ]
      }
    ],
    "hackathons": [
      {
        id: 1,
        user: members[2],
        message: "Has anyone registered for the upcoming Smart India Hackathon 2025? Registration closes next week.",
        time: "2:15 PM",
        reactions: [
          { emoji: "🚀", count: 8 }
        ],
        replies: []
      },
      {
        id: 2,
        user: members[3],
        message: "Yes! Our team is working on a healthcare solution using IoT and ML. What's your project about?",
        time: "2:25 PM",
        reactions: [],
        replies: []
      },
      {
        id: 3,
        user: members[0],
        message: "I'm looking for team members for Kavach Cybersecurity Hackathon. Need 2 backend developers with experience in Node.js and security protocols.",
        time: "2:30 PM",
        reactions: [
          { emoji: "🔐", count: 4 },
          { emoji: "🙋", count: 7 }
        ],
        replies: [
          {
            id: 1,
            user: members[4],
            message: "I'd like to join. I've worked with Node.js and have experience with OAuth implementation and JWT.",
            time: "2:35 PM"
          },
          {
            id: 2,
            user: members[0],
            message: "Great! Let's discuss in DM about the project details and requirements.",
            time: "2:38 PM"
          }
        ]
      }
    ]
  };

  // Community stats and highlights
  const communityStats = [
    { value: "15K+", label: "Members", icon: Users },
    { value: "8.5K+", label: "Daily Messages", icon: MessageSquare },
    { value: "120+", label: "Project Teams", icon: Code }
  ];

  // Community highlights/features
  const communityFeatures = [
    {
      title: "Academic Support",
      description: "Get help with coursework, exam preparation, and research projects from peers and experts.",
      icon: GraduationCap,
      color: "from-blue-500 to-violet-500"
    },
    {
      title: "Career Guidance",
      description: "Access mentorship, interview preparation, and job opportunities from industry professionals.",
      icon: Award,
      color: "from-amber-500 to-red-500"
    },
    {
      title: "Project Collaboration",
      description: "Find teammates, share ideas, and collaborate on innovative projects and hackathons.",
      icon: Code,
      color: "from-emerald-500 to-cyan-500"
    }
  ];

  // Premium MacBook Frame Component
  const MacBookFrame = ({ children }) => {
    return (
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Screen Body */}
        <div className="relative">
          {/* Screen Container */}
          <div 
            className={`rounded-xl overflow-hidden border-[10px] border-[#1e1e1e] bg-[#1e1e1e] shadow-[0_0_0_1px_rgba(0,0,0,0.2)] relative z-10 transform ${
              isScreenOpen 
                ? "perspective-laptop" 
                : "perspective-laptop-closed"
            } transition-all duration-1000 ease-in-out`}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "50% 100%",
            }}
          >
            {/* Screen Content */}
            <div className="relative flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              {/* Menu Bar */}
              <div className="bg-[#f0f0f0] dark:bg-[#272727] h-7 flex items-center justify-between px-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#29c840]"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">ColleGPT Community</div>
                <div className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300">
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                  <span>{getCurrentTime()}</span>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 h-[448px] overflow-hidden">
                {children}
              </div>
            </div>
          </div>
          
          {/* Screen Bottom Edge */}
          <div className="mx-auto h-2 bg-[#1e1e1e] rounded-b-md relative z-0 w-[98%]"></div>
        </div>

        {/* Base/Keyboard */}
        <div className="relative mx-auto z-0">
          {/* Top Gap */}
          <div className="h-1"></div>
          
          {/* Keyboard Body */}
          <div className="h-10 bg-gradient-to-b from-[#c9c9c9] to-[#b3b3b3] dark:from-[#2a2a2a] dark:to-[#232323] rounded-t-sm">
            {/* Keyboard Center Notch */}
            <div className="h-6 w-32 bg-gradient-to-b from-[#b3b3b3] to-[#a3a3a3] dark:from-[#232323] dark:to-[#1a1a1a] mx-auto rounded-b-md"></div>
          </div>
          
          {/* Base Bottom Edge */}
          <div className="h-0.5 bg-[#a3a3a3] dark:bg-[#1a1a1a] rounded-b-sm mx-auto w-[99.5%]"></div>
        </div>
      </div>
    );
  };

  // iPhone Frame Component
  const IphoneFrame = ({ children }) => {
    return (
      <div className="relative w-[280px] mx-auto">
        {/* iPhone Frame */}
        <div className="relative">
          {/* Main Body */}
          <div className="rounded-[40px] overflow-hidden border-[12px] border-[#1e1e1e] dark:border-[#2a2a2a] bg-white dark:bg-gray-900 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative z-10">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-b-[20px] z-20 flex items-center justify-center">
              <div className="w-[80px] h-[20px] rounded-full bg-black flex items-center justify-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#2a2a2a]"></div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="relative flex flex-col h-[580px] overflow-hidden bg-white dark:bg-gray-900 pt-8">
              {children}
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-black dark:bg-white rounded-full z-20 opacity-80"></div>
      </div>
    );
  };

  // Desktop Community UI Component
  const DesktopCommunityUI = () => (
    <div className="flex h-full bg-white dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Community Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-gray-900 dark:text-white">ColleGPT Community</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                15,420 online
              </div>
            </div>
          </div>
          
          {/* Search */}
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Search channels"
              className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white"
            />
            <Search className="w-4 h-4 text-gray-400 absolute top-2 right-3" />
          </div>
        </div>
        
        {/* Channel Categories */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {chatCategories.map((category) => (
            <div key={category.id} className="mb-3">
              <div className="px-4 py-2 flex items-center justify-between group">
                <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider">
                  {category.name}
                </h4>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
              </div>
              
              <div className="space-y-0.5">
                {category.channels.map((channel) => (
                  <div
                    key={channel.id}
                    className={`px-4 py-1.5 cursor-pointer flex items-center justify-between group ${
                      activeChat === channel.id 
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveChat(channel.id)}
                  >
                    <div className="flex items-center">
                      <Hash className={`w-4 h-4 mr-2 ${activeChat === channel.id ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`} />
                      <span className="text-sm">{channel.name}</span>
                    </div>
                    
                    {channel.unread > 0 && (
                      <div className="min-w-5 h-5 bg-blue-500 dark:bg-blue-600 rounded-full text-[10px] text-white font-medium flex items-center justify-center px-1.5">
                        {channel.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* User Profile */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
          <div className="relative">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={members[0].avatar} 
                alt={members[0].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-50 dark:border-gray-800"></div>
          </div>
          
          <div className="ml-2 flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {members[0].username}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Online
            </div>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Settings className="w-4 h-4 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Channel Header */}
        <div className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between">
          <div className="flex items-center">
            <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {chatCategories
                .flatMap(cat => cat.channels)
                .find(channel => channel.id === activeChat)?.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <div className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center cursor-pointer">
              <Users className="w-4.5 h-4.5" />
            </div>
            <div className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center cursor-pointer">
              <Bell className="w-4.5 h-4.5" />
            </div>
            <div className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center cursor-pointer">
              <Search className="w-4.5 h-4.5" />
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatContainerRef}>
          {/* Welcome Message - only in general */}
          {activeChat === "general" && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 mb-6 border border-blue-100 dark:border-blue-800/20">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Welcome to ColleGPT Community!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Connect, collaborate, and learn with fellow students and mentors.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Chat Messages */}
          {chats[activeChat]?.map((message) => (
            <div key={message.id} className="group">
              <div className="flex">
                <div className="mr-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={message.user.avatar} 
                      alt={message.user.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">{message.user.name}</span>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                    
                    {message.user.role === "admin" && (
                      <span className="ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        ADMIN
                      </span>
                    )}
                    
                    {message.user.role === "moderator" && (
                      <span className="ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                        MOD
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-800 dark:text-gray-200 mt-1">{message.message}</p>
                  
                  {/* Reactions */}
                  {message.reactions?.length > 0 && (
                    <div className="flex gap-1.5 mt-2">
                      {message.reactions.map((reaction, idx) => (
                        <div 
                          key={idx} 
                          className="bg-gray-100 dark:bg-gray-700/70 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-2 py-0.5 flex items-center text-sm cursor-pointer transition-colors"
                        >
                          <span className="mr-1">{reaction.emoji}</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{reaction.count}</span>
                        </div>
                      ))}
                      
                      {/* Add reaction button */}
                      <div 
                        className="bg-gray-100 dark:bg-gray-700/70 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-gray-500 dark:text-gray-400 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        +
                      </div>
                    </div>
                  )}
                  
                  {/* Thread replies */}
                  {message.replies.length > 0 && (
                    <div 
                      className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center"
                      onClick={() => setActiveThread(activeThread === message.id ? null : message.id)}
                    >
                      <MessageSquare className="w-4 h-4 mr-1.5" />
                      {message.replies.length} {message.replies.length === 1 ? "reply" : "replies"}
                    </div>
                  )}
                  
                  {/* Thread popup */}
                  {activeThread === message.id && (
                    <div className="mt-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-3">
                      {message.replies.map((reply) => (
                        <div key={reply.id} className="flex">
                          <div className="mr-2 flex-shrink-0">
                            <div className="w-7 h-7 rounded-full overflow-hidden">
                              <img 
                                src={reply.user.avatar} 
                                alt={reply.user.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center">
                              <span className="font-semibold text-gray-900 dark:text-white text-sm">{reply.user.name}</span>
                              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{reply.time}</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 text-sm">{reply.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img 
                  src={members[1].avatar} 
                  alt={members[1].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-blue-600 dark:text-blue-400 mr-2">{members[1].name}</span>
              is typing
              <span className="flex ml-1">
                <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5"></span>
                <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-200"></span>
                <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-400"></span>
              </span>
            </div>
          )}
        </div>
        
        {/* Message Input */}
        <div className="px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder={`Message #${chatCategories
                .flatMap(cat => cat.channels)
                .find(channel => channel.id === activeChat)?.name}`}
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 pr-20 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                <FilePlus className="w-5 h-5" />
              </button>
              <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                <Smile className="w-5 h-5" />
              </button>
              <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Custom Community UI for Mobile
  const MobileCommunityUI = () => (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-3 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
            <Users className="w-4 h-4" />
          </div>
          <div className="ml-2">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">ColleGPT</h3>
            <div className="text-[10px] text-gray-500 dark:text-gray-400"># {chatCategories
              .flatMap(cat => cat.channels)
              .find(channel => channel.id === activeChat)?.name}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Search className="w-4.5 h-4.5 text-gray-500 dark:text-gray-400" />
          <Bell className="w-4.5 h-4.5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-2">
        {/* Date separator */}
        <div className="flex items-center justify-center my-2 relative">
          <div className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-2 z-10">Today</div>
          <div className="absolute h-px bg-gray-200 dark:bg-gray-700 left-0 right-0 z-0"></div>
        </div>
        
        {/* Mobile chat messages */}
        <div className="space-y-4">
          {chats[activeChat]?.slice(-3).map((message) => (
            <div key={message.id}>
              <div className="flex items-start">
                <div className="mr-2 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={message.user.avatar} 
                      alt={message.user.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{message.user.name}</span>
                    <span className="ml-2 text-[10px] text-gray-500 dark:text-gray-400">{message.time}</span>
                  </div>
                  
                  <p className="text-gray-800 dark:text-gray-200 text-sm">{message.message}</p>
                  
                  {/* Mobile reactions - simplified */}
                  {message.reactions?.length > 0 && (
                    <div className="flex gap-1 mt-1">
                      {message.reactions.map((reaction, idx) => (
                        <div 
                          key={idx} 
                          className="bg-gray-100 dark:bg-gray-800 rounded-full px-1.5 py-0.5 flex items-center"
                        >
                          <span className="mr-1 text-xs">{reaction.emoji}</span>
                          <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">{reaction.count}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Thread indicator */}
                  {message.replies.length > 0 && (
                    <div className="mt-1 text-xs text-blue-600 dark:text-blue-400 flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {message.replies.length} {message.replies.length === 1 ? "reply" : "replies"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                <img 
                  src={members[1].avatar} 
                  alt={members[1].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="flex items-center">
                typing
                <span className="flex ml-1">
                  <span className="w-0.5 h-0.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5"></span>
                  <span className="w-0.5 h-0.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-200"></span>
                  <span className="w-0.5 h-0.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-400"></span>
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Message Input */}
      <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700">
        <div className="relative">
          <input
            type="text"
            placeholder="Message"
            className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-2 pr-16 text-sm text-gray-700 dark:text-white focus:outline-none"
          />
          
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <button className="cursor-pointer">
              <Smile className="w-5 h-5" />
            </button>
            <button className="cursor-pointer">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around py-2">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">Chats</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
            <Users className="w-4 h-4" />
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center">
              3
            </div>
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">People</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Resources</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src={members[0].avatar} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">Profile</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={(node) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="community"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 via-indigo-500/5 to-transparent rounded-full filter blur-[100px]"></div>
      </div>
      
      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.08), transparent 80%)`,
        }}
      />

      {/* Abstract Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Left section: Text and heading */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                <span className="bg-gradient-to-r from-blue-700 dark:from-blue-400 to-indigo-600 dark:to-indigo-300 bg-clip-text text-transparent font-medium">
                  <DecryptedText
                    text="Connect & Collaborate"
                    speed={30}
                    sequential={true}
                    maxIterations={2}
                    animateOn="view"
                  />
                </span>
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Join a Vibrant
              <span className="text-blue-600 dark:text-blue-400 block md:inline">
                {" "}Student Community
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Connect with thousands of students and mentors across India. Share knowledge, collaborate on projects, and accelerate your learning journey with peers who share your passion.
            </motion.p>
            
            {/* Community stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {communityStats.map((stat, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link to="/community" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all">
                <Users className="w-5 h-5 mr-2" />
                <span>Join Our Community</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Right section: 3D illustration */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://i.ibb.co/w8cFwJg/3d-portrait-people-removebg-preview.png"
              alt="Community 3D Illustration"
              className="max-w-full h-auto object-contain mx-auto"
            />
          </motion.div>
        </div>
        
        {/* Device preview with responsive frame */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {!isMobile ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MacBookFrame>
                  <DesktopCommunityUI />
                </MacBookFrame>
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <IphoneFrame>
                  <MobileCommunityUI />
                </IphoneFrame>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Community features */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Community Offers
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our thriving student community to access a wealth of resources, mentorship, and opportunities.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              staggerChildren: 0.1
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {communityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {feature.description}
                </p>
                
                <div className="flex justify-end">
                  <motion.button 
                    className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white relative overflow-hidden"
        >
          {/* Abstract elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Join Our Community?
              </h3>
              <p className="text-white/80 max-w-xl mb-6">
                Connect with fellow students, participate in discussions, and access exclusive resources to accelerate your learning and career journey.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/community">
                  <motion.button 
                    className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg shadow-lg flex items-center transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Join Now
                  </motion.button>
                </Link>
                
                <motion.button 
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-lg flex items-center transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </motion.button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="flex items-end gap-3">
              <motion.div 
                className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm -mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-16 h-16 rounded-lg bg-white/30 backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div 
                className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm -mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add CSS styles for perspective */}
      <style jsx>{`
        .perspective-laptop {
          transform: perspective(2000px) rotateX(0deg);
        }
        .perspective-laptop-closed {
          transform: perspective(2000px) rotateX(-90deg);
        }
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
});

export default CommunitySection;