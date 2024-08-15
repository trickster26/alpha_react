import axios from 'axios';

export const fetchCampaigns = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CAMPAIGNS_REQUEST' });
  console.log(process.env.REACT_APP_BACKEND_ROUTE);
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_ROUTE}/api/campaigns`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch({ type: 'FETCH_CAMPAIGNS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CAMPAIGNS_FAILURE', error: error.message });
  }
};
