import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiShoppingCart, FiClock } from 'react-icons/fi';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Menu</h1>
      </div>
      <nav className="mt-10 space-y-4">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          <FiHome className="inline-block mr-3 text-xl" /> Dashboard
        </NavLink>
        <NavLink 
          to="/dashboard/marketplace"  // Updated path
          className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          <FiShoppingCart className="inline-block mr-3 text-xl" /> Marketplace
        </NavLink>
        <NavLink 
          to="/dashboard/history"  // Updated path
          className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
          }
        >
          <FiClock className="inline-block mr-3 text-xl" /> History
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
