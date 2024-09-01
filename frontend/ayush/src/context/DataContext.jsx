import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const url = 'http://localhost:4000';

    const [productData, setproductData] = useState([])
    const [CollectionData, setCollectionData] = useState([])

    const getProductData = async() => {
        try {
            const response = await axios.get(`${url}/api/product/list`)
            console.log(response);
            
            setproductData(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    const getCollectionData = async() => {
        try {
            const response = await axios.get(`${url}/api/collection/list`)
            console.log(response);
            setCollectionData(response.data.collection);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductData();
        getCollectionData();
      }, [])

      const contextValue = {
        productData,CollectionData
      }

      return (
        <DataContext.Provider value={contextValue}>
            {props.children}
        </DataContext.Provider>
      )
}

export default DataContextProvider;