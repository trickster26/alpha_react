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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/campaigns" element={<Campaign />} />
      <Route path="/dashboard/analytics" element={<Analytics />} />
      <Route path="/dashboard/automation" element={<Automation />} />
      <Route path="/dashboard/templates" element={<Templates />} />
    </Routes>
  );
}

export default AppRoutes; 