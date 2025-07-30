import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = false,
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'card--hover' : '';
  const clickableClasses = onClick ? 'card--clickable' : '';
  
  const combinedClasses = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;