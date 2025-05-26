import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  BarChart,
  BookOpen,
  Calendar,
  FileText,
  Users,
  Sparkle,
  Monitor,
  HandHeart,
} from "lucide-react";
import toast from "react-hot-toast";

const Header = () => {
  const { auth, theme } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const userMenuRef = useRef(null);
  const themeMenuRef = useRef(null);
  const defaultProfilePic =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  // Navigation items
  const navigationItems = [
    { name: "Home", path: "/", icon: <Sparkle className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Notes", path: "/courses", icon: <BookOpen className="w-4 h-4" /> },
    {
      name: "Contributors",
      path: "/contributors-wall-of-fame",
      icon: <HandHeart className="w-4 h-4" />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (auth.user && auth.user._id) {
      fetch(`https://api-collegpt.vercel.app/view-profile/${auth.user._id}`)
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then((data) => setUserProfile(data))
        .catch((error) => console.error("Error:", error));
    }
  }, [auth.user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target)
      ) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    auth.logout();
    toast.success("Session ended successfully!");
    navigate("/login");
    setIsUserMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-white dark:bg-gray-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1 p-1.5 rounded-xl bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    location.pathname === item.path
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <button
                onClick={() => theme.setTheme("light")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "light"
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4 dark:text-white text-black" />
              </button>
              <button
                onClick={() => theme.setTheme("dark")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "dark"
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4 dark:text-white text-black" />
              </button>
              <button
                onClick={() => theme.setTheme("system")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "system"
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="System theme"
              >
                <Monitor className="w-4 h-4 dark:text-white text-black" />
              </button>
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <img
                  src={userProfile?.profilePic || defaultProfilePic}
                  alt="User"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300 hidden sm:block" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border border-gray-200/20 dark:border-gray-800/20 overflow-hidden">
                  {/* User Profile Section */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <img
                        src={userProfile?.profilePic || defaultProfilePic}
                        alt="User"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {userProfile?.name ||
                            (auth.user ? auth.user.name : "Guest")}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {auth.user ? auth.user.email : "Not logged in"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    {auth.isAuthenticated ? (
                      <>
                        <MenuButton
                          icon={<User className="w-4 h-4" />}
                          text="Profile"
                          onClick={() => {
                            navigate("/profile");
                            setIsUserMenuOpen(false);
                          }}
                        />
                      

                        <hr className="my-2 border-gray-200 dark:border-gray-800" />
                        <MenuButton
                          icon={<LogOut className="w-4 h-4" />}
                          text="Logout"
                          onClick={handleLogout}
                          className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        />
                      </>
                    ) : (
                      <>
                        <MenuButton
                          icon={<User className="w-4 h-4" />}
                          text="Login"
                          onClick={() => {
                            navigate("/login");
                            setIsUserMenuOpen(false);
                          }}
                        />
                        <MenuButton
                          icon={<BarChart className="w-4 h-4" />}
                          text="Register"
                          onClick={() => {
                            navigate("/register");
                            setIsUserMenuOpen(false);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide-in Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-[9999] w-[280px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                C
                <img src="/logo.svg" className="h-6 w-6" alt="ColleGPT Logo" />
                LLEGPT
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Summary */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src={userProfile?.profilePic || defaultProfilePic}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-white truncate">
                  {userProfile?.name || (auth.user ? auth.user.name : "Guest")}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {auth.user ? auth.user.email : "Not logged in"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="py-4 px-2 overflow-y-auto h-full">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg ${
                    location.pathname === item.path
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="p-1 rounded-md bg-white dark:bg-gray-800 shadow-sm mr-3">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Theme Switcher */}
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                Appearance
              </h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center">
                <button
                  onClick={() => theme.setTheme("light")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "light"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Sun className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    Light
                  </span>
                </button>
                <button
                  onClick={() => theme.setTheme("dark")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "dark"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Moon className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    Dark
                  </span>
                </button>
                <button
                  onClick={() => theme.setTheme("system")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "system"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Monitor className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    System
                  </span>
                </button>
              </div>
            </div>

            {/* Authentication Buttons */}
            <div className="mt-2 px-3 space-y-2">
              {auth.isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center justify-center gap-2 p-2 w-full rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 p-2 w-full rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 p-3 w-full rounded-lg bg-indigo-600 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center gap-2 p-3 w-full rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BarChart className="w-4 h-4" />
                    <span>Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[9998] bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

// Helper component for menu buttons
const MenuButton = ({ icon, text, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Header;
