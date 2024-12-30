import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import AnalyticsMetrics from '../components/analytics/AnalyticsMetrics';
import GrowthChart from '../components/analytics/GrowthChart';
import EngagementStats from '../components/analytics/EngagementStats';
import DemographicsChart from '../components/analytics/DemographicsChart';
import AudienceSegments from '../components/analytics/AudienceSegments';

function Analytics() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('30d');

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
                    Audience Analytics
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                    Track your audience growth and engagement
                  </p>
                </div>
                
                {/* Time Range Selector */}
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 text-neutral-700 dark:text-neutral-200"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="12m">Last 12 months</option>
                </select>
              </div>

              {/* Analytics Metrics */}
              <AnalyticsMetrics />

              {/* Growth Chart */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Audience Growth
                </h2>
                <GrowthChart timeRange={timeRange} />
              </div>

              {/* Audience Segments */}
              <AudienceSegments />

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Engagement Stats */}
                <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Engagement Metrics
                  </h2>
                  <EngagementStats />
                </div>

                {/* Demographics */}
                <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                    Demographics
                  </h2>
                  <DemographicsChart />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Analytics; 