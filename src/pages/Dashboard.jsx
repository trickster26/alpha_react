import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import AnalyticsOverview from '../components/dashboard/AnalyticsOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import CampaignsList from '../components/dashboard/CampaignsList';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <div className="h-screen bg-white dark:bg-neutral-900 flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-neutral-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Analytics Overview */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Dashboard Overview
                  </h2>
                  <AnalyticsOverview />
                </div>
              </div>

              {/* Recent Activity and Campaigns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                      Recent Activity
                    </h2>
                    <RecentActivity />
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                      Recent Campaigns
                    </h2>
                    <CampaignsList />
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

export default Dashboard; 