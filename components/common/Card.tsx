import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  const baseClasses = [
    'relative overflow-hidden rounded-lg transition-all duration-300',
    'bg-gradient-to-br from-teal-50 via-gray-50 to-gray-100',
    'dark:from-gray-800 dark:via-gray-800 dark:to-gray-900',
    'border border-gray-200 dark:border-gray-700',
    'text-gray-600 dark:text-gray-300',
    'shadow-sm hover:shadow-md p-4'
  ].join(' ');

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};
