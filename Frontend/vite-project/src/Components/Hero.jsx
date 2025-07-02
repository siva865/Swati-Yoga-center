import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import bgImage from '../assets/yoga-background.jpeg';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section 
      className="home" 
      style={{ backgroundImage: `linear-gradient(rgba(211, 198, 182, 0.7), rgba(196, 163, 128, 0.7)), url(${bgImage})` }}
      id="home"
    >
      <div className="home-content">
        <div className="text-container">
          <h1>Find Balance with Swati</h1>
          <p className="subtitle">Certified Yoga Trainer based in London</p>
          <p className="description">Helping you achieve mental peace and physical wellness through personalized yoga sessions</p>
          
          <div className="btn-group">
            <a href="#classes" className="btn primary">
              Explore Classes
            </a>
            <button 
              className="btn secondary" 
              onClick={() => setShowMore(true)}
            >
              Learn More
            </button>
          </div>
        </div>

        {showMore && (
          <div className="learn-more-card">
            <button 
              className="close-btn" 
              onClick={() => setShowMore(false)}
              aria-label="Close"
            >
              <HiX size={24} />
            </button>
            <h3>Why Choose Swati?</h3>
            <p>
              With a unique blend of traditional techniques and modern approaches, 
              Swati's yoga sessions transform both body and mind. Experience:
            </p>
            <ul>
              <li>Personalized sessions tailored to your needs</li>
              <li>Holistic mind-body-breath connection</li>
              <li>8+ years of professional expertise</li>
              <li>Proven stress-reduction methods</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;