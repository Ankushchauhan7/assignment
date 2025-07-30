import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const About: React.FC = () => {
  const { currentTheme, themes, setTheme } = useTheme();

  const features = [
    {
      title: 'Theme Persistence',
      description: 'Your theme choice is saved in localStorage and persists across page reloads.',
      icon: '💾'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works perfectly on desktop, tablet, and mobile devices.',
      icon: '📱'
    },
    {
      title: 'Real API Integration',
      description: 'Integrated with FakeStore API to demonstrate real-world data handling.',
      icon: '🔗'
    },
    {
      title: 'TypeScript',
      description: 'Built with TypeScript for better code quality and developer experience.',
      icon: '🔷'
    },
    {
      title: 'Smooth Animations',
      description: 'Beautiful transitions and animations that enhance user experience.',
      icon: '✨'
    },
    {
      title: 'Security First',
      description: 'Input validation, URL sanitization, and secure API handling.',
      icon: '🔒'
    }
  ];

  return (
    <div className="page-container">
      {/* About Hero */}
      <section className="about-hero">
        <h1>About ThemeApp</h1>
        <p className="about-description">
          ThemeApp is a demonstration of advanced theming capabilities in React. 
          Built with TypeScript, it showcases how dramatically different themes can 
          transform the entire user experience while maintaining functionality.
        </p>
      </section>

      {/* Current Theme Info */}
      <section className="current-theme-section">
        <Card className="theme-info-card">
          <h2>Current Theme: {currentTheme.name}</h2>
          <div className="theme-details">
            <div className="theme-detail">
              <strong>Primary Font:</strong> {currentTheme.fonts.primary}
            </div>
            <div className="theme-detail">
              <strong>Layout Style:</strong> 
              {currentTheme.layout.sidebarWidth !== '0px' ? ' Sidebar Layout' : ' Full Width'}
            </div>
            <div className="theme-detail">
              <strong>Animation Style:</strong> {currentTheme.animations.transition}
            </div>
          </div>
        </Card>
      </section>

      {/* Theme Showcase */}
      <section className="theme-showcase">
        <h2>Available Themes</h2>
        <div className="themes-grid">
          {Object.entries(themes).map(([key, theme]) => (
            <Card 
              key={key} 
              className={`theme-showcase-card ${currentTheme.type === key ? 'active' : ''}`}
              hover
            >
              <div className="theme-preview-header">
                <h3>{theme.name}</h3>
                <div 
                  className="theme-color-preview"
                  style={{ backgroundColor: theme.colors.primary }}
                ></div>
              </div>
              <div className="theme-preview-content">
                <p><strong>Primary Color:</strong> {theme.colors.primary}</p>
                <p><strong>Background:</strong> {theme.colors.background}</p>
                <p><strong>Font:</strong> {theme.fonts.primary.split(',')[0]}</p>
                <p><strong>Layout:</strong> {theme.layout.sidebarWidth !== '0px' ? 'Sidebar' : 'Full Width'}</p>
              </div>
              <div className="theme-preview-footer">
                <Button
                  variant={currentTheme.type === key ? 'secondary' : 'primary'}
                  onClick={() => setTheme(key as any)}
                  disabled={currentTheme.type === key}
                >
                  {currentTheme.type === key ? 'Current Theme' : 'Switch to This Theme'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card" hover>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Details */}
      <section className="tech-section">
        <h2>Technical Implementation</h2>
        <Card className="tech-details">
          <div className="tech-grid">
            <div className="tech-item">
              <h4>Frontend Framework</h4>
              <p>React 19 with TypeScript</p>
            </div>
            <div className="tech-item">
              <h4>Routing</h4>
              <p>React Router v7</p>
            </div>
            <div className="tech-item">
              <h4>Styling</h4>
              <p>CSS Variables + Tailwind CSS</p>
            </div>
            <div className="tech-item">
              <h4>State Management</h4>
              <p>React Context API</p>
            </div>
            <div className="tech-item">
              <h4>API Integration</h4>
              <p>FakeStore API with caching</p>
            </div>
            <div className="tech-item">
              <h4>Build Tool</h4>
              <p>Vite with hot reload</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Card className="cta-card">
          <h2>Try Different Themes!</h2>
          <p>
            Experience how each theme completely transforms the application's 
            look and feel. Each theme has unique colors, fonts, layouts, and animations.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" onClick={() => setTheme('theme1')}>
              Minimalist Light
            </Button>
            <Button variant="primary" onClick={() => setTheme('theme2')}>
              Dark Sidebar
            </Button>
            <Button variant="primary" onClick={() => setTheme('theme3')}>
              Colorful Cards
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About;