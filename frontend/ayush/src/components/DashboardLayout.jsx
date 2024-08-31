import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from '../components/Footer'; 
import RatingSection from '../components/RatingSection'; // Import the RatingSection component
import '../styles/BuyerDashboard.css';

const BuyerDashboard = ({ userDetails }) => {
  if (!userDetails) {
    return <Navigate to="/signin" />;
  }

  const [isEditingMobile, setIsEditingMobile] = useState(false);
  const [mobile, setMobile] = useState(userDetails?.mobile || '');

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSaveMobile = async () => {
    try {
      // Simulate an API call to save the mobile number
      alert('Mobile number updated successfully!');
      setIsEditingMobile(false);
    } catch (error) {
      alert('Failed to update mobile number.');
    }
  };

  // Simulated ratings data (can be replaced with data fetched from an API)
  const ratings = [
    { farmerName: 'Suraj Kishore', stars: 4, feedback: 'Good buyer, timely payment.' },
    { farmerName: 'Happy Sharma', stars: 5, feedback: 'Excellent transaction!' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-1 ml-64 p-8 bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Buyer Dashboard</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>
            <p><strong>GSTIN:</strong> {userDetails.gstin}</p>
            <div className="mt-4">
              <label className="block font-semibold">Mobile:</label>
              {isEditingMobile ? (
                <div>
                  <input
                    type="text"
                    value={mobile}
                    onChange={handleMobileChange}
                    className="p-2 border border-gray-300 rounded w-full mt-2"
                  />
                  <button
                    onClick={handleSaveMobile}
                    className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditingMobile(false)}
                    className="mt-2 ml-2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p>{mobile}</p>
                  <button
                    onClick={() => setIsEditingMobile(true)}
                    className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <Outlet />
          </div>

          {/* Add the RatingSection component below the personal details */}
          <RatingSection ratings={ratings} />
        </div>
      </div>
      <Footer /> {/*  the Footer component */}
    </div>
  );
};

export default BuyerDashboard;
