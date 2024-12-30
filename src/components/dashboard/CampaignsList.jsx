import React from 'react';

function CampaignsList() {
  const campaigns = [
    {
      id: 1,
      name: 'Welcome Series',
      status: 'active',
      sent: 1234,
      openRate: '45.2%',
      clickRate: '12.8%'
    },
    {
      id: 2,
      name: 'Abandoned Cart',
      status: 'active',
      sent: 567,
      openRate: '38.9%',
      clickRate: '15.3%'
    },
    {
      id: 3,
      name: 'Holiday Special',
      status: 'draft',
      sent: 0,
      openRate: '0%',
      clickRate: '0%'
    },
    {
      id: 4,
      name: 'Product Launch',
      status: 'scheduled',
      sent: 0,
      openRate: '0%',
      clickRate: '0%'
    }
  ];

  return (
    <div className="bg-neutral-800 rounded-xl border border-neutral-700">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Campaigns</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            New Campaign
          </button>
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
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-700">
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="py-3">
                    <span className="text-white">{campaign.name}</span>
                  </td>
                  <td>
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      campaign.status === 'active'
                        ? 'bg-green-500/20 text-green-500'
                        : campaign.status === 'draft'
                        ? 'bg-neutral-500/20 text-neutral-400'
                        : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="text-neutral-400">{campaign.sent}</td>
                  <td className="text-neutral-400">{campaign.openRate}</td>
                  <td className="text-neutral-400">{campaign.clickRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CampaignsList; 