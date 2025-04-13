// components/sections/GateSection.jsx
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle,
  Layers,
  LineChart,
  Users,
} from "lucide-react";

const GateSection = forwardRef((props, ref) => {
  // Animation variants
  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  // GATE study materials
  const gateStudyMaterials = [
    {
      title: "GATE CSE Complete Course",
      topics: 28,
      difficulty: "Advanced",
      rating: 4.9,
      students: "14K+",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Data Science & AI Track",
      topics: 24,
      difficulty: "Intermediate",
      rating: 4.8,
      students: "10K+",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="gate"
      ref={ref}
      className="py-24 bg-slate-50 dark:bg-[#080816] relative overflow-hidden"
    >
      {/* Matrix-style accent elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#00AEEF]/10 to-transparent dark:from-[#00AEEF]/5 dark:to-transparent rounded-tr-3xl -z-10"></div>
      <div className="absolute right-0 top-0 w-1/4 h-1/2 bg-gradient-to-bl from-slate-100 to-slate-50/0 dark:from-slate-800/10 dark:to-transparent rounded-bl-3xl -z-10"></div>

      {/* Digital code snippets */}
      <div className="absolute right-10 bottom-20 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"function solveGATEProblem() {"}
        <br />
        &nbsp;&nbsp;{"const topics = ['DS', 'Algo', 'OS', 'DBMS'];"}
        <br />
        &nbsp;&nbsp;{"return topics.map(study).filter(understand);"}
        <br />
        {"}"}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <span className="bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center self-start mb-4 border border-indigo-100 dark:border-indigo-500/20">
                <GraduationCap className="w-4 h-4 mr-1.5" />
                Ace Your Entrance Exam
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                GATE <span className="text-[#00AEEF]">Preparation</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Comprehensive resources specifically designed to help you excel
              in GATE examinations for Computer Science and Data Science/AI
              tracks.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Structured topic-wise study materials and notes",
                "Previous years' papers with detailed solutions",
                "Concept-based practice questions and tests",
                "Personalized performance analytics and weak area detection",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link to="/gate">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>Start GATE Preparation</span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* GATE Course Cards */}
            {gateStudyMaterials.map((material, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-48 md:h-auto relative">
                      <img
                        src={material.image}
                        alt={material.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/60 md:to-transparent"></div>

                      <div className="absolute top-4 left-4 px-2 py-1 rounded-md bg-red-500 text-white text-xs font-bold flex items-center">
                        <span>GATE</span>
                      </div>

                      <div className="absolute bottom-4 left-4 md:bottom-4 md:left-4 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-4 h-4 text-yellow-300 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-white text-xs font-medium ml-1">
                          {material.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#00AEEF] transition-colors">
                          {material.title}
                        </h3>

                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm space-x-4 mb-4">
                          <div className="flex items-center">
                            <Layers className="w-4 h-4 mr-1.5" />
                            <span>{material.topics} topics</span>
                          </div>
                          <div className="flex items-center">
                            <LineChart className="w-4 h-4 mr-1.5" />
                            <span>{material.difficulty}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="text-sm font-medium flex justify-between">
                            <span className="text-slate-700 dark:text-slate-300">
                              Course completion
                            </span>
                            <span className="text-[#00AEEF]">68%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#0067b5] to-[#00AEEF]"
                              initial={{ width: 0 }}
                              whileInView={{ width: "68%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-1" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {material.students}
                          </span>
                        </div>

                        <button className="flex items-center text-sm font-medium text-[#00AEEF] group-hover:underline">
                          <span>Continue</span>
                          <svg 
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Topic coverage visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Topic Coverage
                </h4>
                <span className="text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                  Updated for 2025
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Algorithms",
                    progress: 85,
                    color: "from-blue-500 to-[#00AEEF]",
                  },
                  {
                    name: "Data Structures",
                    progress: 78,
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    name: "Operating Systems",
                    progress: 65,
                    color: "from-amber-500 to-orange-500",
                  },
                  {
                    name: "Database Management",
                    progress: 72,
                    color: "from-violet-500 to-purple-500",
                  },
                  {
                    name: "Computer Networks",
                    progress: 58,
                    color: "from-rose-500 to-red-500",
                  },
                ].map((topic, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {topic.name}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {topic.progress}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${topic.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${topic.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + idx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default GateSection;