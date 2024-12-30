import React from 'react';

function AnalyticsMetrics() {
  const metrics = [
    {
      label: 'Total Subscribers',
      value: '45,267',
      change: '+12.5%',
      isPositive: true
    },
    {
      label: 'Active Subscribers',
      value: '38,892',
      change: '+8.2%',
      isPositive: true
    },
    {
      label: 'Avg. Open Rate',
      value: '24.8%',
      change: '-2.1%',
      isPositive: false
    },
    {
      label: 'Avg. Click Rate',
      value: '4.2%',
      change: '+0.8%',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
        >
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {metric.label}
          </h3>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
            {metric.value}
          </p>
          <div className={`mt-2 flex items-center text-sm ${
            metric.isPositive ? 'text-green-500' : 'text-red-500'
          }`}>
            <span>{metric.change}</span>
            <span className="ml-2 text-neutral-500 dark:text-neutral-400">
              vs last period
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsMetrics; 