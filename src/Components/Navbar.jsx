import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logoimage from './Cakes/Logo.png';
import { motion } from 'framer-motion';
import './Navbar.css';

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

const Navbar = ({ cartItems, toggleCart }) => {
  const cartCount = cartItems.length;

  return (
    <motion.nav
      className="navbar"
      initial="initial"
      animate="animate"
      variants={FadeUp(0.1)}
    >
      <motion.div className="logo" variants={FadeUp(0.2)} style={{ display: 'flex', alignItems: 'center' }}>
  <img src={Logoimage} style={{ width: '60px', height: '60px' }} alt="imagelogo" />
  <h1 style={{ margin: 0 }}>Dreamy Dough</h1>
</motion.div>
      <motion.ul className="nav-links" variants={FadeUp(0.3)}>
        <motion.li variants={FadeUp(0.4)}>
          <a href="#home">Home</a>
        </motion.li>
        <motion.li variants={FadeUp(0.5)}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li variants={FadeUp(0.6)}>
          <Link to="/order">Order</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.7)}>
          <a href="#recommended">Popular</a>
        </motion.li>
        <motion.li variants={FadeUp(0.8)}>
          <a href="#reviews">Reviews</a>
        </motion.li>
        <motion.li variants={FadeUp(0.9)}>
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
      <motion.div
        className="cart"
        onClick={toggleCart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={FadeUp(1)}
      >
        <a href="#cart">
          <FaShoppingCart size={30} color="black" />
          {cartCount > 0 && (
            <motion.span
              className="cart-count"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {cartCount}
            </motion.span>
          )}
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
