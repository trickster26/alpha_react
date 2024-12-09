import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CampaignCreate = () => {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: '',
    subject: '',
    body: '',
    scheduledTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/campaigns/create', campaign);
      if (response.data.success) {
        navigate('/admin/campaigns');
      }
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Create New Campaign</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Campaign Name</label>
              <input
                type="text"
                className="form-control"
                value={campaign.name}
                onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                className="form-control"
                value={campaign.subject}
                onChange={(e) => setCampaign({...campaign, subject: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Body</label>
              <textarea
                className="form-control"
                rows="5"
                value={campaign.body}
                onChange={(e) => setCampaign({...campaign, body: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Schedule Time (Optional)</label>
              <input
                type="datetime-local"
                className="form-control"
                value={campaign.scheduledTime}
                onChange={(e) => setCampaign({...campaign, scheduledTime: e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignCreate; 