import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, { email, password });
      setAuth(response.data.token);
      localStorage.setItem('token', response.data.token);
      setError(''); // Clear any previous errors
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password, companyName) => {
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, { username, email, password, companyName });
      setError(''); // Clear any previous errors
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during registration');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setAuth(token);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, register, loading, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};
