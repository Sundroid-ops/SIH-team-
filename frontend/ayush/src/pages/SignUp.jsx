// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = ({ setUserDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    gstin: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful sign-up logic
    if (formData.name && formData.mobile && formData.email && formData.password) {
      // Save user details and navigate to the dashboard
      setUserDetails(formData); // Set user details in parent component's state
      navigate('/dashboard');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            name="gstin"
            placeholder="GSTIN"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-6"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/signin" className="text-blue-600">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
