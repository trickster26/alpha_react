import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../store/actions/campaignActions';

const CampaignList = () => {
  const dispatch = useDispatch();
  const { campaigns, loading, error } = useSelector(state => state.campaign);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Email Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign.CampaignID}>{campaign.CampaignName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
