/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar_farmer from '../Navbar/Navbar_farmer'
import Footer from '../Footer/Footer'

const History_Farmer = () => {
  return (
    <section className='overflow-x-hidden'>
      <Navbar_farmer/>
      <div className='container h-screen'>
        <h1 className='text-5xl pb-10 font-bold'>Transaction History</h1>
        <p>You have not made any transaction</p>

      </div>
      <Footer/>
    </section>

  )
}

export default History_Farmer
