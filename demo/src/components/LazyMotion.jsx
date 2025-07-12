import { lazy, Suspense, useState, useEffect } from 'react';
import { useOptimizedAnimation } from '@/hooks/useOptimizedAnimation';

// Lazy load framer-motion components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ 
  default: mod.motion.div 
})));

const MotionHeader = lazy(() => import('framer-motion').then(mod => ({ 
  default: mod.motion.header 
})));

const MotionSection = lazy(() => import('framer-motion').then(mod => ({ 
  default: mod.motion.section 
})));

const MotionSpan = lazy(() => import('framer-motion').then(mod => ({ 
  default: mod.motion.span 
})));

/**
 * Creates a performance-optimized motion component that:
 * 1. Lazy loads framer-motion only when needed
 * 2. Respects user's reduced motion preferences
 * 3. Provides static fallback for low-end devices
 */
export function LazyMotion({ 
  as = 'div', 
  children, 
  animationType = 'fadeIn',
  fallback = null,
  ...props 
}) {
  const { shouldAnimate, getAnimationConfig } = useOptimizedAnimation();
  const [isClient, setIsClient] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Return static element if not on client or animations shouldn't run
  if (!isClient || !shouldAnimate) {
    return <div {...props}>{children}</div>;
  }
  
  // Get animation config based on type
  const animationConfig = getAnimationConfig(animationType);
  
  // Merge animation config with props
  const motionProps = {
    ...props,
    ...animationConfig,
  };
  
  // Return appropriate motion component based on element type
  const Fallback = () => fallback || <div {...props}>{children}</div>;
  
  const MotionComponent = (() => {
    switch (as) {
      case 'header':
        return MotionHeader;
      case 'section':
        return MotionSection;
      case 'span':
        return MotionSpan;
      case 'div':
      default:
        return MotionDiv;
    }
  })();
  
  return (
    <Suspense fallback={<Fallback />}>
      <MotionComponent {...motionProps}>
        {children}
      </MotionComponent>
    </Suspense>
  );
}