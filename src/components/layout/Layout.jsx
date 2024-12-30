import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/dashboard');
  
  // List of paths where we don't want the header and footer
  const authPages = [
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password'
  ];

  // Check if current path is in authPages
  const isAuthPage = authPages.includes(location.pathname);

  if (isAuthPage || isDashboard) {
    return children;
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout; 