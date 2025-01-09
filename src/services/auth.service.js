import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true // Important for cookies
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling auth errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const authService = {
  async register(userData) {
    const response = await axiosInstance.post('/api/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async login(email, password) {
    const response = await axiosInstance.post('/api/auth/login', { email, password });
    console.log(response);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response;
  },

  async logout() {
    await axiosInstance.get('/api/auth/logout');
    localStorage.removeItem('token');
  },

  async getCurrentUser() {
    const response = await axiosInstance.get('/api/auth/me');
    return response.data;
  }
};

export default authService; 