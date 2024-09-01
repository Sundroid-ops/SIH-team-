import React, {useContext} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import { Marketplace } from "../../../../ayush/src/components/Marketplace";
import { DataContext } from '../../../../ayush/src/context/DataContext';
const Display = () => {
    const {CollectionData} = useContext(DataContext)
    const location = useLocation();
    const isCollection = location.pathname.includes("collection");
  const CollectionId = isCollection ? location.pathname.split('/').pop() : ""; 
  return (
    <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/collection/:id' element={<Marketplace/>}/>
    </Routes>
  )
}

export default Display