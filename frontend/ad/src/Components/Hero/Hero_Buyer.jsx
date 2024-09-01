/* eslint-disable no-unused-vars */
import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import BgPic from '../../assets/bgpic.png';
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from '../../utility/animation';
import Menus_Buyer from '../Menus/Menus_Buyer';
import Banner from '../Banner_Buyer/Banner';
import Banner2 from '../Banner_Buyer/Banner2';
import NegociationChat_Sec from '../Banner_Buyer/NegociationChat_Sec';
import Footer from '../Footer/Footer';
import Navbar_buyer from '../Navbar/Navbar_buyer';
import Display from '../Menus/Display';

const Hero_Buyer = () => {
    return (
        <section className='overflow-x-hidden'>
            {/* Navbar */}
            <Navbar_buyer />

            {/* Hero Section */}
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeRight(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia'>Shop Sustainable
                            <br />
                            <span className='text-green-500'>Shop Fresh !</span>
                        </motion.h1>

                        <motion.p
                            variants={FadeRight(0.8)}
                            initial="hidden"
                            animate="visible"
                            className='font-poppins text-gray-800 text-xl'>
                            Quality you can <b>TRUST</b>
                        </motion.p>

                        <motion.p
                            variants={FadeRight(1)}
                            initial="hidden"
                            animate="visible"
                            className='text-sm font-poppins text-gray-500 -translate-y-3'>
                            Stock your shelves with fresh, sustainable products. Bulk orders, negotiable prices, and eco-friendly sourcing, benefiting farmers as well as buyers.
                        </motion.p>

                        {/* button */}
                        <motion.div
                            variants={FadeRight(1.3)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>

                            <button className='primary-btn flex items-center gap-2'>
                                <span><IoBagHandleOutline /></span>Order Now
                            </button>

                        </motion.div>
                    </div>
                </div>

                {/* Bg Image */}
                <div className='flex justify-center items-center -translate-y-full md:-translate-y-0 opacity-35 md:opacity-100'>
                    <motion.img
                        variants={FadeLeft(0.8)}
                        initial="hidden"
                        animate="visible"
                        src={BgPic} alt=""
                        className=' max-w-screen object-fill max-h-[1000px]' />
                </div>
            </div>

            {/* Menu Section */}
            <Display />

            {/* App Banner */}
            <Banner />

            {/* Negotiation Chat */}
            <NegociationChat_Sec />

            {/* History and Profile */}
            <Banner2 />

            {/* Footer */}
            <Footer />

        </section >
    )
}

export default Hero_Buyer
