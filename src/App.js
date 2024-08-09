import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './context/AuthContext';
import CampaignList from './components/CampaignList';
import Register from './components/Register';
import Login from './components/Login';
import UploadCSV from './components/UploadCSV';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <div className="App">
            <h1>Alpha-D</h1>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/campaigns" element={<CampaignList />} />
              <Route path="/upload-csv" element={<UploadCSV />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
