// Theme types
export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface Theme {
  name: string;
  type: ThemeType;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  layout: {
    containerMaxWidth: string;
    sidebarWidth: string;
    headerHeight: string;
    borderRadius: string;
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  animations: {
    transition: string;
    hover: string;
  };
}

export interface ThemeContextType {
  currentTheme: Theme;
  themeType: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themes: Record<ThemeType, Theme>;
}

// API types
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}