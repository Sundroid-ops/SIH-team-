/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';

const Register = () => {
    const navigate = useNavigate();

    const handleSignUp = (type) => {
        navigate(`/signup/` + type);
    };
    const handleLogin = (type) => {
        navigate(`/login/` + type);
    };

    return (
        <motion.div
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-[500px]">
                <h2 className=" font-serif text-4xl font-bold my-3 pb-6 text-primary items-center justify-center flex flex-col uppercase">Register</h2>

                <div className='mb-7 bg-slate-100 px-4 py-3 shadow-stone-400 shadow-xl'>
                    <h5 className='font-serif'>Please choose the type of login</h5>
                    <div className='grid grid-cols-2 gap-10 py-5'>
                        <button className='bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#1e90ff] hover:bg-sky-600 hover:!scale-110 duration-300'
                            onClick={() => handleLogin('farmer')}
                        >Log In <br />(as farmer) </button>

                        <button className='bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#1e90ff] hover:bg-sky-600 hover:!scale-110 duration-300'
                            onClick={() => handleLogin('buyer')}
                        >Log In <br />(as buyer) </button>
                    </div>

                </div>

                <div className='mb-7 bg-slate-100 px-4 py-3 shadow-stone-400 shadow-xl'>
                    <h5 className='font-bold font-serif'>Sign Up <span className='text-xs font-normal'>(if you do not have an account)</span></h5>
                    <div className='grid grid-cols-2 gap-10 py-5'>
                        <button className='bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:bg-primary hover:!scale-110 duration-300 '
                            onClick={() => handleSignUp('farmer')}
                        >Sign Up <br />(as farmer) </button>

                        <button className='bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:bg-primary hover:!scale-110 duration-300 '
                            onClick={() => handleSignUp('buyer')}
                        >Sign Up <br />(as buyer) </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Register;