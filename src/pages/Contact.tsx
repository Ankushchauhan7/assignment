import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Thank you for your message!</h2>
          <p>We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="contact-hero">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="business">Business Partnership</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" variant="primary" size="large">
                Send Message
              </Button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Contact Information</h2>
            
            <div className="contact-info-card">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Office Address</h3>
                  <p>
                    #01-04, 75 Ayer Rajah Crescent<br />
                    139953, Singapore
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+65 8231 4107</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>hr@hipster-inc.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-details">
                  <h3>Website</h3>
                  <p>
                    <a href="https://www.hipster-inc.com" target="_blank" rel="noopener noreferrer">
                      www.hipster-inc.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div className="contact-details">
                  <h3>Company Registration</h3>
                  <p>UEN: 201621408D</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;