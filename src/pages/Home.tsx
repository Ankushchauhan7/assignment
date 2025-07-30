import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { api } from '../services/api';
import { Product } from '../components/ProductCard';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        
        const [productsData, categoriesData] = await Promise.all([
          api.getLimitedProducts(12),
          api.getCategories()
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (category: string) => {
    try {
      setLoading(true);
      setSelectedCategory(category);
      
      const productsData = category === 'all' 
        ? await api.getLimitedProducts(12)
        : await api.getProductsByCategory(category);
      
      setProducts(productsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <div className="page-container">
        <LoadingSpinner size="large" text="Loading products..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-highlight">ThemeApp</span>
          </h1>
          <p className="hero-description">
            Experience our beautiful theme system with real product data. 
            Switch between themes to see how dramatically the design changes!
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">{categories.length}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">{cart.length}</span>
              <span className="stat-label">In Cart</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <h2>Shop by Category</h2>
        <div className="category-filters">
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'outline'}
            onClick={() => handleCategoryChange('all')}
          >
            All Products
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Sample Content Section */}
      <section className="sample-content">
        <h2>Sample Content Section</h2>
        <p className="sample-paragraph">
          This is a sample paragraph to demonstrate how text appears in different themes. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <div className="sample-buttons">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>

        <div className="sample-list">
          <h3>Sample List</h3>
          <ul>
            <li>Theme switching with localStorage persistence</li>
            <li>Responsive design for all devices</li>
            <li>Real API integration with FakeStore</li>
            <li>Smooth animations and transitions</li>
            <li>TypeScript for type safety</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;