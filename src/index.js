/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./index.css";

import AdminLayout from "layouts/Admin.js";
import Register from "components/User/Register";
import Login from "components/User/Login";
import CampaignList from "components/Campaign/CampaignList";
import UploadCSV from "components/Campaign/UploadCSV";
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/campaigns" element={<CampaignList />} />
            <Route path="/admin/upload-csv" element={<UploadCSV />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  </Provider>
);
