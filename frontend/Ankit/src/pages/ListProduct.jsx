import React, {useEffect, useState} from 'react'
import axios from "axios";
import { url } from '../App';
import { toast } from 'react-toastify'

const ListProduct = () => {
  const [Data, setData] = useState([])


  const fetchProduct = async() => {
    try {
      const response = await axios.get(`${url}/api/product/list`)
      // if(response.data.success){
      //   setData(response.data.)
      // }
      console.log(response.data)
      if(response.data.success){
        setData(response.data.products)
      }
    } catch (error) {
      toast.error("Error Occured")
    }
  }

  const removeProduct = async(id) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`, {id});
      if(response.data.success){
        toast.success(response.data.message);
        await fetchProduct()
      }
    } catch (error) {
      toast.error("Error Occured")
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  

  return (
    <div>
      <p>All Products</p>
      <br />
      <div>
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
            <b>Image</b>
            <b>Name</b>
            <b>Collection</b>
            <b>Descpription</b>
            <b>Action</b>
        </div>
        {Data.map((item, index) =>{
          return(
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.collections}</p>
              <p>{item.desc}</p>
              <p className='cursor-pointer' onClick={() => removeProduct(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct