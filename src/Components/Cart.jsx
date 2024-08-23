import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Add CSS for styling
import { FaArrowLeft } from 'react-icons/fa'; 

const Cart = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.slice(1))), 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
      <div className="back-arrow" onClick={() => navigate('/')}>
          <FaArrowLeft size={24} />
          <h2>My Cart</h2>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" /> 
              <div className="cart-item-details">
                <div style={{marginTop: "30px"}}>
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                  <div style={{width: '600px'}}>
                  <span style={{color: '#957DAD'}}>Indulge in the classic charm of our Delicious Vanilla Bean Cake. This moist and fluffy cake is baked with premium vanilla beans, ensuring a rich and aromatic flavor in every bite. Each layer is perfectly light and tender, complemented by a smooth, creamy vanilla frosting.</span>
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <div className="cart-item-price">${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}</div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="subtotal">
            <h3>Subtotal: ${getTotalPrice()}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
