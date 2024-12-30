import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          {/* Add more footer sections as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 