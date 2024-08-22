import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CakeDetail.css';
import RecommendedCakes from './RecommendedCakes';
import Footer from './Footer';

const CakeDetail = () => {
  const { state } = useLocation(); // Get state from navigation
  const navigate = useNavigate();
  const { cake } = state || {}; // Destructure cake from state, fallback to an empty object
  const [size, setSize] = useState('Half Kg'); // Default size
  const [cartItems, setCartItems] = useState([]); // Local cart state

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          damping: 10,
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount

  // If no cake data is available, show a loading message
  if (!cake) {
    return <div>Loading...</div>;
  }

  // Handle adding cake to cart
  const addToCart = (cake) => {
    setCartItems((prevItems) => [...prevItems, cake]);
  };

  const removeFromCart = (cake) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== cake.name));
  };

  const handleAddToCart = () => {
    const updatedCake = {
      ...cake,
      price: size === 'Full Kg' ? `$${(parseFloat(cake.price.slice(1)) * 2).toFixed(2)}` : cake.price
    };
    addToCart(updatedCake);
    navigate('/');
  };

  return (
    <div>
      <motion.div
        className="cake-detail-page"
        style={{ paddingBottom: '60px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        ref={ref}
      >
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <motion.div
          className="cake-detail-content"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <div className="cake-image-container" >
            <img src={cake.image} alt={cake.name} className="cake-image-img" />
          </div>
          <div className="cake-info" style={{paddingLeft: '40px'}}>
            <motion.h2
              style={{ color: 'black', fontSize: '30px', fontFamily: 'EB Garamond, serif' }}
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              {cake.name}
            </motion.h2>
            <motion.p
              style={{ color: 'black', fontSize: '15px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              Indulge in the classic charm of our Delicious Vanilla Bean Cake. This moist and fluffy cake is baked with premium vanilla beans, ensuring a rich and aromatic flavor in every bite. Each layer is perfectly light and tender, complemented by a smooth, creamy vanilla frosting.
            </motion.p>
            <motion.div
              className="cake-size"
              style={{ paddingTop: '25px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="cake-size">Select Size:</label>
              <select
                id="cake-size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="Half Kg">Half Kg</option>
                <option value="Full Kg">Full Kg</option>
              </select>
            </motion.div>
            <motion.div
              className="cake-price"
              style={{ fontWeight: 'bold', color: 'black' }}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              Price: {size === 'Full Kg' ? `$${(parseFloat(cake.price.slice(1)) * 2).toFixed(2)}` : cake.price}
            </motion.div>
            <button className="add-to-cart-btn" style={{ marginTop: '20px' }} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </motion.div>
      </motion.div>
      <RecommendedCakes addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default CakeDetail;
