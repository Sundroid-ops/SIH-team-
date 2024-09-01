/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Veggie from '../../assets/veggies/Vegetables.jpg';
import Fruits from '../../assets/fruits/Fruits.jpg';
import cereal from '../../assets/cereals/Cereals.jpg';
import pulse from '../../assets/pulses/Pulses.jpg';
import spice from '../../assets/Spices/Spices.jpg';
import other from '../../assets/others/Others.jpg';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';
import { DataContext } from "../../../../ayush/src/context/DataContext";


// const MenuData = [

//     {
//         id: 1,
//         title: "Vegetables",
//         link: '/',                           // link this to the type of product 
//         img: Veggie,
//         delay: 0.3,
//     },
//     {
//         id: 2,
//         title: "Fruits",
//         link: '/',                           // link this to the type of product 
//         img: Fruits,
//         delay: 0.6,
//     },
//     {
//         id: 3,
//         title: "Cereals",
//         link: '/',                           // link this to the type of product 
//         img: cereal,
//         delay: 0.9,
//     },
//     {
//         id: 4,
//         title: "Pulses",
//         link: '/',                           // link this to the type of product 
//         img: pulse,
//         delay: 1.2,
//     },
//     {
//         id: 5,
//         title: "Spices",
//         link: '/',                           // link this to the type of product 
//         img: spice,
//         delay: 1.5,
//     },
//     {
//         id: 6,
//         title: "Others",
//         link: '/',                           // link this to the type of product 
//         img: other,
//         delay: 1.8,
//     },
// ]

const Menus_Buyer = ({name, id, image}) => {

    const navigate = useNavigate()

    const {CollectionData} = useContext(DataContext)
    const location = useLocation();
    const isCollection = location.pathname.includes("collection");
    const CollectionId = isCollection?location.pathname.split('/').pop() : " "
    return (
        <section className='overflow-x-hidden'>
            <div className='container pb-20'>
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-2xl font-bold text-left pb-10 uppercase'>
                    Menu
                </motion.h1>
                <div onClick={() => navigate(`/collection/${id}`)} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                    {/* {MenuData.map((menu, index) => ( */}
                        <motion.div
                            variants={FadeLeft(menu.delay)}
                            initial='hidden'
                            whileInView={"visible"}
                            whileHover={{ scale: 1.1 }}
                            key={index}
                            className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] justify-around items-center gap-3 grid grid-flow-row'>
                            <img
                                src={image}
                                alt=""
                                className='w-[80px] mt-3 scale-110 h-[80px] object-cover rounded-full'
                            />
                            <div>
                                <h1 className='text-md font-semibold flex flex-col items-center '>
                                    {name}
                                </h1>
                            </div>
                        </motion.div>
                    {/* // ))} */}
                </div>

            </div>
        </section>
    )
}

export default Menus_Buyer;