import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MapPinIcon } from './icons/MapPinIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const Footer: React.FC = () => {
  const quickLinks = NAV_LINKS.filter(link => ['/', '/about-us', '/products', '/services', '/contact'].includes(link.path));
  
  // Placeholder social links - replace with actual URLs
  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' },
  ];

  return (
    <footer className="bg-neutral-dark dark:bg-neutral-darker text-gray-300 dark:text-gray-400 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* NGSpurs Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary-light mb-4">NGSpurs</h3>
            <p className="text-sm leading-relaxed">
              Driving innovation with intelligent IT solutions. We specialize in AI/ML, cloud services, and custom software development to empower your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary-light transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/case-studies" className="hover:text-primary-light transition-colors text-sm">
                    Case Studies
                  </Link>
                </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 text-primary-light flex-shrink-0" />
                <span>123 Tech Avenue, Jamshedpur </span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 mr-3 mt-0.5 text-primary-light flex-shrink-0" />
                <a href="mailto:info@ngspurs.com" className="hover:text-primary-light transition-colors">info@ngspurs.com</a>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-3 mt-0.5 text-primary-light flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-light transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
             <div className="mt-6">
                <h5 className="text-md font-semibold text-gray-200 mb-2">Follow Us</h5>
                <div className="flex space-x-4">
                    {socialLinks.map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors">
                           {social.name} {/* Replace with actual icons later if desired */}
                        </a>
                    ))}
                </div>
            </div>
          </div>
          
           {/* Placeholder for a small map or additional info */}
           <div className="hidden lg:block">
             <h4 className="text-lg font-semibold text-gray-100 mb-4">Our Focus</h4>
             <p className="text-sm">
                Delivering cutting-edge technology tailored to your business needs for optimal growth and efficiency.
             </p>
             {/* You could add a small embedded map or a call to action button here */}
           </div>

        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NGSpurs. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-policy" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="/terms-of-service" className="hover:text-primary-light transition-colors">Terms of Service</Link>
          </p>
          {/* <p className="mt-4 text-xs">Modernized for  NGSpurs Solutions</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;