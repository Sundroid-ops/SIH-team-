/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar_buyer from './Navbar/Navbar_buyer';
import Footer from './Footer/Footer';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';

const Buyer_Cart = () => {

  const product = [
    {
      id: 1,
      name: 'Sample Product',                                 //this contains the name from database
      price: 29.99,                                           //price from database that is being uplaoded
      image: 'https://via.placeholder.com/150',               // image that is being posted by farmer from database
      description: 'This is a sample product description.'    //from database
    },
    {
      id: 2,
      name: 'Sample Product',                                 //this contains the name from database
      price: 29.99,                                           //price from database that is being uplaoded
      image: 'https://via.placeholder.com/150',               // image that is being posted by farmer from database
      description: 'This is a sample product description.'    //from database
    },
    {
      id: 2,
      name: 'Sample Product',                                 //this contains the name from database
      price: 29.99,                                           //price from database that is being uplaoded
      image: 'https://via.placeholder.com/150',               // image that is being posted by farmer from database
      description: 'This is a sample product description.'    //from database
    },
  ];

  return (
    <section className='overflow-x-hidden'>
      <Navbar_buyer />
      <div className="flex flex-col md:flex-row">
        <motion.div
          variants={FadeUp(0.7)}
          initial='hidden'
          whileInView={"visible"}
          className="max-w-4xl mx-auto mb-10 p-6 bg-white shadow-md rounded-lg">
          <div className='md:block flex items-center gap-6 text-gray-600'>
            {product.map((product) => (
              <div key={product.id} className='grid grid-cols-1 md:grid-cols-2 border-b-2'>
                <div className='my-8'>
                  <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-xl font-semibold mb-4">${product.price}</p>
                  <button
                    // onClick={}                     //to checkout
                    className=" bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#53d1df] hover:bg-sky-600 hover:!scale-105 duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className='ml-5 pl-10 my-10'>
                  <motion.img
                    // onClick={}                       // on clicking on the product shows the product details
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
                    viewport={{ once: true }}
                    src={product.image} alt={product.name} className="w-full md:w-2/3 rounded-lg" />
                </div>
              </div>
            ))}

          </div>
        </motion.div>
      </div>
      <Footer />
    </section>


  )
}

export default Buyer_Cart
