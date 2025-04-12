import { useState } from "react";
import { motion } from "framer-motion"; // Make sure to install framer-motion
import {
  ArrowRight,
  Code,
  Mail,
  LucideGithub,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section id="our-team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 mb-6">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-blue-500 mr-2"
            ></motion.span>
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 uppercase tracking-wider">
              Visionary Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Founders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind ColleGPT revolutionizing education
            through technology
          </p>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Mayank Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <div className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl dark:shadow-blue-900/10 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 relative">
              {/* Left section - Image with Premium Hover Effects */}
              <div
                className="md:col-span-5 relative h-[400px] md:h-auto overflow-hidden"
                onMouseEnter={() => setHoveredMember("Mayank")}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Advanced Image Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full relative"
                  >
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg"
                        alt="Mayank Yadav"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Shimmering Photo Frame Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredMember === "Mayank"
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-[3px] border-white/30 dark:border-white/20 rounded-sm z-10"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255,255,255,0.2)",
                      }}
                    ></motion.div>

                    {/* Animated Corner Brackets */}
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Mayank"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 border-t-2 border-l-2 border-blue-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Mayank"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 right-0 border-t-2 border-r-2 border-blue-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Mayank"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 border-b-2 border-l-2 border-blue-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Mayank"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-500 z-20"
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      hoveredMember === "Mayank"
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                    <span className="text-xs font-medium text-white">
                      Co-Founder
                    </span>
                  </motion.div>
                </div>

                {/* Social Icons on Hover - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredMember === "Mayank" ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="absolute left-0 right-0 bottom-4 z-20 hidden md:flex justify-center items-center space-x-3"
                >
                  {[
                    {
                      Icon: LucideGithub,
                      url: "https://github.com/mayankyadav1711",
                      color: "bg-gray-800 hover:bg-gray-700",
                    },
                    {
                      Icon: Linkedin,
                      url: "https://www.linkedin.com/in/mayankyadav17/",
                      color: "bg-blue-600 hover:bg-blue-700",
                    },
                    {
                      Icon: Twitter,
                      url: "https://twitter.com/mayankyadav_17",
                      color: "bg-sky-500 hover:bg-sky-600",
                    },
                    {
                      Icon: Instagram,
                      url: "https://www.instagram.com/___mayank17___/",
                      color: "bg-pink-600 hover:bg-pink-700",
                    },
                  ].map(({ Icon, url, color }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`w-9 h-9 ${color} flex items-center justify-center rounded-full text-white shadow-lg transform hover:scale-110 transition-all`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Right section - Content with Premium Styling */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                    <Code className="w-4 h-4 mr-2" />
                    Full Stack Developer
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Mayank Yadav
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    Co-Founder, Developer and Content Creator
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center mb-6">
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <a href="mailto:mykyadav17112003@gmail.com">
                      mykyadav17112003@gmail.com
                    </a>
                  </p>
                </div>

                <div className="prose dark:prose-invert prose-lg mb-8 flex-grow text-gray-700 dark:text-gray-300">
                  <p>
                    With a passion for both code and education, Mayank founded
                    ColleGPT to revolutionize how students access and interact
                    with educational resources.
                  </p>
                  <p>
                    Specializing in MERN Stack development, he has contributed
                    to multiple projects including React Planner and worked as
                    an SDE intern at Hackingly. He's also a winner at multiple
                    hackathons and has completed numerous NPTEL certifications.
                  </p>

                  {/* Premium Quote Box */}
                  <div className="relative mt-6 mb-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500 dark:border-blue-400">
                    <p className="italic text-gray-700 dark:text-gray-300 m-0">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        "Education shouldn't be limited by packaging. The future
                        belongs to platforms that adapt to learners, not the
                        other way around."
                      </span>
                    </p>
                    <div className="absolute top-2 left-2 text-3xl text-blue-400/20 font-serif">
                      ❝
                    </div>
                    <div className="absolute bottom-0 right-2 text-3xl text-blue-400/20 font-serif">
                      ❞
                    </div>
                  </div>
                </div>

                {/* Content Footer with Action Buttons */}
                <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Social Links for Mobile */}
                  <div className="flex md:hidden space-x-4 mb-4 md:mb-0">
                    <a
                      href="https://github.com/mayankyadav1711"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <LucideGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mayankyadav17/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/mayankyadav_17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Premium CTA Button */}
                  <motion.a
                    href="https://mayank-dev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divya Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-32"
        >
          <div className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl dark:shadow-purple-900/10 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Content First for Alternating Layout */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col order-2 md:order-1">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                    <Code className="w-4 h-4 mr-2" />
                    MERN Developer
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Divya Kaurani
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    Co-Founder, Developer and Content Creator
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center mb-6">
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <a href="mailto:kauranidivya@gmail.com">
                      kauranidivya@gmail.com
                    </a>
                  </p>
                </div>

                <div className="prose dark:prose-invert prose-lg mb-8 flex-grow text-gray-700 dark:text-gray-300">
                  <p>
                    Divya is a proficient MERN Stack Developer with expertise in
                    DSA and Cloud Computing. Her technical knowledge and passion
                    for education have been instrumental in building ColleGPT's
                    foundation.
                  </p>
                  <p>
                    She has completed multiple certifications in Programming,
                    Database Management Systems, and Machine Learning, applying
                    this knowledge to create innovative solutions for
                    educational challenges.
                  </p>

                  {/* Premium Quote Box */}
                  <div className="relative mt-6 mb-6 p-5 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-l-4 border-purple-500 dark:border-purple-400">
                    <p className="italic text-gray-700 dark:text-gray-300 m-0">
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        "Technology should empower education by making it more
                        accessible, interactive, and tailored to individual
                        learning styles."
                      </span>
                    </p>
                    <div className="absolute top-2 left-2 text-3xl text-purple-400/20 font-serif">
                      ❝
                    </div>
                    <div className="absolute bottom-0 right-2 text-3xl text-purple-400/20 font-serif">
                      ❞
                    </div>
                  </div>
                </div>

                {/* Content Footer with Action Buttons */}
                <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Social Links for Mobile */}
                  <div className="flex md:hidden space-x-4 mb-4 md:mb-0">
                    <a
                      href="https://github.com/KauraniDivya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <LucideGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divyakaurani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Premium CTA Button */}
                  <motion.a
                    href="mailto:kauranidivya@gmail.com"
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Contact</span>
                    <Mail className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </div>

              {/* Image Section */}
              <div
                className="md:col-span-5 relative h-[400px] md:h-auto overflow-hidden order-1 md:order-2"
                onMouseEnter={() => setHoveredMember("Divya")}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Advanced Image Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full relative"
                  >
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg"
                        alt="Divya Kaurani"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Shimmering Photo Frame Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredMember === "Divya"
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-[3px] border-white/30 dark:border-white/20 rounded-sm z-10"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255,255,255,0.2)",
                      }}
                    ></motion.div>

                    {/* Animated Corner Brackets */}
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Divya"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 border-t-2 border-l-2 border-purple-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Divya"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 right-0 border-t-2 border-r-2 border-purple-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Divya"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 border-b-2 border-l-2 border-purple-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Divya"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 right-0 border-b-2 border-r-2 border-purple-500 z-20"
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      hoveredMember === "Divya"
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 mr-1.5" />
                    <span className="text-xs font-medium text-white">
                      Co-Founder
                    </span>
                  </motion.div>
                </div>

                {/* Social Icons on Hover - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredMember === "Divya" ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="absolute left-0 right-0 bottom-4 z-20 hidden md:flex justify-center items-center space-x-3"
                >
                  {[
                    {
                      Icon: LucideGithub,
                      url: "https://github.com/KauraniDivya",
                      color: "bg-gray-800 hover:bg-gray-700",
                    },
                    {
                      Icon: Linkedin,
                      url: "https://www.linkedin.com/in/divyakaurani/",
                      color: "bg-blue-600 hover:bg-blue-700",
                    },
                    {
                      Icon: Code,
                      url: "https://leetcode.com/kauranidivya/",
                      color: "bg-yellow-600 hover:bg-yellow-700",
                    },
                  ].map(({ Icon, url, color }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`w-9 h-9 ${color} flex items-center justify-center rounded-full text-white shadow-lg transform hover:scale-110 transition-all`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Darshit Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl dark:shadow-green-900/10 hover:shadow-green-500/20 dark:hover:shadow-green-500/10 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 relative">
              {/* Left section - Image with Premium Hover Effects */}
              <div
                className="md:col-span-5 relative h-[400px] md:h-auto overflow-hidden"
                onMouseEnter={() => setHoveredMember("Darshit")}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Advanced Image Zoom Effect */}
                <div className="absolute inset-0 w-full h-full">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full relative"
                  >
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src="http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg"
                        alt="Darshit Sojitra"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Shimmering Photo Frame Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredMember === "Darshit"
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 border-[3px] border-white/30 dark:border-white/20 rounded-sm z-10"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255,255,255,0.2)",
                      }}
                    ></motion.div>

                    {/* Animated Corner Brackets */}
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Darshit"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 border-t-2 border-l-2 border-green-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Darshit"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 right-0 border-t-2 border-r-2 border-green-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Darshit"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 border-b-2 border-l-2 border-green-500 z-20"
                    ></motion.div>
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={
                        hoveredMember === "Darshit"
                          ? { width: 40, height: 40 }
                          : { width: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 right-0 border-b-2 border-r-2 border-green-500 z-20"
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={
                      hoveredMember === "Darshit"
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-green-400 mr-1.5" />
                    <span className="text-xs font-medium text-white">
                      UI/UX Designer
                    </span>
                  </motion.div>
                </div>

                {/* Social Icons on Hover - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={
                    hoveredMember === "Darshit"
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  className="absolute left-0 right-0 bottom-4 z-20 hidden md:flex justify-center items-center space-x-3"
                >
                  {[
                    {
                      Icon: LucideGithub,
                      url: "https://github.com/DPS21302",
                      color: "bg-gray-800 hover:bg-gray-700",
                    },
                    {
                      Icon: Linkedin,
                      url: "https://www.linkedin.com/in/darshit-sojitra/",
                      color: "bg-blue-600 hover:bg-blue-700",
                    },
                    {
                      Icon: Instagram,
                      url: "https://www.instagram.com/darshit_sojitraa/",
                      color: "bg-pink-600 hover:bg-pink-700",
                    },
                    {
                      Icon: ExternalLink,
                      url: "https://darshit-dev.vercel.app/",
                      color: "bg-green-600 hover:bg-green-700",
                    },
                  ].map(({ Icon, url, color }, index) => (
                    <motion.a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`w-9 h-9 ${color} flex items-center justify-center rounded-full text-white shadow-lg transform hover:scale-110 transition-all`}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Right section - Content with Premium Styling */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                    <Code className="w-4 h-4 mr-2" />
                    Front-End Developer
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Darshit Sojitra
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                    Co-Founder and Developer
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm flex items-center mb-6">
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <a href="mailto:sojitradarshitpiyushbhai@gmail.com">
                      sojitradarshitpiyushbhai@gmail.com
                    </a>
                  </p>
                </div>

                <div className="prose dark:prose-invert prose-lg mb-8 flex-grow text-gray-700 dark:text-gray-300">
                  <p>
                    Darshit is a talented Front-End Developer and UI/UX Designer
                    studying Computer Engineering at LDRP-ITR College. His eye
                    for design and user experience has shaped ColleGPT's
                    intuitive interface.
                  </p>
                  <p>
                    He has interned as a Next.js developer at Hackingly and has
                    been a top contributor at Google Crowdsource and Cloud
                    Community India. His participation in hackathons, including
                    being a SIH Hackathon Finalist, has honed his
                    problem-solving skills.
                  </p>

                  {/* Premium Quote Box */}
                  <div className="relative mt-6 mb-6 p-5 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500 dark:border-green-400">
                    <p className="italic text-gray-700 dark:text-gray-300 m-0">
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        "Good design makes information accessible. Great design
                        makes learning enjoyable."
                      </span>
                    </p>
                    <div className="absolute top-2 left-2 text-3xl text-green-400/20 font-serif">
                      ❝
                    </div>
                    <div className="absolute bottom-0 right-2 text-3xl text-green-400/20 font-serif">
                      ❞
                    </div>
                  </div>
                </div>

                {/* Content Footer with Action Buttons */}
                <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Social Links for Mobile */}
                  <div className="flex md:hidden space-x-4 mb-4 md:mb-0">
                    <a
                      href="https://github.com/DPS21302"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <LucideGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/darshit-sojitra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/darshit_sojitraa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Premium CTA Button */}
                  <motion.a
                    href="https://darshit-dev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg shadow-lg hover:shadow-green-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
