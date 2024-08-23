import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendedCakes.css';
import { FaShoppingCart } from 'react-icons/fa';
import cake1 from './Cakes/Cake 1.jpeg';
import cake2 from './Cakes/Cake 2.jpg';
import cake3 from './Cakes/Cake 3.jpeg';
import cake4 from './Cakes/Cake 4.jpg';
import cake5 from './Cakes/Cake 5.jpeg';
import cake6 from './Cakes/Cake 6.jpeg';
import cake7 from './Cakes/Cake 7.jpg';
import cake8 from './Cakes/Cake 8.jpg';
import cake9 from './Cakes/Cake 9.png';

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
  { name: 'Vanilla Cake', price: '$20.00', image: cake2 },
  { name: 'Red Velvet Cake', price: '$30.00', image: cake9 },
  { name: 'Lemon Cake', price: '$22.00', image: cake1 },
];

const RecommendedCakes = ({ addToCart, removeFromCart, cartItems }) => {
  const navigate = useNavigate(); // Hook for navigation

  const isInCart = (cake) => cartItems.some((item) => item.name === cake.name);

  const goToCakeDetail = (cake) => {
    navigate(`/cake-detail/${cake.name}`, { state: { cake } });
  };

  const goToCartPage = () => {
    navigate('/cart'); // Navigate to the Cart page
  };
  

  return (
    <div id="recommended">
      <section className="recommended-cakes-section">
        <h2 className="recommended-cakes-title">Popular Cakes</h2>
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
                    src={cake.image}
                    onClick={() => goToCakeDetail(cake)}
                    alt={cake.name}
                  />
                  <div className="cake-name">{cake.name}</div>
                  <div className="cake-price">{cake.price}</div>
                  {isInCart(cake) ? (
                    <button
                      className="add-to-cart-btn"
                      style={{ backgroundColor: 'gray' }}
                      onClick={() => removeFromCart(cake)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="add-to-cart-btn"
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
      </section>
    </div>
  );
};

export default RecommendedCakes;


