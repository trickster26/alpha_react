import React from 'react';

function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'email_opened',
      user: 'John Doe',
      email: 'Welcome Series #1',
      time: '2 minutes ago'
    },
    {
      id: 2,
      type: 'subscription',
      user: 'Sarah Smith',
      email: 'Newsletter',
      time: '5 minutes ago'
    },
    {
      id: 3,
      type: 'purchase',
      user: 'Mike Johnson',
      amount: '$129.99',
      time: '10 minutes ago'
    },
    {
      id: 4,
      type: 'email_clicked',
      user: 'Emily Brown',
      email: 'Product Launch',
      time: '15 minutes ago'
    }
  ];

  return (
    <div className="bg-neutral-800 rounded-xl border border-neutral-700">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {activity.type === 'email_opened' && (
                  <span className="p-2 bg-blue-500 rounded-full text-white">
                    📧
                  </span>
                )}
                {activity.type === 'subscription' && (
                  <span className="p-2 bg-green-500 rounded-full text-white">
                    ✨
                  </span>
                )}
                {activity.type === 'purchase' && (
                  <span className="p-2 bg-purple-500 rounded-full text-white">
                    💰
                  </span>
                )}
                {activity.type === 'email_clicked' && (
                  <span className="p-2 bg-yellow-500 rounded-full text-white">
                    👆
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">
                  {activity.user}
                </p>
                <p className="text-sm text-neutral-400">
                  {activity.type === 'purchase'
                    ? `Made a purchase of ${activity.amount}`
                    : `${activity.type.replace('_', ' ')} ${activity.email}`}
                </p>
                <p className="text-xs text-neutral-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity; 