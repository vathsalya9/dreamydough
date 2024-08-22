import React, { useEffect, useState } from 'react';
import './About.css';
import cake1 from './Cakes/Cake 1.jpg';
import cake2 from './Cakes/Cake 2.jpg';
import cake3 from './Cakes/Cake 9.png';
import cake4 from './Cakes/Cake 7.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FadeUp function for animating elements with a fade-up effect
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

const About = () => {
  const [current, setCurrent] = useState(0);
  const images = [cake1, cake2, cake3, cake4];

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer hooks
  const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.1 });

  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    if (inViewText) {
      controlsText.start('animate');
    }
    if (inViewImage) {
      controlsImage.start('animate');
    }
  }, [controlsText, controlsImage, inViewText, inViewImage]);

  return (
    <div id="about">
      <motion.section className="about-section" initial="initial" animate="animate" variants={FadeUp(1.0)}>
        <div className="about-content">
          <motion.div
            className="text-column"
            ref={refText}
            initial="initial"
            animate={controlsText}
            variants={FadeUp(0.5)}
          >
            <div style={{ marginLeft: '60px', marginTop: '80px', fontSize: '10px' }}>
              <h2>
                OUR <span style={{ color: '#413250' }}>CAKES</span><br />
                ARE HANDCRAFTED<br />
                WITH <span style={{ color: '#413250' }}>LOVE</span><br />
              </h2>
            </div>
            <div style={{ marginLeft: '60px', marginTop: '20px', fontSize: '7px' }}>
              <p className="intro-text">
                <span className="highlight-text">Dreamy Dough</span> Cakes began with a simple idea to bring joy and delight through the art of baking. What started as a small kitchen endeavor quickly blossomed into a full-fledged bakery, where we pour our heart and soul into every cake we create. Our team of talented bakers and decorators are dedicated to ensuring that each cake is not only delicious but also a work of art.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="image-column"
            ref={refImage}
            initial="initial"
            animate={controlsImage}
            variants={FadeUp(0.8)}
          >
            <div className="image-slider">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Cake ${index + 1}`}
                  className={`slider-image ${current === index ? 'active' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={current === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
