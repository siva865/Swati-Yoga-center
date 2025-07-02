import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Swati Sharma Yoga</h3>
          <p>
            Empowering your body, mind, and soul through the ancient practice of yoga.
            Join online and in-person classes designed for wellness, balance, and inner peace.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get in Touch</h4>
          <p>Email: <a href="mailto:swati19391@gmail.com">swati19391@gmail.com</a></p>
          <p>Phone: +44 7447 850496</p>
          <p>Location: London, UK</p>

          <div className="social-links">
            <a href="mailto:swati19391@gmail.com"><i className="fas fa-envelope"></i></a>
            <a href="https://www.instagram.com/swatisharmayoga" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Swati Sharma Yoga. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
