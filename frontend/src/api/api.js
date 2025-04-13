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
  SUBMIT_CONTRIBUTION : `${BASE_URL}/contribute`,
  
  // User profile endpoints
  VIEW_PROFILE: (userId) => `${BASE_URL}/view-profile/${userId}`,
  
  // PDF and course-related endpoints
  GET_PDF_BY_CODE: (code) => `${BASE_URL}/pdf-forms/${code}`,
  GET_ALL_PDF_FORMS: `${BASE_URL}/pdf-form`,
  SUBMIT_DOUBT: `${BASE_URL}/doubt`,
  GET_ALL_SEMESTERS: `${BASE_URL}/semesters`,
  GET_SEMESTER: (semesterId) => `${BASE_URL}/semester/${semesterId}`,
  GET_SUBJECT: (semesterId, subjectId) => `${BASE_URL}/semester/${semesterId}/subject/${subjectId}`,
  GET_UNIT: (semesterId, subjectId, unitId) => `${BASE_URL}/semester/${semesterId}/subject/${subjectId}/unit/${unitId}`
  
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

// Function to parse PDF code and get semester, subject, and unit
export const parsePdfCode = (code) => {
  if (!code || typeof code !== 'string') {
    return null;
  }
  
  const codeString = code.toString();
  
  // For codes like 611 (6th sem, 1st subject, 1st unit)
  if (codeString.length === 3) {
    return {
      semester: parseInt(codeString[0]),
      subject: parseInt(codeString[1]),
      unit: parseInt(codeString[2])
    };
  }
  
  // For codes like 6110 (6th sem, 1st subject, 10th unit)
  if (codeString.length === 4) {
    return {
      semester: parseInt(codeString[0]),
      subject: parseInt(codeString[1]),
      unit: parseInt(codeString.substring(2))
    };
  }
  
  return null;
};

// Function to generate a PDF code from semester, subject, and unit
export const generatePdfCode = (semester, subject, unit) => {
  if (unit < 10) {
    return `${semester}${subject}${unit}`;
  } else {
    return `${semester}${subject}${unit}`;
  }
};

// Function to fetch PDF data based on semester, subject, and unit
export const fetchPdfByUnit = async (semesterId, subjectId, unitId) => {
  const code = generatePdfCode(semesterId, subjectId, unitId);
  try {
    const data = await fetchWithAuth(ENDPOINTS.GET_PDF_BY_CODE(code));
    return data;
  } catch (error) {
    console.error('Error fetching PDF for unit:', error);
    throw error;
  }
};