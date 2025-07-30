import React from 'react';
import { useApi } from '../hooks/useApi';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Home: React.FC = () => {
  const { data: products, loading, error } = useApi<Product[]>('https://fakestoreapi.com/products?limit=8');

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading amazing products...</p>
        </div>
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
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Hipster Store</h1>
        <p className="hero-description">
          Discover amazing products with our revolutionary theme-switching experience. 
          Choose your preferred theme and enjoy a personalized shopping journey.
        </p>
        <div className="hero-buttons">
          <Button variant="primary" size="large">
            Start Shopping
          </Button>
          <Button variant="secondary" size="large">
            Learn More
          </Button>
        </div>
      </div>

      <section className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-description">
          Check out our curated selection of premium products
        </p>
        
        {products && products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No products available at the moment.</p>
          </div>
        )}
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Multiple Themes</h3>
            <p>Switch between three beautiful themes to match your style</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Perfect experience on all devices, from mobile to desktop</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast & Secure</h3>
            <p>Built with modern technologies for optimal performance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;