import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Server
} from 'lucide-react';

const Home = () => {
  // For smooth scrolling to features section
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    { name: 'Bootstrap', icon: <i className="devicon-bootstrap-plain colored text-4xl"></i>, link: '/watchvideo/cs_bootstrap' },
    { name: 'ChatGPT', icon: <i className="devicon-openai-plain colored text-4xl"></i>, link: '/watchvideo/cs_gpt' },
    { name: 'VS Code', icon: <i className="devicon-vscode-plain colored text-4xl"></i>, link: '/watchvideo/cs_vscode' },
    { name: 'Python', icon: <i className="devicon-python-plain colored text-4xl"></i>, link: '/watchvideo/cs_python' },
    { name: 'Web Dev', icon: <Globe className="w-10 h-10 text-blue-500" />, link: '/watchvideo/cs_web' },
    { name: 'Database', icon: <Database className="w-10 h-10 text-orange-500" />, link: '/watchvideo/cs_database' },
  ];

  // Team data
  const teamMembers = [
    {
      name: "Mayank Yadav",
      role: "Founder, Developer and Content Writer",
      image: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg",
      link: "https://mayank-dev.vercel.app/"
    },
    {
      name: "Divya Kaurani",
      role: "Founder, Developer and Content Writer",
      image: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg",
      link: "https://www.linkedin.com/in/divyakaurani/"
    },
    {
      name: "Darshit Sojitra",
      role: "Founder, Developer and Content Writer",
      image: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg",
      link: "https://darshit-dev.vercel.app/"
    },
    {
      name: "Kussh Prajapati",
      role: "Graphic Designer & Content Writer",
      image: "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1708844593/x8f1ay9rbefzfzusbbqw.png",
      link: "https://www.behance.net/the_graphic_guy"
    },
    {
      name: "Aastha Suthar",
      role: "Content Writer",
      image: "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1708837420/sbga0ipdyfjkd2gvc51l.png",
      link: "/about"
    }
  ];

  // Roadmap data
  const roadmaps = [
    { 
      title: "Frontend Development",
      icon: <Monitor className="w-12 h-12 text-blue-500" />,
      url: "/roadmap_frontend"
    },
    { 
      title: "MERN Stack Development",
      icon: <Code className="w-12 h-12 text-green-500" />,
      url: "/roadmap_mern"
    },
    { 
      title: "Backend Development",
      icon: <Server className="w-12 h-12 text-purple-500" />,
      url: "/roadmap_backend"
    },
    { 
      title: "DevOps",
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      url: "/roadmap_devops"
    },
    { 
      title: "Data Science",
      icon: <BarChart2 className="w-12 h-12 text-pink-500" />,
      url: "/roadmap_datascientist"
    },
    { 
      title: "Mobile Development",
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      url: "/roadmap_mobiledeveloper"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div 
          className="container mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Prepared <span className="text-blue-600 dark:text-blue-400">Together</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            With the intention of learning and growing together, our team has built this platform to revolutionize your academic journey by providing engaging resources and supportive community.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/courses">
              <button className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center w-full sm:w-auto">
                <Book className="w-5 h-5 mr-2" />
                College Notes
              </button>
            </Link>
            <Link to="/gate-placement">
              <button className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center w-full sm:w-auto">
                <FileCheck className="w-5 h-5 mr-2" />
                Gate & Placement
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToFeatures}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience ColleGPT 🚀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover a New Era of Learning with ColleGPT
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <FeatureCard
              icon={<BookOpen className="w-14 h-14 text-blue-500" />}
              title="Xclusive Notes"
              description="Access comprehensive notes in plain language, spiced up with entertaining memes for engaging learning."
            />
            <FeatureCard
              icon={<Users className="w-14 h-14 text-green-500" />}
              title="Engaging Community"
              description="Join a supportive community of learners, exchange ideas, and seek assistance."
            />
            <FeatureCard
              icon={<FileText className="w-14 h-14 text-purple-500" />}
              title="Handy Cheat Sheets"
              description="Quick reference guides for key concepts, formulas, and more."
            />
            <FeatureCard
              icon={<Clock className="w-14 h-14 text-red-500" />}
              title="Real-Time Event Updates"
              description="Stay informed about upcoming academic events, seminars, and workshops."
            />
            <FeatureCard
              icon={<PenTool className="w-14 h-14 text-yellow-500" />}
              title="In-Depth Learning Guides"
              description="Detailed roadmaps to help you navigate and master challenging topics."
            />
            <FeatureCard
              icon={<Code className="w-14 h-14 text-cyan-500" />}
              title="Intuitive User Interface"
              description="Our user-friendly interface ensures a seamless and enjoyable browsing experience."
            />
          </motion.div>
        </div>
      </section>

      {/* Cheatsheets Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Handy Cheatsheets 🤳
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Unlocking Excellence: Your Rapid Technical Guide
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {cheatsheetIcons.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Link to={item.link} className="block">
                  <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Roadmaps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Guiding Your Journey Along The Technical Pathway
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {roadmaps.map((roadmap, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Link to={roadmap.url}>
                  <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition-all duration-300">
                    <div className="mb-4 flex justify-center">
                      {roadmap.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
                      {roadmap.title}
                    </h3>
                    <div className="flex justify-center">
                      <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                        Explore
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built by the Community for the Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Together, we've built something remarkable—a testament to our strength.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <a href={member.link} target="_blank" rel="noreferrer" className="block">
                  <div className="text-center">
                    <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover border-4 border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Home;