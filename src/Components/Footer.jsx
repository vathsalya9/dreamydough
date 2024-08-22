import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/vathsalya" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
        <div className="footer-copyright">
          Copyrights @ <span style={{color:'#413250'}}>2024</span> by Vathsalya Pakalapati
        </div>
        <div className="footer-links">
          <a href="https://github.com/vathsalya/your-repo" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
