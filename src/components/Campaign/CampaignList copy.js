import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/campaigns');
        if (response.data.success) {
          setCampaigns(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleSendCampaign = async (campaignId) => {
    try {
      await axios.post(`/api/campaigns/send/${campaignId}`);
      // Refresh the campaign list
      window.location.reload();
    } catch (error) {
      console.error('Error sending campaign:', error);
    }
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Campaigns</h4>
          <Link to="/admin/campaigns/create" className="btn btn-primary">
            Create New Campaign
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Scheduled Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map(campaign => (
                  <tr key={campaign.id}>
                    <td>{campaign.name}</td>
                    <td>{campaign.subject}</td>
                    <td>{campaign.status}</td>
                    <td>{campaign.scheduled_time}</td>
                    <td>
                      <Link 
                        to={`/admin/campaigns/stats/${campaign.id}`}
                        className="btn btn-info btn-sm mr-2"
                      >
                        View Stats
                      </Link>
                      {campaign.status === 'draft' && (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleSendCampaign(campaign.id)}
                        >
                          Send Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignList; 