import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/campaigns" component={CampaignList} />
              <Route path="/upload-csv" component={UploadCSV} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
