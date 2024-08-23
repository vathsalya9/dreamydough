import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'; // Import the back arrow and cart icons
import Footer from './Footer';
import './OrderPage.css'; // Import any specific CSS for OrderPage
import cake1 from './Cakes/Cake 1.jpeg';
import cake2 from './Cakes/Cake 2.jpg';
import cake3 from './Cakes/Cake 3.jpeg';
import cake4 from './Cakes/Cake 4.jpg';
import cake5 from './Cakes/Cake 5.jpeg';
import cake6 from './Cakes/Cake 6.jpeg';
import cake7 from './Cakes/Cake 7.jpg';
import cake8 from './Cakes/Cake 8.jpg';
import cake9 from './Cakes/Cake 9.png';

// Array of cakes with name, price, and image
const cakes = [
  { name: 'Chocolate Cake', price: '$25.00', image: cake7 },
  { name: 'Vanilla Cake', price: '$20.00', image: cake2 },
  { name: 'Red Velvet Cake', price: '$30.00', image: cake9 },
  { name: 'Lemon Cake', price: '$22.00', image: cake1 },
  { name: 'Carrot Cake', price: '$27.00', image: cake4 },
  { name: 'Cheesecake', price: '$28.00', image: cake6 },
  { name: 'Strawberry Cake', price: '$24.00', image: cake5 },
  { name: 'Coffee Cake', price: '$26.00', image: cake8 },
  { name: 'Apple Pie', price: '$23.00', image: cake3 },
  { name: 'Chocolate Cake', price: '$25.00', image: cake7 },
  { name: 'Vanilla Cake', price: '$20.00', image: cake2 },
  { name: 'Red Velvet Cake', price: '$30.00', image: cake9 },
  { name: 'Lemon Cake', price: '$22.00', image: cake1 },
  { name: 'Carrot Cake', price: '$27.00', image: cake4 },
  { name: 'Cheesecake', price: '$28.00', image: cake6 },
  { name: 'Strawberry Cake', price: '$24.00', image: cake5 },
  { name: 'Coffee Cake', price: '$26.00', image: cake8 },
  { name: 'Apple Pie', price: '$23.00', image: cake3 },
  { name: 'Strawberry Cake', price: '$24.00', image: cake5 },
  { name: 'Coffee Cake', price: '$26.00', image: cake8 },
  { name: 'Apple Pie', price: '$23.00', image: cake3 },
  { name: 'Chocolate Cake', price: '$25.00', image: cake7 },
  { name: 'Lemon Cake', price: '$22.00', image: cake1 },
  { name: 'Carrot Cake', price: '$27.00', image: cake4 },
];

const OrderPage = ({ addToCart, removeFromCart, cartItems, toggleCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if a cake is in the cart
  const isInCart = (cake) => {
    return cartItems.some((item) => item.name === cake.name);
  };

  const goToCakeDetail = (cake) => {
    navigate(`/cake-detail/${cake.name}`, { state: { cake } });
  };

  const goToCartPage = () => {
    navigate('/cart'); // Navigate to the Cart page
  };

  return (
    <div className="order-page-container">
      <div className="header">
        <div className="back-arrow" onClick={() => navigate('/')}>
          <FaArrowLeft size={24} />
        </div>
        <div className="cart" 
        onClick={goToCartPage} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
          <FaShoppingCart size={30} color="black" />
          {cartItems.length > 0 && (
            <div className="cart-count">{cartItems.length}</div>
          )}
        </div>
      </div>
      <div className="order-page-content">
        <h2 className="order-page-title">Order Your Cakes</h2>
        <div className="cakes-grid">
          {cakes.map((cake, index) => (
            <div className="cake-card" key={index}>
              <div className="cake-inner">
                <div className="cake-front">
                  <img src={cake.image} alt={cake.name} />
                  <div className="cake-name">{cake.name}</div>
                </div>
                <div className="cake-back">
                  <img
                    style={{ width: '140px', height: '70px', cursor: 'pointer' }}
                    onClick={() => goToCakeDetail(cake)}
                    src={cake.image}
                    alt={cake.name}
                  />
                  <div className="cake-name">{cake.name}</div>
                  <div className="cake-price">{cake.price}</div>
                  {isInCart(cake) ? (
                    <button
                      className="order-now-btn"
                      style={{ backgroundColor: 'gray' }}
                      onClick={() => removeFromCart(cake)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="order-now-btn"
                      onClick={() => addToCart(cake)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
