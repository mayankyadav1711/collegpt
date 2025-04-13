// components/sections/RoadmapsSection.jsx
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Compass,
  Laptop,
  Code,
  Terminal,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";

const RoadmapsSection = forwardRef((props, ref) => {
  // Roadmap data
  const roadmapData = [
    {
      title: "Full Stack Development",
      level: "Beginner to Advanced",
      duration: "6 months",
      modules: 12,
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Machine Learning Engineer",
      level: "Intermediate to Expert",
      duration: "8 months",
      modules: 14,
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "DevOps Specialist",
      level: "Beginner to Intermediate",
      duration: "5 months",
      modules: 10,
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="roadmaps"
      ref={ref}
      className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
    >
      {/* Matrix-style accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* Digital code snippets */}
      <div className="absolute left-10 bottom-20 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"const roadmap = new LearningPath();"}
        <br />
        {"roadmap.addMilestone('Fundamentals', 4);"}
        <br />
        {"roadmap.addMilestone('Advanced', 6);"}
        <br />
        {"roadmap.addMilestone('Expert', 2);"}
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
            <span className="bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4 border border-purple-100 dark:border-purple-500/20">
              <Compass className="w-4 h-4 mr-1.5" />
              Structured Learning Paths
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Learning <span className="text-[#00AEEF]">Roadmaps</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Learning Roadmaps
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
            Follow structured learning paths from beginner to professional
            level with curated resources, projects, and milestone assessments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapData.map((roadmap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
            >
              {/* Roadmap image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={roadmap.image}
                  alt={roadmap.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Tech-inspired overlay elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/30 to-purple-600/30 backdrop-blur-sm"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Content positioned over the image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-[#00AEEF] transition-colors">
                    {roadmap.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#00AEEF]" />
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Layers className="w-4 h-4 mr-1 text-[#00AEEF]" />
                      <span>{roadmap.modules} modules</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="mb-4">
                  <span className="text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2.5 py-1 rounded-full">
                    {roadmap.level}
                  </span>
                </div>

                {/* Progress visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Learning progress
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      <span className="text-[#00AEEF]">3</span>/{roadmap.modules}
                    </span>
                  </div>
                  <div className="relative w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-800 dark:text-white font-medium transition-colors flex items-center justify-center group">
                    <span>Continue Learning</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-[#092444] border border-slate-200 dark:border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Full Stack Development{" "}
              <span className="text-[#00AEEF]">Roadmap</span>
            </h3>

            <div className="relative">
              {/* Main timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0067b5] via-[#00AEEF] to-green-400 transform -translate-x-1/2"></div>

              {/* Timeline nodes */}
              <div className="space-y-24">
                {[
                  {
                    title: "Frontend Fundamentals",
                    timeframe: "Month 1-2",
                    skills: [
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "Responsive Design",
                    ],
                    description:
                      "Master the core technologies that power the web and build responsive interfaces.",
                    icon: Laptop,
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    title: "Frontend Frameworks",
                    timeframe: "Month 2-3",
                    skills: [
                      "React.js",
                      "State Management",
                      "Component Design",
                      "API Integration",
                    ],
                    description:
                      "Learn to build efficient single-page applications with modern frameworks.",
                    icon: Code,
                    color: "from-cyan-400 to-blue-500",
                  },
                  {
                    title: "Backend Development",
                    timeframe: "Month 3-5",
                    skills: [
                      "Node.js",
                      "Express",
                      "RESTful APIs",
                      "Authentication",
                    ],
                    description:
                      "Create robust server applications and APIs that power your frontend.",
                    icon: Terminal,
                    color: "from-green-400 to-emerald-500",
                  },
                ].map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Line connecting to timeline */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 h-1 bg-[#00AEEF] transform -translate-y-1/2"
                      style={{
                        width:
                          idx % 2 === 0
                            ? "calc(50% - 2.5rem)"
                            : "calc(50% - 2.5rem)",
                        left: idx % 2 === 0 ? "0" : "auto",
                        right: idx % 2 === 1 ? "0" : "auto",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Node */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg border-4 border-[#00AEEF] transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <milestone.icon className="w-4 h-4 text-[#00AEEF]" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className={`w-1/2 ${
                        idx % 2 === 0 ? "pr-16" : "pl-16"
                      } ${idx % 2 === 0 ? "text-right" : "text-left"}`}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#00AEEF]/10 text-[#00AEEF] inline-block mb-3">
                          {milestone.timeframe}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {milestone.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link to="/roadmaps">
                <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
                  <Compass className="w-5 h-5 mr-2" />
                  <span>Explore All Roadmaps</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default RoadmapsSection;