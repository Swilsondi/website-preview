import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/lib/utils';

/**
 * ScrollButton component - A reusable button that scrolls to top when clicked
 * Can be used throughout the application for consistent scroll behavior
 */
const ScrollButton = ({ 
  children, 
  smooth = true, 
  className = "", 
  variant = "default", 
  size = "default",
  ...props 
}) => {
  const handleClick = (e) => {
    // If this button is used with an onClick prop, call it
    if (props.onClick) {
      props.onClick(e);
    }
    // Scroll to top regardless
    scrollToTop(smooth);
  };

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ScrollButton;