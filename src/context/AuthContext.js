import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setAuth(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (username, email, password, companyName) => {
    try {
      await axios.post('/api/auth/register', { username, email, password, companyName });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setAuth(token);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
