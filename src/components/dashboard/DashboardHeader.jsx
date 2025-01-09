import React from 'react';
import ThemeToggle from '../common/ThemeToggle';

function DashboardHeader({ onMenuClick }) {
  return (
    <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
      <div className="h-16 px-4 flex items-center justify-between">
        <button
          className="lg:hidden text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white"
          onClick={onMenuClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search */}
        <div className="flex-1 max-w-lg ml-4">
          <input
            type="search"
            className="w-full px-4 py-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Right side items */}
        <div className="ml-4 flex items-center space-x-4">
          { /*<ThemeToggle /> */ }
          <button className="flex items-center text-sm text-neutral-700 dark:text-white">
            <img
              className="h-8 w-8 rounded-full"
              src="https://avatar.iran.liara.run/public"
              alt="User avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader; 