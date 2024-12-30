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
      <div className="h-screen bg-neutral-900 flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto bg-neutral-900 p-4">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Analytics Overview */}
              <AnalyticsOverview />

              {/* Recent Activity and Campaigns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentActivity />
                <CampaignsList />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 