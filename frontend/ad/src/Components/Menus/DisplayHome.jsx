import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';
import { DataContext } from "../../../../ayush/src/context/DataContext";
import Menus_Buyer from './Menus_Buyer';
const DisplayHome = () => {
    const {CollectionData} = useContext(DataContext)
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='text-2xl font-bold text-left pb-10 uppercase'>
                Menu
            </motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {CollectionData.map((item, index) => (
                    <motion.div
                        variants={FadeLeft(menu.delay)}
                        initial='hidden'
                        whileInView={"visible"}
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] justify-around items-center gap-3 grid grid-flow-row'>
                        {/* <img
                            src={menu.img}
                            alt=""
                            className='w-[80px] mt-3 scale-110 h-[80px] object-cover rounded-full'
                        /> */}
                        <Menus_Buyer key={index} name={item.name} id={item._id} image = {item.image}/>
                        {/* <div>
                            <h1 className='text-md font-semibold flex flex-col items-center '>
                                {menu.title}
                            </h1>
                        </div> */}
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default DisplayHome