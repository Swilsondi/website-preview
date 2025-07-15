import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * OptimizedImage - A component for optimized, responsive images with:
 * - Lazy loading
 * - Blur-up loading effect
 * - Responsive sizing
 * - Error handling
 * - Accessibility features
 * - Placeholder support
 * - WebP/AVIF format detection
 */
const OptimizedImage = ({
  src,
  alt = "",
  className,
  width,
  height,
  fill = false,
  priority = false,
  quality = 75,
  placeholder = "empty", // "empty", "blur", or "data:image/..." for base64
  blurDataURL,
  onLoad,
  onError,
  sizes = "100vw",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);
  const [supportsModernFormats, setSupportsModernFormats] = useState(null);

  // Check for modern image format support
  useEffect(() => {
    // Test if browser supports WebP
    const checkWebP = async () => {
      try {
        const webpSupport = document.createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') === 0;
          
        // Test if browser supports AVIF
        const avifSupport = document.createElement('canvas')
          .toDataURL('image/avif')
          .indexOf('data:image/avif') === 0;
          
        setSupportsModernFormats({
          webp: webpSupport,
          avif: avifSupport
        });
      } catch(e) {
        setSupportsModernFormats({
          webp: false,
          avif: false
        });
      }
    };
    
    checkWebP();
  }, []);

  // Handle intersection observer for lazy loading
  useEffect(() => {
    if (priority || !window.IntersectionObserver || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imgRef.current) {
              imgRef.current.src = src;
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      { rootMargin: "200px 0px" } // Start loading when within 200px of viewport
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, priority]);

  // Handle image load
  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
    
    // Mark the image as loaded for layout shift tracking
    if (window.performance && window.performance.mark) {
      window.performance.mark(`image-loaded-${src.split('/').pop()}`);
    }
  };

  // Handle image error
  const handleError = (e) => {
    setError(true);
    setIsLoaded(false);
    if (onError) onError(e);
    console.error(`Failed to load image: ${src}`);
  };

  // Convert the source URL to WebP/AVIF if supported
  const getOptimizedSrc = () => {
    if (!supportsModernFormats) return src;
    
    // If already a data URL or SVG, don't convert
    if (src.startsWith('data:') || src.endsWith('.svg')) return src;
    
    // Try to use modern formats based on browser support
    try {
      const url = new URL(src, window.location.origin);
      
      // Ensure the path is relative to the public directory
      if (!url.pathname.startsWith('/assets/')) {
        url.pathname = `/assets/${url.pathname}`;
      }
      
      // If URL already has format parameter, don't modify
      if (url.searchParams.has('format')) return src;
      
      if (supportsModernFormats.avif) {
        url.searchParams.set('format', 'avif');
        return url.toString();
      } else if (supportsModernFormats.webp) {
        url.searchParams.set('format', 'webp');
        return url.toString();
      }
    } catch (e) {
      // Invalid URL, just return original
    }
    
    return src;
  };

  // Determine placeholder style
  const getPlaceholderStyle = () => {
    if (placeholder === "blur" && blurDataURL) {
      return { 
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(20px)'
      };
    }
    return {};
  };

  // If there's an error, show fallback
  if (error) {
    return (
      <div 
        className={cn(
          "bg-gray-200 flex items-center justify-center text-gray-500",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={{ 
          width: fill ? '100%' : width, 
          height: fill ? '100%' : height,
          aspectRatio: width && height ? width / height : undefined
        }}
        role="img"
        aria-label={alt || "Image failed to load"}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-1/4 h-1/4 opacity-50"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      </div>
    );
  }

  const imageStyle = {
    ...getPlaceholderStyle(),
    objectFit: props.objectFit || 'cover',
    ...(fill ? { position: 'absolute', width: '100%', height: '100%' } : {})
  };

  return (
    <div 
      className={cn(
        "overflow-hidden bg-gray-100",
        fill ? "relative w-full h-full" : "",
        className
      )}
      style={{
        width: !fill ? width : undefined,
        height: !fill ? height : undefined,
        aspectRatio: !fill && width && height ? width / height : undefined,
        position: fill ? 'relative' : undefined
      }}
    >
      <img
        ref={imgRef}
        src={priority ? getOptimizedSrc() : placeholder === "blur" ? blurDataURL : ''}
        data-src={!priority ? getOptimizedSrc() : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          fill ? "absolute inset-0 w-full h-full" : "w-full h-auto"
        )}
        style={imageStyle}
        sizes={sizes}
        {...props}
      />
      
      {/* Show placeholder until image loads */}
      {!isLoaded && placeholder !== "empty" && placeholder !== "blur" && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            width: fill ? '100%' : width, 
            height: fill ? '100%' : height
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default OptimizedImage;