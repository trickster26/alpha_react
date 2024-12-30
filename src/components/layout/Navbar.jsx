import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Logo
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/documentation" className="text-neutral-300 hover:text-white">
              Documentation
            </Link>
            <Link to="/pricing" className="text-neutral-300 hover:text-white">
              Pricing
            </Link>
            <Link to="/contact" className="text-neutral-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 