import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import RecommendedCakes from './Components/RecommendedCakes';
import CustomerReviews from './Components/CustomerReviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import OrderPage from './Components/OrderPage';
import Cart from './Components/Cart';
import CakeDetail from './Components/CakeDetail'; // Import CakeDetail component

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = (cake) => {
    const existingItem = cartItems.find(item => item.name === cake.name);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.name === cake.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...cake, quantity: 1 }]);
    }
  };

  const removeFromCart = (cake) => {
    const existingItem = cartItems.find(item => item.name === cake.name);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.name !== cake.name));
    } else {
      setCartItems(cartItems.map(item =>
        item.name === cake.name ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar cartItems={cartItems} toggleCart={toggleCart} />
              <Home />
              <About />
              <RecommendedCakes addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
              <CustomerReviews />
              <Contact />
              <Footer />
              <Cart 
                cartItems={cartItems} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                clearCart={clearCart} 
                isCartOpen={isCartOpen} 
                toggleCart={toggleCart} 
              />
            </>
          } />
          <Route path="/order" element={<OrderPage addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} toggleCart={toggleCart} />} />
          <Route path="/cake-detail" element={<CakeDetail addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
