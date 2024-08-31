/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { FadeUp } from '../../utility/animation';
import NegoImg from '../../assets/negotiation.jpg';

const NegociationChat_Sec = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>

        {/* Info */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase'
            >
              Negotiation
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Click on the button below to start the negotiations.
              Adjust pricing, quantities, and delivery terms directly with the farmer.
              Ensure mutual agreement on quality standards, payment schedules,
              and any additional terms. Ensure all details are agreed upon to
              secure a fair and transparent contract that benefits both parties.
            </motion.p>
            {/* button */}
            <motion.div
              variants={FadeUp(1.2)}
              initial="hidden"
              animate="visible"
              className='flex justify-center md:justify-start'>

              <button
                // onClick={}             // add an onclick function to go to the chat page of the particular conversation
                className='primary-btn '> Chat to Negotiate
              </button>

            </motion.div>
          </div>
        </div>

        {/* Banner Image */}
        <div className='flex justify-center items-center '>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={NegoImg}
            alt=""
            className='w-[300px] md:max-w-[400px] h-full object-cover'
          />
        </div>


      </div>
    </section>
  )
}

export default NegociationChat_Sec;
