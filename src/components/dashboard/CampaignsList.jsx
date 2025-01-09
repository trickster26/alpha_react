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
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 bg-neutral-700 rounded w-32 animate-pulse"></div>
          <div className="h-8 bg-neutral-700 rounded w-24 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-6 gap-4">
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
              <div className="h-8 bg-neutral-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
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

  if (!campaigns.length) {
    return (
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Campaigns</h2>
          <Link
            to="/campaigns/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            New Campaign
          </Link>
        </div>
        <div className="text-center py-8">
          <p className="text-neutral-400 mb-4">No campaigns found</p>
          <Link
            to="/campaigns/new"
            className="text-blue-500 hover:text-blue-400"
          >
            Create your first campaign
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 rounded-xl border border-neutral-700">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Campaigns</h2>
          <Link
            to="/campaigns/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            New Campaign
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                <th className="pb-3">Name</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Sent</th>
                <th className="pb-3">Open Rate</th>
                <th className="pb-3">Click Rate</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              {campaigns.map((campaign) => (
                <CampaignRow key={campaign.id} campaign={campaign} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
        <span className="text-white">{campaign.name}</span>
      </td>
      <td>
        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${statusColors[campaign.status]}`}>
          {campaign.status}
        </span>
      </td>
      <td className="text-neutral-400">{campaign.sent.toLocaleString()}</td>
      <td className="text-neutral-400">{campaign.openRate}</td>
      <td className="text-neutral-400">{campaign.clickRate}</td>
      <td className="text-neutral-400">
        <Link
          to={`/campaigns/${campaign.id}`}
          className="text-blue-500 hover:text-blue-400 mr-3"
        >
          Edit
        </Link>
        <button className="text-neutral-400 hover:text-neutral-300">
          View
        </button>
      </td>
    </tr>
  );
};

export default CampaignsList; 