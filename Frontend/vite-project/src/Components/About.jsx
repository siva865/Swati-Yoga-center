import React from 'react';
import trainer from '../assets/swati.jpeg';
import { FaAward, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="profile-section">
          <div className="image-wrapper">
            <img 
              src={trainer} 
              alt="Trainer Swati" 
              className="profile-image"
            />
            <div className="experience-badge">
              <FaAward className="badge-icon" />
              <span>8+ Years Experience</span>
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <h2>About <span className="highlight">Swati</span></h2>
          
          <div className="bio-section">
            <p className="intro">
               Traditional yoga teacher from India
            </p>
            <p className="description">
              My yoga journey started when I was in primary school. I was labelled a chubby child and was sent to yoga classes to lose wait. But it did more than that it left an imprint so deep that after not practicing yoga for few years while growing up I came back to it in my 20s and decided to study it and finished a one year course from university in India. Since then, I have dedicated my life to practice, study, and teach Hatha yoga.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <FaUserGraduate />
                </div>
                <div className="stat-content">
                  <span className="number">1000+</span>
                  <span className="label">Students Trained</span>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <FaAward />
                </div>
                <div className="stat-content">
                  <span className="number">15+</span>
                  <span className="label">Countries Taught</span>
                </div>
              </div>
            </div>
            
            <div className="specialization">
              <h4>Specializations:</h4>
              <div className="tags">
                <span>Hatha Yoga</span>
                <span>Pranayama</span>
                <span>Meditation</span>
                <span>Stress Relief</span>
                <span>Posture Correction</span>
                <span> pre / post natal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;