import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-neutral-800 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 z-50`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-neutral-700">
            <Link to="/" className="text-white text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center px-2 py-2 text-neutral-300 hover:bg-neutral-700 rounded-lg"
            >
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/campaigns"
              className="flex items-center px-2 py-2 text-neutral-300 hover:bg-neutral-700 rounded-lg"
            >
              <span>Campaigns</span>
            </Link>
            <Link
              to="/dashboard/analytics"
              className="flex items-center px-2 py-2 text-neutral-300 hover:bg-neutral-700 rounded-lg"
            >
              <span>Analytics</span>
            </Link>
            <Link
              to="/dashboard/contacts"
              className="flex items-center px-2 py-2 text-neutral-300 hover:bg-neutral-700 rounded-lg"
            >
              <span>Contacts</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar; 