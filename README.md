# ThemeApp - Advanced React Theme System

A comprehensive React application demonstrating advanced theming capabilities with TypeScript, featuring three dramatically different themes, real API integration, and responsive design.

## 🎨 Features

### Theme System
- **3 Distinct Themes** with completely different layouts, fonts, and styling:
  - **Theme 1 (Minimalist Light)**: Clean, modern design with Inter font and full-width layout
  - **Theme 2 (Dark Sidebar)**: Elegant dark theme with Playfair Display serif font and sidebar layout
  - **Theme 3 (Colorful Cards)**: Playful, vibrant theme with Pacifico font and card-based grid layout

### Core Functionality
- ✅ **Theme Persistence**: Uses localStorage to remember user's theme choice
- ✅ **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- ✅ **Real API Integration**: FakeStore API with caching and error handling
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **React Router**: Multi-page navigation (Home, About, Contact)
- ✅ **Security**: Input validation, URL sanitization, and secure API handling
- ✅ **Smooth Animations**: Beautiful transitions when switching themes
- ✅ **Accessibility**: Keyboard navigation and screen reader support

### Technical Implementation
- **Frontend**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: CSS Variables + Tailwind CSS
- **State Management**: React Context API
- **Build Tool**: Vite with hot reload
- **Fonts**: Google Fonts (Inter, Playfair Display, Lora, Pacifico, Poppins)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd theme-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Theme Differences

Each theme provides a dramatically different user experience:

### Theme 1: Minimalist Light
- **Layout**: Full-width container layout
- **Colors**: Light background with blue accents
- **Typography**: Inter sans-serif font family
- **Style**: Clean, minimal, modern
- **Animations**: Subtle, fast transitions

### Theme 2: Dark Sidebar
- **Layout**: Sidebar navigation layout (280px sidebar)
- **Colors**: Dark background with golden accents
- **Typography**: Playfair Display serif font
- **Style**: Elegant, sophisticated, editorial
- **Animations**: Smooth cubic-bezier transitions

### Theme 3: Colorful Cards
- **Layout**: Card-based grid with larger spacing
- **Colors**: Warm yellow background with pink/purple accents
- **Typography**: Pacifico cursive for headings, Poppins for body
- **Style**: Playful, vibrant, creative
- **Animations**: Bouncy, playful animations with rotation

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1024px+ (full features)
- **Tablet**: 768px-1023px (adapted layout)
- **Mobile**: <768px (mobile-optimized navigation and layout)

## 🔒 Security Features

- **API URL Validation**: Ensures only valid FakeStore API URLs
- **Input Sanitization**: All user inputs are properly sanitized
- **Request Timeouts**: 10-second timeout for API requests
- **Error Boundaries**: Graceful error handling throughout the app
- **XSS Protection**: Proper escaping of user-generated content

## 🌐 API Integration

### FakeStore API
- **Endpoint**: `https://fakestoreapi.com`
- **Features**: Product listings, categories, individual products
- **Caching**: 5-minute cache to reduce API calls
- **Error Handling**: Comprehensive error handling with user feedback
- **Security**: URL validation and request sanitization

### API Functions
- `getProducts()` - Fetch all products
- `getProduct(id)` - Fetch single product
- `getProductsByCategory(category)` - Fetch products by category
- `getCategories()` - Fetch all categories
- `getLimitedProducts(limit)` - Fetch limited products for performance

## 🎨 Customization

### Adding New Themes
1. Define theme in `src/context/ThemeContext.tsx`
2. Add theme-specific CSS classes in `src/index.css`
3. Update TypeScript types in `src/types/theme.ts`

### Theme Structure
```typescript
{
  name: 'Theme Name',
  type: 'themeKey',
  colors: { /* color palette */ },
  fonts: { /* font families */ },
  layout: { /* layout properties */ },
  animations: { /* animation settings */ }
}
```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with theme selector
│   ├── Button.tsx      # Themed button component
│   ├── Card.tsx        # Themed card component
│   ├── ProductCard.tsx # Product display component
│   └── LoadingSpinner.tsx # Loading indicator
├── pages/              # Page components
│   ├── Home.tsx        # Home page with products
│   ├── About.tsx       # About page with theme info
│   └── Contact.tsx     # Contact page with form
├── context/            # React Context
│   └── ThemeContext.tsx # Theme management
├── services/           # API services
│   └── api.ts          # FakeStore API integration
├── types/              # TypeScript types
│   └── theme.ts        # Theme type definitions
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and theme CSS
```

## 🔧 Development

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with React rules
- **Prettier**: Code formatting (if configured)

### Performance Optimizations
- **API Caching**: Reduces redundant network requests
- **Image Lazy Loading**: Improves initial page load
- **Code Splitting**: Automatic code splitting with Vite
- **CSS Variables**: Efficient theme switching

## 🌟 Key Highlights

1. **Dramatic Theme Differences**: Each theme completely transforms the app's appearance
2. **Real-World Integration**: Uses actual API data with proper error handling
3. **Production Ready**: Includes security, accessibility, and performance optimizations
4. **Type Safety**: Full TypeScript implementation with strict typing
5. **Modern React**: Uses latest React features and best practices
6. **Responsive Design**: Works perfectly on all device sizes
7. **Smooth UX**: Beautiful animations and transitions between themes

## 📄 License

This project is for demonstration purposes. Feel free to use the concepts and approaches in your own projects!

## 🤝 Contributing

This is a demonstration project, but feedback and suggestions are welcome!

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
