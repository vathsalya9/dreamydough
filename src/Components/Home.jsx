import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import { FaArrowRight } from 'react-icons/fa';
import cake1 from './Cakes/Cake 6.jpeg';
import cake2 from './Cakes/Cake 8.jpg';
import cake3 from './Cakes/Cake 11.jpeg';
import cake4 from './Cakes/Cake 12.jpg';
import cake5 from './Cakes/Cake 13.jpg';
import cake6 from './Cakes/Cake 14.jpg';

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: 'easeInOut',
      },
    },
  };
};

const Home = () => {
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(0);
  const navigate = useNavigate();

  const leftImages = [cake6, cake5, cake4];
  const rightImages = [cake1, cake2, cake3];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
    }, 8000);

    const rightInterval = setInterval(() => {
      setRightImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
    }, 8000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [leftImages.length, rightImages.length]);

  useEffect(() => {
    // Scroll to top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleOrderNowClick = () => {
    navigate('/order');
  };

  return (
    <motion.div
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="home-page">
        <motion.div className="column" variants={FadeUp(0.2)}>
          <div className="image-container">
            {leftImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Left Cake ${index}`}
                className={`image ${index === leftImageIndex ? 'visible' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: index === leftImageIndex ? 1 : 0, scale: index === leftImageIndex ? 1 : 0.8 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className="middle-column" variants={FadeUp(0.4)}>
          <motion.div style={{ fontSize: '35px' }}>
            <h2>
              <span className="bold-text">Baking</span> <span className="normal-text">happiness</span><br />
              <span className="normal-text">every</span> <span className="bold-text">Day</span>
            </h2>
          </motion.div>
          <motion.p>
            <span>Welcome to <span className="special-text">Dreamy Dough</span>,</span> where every bite is a taste of pure bliss, crafted with love, baked to perfection, and designed to make your sweetest dreams come true.
          </motion.p>
          <motion.button className="order-button" onClick={handleOrderNowClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Order Now <FaArrowRight className="arrow-icon" />
          </motion.button>
        </motion.div>

        <motion.div className="column" variants={FadeUp(0.6)}>
          <div className="image-container">
            {rightImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Right Cake ${index}`}
                className={`image ${index === rightImageIndex ? 'visible' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: index === rightImageIndex ? 1 : 0, scale: index === rightImageIndex ? 1 : 0.8 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
