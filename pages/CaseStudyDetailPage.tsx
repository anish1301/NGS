import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES_DATA, PRODUCTS_DATA, SERVICES_DATA } from '../constants';
import Button from '../components/common/Button';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import { LightBulbIcon } from '../components/icons/LightBulbIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { ChartBarIcon } from '../components/icons/ChartBarIcon';
import { CodeBracketIcon } from '../components/icons/CodeBracketIcon';


const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold dark:text-gray-100">Case Study not found.</h2>
        <Link to="/case-studies">
          <Button variant="primary" className="mt-4">
            <ChevronLeftIcon className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS_DATA.filter(p => caseStudy.relatedProductIds?.includes(p.id));
  const relatedServices = SERVICES_DATA.filter(s => caseStudy.relatedServiceIds?.includes(s.id));

  const DetailSection: React.FC<{ title: string; content: string | string[]; icon: React.ReactNode }> = ({ title, content, icon }) => (
    <div className="mb-8 p-6 bg-gray-50 dark:bg-neutral-darker rounded-lg shadow">
      <div className="flex items-center mb-3">
        {icon}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 ml-3">{title}</h2>
      </div>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{content}</p>
      )}
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/case-studies" className="inline-flex items-center text-primary-DEFAULT dark:text-primary-light hover:underline mb-8 group">
          <ChevronLeftIcon className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform"/>
          Back to All Case Studies
        </Link>

        <article className="bg-white dark:bg-neutral-dark shadow-xl rounded-lg overflow-hidden">
          {caseStudy.imageUrl && (
            <img 
                src={caseStudy.imageUrl} 
                alt={caseStudy.title} 
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder_cs_detail/1200/400')}
            />
          )}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">{caseStudy.title}</h1>
            {caseStudy.clientName && <p className="text-lg text-primary-DEFAULT dark:text-primary-light font-semibold mb-1">Client: {caseStudy.clientName}</p>}
            {caseStudy.industry && <p className="text-md text-gray-600 dark:text-gray-300 mb-6">Industry: {caseStudy.industry}</p>}

            <DetailSection title="The Challenge" content={caseStudy.challenge} icon={<ShieldCheckIcon className="w-8 h-8 text-red-500 dark:text-red-400"/>} />
            <DetailSection title="Our Solution" content={caseStudy.solution} icon={<LightBulbIcon className="w-8 h-8 text-yellow-500 dark:text-yellow-400"/>} />
            <DetailSection title="Key Results" content={caseStudy.results} icon={<ChartBarIcon className="w-8 h-8 text-green-500 dark:text-green-400"/>} />

            {caseStudy.technologiesUsed && caseStudy.technologiesUsed.length > 0 && (
              <div className="mb-8 p-6 bg-gray-50 dark:bg-neutral-darker rounded-lg shadow">
                <div className="flex items-center mb-3">
                    <CodeBracketIcon className="w-8 h-8 text-blue-500 dark:text-blue-400"/>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 ml-3">Technologies Used</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologiesUsed.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {(relatedProducts.length > 0 || relatedServices.length > 0) && (
            <div className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Related Solutions</h2>
                {relatedProducts.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-100 mb-4">Related Products:</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                )}
                {relatedServices.length > 0 && (
                    <div>
                        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-100 mb-4">Related Services:</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedServices.map(s => <ServiceCard key={s.id} service={s} />)}
                        </div>
                    </div>
                )}
            </div>
        )}

        <div className="mt-12 text-center">
            <Link to="/contact">
                <Button variant="primary" size="lg">Discuss Your Project With Us</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;