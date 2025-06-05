import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseStyles = "font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 dark:focus:ring-offset-neutral-darker transition-all duration-200 ease-in-out inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: 
      `bg-teal-600 text-gray-100 border border-transparent
       hover:bg-teal-700 focus:ring-2 focus:ring-teal-500/30
       dark:bg-teal-700 dark:hover:bg-teal-800
       dark:focus:ring-teal-400/20 shadow-sm`,
    secondary: 
      `bg-teal-500 text-gray-100 border border-transparent
       hover:bg-teal-600 focus:ring-2 focus:ring-teal-400/30
       dark:bg-teal-600 dark:hover:bg-teal-700
       dark:focus:ring-teal-300/20 shadow-sm`,
    outline: 
      `border border-teal-500/80 text-gray-600 bg-transparent
       hover:bg-teal-50 hover:border-teal-600
       dark:border-teal-400/70 dark:text-gray-300 
       dark:hover:bg-teal-900/10 dark:hover:border-teal-400
       focus:ring-teal-400/20 dark:focus:ring-teal-400/20`,
    ghost: 
      `text-gray-600 hover:bg-teal-50 bg-transparent
       dark:text-gray-300 dark:hover:bg-teal-900/10
       focus:ring-teal-400/20 dark:focus:ring-teal-400/20`,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5 min-w-[120px]',
    md: 'px-5 py-2.5 text-base gap-2 min-w-[160px]',
    lg: 'px-6 py-3 text-lg gap-2.5 min-w-[200px]',
  };

  const loadingStyles = isLoading ? 'opacity-75 cursor-not-allowed' : '';

  // Adjust icon colors based on the new variant styles
  const iconColorClass = () => {
    if (variant === 'primary' && !className?.includes('dark:text-white')) { // light mode primary
        return isLoading ? 'text-primary-dark' : 'text-primary-dark';
    }
    if (variant === 'secondary' && !className?.includes('dark:text-white')) { // light mode secondary
        return isLoading ? 'text-secondary-dark' : 'text-secondary-dark';
    }
    // For dark mode primary/secondary (which now have dark bg, light text) or other variants
    return isLoading ? 'text-white' : ''; // Default to white or inherit for others
  };


  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 ${iconColorClass()}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {leftIcon && !isLoading && <span className={`mr-2 ${iconColorClass()}`}>{leftIcon}</span>}
      <span className={`${isLoading ? iconColorClass() : ''}`}>{children}</span>
      {rightIcon && !isLoading && <span className={`ml-2 ${iconColorClass()}`}>{rightIcon}</span>}
    </button>
  );
};

export default Button;