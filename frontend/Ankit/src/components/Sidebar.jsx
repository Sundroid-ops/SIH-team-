import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='bg-[#003a10] min-h-screen pl-[4vw]'>
      <div className='flex flex-col gap-5 mt-10'>

<NavLink to='/add-product' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>  <p className='hidden sm:block'>Add Product</p>
</NavLink>

<NavLink to='/list-product' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
  <p className='hidden sm:block'>List Product</p>
</NavLink>

<NavLink to='/add-collection' className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
  <p className='hidden sm:block'>Add Collection</p>
</NavLink>

<NavLink to="/list-collection" className='flex items-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
  <p className='hidden sm:block'>List Collection</p>
</NavLink>
</div>
    </div>
  )
}

export default Sidebar