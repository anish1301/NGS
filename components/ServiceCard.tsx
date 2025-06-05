import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import Button from './common/Button';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800">
      {service.imageUrl && (
         <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-48 object-cover"
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder/600/400')}
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">{service.name}</h3>
        <p className="text-gray-500 dark:text-gray-500 font-medium text-sm mb-1">{service.tagline}</p>
        <p className="text-gray-400 dark:text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
        <div className="mt-auto">
          <Link to={`/services/${service.id}`}>
            <Button 
              variant="outline" 
              size="md" 
              className="w-full"
            >
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;