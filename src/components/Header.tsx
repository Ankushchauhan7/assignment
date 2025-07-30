import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { ThemeType } from '../types';

const Header: React.FC = () => {
  const { currentTheme, themeType, setTheme, themes } = useTheme();
  const location = useLocation();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeType);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Hipster App</span>
          </Link>
        </div>

        <nav className="navigation">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <div className="header-right">
          <div className="theme-selector">
            <label htmlFor="theme-select" className="theme-label">
              Theme:
            </label>
            <select
              id="theme-select"
              value={themeType}
              onChange={handleThemeChange}
              className="theme-dropdown"
            >
              {Object.entries(themes).map(([key, theme]) => (
                <option key={key} value={key}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;