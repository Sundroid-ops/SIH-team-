/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-secondary to-primary py-3 overflow-x-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='container flex justify-between items-center'>
        {/* Logo Section */}
        <div className='grid grid-cols-1 font-poppins sm:grid-cols-2 gap-16 px-6 text-2xl items-center  uppercase'>
          <div className='space-y-4  text-white'>
            <h1 className='text-3xl font-bold'>appname  </h1>
            <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui expedita, ad corrupti itaque sapiente totam architecto quaerat deserunt illo! Ipsam iure quae, sed fuga magni repellat sapiente optio placeat.</p>
          </div>

          {/* Logo section */}
          <div className='text-white text-3xl space-y-6 lg:translate-x-2/3'>
            <h1 className='text-3xl font-bold'>Follow Us</h1>
            <div className='flex items-center  gap-3'>
              <FaInstagram className='text-3xl hover:scale-125 duration-300' />
              <FaTwitter className='text-3xl hover:scale-125 duration-300' />
              <FaFacebook className='text-3xl hover:scale-125 duration-300' />
              <FaLinkedin className='text-3xl hover:scale-125 duration-300' />
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        
      </motion.div>
      <p className='text-white text-center mt-8 pt-2 border-t-2'>Copyright &Copy: Company Name, All rights reserved. </p>
    </footer>
  )
}

export default Footer
