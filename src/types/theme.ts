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