import React, {useState, useEffect} from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../App';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState(" ")
  const [desc, setDesc] = useState(" ")
  const [collections, setCollections] = useState("none")
  const [loading, setLoading] = useState(false);
  const [collectionData, setCollectionData] = useState([]);

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('image', image);
      formData.append('collections', collections);

      const response = await axios.post(`${url}/api/product/add`, formData);

      if(response.data.success){
        toast.success("Product added")
        setName("")
        setDesc("")
        setCollections("none")
        setImage(false)
      }else{
        toast.error("Something went wrong")
      }

    } catch (error) {
      toast.error("Error occured")
      
    }
    setLoading(false)
  }

  const loadCollectionData = async() => {
    try {
      const response = await axios.get(`${url}/api/collection/list`);
      if(response.data.success){
        setCollectionData(response.data.collection)
      }else{
        toast.error("Unable to load collections data")
      }
    } catch (error) {
      toast.error("Error occured")
    }
  }

  useEffect(() => {
    loadCollectionData()
  }, [])
  

  return loading? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
    </div>
  ) :(
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-4 '>
          <p>Upload Image</p>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image): assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]' placeholder="Type here" required/>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Product Discription</p>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]' placeholder="Best till" required/>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Collection</p>
        <select onChange={(e) => setCollections(e.target.value)} defaultValue={collections} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
          <option value="">None</option>
          {collectionData.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
        </select>
      </div>

      <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'> ADD</button>
    </form>
  )
}

export default AddProduct