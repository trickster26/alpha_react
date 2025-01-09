import React, { useState, useEffect } from 'react';
import dashboardService from '../../services/dashboard.service';
import { Link } from 'react-router-dom';

function CampaignsList() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const { data } = await dashboardService.getCampaignStats();
        setCampaigns(data.campaigns || []);
      } catch (error) {
        setError('Failed to load campaigns');
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="grid grid-cols-6 gap-4">
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
        <p className="text-red-400 text-center">{error}</p>
      </div>
    );
  }

  if (!campaigns.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-neutral-400 mb-4">No campaigns found</p>
        <Link
          to="/campaigns/new"
          className="text-blue-500 hover:text-blue-400"
        >
          Create your first campaign
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-neutral-400">
            <th className="pb-3">Name</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Sent</th>
            <th className="pb-3">Open Rate</th>
            <th className="pb-3">Click Rate</th>
            <th className="pb-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {campaigns.map((campaign) => (
            <CampaignRow key={campaign.id} campaign={campaign} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CampaignRow = ({ campaign }) => {
  const statusColors = {
    active: 'bg-green-500/20 text-green-500',
    draft: 'bg-neutral-500/20 text-neutral-400',
    scheduled: 'bg-blue-500/20 text-blue-500',
    completed: 'bg-purple-500/20 text-purple-500'
  };

  return (
    <tr>
      <td className="py-3">
        <span className="text-gray-900 dark:text-white">{campaign.name}</span>
      </td>
      <td>
        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${statusColors[campaign.status]}`}>
          {campaign.status}
        </span>
      </td>
      <td className="text-gray-500 dark:text-neutral-400">{campaign.sent.toLocaleString()}</td>
      <td className="text-gray-500 dark:text-neutral-400">{campaign.openRate}</td>
      <td className="text-gray-500 dark:text-neutral-400">{campaign.clickRate}</td>
      <td>
        <Link
          to={`/campaigns/${campaign.id}`}
          className="text-blue-500 hover:text-blue-400 mr-3"
        >
          Edit
        </Link>
        <button className="text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300">
          View
        </button>
      </td>
    </tr>
  );
};

export default CampaignsList; 