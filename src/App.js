import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import RecommendedCakes from './Components/RecommendedCakes';
import CustomerReviews from './Components/CustomerReviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import OrderPage from './Components/OrderPage';
import Cart from './Components/Cart';
import CakeDetail from './Components/CakeDetail';

function App() {
  const [cartItems, setCartItems] = React.useState([]);

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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} /> {/* Pass cartItems to Navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order/:idr" element={<OrderPage addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />
            <Route path="/recommended" element={<RecommendedCakes addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />
            <Route path="/reviews" element={<CustomerReviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
            <Route path="/cake-detail/:name" element={<CakeDetail addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
