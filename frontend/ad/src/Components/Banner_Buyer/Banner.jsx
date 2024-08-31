/* eslint-disable no-unused-vars */
import React from 'react'
import BannerPng from '../../assets/banner.png'
import { motion } from "framer-motion";
import { FadeUp } from '../../utility/animation';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='bg-secondary/10 overflow-x-hidden'>
            <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
                {/* Banner Image */}
                <div className='flex justify-center items-center '>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        viewport={{ once: true }}
                        src={BannerPng}
                        alt=""
                        className='w-[300px] md:max-w-[400px] h-full object-cover'
                    />
                </div>

                {/* Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-full'>
                        <motion.h1
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'
                        >
                            Brand Info
                        </motion.h1>
                        <motion.p
                            variants={FadeUp(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Experience Shopping,offering a wide range of fresh, high-quality
                            groceries sourced directly from trusted farmers and suppliers.
                        </motion.p>
                        <motion.p
                            variants={FadeUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            We ensures you get the best prices, easy access to seasonal
                            produce, and a variety of organic and specialty items. With user-friendly
                            navigation, secure payment options, and reliable delivery services,
                            we strive to make your grocery shopping convenient and enjoyable.
                        </motion.p>
                        {/* button */}
                        <motion.div
                            variants={FadeUp(1.2)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>
                            <Link to={'/buyer/about'}>
                                <button className='primary-btn '> Learn More</button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner
