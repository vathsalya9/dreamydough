import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CustomerReviews.css'; // Ensure you create this CSS file

const reviews = [
  {
    name: 'John Doe',
    date: 'August 12, 2024',
    rating: 5,
    text: 'Excellent service and delicious cakes! Will definitely order again.',
  },
  {
    name: 'Jane Smith',
    date: 'July 30, 2024',
    rating: 4,
    text: 'Great variety of cakes, but the delivery was a bit delayed.',
  },
  {
    name: 'Alice Johnson',
    date: 'June 15, 2024',
    rating: 5,
    text: 'Loved the Red Velvet Cake. The quality is top-notch!',
  },
  // Add more reviews as needed
];

const reviewAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 10, duration: 2.0 } }
};

const CustomerReviews = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div id="reviews" ref={ref}>
      <motion.section
        className="customer-reviews-section"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={reviewAnimation}
      >
        <motion.h2
          className="reviews-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
        >
          Customer Reviews
        </motion.h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="review-card"
              variants={reviewAnimation}
              initial="initial"
              animate={controls}
              transition={{ delay: index * 0.2 }}
            >
              <div className="review-name">{review.name}</div>
              <div className="review-date" style={{ fontSize: '15px' }}>{review.date}</div>
              <div className="review-rating">
                {Array(review.rating).fill('★').join('')} {/* Display stars */}
              </div>
              <div className="review-text" style={{ fontSize: '15px' }}>{review.text}</div>
            </motion.div>
          ))}
        </Slider>
      </motion.section>
    </div>
  );
};

export default CustomerReviews;
