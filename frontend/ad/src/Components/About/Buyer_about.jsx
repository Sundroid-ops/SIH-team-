/* eslint-disable no-unused-vars */
import React from 'react'
import about from '../../assets/about.jpeg'
import { motion } from "framer-motion";
import { FadeUp } from '../../utility/animation';
import Footer from '../Footer/Footer';
import Navbar_buyer from '../Navbar/Navbar_buyer';

const Farmer_about = () => {
    return (
        <section className="bg-gray-100 overflow-x-hidden">
            <Navbar_buyer />
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
                            We are dedicated to providing a seamless shopping experience, 
                            offering a wide range of fresh, high-quality groceries sourced 
                            directly from trusted farmers and suppliers. 
                        </p>
                        <p className="text-gray-700 mb-4">
                        Our platform ensures you get the best prices, easy access to seasonal 
                        produce, and a variety of organic and specialty items. With user-friendly 
                        navigation, secure payment options, and reliable delivery services, 
                        we strive to make your grocery shopping convenient and enjoyable. 
                        Shop with confidence, knowing you are supporting sustainable practices and 
                        getting the finest products delivered right to your doorstep.
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
