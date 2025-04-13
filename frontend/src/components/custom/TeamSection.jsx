import { useState, useEffect } from "react";
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
  ChevronDown,
  ChevronUp,
  User,
  Star
} from "lucide-react";

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [expandedBio, setExpandedBio] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for glow effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };
  
  // Toggle expanded bio
  const toggleBio = (memberId) => {
    if (expandedBio === memberId) {
      setExpandedBio(null);
    } else {
      setExpandedBio(memberId);
    }
  };

  // Team members data with enhanced information
  const teamMembers = [
    {
      id: 1,
      name: "Mayank Yadav",
      role: "Co-Founder & Developer",
      avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg", 
      badge: "Co-Founder",
      location: "Ahmedabad, India",
      joinedDate: "January 2023",
      skills: ["React.js", "Node.js", "MongoDB", "UI/UX Design"],
      achievements: [
        "SIH Hackathon Winner 2023",
        "5+ Successfully Deployed Projects",
        "Technical Lead at College Tech Fest"
      ],
      bioShort: "Passionate full stack developer specializing in MERN stack with expertise in creating innovative educational platforms.",
      bioLong: "Mayank is a versatile full stack developer who combines technical expertise with a deep understanding of educational needs. He has led multiple projects from concept to deployment, focusing on creating intuitive interfaces and robust backend systems.\n\nWith a strong background in competitive programming and hackathons, he brings problem-solving skills and innovation to every aspect of ColleGPT. His vision of democratizing education through technology drives the platform's development roadmap.",
      quote: "Education shouldn't be limited by packaging. The future belongs to platforms that adapt to learners, not the other way around.",
      color: "blue",
      gradient: "from-blue-600 to-indigo-600",
      lightGradient: "from-blue-500/10 to-blue-600/5",
      social: [
        { platform: "GitHub", icon: Github, url: "https://github.com/mayankyadav1711", color: "bg-gray-800 hover:bg-gray-700" },
        { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mayankyadav17/", color: "bg-blue-600 hover:bg-blue-700" },
        { platform: "Twitter", icon: Twitter, url: "https://twitter.com/mayankyadav_17", color: "bg-sky-500 hover:bg-sky-600" },
        { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/___mayank17___/", color: "bg-pink-600 hover:bg-pink-700" },
        { platform: "Portfolio", icon: ExternalLink, url: "https://mayank-dev.vercel.app/", color: "bg-purple-600 hover:bg-purple-700" }
      ]
    },
    {
      id: 2,
      name: "Divya Kaurani",
      role: "Co-Founder & Developer",
      avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg", 
      badge: "Co-Founder",
      location: "Gujarat, India",
      joinedDate: "January 2023",
      skills: ["MongoDB", "Express", "React", "Node.js", "DSA"],
      achievements: [
        "Cloud Computing Certification",
        "Database Management Expert",
        "ML Algorithm Implementation"
      ],
      bioShort: "MERN stack developer with expertise in DSA and cloud computing, bringing technical rigor and innovation to ColleGPT.",
      bioLong: "Divya is a proficient MERN Stack Developer whose technical knowledge forms the backbone of ColleGPT's robust architecture. Her expertise in database management and algorithm design has been crucial in creating a scalable and efficient platform.\n\nBeyond her technical skills, Divya has a passion for making complex concepts accessible to learners. She has completed multiple certifications in Programming, Database Management Systems, and Machine Learning, applying this knowledge to create innovative solutions for educational challenges.",
      quote: "Technology should empower education by making it more accessible, interactive, and tailored to individual learning styles.",
      color: "purple",
      gradient: "from-purple-600 to-pink-600",
      lightGradient: "from-purple-500/10 to-purple-500/5",
      social: [
        { platform: "GitHub", icon: Github, url: "https://github.com/KauraniDivya", color: "bg-gray-800 hover:bg-gray-700" },
        { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/divyakaurani/", color: "bg-blue-600 hover:bg-blue-700" },
        { platform: "Mail", icon: Mail, url: "mailto:kauranidivya@gmail.com", color: "bg-red-600 hover:bg-red-700" }
      ]
    },
    {
      id: 3,
      name: "Darshit Sojitra",
      role: "Co-Founder & UI/UX Designer",
      avatar: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg", 
      badge: "Co-Founder",
      location: "Ahmedabad, India",
      joinedDate: "February 2023",
      skills: ["UI/UX Design", "Front-End Development", "Next.js", "Tailwind CSS"],
      achievements: [
        "SIH Hackathon Finalist",
        "Google Crowdsource Top Contributor",
        "Cloud Community India Recognition"
      ],
      bioShort: "Talented front-end developer and UI/UX designer who brings ColleGPT's interface to life with intuitive and engaging experiences.",
      bioLong: "Darshit is the creative force behind ColleGPT's user interface, combining aesthetic sensibility with a deep understanding of user experience principles. Currently pursuing Computer Engineering at LDRP-ITR College, he brings fresh perspectives and innovative design approaches to the platform.\n\nHis professional experience includes interning as a Next.js developer at Hackingly and contributing significantly to open source projects. His participation in hackathons has honed his ability to design interfaces that not only look good but solve real user problems efficiently.",
      quote: "Good design makes information accessible. Great design makes learning enjoyable.",
      color: "green",
      gradient: "from-green-600 to-teal-600",
      lightGradient: "from-green-500/10 to-green-500/5",
      social: [
        { platform: "GitHub", icon: Github, url: "https://github.com/DPS21302", color: "bg-gray-800 hover:bg-gray-700" },
        { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/darshit-sojitra/", color: "bg-blue-600 hover:bg-blue-700" },
        { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/darshit_sojitraa/", color: "bg-pink-600 hover:bg-pink-700" },
        { platform: "Portfolio", icon: ExternalLink, url: "https://darshit-dev.vercel.app/", color: "bg-green-600 hover:bg-green-700" }
      ]
    }
  ];

  return (
    <section 
      id="our-team" 
      className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic glow effect */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.05), transparent 40%)`
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 tracking-wide">
              MEET OUR TEAM
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            The Minds Behind <span className="text-blue-600 dark:text-blue-400">ColleGPT</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team combines technical expertise, educational insight, and creative vision to create an exceptional learning platform.
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl dark:shadow-${member.color}-900/10 hover:shadow-${member.color}-500/20 dark:hover:shadow-${member.color}-500/10 border border-gray-100 dark:border-gray-800 transition-all duration-500`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                {/* Left Column - Image and Social (4 columns on large screens) */}
                <div 
                  className="lg:col-span-4 relative overflow-hidden"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="h-[400px] lg:h-full relative">
                    {/* Main Image with Parallax Effect */}
                    <div className="absolute inset-0 w-full h-full">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        className="w-full h-full relative"
                      >
                        <div className="w-full h-full overflow-hidden">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Photo Frame Effect on Hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={
                            hoveredMember === member.id 
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
                        {["top-left", "top-right", "bottom-left", "bottom-right"].map((position) => (
                          <motion.div
                            key={position}
                            initial={{ width: 0, height: 0 }}
                            animate={
                              hoveredMember === member.id
                                ? { width: 40, height: 40 }
                                : { width: 0, height: 0 }
                            }
                            transition={{ duration: 0.3 }}
                            className={`absolute ${position.includes("top") ? "top-0" : "bottom-0"} ${position.includes("left") ? "left-0" : "right-0"} 
                                       border-${position.includes("top") ? "t" : "b"}-2 
                                       border-${position.includes("left") ? "l" : "r"}-2 
                                       border-${member.color}-500 z-20`}
                          ></motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 z-20">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={
                          hoveredMember === member.id
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -10 }
                        }
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
                      >
                        <Sparkles className={`w-3.5 h-3.5 text-${member.color}-400 mr-1.5`} />
                        <span className="text-xs font-medium text-white">
                          {member.badge}
                        </span>
                      </motion.div>
                    </div>

                    {/* Social Icons on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={
                        hoveredMember === member.id ? { opacity: 1 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="absolute inset-x-0 bottom-4 z-20 hidden lg:flex justify-center items-center space-x-3"
                    >
                      {member.social.map((socialItem, idx) => (
                        <motion.a
                          key={idx}
                          href={socialItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className={`w-9 h-9 ${socialItem.color} flex items-center justify-center rounded-full text-white shadow-lg transform hover:scale-110 transition-all`}
                        >
                          <socialItem.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Right Column - Content (8 columns on large screens) */}
                <div className="lg:col-span-8 p-6 md:p-10 flex flex-col">
                  <div>
                    {/* Role Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${member.lightGradient} text-${member.color}-600 dark:text-${member.color}-400 text-sm font-medium mb-4`}>
                      <Code className="w-4 h-4 mr-2" />
                      {member.role}
                    </div>
                    
                    {/* Name */}
                    <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-${member.color}-600 dark:group-hover:text-${member.color}-400 transition-colors`}>
                      {member.name}
                    </h3>
                    
                    {/* Personal Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {member.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        Joined {member.joinedDate}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1.5" />
                        <a 
                          href={`mailto:${member.social.find(s => s.platform === "Mail")?.url.replace("mailto:", "") || ""}`}
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                    
                    {/* Bio section */}
                    <div className="prose dark:prose-invert prose-lg mb-6 flex-grow text-gray-700 dark:text-gray-300">
                      <p>{expandedBio === member.id ? member.bioLong : member.bioShort}</p>
                      
                      {/* Expand/Collapse Button */}
                      <button 
                        onClick={() => toggleBio(member.id)}
                        className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-2"
                      >
                        {expandedBio === member.id ? (
                          <>
                            Show less
                            <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Read more
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                      
                      {/* Quote Box */}
                      <div className={`relative mt-6 mb-6 p-5 bg-${member.color}-50 dark:bg-${member.color}-900/20 rounded-xl border-l-4 border-${member.color}-500 dark:border-${member.color}-400`}>
                        <p className="italic text-gray-700 dark:text-gray-300 m-0">
                          <span className={`text-${member.color}-600 dark:text-${member.color}-400 font-medium`}>
                            "{member.quote}"
                          </span>
                        </p>
                        <div className={`absolute top-2 left-2 text-3xl text-${member.color}-400/20 font-serif`}>
                          ❝
                        </div>
                        <div className={`absolute bottom-0 right-2 text-3xl text-${member.color}-400/20 font-serif`}>
                          ❞
                        </div>
                      </div>
                    </div>
                    
                    {/* Skills & Achievements Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">Achievements</h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Star className={`w-4 h-4 text-${member.color}-500 mr-2 mt-0.5 flex-shrink-0`} />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer with Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    {/* Mobile Social Links */}
                    <div className="flex lg:hidden space-x-4 mb-4 md:mb-0">
                      {member.social.slice(0, 4).map((socialItem, idx) => (
                        <a
                          key={idx}
                          href={socialItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <socialItem.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    {member.social.find(s => s.platform === "Portfolio") && (
                      <motion.a
                        href={member.social.find(s => s.platform === "Portfolio")?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${member.gradient} text-white rounded-lg shadow-lg hover:shadow-${member.color}-500/30 transition-all`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Portfolio</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    )}
                    
                    {/* Contact Button (if no portfolio) */}
                    {!member.social.find(s => s.platform === "Portfolio") && (
                      <motion.a
                        href={member.social.find(s => s.platform === "Mail")?.url || member.social[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${member.gradient} text-white rounded-lg shadow-lg hover:shadow-${member.color}-500/30 transition-all`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Contact</span>
                        <Mail className="w-4 h-4 ml-2" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden text-center"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 -z-10"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 -z-10" 
               style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34h4v1h-4v-1zm0-8h4v1h-4v-1zm0 4h4v1h-4v-1zm-20 4h4v1h-4v-1zm0-8h4v1h-4v-1zm0 4h4v1h-4v-1z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}
          ></div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Passionate About Educational Technology?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. If you're passionate about transforming education through technology, we'd love to hear from you.
          </p>
          
          <motion.a
            href="/careers"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <User className="w-5 h-5 mr-2" />
            Join Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;