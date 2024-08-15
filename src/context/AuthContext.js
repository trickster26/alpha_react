import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_ROUTE}/api/auth/login`, { email, password });
      const token = response.data.token;
      setAuth(token);
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (username, email, password, companyName) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_ROUTE}/api/auth/register`, { username, email, password, companyName });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
