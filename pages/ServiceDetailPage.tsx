import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA, PRODUCTS_DATA } from '../constants';
import Button from '../components/common/Button';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { CogIcon } from '../components/icons/CogIcon';
import ProductCard from '../components/ProductCard';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  if (!service) {
    return (
       <div className="text-center py-10">
        <h2 className="text-2xl font-semibold dark:text-gray-100">Service not found.</h2>
        <Link to="/services">
          <Button variant="primary" className="mt-4">
            <ChevronLeftIcon className="w-5 h-5 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS_DATA.filter(product => service.relatedProductIds?.includes(product.id));

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/services" className="inline-flex items-center text-secondary-DEFAULT dark:text-secondary-light hover:underline mb-6 group">
          <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"/>
          Back to All Services
        </Link>

        <div className="bg-white dark:bg-neutral-dark shadow-xl rounded-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                {service.imageUrl && (
                    <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md mb-6 md:mb-0"
                        onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder_detail_service/800/600')}
                    />
                )}
            </div>
            <div>
                <h1 className="text-4xl font-bold text-secondary-DEFAULT dark:text-gray-50 mb-3">{service.name}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{service.tagline}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">{service.longDescription}</p>
                 <Link to="/contact">
                    <Button variant="secondary" size="lg">Inquire About This Service</Button>
                </Link>
            </div>
          </div>

          {service.process && service.process.length > 0 && (
            <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Our Process</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-neutral-darker rounded-lg shadow">
                    <CogIcon className="w-10 h-10 text-secondary-DEFAULT dark:text-secondary-light mb-3"/>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-100 mb-1">Step {index + 1}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">Key Benefits</h2>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start p-3 bg-gray-50 dark:bg-neutral-darker rounded-md">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;