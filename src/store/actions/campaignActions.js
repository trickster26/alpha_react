import axios from 'axios';

export const fetchCampaigns = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CAMPAIGNS_REQUEST' });
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/campaigns`);
    console.log(response);
    dispatch({ type: 'FETCH_CAMPAIGNS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CAMPAIGNS_FAILURE', error: error.message });
  }
};
