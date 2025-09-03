import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl overflow-hidden';
  const hoverClasses = hover ? 'card-hover' : '';
  const glassClasses = glass ? 'glass-morphism' : 'bg-slate-800/50 backdrop-blur-sm';
  
  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;