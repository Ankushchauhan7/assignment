import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeType, ThemeContextType } from '../types/theme';

// Theme definitions with significant differences
const themes: Record<ThemeType, Theme> = {
  theme1: {
    name: 'Minimalist Light',
    type: 'theme1',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      accent: '#3b82f6',
      border: '#e2e8f0',
    },
    fonts: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      secondary: 'Inter, system-ui, -apple-system, sans-serif',
    },
    layout: {
      containerMaxWidth: '1200px',
      sidebarWidth: '0px',
      headerHeight: '80px',
      borderRadius: '8px',
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    animations: {
      transition: 'all 0.3s ease-in-out',
      hover: 'transform 0.2s ease-in-out',
    },
  },
  theme2: {
    name: 'Dark Sidebar',
    type: 'theme2',
    colors: {
      primary: '#f59e0b',
      secondary: '#6b7280',
      background: '#111827',
      surface: '#1f2937',
      text: '#f9fafb',
      textSecondary: '#d1d5db',
      accent: '#fbbf24',
      border: '#374151',
    },
    fonts: {
      primary: 'Playfair Display, Georgia, serif',
      secondary: 'Lora, Georgia, serif',
    },
    layout: {
      containerMaxWidth: '100%',
      sidebarWidth: '280px',
      headerHeight: '70px',
      borderRadius: '12px',
      spacing: {
        xs: '0.75rem',
        sm: '1.25rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '4rem',
      },
    },
    animations: {
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      hover: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  theme3: {
    name: 'Colorful Cards',
    type: 'theme3',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#fef3c7',
      surface: '#ffffff',
      text: '#1f2937',
      textSecondary: '#4b5563',
      accent: '#10b981',
      border: '#f3e8ff',
    },
    fonts: {
      primary: 'Pacifico, cursive',
      secondary: 'Poppins, sans-serif',
    },
    layout: {
      containerMaxWidth: '1400px',
      sidebarWidth: '0px',
      headerHeight: '90px',
      borderRadius: '20px',
      spacing: {
        xs: '1rem',
        sm: '1.5rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '4.5rem',
      },
    },
    animations: {
      transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      hover: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('theme1');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setThemeType(savedTheme);
    }
  }, []);

  // Save theme to localStorage when changed
  const setTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
    localStorage.setItem('selectedTheme', newTheme);
  };

  // Apply CSS variables to document root
  useEffect(() => {
    const theme = themes[themeType];
    const root = document.documentElement;

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply font variables
    Object.entries(theme.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });

    // Apply layout variables
    Object.entries(theme.layout).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey}`, subValue);
        });
      } else {
        root.style.setProperty(`--${key}`, value);
      }
    });

    // Apply animation variables
    Object.entries(theme.animations).forEach(([key, value]) => {
      root.style.setProperty(`--animation-${key}`, value);
    });

    // Add theme class to body for additional styling
    document.body.className = `theme-${themeType}`;
  }, [themeType]);

  const value: ThemeContextType = {
    currentTheme: themes[themeType],
    themeType,
    setTheme,
    themes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};