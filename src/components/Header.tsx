import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types/theme';

const Header: React.FC = () => {
  const { currentTheme, themeType, setTheme, themes } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setIsDropdownOpen(false);
  };

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo/Brand */}
        <div className="header-brand">
          <Link to="/" className="brand-link">
            <div className="logo">
              <span className="logo-icon">🎨</span>
              <span className="brand-text">ThemeApp</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActivePage('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActivePage('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActivePage('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Theme Dropdown */}
        <div className="theme-selector">
          <button
            className="theme-dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Select theme"
          >
            <span className="theme-icon">🎨</span>
            <span className="theme-name">{currentTheme.name}</span>
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          
          {isDropdownOpen && (
            <div className="theme-dropdown">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  className={`theme-option ${themeType === key ? 'active' : ''}`}
                  onClick={() => handleThemeChange(key as ThemeType)}
                >
                  <span className="theme-preview" data-theme={key}></span>
                  <span>{theme.name}</span>
                  {themeType === key && <span className="check-mark">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActivePage('/') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${isActivePage('/about') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-link ${isActivePage('/contact') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;