import React from 'react';
import Card from './Card';
import Button from './Button';

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

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className="product-card" hover>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description
          }
        </p>
        <div className="product-rating">
          <span className="rating-stars">
            {'★'.repeat(Math.floor(product.rating.rate))}
            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
          </span>
          <span className="rating-count">({product.rating.count})</span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="small"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;