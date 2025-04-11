import { Route, Routes } from "react-router-dom";
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

// Import styles
import "./App.css";

function App() {
  // Add this to force immediate theme application on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Force a style reset
    if (savedTheme === 'dark') {
      document.documentElement.style.colorScheme = 'dark';
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    console.log('Initial theme:', savedTheme, document.documentElement.classList);
  }, []);

  return (
    <AppProvider>
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
        </Route>
      </Routes>
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
    </AppProvider>
  );
}

export default App;
