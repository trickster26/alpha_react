const initialState = {
    campaigns: [],
    loading: false,
    error: null,
  };
  
  const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CAMPAIGNS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_CAMPAIGNS_SUCCESS':
        return { ...state, loading: false, campaigns: action.payload };
      case 'FETCH_CAMPAIGNS_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default campaignReducer;
  