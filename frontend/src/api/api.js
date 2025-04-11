// Base URL for API requests
export const BASE_URL = "http://localhost:5000";

// Auth-related endpoints
export const ENDPOINTS = {
  // Auth endpoints
  SIGN_UP: `${BASE_URL}/signup`,
  SIGN_IN: `${BASE_URL}/signin`,
  VERIFY_OTP: `${BASE_URL}/verify-otp`,
  RESET_PASSWORD: `${BASE_URL}/reset-password`,
  NEW_PASSWORD: `${BASE_URL}/new-password`,
  
  // User profile endpoints
  VIEW_PROFILE: (userId) => `${BASE_URL}/view-profile/${userId}`
};

// Helper function to make authenticated requests
export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  try {
    const response = await fetch(url, {
      ...options,
      headers
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};