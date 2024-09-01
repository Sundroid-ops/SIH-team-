/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';

const LogIn_Buyer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation function
  const validatePassword = (password) => {
    return {
      length: password.length >= 8, // Minimum 8 characters
      uppercase: /[A-Z]/.test(password), // At least one uppercase letter
      lowercase: /[a-z]/.test(password), // At least one lowercase letter
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password), // At least one special character
      number: /\d/.test(password), // At least one number
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    // Validate email
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Validate password
    const passwordCriteria = validatePassword(password);
    if (!Object.values(passwordCriteria).every(Boolean)) {
      errors.password = 'Password must meet all criteria.';
    }

    setErrors(errors);

    // If no errors, proceed with login logic
    if (Object.keys(errors).length === 0) {
      console.log('Logging in...');
      // Implement your login logic here
    }
  };


  return (
    <motion.div
      variants={FadeUp(0.5)}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">LogIn (as Buyer)</h2>
        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your Email"
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
            <div className="text-sm mt-2">
              <p className={`text-${password.length >= 8 ? 'green' : 'red'}-500`}>
                • At least 8 characters
              </p>
              <p className={`text-${/[A-Z]/.test(password) ? 'green' : 'red'}-500`}>
                • At least one uppercase letter
              </p>
              <p className={`text-${/[a-z]/.test(password) ? 'green' : 'red'}-500`}>
                • At least one lowercase letter
              </p>
              <p className={`text-${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'green' : 'red'}-500`}>
                • At least one special character
              </p>
              <p className={`text-${/\d/.test(password) ? 'green' : 'red'}-500`}>
                • At least one number
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full primary-btn font-averia text-white font-bold py-2 px-4 rounded-lg focus:outline-none">
            LOG IN
            {/* use onsubmit navigate option to go to homepage of buyer <Hero_Buyer /> for navigation route visit main.jsx*/}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default LogIn_Buyer
