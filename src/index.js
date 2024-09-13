import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./index.css";

import AdminLayout from "layouts/Admin.js";
import Register from "components/User/Register";
import Login from "components/User/Login";
import Error404 from "components/User/Error";
import CampaignList from "components/Campaign/CampaignList";
import UploadCSV from "components/Campaign/UploadCSV";
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './context/AuthContext';
import LandingPage from "components/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/admin" element={<AdminLayout />}>
            {/* Define specific admin routes */}
            <Route path="dashboard" element={<AdminLayout />} />
            <Route path="campaigns" element={<CampaignList />} />
            <Route path="upload-csv" element={<UploadCSV />} />
            {/* Catch-all route for any unmatched paths under /admin */}
            <Route path="*" element={<Error404 />} />
          </Route>
          {/* <Route path="/" element={<Navigate to="/admin/dashboard" replace />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);
