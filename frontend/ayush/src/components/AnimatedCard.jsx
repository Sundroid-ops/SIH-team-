// AnimatedCard.jsx
import React from 'react';
import { Motion, spring } from 'react-motion';
import '../styles/Marketplace.css';

const AnimatedCard = ({ product, openDialog }) => (
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
);

export default AnimatedCard;
