import React, { useState, useEffect } from 'react';
import dashboardService from '../../services/dashboard.service';

function AnalyticsOverview() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data } = await dashboardService.getDashboardData();
        setAnalytics(data.analytics);
      } catch (error) {
        setError('Failed to load analytics data');
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
            <div className="animate-pulse">
              <div className="h-4 rounded w-24 mb-4 bg-gray-200 dark:bg-neutral-700"></div>
              <div className="h-8 rounded w-32 mb-3 bg-gray-200 dark:bg-neutral-700"></div>
              <div className="h-3 rounded w-20 bg-gray-200 dark:bg-neutral-700"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4">
        <p className="text-red-400 text-center">{error}</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-6">
        <p className="text-gray-500 dark:text-neutral-400 text-center">No analytics data available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <AnalyticCard
        title="Total Subscribers"
        value={analytics.subscribers.total.toLocaleString()}
        change={analytics.subscribers.growth}
      />
      <AnalyticCard
        title="Open Rate"
        value={`${analytics.openRate.rate}%`}
        change={analytics.openRate.change}
      />
      <AnalyticCard
        title="Click Rate"
        value={`${analytics.clickRate.rate}%`}
        change={analytics.clickRate.change}
      />
      <AnalyticCard
        title="Revenue"
        value={`$${analytics.revenue.total.toLocaleString()}`}
        change={analytics.revenue.growth}
      />
    </div>
  );
}

const AnalyticCard = ({ title, value, change }) => (
  <div className="p-6 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
    <h3 className="text-sm font-medium text-gray-500 dark:text-neutral-400">
      {title}
    </h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
      {value}
    </p>
    <div className={`mt-2 flex items-center text-sm ${
      change >= 0 ? 'text-green-500' : 'text-red-500'
    }`}>
      <span>{change >= 0 ? '↑' : '↓'} {Math.abs(change)}%</span>
      <span className="ml-2 text-gray-500 dark:text-neutral-400">
        vs last month
      </span>
    </div>
  </div>
);

export default AnalyticsOverview; 