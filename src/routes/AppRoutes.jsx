import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Documentation from '../pages/Documentation';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Campaign from '../pages/Campaign';
import Analytics from '../pages/Analytics';
import Automation from '../pages/Automation';
import Templates from '../pages/Templates';
import Integration from '../pages/Integration';
import Settings from '../pages/Settings';
import Checkout from '../pages/Checkout';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';
import NotFound from '../pages/NotFound';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import Profile from '../pages/auth/Profile';
import Help from '../pages/Help';
import CreateCampaign from '../pages/CreateCampaign';
import Audience from '../pages/Audience';
import CreateAudience from '../pages/CreateAudience';
import { LandingPage } from '../pages/Home/LandingPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={
            <Dashboard />
          
        } />
      <Route path="/dashboard/campaigns" element={<Campaign />} />
      <Route path="/dashboard/campaigns/new" element={<CreateCampaign />} />
      <Route path="/dashboard/analytics" element={<Analytics />} />
      <Route path="/dashboard/automation" element={<Automation />} />
      <Route path="/dashboard/templates" element={<Templates />} />
      <Route path="/dashboard/integration" element={<Integration />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      
      {/* Checkout */}
      <Route path="/checkout" element={<Checkout />} />
      
      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
      
      {/* Help */}
      <Route path="/help" element={<Help />} />
      
      {/* Audience */}
      <Route path="/dashboard/audience" element={<Audience />} />
      <Route path="/dashboard/audience/new" element={<CreateAudience />} />
      
      {/* 404 - Keep this last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes; 