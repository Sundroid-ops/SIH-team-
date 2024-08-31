/* eslint-disable no-unused-vars */
import React from 'react'
import about from '../../assets/about.jpeg'
import { motion } from "framer-motion";
import { FadeUp } from '../../utility/animation';
import Footer from '../Footer/Footer';
import Navbar_farmer from '../Navbar/Navbar_farmer';

const Farmer_about = () => {
    return (
        <section className="bg-gray-100 overflow-x-hidden">
            <Navbar_farmer />
            <div className='py-12 px-6 md:px-12 lg:px-24'>
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                            viewport={{ once: true }}
                            src={about}
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <motion.div
                        variants={FadeUp(0.7)}
                        initial="hidden"
                        animate="visible"
                        className="md:w-1/2 md:pl-12">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-700 mb-4">
                            Welcome to [Your Company], where innovation meets dedication. 
                            This platform is dedicated to empowering local farmers by
                            providing them with easy access to essential groceries.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our goal is to bridge the gap between farmers and quality
                            products, ensuring they have the supplies needed to maintain
                            their livelihoods. We offer a wide range of fresh produce, 
                            seeds and daily necessities  sourced directly from trusted 
                            suppliers. By supporting our platform, you help strengthen the 
                            agricultural community, promote sustainability, and ensure that 
                            farmers receive fair prices. Together, we can cultivate
                            a healthier, more resilient farming ecosystem.
                        </p>
                        <p className="text-gray-700">
                            Join us on our journey to make the world a better place, one
                            innovative solution at a time.
                        </p>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default Farmer_about
