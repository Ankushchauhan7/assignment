import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@themeapp.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Theme Street, Design City, DC 12345',
      description: 'Visit our office'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re here to help'
    }
  ];

  return (
    <div className="page-container">
      {/* Contact Hero */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p className="contact-description">
          Have questions about ThemeApp? Want to discuss theming solutions for your project? 
          We'd love to hear from you!
        </p>
      </section>

      <div className="contact-content">
        {/* Contact Form */}
        <section className="contact-form-section">
          <Card className="contact-form-card">
            <h2>Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <p>✅ Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <p>❌ Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-info-card" hover>
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p className="contact-info-value">{info.value}</p>
                <p className="contact-info-description">{info.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <Card className="faq-card">
              <h3>How does theme switching work?</h3>
              <p>
                ThemeApp uses React Context API to manage theme state and CSS variables 
                to apply styling. Themes are persisted in localStorage for consistency 
                across sessions.
              </p>
            </Card>
            <Card className="faq-card">
              <h3>Is the app mobile-friendly?</h3>
              <p>
                Yes! The app is fully responsive and optimized for all device sizes, 
                from mobile phones to large desktop screens.
              </p>
            </Card>
            <Card className="faq-card">
              <h3>What API is used for products?</h3>
              <p>
                We use the FakeStore API to demonstrate real-world data integration 
                with proper error handling and caching mechanisms.
              </p>
            </Card>
            <Card className="faq-card">
              <h3>Can I use this code in my project?</h3>
              <p>
                This is a demonstration project showcasing theming techniques. 
                Feel free to use the concepts and approaches in your own projects!
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;