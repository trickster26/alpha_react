import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { campaignService, customerService } from '../../services/api';

const CampaignCreate = () => {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: '',
    subject: '',
    body: '',
    scheduledTime: ''
  });
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await customerService.getCustomers();
      setCustomers(response.data.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError('Failed to load customers');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Create campaign
      const campaignResponse = await campaignService.createCampaign(campaign);
      const campaignId = campaignResponse.data.data.campaignId;

      // Add recipients
      if (selectedCustomers.length > 0) {
        await campaignService.addRecipients(campaignId, selectedCustomers);
      }

      navigate('/admin/campaigns');
    } catch (error) {
      console.error('Error creating campaign:', error);
      setError('Failed to create campaign');
    } finally {
      setLoading(false);
    }
  };

  const handleCustomerSelection = (customerId) => {
    setSelectedCustomers(prev => {
      if (prev.includes(customerId)) {
        return prev.filter(id => id !== customerId);
      }
      return [...prev, customerId];
    });
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Create New Campaign</h4>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
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
                placeholder="Use {firstName} and {lastName} as placeholders for personalization"
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
            
            <div className="form-group">
              <label>Select Recipients</label>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Select</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(customer => (
                      <tr key={customer.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedCustomers.includes(customer.id)}
                            onChange={() => handleCustomerSelection(customer.id)}
                          />
                        </td>
                        <td>{`${customer.firstName} ${customer.lastName}`}</td>
                        <td>{customer.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading || selectedCustomers.length === 0}
            >
              {loading ? 'Creating...' : 'Create Campaign'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignCreate; 