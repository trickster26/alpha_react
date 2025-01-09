import React, { useState, useEffect } from 'react';
import dashboardService from '../../services/dashboard.service';
import { formatDistanceToNow } from 'date-fns';

function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const { data } = await dashboardService.getRecentActivity();
        setActivities(data.activities || []);
      } catch (error) {
        setError('Failed to load recent activities');
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
    const interval = setInterval(fetchActivities, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6">
        <div className="h-6 bg-neutral-700 rounded w-32 mb-6 animate-pulse"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start space-x-3 mb-4">
            <div className="animate-pulse">
              <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
            </div>
            <div className="flex-1 animate-pulse">
              <div className="h-4 bg-neutral-700 rounded w-24 mb-2"></div>
              <div className="h-3 bg-neutral-700 rounded w-48"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6">
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-400 text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (!activities.length) {
    return (
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <div className="text-center py-8">
          <p className="text-neutral-400">No recent activity to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 rounded-xl border border-neutral-700">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ActivityItem = ({ activity }) => {
  const getActivityIcon = (type) => {
    const icons = {
      email_opened: { emoji: '📧', bgColor: 'bg-blue-500' },
      subscription: { emoji: '✨', bgColor: 'bg-green-500' },
      purchase: { emoji: '💰', bgColor: 'bg-purple-500' },
      email_clicked: { emoji: '👆', bgColor: 'bg-yellow-500' }
    };
    return icons[type] || { emoji: '📌', bgColor: 'bg-neutral-500' };
  };

  const { emoji, bgColor } = getActivityIcon(activity.type);

  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <span className={`p-2 ${bgColor} rounded-full text-white`}>
          {emoji}
        </span>
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
        <p className="text-xs text-neutral-500">
          {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default RecentActivity; 