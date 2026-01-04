
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CaseManagement from './pages/CaseManagement';
import AIInsights from './pages/AIInsights';
import DCAPortal from './pages/DCAPortal';
import Analytics from './pages/Analytics';
import AuditCompliance from './pages/AuditCompliance';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cases" element={<CaseManagement />} />
          <Route path="ai-insights" element={<AIInsights />} />
          <Route path="dca-portal" element={<DCAPortal />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="audit-compliance" element={<AuditCompliance />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
