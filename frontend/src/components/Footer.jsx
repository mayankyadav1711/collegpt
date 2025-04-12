import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Send, 
  BookOpen, 
  FileText, 
  Users, 
  Calendar, 
  Sparkle, 
  ExternalLink,
  GraduationCap,
  Heart
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Thanks for subscribing to our newsletter!');
    setEmail('');
  };

  const footerLinks = {
    Features: [
      { name: "Notes & Resources", href: "/courses", icon: <BookOpen className="w-4 h-4" /> },
      { name: "Events Calendar", href: "/events", icon: <Calendar className="w-4 h-4" /> },
      { name: "Cheat Sheets", href: "/cheatsheets", icon: <FileText className="w-4 h-4" /> },
      { name: "Learning Guides", href: "/guides", icon: <GraduationCap className="w-4 h-4" /> },
      { name: "Community Forum", href: "/userlist", icon: <Users className="w-4 h-4" /> },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contribute", href: "/contributor" },
      { name: "Contact", href: "/contact" },
      { name: "Team", href: "/team" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200/20 dark:border-gray-800/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Logo & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
          <Link to="/" className="flex items-center">
            <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center group">
              C
              <img
                src="/logo.svg"
                className="inline-block h-8 w-8 mt-1 transform transition-transform group-hover:rotate-12"
                alt="ColleGPT Logo"
              />
              LLEGPT
            </span>
          </Link>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Get Prepared Together - Revolutionize your academic journey with engaging resources 
              and a supportive community.
            </p>

            {/* Newsletter */}
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 backdrop-blur-xl border border-gray-200/20 dark:border-gray-800/20">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                Stay updated with our newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 
                             bg-white dark:bg-gray-950 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                             placeholder-gray-500 dark:placeholder-gray-400"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 
                           dark:bg-indigo-500 dark:hover:bg-indigo-600 
                           text-white font-medium transition-colors
                           flex items-center justify-center gap-2"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
                    {category}
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
                  </h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="group flex items-center text-gray-600 dark:text-gray-400 
                                   hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {link.icon && (
                            <span className="mr-3 text-gray-400 dark:text-gray-500 
                                         group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              {link.icon}
                            </span>
                          )}
                          <span className="inline-block transform transition-transform group-hover:translate-x-1">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/20 dark:border-gray-800/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <SocialLink 
                href="https://www.linkedin.com/in/collegpt/" 
                icon={<Linkedin />} 
                label="LinkedIn" 
              />
              <SocialLink 
                href="https://twitter.com/ColleGPT" 
                icon={<Twitter />} 
                label="Twitter" 
              />
              <SocialLink 
                href="https://www.instagram.com/collegpt" 
                icon={<Instagram />} 
                label="Instagram" 
              />
            </div>

            {/* Copyright */}
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} ColleGPT. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-white text-sm text-center flex items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-red-300 animate-pulse" fill="currentColor" /> 
            by students, for students
          </p>
        </div>
      </div>
    </footer>
  );
};

// Social Link Component
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-xl
             bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400
             hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white
             transition-all transform hover:-translate-y-1"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;