import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Contact.css'; // Import the CSS file for styling
import cake1 from './Cakes/Cake 10.jpeg'; // Ensure image paths are correct
import cake2 from './Cakes/Cake 1.jpeg';
import cake3 from './Cakes/Cake 2.jpg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const images = [cake1, cake2, cake3]; // Array of images

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Contact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCYvMO3GcDaf814sGhUbdgjUyqKMJ0tKGs',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div id="contact">
      <div className="contact-reserve-section">
        <motion.div className="contact-reserve-container" ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}
        >
          <div className="cake-image-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cake ${index + 1}`}
                className={`cake-image ${currentImageIndex === index ? 'show' : ''}`}
              />
            ))}
          </div>
          <div className="contact-reserve-text">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              style={{marginLeft: '120px'}}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: '15px', color: 'black', marginLeft: '80px' }}>
                <p><FaEnvelope /> contact@cakecompany.com</p>
                <p><FaPhone /> (123) 456-7890</p>
                <p><FaMapMarkerAlt /> 123 Cake Street, Bakery City, CA</p>
              </div>
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: '20px', marginTop: '60px', marginRight: '60px' }}
                >
                  Reserve your <span style={{ color: '#413250' }}>CAKE</span><br />
                  Now and ensure your
                  <span style={{ color: '#413250' }}> </span>special occasion is <span style={{ color: '#413250' }}>MEMORABLE</span><br />
                </motion.h2>
              </div>
            </motion.div>
          </div>
          <div className="contact-map">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentLocation}
                zoom={15}
              >
                <Marker position={currentLocation} />
              </GoogleMap>
            ) : <div>Loading map...</div>}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
