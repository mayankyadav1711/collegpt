import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const Header = () => {
  const { auth, theme } = useAppContext();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const defaultProfilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  // Debug logging on mount
  useEffect(() => {
    console.log('Header mounted, current theme:', theme.current);
    console.log('Is dark mode?', theme.isDark);
    console.log('Dark class on HTML:', document.documentElement.classList.contains('dark'));
  }, []);

  // Fetch user profile when auth.user changes
  useEffect(() => {
    if (auth.user && auth.user._id) {
      fetch(`https://api-collegpt.vercel.app/view-profile/${auth.user._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUserProfile(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [auth.user]);

  // Handle clicks outside menu/dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        profileRef.current && 
        !profileRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    auth.logout();
    toast.success("Logged out successfully!");
    navigate("/login");
    setIsProfileOpen(false);
  };
  
  // Simplified theme toggle without the setTimeout
  const handleThemeToggle = () => {
    console.log('Theme toggle clicked');
    console.log('Current theme before toggle:', theme.current);
    theme.toggleTheme();
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white flex items-center">
            C
            <img
              src='/logo.svg'
              className="inline-block h-8 w-8 mx-1"
              alt="ColleGPT Logo"
            />
            LLEGPT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Notes</NavLink>
          <NavLink to="/userlist">Community</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contributor">Contribute</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* User profile and theme toggle */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleThemeToggle} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={theme.isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme.isDark ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={handleProfileClick}
              className="flex items-center focus:outline-none"
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
            >
              <img
                src={userProfile?.profilePic || defaultProfilePic}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
              />
              <ChevronDown 
                className={`ml-1 h-4 w-4 text-gray-600 dark:text-gray-400 transition-transform ${
                  isProfileOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Dropdown menu */}
            {isProfileOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 py-1"
              >
                {auth.isAuthenticated ? (
                  <>
                    <Link 
                      to="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col transition-colors"
          ref={menuRef}
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-xl">
            <MobileNavLink to="/" onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink to="/courses" onClick={closeMenu}>Notes</MobileNavLink>
            <MobileNavLink to="/userlist" onClick={closeMenu}>Community</MobileNavLink>
            <MobileNavLink to="/about" onClick={closeMenu}>About</MobileNavLink>
            <MobileNavLink to="/contributor" onClick={closeMenu}>Contribute</MobileNavLink>
            <MobileNavLink to="/contact" onClick={closeMenu}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ to, onClick, children }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-gray-800 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

export default Header;