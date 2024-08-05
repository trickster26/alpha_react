import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './context/AuthContext';
import CampaignList from './components/CampaignList';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="App">
          <h1>Email Marketing Platform</h1>
          <CampaignList />
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
