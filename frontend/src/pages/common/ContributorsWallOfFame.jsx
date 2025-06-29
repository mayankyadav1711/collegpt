import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Gift,
  Heart,
  Star,
  FileText,
  Code,
  Palette,
  ChevronRight,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Book,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  ArrowRight,
  Briefcase,
  ChevronDown,
  Zap,
  Upload,
  User,
} from "lucide-react";
import confetti from "canvas-confetti";

const ContributorsWallOfFame = () => {
  const [activeContributor, setActiveContributor] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const confettiCanvasRef = useRef(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.2], [0, 10]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  const containerRef = useRef(null);

  const contributors = [
    {
      id: 1,
      name: "Kussh Prajapati",
      role: "Graphic Designer",
      avatar: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1708844593/x8f1ay9rbefzfzusbbqw.png",
      color: "purple",
      gradient: "from-purple-500 to-indigo-600",
      badge: "Brand Identity",
      description: "Revamped the entire ColleGPT brand identity with a fresh, modern look, including the logo, course thumbnails, and overall visual elements.",
      contributions: [
        "Redesigned the official ColleGPT logo",
        "Created course thumbnails with consistent branding",
        "Developed brand guidelines for visual consistency",
        "Elevated ColleGPT's visual identity with industry standards"
      ],
      socialLinks: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/itskussh/", icon: Linkedin },
        { platform: "Behance", url: "https://www.behance.net/the_graphic_guy", icon: ExternalLink },
        { platform: "Resume", url: "https://read.cv/kussh", icon: Briefcase },
        { platform: "Instagram", url: "https://www.instagram.com/itskussh/", icon: Instagram },
        { platform: "Twitter", url: "https://twitter.com/itskussh", icon: Twitter }
      ],
      link: "/team/kussh",
      location: "Gandhinagar, Gujarat, India",
      contact: "kushprajapati184@gmail.com"
    },
    {
      id: 2,
      name: "Aastha Suthar",
      role: "Content Creator",
      avatar: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1708837420/sbga0ipdyfjkd2gvc51l.png",
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      badge: "Educational Content",
      description: "Contributed comprehensive educational content for the Soft Computing subject, creating high-quality notes that enhance student learning.",
      contributions: [
        "Created detailed notes for Soft Computing",
        "Developed comprehensive study materials",
        "Simplified complex concepts for better understanding",
        "Enabled more effective learning experiences"
      ],
      socialLinks: [
        { platform: "GitHub", url: "https://github.com/aastha262", icon: Github },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/aasthasuthar", icon: Linkedin },
        { platform: "Instagram", url: "https://www.instagram.com/aasthasuthar/", icon: Instagram },
        { platform: "Email", url: "mailto:iamaastha87@gmail.com", icon: Mail },
      ],
      link: "/team/aastha",
      location: "Gandhinagar, Gujarat, India",
      contact: "iamaastha87@gmail.com"
    }
  ];

  // Handle mouse move for dynamic lighting effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top
      });
    }
  };

  // Initialize confetti effect
  useEffect(() => {
    const confettiCanvas = confettiCanvasRef.current;

    if (confettiCanvas) {
      const myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
      });

      // Initially trigger confetti
      if (!isConfettiActive) {
        setIsConfettiActive(true);
        
        // Fire confetti
        const duration = 3 * 1000;
        const end = Date.now() + duration;
        
        const frame = () => {
          myConfetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#5B21B6', '#2563EB', '#0891B2', '#4F46E5']
          });
          
          myConfetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#5B21B6', '#2563EB', '#0891B2', '#4F46E5']
          });
          
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };
        
        frame();

        // Occasionally trigger confetti bursts
        const intervalId = setInterval(() => {
          myConfetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#5B21B6', '#2563EB', '#0891B2', '#4F46E5', '#8B5CF6']
          });
        }, 10000);

        return () => clearInterval(intervalId);
      }
    }
  }, [isConfettiActive]);

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden relative px-4 py-10 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Confetti Canvas */}
      <canvas
        ref={confettiCanvasRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      ></canvas>

      {/* Dynamic spotlight effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br rounded-full opacity-70 filter blur-3xl transform translate-x-1/3 -translate-y-1/3 from-purple-200/20 to-indigo-300/20 dark:from-purple-900/10 dark:to-indigo-800/10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr rounded-full opacity-70 filter blur-3xl transform -translate-x-1/3 translate-y-1/3 from-blue-200/20 to-cyan-300/20 dark:from-blue-900/10 dark:to-cyan-800/10"></div>
      
      

      <div className="container relative z-10 mx-auto">
        {/* Header Section */}
        <motion.div 
          style={{ opacity, filter: `blur(${blurValue}px)`, y: translateY }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-2 justify-center items-center mb-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-30 blur-lg"></div>
              <Award className="relative z-10 w-7 h-7 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-sm font-medium tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Recognition
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            <span className="inline-block mr-3">
              Contributors
            </span>
            <span className="inline-block relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500">
                Wall of Fame
              </span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300"
          >
            Celebrating the talented individuals who have contributed their expertise and passion to make ColleGPT better for everyone.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Link
              to="/contributor_form"
              className="flex gap-2 items-center px-6 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700 shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30"
            >
              <Upload className="w-5 h-5" />
              Become a Contributor
            </Link>
            
            <motion.a
              href="#contributors"
              className="flex gap-2 items-center px-6 py-3 font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm transition-all dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:shadow-md group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>Meet Our Contributors</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contributor Count Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 gap-6 mx-auto mb-20 max-w-4xl sm:grid-cols-4"
        >
          <div className="p-6 text-center bg-white rounded-xl border border-gray-200 shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
            <div className="flex justify-center items-center mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg dark:from-purple-900/30 dark:to-indigo-900/30">
              <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">{contributors.length}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Contributors</div>
          </div>
          
          <div className="p-6 text-center bg-white rounded-xl border border-gray-200 shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
            <div className="flex justify-center items-center mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg dark:from-blue-900/30 dark:to-cyan-900/30">
              <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">1</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Brand Designs</div>
          </div>
          
          <div className="p-6 text-center bg-white rounded-xl border border-gray-200 shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
            <div className="flex justify-center items-center mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg dark:from-purple-900/30 dark:to-indigo-900/30">
              <Book className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">1</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Subject Contents</div>
          </div>
          
          <div className="p-6 text-center bg-white rounded-xl border border-gray-200 shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl">
            <div className="flex justify-center items-center mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg dark:from-blue-900/30 dark:to-cyan-900/30">
              <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">∞</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Appreciation</div>
          </div>
        </motion.div>

        {/* Main Contributors Section */}
        <div id="contributors" className="pt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto max-w-5xl"
          >
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700"></div>
              <h2 className="flex items-center mx-4 text-2xl font-bold text-gray-900 dark:text-white">
                <Sparkles className="mr-2 w-5 h-5 text-purple-500" />
                Our Amazing Contributors
              </h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700"></div>
            </div>

            {/* Contributors Cards */}
            <div className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-2">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={contributor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${contributor.gradient} rounded-xl blur opacity-30 group-hover:opacity-80 transition duration-500`}></div>
                  
                  <div className="overflow-hidden relative bg-white rounded-xl border border-gray-100 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    {/* Top Banner */}
                    <div className={`h-20 bg-gradient-to-r ${contributor.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTFoMnYxaC0ydi0xem0wIDNoMnYxaC0ydi0xem0tMyAyaDF2MWgtMXYtMXptMCAxaC0xdjFoMVYzN3pNMzQgMzVoMXYxaC0xdi0xem0tMS0xaDF2MWgtMXYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25"></div>
                      
                     
                    </div>
                    
                    {/* Avatar */}
                    <div className="absolute top-8 left-8">
                      <div className="overflow-hidden w-24 h-24 rounded-xl border-4 border-white shadow-lg dark:border-gray-800">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 pt-16">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                            {contributor.name}
                          </h3>
                          <p className="flex items-center text-gray-600 dark:text-gray-300">
                            {contributor.role}
                          </p>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full bg-${contributor.color}-100 dark:bg-${contributor.color}-900/30 text-${contributor.color}-700 dark:text-${contributor.color}-400 text-sm font-medium border border-${contributor.color}-200 dark:border-${contributor.color}-800/30 flex items-center gap-1`}>
                          <Star className="w-3.5 h-3.5" />
                          {contributor.badge}
                        </div>
                      </div>
                      
                      <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                        {contributor.description}
                      </p>
                      
                      {/* Contributions */}
                      <div className="p-4 mb-6 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800/50 dark:border-gray-700/50">
                        <h4 className="flex items-center mb-3 font-medium text-gray-900 dark:text-white">
                          <Gift className={`w-4 h-4 mr-2 text-${contributor.color}-500`} />
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {contributor.contributions.map((contribution, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-${contributor.color}-500 mr-2 flex-shrink-0`}></div>
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {contributor.socialLinks.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full bg-${contributor.color}-100 dark:bg-${contributor.color}-900/30 text-${contributor.color}-700 dark:text-${contributor.color}-400 flex items-center justify-center transition-transform hover:scale-110`}
                          >
                            <social.icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex flex-wrap gap-4 items-center mt-6">
                       
                        <Link
                          to={`mailto:${contributor.contact}`}
                          className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contribute CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden relative bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl"
            >
              
            
              
              <div className="flex relative z-10 flex-col gap-8 justify-between items-center p-10 md:p-14 md:flex-row">
                <div className="text-center md:text-left">
                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">Want to Join Our Wall of Fame?</h3>
                  <p className="max-w-xl text-lg text-purple-100">
                    Share your knowledge, skills, or resources to help fellow students. 
                    Your contributions could be featured here!
                  </p>
                </div>
                
                <div>
                  <Link
                    to="/contributor_form"
                    className="px-6 py-3.5 bg-white text-purple-700 hover:bg-purple-50 font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Become a Contributor
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
     
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Questions About Contributing</h2>
            <p className="text-gray-600 dark:text-gray-300">Everything you need to know about becoming a contributor</p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">How can I contribute to ColleGPT?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can contribute in various ways including creating educational content, designing graphics, developing code, or sharing notes. Simply fill out our contributor form with your proposed contribution and our team will review it.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">What type of content is accepted?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We welcome high-quality educational materials such as notes, guides, tutorials, code examples, designs, and other resources that benefit students. All content should be original or properly licensed and must meet our quality standards.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">How is the review process conducted?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Once submitted, our team reviews all contributions for accuracy, quality, and relevance. This process typically takes 1-3 business days. If approved, your contribution will be published and you'll be featured on our Wall of Fame.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Can I update my contribution after submitting?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! You can request updates or modifications to your contributed content by contacting our team. We encourage contributors to keep their materials up-to-date and accurate.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link
              to="/forms/contribute"
              className="inline-flex gap-2 items-center font-medium text-purple-600 transition-colors dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <span>Ready to contribute?</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributorsWallOfFame;