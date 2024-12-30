import React from 'react';

function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
        <h3 className="text-sm font-medium text-neutral-400">Total Subscribers</h3>
        <p className="mt-2 text-3xl font-bold text-white">12,345</p>
        <div className="mt-2 flex items-center text-sm text-green-500">
          <span>↑ 12%</span>
          <span className="ml-2 text-neutral-400">vs last month</span>
        </div>
      </div>

      <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
        <h3 className="text-sm font-medium text-neutral-400">Open Rate</h3>
        <p className="mt-2 text-3xl font-bold text-white">24.8%</p>
        <div className="mt-2 flex items-center text-sm text-green-500">
          <span>↑ 3.2%</span>
          <span className="ml-2 text-neutral-400">vs last month</span>
        </div>
      </div>

      <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
        <h3 className="text-sm font-medium text-neutral-400">Click Rate</h3>
        <p className="mt-2 text-3xl font-bold text-white">4.2%</p>
        <div className="mt-2 flex items-center text-sm text-red-500">
          <span>↓ 1.1%</span>
          <span className="ml-2 text-neutral-400">vs last month</span>
        </div>
      </div>

      <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
        <h3 className="text-sm font-medium text-neutral-400">Revenue</h3>
        <p className="mt-2 text-3xl font-bold text-white">$12,543</p>
        <div className="mt-2 flex items-center text-sm text-green-500">
          <span>↑ 8.3%</span>
          <span className="ml-2 text-neutral-400">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsOverview; 