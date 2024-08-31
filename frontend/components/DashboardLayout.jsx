// src/components/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
}

export default DashboardLayout;
