import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import Button from './common/Button';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
       {caseStudy.imageUrl && (
         <img 
          src={caseStudy.imageUrl} 
          alt={caseStudy.title} 
          className="w-full h-48 object-cover"
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder/600/400')}
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{caseStudy.title}</h3>
        {caseStudy.clientName && <p className="text-sm text-primary-DEFAULT dark:text-primary-light font-medium mb-1">Client: {caseStudy.clientName}</p>}
        {caseStudy.industry && <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Industry: {caseStudy.industry}</p>}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">{caseStudy.challenge}</p>
        <div className="mt-auto">
          <Link to={`/case-studies/${caseStudy.id}`}>
             <Button variant="ghost" size="sm" className="w-full">
              Read Full Study
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;