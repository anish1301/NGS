import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { CASE_STUDIES_DATA } from '../constants';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">Our Success Stories</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Discover how NGSpurs has helped businesses like yours achieve remarkable results through innovative technology solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES_DATA.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;