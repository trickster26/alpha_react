import React from 'react';

function AutomationStats() {
  const stats = [
    {
      label: 'Active Workflows',
      value: '12',
      change: '+2',
      changeType: 'increase'
    },
    {
      label: 'Total Contacts',
      value: '45,892',
      change: '+1,234',
      changeType: 'increase'
    },
    {
      label: 'Conversion Rate',
      value: '24.8%',
      change: '-2.1%',
      changeType: 'decrease'
    },
    {
      label: 'Revenue Generated',
      value: '$12,543',
      change: '+$1,123',
      changeType: 'increase'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
        >
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {stat.label}
          </h3>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
            {stat.value}
          </p>
          <div className={`mt-2 flex items-center text-sm ${
            stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
          }`}>
            <span>{stat.change}</span>
            <span className="ml-2 text-neutral-500 dark:text-neutral-400">
              vs last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutomationStats; 