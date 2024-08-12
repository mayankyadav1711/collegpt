import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
const Admin_Pdf_Form = () => {
    // Sample data
    const semesters = [
        "Sem 1",
        "Sem 2",
        "Sem 3",
        "Sem 4",
        "Sem 5",
        "Sem 6",
        "Sem 7",
    ];
    const subjectsBySemester = {
        "Sem 1": [
            "Fundamental Of Programming",
            "Engineering Mathematics – 1",
            "Elements Of Civil Engineering",
            "Engineering Graphics",
            "Engineering Physics",
            "Enviromental Science",
        ],
        "Sem 2": [
            "Object Oriented Programming Using 'C++'",
            "Engineering Mathematics – 2",
            "Basic Electrical and Electronics Engineering",
            "Fundamental Of Mechanical Engineering",
            "Business communication and presentation skills",
            "Workshop [Only Labs]",
            "Introduction To Information & Communication Technology",
        ],
        "Sem 3": [
            "Data Structures & Algorithms",
            "Discrete Mathematics - 3",
            "Database Management Systems",
            "Digital Electronics",
            "IT Workshop",
        ],
        "Sem 4": [
            "Object Oriented Programming Using Java",
            "Probability, Statistics and Numerical Methods",
            "Operating Systems",
            "Computer Organization & Architecture",
            "Principles of Management",
        ],
        "Sem 5": [
            "Advanced Java Programming",
            "Python",
            "Design & Analysis of Algorithms/Fundamentals of Algorithms",
            "Software Engineering",
            "Theory of Computation/Formal Language and Automata Theory",
            "Computer Networks/Data Communication and Networking",
            "Microprocessor Architecture and Programming",
            "Service Oriented Architecture",
        ],

        "Sem 6": [
            "Artificial Intelligence",
            "Python Programming",
            "Cryptography and Network Security",
            "Machine Learning",
            "Android Programming",
            "Internet of Things",
            "Soft Computing",
            "Information Security",
            "Data Compression",
            "E-Commerce and E-Business",
        ],

        "Sem 7": [
            "Compiler Design",
            "Distributed Systems",
            "Cyber Security",
            "Blockchain Technology",
            "Natural Language Processing",
            "Image Processing",
            "Web Data Management",
            "Cloud  Computing",
        ],
        "Sem 8": ["Next Generation Networks", "Big Data Analytics"],
    };

    const unitsBySubjects = {
        //Semester 1
        "Fundamental Of Programming": [
            "Introduction to computer",
            "Introduction to Programming",
            "Fundamentals of ‘C’",
            "Control Structures in ‘C’",
            "Array & String",
            "Functions",
            "Structure and Union, Pointers, File Management",
        ],
        "Engineering Mathematics – 1": [
            "Differential Calculus",
            "Partial differentiation and its applications",
            "Curve Tracing",
            "Beta & Gamma function",
            "Integral Calculus",
            "Multiple Integrals and its applications",
            "Infinite Series",
        ],
        "Elements Of Civil Engineering": [
            "Introduction and Scope of Civil Engineering",
            "Surveying",
            "Linear measurements",
            "Angular Measurements",
            "Elevation measurements",
            "Modern Tools of Surveying and Mapping",
            "Construction Materials",
            "Elements of Building Construction",
            "Water Resources Development",
            "Transportation Engineering",
        ],
        "Engineering Graphics": [
            "Introduction",
            "Scales",
            "Engineering Curves",
            "Loci of Points",
            "Projections of Points & Lines",
            "Projections of Planes",
            "Projections of Solids",
            "Section of Solids",
            "Development of Lateral Surfaces",
            "Orthographic Projections",
            "Isometric Projections and Isometric View or Drawing",
            "Machine Drawing",
        ],
        "Engineering Physics": [
            "Ultrasonics & Architectural Acoustic",
            "Elasticity",
            "Laser",
            "Fibre Optics",
            "Optoelectronic devices",
            "Artificial Radioactivity",
            "Crystal Structure And X-rays Diffraction",
            "Instrumentation",
            "Band Theory Of Solids",
            "Nanomaterials And NDT",
        ],
        "Environmental Science": [
            "Introduction to environment, Ecology and Ecosystem",
            "Ecology & Ecosystem",
            "Population & Natural Resources",
            "Environmental Pollution",
            "Social Issues",
        ],
        //Semester 2
        "Object Oriented Programming Using 'C++'": [
            "Elaborated understanding of Essentials C Programming",
            "Fundamental Concepts of OOP with C++",
            "C++ Programming Syntactical Basics",
            "C++ Functions",
            "Objects and Class",
            "Operator Overloading",
            "Inheritance",
            "Polymorphism & Virtual Functions",
            "Templates and Exception Handling",
            "Introduction to Streams and Files",
        ],
        "Engineering Mathematics – 2": [
            "Matrix Theory and Application of Matrices",
            "Eigen value and Eigenvector and Applications",
            "Vectors in R^n",
            "Vector Space",
            "Linear Transformation",
            "Vector differential Calculus",
            "Vector Integral Calculus",
        ],
        "Basic Electrical and Electronics Engineering": [
            "An Introduction to D.C. Circuits",
            "Work, Power and energy",
            "Electrostatics & Capacitance",
            "Electromagnetic",
            "AC Fundamentals",
            "Analysis of A.C. Circuit",
            "Polyphase Circuits",
            "Basics of Electronics",
        ],
        "Fundamental Of Mechanical Engineering": [
            "Introduction",
            "Properties of Gases",
            "Heat Engines",
            "Properties of Steam",
            "Steam and Steam Generator",
            "Refrigeration and Air conditioning",
            "I.C. Engine",
            "Air Compressor",
            "Speed Control",
            "Fuels and Combustion",
            "Power Transmission Methods and Devices",
            "Pump",
            "Engineering Materials",
            "Mechanical Working of Metals and Press Operations",
            "Heat Transfer & Turbines",
        ],
        "Business communication and presentation skills": [
            "Soon",
            "Soon",
            "Soon",
        ],
        Workshop: ["Soon", "Soon", "Soon"],
        "Introduction To Information & Communication Technology": ["All Units"],
        //Semester 3
        "Database Management Systems": [
            "Database system architecture",
            "Data models",
            "Relational query languages",
            "Relational database design",
            "Query processing and optimization",
            "Storage strategies",
            "Transaction processing",
            "Database Security",
            "Advanced topics",
        ],
        "Data Structures & Algorithms": [
            "Introduction",
            "Linear Data Structures",
            "Nonlinear Data Structures",
            "Sorting and searching",
            "Hashing",
            "File Structures",
        ],
        "Discrete Mathematics - 3": [
            "Set, Relation & Function",
            "Lattices",
            "Propositional Logic",
            "Algebraic Structures and Morphism",
            "Graphs and Trees",
        ],
        "Digital Electronics": [
            "Number Systems and Codes",
            "Boolean Algebra and Logic Gates",
            "Combinational Logic Circuit",
            "Flip Flops and Sequential Logic and Circuits",
            "Introduction to State Machines",
            "Programmable Logic Devices",
            "D/A and A/D Converters",
        ],
        "IT Workshop": [
            "Introduction to WWW",
            "Introduction to HTML",
            "CSS",
            "JavaScript",
            "XML and Ajax",
            "PHP",
            "SciLab",
        ],
        //Semester 4
        "Object Oriented Programming Using Java": [
            "Introduction to Java",
            "Objects and Classes",
            "Inheritance and Polymorphism",
            "Collection Interface and classes",
            "Exception Handling in Java",
            "Multithreading in java",
            "I/O programming",
            "Event and GUI programming",
        ],
        "Probability, Statistics and Numerical Methods": [
            "Probability Axioms",
            "Discrete Random Variables",
            "Continuous Random Variables",
            "Correlation and Regression",
            "Interpolation",
            "Numerical Integration",
            "Solution of non-linear and Linear equation",
        ],
        "Operating Systems": [
            "Introduction",
            "Process",
            "Inter-process Communication",
            "Deadlock",
            "Memory Management",
            "I/O Hardware",
            "Security",
        ],
        "Computer Organization & Architecture": [
            "Overview of Register Transfer And Micro-operations",
            "Basic Computer Organization And Design",
            "Programming the Basic Computer",
            "Central Processing Unit",
            "Pipeline Processing",
            "Memory Organization",
        ],
        "Principles of Management": [
            "Introduction to Management and Organizations",
            "Schools of Management thoughts",
            "Organizational Structure and Design",
            "Organizational Culture and Environment",
            "Understanding Basics of Financial Management and Accounting",
        ],
        //Semester 5
        "Advanced Java Programming": [
            "Swing",
            "JDBC",
            "Java Networking and J2EE",
            "Servlets, Event Listeners and Filters",
            "Java Server Pages and JSTL",
            "Hibernet 4.0",
            "Spring MVC",
        ],
        Python: [
            "Introduction to Python Programming Language",
            "Data Collections and Language Component ",
            "Object and Classes",
            "Functions and Modules ",
            "I/O and Error Handling In Python",
            "Simple Algorithms and Data structures",
        ],
        "Design & Analysis of Algorithms/Fundamentals of Algorithms": [
            "Basics of Algorithms & Mathematics",
            "Analysis of Algorithms",
            "Divide and conquer algorithms",
            "Greedy algorithms",
            "Dynamic programming",
            "Graph Algorithms",
            "Backtracking and Branch and Bound",
            "String Matching Algorithms",
            "Introduction to Complexity Theory",
        ],
        "Software Engineering": [
            "Software and Software Engineering",
            "Software Process Model",
            "Software Requirement Analysis and Specification",
            "Software Design",
            "Coding",
            "Software Testing Strategies",
            "Estimation",
            "Risk Management",
            "Quality Management",
            "Current trends in Software Engineering",
        ],

        "Theory of Computation/Formal Language and Automata Theory": [
            "Introduction",
            "Regular Languages",
            "Finite Automata",
            "Context-Free Languages",
            "Pushdown Automata",
            "Pumping Lemma",
            "Context-Sensitive Languages",
            "Turing Machines",
        ],
        "Computer Networks/Data Communication and Networking": [
            "Overview of Networks and Data Communications",
            "Physical layer",
            "Data Link layer",
            "Medium Access control sub layer",
            "Network layer",
            "Transport layer",
            "Application layer",
        ],

        "Microprocessor Architecture and Programming": [
            "Introduction of 8085/80x86/8088",
            "Programming of 8085/8086",
            "Interrupts and Interrupt processing",
            "Memories",
            "Interfacing peripherals and applications",
            "Intel microprocessors",
            "ARM Processor",
        ],
        "Service Oriented Architecture": [
            "Introduction To distributed Computing and SOA",
            "Web Services Fundamental and Standard",
            "Principles of Service-Oriented Architecture",
            "SOA and WS-* Extension",
            "Principle of Service Oriented Computing",
            "SOA Platforms",
        ],
        //Semester 6
        "Artificial Intelligence": [
            "Introduction",
            "Intelligent Agents",
            "Problem Spaces and Search",
            "Adversarial search and Game Playing",
            "Knowledge and Reasoning",
            "Knowledge Engineering",
            "Introduction to PROLOG",
            "Uncertain knowledge and reasoning",
        ],
        "Python Programming": [
            "Introduction to Python Programming Language",
            "Data Collections and Language Component ",
            "Object and Classes",
            "Functions and Modules ",
            "I/O and Error Handling In Python",
            "Simple Algorithms and Data structures",
        ],
        "Cryptography and Network Security": [
            "Introduction",
            "Symmetric Encryption",
            "Mathematical Background",
            "Asymmetric Encryption",
            "Hash/MAC",
            "Cryptanalysis",
            "Security Protocols",
            "Advanced Topics",
        ],
        "Machine Learning": [
            "Introduction",
            "Linear Regression",
            "Classification",
            "Resampling Methods and Evaluation",
            "Neural Network Representation and Learning",
            "Ensemble method",
            "Clustering",
            "Dimensionality Reduction",
            "Graphical Model",
            "Introduction Reinforcement Learning",
            "Machine Learning Applications",
        ],
        "Android Programming": [
            "Introduction to Android",
            "Android Application Design and Resources",
            "Exploring User Interfaces screen elements",
            "Designing User Interfaces with Layouts",
            "Drawing and working with Animation",
            "Android Storage APIs",
            "Sharing Data Between Applications with Content Providers",
            "Using Android Network, Web and Multimedia APIs",
            "Telephony API and Notifications",
        ],
        "Internet of Things": [
            "Introduction to IoT",
            "IoT & M2M",
            "Network & Communication aspects",
            "Web Infrastructure for Managing IoT Resources",
            "Challenges in IoT",
            "Domain specific applications of IoT",
            "Developing IoTs",
            "IoT Tools",
        ],
        "Soft Computing": [
            "Introduction of Soft computing and Hard computing",
            "Neural Networks",
            "Fuzzy Logic",
            "Genetic Algorithm",
            "Hybrid System",
            "GA based Backpropagation Networks",
            "Fuzzy based Backpropagation Network",
        ],
        "Information Security": [
            "Introduction",
            "Conventional Cryptography",
            "Network Security",
            "Security Protocols",
            "Mathematical Background",
            "Symmetric and Asymmetric Cryptographic Techniques",
            "Authentication Techniques",
        ],
        "Data Compression": [
            "Compression Techniques",
            "Mathematical Preliminaries for Lossless Compression Models",
            "Huffman Coding",
            "Arithmetic Coding",
            "Dictionary Techniques",
            "Context-Based Compression",
            "Lossless Image Compression",
            "Quantization",
        ],
        "E-Commerce and E-Business": [
            "Introduction to E-Business and E-Commerce",
            "E-Marketplaces: Structures, Mechanisms, Economics, & impacts",
            "E-Business applications, E-Procurement and E-Payment Systems",
            "The Impact of E-Business on Different Fields and Industries",
            "E-Learning and Online Education",
            "E-Government",
            "Launching Online Business and E-Commerce Projects",
            "M-Commerce",
        ],
        //Semester 7
        "Compiler Design": [
            "Introduction to Compiling",
            "Lexical Analyzer",
            "Parsing Theory",
            "Error Recovery",
            "Type Checking",
            "Run Time Environments",
            "Intermediate Code Generation",
            "Code Generation",
            "Code Optimization",
            "Introduction to Language processors and system software",
        ],
        "Distributed Systems": [
            "Concepts of Distributed Systems",
            "Basic Network Communications",
            "Inter process Communication",
            "Remote Communication",
            "Distributed System Synchronization",
            "Distributed System Management",
            "Distributed Shared Memory",
            "Distributed File System",
            "Security",
            "Emerging Trends in Distributed System",
        ],
        "Cyber Security": [
            "Introduction to Cyber Crime",
            "Information Security Concepts",
            "Phishing and Identity Theft",
            "Security Threats and Vulnerabilities",
            "Privacy control concept",
            "Access Control and Intrusion Detection",
            "Cybercrimes and Cyber Security: The Legal Perspectives",
            "Legal, Ethical and Professional Issues in Information Security",
            "Hands on Open source",
        ],
        "Blockchain Technology": [
            "Background Theories",
            "Bitcoin",
            "Introduction to Blockchain",
            "Consensus",
            "Mining",
            "Permissioned Blockchain",
            "Blockchain Use cases",
            "Smart Contract",
            "Research in Blockchain",
        ],
        "Natural Language Processing": [
            "Introduction to NLP",
            "N‐Gram Language Model",
            "Text Representation",
            "Text classification and clustering",
            "MORPHOLOGY AND PART OF SPEECH TAGGING",
            "Text Parsing",
            "Semantic Analysis",
            "NLP Applications",
        ],
        "Image Processing": [
            "Digital image fundamentals",
            "Image Enhancements",
            "Image Restoration",
            "Colour Image processing",
            "Image Compression",
            "Morphological Image Processing",
            "Image Segmentation",
        ],
        "Web Data Management": [
            "Data Model",
            "XPath and XQuery",
            "Typing",
            "XML Query Evaluation",
            "Ontologies, RDF, and OWL",
            "Querying Data through Ontologies",
            "Data Integration",
            "Building Web scale applications",
        ],
        "Cloud Computing": [
            "Introduction to Cloud Computing",
            "Migrating into a Cloud",
            "Enriching the ‘Integration as a Service’ Paradigm for the Cloud Era",
            "The Enterprise Cloud Computing Paradigm",
            "Virtual Machines Provisioning and Migration Services",
            "Virtual Machines for Cloud Infrastructures",
            "Secure Distributed Data Storage in Cloud Computing",
            "Workflow Engine for Clouds",
            "Case Studies: Aneka, CometCloud, T‐Systems, AWS",
        ],

        //Semester 8
        "Next Generation Networks": [
            "Introduction",
            "Mobile Telecommunication System",
            "Mobile Network Layer",
            "Mobile Transport, Application Layer and Applications",
            "SDN Background and Motivation",
            "SDN Data plane and OpenFlow",
            "SDN Control Plane",
            "SDN Application Plane",
        ],
        "Big Data Analytics": [
            "Introduction to Big Data",
            "Mining Data Streams",
            "Big Data Analytics and Big Data Analytics Techniques",
            "Link Analysis",
            "Frequent Item sets",
            "Mining Social Network Graphs",
            "NoSQL",
            "Map Reduce and New Software Stack",
            "Big Data Analytics Applications/Use Cases and Visualization of Big Data",
        ],
    };

    const [selectedSemester, setSelectedSemester] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedUnit, setSelectedUnit] = useState("");

    const handleSemesterChange = (e) => {
        const selectedSemester = e.target.value;
        setSelectedSemester(selectedSemester);
        setSelectedSubject("");
        setSelectedUnit("");
    };

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
        setSelectedUnit("");
    };

    const handleUnitChange = (e) => {
        setSelectedUnit(e.target.value);
    };
    // State to hold the link input value
    const [linkInput, setLinkInput] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [extra, setExtra] = useState("");
    const [youtube, setYoutube] = useState("");

    // Function to handle changes in the link input field
    const handleLinkInputChange = (event) => {
        setLinkInput(event.target.value);
    };
    const authorInput = (event) => {
        setAuthor(event.target.value);
    };
    const descriptionInput = (event) => {
        setDescription(event.target.value);
    };
    const extraInput = (event) => {
        setExtra(event.target.value);
    };
    const youtubeInput = (event) => {
        setYoutube(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new FormData object to collect the form data
        const formData = new FormData(event.target);

        // Extract the data from the FormData object
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Check if the required fields are present in the form data
        if (
            !formDataObject.code ||
            !formDataObject.sem ||
            !formDataObject.sub ||
            !formDataObject.link ||
            !formDataObject.author ||
            !formDataObject.description ||
            !formDataObject.extra
        ) {
            console.error("All fields are required.");
            toast.error("All fields are required.");
            return;
        }

        // Make a POST request to the backend endpoint
        fetch("https://api-collegpt.vercel.app/pdf-forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Optional: Handle the response from the server
                // Clear the form after successful submission
                event.target.reset();
                setSelectedSemester("");
                setSelectedSubject("");
                setSelectedUnit("");
                setLinkInput("");
                setAuthor("");
                setDescription("");
                setExtra("");
                setYoutube("");
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });
    };

    return (
        <>
            {/* Your existing form code */}

            <section className="form-container">
                <form onSubmit={handleSubmit}>
                    <h3>Admin Pdf Form</h3>

                    <p>
                        Code <span>*</span>{" "}
                    </p>
                    <input
                        type="text"
                        name="code"
                        placeholder="Enter Code"
                        required
                        className="box"
                    />
                    <p>
                        Semester <span>*</span>
                    </p>
                    <select
                        name="sem"
                        placeholder="Select your semester"
                        required
                        maxLength="20"
                        className="box"
                        onChange={handleSemesterChange}
                        value={selectedSemester}>
                        <option value="">Select Semester</option>
                        {semesters.map((semester) => (
                            <option key={semester} value={semester}>
                                {semester}
                            </option>
                        ))}
                    </select>
                    {/* Always show the Subject field, but only show options if a semester is selected */}
                    <div>
                        <p>
                            Subject <span>*</span>
                        </p>
                        <select
                            name="sub"
                            placeholder="Select your subject"
                            required
                            maxLength="20"
                            className="box"
                            onChange={handleSubjectChange}
                            value={selectedSubject}>
                            <option value="">Select Subject</option>
                            {selectedSemester &&
                                subjectsBySemester[selectedSemester].map(
                                    (subject) => (
                                        <option key={subject} value={subject}>
                                            {subject}
                                        </option>
                                    )
                                )}
                        </select>
                    </div>
                    {/* Always show the Unit field, but only show options if a subject is selected */}
                    <div>
                        <p>
                            Unit <span>*</span>
                        </p>
                        <select
                            name="unit"
                            placeholder="Select your unit"
                            maxLength="20"
                            className="box"
                            onChange={handleUnitChange}
                            value={selectedUnit}>
                            <option value="">Select Unit</option>
                            {selectedSubject &&
                                unitsBySubjects[selectedSubject].map((unit) => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                        </select>
                    </div>
                    {/* Your other form fields */}
                    {/* ... */}
                    <p>
                        Link <span>*</span>{" "}
                    </p>
                    <input
                        type="text"
                        name="link"
                        placeholder="Enter link"
                        className="box"
                        value={linkInput}
                        onChange={handleLinkInputChange}
                        required
                    />
                    <p>
                        Author <span>*</span>{" "}
                    </p>
                    <input
                        type="text"
                        name="author"
                        placeholder="Enter author name"
                        className="box"
                        value={author}
                        onChange={authorInput}
                        required
                    />
                    <p>
                        Description <span>*</span>{" "}
                    </p>
                    <input
                        type="textarea"
                        name="description"
                        placeholder="Enter description"
                        className="box"
                        value={description}
                        onChange={descriptionInput}
                        required
                    />
                    <p>
                        Extra <span>*</span>{" "}
                    </p>
                    <input
                        type="text"
                        name="extra"
                        placeholder="anything??extra"
                        className="box"
                        value={extra}
                        onChange={extraInput}
                        required
                    />
                    <p>Youtube Link </p>
                    <input
                        type="text"
                        name="youtube"
                        placeholder="Youtube Link"
                        className="box"
                        value={youtube}
                        onChange={youtubeInput}
                        required
                    />
                    <input
                        type="submit"
                        value="Submit"
                        name="submit"
                        className="btn"
                    />
                </form>
            </section>
        </>
    );
};

export default Admin_Pdf_Form;
