import { useState, useEffect, useRef } from 'react';
import '../styles/Marketplace.css';
import AnimatedCard from './AnimatedCard';
import backgroundImage from '../assets/Farm4.jpg';
import Sidebar from './Sidebar';
import { FaShoppingCart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Wheat from '../assets/Wheat.jpg';
import Rice from '../assets/Rice.jpg';
import Tomato from '../assets/Tomato.jpg';
import Apple from '../assets/Apple.jpg';
import Grapes from '../assets/Grapes.jpg';

const Marketplace = () => {
  const products = [
    { id: 1, name: 'Wheat', price: 100, image: Wheat, quality: 'High', quantity: 50, farmerName: 'Verma', contactInfo: '123-456-7890', category: 'Grain' },
    { id: 2, name: 'Rice', price: 150, image: Rice, quality: 'Medium', quantity: 30, farmerName: 'Smith', contactInfo: '987-654-3210', category: 'Grain' },
    { id: 3, name: 'Tomato', price: 150, image: Tomato, quality: 'Medium', quantity: 30, farmerName: 'Smith', contactInfo: '987-654-3210', category: 'Vegetable' },
    { id: 4, name: 'Apple', price: 150, image: Apple, quality: 'Medium', quantity: 30, farmerName: 'Smith', contactInfo: '987-654-3210', category: 'Fruit' },
    { id: 5, name: 'Grapes', price: 150, image: Grapes, quality: 'Medium', quantity: 30, farmerName: 'Smith', contactInfo: '987-654-3210', category: 'Fruit' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => (filterCategory ? product.category === filterCategory : true));

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Assuming you have userDetails or user session management in place to get the buyerId
  const userDetails = JSON.parse(localStorage.getItem('userDetails')); 
  const buyerId = userDetails?.id || 'buyer123'; // Replace with actual buyer ID from session or fallback

  // Update the handleNegotiate function to pass itemId, buyerId, and sellerId
  const handleNegotiate = (product) => {
    const itemId = product.id;
    const sellerId = product.farmerName; // Replace with the correct seller ID
    const buyerId = userDetails?.id || 'buyer123'; // Ensure buyerId is correct
  
    if (itemId && buyerId && sellerId) {
      console.log(`Navigating to chat with itemId: ${itemId}, buyerId: ${buyerId}, sellerId: ${sellerId}`);
      navigate(`/chat/${itemId}/${buyerId}/${sellerId}`);
    } else {
      console.error('Missing parameters for navigation:', { itemId, buyerId, sellerId });
    }
  };
  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const openDialog = (product) => {
    setSelectedProduct(product);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
  };

  const dialogRef = useRef();
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target) && cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex-1 p-8 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, marginLeft: '16rem' }}
      >
        <div className="heading-container">
          <h1 className="text-4xl font-bold text-center text-green-800 mb-8 heading-slide">
            -:One MarketPlace For All Your Needs:-
          </h1>
        </div>

        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">Filter by Category</option>
            <option value="">All</option>
            <option value="Grain">Grain</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
          </select>
          <button onClick={toggleCart} className="cart-button" ref={cartRef}>
            <FaShoppingCart />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>

        <div className="card-container">
          {filteredProducts.map((product) => (
            <AnimatedCard key={product.id} product={product} openDialog={openDialog} />
          ))}
        </div>

        {showCart && (
          <div className="dialog-overlay">
            <div className="dialog-content" ref={dialogRef}>
              <h2>Your Cart</h2>
              <ul className="cart-items">
                {cart.length === 0 ? (
                  <li className="empty-cart">Your cart is empty.</li>
                ) : (
                  cart.map((item, index) => (
                    <li key={index} className="cart-item">
                      {item.name} - ₹{item.price}
                    </li>
                  ))
                )}
              </ul>
              {cart.length > 0 && (
                <>
                  <button onClick={() => handleNegotiate(cart[0])} className="checkout-button">
                    Negotiate Price
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {selectedProduct && (
          <div className="dialog-overlay">
            <div className="dialog-content" ref={dialogRef}>
              <h2>{selectedProduct.name}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
              <p>
                <strong>Quality:</strong> {selectedProduct.quality}
              </p>
              <p>
                <strong>Quantity:</strong> {selectedProduct.quantity}
              </p>
              <p>
                <strong>Price:</strong> ₹{selectedProduct.price}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <p>
                <strong>Farmer Name:</strong> {selectedProduct.farmerName}
              </p>
              <p>
                <strong>Contact Info:</strong> {selectedProduct.contactInfo}
              </p>
              <button onClick={() => handleAddToCart(selectedProduct)} className="add-to-cart-button">
                <FiShoppingCart /> Add to Cart
              </button>
              <button onClick={() => handleNegotiate(selectedProduct)} className="checkout-button">
                Negotiate Price
              </button>
              <button onClick={closeDialog}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
