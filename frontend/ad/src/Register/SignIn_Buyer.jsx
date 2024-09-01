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
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneValid, setPhoneValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
    number: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Function to validate phone number
  const validatePhone = (phone) => {
    const isValid = /^\d{10,}$/.test(phone); // At least 10 digits
    setPhoneValid(isValid);
  };

  // Function to validate password criteria
  const validatePassword = (password) => {
    const criteria = {
      length: password.length >= 8, // Minimum 8 characters
      uppercase: /[A-Z]/.test(password), // At least one uppercase letter
      lowercase: /[a-z]/.test(password), // At least one lowercase letter
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password), // At least one special character
      number: /\d/.test(password), // At least one number
    };

    setPasswordCriteria(criteria);
    setPasswordValid(Object.values(criteria).every(Boolean)); // Check if all criteria are met
  };

  // Handle phone input change
  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
    validatePhone(newPhone);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (phoneValid && passwordValid){
      // Perform login action
      console.log('Logging in...');
    } else {
      console.log('Please enter valid details.');
    }
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
            <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus: ${phoneValid ? 'focus:ring-blue-500' : 'focus:ring-red-500'
                }`}
            />
            {!phoneValid && <p className="text-red-500 text-sm">Phone number must be at least 10 digits.</p>}
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
            <label className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <ul>
              <li className={passwordCriteria.length ? 'text-green-500' : 'text-red-500'}>
              • At least 8 characters
              </li>
              <li className={passwordCriteria.uppercase ? 'text-green-500' : 'text-red-500'}>
              • At least one uppercase letter
              </li>
              <li className={passwordCriteria.lowercase ? 'text-green-500' : 'text-red-500'}>
              • At least one lowercase letter
              </li>
              <li className={passwordCriteria.specialChar ? 'text-green-500' : 'text-red-500'}>
              • At least one special character
              </li>
              <li className={passwordCriteria.number ? 'text-green-500' : 'text-red-500'}>
              • At least one number
              </li>
            </ul>
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