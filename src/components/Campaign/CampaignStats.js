import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CampaignStats = () => {
  const { campaignId } = useParams();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`/api/campaigns/stats/${campaignId}`);
        if (response.data.success) {
          setStats(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, [campaignId]);

  const handleExport = async (format) => {
    try {
      window.location.href = `/api/campaigns/export/${campaignId}?format=${format}`;
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Campaign Statistics</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <div className="stats-box">
                <h5>Total Recipients</h5>
                <h3>{stats.total}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-box">
                <h5>Sent</h5>
                <h3>{stats.sent}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-box">
                <h5>Opened</h5>
                <h3>{stats.opened}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stats-box">
                <h5>Failed</h5>
                <h3>{stats.failed}</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <button 
              className="btn btn-primary mr-2"
              onClick={() => handleExport('excel')}
            >
              Export to Excel
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleExport('csv')}
            >
              Export to CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStats; 