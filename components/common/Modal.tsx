import React, { ReactNode } from 'react';
import { CloseIcon } from '../icons/CloseIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full h-full rounded-none',
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`bg-neutral-DEFAULT dark:bg-neutral-dark text-gray-900 dark:text-gray-100 rounded-lg shadow-xl overflow-hidden w-full ${sizeClasses[size]} flex flex-col max-h-[90vh] transition-all duration-300 transform animate-modal-appear`}
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        {title && (
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close modal"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="p-2 flex-grow overflow-y-auto"> {/* Changed p-4 to p-2 for chat */}
            {children}
        </div>
      </div>
      {/* 
        Keyframes for modal-appear are defined in index.html 
        @keyframes modal-appear {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out forwards;
        }
      */}
    </div>
  );
};

export default Modal;