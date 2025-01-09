import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Helper function to get auth header
const authHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const dashboardService = {
  async getDashboardData() {
    const response = await axios.get(`${API_URL}/api/dashboard/analytics`, {
      headers: authHeader()
    });
    return response;
  },

  async getCampaignStats() {
    const response = await axios.get(`${API_URL}/api/dashboard/campaigns`, {
      headers: authHeader()
    });
    return response;
  },

  async getRecentActivity() {
    const response = await axios.get(`${API_URL}/api/dashboard/activity`, {
      headers: authHeader()
    });
    return response;
  },

  async getUserProfile() {
    const response = await axios.get(`${API_URL}/api/users/profile`, {
      headers: authHeader()
    });
    return response.data;
  }
};

export default dashboardService; 