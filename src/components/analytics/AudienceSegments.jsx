import React from 'react';

function AudienceSegments() {
  const segments = [
    {
      name: 'High Value Customers',
      count: '2,345',
      growth: '+15%',
      criteria: 'Purchase value > $500',
      engagement: '45%',
      color: 'blue'
    },
    {
      name: 'Newsletter Subscribers',
      count: '12,678',
      growth: '+8%',
      criteria: 'Subscribed to newsletter',
      engagement: '32%',
      color: 'green'
    },
    {
      name: 'Inactive Users',
      count: '3,421',
      growth: '-5%',
      criteria: 'No activity > 30 days',
      engagement: '12%',
      color: 'red'
    },
    {
      name: 'New Customers',
      count: '892',
      growth: '+25%',
      criteria: 'First purchase < 7 days',
      engagement: '38%',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Audience Segments
        </h2>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Create Segment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {segments.map((segment, index) => (
          <div 
            key={index}
            className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-neutral-900 dark:text-white font-medium">
                  {segment.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {segment.criteria}
                </p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                segment.growth.startsWith('+') 
                  ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                  : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
              }`}>
                {segment.growth}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Subscribers
                </p>
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {segment.count}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Engagement Rate
                </p>
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {segment.engagement}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    segment.color === 'blue' ? 'bg-blue-600' :
                    segment.color === 'green' ? 'bg-green-600' :
                    segment.color === 'red' ? 'bg-red-600' :
                    'bg-purple-600'
                  }`}
                  style={{ width: segment.engagement }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex space-x-2">
              <button className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200">
                View Details
              </button>
              <span className="text-neutral-300 dark:text-neutral-600">|</span>
              <button className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudienceSegments; 