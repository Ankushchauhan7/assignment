import React from 'react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="about-hero">
        <h1 className="page-title">About Hipster Pte. Ltd.</h1>
        <p className="page-subtitle">
          Innovating the future of e-commerce with cutting-edge technology and design
        </p>
      </div>

      <section className="about-content">
        <div className="content-grid">
          <div className="content-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize online shopping experiences, 
              Hipster Pte. Ltd. combines innovative technology with exceptional design 
              to create platforms that adapt to every user's preferences.
            </p>
            <p>
              Our flagship feature - dynamic theme switching - allows users to 
              personalize their shopping experience like never before. Whether you 
              prefer minimalist designs, professional dark modes, or vibrant colorful 
              interfaces, we've got you covered.
            </p>
          </div>
          <div className="content-image">
            <div className="placeholder-image">
              <span>🏢</span>
              <p>Our Singapore Office</p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-info">
        <h2>Company Information</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Address</h3>
            <p>
              #01-04, 75 Ayer Rajah Crescent<br />
              139953, Singapore
            </p>
          </div>
          <div className="info-card">
            <h3>Registration</h3>
            <p>UEN: 201621408D</p>
          </div>
          <div className="info-card">
            <h3>Contact</h3>
            <p>
              Phone: +65 8231 4107<br />
              Email: hr@hipster-inc.com
            </p>
          </div>
          <div className="info-card">
            <h3>Website</h3>
            <p>
              <a href="https://www.hipster-inc.com" target="_blank" rel="noopener noreferrer">
                www.hipster-inc.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We constantly push boundaries to create better user experiences</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🎨</div>
            <h3>Design Excellence</h3>
            <p>Beautiful, functional designs that users love to interact with</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🔒</div>
            <h3>Security</h3>
            <p>Your data and privacy are our top priorities</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🌟</div>
            <h3>Quality</h3>
            <p>We deliver only the highest quality products and services</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Experience the Future?</h2>
        <p>Join thousands of satisfied customers who have transformed their shopping experience</p>
        <div className="cta-buttons">
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button variant="secondary" size="large">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;