import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import AutomationList from '../components/automation/AutomationList';
import AutomationStats from '../components/automation/AutomationStats';

function Automation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Automation
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                    Create and manage your automated workflows
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Create Workflow
                </button>
              </div>

              {/* Stats Overview */}
              <AutomationStats />

              {/* View Toggle and Filters */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-lg ${
                      view === 'grid'
                        ? 'bg-neutral-100 dark:bg-neutral-700'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-lg ${
                      view === 'list'
                        ? 'bg-neutral-100 dark:bg-neutral-700'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <select className="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Paused</option>
                  </select>
                  <select className="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200">
                    <option>All Types</option>
                    <option>Welcome Series</option>
                    <option>Abandoned Cart</option>
                    <option>Re-engagement</option>
                  </select>
                </div>
              </div>

              {/* Automation List */}
              <AutomationList view={view} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Automation; 