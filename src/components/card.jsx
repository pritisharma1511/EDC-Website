import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  title,
  content,
  variant = 'primary',
  icon,
  iconPosition = 'topRight',
  customBackground,
  customTextColor,
  customPadding = 'p-6',
  customShadow,
  titleSize = 'text-xl',
  contentSize = 'text-base',
  iconSize = 'w-5 h-5',
  spacing = 'space-y-3',
  onClick,
  disabled = false,
  loading = false,
  children,
  header,
  body,
  footer,
  className = '',
  ...props
}) => {
  // Variant configurations
  const variants = {
    primary: {
      background: 'bg-gradient-to-br from-blue-600 to-blue-800',
      textColor: 'text-white',
      shadow: 'shadow-md',
      hover: 'hover:shadow-lg hover:scale-105'
    },
    secondary: {
      background: 'bg-gradient-to-br from-blue-400 to-blue-600',
      textColor: 'text-white',
      shadow: 'shadow-md',
      hover: 'hover:shadow-lg hover:scale-105'
    },
    outline: {
      background: 'bg-white',
      border: 'border-2 border-blue-200',
      textColor: 'text-gray-900',
      shadow: 'shadow-sm',
      hover: 'hover:shadow-md hover:border-blue-300'
    },
    ghost: {
      background: 'bg-transparent',
      border: 'border border-gray-200',
      textColor: 'text-gray-700',
      shadow: 'shadow-none',
      hover: 'hover:bg-gray-50 hover:shadow-sm'
    },
    elevated: {
      background: 'bg-white',
      textColor: 'text-gray-900',
      shadow: 'shadow-xl',
      hover: 'hover:shadow-2xl hover:-translate-y-1'
    }
  };

  // Icon position configurations
  const iconPositions = {
    topRight: 'absolute top-4 right-4',
    topLeft: 'absolute top-4 left-4',
    inline: 'inline-block mr-2'
  };

  // Get current variant config
  const currentVariant = variants[variant];

  // Build CSS classes
  const cardClasses = [
    // Base styles
    'relative rounded-xl transition-all duration-300 ease-out',
    
    // Background
    customBackground || currentVariant.background,
    
    // Border
    currentVariant.border || '',
    
    // Padding
    customPadding,
    
    // Shadow
    customShadow || currentVariant.shadow,
    
    // Text color
    customTextColor || currentVariant.textColor,
    
    // Hover effects
    !disabled && currentVariant.hover,
    
    // Focus styles
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    
    // Disabled state
    disabled && 'opacity-50 cursor-not-allowed',
    
    // Clickable cursor
    onClick && !disabled && 'cursor-pointer',
    
    // Custom classes
    className
  ].filter(Boolean).join(' ');

  // Framer Motion animation config
  const motionConfig = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
    transition: { duration: 0.3, ease: 'easeOut' },
    whileHover: !disabled ? { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } } : {},
    whileTap: !disabled ? { scale: 0.95 } : {}
  };

  // Get text colors based on variant for content elements
  const getContentColor = () => {
    if (customTextColor) return '';
    
    switch (variant) {
      case 'primary':
      case 'secondary':
        return 'text-blue-100';
      case 'outline':
      case 'elevated':
        return 'text-gray-700';
      case 'ghost':
        return 'text-gray-700';
      default:
        return 'text-blue-100';
    }
  };

  const getMetadataColor = () => {
    if (customTextColor) return '';
    
    switch (variant) {
      case 'primary':
      case 'secondary':
        return 'text-blue-200';
      case 'outline':
      case 'elevated':
        return 'text-gray-500';
      case 'ghost':
        return 'text-gray-500';
      default:
        return 'text-blue-200';
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <motion.div
      className={cardClasses}
      onClick={handleClick}
      tabIndex={onClick ? 0 : undefined}
      role="article"
      aria-labelledby={title ? "card-title" : undefined}
      aria-describedby={content ? "card-content" : undefined}
      {...motionConfig}
      {...props}
    >
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 rounded-xl flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Icon */}
      {icon && iconPosition !== 'inline' && (
        <div className={`${iconPositions[iconPosition]} ${iconSize} text-current`}>
          {icon}
        </div>
      )}

      <div className={spacing}>
        {/* Custom Header Slot */}
        {header && (
          <div className="card-header">
            {header}
          </div>
        )}

        {/* Default Header */}
        {!header && title && (
          <div className="card-header">
            <h3 
              id="card-title"
              className={`${titleSize} font-bold mb-3 ${customTextColor || currentVariant.textColor}`}
            >
              {icon && iconPosition === 'inline' && (
                <span className={`${iconPositions.inline} ${iconSize}`}>
                  {icon}
                </span>
              )}
              {title}
            </h3>
          </div>
        )}

        {/* Custom Body Slot */}
        {body && (
          <div className="card-body">
            {body}
          </div>
        )}

        {/* Default Body */}
        {!body && content && (
          <div className="card-body">
            <div 
              id="card-content"
              className={`${contentSize} font-normal leading-relaxed ${getContentColor()}`}
            >
              {content}
            </div>
          </div>
        )}

        {/* Children content */}
        {children && (
          <div className={`${contentSize} font-normal leading-relaxed ${getContentColor()}`}>
            {children}
          </div>
        )}

        {/* Custom Footer Slot */}
        {footer && (
          <div className={`card-footer mt-4 ${contentSize} font-medium ${getMetadataColor()}`}>
            {footer}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;