import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initialize context
const AppContext = createContext();

// Set initial theme based on localStorage or system preference
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // If no theme is saved, default to 'system'
    return 'system';
  }
  return 'light'; // Default for SSR
};

// Get system theme preference
const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Resolve theme - returns actual theme (light/dark) based on theme setting (light/dark/system)
const resolveTheme = (themeState) => {
  if (themeState === 'system') {
    return getSystemTheme();
  }
  return themeState;
};

// Initial states
const initialAuthState = null;
const initialThemeState = getInitialTheme();

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER':
      return action.payload;
    case 'CLEAR':
      return null;
    case 'UPDATE_PROFILE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // If current theme is system, toggle between light and dark
      if (state === 'system') {
        const systemTheme = getSystemTheme();
        const newTheme = systemTheme === 'light' ? 'dark' : 'light';
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('theme', newTheme);
        }
        return newTheme;
      } else {
        // Cycle through light -> dark -> system
        const newTheme = state === 'light' ? 'dark' : state === 'dark' ? 'system' : 'light';
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('theme', newTheme);
        }
        return newTheme;
      }
    case 'SET_THEME':
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', action.payload);
      }
      return action.payload;
    default:
      return state;
  }
};

// Provider component
export const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const resolvedTheme = resolveTheme(themeState);

  // Load user from localStorage on app initialization
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      if (user) {
        authDispatch({ type: 'USER', payload: user });
      }
    }
  }, []);

  // Apply theme class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // For system theme, listen to media query changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const applyTheme = () => {
        const currentResolvedTheme = resolveTheme(themeState);
        
        if (currentResolvedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Debug log
        console.log('Theme setting:', themeState);
        console.log('Resolved theme:', currentResolvedTheme);
        console.log('Dark class present:', document.documentElement.classList.contains('dark'));
      };

      // Apply theme initially
      applyTheme();
      
      // Set up listener for system preference changes (only matters if theme is 'system')
      const handleSystemThemeChange = () => {
        if (themeState === 'system') {
          applyTheme();
        }
      };
      
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, [themeState]);

  // Toggle theme function
  const toggleTheme = () => {
    console.log('Toggle theme called, current theme:', themeState);
    themeDispatch({ type: 'TOGGLE_THEME' });
  };

  // Set specific theme
  const setTheme = (theme) => {
    if (['light', 'dark', 'system'].includes(theme)) {
      themeDispatch({ type: 'SET_THEME', payload: theme });
    }
  };

  // Auth actions
  const login = (userData, token) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
    }
    authDispatch({ type: 'USER', payload: userData });
  };

  const logout = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    authDispatch({ type: 'CLEAR' });
  };

  const updateProfile = (updatedData) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = { ...currentUser, ...updatedData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    authDispatch({ type: 'UPDATE_PROFILE', payload: updatedData });
  };

  // Context value
  const value = {
    auth: {
      user: authState,
      login,
      logout,
      updateProfile,
      isAuthenticated: !!authState
    },
    theme: {
      current: themeState,         // 'light', 'dark', or 'system'
      resolved: resolvedTheme,     // always 'light' or 'dark' (what's actually applied)
      toggleTheme,
      setTheme,
      isDark: resolvedTheme === 'dark'
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};