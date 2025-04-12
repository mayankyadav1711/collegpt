import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Book, 
  Users, 
  FileText, 
  PenTool, 
  Code, 
  FileCheck, 
  BarChart2, 
  Clock, 
  Globe, 
  Database, 
  BookOpen, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server,
  ArrowRight,
  CheckCircle,
  Sparkle,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));
  const currentUser = "mayankyadav1711";

  // For smooth scrolling to features section
  const featuresRef = useRef(null);
  const exploreRef = useRef(null);
  const ctaRef = useRef(null);
  const mainContainerRef = useRef(null);

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update date/time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime("2025-04-12 11:35:35");
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Logos for cheatsheets section
  const cheatsheetIcons = [
    { name: 'HTML', icon: <i className="devicon-html5-plain colored text-4xl"></i>, link: '/watchvideo/cs_html' },
    { name: 'CSS', icon: <i className="devicon-css3-plain colored text-4xl"></i>, link: '/watchvideo/cs_css' },
    { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored text-4xl"></i>, link: '/watchvideo/cs_js' },
    { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored text-4xl"></i>, link: '/watchvideo/cs_bootstrap' }
  ];

  // Roadmap data
  const roadmaps = [
    { 
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8 text-blue-500" />,
      url: "/roadmap_frontend"
    },
    { 
      title: "MERN Stack",
      icon: <Code className="w-8 h-8 text-green-500" />,
      url: "/roadmap_mern"
    },
    { 
      title: "Data Science",
      icon: <BarChart2 className="w-8 h-8 text-pink-500" />,
      url: "/roadmap_datascientist"
    },
  ];

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-950" ref={mainContainerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[40%] top-0 h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute right-[15%] top-[30%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[80px]" />
          <div className="absolute left-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-green-500/5 blur-[60px]" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-40 pb-24 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.span
              className="px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Empowering the next generation of learners
            </motion.span>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-8 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">Get Prepared</span>
              <span className="block">
                <span className="text-blue-600 dark:text-blue-400">Together</span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              With the intention of learning and growing together, our team has built this platform to revolutionize your academic journey by providing engaging resources and supportive community.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/courses" className="group">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center">
                  <Book className="w-5 h-5 mr-2" />
                  <span>College Notes</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
              <Link to="/gate-placement" className="group">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md hover:shadow-xl hover:shadow-indigo-600/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  <span>Gate & Placement</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
            </motion.div>

            <div className="hidden md:flex justify-center items-center gap-4 text-center">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium">1,000+ active students</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium">300+ study materials</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium">24/7 support</span>
              </div>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection(featuresRef)}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </div>

        {/* Floating Images Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none hidden lg:block">
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="absolute bottom-0 left-10 w-40 h-40 rounded-2xl shadow-xl overflow-hidden"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
            >
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Students" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="absolute bottom-20 left-1/4 w-32 h-32 rounded-2xl shadow-xl overflow-hidden"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Study" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="absolute bottom-10 right-1/4 w-36 h-36 rounded-2xl shadow-xl overflow-hidden"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
            >
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Collaboration" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="absolute bottom-0 right-10 w-40 h-40 rounded-2xl shadow-xl overflow-hidden"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
            >
              <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31" alt="Campus" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience ColleGPT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover a new era of learning designed to maximize your potential
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <FeatureCard
              icon={<BookOpen className="w-14 h-14 text-blue-500" />}
              title="Exclusive Notes"
              description="Access comprehensive notes in plain language, spiced up with entertaining memes for engaging learning."
              delay={0.1}
              color="blue"
            />
            <FeatureCard
              icon={<Users className="w-14 h-14 text-green-500" />}
              title="Thriving Community"
              description="Join a supportive network of learners, exchange ideas, and seek assistance from peers and mentors."
              delay={0.2}
              color="green"
            />
            <FeatureCard
              icon={<FileText className="w-14 h-14 text-purple-500" />}
              title="Quick Reference Sheets"
              description="Essential cheatsheets for key concepts, formulas, and technical information at your fingertips."
              delay={0.3}
              color="purple"
            />
          </motion.div>
        </div>
      </section>

      {/* Explore Section */}
      <section ref={exploreRef} className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">Resources & Paths</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Explore Learning Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Access a comprehensive collection of learning materials and structured roadmaps designed to guide your educational journey. From beginner to advanced, we've got you covered.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <ExploreFeature
                  icon={<FileCheck className="w-5 h-5 text-blue-500" />}
                  title="Roadmaps & Learning Paths"
                  description="Structured guides to achieve your learning goals"
                />
                <ExploreFeature
                  icon={<PenTool className="w-5 h-5 text-purple-500" />}
                  title="Quick Reference Cheatsheets"
                  description="Essential information in an easy-to-digest format"
                />
                <ExploreFeature
                  icon={<Clock className="w-5 h-5 text-green-500" />}
                  title="Real-Time Updates"
                  description="Stay informed with the latest educational content"
                />
                <ExploreFeature
                  icon={<Code className="w-5 h-5 text-indigo-500" />}
                  title="Technical Documentation"
                  description="Comprehensive guides for technical topics"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/roadmaps">
                  <button className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white flex items-center gap-2 transition-all duration-200">
                    <span>Explore Roadmaps</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/cheatsheets">
                  <button className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white flex items-center gap-2 transition-all duration-200">
                    <span>View Cheatsheets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
            
            {/* Visual Elements */}
            <div className="relative">
              {/* Floating Cards - Roadmaps */}
              <motion.div 
                className="absolute top-10 left-0 w-72 rounded-2xl bg-white dark:bg-gray-800 shadow-xl z-10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Development Roadmaps</h3>
                <div className="space-y-4">
                  {roadmaps.map((roadmap, index) => (
                    <Link key={index} to={roadmap.url} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
                      <div className="p-2 rounded-lg bg-white dark:bg-gray-800">
                        {roadmap.icon}
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{roadmap.title}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/roadmaps" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline flex items-center justify-center">
                    <span>View all roadmaps</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </motion.div>
              
              {/* Floating Cards - Cheatsheets */}
              <motion.div 
                className="absolute bottom-10 right-0 w-64 rounded-2xl bg-white dark:bg-gray-800 shadow-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Reference</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cheatsheetIcons.map((item, index) => (
                    <Link key={index} to={item.link} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
                      <div className="mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/cheatsheets" className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline flex items-center justify-center">
                    <span>View all cheatsheets</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </motion.div>
              
              {/* Background Element */}
              <motion.div 
                className="w-80 h-80 bg-blue-500/5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl z-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left side */}
            <motion.div 
              className="lg:col-span-7 lg:pr-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Students Say
              </h2>
              
              <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 relative">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-20 h-20 text-blue-500 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "ColleGPT has been a game-changer for my academic journey. The comprehensive notes and supportive community helped me improve my grades significantly. I'm especially grateful for the cheatsheets which made revision so much easier!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science, 3rd Year</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/32?img=${i + 10}`}
                      alt={`User ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
                    />
                  ))}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm font-medium">
                    Joined by 1,000+ students this week
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Stats */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <StatCard 
                  number="15K+"
                  text="Active Students"
                  icon={<Users className="w-6 h-6" />}
                />
                <StatCard 
                  number="300+"
                  text="Study Materials"
                  icon={<BookOpen className="w-6 h-6" />}
                />
                <StatCard 
                  number="100+"
                  text="Cheatsheets"
                  icon={<FileText className="w-6 h-6" />}
                />
                <StatCard 
                  number="24/7"
                  text="Support"
                  icon={<Sparkle className="w-6 h-6" />}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[80px]" />
          <div className="absolute right-[5%] bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6">Let's Get Started</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Join thousands of students who are already leveraging ColleGPT to enhance their academic performance and expand their knowledge base.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="group">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center">
                  <span>Create Free Account</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </button>
              </Link>
              <Link to="/courses">
                <button className="w-full sm:w-auto px-8 py-4 text-lg font-medium text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center">
                  <span>Browse Resources</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center group">
                C
                <img
                  src="/logo.svg"
                  className="inline-block h-6 w-6 mt-1 transform transition-transform group-hover:rotate-12"
                  alt="ColleGPT Logo"
                />
                LLEGPT
              </span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span>User: {currentUser}</span>
              <span className="hidden md:block">•</span>
              <span>{currentDateTime}</span>
              <span className="hidden md:block">•</span>
              <span>© 2025 ColleGPT. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay, color }) => {
  const colorVariants = {
    blue: "bg-blue-500/10 text-blue-600",
    green: "bg-green-500/10 text-green-600",
    purple: "bg-purple-500/10 text-purple-600",
  };

  const borderVariants = {
    blue: "border-blue-500/15 hover:border-blue-500/30",
    green: "border-green-500/15 hover:border-green-500/30",
    purple: "border-purple-500/15 hover:border-purple-500/30",
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
      className={`p-8 rounded-2xl bg-white dark:bg-gray-800 border ${borderVariants[color]} shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className={`w-16 h-16 rounded-xl ${colorVariants[color]} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

// Explore Feature Component
const ExploreFeature = ({ icon, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

// Stat Card Component
const StatCard = ({ number, text, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
      {icon}
    </div>
    <span className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{number}</span>
    <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
  </div>
);

export default Home;