import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          w-full
          px-4
          py-2
          rounded-lg
          border
          bg-white
          dark:bg-neutral-800
          border-gray-300 
          dark:border-gray-600
          text-gray-900
          dark:text-gray-100
          placeholder-gray-500
          dark:placeholder-gray-400
          focus:ring-2
          focus:ring-primary/50
          focus:border-primary
          dark:focus:border-primary-light
          outline-none
          transition-colors
          duration-200
          ${error ? 'border-red-500 dark:border-red-400' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default Input;