import React, {useState, useEffect} from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios'

const ListCollection = () => {
  const [Data, setData] = useState([])
  const fetchAlbum = async() => {
    try {
      const response = await axios.get(`${url}/api/collection/list`)
      if(response.data){
        setData(response.data.collection)
        console.log(response.data.collection)
      }
    } catch (error) {
      toast.error("Error occured")
    }
  }
// REMOVE FUNCTION AGAR REQUIRED HE TOH YAHA PE AAR ROUTES WALE SECTION ME CHANGES KARNA PDEGA IFF REQUIRED
  // const removeCollection = async(id) => {
  //   try {
  //     const response = await axios.post(`${url}/api/album/remove`,{id})
  //     if(response.data.success){
  //       toast.success(response.data.message)
  //       await fetchAlbum();
  //     }
  //   } catch (error) {
  //     toast.error("Error occured")
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    fetchAlbum();
  },[])

  return (
    <div>
      <p>All Collections</p>
      <br />
      <div>
      <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
        </div>
        {Data.map((item,index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-100 text-sm mr-5'>
              <img src={item.image} className='w-12' alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListCollection