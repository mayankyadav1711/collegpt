import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { fetchWithAuth, BASE_URL } from "../../api/api";
import toast from 'react-hot-toast';
import { 
  Send, 
  User, 
  Mail, 
  MessageSquare,
  MapPin,
  PhoneCall,
  Clock,
  HelpCircle 
} from "lucide-react";

const Contact = () => {
  const { auth } = useAppContext();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Loading state for submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill form with user data if logged in
  useEffect(() => {
    if (auth.user) {
      setFormData(prev => ({
        ...prev,
        name: auth.user.name || "",
        email: auth.user.email || ""
      }));
    }
  }, [auth.user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate if user is logged in
    if (!auth.isAuthenticated) {
      toast.error("Please log in to send a message");
      navigate("/login");
      return;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetchWithAuth(`${BASE_URL}/contact`, {
        method: "POST",
        body: JSON.stringify(formData)
      });
      
      if (response) {
        toast.success("Message sent successfully! We'll contact you shortly.");
        // Reset message field after successful submission
        setFormData(prev => ({
          ...prev,
          message: ""
        }));
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-8 backdrop-blur-xl shadow-xl dark:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength="50"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength="50"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                                 border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                                 text-gray-900 dark:text-white placeholder-gray-500
                                 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                                 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength="1000"
                      rows="6"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] 
                               border border-gray-300 dark:border-[#2A2A2A] rounded-lg 
                               text-gray-900 dark:text-white placeholder-gray-500
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                               transition-all"
                      placeholder="Enter your message here..."
                    ></textarea>
                    <div className="text-xs text-right text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length}/1000 characters
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 
                           dark:bg-blue-500 dark:hover:bg-blue-600 text-white 
                           rounded-lg font-medium transition-all duration-200 
                           flex items-center justify-center focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                           focus:ring-offset-white dark:focus:ring-offset-[#111111] 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending message...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Our Location</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      123 Campus Drive, Education City, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      <a href="mailto:support@studymate.edu" className="hover:text-blue-500 transition-colors">
                        support@studymate.edu
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneCall className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      <a href="tel:+911234567890" className="hover:text-blue-500 transition-colors">
                        +91 123 456 7890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Office Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">What is the response time?</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    We typically respond to all inquiries within 24-48 hours on business days.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Can I schedule a campus visit?</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Yes! Contact us with your preferred date and time, and we'll arrange a campus tour for you.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">How can I report a technical issue?</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Please use this contact form and mention "Technical Issue" in your message for faster resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#1A1A1A] rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Find Us on the Map
        </h3>
        
        <div className="w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
          {/* You can replace this with an actual map integration */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            <p className="text-center">
              Map will be displayed here.<br />
              <span className="text-sm">Use Google Maps or another map provider for actual integration.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;