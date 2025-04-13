import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../bits/DecryptedText";
import {
  MessageSquare,
  Users,
  FileText,
  ArrowRight,
  Hash,
  Bell,
  Search,
  PlusCircle,
  ThumbsUp,
  GitBranch,
  Circle,
  Heart,
  Smile,
  Send,
  Mic,
  Image,
  Gift,
  ChevronRight,
  ChevronDown,
  Settings,
  AtSign,
  User,
  Menu,
  Zap,
  Award,
  BellDot,
  MessagesSquare,
  Headphones,
  MapPin,
  Activity,
  Wifi,
  Battery,
  Clock,
  ArrowUpRight,
  Star,
  MessagesSquare as Comments,
  Code2,
  Laptop,
  Smartphone
} from "lucide-react";

const CommunitySection = forwardRef((props, ref) => {
  // State for device and UI interactions
  const [activeChannel, setActiveChannel] = useState("general");
  const [activeMention, setActiveMention] = useState(null);
  const [activeThread, setActiveThread] = useState(null);
  const [deviceView, setDeviceView] = useState("desktop");
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [isNewMessage, setIsNewMessage] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const sectionRef = useRef(null);
  
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
  
  // Simulate typing and new message indicators
  useEffect(() => {
    // Typing effect
    const typingInterval = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 3000);
    
    // New message
    const messageInterval = setInterval(() => {
      setIsNewMessage(true);
      
      setTimeout(() => {
        setIsNewMessage(false);
      }, 4000);
    }, 10000);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(messageInterval);
    };
  }, []);
  
  // Get current time for MacOS status bar
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  // Discord-inspired channel data
  const channels = [
    { id: "general", name: "general", type: "text", unread: 3, mentions: 1 },
    { id: "placements", name: "placements", type: "text", unread: 7, mentions: 3 },
    { id: "gate-prep", name: "gate-prep", type: "text", unread: 0, mentions: 0 },
    { id: "hackathons", name: "hackathons", type: "text", unread: 12, mentions: 0 },
    { id: "projects", name: "project-showcase", type: "text", unread: 0, mentions: 0 },
    { id: "study-lounge", name: "study-lounge", type: "voice", members: 8 },
    { id: "code-help", name: "code-help", type: "text", unread: 0, mentions: 0 }
  ];
  
  // Community members
  const members = [
    { id: 1, name: "Mayank Yadav", username: "mayankyadav1711", avatar: "https://randomuser.me/api/portraits/men/32.jpg", status: "online", role: "admin" },
    { id: 2, name: "Priya Sharma", username: "priya_s", avatar: "https://randomuser.me/api/portraits/women/44.jpg", status: "online", role: "moderator" },
    { id: 3, name: "Rahul Verma", username: "rahul_v", avatar: "https://randomuser.me/api/portraits/men/36.jpg", status: "idle", role: "member" },
    { id: 4, name: "Aditya Kumar", username: "adi_kumar", avatar: "https://randomuser.me/api/portraits/men/48.jpg", status: "offline", role: "member" },
    { id: 5, name: "Neha Gupta", username: "neha_g", avatar: "https://randomuser.me/api/portraits/women/65.jpg", status: "online", role: "member" }
  ];
  
  // Discord-style messages
  const messages = [
    { 
      id: 1, 
      user: members[0], 
      content: "Hey everyone! I just submitted my project for SIH 2025. Anyone else participating?", 
      timestamp: "Today at 10:23 AM",
      reactions: [
        { emoji: "🚀", count: 5, reacted: true },
        { emoji: "👍", count: 3, reacted: false }
      ],
      replies: 3
    },
    { 
      id: 2, 
      user: members[1], 
      content: "Yes! Our team is working on a blockchain solution for supply chain management. What's your project about?", 
      timestamp: "Today at 10:25 AM",
      reactions: [
        { emoji: "👀", count: 2, reacted: false }
      ],
      replies: 0
    },
    { 
      id: 3, 
      user: members[2], 
      content: "I'm looking for team members for the upcoming Kavach hackathon. Need 2 backend developers and 1 UI/UX designer. DM me if interested!", 
      timestamp: "Today at 10:30 AM",
      reactions: [
        { emoji: "🙋", count: 4, reacted: true },
        { emoji: "🔥", count: 2, reacted: false }
      ],
      replies: 7,
      thread: {
        title: "Kavach Hackathon Team Formation",
        messageCount: 7,
        lastActive: "5m ago",
        users: [members[2], members[0], members[4]]
      }
    },
    { 
      id: 4, 
      user: members[4], 
      content: "Did anyone check out the new GATE CSE syllabus for 2026? They've added some new topics related to quantum computing basics.", 
      timestamp: "Today at 10:45 AM",
      reactions: [
        { emoji: "😮", count: 8, reacted: false },
        { emoji: "🧠", count: 5, reacted: true }
      ],
      replies: 12,
      thread: {
        title: "New GATE CSE 2026 Syllabus Discussion",
        messageCount: 12,
        lastActive: "Just now",
        users: [members[4], members[1], members[0], members[3]]
      }
    }
  ];
  
  // Active communities
  const communities = [
    { 
      name: "ColleGPT Community", 
      members: "12.3K", 
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
      channels: 14,
      active: true 
    },
    { 
      name: "GATE Aspirants", 
      members: "8.7K", 
      image: "https://randomuser.me/api/portraits/lego/2.jpg",
      channels: 8,
      active: false 
    },
    { 
      name: "SIH Hackathon 2025", 
      members: "3.4K", 
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
      channels: 6,
      active: false 
    }
  ];
  
  // Thread messages for the active thread
  const threadMessages = [
    {
      id: 1,
      user: members[2],
      content: "I'm looking for team members for the upcoming Kavach hackathon. Need 2 backend developers and 1 UI/UX designer. DM me if interested!",
      timestamp: "Today at 10:30 AM",
      isOriginal: true
    },
    {
      id: 2,
      user: members[0],
      content: "I'm interested! I have experience with Node.js, Express, and MongoDB. What kind of project are you planning?",
      timestamp: "Today at 10:32 AM"
    },
    {
      id: 3,
      user: members[4],
      content: "I'm a UI/UX designer with Figma expertise. Worked on 3 hackathon projects before. Would love to join!",
      timestamp: "Today at 10:35 AM"
    },
    {
      id: 4,
      user: members[2],
      content: "Great! We're thinking of building a cybersecurity solution focused on protecting critical infrastructure. Let's connect in DM to discuss more.",
      timestamp: "Today at 10:40 AM"
    }
  ];
  
  // Community stats
  const communityStats = [
    { label: "Active Members", value: "12.5K+", icon: Users, color: "text-blue-500" },
    { label: "Daily Discussions", value: "250+", icon: MessageSquare, color: "text-purple-500" },
    { label: "Resources Shared", value: "4.8K+", icon: FileText, color: "text-green-500" }
  ];
  
  // Top contributors
  const topContributors = [
    { name: "Mayank Yadav", username: "mayankyadav1711", contributions: 132, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Ananya Patel", username: "ananya_p", contributions: 98, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rajat Sharma", username: "rajat_dev", contributions: 87, avatar: "https://randomuser.me/api/portraits/men/67.jpg" }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };
  
  // MacBook frame component
  const MacbookFrame = ({ children }) => (
    <div className="max-w-5xl mx-auto relative">
      {/* MacBook Top */}
      <div className="bg-[#1e1e1e] dark:bg-[#0c0c0c] h-3 rounded-t-2xl mx-10 relative z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-2 h-2 bg-black/70 rounded-full"></div>
      </div>
      
      {/* MacBook Screen */}
      <div className="relative bg-[#1e1e1e] dark:bg-[#0c0c0c] rounded-xl border-8 border-[#1e1e1e] dark:border-[#0c0c0c] shadow-2xl">
        {/* MacOS Menu Bar */}
        <div className="bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-lg h-7 flex justify-between items-center px-3 rounded-t-md">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f5b] border border-[#e0433d]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbe2e] border border-[#d6a243]"></div>
            <div className="w-3 h-3 rounded-full bg-[#2aca44] border border-[#1aab29]"></div>
          </div>
          
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center">
            <span>Discord</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center">
              <Wifi className="w-3 h-3 mr-1" />
              <Battery className="w-4 h-4" />
            </div>
            <div>{getCurrentTime()}</div>
          </div>
        </div>
        
        {/* Screen content */}
        <div className="bg-white dark:bg-[#36393f] rounded-b-md overflow-hidden">
          {children}
        </div>
      </div>
      
      {/* MacBook Bottom */}
      <div className="bg-[#1e1e1e] dark:bg-[#0c0c0c] h-2 rounded-b-sm mx-4 shadow-2xl"></div>
      <div className="bg-[#1e1e1e] dark:bg-[#0c0c0c] h-1.5 rounded-b-3xl mx-16 shadow-2xl"></div>
    </div>
  );
  
  // iPhone frame component
  const iPhoneFrame = ({ children }) => (
    <div className="max-w-xs mx-auto relative">
      {/* iPhone Frame */}
      <div className="relative bg-[#1e1e1e] dark:bg-[#0c0c0c] rounded-[3rem] border-8 border-[#1e1e1e] dark:border-[#0c0c0c] shadow-2xl pb-4">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-[#1e1e1e] dark:bg-[#0c0c0c] rounded-b-xl z-10"></div>
        
        {/* iPhone Status Bar */}
        <div className="bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-lg h-7 rounded-t-2xl flex justify-between items-center px-6 pt-1.5">
          <div className="text-[10px] font-medium text-slate-700 dark:text-slate-300">
            {getCurrentTime()}
          </div>
          
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
            <Activity className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3.5 h-3.5" />
          </div>
        </div>
        
        {/* iPhone Screen Content */}
        <div className="bg-white dark:bg-[#36393f] h-[500px] rounded-b-2xl overflow-hidden">
          {children}
        </div>
        
        {/* iPhone Bottom Bar */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
      </div>
    </div>
  );
  
  // Discord-style UI for desktop
  const DiscordDesktopUI = () => (
    <div className="flex h-[500px]">
      {/* Servers sidebar */}
      <div className="w-[72px] bg-[#202225] dark:bg-[#121214] flex-shrink-0 py-3 flex flex-col items-center gap-3">
        {/* Home */}
        <div className="w-12 h-12  rounded-2xl flex items-center justify-center text-white hover:rounded-xl transition-all cursor-pointer mb-2">
          <img src="/logo.svg" alt="ColleGPT" className="w-6 h-6" />
        </div>
        
        <div className="w-8 h-0.5 bg-[#36393f] dark:bg-[#2f3136] rounded-full my-1"></div>
        
        {/* Server icons */}
        {communities.map((community, idx) => (
          <div 
            key={idx}
            className={`w-12 h-12 ${
              community.active 
                ? "bg-white dark:bg-[#5865F2] rounded-xl" 
                : "bg-[#36393f] dark:bg-[#36393f] rounded-3xl hover:rounded-xl"
            } flex items-center justify-center transition-all cursor-pointer relative group`}
          >
            <img 
              src={community.image} 
              alt={community.name} 
              className="w-7 h-7 rounded-full object-cover" 
            />
            
            {/* Indicator */}
            {idx === 0 && (
              <div className="absolute -right-0.5 -bottom-0.5 w-5 h-5 bg-rose-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </div>
            )}
            
            {/* Tooltip */}
            <div className="absolute left-16 bg-black text-white text-xs py-1.5 px-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              {community.name}
              <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 border-[6px] border-transparent border-r-black"></div>
            </div>
          </div>
        ))}
        
        {/* Add server button */}
        <div className="w-12 h-12 bg-[#36393f] dark:bg-[#36393f] rounded-3xl hover:rounded-xl flex items-center justify-center transition-all cursor-pointer text-[#3ba55d] hover:bg-[#3ba55d] hover:text-white mt-2">
          <PlusCircle className="w-6 h-6" />
        </div>
      </div>
      
      {/* Channels sidebar */}
      <div className="w-60 bg-[#2f3136] dark:bg-[#2f3136] flex-shrink-0 overflow-y-auto hide-scrollbar">
        {/* Server header */}
        <div className="px-4 h-12 border-b border-[#202225] flex items-center shadow-sm">
          <h2 className="font-bold text-white truncate">ColleGPT Community</h2>
          <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />
        </div>
        
        {/* Channels */}
        <div className="px-2 py-4">
          {/* Text channels */}
          <div className="px-2 mb-1 flex items-center justify-between group">
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center">
              <ChevronDown className="w-3 h-3 mr-1" />
              Text Channels
            </div>
            <PlusCircle className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-300" />
          </div>
          
          {channels.filter(c => c.type === "text").map((channel) => (
            <div 
              key={channel.id}
              className={`flex items-center px-2 py-1 rounded ${
                activeChannel === channel.id 
                  ? "bg-[#393c43] text-white" 
                  : "text-gray-400 hover:bg-[#34373c] hover:text-gray-300"
              } cursor-pointer relative group mb-0.5`}
              onClick={() => setActiveChannel(channel.id)}
            >
              <Hash className="w-5 h-5 mr-1.5 flex-shrink-0" />
              <span className="truncate">{channel.name}</span>
              
              {/* Unread indicator */}
              {channel.unread > 0 && (
                <div className="ml-auto flex items-center gap-1.5">
                  {channel.mentions > 0 && (
                    <div className="min-w-5 h-5 bg-red-500 rounded-full text-[11px] text-white flex items-center justify-center px-1">
                      {channel.mentions}
                    </div>
                  )}
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
          
          {/* Voice channels */}
          <div className="px-2 mt-4 mb-1 flex items-center justify-between group">
            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center">
              <ChevronDown className="w-3 h-3 mr-1" />
              Voice Channels
            </div>
            <PlusCircle className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-300" />
          </div>
          
          {channels.filter(c => c.type === "voice").map((channel) => (
            <div 
              key={channel.id}
              className="flex items-center px-2 py-1 rounded text-gray-400 hover:bg-[#34373c] hover:text-gray-300 cursor-pointer"
            >
              <Headphones className="w-5 h-5 mr-1.5 flex-shrink-0" />
              <span className="truncate">{channel.name}</span>
              
              {/* Member count */}
              <div className="ml-auto text-xs text-green-400 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></div>
                {channel.members}
              </div>
            </div>
          ))}
        </div>
        
        {/* User area */}
        <div className="absolute bottom-0 left-[72px] right-0 h-[52px] bg-[#292b2f] dark:bg-[#292b2f] px-2 flex items-center">
          <div className="flex items-center flex-1">
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
              <img src={members[0].avatar} alt={members[0].name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#292b2f]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">
                {members[0].username}
              </div>
              <div className="text-[10px] text-gray-400">
                Online
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-md hover:bg-[#36393f] transition-colors flex items-center justify-center text-gray-400 hover:text-gray-300 cursor-pointer">
              <Mic className="w-5 h-5" />
            </div>
            <div className="w-8 h-8 rounded-md hover:bg-[#36393f] transition-colors flex items-center justify-center text-gray-400 hover:text-gray-300 cursor-pointer">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="w-8 h-8 rounded-md hover:bg-[#36393f] transition-colors flex items-center justify-center text-gray-400 hover:text-gray-300 cursor-pointer">
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main chat area */}
      <div className="flex-1 flex flex-col bg-[#36393f] dark:bg-[#36393f] overflow-hidden">
        {/* Channel header */}
        <div className="h-12 border-b border-[#202225] flex items-center px-4 shadow-sm">
          <Hash className="w-5 h-5 text-gray-400 mr-1.5" />
          <h3 className="font-bold text-white">{channels.find(c => c.id === activeChannel)?.name}</h3>
          
          {/* Channel topic */}
          <div className="h-5 mx-2 border-r border-gray-600"></div>
          <div className="text-sm text-gray-400 truncate">
            {activeChannel === "general" ? "General discussions for all students and developers" : 
             activeChannel === "placements" ? "Placement strategies, interview experiences, and job opportunities" :
             activeChannel === "hackathons" ? "Upcoming hackathons, team formation, and project ideas" : 
             "ColleGPT community discussions"}
          </div>
          
          {/* Channel actions */}
          <div className="ml-auto flex items-center gap-4 text-gray-400">
            <Bell className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <span className="text-xs p-1 hover:bg-[#42464D] rounded cursor-pointer">
              <Users className="w-5 h-5" />
            </span>
            <Search className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <MessagesSquare className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <span className="w-0.5 h-5 bg-gray-600"></span>
            <span className="w-7 h-7 bg-gray-700 hover:bg-gray-600 transition-colors rounded-full flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5" />
            </span>
          </div>
        </div>
        
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 hide-scrollbar">
          {/* Welcome message */}
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center mb-4">
              <Hash className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-[28px] font-bold text-white mb-1">
              Welcome to #{channels.find(c => c.id === activeChannel)?.name}!
            </h2>
            <p className="text-gray-400 text-base">
              This is the start of the #{channels.find(c => c.id === activeChannel)?.name} channel.
            </p>
          </div>
          
          {/* Message divider */}
          <div className="flex items-center my-4">
            <div className="h-px flex-1 bg-gray-700"></div>
            <div className="px-2 text-xs text-gray-400">April 13, 2025</div>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>
          
          {/* Chat messages */}
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`py-1 px-2 hover:bg-[#32353B] rounded-md transition-colors relative group ${isNewMessage && message.id === messages.length ? "animate-highlight-bg" : ""}`}
            >
              <div className="flex">
                {/* Avatar */}
                <div className="w-10 h-10 mr-3 flex-shrink-0 mt-0.5">
                  <img src={message.user.avatar} alt={message.user.name} className="rounded-full" />
                </div>
                
                {/* Message content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <span className="font-medium text-white hover:underline cursor-pointer">{message.user.name}</span>
                    <span className="ml-2 text-xs text-gray-400">{message.timestamp}</span>
                    
                    {message.user.role === "admin" && (
                      <div className="ml-2 px-1 text-[10px] font-medium bg-[#ED4245] text-white rounded">
                        ADMIN
                      </div>
                    )}
                    
                    {message.user.role === "moderator" && (
                      <div className="ml-2 px-1 text-[10px] font-medium bg-[#5865F2] text-white rounded">
                        MOD
                      </div>
                    )}
                  </div>
                  
                  <div className="text-gray-100 whitespace-pre-wrap">
                    {message.content}
                  </div>
                  
                  {/* Thread indicator */}
                  {message.thread && (
                    <div 
                      className="mt-1 flex items-center text-[#5865F2] text-xs hover:underline cursor-pointer gap-1"
                      onClick={() => setActiveThread(message.thread)}
                    >
                      <MessagesSquare className="w-4 h-4" />
                      <span>{message.replies} replies</span>
                      <span className="text-gray-400">· {message.thread.lastActive}</span>
                    </div>
                  )}
                  
                  {/* Reactions */}
                  {message.reactions?.length > 0 && (
                    <div className="flex gap-1 mt-1.5">
                      {message.reactions.map((reaction, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center rounded-[0.4rem] text-xs py-0.5 px-1 ${
                            reaction.reacted 
                              ? "bg-[#3e4249] border-[#5865F2]/40 border" 
                              : "bg-[#2f3136] hover:bg-[#34373c]"
                          } cursor-pointer select-none`}
                        >
                          <span className="mr-1">{reaction.emoji}</span>
                          <span className={reaction.reacted ? "text-[#5865F2]" : "text-gray-300"}>
                            {reaction.count}
                          </span>
                        </div>
                      ))}
                      <div 
                        className="flex items-center rounded-[0.4rem] text-xs py-0.5 px-1 bg-[#2f3136] hover:bg-[#34373c] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      >
                        <span className="text-gray-300">+</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Message actions */}
                <div className="absolute right-2 top-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-[#36393f] p-1 rounded-md shadow-sm">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#32353B] text-gray-400 hover:text-gray-300 cursor-pointer">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#32353B] text-gray-400 hover:text-gray-300 cursor-pointer">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#32353B] text-gray-400 hover:text-gray-300 cursor-pointer">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* New message indicator */}
              {isNewMessage && message.id === messages.length && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-sm animate-pulse">
                  NEW
                </div>
              )}
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="text-gray-400 text-xs mt-3 flex items-center">
              <div className="w-8 h-8 mr-3">
                <img src={members[1].avatar} alt={members[1].name} className="rounded-full animate-pulse" />
              </div>
              <div className="flex items-center">
                <span className="text-[#5865F2] font-medium">{members[1].name}</span>
                <span className="ml-2">is typing</span>
                <span className="ml-1 flex">
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-200"></span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-400"></span>
                </span>
              </div>
            </div>
          )}
          
          {/* Bottom space for scroll */}
          <div className="h-4"></div>
        </div>
        
        {/* Message input */}
        <div className="px-4 pb-6">
          <div className="bg-[#40444b] dark:bg-[#40444b] rounded-lg flex items-center px-4">
            {/* Upload button */}
            <div className="w-6 h-6 text-gray-400 hover:text-gray-300 cursor-pointer">
              <PlusCircle className="w-5 h-5" />
            </div>
            
            {/* Text input */}
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name}`} 
              className="flex-1 bg-transparent border-0 px-4 py-2.5 text-gray-200 placeholder-gray-400 focus:ring-0 focus:outline-none text-base"
            />
            
            {/* Message actions */}
            <div className="flex gap-3">
              <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                <Gift className="w-5 h-5" />
              </div>
              <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                <Image className="w-5 h-5" />
              </div>
              <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                <Smile className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thread panel - conditionally shown */}
      {activeThread && (
        <div className="w-[320px] bg-[#36393f] dark:bg-[#36393f] border-l border-[#202225] flex flex-col">
          {/* Thread header */}
          <div className="h-12 border-b border-[#202225] flex items-center px-4">
            <h3 className="font-semibold text-white text-sm">Thread</h3>
            <div className="ml-2 text-xs text-gray-400">{activeThread.title}</div>
            
            <div onClick={() => setActiveThread(null)} className="ml-auto w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#32353B] text-gray-400 hover:text-gray-300 cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
          
          {/* Thread messages */}
          <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-3">
            {threadMessages.map((message, idx) => (
              <div key={idx} className={`py-1 px-2 hover:bg-[#32353B] rounded-md transition-colors mb-4 ${message.isOriginal ? "bg-[#2f3136]" : ""}`}>
                <div className="flex">
                  {/* Avatar */}
                  <div className="w-8 h-8 mr-2 flex-shrink-0 mt-0.5">
                    <img src={message.user.avatar} alt={message.user.name} className="rounded-full" />
                  </div>
                  
                  {/* Message content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <span className="font-medium text-white text-sm hover:underline cursor-pointer">{message.user.name}</span>
                      <span className="ml-2 text-[10px] text-gray-400">{message.timestamp}</span>
                    </div>
                    
                    <div className="text-gray-100 text-sm whitespace-pre-wrap">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Thread input */}
          <div className="p-4">
            <div className="bg-[#40444b] dark:bg-[#40444b] rounded-lg flex items-center px-3">
              <input 
                type="text" 
                placeholder="Reply to thread"
                className="flex-1 bg-transparent border-0 py-2 text-sm text-gray-200 placeholder-gray-400 focus:ring-0 focus:outline-none"
              />
              
              <div className="flex gap-2">
                <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <Image className="w-4 h-4" />
                </div>
                <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <Smile className="w-4 h-4" />
                </div>
                <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Thread participants */}
          <div className="p-4 border-t border-[#202225] bg-[#2f3136]">
            <div className="text-xs text-gray-400 mb-2">PARTICIPANTS • {activeThread.users.length}</div>
            <div className="flex flex-wrap gap-2">
              {activeThread.users.map((user, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="ml-1 text-xs text-gray-200">
                    {user.name.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
  // Discord-style UI for mobile
  const DiscordMobileUI = () => (
    <div className="flex flex-col h-[500px] relative">
      {/* Mobile header */}
      <div className="bg-[#36393f] dark:bg-[#36393f] border-b border-[#202225] flex items-center px-3 py-3">
        <div className="w-8 h-8 rounded-md hover:bg-[#32353B] flex items-center justify-center text-gray-200 cursor-pointer">
          <Menu className="w-5 h-5" />
        </div>
        
        <div className="flex items-center ml-2">
          <Hash className="w-5 h-5 text-gray-400 mr-1" />
          <h3 className="font-bold text-white">{channels.find(c => c.id === activeChannel)?.name}</h3>
        </div>
        
        <div className="ml-auto flex gap-3">
          <Bell className="w-5 h-5 text-gray-200" />
          <Users className="w-5 h-5 text-gray-200" />
          <Search className="w-5 h-5 text-gray-200" />
        </div>
      </div>
      
      {/* Mobile messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar bg-[#36393f] dark:bg-[#36393f] px-3 py-2">
        {/* Message divider */}
        <div className="flex items-center my-3">
          <div className="h-px flex-1 bg-gray-700"></div>
          <div className="px-2 text-xs text-gray-400">April 13, 2025</div>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>
        
        {/* Mobile chat messages - simplified for mobile */}
        {messages.slice(0, 2).map((message) => (
          <div key={message.id} className="mb-4">
            <div className="flex items-start">
              {/* Avatar */}
              <div className="w-8 h-8 mr-2 flex-shrink-0">
                <img src={message.user.avatar} alt={message.user.name} className="rounded-full" />
              </div>
              
              {/* Message content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap">
                  <span className="font-medium text-white text-sm">{message.user.name}</span>
                  <span className="ml-1.5 text-[10px] text-gray-400">{message.timestamp}</span>
                </div>
                
                <div className="text-gray-100 text-sm">
                  {message.content}
                </div>
                
                {/* Reactions - simplified */}
                {message.reactions?.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {message.reactions.map((reaction, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center rounded-md text-[10px] py-0.5 px-1 bg-[#2f3136]"
                      >
                        <span className="mr-0.5">{reaction.emoji}</span>
                        <span className="text-gray-300">{reaction.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator - mobile */}
        {isTyping && (
          <div className="text-gray-400 text-xs mt-2 flex items-center">
            <div className="w-6 h-6 mr-2">
              <img src={members[1].avatar} alt={members[1].name} className="rounded-full animate-pulse" />
            </div>
            <div className="flex items-center">
              <span className="text-[#5865F2] font-medium">{members[1].name}</span>
              <span className="ml-1 flex">
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5"></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-200"></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-400"></span>
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile input */}
      <div className="bg-[#36393f] dark:bg-[#36393f] border-t border-[#202225] p-2">
        <div className="bg-[#40444b] dark:bg-[#40444b] rounded-lg flex items-center px-2">
          <div className="p-2 text-gray-400">
            <PlusCircle className="w-5 h-5" />
          </div>
          
          <input 
            type="text"
            placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name}`}
            className="flex-1 bg-transparent border-0 py-2 text-sm text-gray-200 placeholder-gray-400 focus:ring-0 focus:outline-none"
          />
          
          <div className="flex gap-2 p-2">
            <Image className="w-5 h-5 text-gray-400" />
            <Smile className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="bg-[#202225] dark:bg-[#202225] border-t border-[#18191c] flex justify-around py-2 text-gray-400">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img src={communities[0].image} alt="Home" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center text-white relative">
          <MessageSquare className="w-6 h-6" />
          <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
            3
          </div>
        </div>
        
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <BellDot className="w-6 h-6" />
        </div>
        
        <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img src={members[0].avatar} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-1 right-1.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#202225]"></div>
        </div>
      </div>
    </div>
  );
  
  return (
    <section
      ref={(node) => {
        // Assign the ref both to the forwarded ref and our local ref
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="community"
      className="relative min-h-screen py-16 bg-slate-50 dark:bg-[#080816] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#0067b5]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>
      
      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,174,239,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
              <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
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
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Student <span className="text-[#00AEEF]">Community</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Join thousands of students in our active Discord community. Ask questions, share insights,
            collaborate on projects, and grow together.
          </motion.p>
        </div>
        
        {/* Device toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex p-1 shadow-md">
            <button 
              className={`px-4 py-1.5 rounded-full transition-all ${
                deviceView === 'desktop' 
                  ? 'bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-300'
              }`}
              onClick={() => setDeviceView('desktop')}
            >
              <span className="flex items-center text-sm font-medium">
                <Laptop className="w-4 h-4 mr-1.5" />
                Desktop View
              </span>
            </button>
            <button 
              className={`px-4 py-1.5 rounded-full transition-all ${
                deviceView === 'mobile' 
                  ? 'bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-300'
              }`}
              onClick={() => setDeviceView('mobile')}
            >
              <span className="flex items-center text-sm font-medium">
                <Smartphone className="w-4 h-4 mr-1.5" />
                Mobile View
              </span>
            </button>
          </div>
        </div>
        
        {/* Main device display */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {deviceView === 'desktop' ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <MacbookFrame>
                  <DiscordDesktopUI />
                </MacbookFrame>
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <iPhoneFrame>
                  <DiscordMobileUI />
                </iPhoneFrame>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Community stats and features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-700/50"
          >
            <div className="p-6 border-b border-slate-200 dark:border-slate-700/50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Community Channels
              </h3>
              <button className="px-4 py-2 bg-[#5865F2] hover:bg-[#4752c4] transition-colors text-white rounded-lg flex items-center text-sm shadow-lg shadow-indigo-500/20">
                <MessageSquare className="w-4 h-4 mr-1.5" />
                Join Discord
              </button>
            </div>
            
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {channels.map((channel, idx) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                  className="bg-white/70 dark:bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-600/50 shadow-sm p-4 relative group hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg ${
                      channel.type === "voice" 
                        ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
                        : "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    }`}>
                      {channel.type === "voice" ? (
                        <Headphones className="w-5 h-5" />
                      ) : (
                        <Hash className="w-5 h-5" />
                      )}
                    </div>
                    
                    {/* Unread indicator */}
                    {channel.unread > 0 && (
                      <div className="absolute top-2 right-2 flex items-center gap-1">
                        {channel.mentions > 0 ? (
                          <div className="min-w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center px-1.5">
                            {channel.mentions}
                          </div>
                        ) : (
                          <div className="w-2 h-2 bg-[#5865F2] rounded-full"></div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    #{channel.name}
                  </h4>
                  
                  {channel.type === "text" ? (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {channel.unread > 0 ? `${channel.unread} unread messages` : "No new messages"}
                    </div>
                  ) : (
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                      <Circle className="w-2 h-2 fill-green-500 mr-1" />
                      {channel.members} members active
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Community Stats */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-white/20 dark:border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Community Stats
              </h3>
              
              <div className="space-y-4">
                {communityStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-slate-100/70 dark:bg-slate-700/70 flex items-center justify-center mr-4 ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Contributors */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md border border-white/20 dark:border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Top Contributors
              </h3>
              
              <div className="space-y-4">
                {topContributors.map((user, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {user.name}
                        {idx === 0 && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500 px-1.5 py-0.5 rounded-full">
                            #1 Contributor
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        @{user.username}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-[#00AEEF] flex items-center">
                      <Star className="w-3.5 h-3.5 mr-1 text-yellow-400 fill-yellow-400" />
                      {user.contributions} pts
                    </div>
                  </div>
                ))}
                
                <button className="w-full text-center text-[#00AEEF] text-sm hover:underline mt-2 flex items-center justify-center">
                  View All Contributors
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Community Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "Discussion Forums",
              description: "Engage in structured threads and channels covering everything from academic topics to career advice and technical help.",
              icon: MessageSquare,
              color: "bg-gradient-to-br from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/10",
              iconBg: "bg-blue-100 dark:bg-blue-900/30",
              iconColor: "text-blue-600 dark:text-blue-400"
            },
            {
              title: "Collaborative Projects",
              description: "Find teammates, collaborate on innovative projects, and showcase your work to the community for feedback and recognition.",
              icon: Code2,
              color: "bg-gradient-to-br from-purple-500/10 to-purple-600/5 dark:from-purple-500/20 dark:to-purple-600/10",
              iconBg: "bg-purple-100 dark:bg-purple-900/30",
              iconColor: "text-purple-600 dark:text-purple-400"
            },
            {
              title: "Mentorship Network",
              description: "Connect with experienced seniors and industry professionals for guidance, mock interviews, and career advice.",
              icon: Users,
              color: "bg-gradient-to-br from-green-500/10 to-green-600/5 dark:from-green-500/20 dark:to-green-600/10",
              iconBg: "bg-green-100 dark:bg-green-900/30",
              iconColor: "text-green-600 dark:text-green-400"
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`${feature.color} backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-xl shadow flex items-center justify-center mb-5`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#00AEEF] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {feature.description}
              </p>
              
              <button className="text-[#00AEEF] font-medium flex items-center text-sm group-hover:underline">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Join the community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#5865F2] to-[#7289da] rounded-3xl p-8 text-white relative overflow-hidden"
        >
          {/* Abstract decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Join Our Community</h3>
              </div>
              
              <p className="text-white/80 max-w-xl mb-6">
                Connect with thousands of students, share knowledge, participate in events, form project teams, and accelerate your learning journey through our vibrant Discord community.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white text-[#5865F2] hover:bg-slate-100 font-medium rounded-lg flex items-center shadow-lg transition-all"
                >
                  <BellDot className="w-5 h-5 mr-2" />
                  Join Discord
                </a>
                
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-lg flex items-center transition-all"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm absolute -top-2 -left-2 animate-pulse"></div>
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm absolute -bottom-4 -right-4 animate-pulse animation-delay-700"></div>
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold">12K+</div>
                    <div className="text-sm font-medium text-white/90">Community Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default CommunitySection;