/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='flex flex-col translate-y-20 sm:-translate-y-50 md:-translate-y-28 xl:-translate-y-50 items-center sm:mt-24  xl:mt-24 md:mx-44 gap-9' >
            <h1 className='font-extrabold text-xl md:text-4xl xl:text-[50px] text-center lg:pb-4 text-slate-950'>APPNAME
                <br />
                <p className=' text-[8px] sm:text-sm md:text-md lg:text-xl justify-center items-center font-medium text-gray-200 text-center sm:py-16 md:py-8 lg:pt-12 xl:py-20 mx-9 '>
                    Empower farmers and buyers with seamless connections, transaction and build lasting partnerships for a sustainable and thriving agricultural future.
                </p>
            </h1>
            {/* Link to login page */}
            <Link to={'/register'}>
                <button className='primary-btn flex items-center md:gap-2 hover:scale-105'>Get Started </button>
            </Link>
        </div>
  )
}

export default HomePage
