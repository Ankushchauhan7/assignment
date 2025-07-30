import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">
          {truncateText(product.title, 50)}
        </h3>
        <p className="product-description">
          {truncateText(product.description, 100)}
        </p>
        <div className="product-details">
          <span className="product-category">{product.category}</span>
          <div className="product-rating">
            <span className="rating-stars">
              {'★'.repeat(Math.round(product.rating.rate))}
              {'☆'.repeat(5 - Math.round(product.rating.rate))}
            </span>
            <span className="rating-count">({product.rating.count})</span>
          </div>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;