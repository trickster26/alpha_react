import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const campaignService = {
  createCampaign: (data) => api.post('/campaigns/create', data),
  getCampaigns: () => api.get('/campaigns'),
  getCampaignStats: (id) => api.get(`/campaigns/stats/${id}`),
  sendCampaign: (id) => api.post(`/campaigns/send/${id}`),
  addRecipients: (campaignId, customerIds) => 
    api.post('/campaigns/recipients', { campaignId, customerIds }),
  exportData: (id, format) => 
    api.get(`/campaigns/export/${id}?format=${format}`, { responseType: 'blob' }),
};

export const customerService = {
  getCustomers: () => api.get('/customers'),
  addCustomer: (data) => api.post('/customers/addcustomers', data),
  uploadCSV: (data) => api.post('/customers/addcustomercsv', data),
};

export default api; 