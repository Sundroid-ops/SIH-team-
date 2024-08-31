// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BuyerDashboard from './components/BuyerDashboard';
import Marketplace from './components/Marketplace';
import History from './components/History';
// import Chat from './components/Chat'; // Import the Chat component

const App = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for user details when the app loads
    const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (savedUserDetails) {
      setUserDetails(savedUserDetails);
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  const ProtectedRoute = ({ element }) => {
    return userDetails ? element : <Navigate to="/signin" />;
  };

  // Show a loading state while checking for user details in localStorage
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* SignIn and SignUp Routes */}
        <Route path="/signin" element={<SignIn setUserDetails={setUserDetails} />} />
        <Route path="/signup" element={<SignUp setUserDetails={setUserDetails} />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<BuyerDashboard userDetails={userDetails} />} />} />
        <Route path="/dashboard/marketplace" element={<ProtectedRoute element={<Marketplace />} />} />
        <Route path="/dashboard/history" element={<ProtectedRoute element={<History />} />} />

        {/* Chat Route: Expects itemId, buyerId, and sellerId as URL parameters */}
        {/* <Route path="/chat/:itemId/:buyerId/:sellerId" element={<ProtectedRoute element={<Chat />} />} /> */}

        {/* Default Route */}
        <Route path="/" element={<Navigate to={userDetails ? "/dashboard/marketplace" : "/signin"} />} />

        {/* Redirect any unknown routes to SignIn */}
        <Route path="*" element={<Navigate to={userDetails ? "/dashboard/marketplace" : "/signin"} />} />
      </Routes>
    </Router>
  );
};

export default App;
