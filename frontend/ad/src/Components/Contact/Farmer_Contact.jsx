/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { FadeUp } from '../../utility/animation';
import Footer from '../Footer/Footer';
import Navbar_farmer from '../Navbar/Navbar_farmer'

const Farmer_Contact = () => {
    return (
        <section className="bg-gray-100 overflow-x-hidden">
            <Navbar_farmer />
            <motion.div
                variants={FadeUp(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Get in Touch
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-600">
                            We would love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-lg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="primary-btn w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </section >

    )
}

export default Farmer_Contact
