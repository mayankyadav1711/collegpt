import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  PenTool,
  FileCheck,
  Clock,
  Download,
  User,
  FileText,
  Heart,
  Bookmark,
  Sparkles,
} from "lucide-react";

const NotesSection = forwardRef((props, ref) => {
  // State for active category tab
  const [activeTab, setActiveTab] = useState("all");

  // Notes categories for tabs
  const noteCategories = [
    { id: "all", name: "All" },
    { id: "cs", name: "Computer Science" },
    { id: "it", name: "Information Technology" },
    { id: "gate", name: "GATE" },
    { id: "interview", name: "Interview Prep" }
  ];

  // Notes data
  const notesData = [
    {
      title: "Data Structures & Algorithms",
      category: "cs",
      pages: 42,
      author: "Prof. Sharma",
      downloads: "4.5K",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1800&auto=format&fit=crop",
      featured: true
    },
    {
      title: "Advanced Database Systems",
      category: "cs",
      pages: 38,
      author: "Dr. Patel",
      downloads: "3.2K",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1800&auto=format&fit=crop",
      featured: false
    },
    {
      title: "Computer Networks",
      category: "cs",
      pages: 56,
      author: "Prof. Kumar",
      downloads: "2.8K",
      thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1800&auto=format&fit=crop",
      featured: false
    },
    {
      title: "Cloud Computing Architecture",
      category: "it",
      pages: 34,
      author: "Dr. Singh",
      downloads: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1800&auto=format&fit=crop",
      featured: false
    },
    {
      title: "GATE CSE Complete Notes",
      category: "gate",
      pages: 120,
      author: "Prof. Verma",
      downloads: "8.7K",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1800&auto=format&fit=crop",
      featured: true
    },
    {
      title: "Interview Questions: System Design",
      category: "interview",
      pages: 28,
      author: "Tech Placement Team",
      downloads: "6.3K",
      thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1800&auto=format&fit=crop",
      featured: false
    }
  ];

  // Filter notes based on active tab
  const filteredNotes = activeTab === "all" 
    ? notesData 
    : notesData.filter(note => note.category === activeTab);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="notes" ref={ref} className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden">
      {/* Matrix-style accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      
      {/* Digital particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#00AEEF]/5 filter blur-[60px]"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-indigo-500/5 filter blur-[40px]"></div>
      </div>
      
      {/* Digital code snippets */}
      <div className="absolute right-10 top-10 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"<div className='matrix-of-knowledge'>"}
        <br />&nbsp;&nbsp;{"{ notes.map((note) => ("}
        <br />&nbsp;&nbsp;&nbsp;&nbsp;{"<Card key={note.id} data={note} />"}
        <br />&nbsp;&nbsp;{")); }"}
        <br />{"</div>"}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="bg-blue-50 dark:bg-[#00AEEF]/5 text-[#00AEEF] text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4 border border-blue-100 dark:border-[#00AEEF]/20">
              <BookOpen className="w-4 h-4 mr-1.5" />
              Smart Study Materials
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Interactive <span className="text-[#00AEEF]">Notes</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Interactive Notes
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto mt-4"
          >
            Premium quality notes with visual explanations, interactive diagrams, and practice problems designed for maximum retention.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div 
          className="mb-12" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {noteCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all overflow-hidden ${
                  activeTab === category.id
                    ? "text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {activeTab === category.id && (
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notes Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNotes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div
                className={`h-full bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                  note.featured
                    ? "border-2 border-[#00AEEF]/20"
                    : "border border-slate-200 dark:border-slate-700"
                }`}
              >
                {/* Thumbnail with hover effect */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={note.thumbnail}
                    alt={note.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Download button with hover reveal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-4 py-2.5 bg-[#00AEEF] text-white rounded-full flex items-center font-medium transform hover:scale-105 transition-all">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-2.5 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full">
                      {noteCategories.find((cat) => cat.id === note.category)?.name || "General"}
                    </span>
                  </div>

                  {/* Featured badge if needed */}
                  {note.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-[#00AEEF] text-white rounded-full flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-2">
                    {note.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {note.author}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1.5" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {note.pages} pages
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#00AEEF]">
                      <Download className="w-4 h-4 mr-1.5" />
                      <span className="text-sm font-medium">
                        {note.downloads} downloads
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note preview card with Matrix-inspired design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-3xl p-1 shadow-xl dark:shadow-[#00AEEF]/5 border border-blue-200/50 dark:border-blue-500/10"
        >
          <div className="bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-[calc(1.5rem-4px)] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Sample PDF page preview */}
              <div className="md:w-1/2 p-8">
                <div className="bg-slate-100 dark:bg-slate-900/80 rounded-xl p-6 shadow-inner h-full relative">
                  {/* Terminal-style header */}
                  <div className="flex justify-between mb-6 items-center">
                    <div className="flex items-center">
                      <div className="flex space-x-1.5 mr-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <h3 className="font-mono font-bold text-slate-900 dark:text-white">
                        data_structures.pdf
                      </h3>
                    </div>
                    <div className="text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                      Page 14/42
                    </div>
                  </div>

                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    Binary Search Tree
                  </h4>

                  <div className="mb-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-mono">
                      // Definition:
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      A binary search tree is a binary tree where each node has up to two children, with all values in the left subtree less than the node's value and all values in the right subtree greater.
                    </p>
                  </div>

                  {/* Sample diagram */}
                  <div className="flex justify-center mb-4">
                    <div className="w-40 h-40 bg-white dark:bg-slate-800 rounded-lg shadow flex items-center justify-center p-2">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="20" r="15" className="fill-[#00AEEF]" />
                        <text x="60" y="25" textAnchor="middle" className="fill-white text-xs font-bold">10</text>

                        <line x1="50" y1="32" x2="30" y2="50" className="stroke-slate-400 stroke-2" />
                        <circle cx="30" cy="65" r="15" className="fill-[#00AEEF]" />
                        <text x="30" y="70" textAnchor="middle" className="fill-white text-xs font-bold">5</text>

                        <line x1="70" y1="32" x2="90" y2="50" className="stroke-slate-400 stroke-2" />
                        <circle cx="90" cy="65" r="15" className="fill-[#00AEEF]" />
                        <text x="90" y="70" textAnchor="middle" className="fill-white text-xs font-bold">15</text>
                      </svg>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 font-mono">
                    // Time Complexity:
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-2 shadow-sm flex justify-around text-sm">
                    <div>
                      <div className="text-center font-mono text-[#00AEEF]">O(log n)</div>
                      <div className="text-center text-xs text-slate-500 dark:text-slate-400">Search</div>
                    </div>
                    <div>
                      <div className="text-center font-mono text-[#00AEEF]">O(log n)</div>
                      <div className="text-center text-xs text-slate-500 dark:text-slate-400">Insert</div>
                    </div>
                    <div>
                      <div className="text-center font-mono text-[#00AEEF]">O(log n)</div>
                      <div className="text-center text-xs text-slate-500 dark:text-slate-400">Delete</div>
                    </div>
                  </div>

                  {/* Matrix-style highlight markers */}
                  <div className="absolute top-4 right-4 opacity-70">
                    <div className="flex gap-1">
                      <motion.div 
                        className="w-2 h-8 bg-[#00AEEF] rounded-full"
                        animate={{ opacity: [0.7, 0.5, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <motion.div 
                        className="w-2 h-8 bg-green-300 dark:bg-green-500 rounded-full"
                        animate={{ opacity: [0.7, 0.4, 0.7] }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Not your average study notes
                </h3>

                <ul className="space-y-5">
                  {[
                    {
                      title: "Comprehensive Coverage",
                      description: "From fundamentals to advanced topics, covering entire syllabus with detailed explanations.",
                      icon: BookOpen,
                      color: "text-[#00AEEF] bg-blue-100 dark:bg-blue-900/30",
                    },
                    {
                      title: "Visual Learning",
                      description: "Diagrams, flowcharts, and visualizations that simplify complex concepts.",
                      icon: PenTool,
                      color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
                    },
                    {
                      title: "Practice Problems",
                      description: "Curated problems with step-by-step solutions to strengthen your understanding.",
                      icon: FileCheck,
                      color: "text-green-500 bg-green-100 dark:bg-green-900/30",
                    },
                    {
                      title: "Previous Year Questions",
                      description: "Analysis and solutions for past exam papers and placement questions.",
                      icon: Clock,
                      color: "text-amber-500 bg-amber-100 dark:bg-amber-900/30",
                    },
                  ].map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${feature.color} flex items-center justify-center mr-4`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/notes">
                    <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      <span>Explore All Notes</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default NotesSection;