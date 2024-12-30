import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Link } from 'react-router-dom';

function Campaign() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedType, setSelectedType] = useState('All Types');
  const [dateRange, setDateRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Collection Launch',
      type: 'Email',
      status: 'Active',
      sent: '24,521',
      openRate: '28.4%',
      clickRate: '12.1%',
      revenue: '$4,521',
      description: 'Promotional campaign for new summer products',
      lastModified: '2024-03-15'
    },
    {
      id: 2,
      name: 'Flash Sale Alert',
      type: 'SMS',
      status: 'Draft',
      sent: '-',
      openRate: '-',
      clickRate: '-',
      revenue: '-',
      description: 'Limited time offer for premium customers',
      lastModified: '2024-03-14'
    }
  ];

  const statusColors = {
    'Active': 'bg-green-100 text-green-800 border-green-200',
    'Draft': 'bg-gray-100 text-gray-800 border-gray-200',
    'Paused': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Completed': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          {/* Campaign Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-7xl mx-auto">
              {/* Header with Stats */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Email Campaigns
                    </h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Create and manage your email marketing campaigns
                    </p>
                  </div>
                  <Link
                    to="/dashboard/campaigns/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent 
                             rounded-lg shadow-sm text-sm font-medium text-white 
                             bg-gradient-to-r from-cyan-500 to-blue-600 
                             hover:from-cyan-600 hover:to-blue-700"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Campaign
                  </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: 'Total Campaigns',
                      value: campaigns.length,
                      icon: '📊'
                    },
                    {
                      title: 'Active Campaigns',
                      value: campaigns.filter(c => c.status === 'Active').length,
                      icon: '✨'
                    },
                    {
                      title: 'Total Sent',
                      value: '24,521',
                      icon: '📧'
                    },
                    {
                      title: 'Average Open Rate',
                      value: '28.4%',
                      icon: '📈'
                    }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-neutral-800 overflow-hidden rounded-lg 
                               shadow-sm border border-gray-100 dark:border-neutral-700"
                    >
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <span className="text-2xl">{stat.icon}</span>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                                {stat.title}
                              </dt>
                              <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                                  {stat.value}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    <select 
                      className="w-full border border-gray-300 dark:border-neutral-600 rounded-md 
                               px-3 py-2 bg-white dark:bg-neutral-700 dark:text-white"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Draft</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Type
                    </label>
                    <select 
                      className="w-full border border-gray-300 dark:border-neutral-600 rounded-md 
                               px-3 py-2 bg-white dark:bg-neutral-700 dark:text-white"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option>All Types</option>
                      <option>Email</option>
                      <option>SMS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Date Range
                    </label>
                    <input 
                      type="date" 
                      className="w-full border border-gray-300 dark:border-neutral-600 rounded-md 
                               px-3 py-2 bg-white dark:bg-neutral-700 dark:text-white"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Search
                    </label>
                    <input 
                      type="text" 
                      placeholder="Search campaigns..."
                      className="w-full border border-gray-300 dark:border-neutral-600 rounded-md 
                               px-3 py-2 bg-white dark:bg-neutral-700 dark:text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Campaigns List */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-700">
                      <tr>
                        {[
                          'Campaign Name',
                          'Type',
                          'Status',
                          'Sent',
                          'Open Rate',
                          'Click Rate',
                          'Revenue',
                          'Actions'
                        ].map((header, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 
                                     dark:text-gray-400 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
                      {campaigns.map((campaign) => (
                        <tr key={campaign.id} className="hover:bg-gray-50 dark:hover:bg-neutral-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className={`mr-2 ${campaign.type === 'Email' ? 'text-blue-500' : 'text-purple-500'}`}>
                                {campaign.type === 'Email' ? '✉️' : '📱'}
                              </span>
                              <span className="text-neutral-900">{campaign.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            {campaign.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              campaign.status === 'Active' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            {campaign.sent}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            {campaign.openRate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            {campaign.clickRate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            {campaign.revenue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-neutral-500">
                            <button className="text-neutral-400 hover:text-neutral-500">
                              •••
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="bg-white dark:bg-neutral-800 px-4 py-3 border-t 
                              border-gray-200 dark:border-neutral-700 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Showing 1 to {campaigns.length} of {campaigns.length} results
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 border border-gray-300 dark:border-neutral-600 
                                     rounded-md text-sm text-gray-700 dark:text-gray-300 
                                     hover:bg-gray-50 dark:hover:bg-neutral-700">
                        Previous
                      </button>
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded-md">1</span>
                      <button className="px-3 py-1 border border-gray-300 dark:border-neutral-600 
                                     rounded-md text-sm text-gray-700 dark:text-gray-300 
                                     hover:bg-gray-50 dark:hover:bg-neutral-700">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Campaign; 