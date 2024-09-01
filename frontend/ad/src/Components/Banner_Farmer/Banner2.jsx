/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from '../../utility/animation';
import HistoryIcon from '../../assets/history-icon.jpg';
import ProfileIcon from '../../assets/profile-icon.png';
import { useNavigate } from 'react-router-dom';
const History_Sec = () => {
  const navigate = useNavigate();
  const handleNavHistory = () => {
    navigate("/history/farmer");
  };
  const handleNavProfile = () => {
    navigate("/profile/farmer");
  }
  return (
    <section className='bg-secondary/10 overflow-x-hidden'>
      <div className='container py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

          <motion.div
            onClick={() => handleNavHistory()}
            variants={FadeLeft(0.5)}
            initial='hidden'
            whileInView={"visible"}
            whileHover={{ scale: 1.1 }}

            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] justify-around items-center gap-3 grid grid-flow-row cursor-pointer'>
            <img
              src={HistoryIcon}
              alt=""
              className='w-[100px] mt-3 scale-110 h-[100px] object-cover'
            />
            <div>
              <h1 className='text-md font-semibold flex flex-col items-center pb-2'>
                Orders
              </h1>
            </div>
          </motion.div>

          <motion.div
            onClick={() => handleNavProfile()}
            variants={FadeLeft(0.9)}
            initial='hidden'
            whileInView={"visible"}
            whileHover={{ scale: 1.1 }}
            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] justify-around items-center gap-3 grid grid-flow-row cursor-pointer' >
            <img
              src={ProfileIcon}
              alt=""
              className='w-[80px] mt-3 scale-110 h-[80px] object-cover'
            />
            <div>
              <h1 className='text-md flex flex-col font-semibold items-center '>
                Profile
              </h1>
            </div>
          </motion.div>

        </div>

      </div>
    </section >
  )
}

export default History_Sec;
