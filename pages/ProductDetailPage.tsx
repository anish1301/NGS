import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_DATA, SERVICES_DATA } from '../constants';
import Button from '../components/common/Button';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import ServiceCard from '../components/ServiceCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold dark:text-gray-100">Product not found.</h2>
        <Link to="/products">
          <Button variant="primary" className="mt-4">
            <ChevronLeftIcon className="w-5 h-5 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const relatedServices = SERVICES_DATA.filter(service => product.relatedServiceIds?.includes(service.id));

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-primary-DEFAULT dark:text-primary-light hover:underline mb-6 group">
          <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"/>
          Back to All Products
        </Link>

        <div className="bg-white dark:bg-neutral-dark shadow-xl rounded-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {product.imageUrl && (
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md mb-6 md:mb-0"
                    onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder_detail/800/600')}
                />
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary-DEFAULT dark:text-gray-50 mb-3">{product.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{product.tagline}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">{product.longDescription}</p>
              <Link to="/contact">
                <Button variant="primary" size="lg">Request a Demo</Button>
              </Link>
            </div>
          </div>
          
          {/* Features and Benefits Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Showcase Placeholder */}
          <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">Interactive Showcase</h2>
            <div className="bg-gray-100 dark:bg-neutral-darker p-8 rounded-lg text-center">
              <p className="text-gray-600 dark:text-gray-300">
                [Placeholder for interactive product demonstration, video, or detailed diagrams. 
                This section would feature dynamic content showcasing {product.name} in action.]
              </p>
              <img src={`https://picsum.photos/seed/${product.id}_showcase/800/450`} alt={`${product.name} Showcase`} className="mt-4 rounded-lg mx-auto shadow-lg" />
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Related Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;