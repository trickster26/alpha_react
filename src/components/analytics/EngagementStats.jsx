import React from 'react';

function EngagementStats() {
  const stats = [
    {
      metric: 'Email Open Rate',
      value: '24.8%',
      trend: 'up',
      details: [
        { label: 'Desktop', value: '62%' },
        { label: 'Mobile', value: '38%' }
      ]
    },
    {
      metric: 'Click-through Rate',
      value: '4.2%',
      trend: 'up',
      details: [
        { label: 'Links', value: '75%' },
        { label: 'Images', value: '25%' }
      ]
    },
    {
      metric: 'Unsubscribe Rate',
      value: '0.8%',
      trend: 'down',
      details: [
        { label: 'Promotional', value: '65%' },
        { label: 'Newsletter', value: '35%' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {stats.map((stat, index) => (
        <div key={index} className="border-b border-neutral-200 dark:border-neutral-700 pb-4 last:border-0 last:pb-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-neutral-900 dark:text-white font-medium">
              {stat.metric}
            </h3>
            <span className="text-2xl font-bold text-neutral-900 dark:text-white">
              {stat.value}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stat.details.map((detail, idx) => (
              <div key={idx} className="text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">
                  {detail.label}:
                </span>
                <span className="ml-2 text-neutral-900 dark:text-white font-medium">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EngagementStats; 