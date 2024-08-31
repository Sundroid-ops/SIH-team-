/* eslint-disable no-unused-vars */
import React from 'react';
import { RiUploadCloud2Fill } from "react-icons/ri";
import BgPic2 from '../../assets/bgpic2.jpg';
import { motion } from "framer-motion";
import { FadeRight, FadeLeft } from '../../utility/animation';
import Navbar from '../Navbar/Navbar_farmer'
import Banner from '../Banner_Farmer/Banner';
import Banner2 from '../Banner_Farmer/Banner2';
import NegociationChat_Sec from '../Banner_Buyer/NegociationChat_Sec';
import Footer from '../Footer/Footer';

const Hero_Farmer = () => {
  return (
    <section className='overflow-x-hidden'>
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeRight(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia'>Harvest Profits
                            <br />
                            <span className='text-green-500 text-[47px]'>Cultivate success!</span>
                        </motion.h1>
                        <motion.p
                            variants={FadeRight(0.8)}
                            initial="hidden"
                            animate="visible"
                            className='font-poppins text-gray-800 text-xl pt-5'>
                            <b>Empowering </b> the hands that feed the world 
                        </motion.p>

                        <motion.p
                            variants={FadeRight(1)}
                            initial="hidden"
                            animate="visible"
                            className='font-poppins text-sm text-gray-500 -translate-y-3'>
                            Maximize your profits and reach new markets by selling your farm products directly to wholesalers. Secure a reliable income with transparent pricing, guaranteed purchases, and timely payments. Your dedication to quality deserves the best value—partner with us and watch your hard work yield even greater rewards.
                        </motion.p>

                        {/* button */}
                        <motion.div
                            variants={FadeRight(1.3)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>
                            
                            <button className='primary-btn flex items-center gap-2'>
                                <span><RiUploadCloud2Fill /></span> Post Products    
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
                        src={BgPic2} alt=""
                        className=' max-w-screen object-fill max-h-[1000px]' />
                </div>
            </div>

            {/* App Banner */}
            <Banner/>

            {/* Negotiation Chat */}
            <NegociationChat_Sec/>

            {/* History and Profile */}
            <Banner2/>  
            
            {/* Footer */}
            <Footer/>

        </section >
  )
}

export default Hero_Farmer
