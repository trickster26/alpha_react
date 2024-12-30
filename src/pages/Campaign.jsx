import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';

function Campaign() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedType, setSelectedType] = useState('All Types');
  const [dateRange, setDateRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
              {/* Header */}
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Campaigns
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                    Manage your email and SMS campaigns
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Create Campaign
                </button>
              </div>

              {/* Filters */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Status</label>
                    <select 
                      className="w-full border border-neutral-300 rounded-md px-3 py-2"
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
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Type</label>
                    <select 
                      className="w-full border border-neutral-300 rounded-md px-3 py-2"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option>All Types</option>
                      <option>Email</option>
                      <option>SMS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Date Range</label>
                    <input 
                      type="date" 
                      className="w-full border border-neutral-300 rounded-md px-3 py-2"
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Search</label>
                    <input 
                      type="text" 
                      placeholder="Search campaigns..."
                      className="w-full border border-neutral-300 rounded-md px-3 py-2"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Campaigns Table */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Campaign Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Sent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Open Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Click Rate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Revenue
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id}>
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

                {/* Pagination */}
                <div className="bg-white px-4 py-3 border-t border-neutral-200 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-700">
                      Showing 1 to 2 of 2 results
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
                        Previous
                      </button>
                      <span className="px-3 py-1 bg-neutral-900 text-white rounded-md">1</span>
                      <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-700 hover:bg-neutral-50">
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

const campaigns = [
  {
    id: 1,
    name: 'Summer Collection Launch',
    type: 'Email',
    status: 'Active',
    sent: '24,521',
    openRate: '28.4%',
    clickRate: '12.1%',
    revenue: '$4,521'
  },
  {
    id: 2,
    name: 'Flash Sale Alert',
    type: 'SMS',
    status: 'Draft',
    sent: '-',
    openRate: '-',
    clickRate: '-',
    revenue: '-'
  }
];

export default Campaign; 