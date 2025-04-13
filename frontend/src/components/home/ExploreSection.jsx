import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  BookOpen,
  Calendar,
  Compass,
  Users,
  VideoIcon,
  FileText,
  PenTool,
  GraduationCap,
  Archive,
  ArrowRight,
  Code,
} from "lucide-react";

const ExploreSection = forwardRef((props, ref) => {
  return (
    <section id="explore" ref={ref} className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden">
      {/* Matrix-style accent elements */}
      <div className="absolute left-0 top-0 w-full h-full -z-10 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="matrix" width="10" height="10" patternUnits="userSpaceOnUse">
              <text x="5" y="8" className="fill-[#00AEEF]" style={{ font: "5px monospace" }}>10</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#matrix)" />
        </svg>
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
            <span className="bg-slate-200 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4">
              <Layers className="w-4 h-4 mr-1.5" />
              All Features
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Explore <span className="text-[#00AEEF]">ColleGPT</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Explore ColleGPT
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
            A comprehensive suite of tools designed to enhance your academic journey and prepare you for professional success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Notes",
              description: "Comprehensive study materials with visualizations and interactive elements.",
              icon: BookOpen,
              color: "blue",
              link: "/notes",
            },
            {
              title: "Placement Calendar",
              description: "Never miss recruitment opportunities with our smart calendar and alerts.",
              icon: Calendar,
              color: "sky",
              link: "/placements",
            },
            {
              title: "Learning Roadmaps",
              description: "Follow structured learning paths from beginner to advanced levels.",
              icon: Compass,
              color: "purple",
              link: "/roadmaps",
            },
            {
              title: "Student Community",
              description: "Connect with peers, share knowledge, and collaborate on projects.",
              icon: Users,
              color: "indigo",
              link: "/community",
            },
            {
              title: "Video Tutorials",
              description: "Visual explanations of complex topics through expert-led videos.",
              icon: VideoIcon,
              color: "red",
              link: "/videos",
            },
            {
              title: "Quick Reference Guides",
              description: "Concise cheatsheets for exam preparation and interview revision.",
              icon: FileText,
              color: "amber",
              link: "/cheatsheets",
            },
            {
              title: "Project Showcase",
              description: "Display your work and get inspired by other student projects.",
              icon: PenTool,
              color: "green",
              link: "/projects",
            },
            {
              title: "GATE Preparation",
              description: "Specialized resources for Computer Science and AI GATE exams.",
              icon: GraduationCap,
              color: "rose",
              link: "/gate",
            },
            {
              title: "Resource Library",
              description: "Access to books, papers, and articles for in-depth learning.",
              icon: Archive,
              color: "gray",
              link: "/resources",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group"
            >
              <Link to={feature.link}>
                <div className="h-full bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group-hover:border-[#00AEEF]/20 dark:group-hover:border-[#00AEEF]/20">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      feature.color === "blue"
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : feature.color === "sky"
                        ? "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400"
                        : feature.color === "purple"
                        ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                        : feature.color === "indigo"
                        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                        : feature.color === "red"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : feature.color === "amber"
                        ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                        : feature.color === "green"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : feature.color === "rose"
                        ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-[#00AEEF] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-[#00AEEF] font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Get Started CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-[#090F2E] rounded-3xl p-1 shadow-2xl dark:shadow-[#00AEEF]/5 border border-blue-200/50 dark:border-blue-500/10 overflow-hidden">
            <div className="rounded-[calc(1.5rem-4px)] bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-8 md:p-12 relative">
              {/* Matrix-style binary decoration */}
              <div className="absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                <div className="transform -rotate-12">
                  {Array.from({ length: 20 }).map((_, idx) => (
                    <div key={idx} className="font-mono text-xs whitespace-nowrap">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Ready to elevate your <span className="text-[#00AEEF]">college experience?</span>
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    Join thousands of students who have transformed their learning journey with ColleGPT. Get access to premium notes, placement resources, expert guidance, and a supportive community.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/register">
                      <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center justify-center">
                        <span>Get Started Today</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </Link>
                    <Link to="/pricing">
                      <button className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-slate-600 hover:border-[#00AEEF]/30 dark:hover:border-[#00AEEF]/30 transition-all">
                        View Plans
                      </button>
                    </Link>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/3">
                  <div className="relative">
                    {/* Tech-inspired illustration */}
                    <div className="w-full aspect-square rounded-full bg-gradient-to-r from-[#0067b5]/20 to-[#00AEEF]/10 dark:from-[#0067b5]/10 dark:to-[#00AEEF]/5 flex items-center justify-center">
                      <motion.div 
                        className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#0067b5]/30 to-[#00AEEF]/20 dark:from-[#0067b5]/20 dark:to-[#00AEEF]/10 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-1/2 h-1/2 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg">
                          <div className="text-4xl text-[#00AEEF] font-bold">
                            GPT
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Orbiting elements */}
                      <motion.div 
                        className="absolute w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shadow-sm"
                        style={{ top: '10%', right: '30%' }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shadow-sm"
                        style={{ bottom: '15%', right: '20%' }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shadow-sm"
                        style={{ bottom: '30%', left: '15%' }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Code className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </motion.div>
                    </div>
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

export default ExploreSection;