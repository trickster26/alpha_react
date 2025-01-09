import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const dashboardService = {
  async getDashboardData() {
    const response = await axios.get(`${API_URL}/api/dashboard/analytics`);
    return response;
  },

  async getCampaignStats() {
    const response = await axios.get(`${API_URL}/api/dashboard/campaigns`);
    return response;
  },

  async getRecentActivity() {
    const response = await axios.get(`${API_URL}/api/dashboard/activity`);
    return response;
  }
};

export default dashboardService; 