import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  Users,
  Building,
  Clock,
  CheckCircle,
  FileText,
  Filter,
  ChevronDown,
  ChevronRight,
  Database,
  Code,
  Cpu,
  Network,
  Shield,
  Zap,
  Cloud,
  Image,
  Server,
  BarChart2,
  BrainCircuit,
  BookMarked,
  AlertCircle,
  Layers,
  Book,
  MessageSquare,
  HelpCircle
} from "lucide-react";

const GateExamPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);
  const [showCsSyllabus, setShowCsSyllabus] = useState(false);
  const [showDaSyllabus, setShowDaSyllabus] = useState(false);
  const [activeSpecialization, setActiveSpecialization] = useState("cs");

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

  // Specialization items for CS and DA
  const specializationItems = {
    cs: [
      { title: "Information Technology", icon: <Database className="w-5 h-5" /> },
      { title: "Information Security", icon: <Shield className="w-5 h-5" /> },
      { title: "Software Engineering", icon: <Code className="w-5 h-5" /> },
      { title: "Distributed Computing", icon: <Cloud className="w-5 h-5" /> },
      { title: "Image Processing", icon: <Image className="w-5 h-5" /> },
      { title: "Computer Systems and Hardware", icon: <Cpu className="w-5 h-5" /> },
      { title: "Database and Information Systems", icon: <Database className="w-5 h-5" /> },
      { title: "Programming Languages", icon: <Code className="w-5 h-5" /> },
      { title: "Computer Networks and Distributed Systems", icon: <Network className="w-5 h-5" /> },
      { title: "Artificial Intelligence", icon: <BrainCircuit className="w-5 h-5" /> },
      { title: "Advanced Computing", icon: <Server className="w-5 h-5" /> }
    ],
    da: [
      { title: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> },
      { title: "Data Mining", icon: <BarChart2 className="w-5 h-5" /> },
      { title: "Natural Language Processing", icon: <MessageSquare className="w-5 h-5" /> },
      { title: "Computer Vision", icon: <Image className="w-5 h-5" /> },
      { title: "Big Data Analytics", icon: <Database className="w-5 h-5" /> },
      { title: "Statistical Modeling", icon: <BarChart2 className="w-5 h-5" /> },
      { title: "Optimization Techniques", icon: <Zap className="w-5 h-5" /> },
      { title: "Deep Learning", icon: <BrainCircuit className="w-5 h-5" /> },
      { title: "Reinforcement Learning", icon: <Zap className="w-5 h-5" /> },
      { title: "Data Visualization", icon: <BarChart2 className="w-5 h-5" /> }
    ]
  };

  // List of top colleges
  const topColleges = [
    { name: "IIT Delhi", rank: "1", cutoff: "800-850" },
    { name: "IIT Bombay", rank: "2", cutoff: "780-830" },
    { name: "IIT Madras", rank: "3", cutoff: "760-810" },
    { name: "IIT Kanpur", rank: "4", cutoff: "750-800" },
    { name: "IIT Kharagpur", rank: "5", cutoff: "740-790" },
    { name: "IIT Roorkee", rank: "6", cutoff: "730-780" },
    { name: "IIT Guwahati", rank: "7", cutoff: "710-760" },
    { name: "IISc Bangalore", rank: "8", cutoff: "700-750" },
    { name: "NIT Tiruchirappalli", rank: "9", cutoff: "650-700" },
    { name: "NIT Warangal", rank: "10", cutoff: "620-670" }
  ];

  // CS Syllabus sections
  const csSyllabusSections = [
    {
      title: "Section 1: Engineering Mathematics",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium">Discrete Mathematics:</span> Propositional and first order logic. Sets, relations, functions, partial orders and lattices. Monoids, Groups. Graphs: connectivity, matching, coloring. Combinatorics: counting, recurrence relations, generating functions.</li>
          <li><span className="font-medium">Linear Algebra:</span> Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition.</li>
          <li><span className="font-medium">Calculus:</span> Limits, continuity and differentiability. Maxima and minima. Mean value theorem. Integration.</li>
          <li><span className="font-medium">Complex variables:</span> Analytic functions; Cauchy-Riemann equations; Cauchy's integral theorem and integral formula; Taylor and Laurent series.</li>
          <li><span className="font-medium">Probability and Statistics:</span> Random variables. Uniform, normal, exponential, poisson and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem.</li>
        </ul>
      )
    },
    {
      title: "Section 2: Digital Logic",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Boolean algebra. Combinational and sequential circuits. Minimization. Number representations and computer arithmetic (fixed and floating point).</li>
        </ul>
      )
    },
    {
      title: "Section 3: Computer Organization and Architecture",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Machine instructions and addressing modes. ALU, data-path and control unit. Instruction pipelining, pipeline hazards. Memory hierarchy: cache, main memory and secondary storage; I/O interface (interrupt and DMA mode).</li>
        </ul>
      )
    },
    {
      title: "Section 4: Programming and Data Structures",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs.</li>
        </ul>
      )
    },
    {
      title: "Section 5: Algorithms",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Searching, sorting, hashing. Asymptotic worst case time and space complexity. Algorithm design techniques: greedy, dynamic programming and divide-and-conquer. Graph traversals, minimum spanning trees, shortest paths.</li>
        </ul>
      )
    },
    {
      title: "Section 6: Theory of Computation",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.</li>
        </ul>
      )
    },
    {
      title: "Section 7: Compiler Design",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation. Local optimisation, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination.</li>
        </ul>
      )
    },
    {
      title: "Section 8: Operating System",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>System calls, processes, threads, inter-process communication, concurrency and synchronization. Deadlock. CPU and I/O scheduling. Memory management and virtual memory. File systems.</li>
        </ul>
      )
    },
    {
      title: "Section 9: Databases",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>ER-model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.</li>
        </ul>
      )
    },
    {
      title: "Section 10: Computer Networks",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Concept of layering: OSI and TCP/IP Protocol Stacks; Basics of packet, circuit and virtual circuit-switching; Data link layer: framing, error detection, Medium Access Control, Ethernet bridging; Routing protocols: shortest path, flooding, distance vector and link state routing; Fragmentation and IP addressing, IPv4, CIDR notation, Basics of IP support protocols (ARP, DHCP, ICMP), Network Address Translation (NAT); Transport layer: flow control and congestion control, UDP, TCP, sockets; Application layer protocols: DNS, SMTP, HTTP, FTP, Email.</li>
        </ul>
      )
    }
  ];

  // DA Syllabus sections
  const daSyllabusSections = [
    {
      title: "Probability and Statistics",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Counting (permutation and combinations), probability axioms, Sample space, events, independent events, mutually exclusive events, marginal, conditional and joint probability, Bayes Theorem, conditional expectation and variance, mean, median, mode and standard deviation, correlation, and covariance, random variables, discrete random variables and probability mass functions, uniform, Bernoulli, binomial distribution, Continuous random variables and probability distribution function, uniform, exponential, Poisson, normal, standard normal, t-distribution, chi-squared distributions, cumulative distribution function, Conditional PDF, Central limit theorem, confidence interval, z-test, t-test, chi-squared test.</li>
        </ul>
      )
    },
    {
      title: "Linear Algebra",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Vector space, subspaces, linear dependence and independence of vectors, matrices, projection matrix, orthogonal matrix, idempotent matrix, partition matrix and their properties, quadratic forms, systems of linear equations and solutions; Gaussian elimination, eigenvalues and eigenvectors, determinant, rank, nullity, projections, LU decomposition, singular value decomposition.</li>
        </ul>
      )
    },
    {
      title: "Calculus and Optimization",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Functions of a single variable, limit, continuity and differentiability, Taylor series, maxima and minima, optimization involving a single variable.</li>
        </ul>
      )
    },
    {
      title: "Programming, Data Structures and Algorithms",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Programming in Python, basic data structures: stacks, queues, linked lists, trees, hash tables; Search algorithms: linear search and binary search, basic sorting algorithms: selection sort, bubble sort and insertion sort; divide and conquer: mergesort, quicksort; introduction to graph theory; basic graph algorithms: traversals and shortest path.</li>
        </ul>
      )
    },
    {
      title: "Database Management and Warehousing",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>ER-model, relational model: relational algebra, tuple calculus, SQL, integrity constraints, normal form, file organization, indexing, data types, data transformation such as normalization, discretization, sampling, compression; data warehouse modelling: schema for multidimensional data models, concept hierarchies, measures: categorization and computations.</li>
        </ul>
      )
    },
    {
      title: "Machine Learning: Supervised Learning",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Regression and classification problems, simple linear regression, multiple linear regression, ridge regression, logistic regression, k-nearest neighbour, naive Bayes classifier, linear discriminant analysis, support vector machine, decision trees, bias-variance trade-off, cross-validation methods such as leave-one-out (LOO) cross-validation, k-folds cross-validation, multi-layer perceptron, feed-forward neural network.</li>
        </ul>
      )
    },
    {
      title: "Machine Learning: Unsupervised Learning",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Clustering algorithms, k-means/k-medoid, hierarchical clustering, top-down, bottom-up: single-linkage, multiple-linkage, dimensionality reduction, principal component analysis.</li>
        </ul>
      )
    },
    {
      title: "AI",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Search: informed, uninformed, adversarial; logic, propositional, predicate; reasoning under uncertainty topics - conditional independence representation, exact inference through variable elimination, and approximate inference through sampling.</li>
        </ul>
      )
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What is GATE exam?",
      answer: "Graduate Aptitude Test in Engineering (GATE) is an examination conducted for admission to postgraduate programs (Master's and Doctoral) in Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and other prestigious institutions. It also opens gateways to Public Sector Undertakings (PSUs) jobs and research opportunities."
    },
    {
      question: "Who can apply for GATE?",
      answer: "Anyone who has successfully completed or is in the 3rd year or higher of any undergraduate degree program in Engineering/Technology/Architecture/Science/Commerce/Arts is eligible. The recent changes have relaxed the eligibility criteria from the minimum 10+2+4 (ongoing) to minimum 10+2+3 (ongoing)."
    },
    {
      question: "How many papers can I appear for in GATE 2026?",
      answer: "For GATE 2026, candidates can apply for up to two subject papers from the prescribed set of combinations, subject to availability of infrastructure and schedule. This is a new change introduced recently."
    },
    {
      question: "What is the exam pattern for GATE CS paper?",
      answer: "The CS paper consists of 65 questions worth 100 marks, divided into General Aptitude (15 marks), Engineering Mathematics (13 marks), and subject-specific questions (72 marks). The question types include Multiple Choice Questions (MCQ), Multiple Select Questions (MSQ), and Numerical Answer Type (NAT) questions."
    },
    {
      question: "Is there negative marking in GATE?",
      answer: "Yes, there is negative marking but only for Multiple Choice Questions (MCQs). For a 1-mark MCQ, 1/3 mark is deducted for a wrong answer, and for a 2-mark MCQ, 2/3 mark is deducted. There is no negative marking for MSQ or NAT questions."
    },
    {
      question: "How should I prepare for GATE CS/DA paper?",
      answer: "Preparation should include understanding the syllabus, solving previous years' question papers, focusing on core concepts, making concise notes, practicing numerical problems, taking mock tests, and regular revision. It's advisable to start at least 6-12 months before the exam with a structured study plan."
    },
    {
      question: "What are the career opportunities after qualifying GATE?",
      answer: "After qualifying GATE, you can pursue M.Tech/M.E/MS/Ph.D from prestigious institutes like IITs, NITs, and IIITs. You can also apply for PSU jobs, research positions in organizations like DRDO, ISRO, and BARC. Teaching positions in colleges and universities are also available for GATE-qualified candidates."
    },
    {
      question: "Are there any scholarships available for GATE-qualified students?",
      answer: "Yes, students who qualify GATE and join M.Tech/M.E programs in AICTE or government-funded institutions are eligible for a monthly stipend of ₹12,400 under the MHRD scholarship scheme. Additionally, some institutes offer financial assistance based on GATE score."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-800 dark:from-brand-800 dark:to-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Graduate Aptitude Test in Engineering
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-brand-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your complete guide to GATE examination with focus on Computer Science and Data Science & AI
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#overview"
                className="px-6 py-3 bg-white text-brand-600 rounded-lg font-medium hover:bg-brand-50 transition-colors"
                onClick={() => setActiveTab("overview")}
              >
                Explore GATE
              </a>
              <a
                href="#syllabus"
                className="px-6 py-3 bg-brand-700 text-white rounded-lg font-medium hover:bg-brand-800 transition-colors border border-brand-500"
                onClick={() => setActiveTab("syllabus")}
              >
                View Syllabus
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex items-center"
            variants={fadeIn}
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Yearly Candidates</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">9+ Lakh</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex items-center"
            variants={fadeIn}
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Test Papers</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">30</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex items-center"
            variants={fadeIn}
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
              <Building className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Participating Institutes</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">150+</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex items-center"
            variants={fadeIn}
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Exam Duration</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">3 Hours</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden sticky top-20">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  GATE Information
                </h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#overview"
                      onClick={() => setActiveTab("overview")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "overview"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <Award className="w-4 h-4 mr-2" />
                      <span>Overview</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#eligibility"
                      onClick={() => setActiveTab("eligibility")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "eligibility"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Eligibility</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#exam-pattern"
                      onClick={() => setActiveTab("exam-pattern")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "exam-pattern"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Exam Pattern</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#syllabus"
                      onClick={() => setActiveTab("syllabus")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "syllabus"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>Syllabus</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#specializations"
                      onClick={() => setActiveTab("specializations")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "specializations"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      <span>Specializations</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#top-colleges"
                      onClick={() => setActiveTab("top-colleges")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "top-colleges"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <Building className="w-4 h-4 mr-2" />
                      <span>Top Colleges</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faqs"
                      onClick={() => setActiveTab("faqs")}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                        activeTab === "faqs"
                          ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4 mr-2" />
                      <span>FAQs</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Right Side Content */}
          <div className="lg:w-3/4">
            {/* Overview Section */}
            {activeTab === "overview" && (
              <motion.div
                id="overview"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What is GATE?</h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      Graduate Aptitude Test in Engineering (GATE) is an examination conducted for Master of Engineering (ME), Master of Technology (MTech) and direct PhD admissions to Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs) and other institutes/universities across India.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mt-4">
                      It also opens the gateway to booming Public Sector Undertaking Companies (PSUs) and in the field of research. Some of the PSUs and research organizations which use GATE scores for providing jobs include ONGC, NTPC, GAIL, HPCL, PGCIL, BHEL, BSNL, NHPC, BARC, DRDO, etc.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mt-4">
                      GATE is an All-India examination administered and conducted in eight zones across the country by the GATE Committee comprising faculty members from IISc, Bangalore and other seven IIT's on behalf of the National Coordination Board (NCB), Department of Higher Education, Ministry of Education (MoE), Government of India.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What's New in GATE 2026</h2>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Two new subjects:</span> Geomatics Engineering (GE) and Naval Architecture and Marine Engineering (NM). The total number of subjects has increased to 30.
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Two papers option:</span> Students applying for GATE 2026 can also opt for two different papers from the prescribed set of combinations.
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Relaxed eligibility:</span> Eligibility criteria to appear for GATE-2026 is relaxed from the minimum 10+2+4 (ongoing) to minimum 10+2+3 (ongoing), enabling even those in the third year of their undergraduate studies to appear for the examination.
                        </p>
                      </li>
                      <li className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">Objective questions only:</span> All test papers of GATE 2026 will be entirely objective type. Pattern of questions may include (i) Multiple Choice Questions (MCQ), (ii) Multiple Select Questions (MSQ), and/or (iii) Numerical Answer Type (NAT) questions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Career Opportunities after GATE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white flex items-center mb-2">
                          <GraduationCap className="w-5 h-5 mr-2 text-brand-500" />
                          Higher Education
                        </h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-7 list-disc">
                          <li>M.Tech/M.E/M.S/Ph.D from IISc, IITs, NITs, IIITs</li>
                          <li>Post Graduate Diplomas from NITIE Mumbai</li>
                          <li>International university admissions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white flex items-center mb-2">
                          <Building className="w-5 h-5 mr-2 text-brand-500" />
                          PSU Recruitment
                        </h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-7 list-disc">
                          <li>IOCL, NTPC, BHEL, PGCIL, BARC, CSIR</li>
                          <li>Maharatna and Navratna companies</li>
                          <li>Competitive salary packages</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white flex items-center mb-2">
                          <BookOpen className="w-5 h-5 mr-2 text-brand-500" />
                          Teaching & Academia
                        </h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-7 list-disc">
                          <li>Professor, Asst. Professor positions</li>
                          <li>IITs, NITs and other educational institutes</li>
                          <li>Academic research opportunities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white flex items-center mb-2">
                          <Code className="w-5 h-5 mr-2 text-brand-500" />
                          Research & Development
                        </h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1 pl-7 list-disc">
                          <li>Junior/Senior Research Fellow positions</li>
                          <li>ISRO, DRDO, BARC, CSIR, IITs</li>
                          <li>Scientists "C" grade jobs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Organizing Institutes</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      The exam is jointly conducted by IIT Bombay, IIT Delhi, IIT Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras, IIT Roorkee and Indian Institute for Science, Bangalore (IISC Bangalore), on rotational basis.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Year</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Organizing Institute</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">2026</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">IIT Delhi</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">IIT Roorkee</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">2024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">IISc Bengaluru</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">2023</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">IIT Kanpur</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">2022</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">IIT Kharagpur</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Eligibility Section */}
            {activeTab === "eligibility" && (
              <motion.div
                id="eligibility"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Eligibility Criteria for GATE 2026</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Anyone who has successfully completed 10+2+2 or 10+3+1 and currently studying in 3rd or higher years of any undergraduate degree program OR has already graduated in any government approved degree program in Engineering / Technology / Architecture / Science / Commerce / Arts is eligible to apply for GATE.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Qualifying Degree</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Eligibility</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">BE/BTech/BPharm</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Bachelor's degree in Engineering/Technology (4 years after 10+2 or 3 years after B.Sc./Diploma in Engineering/Technology)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 3rd year or higher or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">B.Arch</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Bachelor's degree of Architecture (5 years course)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 3rd year or higher or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">B.Sc (Research)/BS</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Bachelor's degree in Science (Post-Diploma/4 years after 10+2)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 3rd year or higher or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">MSc/MA/MCA or equivalent</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Master's degree in any branch of Science/Arts/Mathematics/Statistics/Computer Applications or equivalent</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the first year or higher or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Int ME/ M.Tech (Post-B.Sc)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Post-B.Sc Integrated Master's degree programs in Engineering/Technology (4 year program)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 1st/ 2nd/ 3rd/4th year or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Int ME/ M.Tech or Dual Degree (after Diploma or 10+2)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Integrated Master's degree program or Dual Degree program in Engineering/Technology (5 year program)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 3rd/ 4th/5th year or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Int M.Sc/ Int BS-MS</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Integrated M.Sc. or 5 years integrated B.S.-M.S. program</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Currently in the 3rd year or higher or already completed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Professional Society Examinations</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">B.E./B.Tech./B.Arch. equivalent examinations of Professional Societies, recognised by MoE/UPSC/AICTE (e.g., AMIE by Institution of Engineers-India, AMICE by the Institute of Civil Engineers-India)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Completed Section A or equivalent of such professional courses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Important Note</h3>
                      <div className="mt-2 text-blue-700 dark:text-blue-300">
                        <p>The relaxed eligibility criteria for GATE 2026 is a significant change that enables students in their third year of undergraduate studies to appear for the examination, providing an additional opportunity to improve performance and secure better career options.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Exam Pattern Section */}
            {activeTab === "exam-pattern" && (
              <motion.div
                id="exam-pattern"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">GATE 2026 Exam Pattern</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Examination Mode</h3>
                        <p className="text-slate-600 dark:text-slate-300">Computer Based Test (CBT) in English</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Duration</h3>
                        <p className="text-slate-600 dark:text-slate-300">3 Hours (180 minutes)</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Number of Papers</h3>
                        <p className="text-slate-600 dark:text-slate-300">30 different subject papers</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Sections</h3>
                        <p className="text-slate-600 dark:text-slate-300">General Aptitude (GA) + Subject-specific questions</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Type of Questions</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5">
                            <li>Multiple Choice Questions (MCQ)</li>
                            <li>Multiple Select Questions (MSQ)</li>
                            <li>Numerical Answer Type (NAT)</li>
                          </ul>
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Marking Scheme</h3>
                        <p className="text-slate-600 dark:text-slate-300">Questions carry 1 or 2 marks each</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Marks Distribution for CS and DA Papers</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Section</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">CS Paper</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">DA Paper</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">General Aptitude (GA)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">15 marks</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">15 marks</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Engineering Mathematics</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">13 marks</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">N/A</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Subject Questions</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">72 marks</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">85 marks</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">Total</td>
                            <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">100 marks</td>
                            <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">100 marks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Negative Marking</h2>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">For 1-mark MCQ:</span> 1/3 mark will be deducted for a wrong answer.
                        </p>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">For 2-mark MCQ:</span> 2/3 mark will be deducted for a wrong answer.
                        </p>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">No negative marking:</span> For MSQ or NAT questions.
                        </p>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <span className="font-medium text-slate-900 dark:text-white">No partial marking:</span> For MSQ questions, the answer is correct only if all the correct options (and no incorrect options) are selected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Important Dates</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Event</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Tentative Dates</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">GATE Online Application Opens</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Last week of August 2025</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Regular Registration Closes</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Last week of October 2025</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Extended Period for Registration (with late fee)</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">2nd Week of October 2025</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Modifications in GATE Application</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">1st week of November 2025</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Admit Card Available for Download</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">2nd Week of January 2026</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">GATE 2026 Examination</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">1st to 2nd Week of February 2026</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">Announcement of Results</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">3rd Week of March 2026</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Syllabus Section */}
            {activeTab === "syllabus" && (
              <motion.div
                id="syllabus"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">GATE 2026 Syllabus</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      GATE 2026 will be conducted for 30 test papers. Candidates can choose one or two papers from the allowed combinations. Below is the detailed syllabus for Computer Science & Information Technology (CS) and Data Science & Artificial Intelligence (DA).
                    </p>
                    
                    <div className="border-t border-b border-slate-200 dark:border-slate-700 py-4 flex flex-wrap gap-4 mb-6">
                      <button
                        onClick={() => setShowCsSyllabus(!showCsSyllabus)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                          showCsSyllabus
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        }`}
                      >
                        {showCsSyllabus ? (
                          <ChevronDown className="w-4 h-4 mr-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2" />
                        )}
                        <span>Computer Science & Information Technology (CS)</span>
                      </button>
                      
                      <button
                        onClick={() => setShowDaSyllabus(!showDaSyllabus)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                          showDaSyllabus
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        }`}
                      >
                        {showDaSyllabus ? (
                          <ChevronDown className="w-4 h-4 mr-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2" />
                        )}
                        <span>Data Science & Artificial Intelligence (DA)</span>
                      </button>
                    </div>
                    
                    {showCsSyllabus && (
                      <div className="space-y-4 mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                          <Code className="w-5 h-5 mr-2 text-brand-500" />
                          Computer Science & Information Technology (CS)
                        </h3>
                        
                        <div className="space-y-4">
                          {csSyllabusSections.map((section, index) => (
                            <div key={index} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                              <h4 className="font-medium text-slate-900 dark:text-white mb-2">{section.title}</h4>
                              <div className="text-slate-600 dark:text-slate-300">
                                {section.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {showDaSyllabus && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                          <BarChart2 className="w-5 h-5 mr-2 text-brand-500" />
                          Data Science & Artificial Intelligence (DA)
                        </h3>
                        
                        <div className="space-y-4">
                          {daSyllabusSections.map((section, index) => (
                            <div key={index} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                              <h4 className="font-medium text-slate-900 dark:text-white mb-2">{section.title}</h4>
                              <div className="text-slate-600 dark:text-slate-300">
                                {section.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Preparation Strategy</h2>
                    <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                      "Big Journeys begin with Small Steps. Success doesn't necessarily come from breakthrough Innovation, but from flawless Execution."
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">For First-time Aspirants</h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
                          <li>Define your aim and target from the beginning</li>
                          <li>Analyze previous years' question papers</li>
                          <li>Identify one best reference book for each subject</li>
                          <li>Create a structured study plan (6-month/1-year)</li>
                          <li>Make subject-wise bi-weekly plans</li>
                          <li>Develop a daily to-do list for effective time management</li>
                          <li>Solve previous years' questions alongside studying</li>
                          <li>Maintain a regular revision schedule</li>
                          <li>Create micro-notes for quick revision</li>
                          <li>Regularly evaluate your progress through mock tests</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">For Repeaters</h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
                          <li>Review past performance and identify reasons for failure</li>
                          <li>Start with improving weak areas in each subject</li>
                          <li>Focus on solving diverse problem types from new sources</li>
                          <li>Maintain regularity and self-motivation</li>
                          <li>Join good test series and practice in exam conditions</li>
                          <li>Form study groups for discussing complex problems</li>
                          <li>Analyze mistakes from previous attempts</li>
                          <li>Create a more focused strategy based on experience</li>
                          <li>Balance revision with new learning</li>
                          <li>Work on time management during exams</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Specializations Section */}
            {activeTab === "specializations" && (
              <motion.div
                id="specializations"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Subject Specialization Priority</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      After qualifying GATE, you can pursue specializations in various fields based on your interests and career goals. Here are the popular specializations for Computer Science and Data Science & AI.
                    </p>
                    
                    <div className="border-t border-b border-slate-200 dark:border-slate-700 py-4 flex flex-wrap gap-4 mb-6">
                      <button
                        onClick={() => setActiveSpecialization("cs")}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                          activeSpecialization === "cs"
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        }`}
                      >
                        <Code className="w-4 h-4 mr-2" />
                        <span>Computer Science</span>
                      </button>
                      
                      <button
                        onClick={() => setActiveSpecialization("da")}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                          activeSpecialization === "da"
                            ? "bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                        }`}
                      >
                        <BarChart2 className="w-4 h-4 mr-2" />
                        <span>Data Science & AI</span>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {specializationItems[activeSpecialization].map((item, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mr-3 text-brand-500 dark:text-brand-400">
                              {item.icon}
                            </div>
                            <h3 className="font-medium text-slate-900 dark:text-white">{item.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Career Paths after GATE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg text-center">
                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3 text-blue-600 dark:text-blue-400">
                          <GraduationCap className="w-7 h-7" />
                        </div>
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Higher Education</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">M.Tech, M.S., Ph.D programs at prestigious institutes like IITs, NITs, and IIITs</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg text-center">
                        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3 text-green-600 dark:text-green-400">
                          <Building className="w-7 h-7" />
                        </div>
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">PSU Jobs</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Recruitment in Maharatna and Navratna companies like IOCL, NTPC, BHEL, PGCIL</p>
                      </div>
                      
                      <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg text-center">
                        <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3 text-purple-600 dark:text-purple-400">
                          <Layers className="w-7 h-7" />
                        </div>
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2">Research Positions</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Research fellowships at organizations like ISRO, DRDO, BARC, CSIR, and IITs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Top Colleges Section */}
            {activeTab === "top-colleges" && (
              <motion.div
                id="top-colleges"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Top Colleges Accepting GATE Score</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Here are the top colleges and institutes that accept GATE scores for admission to postgraduate programs. The list includes approximate cutoff scores based on previous years' trends.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Rank</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Institute</th>
                            <th className="px-6 py-3 bg-slate-50 dark:bg-slate-700 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">Approximate Cutoff (CS)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                          {topColleges.map((college, index) => (
                            <tr key={index} className={index < 3 ? "bg-amber-50 dark:bg-amber-900/10" : ""}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{college.rank}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{college.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{college.cutoff}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                      * Cutoff scores are approximate and based on previous years' trends. Actual cutoffs may vary.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Building className="w-5 h-5 mr-2 text-brand-500" />
                        IITs
                      </h3>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>IIT Delhi</li>
                        <li>IIT Bombay</li>
                        <li>IIT Madras</li>
                        <li>IIT Kanpur</li>
                        <li>IIT Kharagpur</li>
                        <li>IIT Roorkee</li>
                        <li>IIT Guwahati</li>
                        <li>IIT Hyderabad</li>
                        <li>IIT BHU Varanasi</li>
                        <li>IIT Indore</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Building className="w-5 h-5 mr-2 text-brand-500" />
                        NITs
                      </h3>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>NIT Tiruchirappalli</li>
                        <li>NIT Warangal</li>
                        <li>NIT Calicut</li>
                        <li>NIT Surathkal</li>
                        <li>NIT Rourkela</li>
                        <li>NIT Allahabad</li>
                        <li>MNNIT Allahabad</li>
                        <li>NIT Durgapur</li>
                        <li>NIT Jaipur</li>
                        <li>NIT Kurukshetra</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Building className="w-5 h-5 mr-2 text-brand-500" />
                        Other Institutes
                      </h3>
                      <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                        <li>IISc Bangalore</li>
                        <li>IIIT Hyderabad</li>
                        <li>IIIT Bangalore</li>
                        <li>IIIT Delhi</li>
                        <li>BITS Pilani</li>
                        <li>DTU Delhi</li>
                        <li>NSIT Delhi</li>
                        <li>Jadavpur University</li>
                        <li>Anna University</li>
                        <li>VIT Vellore</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* FAQs Section */}
            {activeTab === "faqs" && (
              <motion.div
                id="faqs"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                          >
                            <span>{faq.question}</span>
                            {activeFaq === index ? (
                              <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                            )}
                          </button>
                          
                          {activeFaq === index && (
                            <div className="p-4 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-200 dark:border-slate-700">
                              <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-brand-800 dark:text-brand-300">Still have questions?</h3>
                      <div className="mt-2 text-brand-700 dark:text-brand-300">
                        <p>If you have more questions about GATE exam or need personalized guidance, our team is here to help. Join our community forums or contact our education counselors for expert advice.</p>
                        <div className="mt-4">
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Newsletter/CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with GATE 2026</h2>
              <p className="text-slate-300 mb-6">
                Subscribe to our newsletter to receive the latest updates, study materials, and tips for GATE preparation. Never miss important dates and announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white border-0 focus:ring-2 focus:ring-brand-500 flex-1"
                />
                <button className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-brand-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Premium Study Materials</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Access our comprehensive study materials, video lectures, practice tests, and previous year papers to boost your GATE preparation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-300">Coming Soon</span>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateExamPage;