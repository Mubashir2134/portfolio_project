import React from 'react';

const Section = ({ 
  id,
  children, 
  className = '', 
  background = 'primary',
  fullHeight = false,
  container = true,
  ...props 
}) => {
  const backgrounds = {
    primary: 'bg-[var(--color-primary)]',
    secondary: 'bg-[var(--color-secondary)]',
    accent: 'bg-[var(--color-accent)]',
    gradient: 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]'
  };
  
  const heightClass = fullHeight ? 'min-h-screen' : 'py-16 md:py-20 lg:py-24';
  const containerClass = container ? 'container mx-auto px-4 sm:px-6 lg:px-8' : '';
  
  const classes = `${backgrounds[background]} ${heightClass} ${className}`;
  
  return (
    <section id={id} className={classes} {...props}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
};

export default Section;