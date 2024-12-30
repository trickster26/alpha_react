import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function Audience() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const audiences = [
    {
      id: 1,
      name: 'Newsletter Subscribers',
      totalContacts: 1234,
      activeContacts: 1200,
      lastUpdated: '2024-03-15',
      description: 'Main newsletter subscription list',
      source: 'Website Form'
    },
    {
      id: 2,
      name: 'New Customers',
      totalContacts: 567,
      activeContacts: 560,
      lastUpdated: '2024-03-14',
      description: 'Customers from the last 30 days',
      source: 'CRM Import'
    }
  ];

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Audience Lists
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Manage your contact lists and segments
                  </p>
                </div>
                <Link
                  to="/dashboard/audience/new"
                  className="inline-flex items-center px-4 py-2 border border-transparent 
                           rounded-lg shadow-sm text-sm font-medium text-white 
                           bg-gradient-to-r from-cyan-500 to-blue-600 
                           hover:from-cyan-600 hover:to-blue-700"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create New List
                </Link>
              </div>

              {/* Search and Filters */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 
                             dark:border-neutral-600 bg-white dark:bg-neutral-800 
                             text-gray-900 dark:text-white"
                    placeholder="Search audiences..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Audience Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {audiences.map((audience) => (
                  <div
                    key={audience.id}
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm 
                             border border-gray-100 dark:border-neutral-700 p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {audience.name}
                      </h3>
                      <button className="text-gray-400 hover:text-gray-500">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {audience.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Contacts</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {audience.totalContacts.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Active</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {audience.activeContacts.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Source: {audience.source}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Updated {audience.lastUpdated}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Audience; 