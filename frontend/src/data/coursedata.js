// src/data/courseData.js
import { ENDPOINTS, fetchWithAuth } from "../api/api";

// Local cache for data
let semestersCache = null;

// Fetch all semesters data
export const getAllSemesters = () => {
  // If we already have data in the cache, return it
  if (semestersCache) {
    return semestersCache;
  }
  try {
    // This fallback data will be used directly instead of trying to fetch
          const fallbackData = [
                  {
        id: 1,
        title: "Sem 1",
        subjects: [
          {
            id: "FOP",
            code: "CC103-N",
            title: "Fundamental Of Programming",
            description: "The basic programming concepts include variables, basic control structures, data structures, object-oriented programming, troubleshooting and debugging, and various programming tools. These concepts are similar across various programming languages, such as Python, C++, C, and Java.",
            thumbnail: "/images/Thumbnail/Sem-1/FOP.webp",
            totalUnits: 7,
            units: [
              { id: 1, title: "Introduction to computer" },
              { id: 2, title: "Introduction to Programming" },
              { id: 3, title: "Fundamentals of 'C'" },
              { id: 4, title: "Control Structures in 'C'" },
              { id: 5, title: "Array & String" },
              { id: 6, title: "Functions" },
              { id: 7, title: "Structure and Union, Pointers, File Management" }
            ]
          },
          {
            id: "MATHS1",
            code: "CC101-N",
            title: "Engineering Mathematics – 1",
            description: "The course consists of topics in differential calculus, integral calculus, linear algebra and differential equations with applications to various engineering problems. This course will cover the following main topics: Mean Value Theorems; Indeterminate Forms; Taylor's and Maclaurin's Theorems. Partial Derivatives; Differentiability; Taylor's Expansion of Functions of Several Variables.",
            thumbnail: "/images/Thumbnail/Sem-1/Maths-1.webp",
            totalUnits: 7,
            units: [
              { id: 1, title: "Differential Calculus" },
              { id: 2, title: "Partial differentiation and its applications" },
              { id: 3, title: "Curve Tracing" },
              { id: 4, title: "Beta & Gamma function" },
              { id: 5, title: "Integral Calculus" },
              { id: 6, title: "Multiple Integrals and its applications" },
              { id: 7, title: "Infinite Series" }
            ]
          },
          {
            id: "EOC",
            code: "CC109-N",
            title: "Elements Of Civil Engineering",
            description: "The motto of the civil engineering is the 'protection of the welfare and safety of the public'. Indeed, the term civil in civil engineering refers to the discipline's involvement in public works, including government buildings, military bases, mass transit systems (i.e., highways, railways, airports, and water ways), water treatment works, waste management, irrigation etc.",
            thumbnail: "/images/Thumbnail/Sem-1/EOC.webp",
            totalUnits: 10,
            units: [
              { id: 1, title: "Introduction and Scope of Civil Engineering" },
              { id: 2, title: "Surveying" },
              { id: 3, title: "Linear measurements" },
              { id: 4, title: "Angular Measurements" },
              { id: 5, title: "Elevation measurements" },
              { id: 6, title: "Modern Tools of Surveying and Mapping" },
              { id: 7, title: "Construction Materials" },
              { id: 8, title: "Elements of Building Construction" },
              { id: 9, title: "Water Resources Development" },
              { id: 10, title: "Transportation Engineering" }
            ]
          },
          {
            id: "EG",
            code: "CC110-N",
            title: "Engineering Graphics",
            description: "Importance of graphics in engineering applications – Use of drafting instruments – BIS conventions and specifications – Size, layout and folding of drawing sheets – Lettering and dimensioning.",
            thumbnail: "/images/Thumbnail/Sem-1/EG.webp",
            totalUnits: 12,
            units: [
              { id: 1, title: "Introduction" },
              { id: 2, title: "Scales" },
              { id: 3, title: "Engineering Curves" },
              { id: 4, title: "Loci of Points" },
              { id: 5, title: "Projections of Points & Lines" },
              { id: 6, title: "Projections of Planes" },
              { id: 7, title: "Projections of Solids" },
              { id: 8, title: "Section of Solids" },
              { id: 9, title: "Development of Lateral Surfaces" },
              { id: 10, title: "Orthographic Projections" },
              { id: 11, title: "Isometric Projections and Isometric View or Drawing" },
              { id: 12, title: "Machine Drawing" }
            ]
          },
          {
            id: "EP",
            code: "CC107-N",
            title: "Engineering Physics",
            description: "The syllabus of Engineering Physics highlights the basic concepts of Physics and its technological applications to all branches of Engineering via ability to design and conduct experiments, as well as to analyse and interpret data.",
            thumbnail: "/images/Thumbnail/Sem-1/EP.webp",
            totalUnits: 10,
            units: [
              { id: 1, title: "Ultrasonics & Architectural Acoustic" },
              { id: 2, title: "Elasticity" },
              { id: 3, title: "Laser" },
              { id: 4, title: "Fibre Optics" },
              { id: 5, title: "Optoelectronic devices" },
              { id: 6, title: "Artificial Radioactivity" },
              { id: 7, title: "Crystal Structure And X-rays Diffraction" },
              { id: 8, title: "Instrumentation" },
              { id: 9, title: "Band Theory Of Solids" },
              { id: 10, title: "Nanomaterials And NDT" }
            ]
          },
          {
            id: "ES",
            code: "UE101",
            title: "Environmental Science",
            description: "To create awareness, acquire knowledge such that students manage their society properly inculcate skills for identifying problems associated with environment and develop ability to evaluate participate in environmental protection activities that is helpful to all living things.",
            thumbnail: "/images/Thumbnail/Sem-1/ES.webp",
            totalUnits: 5,
            units: [
              { id: 1, title: "Introduction to environment, Ecology and Ecosystem" },
              { id: 2, title: "Ecology & Ecosystem" },
              { id: 3, title: "Population & Natural Resources" },
              { id: 4, title: "Environmental Pollution" },
              { id: 5, title: "Social Issues" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Sem 2",
        subjects: [
          {
            id: "OOPC",
            code: "CC111-N",
            title: "Object Oriented Programming Using 'C++'",
            description: "To make the students think in the direction of providing alternative option to procedural programming languages. To understand the importance of data over process.",
            thumbnail: "/images/Thumbnail/Sem-2/OOPC.webp",
            totalUnits: 10,
            units: [
              { id: 1, title: "Elaborated understanding of Essentials C Programming" },
              { id: 2, title: "Fundamental Concepts of OOP with C++" },
              { id: 3, title: "C++ Programming Syntactical Basics" },
              { id: 4, title: "C++ Functions" },
              { id: 5, title: "Objects and Class" },
              { id: 6, title: "Operator Overloading" },
              { id: 7, title: "Inheritance" },
              { id: 8, title: "Polymorphism & Virtual Functions" },
              { id: 9, title: "Templates and Exception Handling" },
              { id: 10, title: "Introduction to Streams and Files" }
            ]
          },
          {
            id: "MATHS2",
            code: "CC201-N",
            title: "Engineering Mathematics – 2",
            description: "To present the foundations of many basic Mathematical tools and concepts related Engineering. To provide a coherent development to the students for the courses of various branches of Engineering like Control Theory, Circuits and Networks, Digital Logic design, Fluid Mechanics, Machine Design etc.",
            thumbnail: "/images/Thumbnail/Sem-2/Maths-2.webp",
            totalUnits: 7,
            units: [
              { id: 1, title: "Matrix Theory and Application of Matrices" },
              { id: 2, title: "Eigen value and Eigenvector and Applications" },
              { id: 3, title: "Vectors in Rⁿ" },
              { id: 4, title: "Vector Space" },
              { id: 5, title: "Linear Transformation" },
              { id: 6, title: "Vector differential Calculus" },
              { id: 7, title: "Vector Integral Calculus" }
            ]
          },
          {
            id: "BEEE",
            code: "CC102-N",
            title: "Basic Electrical and Electronics Engineering",
            description: "To present a problem oriented introductory knowledge of Electrical Engineering Fundamentals. To focus on the study of electrical parameters & different engineering application based principles.",
            thumbnail: "/images/Thumbnail/Sem-2/BEEE.webp",
            totalUnits: 8,
            units: [
              { id: 1, title: "An Introduction to D.C. Circuits" },
              { id: 2, title: "Work, Power and energy" },
              { id: 3, title: "Electrostatics & Capacitance" },
              { id: 4, title: "Electromagnetic" },
              { id: 5, title: "AC Fundamentals" },
              { id: 6, title: "Analysis of A.C. Circuit" },
              { id: 7, title: "Polyphase Circuits" },
              { id: 8, title: "Basics of Electronics" }
            ]
          },
          {
            id: "FME",
            code: "CC104-N",
            title: "Fundamental Of Mechanical Engineering",
            description: "To present a problem oriented introductory knowledge of Fundamentals of Mechanical Engineering. To address the underlying concepts and methods behind mechanical engineering.",
            thumbnail: "/images/Thumbnail/Sem-2/FME.webp",
            totalUnits: 15,
            units: [
              { id: 1, title: "Introduction" },
              { id: 2, title: "Properties of Gases" },
              { id: 3, title: "Heat Engines" },
              { id: 4, title: "Properties of Steam" },
              { id: 5, title: "Steam and Steam Generator" },
              { id: 6, title: "Refrigeration and Air conditioning" },
              { id: 7, title: "I.C. Engine" },
              { id: 8, title: "Air Compressor" },
              { id: 9, title: "Speed Control" },
              { id: 10, title: "Fuels and Combustion" },
              { id: 11, title: "Power Transmission Methods and Devices" },
              { id: 12, title: "Pump" },
              { id: 13, title: "Engineering Materials" },
              { id: 14, title: "Mechanical Working of Metals and Press Operations" },
              { id: 15, title: "Heat Transfer & Turbines" }
            ]
          },
          {
            id: "BCPS",
            code: "CC106-N",
            title: "Business communication and presentation skills",
            description: "To enhance learners communication skills in both social and professional contexts. Employ principles of effective group communication to increase open participation, and strengthen decision making in work groups and teams.",
            thumbnail: "/images/Thumbnail/Sem-2/BCPS.webp",
            totalUnits: 13,
            units: [
              { id: 1, title: "Coming Soon" },
              { id: 2, title: "Coming Soon" },
              { id: 3, title: "Coming Soon" },
              { id: 4, title: "Coming Soon" },
              { id: 5, title: "AC Fundamentals" },
              { id: 6, title: "Analysis of A.C. Circuit" },
              { id: 7, title: "Polyphase Circuits" },
              { id: 8, title: "Basics of Electronics" },
              { id: 9, title: "Coming Soon" },
              { id: 10, title: "Coming Soon" },
              { id: 11, title: "Coming Soon" },
              { id: 12, title: "Coming Soon" },
              { id: 13, title: "Coming Soon" }
            ]
          },
          {
            id: "WORKSHOP",
            code: "CC105-N",
            title: "Workshop",
            description: "To introduce hardware and software Computers Basics. Use of Laboratory instrument such as Multimeter, Function generator, Power supply, CRO etc.",
            thumbnail: "/images/Thumbnail/Sem-2/WORKSHOP.webp",
            totalUnits: 3,
            units: [
              { id: 1, title: "Coming Soon" },
              { id: 2, title: "Coming Soon" },
              { id: 3, title: "Coming Soon" }
            ]
          },
          {
            id: "IICT",
            code: "IICT",
            title: "Introduction To Information & Communication Technology",
            description: "An introduction to the fundamentals of information and communication technology, covering basic concepts and applications.",
            thumbnail: "/images/Thumbnail/Sem-2/IICT.webp",
            totalUnits: 1,
            units: [
              { id: 1, title: "Coming Soon" }
            ]
          }
        ]
      },

// Semester 3
{
    id: 3,
    title: "Sem 3",
    subjects: [
      {
        id: "DSA",
        code: "CT303-N",
        title: "Data Structures & Algorithms",
        description: "To introduce the fundamentals of data structures, abstract concepts and how these concepts are useful in problem solving. To learn to develop algorithms and step by step approach to solve various problems.",
        thumbnail: "/images/Thumbnail/Sem-3/DSA.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Linear Data Structures" },
          { id: 3, title: "Nonlinear Data Structures" },
          { id: 4, title: "Sorting and Searching" },
          { id: 5, title: "Hashing" },
          { id: 6, title: "File Structures" }
        ]
      },
      {
        id: "MATHS3",
        code: "CC302B-N",
        title: "Discrete Mathematics - 3",
        description: "1. Use mathematically correct terminology and notation. 2. Construct correct direct and indirect proofs. 3. Use division into cases in a proof. 4. Use counterexamples. 5. Apply logical reasoning to solve a variety of problems.",
        thumbnail: "/images/Thumbnail/Sem-3/Maths-3.webp",
        totalUnits: 5,
        units: [
          { id: 1, title: "Set, Relation & Function" },
          { id: 2, title: "Lattices" },
          { id: 3, title: "Propositional Logic" },
          { id: 4, title: "Algebraic Structures and Morphism" },
          { id: 5, title: "Graphs and Trees" }
        ]
      },
      {
        id: "DBMS",
        code: "CT306-N",
        title: "Database Management Systems",
        description: "To understand the different issues involved in the design and implementation of a database system. To design and build a simple database system and demonstrate competence with the fundamental tasks involved with modeling, designing, and implementing a DBMS.",
        thumbnail: "/images/Thumbnail/Sem-3/DBMS.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Database System Architecture" },
          { id: 2, title: "Data Models" },
          { id: 3, title: "Relational Query Languages" },
          { id: 4, title: "Relational Database Design" },
          { id: 5, title: "Query Processing and Optimization" },
          { id: 6, title: "Storage Strategies" },
          { id: 7, title: "Transaction Processing" },
          { id: 8, title: "Database Security" },
          { id: 9, title: "Advanced Topics" }
        ]
      },
      {
        id: "DE",
        code: "CT304-N",
        title: "Digital Electronics",
        description: "Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables.",
        thumbnail: "/images/Thumbnail/Sem-3/DE.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Number Systems and Codes" },
          { id: 2, title: "Boolean Algebra and Logic Gates" },
          { id: 3, title: "Combinational Logic Circuit" },
          { id: 4, title: "Flip Flops and Sequential Logic and Circuits" },
          { id: 5, title: "Introduction to State Machines" },
          { id: 6, title: "Programmable Logic Devices" },
          { id: 7, title: "D/A and A/D Converters" }
        ]
      },
      {
        id: "ITW",
        code: "CT305-N",
        title: "IT Workshop",
        description: "Develop understanding of number systems and Boolean algebra. Understand the functioning of logic gates, their implementation and verification of truth tables.",
        thumbnail: "/images/Thumbnail/Sem-3/ITW.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction to WWW" },
          { id: 2, title: "Introduction to HTML" },
          { id: 3, title: "CSS" },
          { id: 4, title: "JavaScript" },
          { id: 5, title: "XML and Ajax" },
          { id: 6, title: "PHP" },
          { id: 7, title: "SciLab" }
        ]
      }
    ]
  },
  
  // Semester 4
  {
    id: 4,
    title: "Sem 4",
    subjects: [
      {
        id: "OOPJ",
        code: "CT405-N",
        title: "Object Oriented Programming Using Java",
        description: "To understand the concepts of object-oriented programming through Java and develop skills in applying these concepts to build robust applications.",
        thumbnail: "/images/Thumbnail/Sem-4/OOPJ.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction to Java" },
          { id: 2, title: "Objects and Classes" },
          { id: 3, title: "Inheritance and Polymorphism" },
          { id: 4, title: "Collection Interface and Classes" },
          { id: 5, title: "Exception Handling in Java" },
          { id: 6, title: "Multithreading in Java" },
          { id: 7, title: "I/O Programming" },
          { id: 8, title: "Event and GUI Programming" }
        ]
      },
      {
        id: "MATHS4",
        code: "CC401-N",
        title: "Probability, Statistics and Numerical Methods",
        description: "To introduce fundamental concepts of probability, statistics and numerical methods with applications to engineering problems.",
        thumbnail: "/images/Thumbnail/Sem-4/Maths-41.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Random Variables" },
          { id: 2, title: "Probability Distributions" },
          { id: 3, title: "Statistical Testing" },
          { id: 4, title: "Correlation and Regression" },
          { id: 5, title: "Numerical Methods for Equations" },
          { id: 6, title: "Numerical Integration and Differentiation" },
          { id: 7, title: "Numerical Solutions of Differential Equations" }
        ]
      },
      {
        id: "OS",
        code: "CT404-N",
        title: "Operating Systems",
        description: "To understand the fundamentals of operating systems including process management, memory management, and file systems.",
        thumbnail: "/images/Thumbnail/Sem-4/OS.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Process" },
          { id: 3, title: "Inter-process Communication" },
          { id: 4, title: "Deadlock" },
          { id: 5, title: "Memory Management" },
          { id: 6, title: "I/O Hardware" },
          { id: 7, title: "Security" }
        ]
      },
      {
        id: "COA",
        code: "CT403-N",
        title: "Computer Organization & Architecture",
        description: "To understand the organization and architecture of modern computer systems including CPU, memory, and I/O subsystems.",
        thumbnail: "/images/Thumbnail/Sem-4/COA.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Overview of Register Transfer and Micro-operations" },
          { id: 2, title: "Basic Computer Organization and Design" },
          { id: 3, title: "Programming the Basic Computer" },
          { id: 4, title: "Central Processing Unit" },
          { id: 5, title: "Pipeline Processing" },
          { id: 6, title: "Memory Organization" }
        ]
      },
      {
        id: "POM",
        code: "CC301-N",
        title: "Principles of Management",
        description: "To understand key management principles and functions including planning, organizing, leading, and controlling in various organizational contexts.",
        thumbnail: "/images/Thumbnail/Sem-4/POM.webp",
        totalUnits: 5,
        units: [
          { id: 1, title: "Introduction to Management and Organizations" },
          { id: 2, title: "Schools of Management thoughts" },
          { id: 3, title: "Organizational Structure and Design" },
          { id: 4, title: "Organizational Culture and Environment" },
          { id: 5, title: "Understanding Basics of Financial Management and Accounting" }
        ]
      },
]
},
// Semester 5
{
    id: 5,
    title: "Sem 5",
    subjects: [
      {
        id: "AJP",
        code: "CT506A-N",
        title: "Advanced Java Programming",
        description: "To build on the knowledge of Java programming and develop skills in advanced Java technologies including GUI, networking, database access, and web development.",
        thumbnail: "/images/Thumbnail/Sem-5/AJP.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Swing" },
          { id: 2, title: "JDBC" },
          { id: 3, title: "Java Networking and J2EE" },
          { id: 4, title: "Servlets, Event Listeners and Filters" },
          { id: 5, title: "Java Server Pages and JSTL" },
          { id: 6, title: "Hibernate 4.0" },
          { id: 7, title: "Spring MVC" }
        ]
      },
      
      {
        id: "PYTHON",
        code: "IT506F-N",
        title: "Python Programming",
        description: "The course is designed to provide understanding of the basic components of computer programming using the Python language – and might be a gentle introduction to programming for those who think they might have a longer term interest in the subject area.",
        thumbnail: "/images/Thumbnail/Sem-5/Python.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Introduction to Python Programming Language" },
          { id: 2, title: "Data Collections and Language Component" },
          { id: 3, title: "Object and Classes" },
          { id: 4, title: "Functions and Modules" },
          { id: 5, title: "I/O and Error Handling In Python" },
          { id: 6, title: "Simple Algorithms and Data structures" }
        ]
      },
      {
        id: "DAA",
        code: "CE504-N",
        title: "Design & Analysis of Algorithms",
        description: "To understand the principles and techniques used in algorithm design and analysis, including time and space complexity analysis and various algorithm design paradigms.",
        thumbnail: "/images/Thumbnail/Sem-5/DAA.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Basics of Algorithms & Mathematics" },
          { id: 2, title: "Analysis of Algorithms" },
          { id: 3, title: "Divide and Conquer Algorithms" },
          { id: 4, title: "Greedy Algorithms" },
          { id: 5, title: "Dynamic Programming" },
          { id: 6, title: "Graph Algorithms" },
          { id: 7, title: "(CE) Backtracking and Branch and Bound" },
          { id: 8, title: "Introduction to Complexity Theory" },
          { id: 9, title: "(IT) String Matching Algorithms" }
        ]
      },
      {
        id: "SE",
        code: "CT501-N",
        title: "Software Engineering",
        description: "To understand the fundamental principles and methodologies of software engineering, including requirements analysis, design, testing, and project management.",
        thumbnail: "/images/Thumbnail/Sem-5/SE.webp",
        totalUnits: 10,
        units: [
          { id: 1, title: "Software and Software Engineering" },
          { id: 2, title: "Software Process Model" },
          { id: 3, title: "Software Requirement Analysis and Specification" },
          { id: 4, title: "Software Design" },
          { id: 5, title: "Coding" },
          { id: 6, title: "Software Testing Strategies" },
          { id: 7, title: "Estimation" },
          { id: 8, title: "Risk Management" },
          { id: 9, title: "Quality Management" },
          { id: 10, title: "Current trends in Software Engineering" }
        ]
      },
      {
        id: "TOC",
        code: "CE503-N",
        title: "Theory of Computation",
        description: "To understand the fundamental principles of computer science including automata theory, formal languages, and computability.",
        thumbnail: "/images/Thumbnail/Sem-5/TOC.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Regular Languages" },
          { id: 3, title: "Finite Automata" },
          { id: 4, title: "Context-Free Languages" },
          { id: 5, title: "Pushdown Automata" },
          { id: 6, title: "Pumping Lemma" },
          { id: 7, title: "Context-Sensitive Languages" },
          { id: 8, title: "Turing Machines" }
        ]
      },
      {
        id: "CN",
        code: "CE505-N",
        title: "Computer Networks",
        description: "To understand the principles and architectures of computer networks, including protocols, architectures, and technologies that enable network communication.",
        thumbnail: "/images/Thumbnail/Sem-5/CN.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Overview of Networks and Data Communications" },
          { id: 2, title: "Physical layer" },
          { id: 3, title: "Data Link layer" },
          { id: 4, title: "Medium Access control sub layer" },
          { id: 5, title: "Network layer" },
          { id: 6, title: "Transport layer" },
          { id: 7, title: "Application layer" }
        ]
      },
      {
        id: "MAP",
        code: "CE502-N",
        title: "Microprocessor Architecture and Programming",
        description: "To understand the architecture and programming of microprocessors, including memory systems, I/O interfaces, and assembly language programming.",
        thumbnail: "/images/Thumbnail/Sem-5/MAP.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction of 8085/80x86/8088" },
          { id: 2, title: "Programming of 8085/8086" },
          { id: 3, title: "Interrupts and Interrupt processing" },
          { id: 4, title: "Memories" },
          { id: 5, title: "Interfacing peripherals and applications" },
          { id: 6, title: "Intel microprocessors" },
          { id: 7, title: "ARM Processor" }
        ]
      },
      {
        id: "SOA",
        code: "IT502-N",
        title: "Service Oriented Architecture",
        description: "This course provides a comprehensive overview of service orientation principles, covering fundamental concepts, analysis techniques, and underlying technologies. Participants delve into advanced topics such as service composition, orchestration, and choreography, while exploring various WS-* specification standards.",
        thumbnail: "/images/Thumbnail/Sem-5/SOA.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Introduction To distributed Computing and SOA" },
          { id: 2, title: "Web Services Fundamental and Standard" },
          { id: 3, title: "Principles of Service-Oriented Architecture" },
          { id: 4, title: "SOA and WS-* Extension" },
          { id: 5, title: "Principle of Service Oriented Computing" },
          { id: 6, title: "SOA Platforms" }
        ]
      }
    ]
  },
  // Add this to your courseData.js file - Semester 6 data

{
    id: 6,
    title: "Sem 6",
    subjects: [
      {
        id: "AI",
        code: "CT601-N",
        title: "Artificial Intelligence",
        description: "The search and problem solving methods are applicable throughout a large range of industrial, civil, medical, financial, robotic, and information systems.",
        thumbnail: "/images/Thumbnail/Sem-6/AI.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Intelligent Agents" },
          { id: 3, title: "Problem Spaces and Search" },
          { id: 4, title: "Adversarial search and Game Playing" },
          { id: 5, title: "Knowledge and Reasoning" },
          { id: 6, title: "Knowledge Engineering" },
          { id: 7, title: "Introduction to PROLOG" },
          { id: 8, title: "Uncertain knowledge and reasoning" }
        ]
      },
      {
        id: "PYP",
        code: "CE602-N",
        title: "Python Programming",
        description: "The course is designed to provide Basic knowledge of Python. Python programming is intended for software engineers, system analysts, program managers and user support personnel who wish to learn the Python programming language.",
        thumbnail: "/images/Thumbnail/Sem-6/pyp.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Introduction to Python Programming Language" },
          { id: 2, title: "Data Collections and Language Component" },
          { id: 3, title: "Object and Classes" },
          { id: 4, title: "Functions and Modules" },
          { id: 5, title: "I/O and Error Handling In Python" },
          { id: 6, title: "Simple Algorithms and Data structures" }
        ]
      },
      {
        id: "CNS",
        code: "CE603-N",
        title: "Cryptography and Network Security",
        description: "The course is intended to familiarize the student to the domain of information and network security. After introducing the basics of cryptography and security along with the essential mathematical background, the course aims to elaborate the understanding of various cryptographic primitives such as symmetric/asymmetric key encryption, hash, MAC, key management, digital signature etc. Together with the various attacks, the course also includes few modern security protocols.",
        thumbnail: "/images/Thumbnail/Sem-6/cns.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Symmetric Encryption" },
          { id: 3, title: "Mathematical Background" },
          { id: 4, title: "Asymmetric Encryption" },
          { id: 5, title: "Hash/MAC" },
          { id: 6, title: "Cryptanalysis" },
          { id: 7, title: "Security Protocols" },
          { id: 8, title: "Advanced Topics" }
        ]
      },
      {
        id: "ML",
        code: "CT604E-N",
        title: "Machine Learning",
        description: "Machine learning concerns with designing and developing of algorithms that allow machines, essentially computers, to evolve realistic or human like behavior based on the empirical data available. This course aims to discuss the building blocks of Computer vision and Natural Language Processing problems and provide an overview of the machine leaning and advance topics.",
        thumbnail: "/images/Thumbnail/Sem-6/ml.webp",
        totalUnits: 10,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Linear Regression" },
          { id: 3, title: "Classification" },
          { id: 4, title: "Resampling Methods and Evaluation" },
          { id: 5, title: "Neural Network Representation and Learning" },
          { id: 6, title: "Ensemble method" },
          { id: 7, title: "Clustering" },
          { id: 8, title: "Dimensionality Reduction" },
          { id: 9, title: "Graphical Model" },
          { id: 10, title: "Introduction Reinforcement Learning" },
          { id: 11, title: "Machine Learning Applications" }
        ]
      },
      {
        id: "AP",
        code: "CT604A-N",
        title: "Android Programming",
        description: "An Android technology is generally used in mobile system, where android is an open source technology. This technology is used for mobile application development. Using android technology, student can make own mobile applications and upload easily on mobile devices.",
        thumbnail: "/images/Thumbnail/Sem-6/ap.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Introduction to Android" },
          { id: 2, title: "Android Application Design and Resources" },
          { id: 3, title: "Exploring User Interfaces screen elements" },
          { id: 4, title: "Designing User Interfaces with Layouts" },
          { id: 5, title: "Drawing and working with Animation" },
          { id: 6, title: "Android Storage APIs" },
          { id: 7, title: "Sharing Data Between Applications with Content Providers" },
          { id: 8, title: "Using Android Network, Web and Multimedia APIs" },
          { id: 9, title: "Telephony API and Notifications" }
        ]
      },
      {
        id: "IOT",
        code: "CE605D-N",
        title: "Internet of Things",
        description: "The aim of this course is to make students aware about 'Internet of Things'-IOT, which is an emerging technology through which all the manual process is to be converted in to system operated process and also integrates with the business.",
        thumbnail: "/images/Thumbnail/Sem-6/iot.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction to IoT" },
          { id: 2, title: "IoT & M2M" },
          { id: 3, title: "Network & Communication aspects" },
          { id: 4, title: "Web Infrastructure for Managing IoT Resources" },
          { id: 5, title: "Challenges in IoT" },
          { id: 6, title: "Domain specific applications Of IoT" },
          { id: 7, title: "Developing IoTs" },
          { id: 8, title: "IoT Tools" }
        ]
      },
      {
        id: "SC",
        code: "CT605A-N",
        title: "Soft Computing",
        description: "Soft computing is an emerging approach to computing which parallel the remarkable ability of the human mind to reason and learn in an environment of uncertainty and imprecision. Soft computing is based on some biological inspired methodologies such as genetics, evolution, ant's behaviors, particles swarming, human nervous systems, etc.",
        thumbnail: "/images/Thumbnail/Sem-6/sc.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction of Soft computing and Hard computing" },
          { id: 2, title: "Neural Networks" },
          { id: 3, title: "Fuzzy Logic" },
          { id: 4, title: "Genetic Algorithm" },
          { id: 5, title: "Hybrid System" },
          { id: 6, title: "GA based Backpropagation Networks" },
          { id: 7, title: "Fuzzy based Backpropagation Network" }
        ]
      },
      {
        id: "IS",
        code: "IT602-N",
        title: "Information Security",
        description: "The course is intended to familiarize the student to the domain of information and network security. After introducing the basics of cryptography and security along with the essential mathematical background, the course aims to elaborate the understanding of various cryptographic primitives such as symmetric/asymmetric key encryption, hash, MAC, key management, digital signature etc.",
        thumbnail: "/images/Thumbnail/Sem-6/is.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Conventional Cryptography" },
          { id: 3, title: "Network Security" },
          { id: 4, title: "Security Protocols" },
          { id: 5, title: "Mathematical Background" },
          { id: 6, title: "Symmetric and Asymmetric Cryptographic Techniques" },
          { id: 7, title: "Authentication Techniques" }
        ]
      },
      {
        id: "DC",
        code: "IT603-N",
        title: "Data Compression",
        description: "To introduce students to basic applications, concepts, and techniques of Data Compression. To develop skills for using recent data compression software to solve practical problems in a variety of disciplines. To gain experience doing independent study and research.",
        thumbnail: "/images/Thumbnail/Sem-6/dc.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Compression Techniques" },
          { id: 2, title: "Mathematical Preliminaries for Lossless Compression Models" },
          { id: 3, title: "Huffman Coding" },
          { id: 4, title: "Arithmetic Coding" },
          { id: 5, title: "Dictionary Techniques" },
          { id: 6, title: "Context-Based Compression" },
          { id: 7, title: "Lossless Image Compression" },
          { id: 8, title: "Quantization" }
        ]
      },
      {
        id: "ECOM",
        code: "IT605G-N",
        title: "E-Commerce and E-Business",
        description: "Define E-Marketplaces and list their components. List the Major types of Electronic Markets and describe their features. Describe the types Of Intermediaries in EC and their roles. Describe electronic Catalogs, Shopping carts, and search Engines. Describe the various types of Auctions and list their characteristics.",
        thumbnail: "/images/Thumbnail/Sem-6/ecom.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction to E-Business and E-Commerce" },
          { id: 2, title: "E-Marketplaces: Structures, Mechanisms, Economics, & impacts" },
          { id: 3, title: "E-Business applications, E-Procurement and E-Payment Systems" },
          { id: 4, title: "The Impact of E-Business on Different Fields and Industries" },
          { id: 5, title: "E-Learning and Online Education" },
          { id: 6, title: "E-Government" },
          { id: 7, title: "Lunching Online Business and E-Commerce Projects" },
          { id: 8, title: "M-Commerce" }
        ]
      }
    ]
  },
  // Add this to your courseData.js file - Semester 7 data

{
    id: 7,
    title: "Sem 7",
    subjects: [
      {
        id: "CD",
        code: "CE701-N",
        title: "Compiler Design",
        description: "Compiler Design focuses on the theory and practice of building compilers, translating source code into machine code efficiently, and ensuring error-free execution of programs.",
        thumbnail: "/images/sample.webp",
        totalUnits: 10,
        units: [
          { id: 1, title: "Introduction to Compiling" },
          { id: 2, title: "Lexical Analyzer" },
          { id: 3, title: "Parsing Theory" },
          { id: 4, title: "Error Recovery" },
          { id: 5, title: "Type Checking" },
          { id: 6, title: "Run Time Environments" },
          { id: 7, title: "Intermediate Code Generation" },
          { id: 8, title: "Code Generation" },
          { id: 9, title: "Code Optimization" },
          { id: 10, title: "Introduction to Language Processors and System Software" }
        ]
      },
      {
        id: "DS",
        code: "CT704A-N",
        title: "Distributed Systems",
        description: "Distributed systems involve multiple interconnected computers that communicate and coordinate their actions by sharing data and resources. These systems provide improved performance, scalability, and reliability.",
        thumbnail: "/images/sample.webp",
        totalUnits: 10,
        units: [
          { id: 1, title: "Concepts of Distributed Systems" },
          { id: 2, title: "Basic Network Communications" },
          { id: 3, title: "Inter Process Communication" },
          { id: 4, title: "Remote Communication" },
          { id: 5, title: "Distributed System Synchronization" },
          { id: 6, title: "Distributed System Management" },
          { id: 7, title: "Distributed Shared Memory" },
          { id: 8, title: "Distributed File System" },
          { id: 9, title: "Security" },
          { id: 10, title: "Emerging Trends in Distributed Systems" }
        ]
      },
      {
        id: "CS",
        code: "CT702-N",
        title: "Cyber Security",
        description: "Cybersecurity involves protecting computer systems and networks from information disclosure, theft, or damage. It is crucial in today's digital world to safeguard sensitive information and ensure privacy.",
        thumbnail: "/images/sample.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Introduction to Cyber Crime" },
          { id: 2, title: "Information Security Concepts" },
          { id: 3, title: "Phishing and Identity Theft" },
          { id: 4, title: "Security Threats and Vulnerabilities" },
          { id: 5, title: "Privacy Control Concept" },
          { id: 6, title: "Access Control and Intrusion Detection" },
          { id: 7, title: "Cybercrimes and Cyber Security: The Legal Perspectives" },
          { id: 8, title: "Legal, Ethical and Professional Issues in Information Security" },
          { id: 9, title: "Hands on Open Source" }
        ]
      },
      {
        id: "BT",
        code: "CT703D‐N",
        title: "Blockchain Technology",
        description: "Blockchain technology offers a decentralized, transparent, and secure way to record transactions. It underpins cryptocurrencies like Bitcoin and has potential use cases across various industries.",
        thumbnail: "/images/sample.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Background Theories" },
          { id: 2, title: "Bitcoin" },
          { id: 3, title: "Introduction to Blockchain" },
          { id: 4, title: "Consensus" },
          { id: 5, title: "Mining" },
          { id: 6, title: "Permissioned Blockchain" },
          { id: 7, title: "Blockchain Use Cases" },
          { id: 8, title: "Smart Contract" },
          { id: 9, title: "Research in Blockchain" }
        ]
      },
      {
        id: "NLP",
        code: "CT703C-N",
        title: "Natural Language Processing",
        description: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language. It involves the analysis and generation of human language to enable effective communication with machines.",
        thumbnail: "/images/sample.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction to NLP" },
          { id: 2, title: "N-Gram Language Model" },
          { id: 3, title: "Text Representation" },
          { id: 4, title: "Text Classification and Clustering" },
          { id: 5, title: "Morphology and Part of Speech Tagging" },
          { id: 6, title: "Text Parsing" },
          { id: 7, title: "Semantic Analysis" },
          { id: 8, title: "NLP Applications" }
        ]
      },
      {
        id: "IP",
        code: "CT704C‐N",
        title: "Image Processing",
        description: "Image Processing involves techniques to enhance, restore, and segment images, playing a critical role in various applications such as medical imaging and computer vision.",
        thumbnail: "/images/sample.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Digital Image Fundamentals" },
          { id: 2, title: "Image Enhancements" },
          { id: 3, title: "Image Restoration" },
          { id: 4, title: "Colour Image Processing" },
          { id: 5, title: "Image Compression" },
          { id: 6, title: "Morphological Image Processing" },
          { id: 7, title: "Image Segmentation" }
        ]
      },
      {
        id: "WDM",
        code: "IT701‐N",
        title: "Web Data Management",
        description: "Web Data Management focuses on the techniques and technologies used to manage, query, and integrate web-based data. It covers essential topics like XML, RDF, and data integration for building web-scale applications.",
        thumbnail: "/images/sample.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Data Model" },
          { id: 2, title: "XPath and XQuery" },
          { id: 3, title: "Typing" },
          { id: 4, title: "XML Query Evaluation" },
          { id: 5, title: "Ontologies, RDF, and OWL" },
          { id: 6, title: "Querying Data through Ontologies" },
          { id: 7, title: "Data Integration" },
          { id: 8, title: "Building Web Scale Applications" }
        ]
      },
      {
        id: "CC",
        code: "IT704D‐N",
        title: "Cloud Computing",
        description: "Cloud Computing revolutionizes the way data is stored and accessed, offering scalable and flexible resources over the internet. It enables businesses to migrate their operations to the cloud for better efficiency and cost management.",
        thumbnail: "/images/sample.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Introduction to Cloud Computing" },
          { id: 2, title: "Migrating into a Cloud" },
          { id: 3, title: "Enriching the 'Integration as a Service' Paradigm for the Cloud Era" },
          { id: 4, title: "The Enterprise Cloud Computing Paradigm" },
          { id: 5, title: "Virtual Machines Provisioning and Migration Services" },
          { id: 6, title: "Virtual Machines for Cloud Infrastructures" },
          { id: 7, title: "Secure Distributed Data Storage in Cloud Computing" },
          { id: 8, title: "Workflow Engine for Clouds" },
          { id: 9, title: "Case Studies: Aneka, CometCloud, T‐Systems, AWS" }
        ]
      }
    ]
  },
  // Add this to your courseData.js file - Semester 8 data

{
    id: 8,
    title: "Sem 8",
    subjects: [
      {
        id: "NGN",
        code: "CE801-N",
        title: "Next Generation Networks",
        description: "Next Generation Networks (NGNs) focus on a packet-based network architecture that supports a range of services, including voice, data, and multimedia. NGNs are designed to handle both fixed and mobile networks efficiently.",
        thumbnail: "/images/sample.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Mobile Telecommunication System" },
          { id: 3, title: "Mobile Network Layer" },
          { id: 4, title: "Mobile Transport, Application Layer and Applications" },
          { id: 5, title: "SDN Background and Motivation" },
          { id: 6, title: "SDN Data Plane and OpenFlow" },
          { id: 7, title: "SDN Control Plane" },
          { id: 8, title: "SDN Application Plane" }
        ]
      },
      {
        id: "BDA",
        code: "CE802-N",
        title: "Big Data Analytics",
        description: "Big Data Analytics involves examining large and varied data sets to uncover hidden patterns, correlations, and insights. It is crucial for making informed decisions and driving innovation in today's data-driven world.",
        thumbnail: "/images/sample.webp",
        totalUnits: 9,
        units: [
          { id: 1, title: "Introduction to Big Data" },
          { id: 2, title: "Mining Data Streams" },
          { id: 3, title: "Big Data Analytics and Big Data Analytics Techniques" },
          { id: 4, title: "Link Analysis" },
          { id: 5, title: "Frequent Item sets" },
          { id: 6, title: "Mining Social Network Graphs" },
          { id: 7, title: "NoSQL" },
          { id: 8, title: "Map Reduce and New Software Stack" },
          { id: 9, title: "Big Data Analytics Applications/Use Cases and Visualization of Big Data" }
        ]
      },
      {
        id: "WDM",
        code: "IT803A-N",
        title: "Web Data Management",
        description: "Web Data Management focuses on techniques and technologies for managing web-based data, including XML, RDF, and data integration to build web applications.",
        thumbnail: "/images/sample.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Data Model" },
          { id: 2, title: "XPath and XQuery" },
          { id: 3, title: "Typing" },
          { id: 4, title: "XML Query Evaluation" },
          { id: 5, title: "Ontologies, RDF, and OWL" },
          { id: 6, title: "Querying Data through Ontologies" },
          { id: 7, title: "Data Integration" },
          { id: 8, title: "Building Web Scale Applications" }
        ]
      },
      {
        id: "NNDL",
        code: "CT803B-N",
        title: "Neural Network and Deep Learning",
        description: "This course covers fundamentals of neural networks and advanced topics like recurrent neural networks, long short-term memory cells, and convolutional neural networks. Students will learn machine learning terminology, deep neural network functionalities, and apply these techniques to practical problems using Python programming.",
        thumbnail: "/images/sample.webp",
        totalUnits: 6,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Feed Forward and Deep Neural Network" },
          { id: 3, title: "Convolutional Neural Networks" },
          { id: 4, title: "Recurrent Neural Networks" },
          { id: 5, title: "Deep Neural Networks" },
          { id: 6, title: "Generative Models and Recent Trends" }
        ]
      },
      {
        id: "DPC",
        code: "IT801-N",
        title: "Distributed and Parallel Computing",
        description: "This course covers advanced concepts of Parallel and Distributed Computing, focusing on implementation and assessment through parallel programming languages like MPI, Pthread, and OpenMP. Students will learn to design parallel and distributed algorithms and understand system architectures.",
        thumbnail: "/images/sample.webp",
        totalUnits: 8,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "Message Passing Computing" },
          { id: 3, title: "Partitioning and Divide-and-Conquer Strategies" },
          { id: 4, title: "Pipelined Computations" },
          { id: 5, title: "Synchronous Computations" },
          { id: 6, title: "Load Balancing and Termination Detection" },
          { id: 7, title: "Programming with Shared Memory" },
          { id: 8, title: "Distributed Shared Memory Systems and Programming" }
        ]
      },
      {
        id: "ARVR",
        code: "IT803D-N",
        title: "Augmented and Virtual Reality",
        description: "This course provides knowledge of augmented and virtual reality, covering historical perspectives, sensation and perception fundamentals, technical aspects of AR/VR systems, and their design evaluation. Students will implement AR/VR technologies for practical understanding.",
        thumbnail: "/images/sample.webp",
        totalUnits: 7,
        units: [
          { id: 1, title: "Introduction" },
          { id: 2, title: "VR Systems" },
          { id: 3, title: "Stereoscopic Vision & Haptic Rendering" },
          { id: 4, title: "VR Software Development" },
          { id: 5, title: "3D Interaction Techniques" },
          { id: 6, title: "AR Software Development" },
          { id: 7, title: "Applications of AR and VR" }
        ]
      },
      {
        id: "IOT",
        code: "IT802-N",
        title: "Internet of Things",
        description: "This course introduces the Internet of Things (IoT), an emerging technology that automates manual processes and integrates them with business systems. Students will learn IoT concepts and develop practical IoT applications.",
        thumbnail: "/images/sample.webp",
        totalUnits: 10,
        units: [
          { id: 1, title: "Introduction to IoT" },
          { id: 2, title: "IoT & M2M" },
          { id: 3, title: "Network & Communication Aspects" },
          { id: 4, title: "Web Infrastructure for Managing IoT Resources" },
          { id: 5, title: "Challenges in IoT" },
          { id: 6, title: "Domain Specific Applications of IoT" },
          { id: 7, title: "Developing IoTs" },
          { id: 8, title: "IoT Tools" },
          { id: 9, title: "IoT Strategy Execution" },
          { id: 10, title: "IoT Solution Delivery" }
        ]
      },
    ]
  }

]
// Set the cache and return the data
semestersCache = fallbackData;
return fallbackData;
} catch (error) {
console.error("Error in getAllSemesters:", error);
return []; // Return empty array to avoid null/undefined issues
}
};
// Modify these functions in coursedata.js

// Get a specific semester by ID
export const getSemester = (semesterId) => {
  try {
    // Just use the local data directly
    const allSemesters = getAllSemesters();
    const semester = allSemesters.find(sem => 
      sem.id == semesterId || // Use loose equality to handle string/number differences
      sem.id.toString() === semesterId.toString()
    );
    
    return semester || null;
  } catch (error) {
    console.error(`Error in getSemester ${semesterId}:`, error);
    return null;
  }
};

// Get a specific subject by semester ID and subject ID
export const getSubject = (semesterId, subjectId) => {
  try {
    const semester = getSemester(semesterId);
    if (!semester || !semester.subjects) return null;
    
    const subject = semester.subjects.find(sub => 
      sub.id === subjectId || 
      sub.id.toLowerCase() === subjectId.toLowerCase()
    );
    
    return subject || null;
  } catch (error) {
    console.error(`Error in getSubject ${semesterId}/${subjectId}:`, error);
    return null;
  }
};

// Get a specific unit by semester ID, subject ID, and unit ID
export const getUnit = async (semesterId, subjectId, unitId) => {
  try {
    const data = await fetchWithAuth(ENDPOINTS.GET_UNIT(semesterId, subjectId, unitId));
    return data;
  } catch (error) {
    console.error(`Error fetching unit ${unitId} in subject ${subjectId}, semester ${semesterId}:`, error);
    
    // Fallback: Try to find the unit in the cache
    const subject = await getSubject(semesterId, subjectId);
    return subject?.units?.find(unit => unit.id === parseInt(unitId));
  }
};

// Search for courses by keywords
export const searchCourses = async (keyword) => {
  const semesters = await getAllSemesters();
  const results = [];
  
  semesters.forEach(semester => {
    semester.subjects.forEach(subject => {
      if (
        subject.title.toLowerCase().includes(keyword.toLowerCase()) ||
        subject.description.toLowerCase().includes(keyword.toLowerCase()) ||
        subject.code.toLowerCase().includes(keyword.toLowerCase())
      ) {
        results.push({
          ...subject,
          semesterId: semester.id,
          semesterTitle: semester.title
        });
      }
    });
  });
  
  return results;
};
