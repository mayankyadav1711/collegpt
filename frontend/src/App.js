import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import { useEffect } from "react";

// Import pages
import Home from "./pages/common/Home";
import About from "./pages/common/About";
import Contact from "./pages/common/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import OTP from "./pages/auth/OTP";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Profile from "./pages/auth/Profile";
import SubjectDetails from "./components/SubjectDetails";

// Import styles
import "./App.css";
import Courses from "./pages/common/Courses";
import UnitContent from "./components/UnitContent";

// ScrollToTop function component implemented directly
function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
         {/* Subject and Unit routes */}
         <Route path="/semester/:semesterId/:subjectId" element={<SubjectDetails />} />
{/* Unit routes - multiple patterns */}
<Route path="/semester/:semesterId/:subjectId/unit/:unitId" element={<UnitContent />} />
          <Route path="/semester/:semesterId/subject/:subjectId/unit/:unitId" element={<UnitContent />} />          

          
          {/* Fallback for 404 */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Sorry, the page you are looking for doesn't exist or has been moved.
              </p>
              <a href="/" className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                Go back to home
              </a>
            </div>
          } />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{ zIndex: 9999 }}
          toastOptions={{
            duration: 5000,
            style: {
              background: "white",
              color: "black",
              fontSize: "16px",
            },
            success: {
              duration: 3000,
            },
          }}
        />
      </Router>
    </AppProvider>
  );
}

export default App;