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

const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.5)}>
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.6)}>
          <Link to="/order/123">Order</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.7)}>
          <Link to="/recommended">Popular</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.8)}>
          <Link to="/reviews">Reviews</Link>
        </motion.li>
        <motion.li variants={FadeUp(0.9)}>
          <Link to="/contact">Contact</Link>
        </motion.li>
      </motion.ul>
      <motion.div
        className="cart"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={FadeUp(1)}
      >
        <Link to="/cart">
          <FaShoppingCart size={30} color="black" />
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
