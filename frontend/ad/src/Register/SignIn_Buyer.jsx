/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';

const SignIn_Buyer = () => {
  const [formData, setFormData] = useState({
    businessNo: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <motion.div
      variants={FadeUp(0.5)}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">SignUp (as Buyer)</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessNo">
              Business Number
            </label>
            <input
              type="text"
              name="businessNo"
              value={formData.businessNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Business Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter you phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            // Onclick -> navigate to the Hero.jsx (/home/buyer) page
            className="w-full primary-btn text-white font-bold py-2 px-4 rounded-lg focus:outline-none">
            SIGN UP
            {/* use onsubmit navigate option to go to homepage of buyer <Hero_Buyer /> for navigation route visit main.jsx*/}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default SignIn_Buyer