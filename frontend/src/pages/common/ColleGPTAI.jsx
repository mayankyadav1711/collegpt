import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import {
  Send,
  ArrowRight,
  Paperclip,
  Mic,
  Settings,
  X,
  ChevronLeft,
  MessageSquare,
  RefreshCw,
  Share2,
  Save,
  Download,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Book,
  Brain,
  Zap,
  Sparkles,
  Code,
  FileText,
  User,
  Key,
  CheckCircle,
  Volume2,
  StopCircle,
  Filter,
  Clock,
  Search,
  ChevronUp,
  ChevronDown,
  Star,
  Lock,
  Github,
  HelpCircle,
  Loader,
  Archive,
  Trash,
  Bookmark,
  Maximize,
  Minimize,
  Camera,
  Crop,
  Shuffle,
  AlertCircle
} from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const ColleGPTAI = () => {
  // App Context and Navigation
  const { auth, theme } = useAppContext();
  const navigate = useNavigate();
  
  // Chat and UI State
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "system",
      content:
        "👋 Hi there! I'm Nova, your academic AI assistant. I'm here to help you with your studies and questions. To get started with advanced features, enter your Gemini API key in the settings.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isPromptLibraryOpen, setIsPromptLibraryOpen] = useState(false);
  const [activeView, setActiveView] = useState("chat");
  const [activeTool, setActiveTool] = useState("chat");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem("geminiApiKey") || "");
  const [isApiKeyConfigured, setIsApiKeyConfigured] = useState(!!localStorage.getItem("geminiApiKey"));
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem("selectedModel") || "gemini-1.5-pro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [conversations, setConversations] = useState(JSON.parse(localStorage.getItem("conversations") || "[]"));
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const messagesEndRef = useRef(null);
  const chatBodyRef = useRef(null);
  const fileInputRef = useRef(null);
  const speechRef = useRef(null);
  
  // Language Models Config
  const models = [
    { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", provider: "Google" },
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", provider: "Google" },
    { id: "gemini-1.0-pro", name: "Gemini 1.0 Pro", provider: "Google" }
  ];
  
  // Random loading messages
  const loadingMessages = [
    "Accessing knowledge database...",
    "Processing your question...",
    "Analyzing academic resources...",
    "Formulating a comprehensive response...",
    "Consulting the latest research...",
    "Synthesizing information...",
    "Generating explanations..."
  ];

  // Sample conversation history
  const sampleConversations = [
    { 
      id: "c1", 
      title: "Computer Networks Overview", 
      date: new Date(Date.now() - 86400000),
      messages: [
        {id: 1, role: "user", content: "Explain OSI model layers", timestamp: new Date(Date.now() - 86400000)},
        {id: 2, role: "system", content: "The OSI model consists of 7 layers...", timestamp: new Date(Date.now() - 86400000)}
      ],
      pinned: true
    },
    { 
      id: "c2", 
      title: "Algorithm Complexity", 
      date: new Date(Date.now() - 172800000),
      messages: [
        {id: 1, role: "user", content: "What's the difference between O(n) and O(n log n)?", timestamp: new Date(Date.now() - 172800000)},
        {id: 2, role: "system", content: "O(n) and O(n log n) are asymptotic notations...", timestamp: new Date(Date.now() - 172800000)}
      ],
      pinned: false
    },
  ];

  // Smart prompt library templates
  const promptLibrary = [
    { 
      category: "Learning",
      prompts: [
        {
          title: "Concept Explanation",
          prompt: "Explain [concept] in simple terms, then provide progressively more advanced explanations. Include analogies, examples, and applications.",
          icon: Brain
        },
        {
          title: "Compare Concepts",
          prompt: "Compare and contrast [concept A] and [concept B], highlighting key similarities, differences, advantages, and disadvantages. Include a summary table.",
          icon: Shuffle
        }
      ]
    },
    {
      category: "Problem Solving",
      prompts: [
        {
          title: "Step-by-Step Solution",
          prompt: "Solve this problem step-by-step, explaining your reasoning at each stage: [problem]",
          icon: Zap
        },
        {
          title: "Algorithm Design",
          prompt: "Design an efficient algorithm to solve the following problem: [problem]. Include time and space complexity analysis.",
          icon: Code
        }
      ]
    },
    {
      category: "Exam Prep",
      prompts: [
        {
          title: "Generate Practice Problems",
          prompt: "Generate 5 practice problems on [topic] with varying difficulty levels. Provide solutions and explanations.",
          icon: FileText
        },
        {
          title: "Important Topics Summary",
          prompt: "Create a comprehensive summary of the most important topics in [subject], focusing on commonly tested concepts.",
          icon: Book
        }
      ]
    }
  ];

  // Tools configuration
  const tools = [
    {
      id: "chat",
      icon: MessageSquare,
      name: "Chat",
      description: "Ask questions and get detailed explanations"
    },
    {
      id: "explain",
      icon: Brain,
      name: "Concept Explorer",
      description: "Deep dives into academic concepts"
    },
    {
      id: "practice",
      icon: FileText,
      name: "Practice Generator",
      description: "Create custom practice problems"
    },
    {
      id: "visualize",
      icon: Crop,
      name: "Visualization",
      description: "Visualize complex ideas and data"
    },
    {
      id: "study",
      icon: Book,
      name: "Study Plans",
      description: "Generate personalized study plans"
    }
  ];
  
  // Load conversations and check API key on mount
  useEffect(() => {
    // If there are saved conversations, use them; otherwise use sample conversations
    const savedConversations = localStorage.getItem("conversations");
    if (savedConversations && JSON.parse(savedConversations).length > 0) {
      setConversations(JSON.parse(savedConversations));
    } else {
      setConversations(sampleConversations);
    }
    
    // Check if API key is configured
    const savedApiKey = localStorage.getItem("geminiApiKey");
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
      setIsApiKeyConfigured(true);
    }
    
    // Set up full-screen change detection
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      stopSpeaking();
    };
  }, []);
  
  // Auto scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Update loading message during response generation
  useEffect(() => {
    if (isLoadingResponse) {
      const interval = setInterval(() => {
        setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLoadingResponse]);
  
  // Save conversations to localStorage when they change
  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Create a new conversation
  const createNewConversation = () => {
    const newConversation = {
      id: `c${Date.now()}`,
      title: "New Conversation",
      date: new Date(),
      messages: [
        {
          id: 1,
          role: "system",
          content: "👋 Hi there! I'm Nova, your academic AI assistant. How can I help you today?",
          timestamp: new Date(),
        }
      ],
      pinned: false
    };
    
    setConversations([newConversation, ...conversations]);
    setSelectedConversation(newConversation.id);
    setMessages(newConversation.messages);
  };
  
  // Load a conversation
  const loadConversation = (conversationId) => {
    const conversation = conversations.find(c => c.id === conversationId);
    if (conversation) {
      setSelectedConversation(conversationId);
      setMessages(conversation.messages);
    }
  };
  
  // Save API key
  const saveApiKey = () => {
    if (geminiApiKey.trim()) {
      localStorage.setItem("geminiApiKey", geminiApiKey.trim());
      setIsApiKeyConfigured(true);
      setIsSettingsOpen(false);
      toast("API key saved successfully!");
    } else {
      toast("Please enter a valid API key", "error");
    }
  };
  
  // Clear API key
  const clearApiKey = () => {
    localStorage.removeItem("geminiApiKey");
    setGeminiApiKey("");
    setIsApiKeyConfigured(false);
    toast("API key removed");
  };
  
  // Save model preference
  const saveModelPreference = (modelId) => {
    setSelectedModel(modelId);
    localStorage.setItem("selectedModel", modelId);
    toast(`Model switched to ${models.find(m => m.id === modelId)?.name}`);
  };
  
  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Save user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    
    // Update this conversation in the conversations list
    if (selectedConversation) {
      const updatedConversations = conversations.map(c => {
        if (c.id === selectedConversation) {
          return {
            ...c,
            messages: updatedMessages,
            title: c.messages.length <= 1 ? extractTitle(inputValue) : c.title
          };
        }
        return c;
      });
      setConversations(updatedConversations);
    } else {
      // Create a new conversation
      const newConversation = {
        id: `c${Date.now()}`,
        title: extractTitle(inputValue),
        date: new Date(),
        messages: updatedMessages,
        pinned: false
      };
      setConversations([newConversation, ...conversations]);
      setSelectedConversation(newConversation.id);
    }

    // Generate response
    await generateResponse(updatedMessages);
  };
  
  // Generate AI response
  const generateResponse = async (currentMessages) => {
    setIsTyping(true);
    setIsLoadingResponse(true);
    setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);

    try {
      // If API key is configured, use Gemini
      if (isApiKeyConfigured) {
        const genAI = new GoogleGenerativeAI(geminiApiKey);
        const model = genAI.getGenerativeModel({ model: selectedModel });
        
        const history = currentMessages
          .filter(m => m.id > 1) // Skip the initial greeting
          .map(m => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }]
          }));
        
        // For simplicity, rebuild the chat for each request
        // In a production app, you'd maintain the chat session
        const chat = model.startChat({
          history: history.length > 1 ? history.slice(0, -1) : []
        });
        
        const lastMessage = currentMessages[currentMessages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        const responseText = response.text();
        
        // Add AI response
        const aiResponse = {
          id: currentMessages.length + 1,
          role: "system",
          content: responseText,
          timestamp: new Date(),
        };
        
        addAiResponse(aiResponse);
      } else {
        // Fallback to simulated response
        setTimeout(() => {
          const simulatedResponse = {
            id: currentMessages.length + 1,
            role: "system",
            content: simulateAIResponse(currentMessages[currentMessages.length - 1].content),
            timestamp: new Date(),
          };
          addAiResponse(simulatedResponse);
        }, 2000);
      }
    } catch (error) {
      console.error("Error generating response:", error);
      const errorResponse = {
        id: currentMessages.length + 1,
        role: "system",
        content: "I'm sorry, I encountered an error processing your request. If you're using the Gemini API, please check that your API key is valid and has sufficient quota.",
        timestamp: new Date(),
      };
      addAiResponse(errorResponse);
    }
  };
  
  // Add AI response to messages and update conversation
  const addAiResponse = (aiResponse) => {
    setMessages((prevMessages) => [...prevMessages, aiResponse]);
    setIsTyping(false);
    setIsLoadingResponse(false);
    
    // Update the conversation
    if (selectedConversation) {
      setConversations(prevConversations => 
        prevConversations.map(c => {
          if (c.id === selectedConversation) {
            return {
              ...c,
              messages: [...c.messages, aiResponse]
            };
          }
          return c;
        })
      );
    }
  };
  
  // Simulate AI response when API key is not configured
  const simulateAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("api") && lowerQuery.includes("key")) {
      return "To use Gemini's advanced capabilities, you'll need to configure your API key. Click on the Settings icon and enter your Gemini API key. You can obtain an API key from Google AI Studio (https://aistudio.google.com/).\n\nDon't worry, your key is stored locally in your browser and not sent to our servers.";
    }
    else if (lowerQuery.includes("neural network") || lowerQuery.includes("machine learning")) {
      return "# Neural Networks Explained\n\nNeural networks are computational systems inspired by the human brain's structure. They consist of interconnected nodes (neurons) organized in layers:\n\n1. **Input Layer**: Receives initial data\n2. **Hidden Layers**: Process information through weighted connections\n3. **Output Layer**: Provides final results\n\nThey learn by adjusting connection weights through a process called **backpropagation**, minimizing the difference between predicted and actual outputs.\n\n## Common Applications\n- Image and speech recognition\n- Natural language processing\n- Autonomous vehicles\n- Medical diagnosis\n\nNeural networks excel at pattern recognition tasks that would be difficult to program explicitly. Would you like me to explain any specific aspect in more detail?";
    } 
    else if (lowerQuery.includes("algorithm") || lowerQuery.includes("complexity")) {
      return "# Algorithm Analysis & Complexity\n\nAlgorithm complexity measures how resource usage (time/space) scales with input size.\n\n## Common Time Complexities\n\n| Notation | Name | Example Algorithm |\n|---------|------|-------------------|\n| O(1) | Constant | Array access |\n| O(log n) | Logarithmic | Binary search |\n| O(n) | Linear | Linear search |\n| O(n log n) | Linearithmic | Merge sort, Quick sort |\n| O(n²) | Quadratic | Bubble sort |\n| O(2ⁿ) | Exponential | Recursive Fibonacci |\n\nWhen analyzing algorithms, we focus on the dominant term and worst-case scenario. The goal is typically to find the most efficient algorithm for a given problem.\n\nWould you like me to analyze the complexity of a specific algorithm?";
    }
    else if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "Hello! I'm Nova, your academic AI assistant. I can help with:\n\n- Explaining complex concepts\n- Solving problems step-by-step\n- Creating study materials\n- Summarizing research papers\n- Generating practice questions\n\nWhat would you like to learn about today?";
    }
    else {
      return "That's an interesting question! To provide you with the most accurate and detailed response, I recommend configuring your Gemini API key for full functionality.\n\nIn the meantime, I can offer general assistance with academic concepts, problem solving, and study strategies. Would you like me to elaborate on a specific aspect of your query, or would you prefer instructions on setting up the API integration?";
    }
  };

  // Extract conversation title from first message
  const extractTitle = (message) => {
    // Take first few words for the title
    return message.split(' ').slice(0, 4).join(' ') + (message.split(' ').length > 4 ? '...' : '');
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      toast(`File "${file.name}" uploaded`);
      setInputValue(`I've uploaded ${file.name}. Can you help me analyze its contents?`);
    }
  };

  // Use prompt template
  const handleUsePrompt = (promptText) => {
    setInputValue(promptText);
    setIsPromptLibraryOpen(false);
    // Focus the input after setting the value
    document.getElementById('chat-input')?.focus();
  };

  // Format timestamp
  const formatTimestamp = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    
    // If today
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
    
    // If yesterday
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday, " + messageDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
    
    // Otherwise show date
    return messageDate.toLocaleDateString([], {
      month: 'short',
      day: 'numeric'
    }) + ", " + messageDate.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  // Delete conversation
  const deleteConversation = (conversationId) => {
    setConversations(prevConversations => 
      prevConversations.filter(c => c.id !== conversationId)
    );
    
    if (selectedConversation === conversationId) {
      setSelectedConversation(null);
      setMessages([
        {
          id: 1,
          role: "system",
          content: "👋 Hi there! I'm Nova, your academic AI assistant. How can I help you today?",
          timestamp: new Date(),
        }
      ]);
    }
    
    toast("Conversation deleted");
  };
  
  // Toggle pin status for conversation
  const togglePinConversation = (conversationId) => {
    setConversations(prevConversations => 
      prevConversations.map(c => {
        if (c.id === conversationId) {
          return {...c, pinned: !c.pinned};
        }
        return c;
      })
    );
  };
  
  // Copy message content to clipboard
  const copyToClipboard = (content, index) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast("Copied to clipboard");
  };
  
  // Speech synthesis
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      stopSpeaking();
      
      const cleanText = text.replace(/```[\s\S]*?```/g, '').replace(/#+\s/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      utterance.onend = () => {
        setIsSpeaking(false);
        speechRef.current = null;
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
        speechRef.current = null;
      };
      
      setIsSpeaking(true);
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else {
      toast("Text-to-speech is not supported in your browser", "error");
    }
  };
  
  // Stop speech synthesis
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      speechRef.current = null;
    }
  };
  
  // Speech recognition
  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
      };
      
      recognition.start();
    } else {
      toast("Speech recognition is not supported in your browser", "error");
    }
  };
  
  // Toggle full screen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        toast("Error attempting to enable full-screen mode", "error");
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  
  // Simple toast notification
  const toast = (message, type = "success") => {
    // In production, use a proper toast library
    console.log(`Toast (${type}):`, message);
    // This is just a placeholder. Replace with actual toast implementation.
    const toastElement = document.createElement('div');
    toastElement.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white ${
      type === "error" ? "bg-red-500" : "bg-green-500"
    } shadow-lg z-50 animate-fade-in-out`;
    toastElement.textContent = message;
    document.body.appendChild(toastElement);
    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 3000);
  };

  // Get conversations, sorted with pinned first
  const sortedConversations = [...conversations].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className={`flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden ${
      isFullScreen ? 'fixed inset-0 z-50' : ''
    }`}>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-72 lg:w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hidden md:flex flex-col z-10">
          {/* Logo Section */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 flex items-center group">
                C
                <img
                  src="/logo.svg"
                  className="inline-block h-6 w-6 mt-1 transform transition-transform group-hover:rotate-12"
                  alt="ColleGPT Logo"
                />
                LLEGPT
                <span className="text-[#00AEEF] ml-1">AI</span>
              </span>
            </Link>
          </div>
          
          {/* New Chat Button */}
          <div className="p-4">
            <button 
              className="w-full p-3 rounded-xl bg-gradient-to-r from-[#0067b5] to-[#00AEEF] text-white font-medium flex items-center justify-center gap-2 hover:shadow-md transition-shadow"
              onClick={createNewConversation}
            >
              <MessageSquare className="w-5 h-5" />
              New Conversation
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="px-4 mb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 
                         bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 
                         focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>
          
          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto px-2">
            {sortedConversations.length > 0 ? (
              <div className="space-y-1">
                {sortedConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    className={`relative group rounded-lg ${
                      selectedConversation === conversation.id 
                        ? "bg-[#00AEEF]/10 dark:bg-[#00AEEF]/10" 
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <button 
                      className="w-full p-3 text-left transition"
                      onClick={() => loadConversation(conversation.id)}
                    >
                      <div className="flex items-center">
                        {conversation.pinned && (
                          <div className="absolute left-2 top-2 text-[#00AEEF]">
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0 pl-1">
                          <p className={`font-medium truncate ${
                            selectedConversation === conversation.id
                              ? "text-[#00AEEF]"
                              : "text-slate-900 dark:text-slate-100"
                          }`}>
                            {conversation.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {conversation.messages[conversation.messages.length - 1]?.content?.substring(0, 40)}...
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                            {new Date(conversation.date).toLocaleDateString([], {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </button>
                    
                    {/* Action buttons */}
                    <div className="absolute right-2 top-2 hidden group-hover:flex space-x-1">
                      <button
                        onClick={() => togglePinConversation(conversation.id)}
                        className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
                        title={conversation.pinned ? "Unpin" : "Pin"}
                      >
                        <Star className={`w-4 h-4 ${conversation.pinned ? "fill-[#00AEEF] text-[#00AEEF]" : "text-slate-500 dark:text-slate-400"}`} />
                      </button>
                      <button
                        onClick={() => deleteConversation(conversation.id)}
                        className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
                        title="Delete"
                      >
                        <Trash className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-slate-500 dark:text-slate-400">
                <MessageSquare className="w-8 h-8 mb-2 opacity-50" />
                <p>No conversations yet</p>
              </div>
            )}
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            {/* API Status Indicator */}
            <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isApiKeyConfigured ? "bg-green-500" : "bg-amber-500"}`}></div>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {isApiKeyConfigured ? "Gemini Connected" : "Basic Mode"}
                  </span>
                </div>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="text-[#00AEEF]"
                >
                  Configure
                </button>
              </div>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={auth.user?.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                  alt="User"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {auth.user ? auth.user.name : "Guest User"}
                  </p>
                  
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsSettingsOpen(true)}
                >
                  <Settings className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Header */}
        <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-3 px-4 flex items-center justify-between sticky top-0 z-20">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => navigate('/')}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              className="hidden md:block p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              title={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
            >
              {isSidebarOpen ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <MessageSquare className="w-5 h-5" />
              )}
            </button>
            
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <img 
                  src="/robot.gif" 
                  alt="Nova" 
                  className="w-7 h-7 rounded-full"
                />
                <span>Nova</span>
                <span className="bg-[#00AEEF]/10 text-[#00AEEF] text-xs rounded-md px-2 py-0.5">
                  {isApiKeyConfigured ? models.find(m => m.id === selectedModel)?.name : "Basic Mode"}
                </span>
              </h1>
            </div>
          </div>
          
          {/* Mobile title */}
          <div className="md:hidden">
            <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100 flex items-center">
              Nova
              <span className="ml-1 bg-[#00AEEF]/10 text-[#00AEEF] text-xs rounded-md px-1.5 py-0.5">
                {isApiKeyConfigured ? "Gemini" : "Basic"}
              </span>
            </h1>
          </div>
          
          {/* Right side controls */}
          <div className="flex items-center space-x-1">
            <button 
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsSettingsOpen(true)}
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button 
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={toggleFullScreen}
              title={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullScreen ? (
                <Minimize className="w-5 h-5" />
              ) : (
                <Maximize className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Tools Navigation Bar */}
        <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-1">
          <div className="flex space-x-1 overflow-x-auto scrollbar-thin">
            {tools.map((tool) => (
              <button 
                key={tool.id}
                className={`px-3 py-2 rounded-md flex items-center space-x-2 whitespace-nowrap text-sm ${
                  activeTool === tool.id 
                    ? "bg-[#00AEEF]/10 text-[#00AEEF]" 
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => setActiveTool(tool.id)}
              >
                <tool.icon className="w-4 h-4" />
                <span>{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Chat Area with Message Thread */}
        <div 
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 ? (
              // Empty state
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <img 
                  src="/robot.gif" 
                  alt="Nova" 
                  className="w-24 h-24 mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Meet Nova, Your AI Study Partner
                </h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-md mb-8">
                  Ask questions, get explanations, solve problems, or generate study materials
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg">
                  <button
                    onClick={() => setInputValue("Explain the key differences between SQL and NoSQL databases")}
                    className="p-3 text-left rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  >
                    <p className="font-medium text-slate-900 dark:text-slate-100">Compare SQL vs NoSQL</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Key differences and use cases</p>
                  </button>
                  <button
                    onClick={() => setInputValue("Create a study plan for learning Python programming in 30 days")}
                    className="p-3 text-left rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  >
                    <p className="font-medium text-slate-900 dark:text-slate-100">Generate Study Plan</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">30-day Python learning path</p>
                  </button>
                </div>
              </div>
            ) : (
              // Chat messages
              messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] group ${message.role === "system" ? "flex" : ""}`}>
                    {/* Avatar - only for system messages */}
                    {message.role === "system" && (
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="relative">
                          <img 
                            src="/robot.gif" 
                            alt="Nova" 
                            className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                          />
                          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white dark:border-slate-800"></span>
                        </div>
                      </div>
                    )}
                    
                    {/* Message content */}
                    <div className="flex flex-col">
                      {/* Message bubble */}
                      <div
                        className={`rounded-2xl px-5 py-3.5 shadow-sm ${
                          message.role === "user"
                            ? "bg-[#00AEEF] text-white rounded-br-none"
                            : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-none"
                        }`}
                      >
                        {/* Render markdown for system messages */}
                        {message.role === "system" ? (
                         <ReactMarkdown 
                         components={{
                           // Apply styles to specific elements instead of using className
                           p: ({node, ...props}) => <p className="text-slate-900 dark:text-white my-2" {...props} />,
                           h1: ({node, ...props}) => <h1 className="text-xl font-bold text-slate-900 dark:text-white mt-4 mb-2" {...props} />,
                           h2: ({node, ...props}) => <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2" {...props} />,
                           h3: ({node, ...props}) => <h3 className="text-md font-bold text-slate-900 dark:text-white mt-3 mb-1" {...props} />,
                           ul: ({node, ...props}) => <ul className="list-disc pl-6 my-2" {...props} />,
                           ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-2" {...props} />,
                           li: ({node, ...props}) => <li className="my-1" {...props} />,
                           code: ({node, inline, ...props}) => 
                             inline 
                               ? <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm" {...props} />
                               : <code className="block bg-slate-100 dark:bg-slate-800 p-3 rounded-lg my-2 overflow-x-auto text-sm" {...props} />,
                           pre: ({node, ...props}) => <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg my-2 overflow-x-auto" {...props} />,
                           table: ({node, ...props}) => <table className="border-collapse w-full my-4" {...props} />,
                           th: ({node, ...props}) => <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 bg-slate-100 dark:bg-slate-800" {...props} />,
                           td: ({node, ...props}) => <td className="border border-slate-300 dark:border-slate-700 px-3 py-2" {...props} />,
                           a: ({node, ...props}) => <a className="text-[#00AEEF] hover:underline" {...props} />,
                           blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-slate-300 dark:border-slate-700 pl-4 italic my-3" {...props} />
                         }}
                       >
                         {message.content}
                       </ReactMarkdown>
                        ) : (
                          // Plain text for user messages
                          <div className="text-white whitespace-pre-wrap">
                            {message.content}
                          </div>
                        )}
                        
                        {/* Timestamp */}
                        <div className={`text-xs mt-2 ${
                          message.role === "user" 
                            ? "text-white/80" 
                            : "text-slate-500 dark:text-slate-400"
                        }`}>
                          {formatTimestamp(message.timestamp)}
                        </div>
                      </div>
                      
                      {/* Message actions - only for AI messages */}
                      {message.role === "system" && (
                        <div className="flex items-center mt-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            className="p-1.5 rounded-lg bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 
                                     text-slate-500 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                            onClick={() => copyToClipboard(message.content, idx)}
                            title="Copy to clipboard"
                          >
                            {copiedIndex === idx ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            className={`p-1.5 rounded-lg bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 
                                     hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors
                                     ${isSpeaking ? "text-[#00AEEF]" : "text-slate-500 dark:text-slate-300"}`}
                            onClick={() => isSpeaking ? stopSpeaking() : speak(message.content)}
                            title={isSpeaking ? "Stop speaking" : "Listen"}
                          >
                            {isSpeaking ? (
                              <StopCircle className="w-4 h-4" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                          </button>
                          <div className="flex items-center border-l border-slate-200 dark:border-slate-700 pl-2">
                            <button
                              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 
                                      text-slate-500 dark:text-slate-300"
                              title="Thumbs up"
                            >
                              <ThumbsUp className="w-4 h-4" />
                            </button>
                            <button
                              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 
                                      text-slate-500 dark:text-slate-300"
                              title="Thumbs down"
                            >
                              <ThumbsDown className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src="/robot.gif" 
                    alt="Nova" 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                  />
                </div>
                <div className="max-w-[85%] rounded-2xl px-5 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-tl-none">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      {loadingMessage}
                    </div>
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#00AEEF]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#00AEEF]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatType: "loop" }}
                      />
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#00AEEF]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatType: "loop" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Element to scroll to */}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Prompt Library */}
        <AnimatePresence>
          {isPromptLibraryOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-24 w-11/12 max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 z-30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00AEEF]" />
                  Smart Prompts
                </h3>
                <button 
                  onClick={() => setIsPromptLibraryOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {promptLibrary.map((category, catIdx) => (
                  <div key={catIdx}>
                    <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium mb-3">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.prompts.map((prompt, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#00AEEF]/50 dark:hover:border-[#00AEEF]/50 hover:shadow-md transition-all cursor-pointer"
                          onClick={() => handleUsePrompt(prompt.prompt)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex-shrink-0">
                              <prompt.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h5 className="font-medium text-slate-900 dark:text-white mb-1">
                                {prompt.title}
                              </h5>
                              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                                {prompt.prompt}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Settings Modal */}
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsSettingsOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h2>
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  </button>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* API Key Configuration */}
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Key className="w-5 h-5 text-[#00AEEF]" /> 
                      Gemini API Configuration
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Enter your Gemini API key to unlock advanced capabilities. 
                      <a 
                        href="https://aistudio.google.com/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#00AEEF] hover:underline ml-1"
                      >
                        Get a key from Google AI Studio
                      </a>
                    </p>
                    
                    <div className="flex">
                      <div className="relative flex-1">
                        <input
                          type="password"
                          value={geminiApiKey}
                          onChange={(e) => setGeminiApiKey(e.target.value)}
                          placeholder="Enter your Gemini API key"
                          className="w-full px-4 py-3 pr-12 rounded-l-lg border border-slate-200 dark:border-slate-700 
                                   bg-white dark:bg-slate-800 text-slate-900 dark:text-white
                                   focus:ring-2 focus:ring-[#00AEEF] outline-none
                                   placeholder:text-slate-400"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                          <Lock className="w-5 h-5" />
                        </div>
                      </div>
                      <button
                        onClick={saveApiKey}
                        className="px-4 py-2 bg-[#00AEEF] text-white font-medium rounded-r-lg hover:bg-[#0067b5] transition-colors"
                      >
                        Save
                      </button>
                    </div>
                    
                    {isApiKeyConfigured && (
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          API key configured
                        </div>
                        <button
                          onClick={clearApiKey}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Clear key
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Model Selection */}
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-[#00AEEF]" />
                      AI Model Selection
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Select which Gemini model to use. Different models have different capabilities and speeds.
                    </p>
                    
                    <div className="space-y-2">
                      {models.map((model) => (
                        <div 
                          key={model.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedModel === model.id
                              ? "border-[#00AEEF] bg-[#00AEEF]/5"
                              : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                          }`}
                          onClick={() => saveModelPreference(model.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">{model.name}</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                {model.provider}
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedModel === model.id
                                ? "border-[#00AEEF]"
                                : "border-slate-300 dark:border-slate-600"
                            }`}>
                              {selectedModel === model.id && (
                                <div className="w-3 h-3 rounded-full bg-[#00AEEF]"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          Your API key is stored locally in your browser and never sent to our servers. 
                          API calls are made directly from your browser to Google's API.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="px-5 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Chat Input */}
        <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative">
          <div className="max-w-4xl mx-auto">
            {/* API key prompt banner - show if API key not configured */}
            {!isApiKeyConfigured && (
              <div className="mb-4 p-3 rounded-lg bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Key className="w-5 h-5 text-[#00AEEF]" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Add your Gemini API key to unlock advanced features
                  </p>
                </div>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="text-sm font-medium text-[#00AEEF] hover:underline"
                >
                  Configure
                </button>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="relative">
              {/* Prompt template button */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <button
                  type="button"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsPromptLibraryOpen(!isPromptLibraryOpen)}
                >
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
              
              {/* Input field */}
              <input
                id="chat-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask Nova anything about your studies..."
                className="w-full pl-12 pr-24 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 
                         bg-white dark:bg-slate-900 text-slate-900 dark:text-white
                         focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent outline-none
                         placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                autoComplete="off"
              />
              
                            {/* Right side buttons */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                {/* Voice input button */}
                <button
                  type="button"
                  className={`p-2 rounded-lg transition-colors ${
                    isListening 
                      ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400" 
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={startListening}
                >
                  {isListening ? (
                    <StopCircle className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </button>
                
                {/* File upload button */}
                <button
                  type="button"
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                
                {/* Send button */}
                <button
                  type="submit"
                  className={`p-2 rounded-lg ${
                    inputValue.trim() === "" 
                      ? "bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed" 
                      : "bg-[#00AEEF] text-white hover:bg-[#0067b5] transition-colors"
                  }`}
                  disabled={inputValue.trim() === ""}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
              />
            </form>
            
            {/* Footer info text */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
              <div className="flex items-center space-x-2">
                <img src="/robot.gif" alt="Nova" className="w-5 h-5 rounded-full" />
                <span>
                  {isApiKeyConfigured 
                    ? `Using ${models.find(m => m.id === selectedModel)?.name} • Responses may vary in accuracy`
                    : "Using basic mode • Configure Gemini API for advanced features"}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:underline flex items-center"
                >
                  <Key className="w-3 h-3 mr-1" />
                  Get API Key
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-2 py-2 z-50">
          <div className="flex justify-between">
            {tools.slice(0, 5).map((tool) => (
              <button
                key={tool.id}
                className={`flex-1 flex flex-col items-center py-1 ${
                  activeTool === tool.id 
                    ? "text-[#00AEEF]" 
                    : "text-slate-500 dark:text-slate-400"
                }`}
                onClick={() => setActiveTool(tool.id)}
              >
                <tool.icon className="w-5 h-5" />
                <span className="text-xs mt-1">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for styling markdown content */}
      <style jsx global>{`
        .prose pre {
          background-color: ${theme.current === "dark" ? "#1e293b" : "#f8fafc"};
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
        }
        
        .prose code {
          background-color: ${theme.current === "dark" ? "#334155" : "#f1f5f9"};
          border-radius: 0.25rem;
          padding: 0.125rem 0.25rem;
          font-size: 0.875rem;
        }
        
        .prose pre code {
          background-color: transparent;
          padding: 0;
        }
        
        .prose table {
          border-collapse: collapse;
          width: 100%;
        }
        
        .prose th, .prose td {
          border: 1px solid ${theme.current === "dark" ? "#334155" : "#e2e8f0"};
          padding: 0.5rem;
        }
        
        .prose th {
          background-color: ${theme.current === "dark" ? "#1e293b" : "#f8fafc"};
        }
        
        /* Custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: ${theme.current === "dark" ? "#475569" : "#cbd5e1"};
          border-radius: 5px;
        }
        
        /* Animation for toasts */
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        .animate-fade-in-out {
          animation: fadeInOut 3s forwards;
        }
      `}</style>
    </div>
  );
};

export default ColleGPTAI;