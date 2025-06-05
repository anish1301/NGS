import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../constants';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-DEFAULT dark:text-primary-light hover:opacity-80 transition-opacity">
          NGSpurs
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-light
                transition-all duration-200 py-1 border-b-2 text-sm font-medium
                ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                  ? 'border-primary-DEFAULT dark:border-primary-light text-primary-DEFAULT dark:text-primary-light'
                  : 'border-transparent'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 
                     border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light/30"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-primary-DEFAULT" />
            )}
          </button>
          {/* Mobile Menu Button - Placeholder */}
          {/* <button className="md:hidden ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;