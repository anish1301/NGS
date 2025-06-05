import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, error, className = '', ...props }) => {
  const baseTextareaClasses = "mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-dark border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm transition-colors duration-300";
  const errorTextareaClasses = "border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500";
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${baseTextareaClasses} ${error ? errorTextareaClasses : ''} ${className}`}
        rows={4}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default Textarea;