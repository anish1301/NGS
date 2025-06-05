import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import Button from './common/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800">
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover" 
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder/600/400')}
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{product.name}</h3>
        <p className="text-primary-DEFAULT dark:text-primary-light font-medium text-sm mb-1">{product.tagline}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="mt-auto">
          <Link to={`/products/${product.id}`}>
            <Button variant="outline" size="md" className="w-full">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;