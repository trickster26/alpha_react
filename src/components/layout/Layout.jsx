import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (isDashboard) {
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