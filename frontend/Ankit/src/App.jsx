import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import AddCollection from "./pages/AddCollection";
import ListProduct from './pages/ListProduct';
import ListCollection from "./pages/ListCollection";
import Sidebar from './components/sidebar';
import NavBar from "./components/NavBar";

export const url = 'http://localhost:4000'


const App = () => {
  return (
    <div className='flex item-start min-h-screen'>
      <ToastContainer />
      <Sidebar />
      <div className='flex-1 h-screen overflow -y-scroll bg-[#F3FFF7]'>
        <NavBar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/add-collection' element={<AddCollection />} />
            <Route path='/list-collection' element={<ListCollection />} />
            <Route path='/list-product' element={<ListProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App