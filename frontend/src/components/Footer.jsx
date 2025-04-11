import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Mail, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 border-t border-gray-200 dark:border-gray-800">
      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left column: Logo and contact */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                C
                <img
                  src='/logo.svg'
                  className="inline-block h-6 w-6 mx-1" 
                  alt="Logo"
                />
                LLEGPT
              </span>
            </Link>
            <div className="mt-4 text-gray-700 dark:text-gray-300">
              <Link 
                to="mailto:collegpt@gmail.com"
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-5 h-5 mr-2" />
                collegpt@gmail.com
              </Link>
            </div>
          </div>

          {/* Middle column: Newsletter and social */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <span className="mr-1">Subscribe</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <SocialLink href="https://www.linkedin.com/in/collegpt/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://twitter.com/ColleGPT" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://www.instagram.com/collegpt" icon={<Instagram />} label="Instagram" />
            </div>
          </div>

          {/* Right column: Navigation links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">ColleGPT</h3>
              <ul className="space-y-2">
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/courses">Notes</FooterLink>
                <FooterLink to="/userlist">Community</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                <FooterLink to="/terms">Terms & Conditions</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-200 dark:bg-gray-800 mt-12 py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ColleGPT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
      {icon}
    </span>
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;