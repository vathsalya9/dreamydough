import React from 'react';
import './Cart.css'; // Add CSS for styling

const Cart = ({ cartItems, addToCart, removeFromCart, clearCart, isCartOpen, toggleCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * parseFloat(item.price.slice(1))), 0).toFixed(2);
  };

  return (
    <div className={`cart-page ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>My Cart</h2>
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>Clear All</button>
          <button className="close-cart-btn" onClick={toggleCart}>Close</button>
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
                <div>
                <h4>{item.name}</h4>
                <span>{item.price}</span>
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
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
