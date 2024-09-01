// AnimatedCard.jsx
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { Motion, spring } from 'react-motion';
import '../styles/Marketplace.css';

const AnimatedCard = ({ product, openDialog }) => {
  const { id } = useParams();
  const [collectionData, setcollectionData] = useState("")
  // const { CollectionData, productData } = useContext(DataContext)

  useEffect(() => {
    CollectionData.map((item) => {
      if (item._id === id) {
        setcollectionData(item)
      }
    })
  }, [])
  return collectionData ? (

    <Motion
      defaultStyle={{ opacity: 0, scale: 0.9 }}
      style={{ opacity: spring(1), scale: spring(1) }}
    >
      {style => (
        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          style={{
            transform: `scale(${style.scale})`,
            opacity: style.opacity,
          }}
          onClick={() => openDialog(product)}
        >
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-overlay">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-price">INR {product.price}</p>
          </div>
        </div>
      )}
    </Motion>
  ) : null
};

export default AnimatedCard;
