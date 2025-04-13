// components/sections/ProjectsSection.jsx
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Download,
  Brain,
  Clock,
  GitBranch,
  Laptop,
  Code,
  CheckCircle,
  Briefcase,
} from "lucide-react";

const ProjectsSection = forwardRef((props, ref) => {
  // Project starter kits
  const projectKits = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      complexity: "Intermediate",
      timeEstimate: "3-4 weeks",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "AI Image Recognition",
      tech: ["Python", "TensorFlow", "OpenCV"],
      complexity: "Advanced",
      timeEstimate: "4-6 weeks",
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Social Media Dashboard",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      complexity: "Beginner",
      timeEstimate: "2-3 weeks",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-white dark:bg-[#0C0C20] relative overflow-hidden"
    >
      {/* Matrix-style accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent"></div>

      {/* Digital code snippets */}
      <div className="absolute right-10 top-10 opacity-5 dark:opacity-10 font-mono text-xs hidden lg:block">
        {"git init && npm create vite@latest my-project"}
        <br />
        {"cd my-project"}
        <br />
        {'git add . && git commit -m "Initial commit"'}
        <br />
        {"npm install && npm run dev"}
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
            <span className="bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center mb-4 border border-green-100 dark:border-green-500/20">
              <Code2 className="w-4 h-4 mr-1.5" />
              Build Real-World Projects
            </span>
            <span className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Project <span className="text-[#00AEEF]">Starter Kits</span>
              <motion.span
                className="absolute -z-10 inset-0 text-[#00AEEF]/5 dark:text-[#00AEEF]/10 blur-sm"
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Project Starter Kits
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
            Launch your development projects faster with our ready-to-use
            starter kits complete with scaffolding, documentation, and best
            practices.
          </motion.p>
        </div>

        {/* Project Kits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projectKits.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/0 to-[#00AEEF]/0 group-hover:from-[#00AEEF]/10 group-hover:to-[#00AEEF]/20 transition-all duration-500"></div>
                </div>

                {/* Tech stack badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-xs font-medium text-slate-800 dark:text-slate-200 rounded backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00AEEF] transition-colors">
                    {project.title}
                  </h3>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full p-1">
                    <GitBranch className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                </div>

                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    <span>{project.timeEstimate}</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-4 h-4 mr-1.5" />
                    <span>{project.complexity}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm">
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-[#00AEEF] text-white rounded-lg hover:bg-[#0099d6] transition-colors text-sm flex items-center">
                    <Download className="w-4 h-4 mr-1.5" />
                    Clone Repo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-16 rounded-3xl bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-[#092444] border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden"
        >
          {/* Terminal-inspired background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="h-full w-full overflow-hidden font-mono text-xs">
              {Array.from({ length: 20 }).map((_, idx) => (
                <div key={idx} className="whitespace-nowrap">
                  {`> ${
                    idx % 3 === 0
                      ? "npm install"
                      : idx % 3 === 1
                      ? 'git commit -m "Update features"'
                      : "yarn build"
                  }`}
                  <br />
                  {idx % 3 === 0
                    ? "added 1342 packages in 32s"
                    : idx % 3 === 1
                    ? "[main 5f2e69d] Update features"
                    : "Build completed in 4.32s"}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Development <span className="text-[#00AEEF]">Workflow</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-4">
              Follow industry-standard development practices with our guided
              project workflows
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-[#0067b5] via-[#00AEEF] to-green-500 md:transform md:-translate-y-1/2 md:top-1/2"></div>

              <div className="flex flex-col md:flex-row items-start md:justify-between gap-12 md:gap-0">
                {[
                  {
                    step: 1,
                    title: "Setup & Structure",
                    description:
                      "Create project scaffolding with proper architecture",
                    icon: Laptop,
                  },
                  {
                    step: 2,
                    title: "Development",
                    description: "Implement features with best practices",
                    icon: Code,
                  },
                  {
                    step: 3,
                    title: "Testing",
                    description:
                      "Validate functionality with automated tests",
                    icon: CheckCircle,
                  },
                  {
                    step: 4,
                    title: "Deployment",
                    description: "Ship your project with CI/CD pipelines",
                    icon: Briefcase,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex md:flex-col items-start md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    {/* Step marker */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 border-[#00AEEF] z-10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#00AEEF]" />
                    </div>

                    {/* Content - vertical layout on mobile, horizontal on desktop */}
                    <div className="pl-6 md:pl-0 md:pt-6 md:text-center md:w-48">
                      <div className="text-xs font-medium text-[#00AEEF] mb-1">
                        Step {item.step}
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-[#0067b5] to-[#00AEEF] hover:from-[#0067b5] hover:to-[#009acf] text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
                <Code2 className="w-5 h-5 mr-2" />
                <span>Browse All Projects</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ProjectsSection;