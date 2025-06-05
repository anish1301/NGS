import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What industries does your company develop software products for?",
    answer: "We develop software solutions for a wide range of industries including Healthcare, Finance, Manufacturing, Retail, Education, and Technology. Our expertise spans across different sectors, allowing us to provide tailored solutions that address industry-specific challenges while incorporating best practices from diverse fields."
  },
  {
    question: "Is customer support and technical assistance included with your software?",
    answer: "Yes, we provide comprehensive customer support and technical assistance with all our software products. This includes 24/7 technical support, regular maintenance updates, dedicated account managers, and training resources. We also offer different support tiers to match your specific needs and budget."
  },
  {
    question: "Does your software integrate with other popular tools or platforms we already use?",
    answer: "Yes, our software solutions are built with integration in mind. We support integration with major platforms and tools including Salesforce, SAP, Microsoft 365, Google Workspace, and many other popular business applications. We can also develop custom integrations for your specific needs."
  },
  {
    question: "Can I customize the software to suit my business needs?",
    answer: "Absolutely! Our software solutions are highly customizable. We offer various levels of customization - from simple configuration changes to full-scale custom development. Our team works closely with you to understand your requirements and implement solutions that align perfectly with your business processes."
  },
  {
    question: "Can we deploy your products on cloud platforms?",
    answer: "Yes, all our software products are cloud-ready and can be deployed on major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. We also offer hybrid and on-premise deployment options to suit your specific requirements and compliance needs."
  }
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqData.map((faq, index) => (
        <div 
          key={index}
          className="rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-white dark:bg-neutral-dark shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-darker transition-all duration-200"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-left font-semibold text-gray-800 dark:text-gray-100 pr-4">
              {faq.question}
            </span>
            <ChevronDownIcon 
              className={`w-5 h-5 text-primary-DEFAULT transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <div 
            id={`faq-answer-${index}`}
            className={`grid transition-all duration-200 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <div className="overflow-hidden">
              <div className="p-4 bg-gray-50 dark:bg-neutral-darker">
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
