/* eslint-disable no-unused-vars */
import React from "react";
import Navbar_buyer from "../Components/Navbar/Navbar_buyer";
import Footer from "../Components/Footer/Footer";
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';
const ProductDetail = () => {
    return (
        <section className='overflow-x-hidden'>
            <Navbar_buyer />
            <motion.div
                variants={FadeUp(0.5)}
                initial='hidden'
                whileInView={"visible"}
                className="max-w-5xl lg:mx-auto p-6 bg-secondary/10 rounded-lg my-10 mx-10 ">
                <div className="flex flex-col md:flex-row gap-8 ">

                    {/* Product Image */}
                    <div className="w-[700px] md:w-1/2">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                            viewport={{ once: true }}
                            src="https://via.placeholder.com/150"                                       // image that is being uploaded by farmer         
                            alt="Product"
                            className=" w-1/4 sm:w-1/3 md:w-full h-full rounded-lg shadow-lg" 
                        />
                    </div>

                    {/* Product Info */}
                    <motion.div
                        variants={FadeUp(0.5)}
                        initial='hidden'
                        whileInView={"visible"}
                        className="md:w-1/2 pt-10">
                        <h1 className="text-3xl font-bold mb-4">
                            Product Name: ########{/* id name of Product from database */}
                        </h1>

                        <p className="text-xl text-gray-700 mb-4">
                            $price : {/* price id of product from database  */}
                        </p>

                        <p className="text-gray-600 mb-6 text-lg">
                            Description: ######{/* product description from database */}
                        </p>

                        <p className="text-gray-600 mb-6 text-lg">
                            Seller: ###### {/* name of seller */}
                        </p>

                        {/* Quantity and Buttons */}
                        <div className="flex items-center gap-4 mb-6">
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-16 p-2 border rounded-lg"
                            />
                            <button className=" bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#53d1df] hover:bg-sky-600 hover:!scale-110 duration-300">
                                Add to Cart
                            </button>
                        </div>
                        
                        <button className=" bg-cyan-500 text-white font-semibold md:w-[300px] py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#53d1df] hover:bg-sky-600 hover:!scale-110 duration-300">
                            Checkout
                            {/* here thiswill navigate to the negotiation page */}
                        </button>
                    </motion.div>
                </div>
            </motion.div>
            <Footer />
        </section >
    );
};

export default ProductDetail;
