/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BiSolidLeaf } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import DropDownMenu from './DropDownMenu';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home/buyer",
  },
  {
    id: 2,
    title: "Products",
    link: "/",                          // link this to the product list page
  },
  {
    id: 3,
    title: "About",
    link: "/buyer/about",
  },
  {
    id: 4,
    title: "Contacts",
    link: "/buyer/contact",
  },
];

const Navbar_buyer = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/buyer_cart');
  };

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}

          className='container flex justify-between items-center py-4 md:pt-4'>
          {/* Logo Section */}
          <div className='text-2xl flex items-center gap-3 font-bold uppercase'>
            <p className='text-secondary'>App Name</p>
            <BiSolidLeaf className='text-green-500' />
          </div>
          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link}
                    className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>
                    {menu.title}</a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavigate()}
                  className='text-2l hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                  <MdOutlineShoppingCart />
                </button>
              </li>
              <li>
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed"> ProfilePic
                  <img
                    // src={}             // profile photo if present
                    className="h-[35px] w-[35px] rounded-full" />
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu DropDown */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>

        </motion.div>
      </nav>

      {/* DropDown */}
      <DropDownMenu open={open} />
    </>
  )
}

export default Navbar_buyer;
